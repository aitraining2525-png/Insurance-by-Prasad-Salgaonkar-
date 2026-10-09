import { QuoteInquiryForm, LicPlan, VehiclePlan } from '../types/insurance';
import { AGENT_INFO } from '../data/plansData';

export function formatWhatsAppMessage(
  form: QuoteInquiryForm,
  selectedLicPlans: LicPlan[],
  selectedVehiclePlans: VehiclePlan[]
): string {
  const lines: string[] = [];

  lines.push(`*📋 INSURANCE QUOTE & PLAN INQUIRY*`);
  lines.push(`Hello *Agent Prasad Salgaonkar*, I visited your Insurance Portal and would like to get quotes and plan illustrations for the following selected plans:`);
  lines.push(``);

  // Client info
  lines.push(`*👤 CLIENT DETAILS:*`);
  lines.push(`• Name: *${form.clientName || 'Not specified'}*`);
  lines.push(`• Contact Phone: *${form.clientPhone || 'Not specified'}*`);
  if (form.clientAge) lines.push(`• Age: *${form.clientAge} Years*`);
  if (form.clientCity) lines.push(`• City / Location: *${form.clientCity}*`);
  if (form.preferredContactTime) lines.push(`• Best Time to Call: *${form.preferredContactTime}*`);
  lines.push(``);

  // LIC Plans
  if (selectedLicPlans.length > 0) {
    lines.push(`*🛡️ SELECTED LIC LIFE INSURANCE PLANS (${selectedLicPlans.length}):*`);
    selectedLicPlans.forEach((plan, idx) => {
      lines.push(`${idx + 1}. *${plan.name} (Table No. ${plan.planNo})*`);
      lines.push(`   - Category: ${plan.subCategory.toUpperCase().replace('_', ' ')}`);
      lines.push(`   - Term: ${plan.policyTerm} | PPT: ${plan.premiumPayingTerm}`);
      lines.push(`   - Focus: ${plan.tagline}`);
    });

    if (form.licSumAssured || form.licBudget || form.licGoal) {
      lines.push(`\n*💼 LIC Coverage Preferences:*`);
      if (form.licSumAssured) lines.push(`• Desired Sum Assured: *${form.licSumAssured}*`);
      if (form.licBudget) lines.push(`• Monthly/Yearly Budget: *${form.licBudget}*`);
      if (form.licGoal) lines.push(`• Financial Goal: *${form.licGoal}*`);
    }
    lines.push(``);
  }

  // Vehicle Plans
  if (selectedVehiclePlans.length > 0) {
    lines.push(`*🚗 SELECTED MOTOR / VEHICLE INSURANCE PLANS (${selectedVehiclePlans.length}):*`);
    selectedVehiclePlans.forEach((plan, idx) => {
      lines.push(`${idx + 1}. *${plan.name}*`);
      lines.push(`   - Vehicle Type: ${plan.vehicleType}`);
      lines.push(`   - Coverage: ${plan.coverageType}`);
    });

    lines.push(`\n*🚘 Vehicle Information:*`);
    if (form.vehicleModel) lines.push(`• Vehicle Make & Model: *${form.vehicleModel}*`);
    if (form.vehicleYear) lines.push(`• Year of Manufacture / Registration: *${form.vehicleYear}*`);
    if (form.vehicleRegNo) lines.push(`• Vehicle Number: *${form.vehicleRegNo}*`);
    if (form.vehiclePolicyStatus) lines.push(`• Existing Policy Status: *${form.vehiclePolicyStatus}*`);
    if (form.vehicleNcb) lines.push(`• Existing NCB Discount: *${form.vehicleNcb}*`);

    if (form.selectedAddons && form.selectedAddons.length > 0) {
      lines.push(`• Requested Add-ons: *${form.selectedAddons.join(', ')}*`);
    }
    lines.push(``);
  }

  if (form.customNotes) {
    lines.push(`*📝 Additional Notes / Specific Queries:*`);
    lines.push(`"${form.customNotes}"`);
    lines.push(``);
  }

  lines.push(`Please share the official quotation, premium payment breakdown, and available discounts. Thank you!`);
  lines.push(``);
  lines.push(`_Sent to Insurance Agent Prasad Salgaonkar (+91 ${AGENT_INFO.phone})_`);

  return lines.join('\n');
}

export function generateWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${AGENT_INFO.phone}?text=${encoded}`;
}
