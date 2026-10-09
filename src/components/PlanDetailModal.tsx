import React, { useState } from 'react';
import { 
  X, Check, ShieldCheck, Award, Sparkles, MessageSquare, 
  HelpCircle, ChevronRight, Calculator, IndianRupee, Car 
} from 'lucide-react';
import { LicPlan, VehiclePlan } from '../types/insurance';
import { AGENT_INFO } from '../data/plansData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

interface PlanDetailModalProps {
  plan: LicPlan | VehiclePlan | null;
  onClose: () => void;
  isSelected: boolean;
  onToggleSelect: () => void;
}

export const PlanDetailModal: React.FC<PlanDetailModalProps> = ({
  plan,
  onClose,
  isSelected,
  onToggleSelect
}) => {
  // Calculator states for LIC
  const [calcAge, setCalcAge] = useState(30);
  const [calcSumAssured, setCalcSumAssured] = useState(1000000); // 10 Lakhs

  // Calculator states for Vehicle
  const [vehicleIdv, setVehicleIdv] = useState(800000);
  const [vehicleNcb, setVehicleNcb] = useState(35);
  const [includeZeroDep, setIncludeZeroDep] = useState(true);

  if (!plan) return null;

  const isLic = plan.category === 'lic';
  const licPlan = isLic ? (plan as LicPlan) : null;
  const vehiclePlan = !isLic ? (plan as VehiclePlan) : null;

  // Approximate illustrative calculation for LIC
  const approxAnnualPremium = licPlan
    ? Math.round((calcSumAssured * 0.048 * (1 + (calcAge - 25) * 0.015)))
    : 0;
  const approxMonthly = Math.round(approxAnnualPremium / 12);
  const approxMaturity = licPlan
    ? Math.round(calcSumAssured * 2.2)
    : 0;

  // Approximate illustrative calculation for Vehicle
  const approxVehicleOd = vehiclePlan
    ? Math.round((vehicleIdv * 0.024) * (1 - vehicleNcb / 100) + (includeZeroDep ? vehicleIdv * 0.007 : 0))
    : 0;

  const handleQuickWhatsAppInquiry = () => {
    let msg = ``;
    if (isLic && licPlan) {
      msg = `*Hello Agent Prasad Salgaonkar*, I am interested in *${licPlan.name} (Table ${licPlan.planNo})*.\n\n• My Age: ${calcAge} Years\n• Desired Sum Assured: ₹${calcSumAssured.toLocaleString('en-IN')}\n• Estimated Annual Premium: ~₹${approxAnnualPremium.toLocaleString('en-IN')}\n\nPlease send me the detailed official LIC quotation and benefit illustration on WhatsApp.`;
    } else if (vehiclePlan) {
      msg = `*Hello Agent Prasad Salgaonkar*, I am inquiring about *${vehiclePlan.name}* (${vehiclePlan.vehicleType}).\n\n• Vehicle Approx IDV: ₹${vehicleIdv.toLocaleString('en-IN')}\n• Current NCB Discount: ${vehicleNcb}%\n• Zero-Depreciation Addon: ${includeZeroDep ? 'Yes' : 'No'}\n\nPlease share the best insurer quotes and cashless garage details.`;
    }
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className={`p-6 sm:p-7 text-white shrink-0 ${
          isLic 
            ? 'bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900' 
            : 'bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900'
        }`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                {isLic && licPlan && (
                  <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded uppercase">
                    LIC Table {licPlan.planNo}
                  </span>
                )}
                {vehiclePlan && (
                  <span className="bg-emerald-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded uppercase">
                    {vehiclePlan.coverageType}
                  </span>
                )}
                <span className="bg-white/15 text-white text-xs font-semibold px-2 py-0.5 rounded capitalize">
                  {plan.subCategory.replace('_', ' ')}
                </span>
                {plan.badge && (
                  <span className="bg-white/20 text-amber-200 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {plan.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{plan.name}</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">{plan.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition shrink-0"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Overview text */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Plan Overview & Concept
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {plan.description}
            </p>
          </div>

          {/* LIC Specific Parameters */}
          {isLic && licPlan && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">Entry Age</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  {licPlan.minAge} to {licPlan.maxAge} Yrs
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">Policy Term</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  {licPlan.policyTerm}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">Paying Term (PPT)</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  {licPlan.premiumPayingTerm}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">Min Sum Assured</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  ₹{licPlan.minSumAssured.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          )}

          {/* Vehicle Specific Parameters */}
          {vehiclePlan && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Vehicle Type</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  {vehiclePlan.vehicleType}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Ideal For</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  {vehiclePlan.idealFor}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Claim Network</span>
                <span className="text-sm font-extrabold text-slate-900 mt-0.5 block">
                  {vehiclePlan.claimSupport}
                </span>
              </div>
            </div>
          )}

          {/* Comprehensive Benefits List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Plan Benefits & Features:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {plan.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span className="text-slate-800 font-medium leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator Section */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  {isLic ? 'Interactive LIC Return & Premium Estimator' : 'Vehicle Premium Estimation'}
                </h4>
              </div>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-400/30">
                Illustrative
              </span>
            </div>

            {isLic && licPlan && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Your Age: <span className="text-amber-400 font-bold">{calcAge} Years</span>
                  </label>
                  <input
                    type="range"
                    min={Math.max(18, licPlan.minAge)}
                    max={Math.min(55, licPlan.maxAge)}
                    value={calcAge}
                    onChange={(e) => setCalcAge(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>{Math.max(18, licPlan.minAge)} Yrs</span>
                    <span>{Math.min(55, licPlan.maxAge)} Yrs</span>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Sum Assured: <span className="text-amber-400 font-bold">₹{(calcSumAssured / 100000).toFixed(1)} Lakhs</span>
                  </label>
                  <input
                    type="range"
                    min={200000}
                    max={5000000}
                    step={100000}
                    value={calcSumAssured}
                    onChange={(e) => setCalcSumAssured(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹2 Lakhs</span>
                    <span>₹50 Lakhs</span>
                  </div>
                </div>

                <div className="sm:col-span-2 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-medium">Monthly Approx</p>
                    <p className="text-sm font-black text-white mt-0.5">₹{approxMonthly.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-medium">Annual Premium</p>
                    <p className="text-sm font-black text-amber-300 mt-0.5">₹{approxAnnualPremium.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400 font-medium">Est. Maturity Payout</p>
                    <p className="text-sm font-black text-emerald-400 mt-0.5">₹{approxMaturity.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>
            )}

            {vehiclePlan && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Vehicle IDV: <span className="text-emerald-400 font-bold">₹{(vehicleIdv / 100000).toFixed(1)} Lakhs</span>
                  </label>
                  <input
                    type="range"
                    min={100000}
                    max={2500000}
                    step={50000}
                    value={vehicleIdv}
                    onChange={(e) => setVehicleIdv(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    NCB Discount: <span className="text-emerald-400 font-bold">{vehicleNcb}%</span>
                  </label>
                  <select
                    value={vehicleNcb}
                    onChange={(e) => setVehicleNcb(Number(e.target.value))}
                    className="w-full px-2 py-1.5 rounded-lg bg-slate-800 text-white border border-slate-700"
                  >
                    <option value={0}>0% NCB</option>
                    <option value={20}>20% NCB</option>
                    <option value={25}>25% NCB</option>
                    <option value={35}>35% NCB</option>
                    <option value={45}>45% NCB</option>
                    <option value={50}>50% NCB (Max Discount)</option>
                  </select>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 text-xs">Estimated Own Damage Premium:</span>
                  <span className="text-lg font-black text-emerald-300">~₹{approxVehicleOd.toLocaleString('en-IN')}/year</span>
                </div>
              </div>
            )}
          </div>

          {/* Riders / Addons & Tax Benefits */}
          {isLic && licPlan && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                💰 <strong>Tax Benefits:</strong> {licPlan.taxBenefit}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Available Optional Riders:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {licPlan.ridersAvailable.map((rider, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg border border-slate-200">
                      + {rider}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {vehiclePlan && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Eligible Discounts:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {vehiclePlan.discountFeatures.map((feat, i) => (
                  <span key={i} className="text-xs bg-emerald-50 text-emerald-900 font-medium px-2.5 py-1 rounded-lg border border-emerald-200">
                    🏷️ {feat}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-200 bg-slate-50 shrink-0 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onToggleSelect}
            className={`py-3 px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition active:scale-95 ${
              isSelected
                ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                : 'bg-blue-900 text-white shadow-sm hover:bg-blue-950'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-4 h-4" />
                <span>Selected for WhatsApp Submission</span>
              </>
            ) : (
              <>
                <span>+ Select Plan for WhatsApp Submission</span>
              </>
            )}
          </button>

          <button
            onClick={handleQuickWhatsAppInquiry}
            className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition flex items-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Send Direct WhatsApp Inquiry ({AGENT_INFO.phone})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
