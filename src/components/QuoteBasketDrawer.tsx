import React, { useState } from 'react';
import { 
  X, Trash2, Send, MessageSquare, Phone, Copy, Check, FileText, 
  ShieldCheck, Car, Heart, Plus, Sparkles, AlertCircle 
} from 'lucide-react';
import { LicPlan, VehiclePlan, QuoteInquiryForm } from '../types/insurance';
import { AGENT_INFO, VEHICLE_ADDONS } from '../data/plansData';
import { formatWhatsAppMessage, generateWhatsAppLink } from '../utils/whatsappHelper';

interface QuoteBasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLicPlans: LicPlan[];
  selectedVehiclePlans: VehiclePlan[];
  onRemoveLicPlan: (id: string) => void;
  onRemoveVehiclePlan: (id: string) => void;
  onAddQuickPopular: () => void;
}

export const QuoteBasketDrawer: React.FC<QuoteBasketDrawerProps> = ({
  isOpen,
  onClose,
  selectedLicPlans,
  selectedVehiclePlans,
  onRemoveLicPlan,
  onRemoveVehiclePlan,
  onAddQuickPopular
}) => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<QuoteInquiryForm>({
    clientName: '',
    clientPhone: '',
    clientCity: '',
    clientAge: '',
    preferredContactTime: 'Anytime / Immediate',
    licSumAssured: '₹10,00,000 (10 Lakhs)',
    licBudget: '₹5,000 / Month',
    licGoal: 'Wealth Creation & High Guaranteed Return',
    vehicleModel: '',
    vehicleYear: '2023',
    vehicleRegNo: '',
    vehiclePolicyStatus: 'Expiring Soon (within 30 days)',
    vehicleNcb: '20% - 35% NCB',
    selectedAddons: [
      'Zero Depreciation (Bumper-to-Bumper)',
      'Engine & Gearbox Protection',
      '24x7 Roadside Assistance (RSA)'
    ],
    customNotes: ''
  });

  const [activeTab, setActiveTab] = useState<'plans' | 'form' | 'preview'>('plans');

  if (!isOpen) return null;

  const totalPlansCount = selectedLicPlans.length + selectedVehiclePlans.length;
  const whatsappMessage = formatWhatsAppMessage(form, selectedLicPlans, selectedVehiclePlans);
  const whatsappUrl = generateWhatsAppLink(whatsappMessage);

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleAddon = (addonName: string) => {
    const current = form.selectedAddons || [];
    if (current.includes(addonName)) {
      setForm({ ...form, selectedAddons: current.filter(a => a !== addonName) });
    } else {
      setForm({ ...form, selectedAddons: [...current, addonName] });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white shadow-2xl flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 shrink-0 flex items-start justify-between border-b border-blue-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-2 py-0.5 rounded uppercase">
                WhatsApp Dispatch
              </span>
              <span className="text-xs text-blue-200">Official Inquiry Desk</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Send Quotation to Agent {AGENT_INFO.name}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              WhatsApp: <span className="font-bold text-amber-300">+91 {AGENT_INFO.phone}</span> • Insurance Agent
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
            title="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('plans')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'plans'
                ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>1. Review Selected Plans</span>
            <span className="bg-blue-100 text-blue-900 text-[10px] px-1.5 py-0.5 rounded-full font-black">
              {totalPlansCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'form'
                ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>2. Your Details & Budget</span>
          </button>

          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'preview'
                ? 'bg-white text-blue-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>3. WhatsApp Preview</span>
          </button>
        </div>

        {/* Main Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: Selected Plans */}
          {activeTab === 'plans' && (
            <div className="space-y-5">
              {totalPlansCount === 0 ? (
                <div className="text-center py-10 px-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">No Plans Selected Yet</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    You can browse and select any LIC or Vehicle insurance plans, or click below to quickly load our top-recommended package.
                  </p>
                  <button
                    onClick={onAddQuickPopular}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-800 hover:bg-blue-900 transition shadow-sm"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Add Top Seller Bundle (Jeevan Labh + Car Zero-Dep)</span>
                  </button>
                </div>
              ) : (
                <>
                  {/* LIC List */}
                  {selectedLicPlans.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          <span>LIC Life Insurance Plans ({selectedLicPlans.length})</span>
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {selectedLicPlans.map((plan) => (
                          <div
                            key={plan.id}
                            className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/40 flex items-center justify-between gap-3"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="bg-blue-900 text-amber-300 font-bold text-[10px] px-1.5 py-0.5 rounded">
                                  Table {plan.planNo}
                                </span>
                                <h5 className="text-sm font-bold text-slate-900">{plan.name}</h5>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">
                                Term: {plan.policyTerm} • PPT: {plan.premiumPayingTerm}
                              </p>
                            </div>
                            <button
                              onClick={() => onRemoveLicPlan(plan.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                              title="Remove from list"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vehicle List */}
                  {selectedVehiclePlans.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                          <Car className="w-4 h-4 text-emerald-600" />
                          <span>Vehicle Insurance Plans ({selectedVehiclePlans.length})</span>
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {selectedVehiclePlans.map((plan) => (
                          <div
                            key={plan.id}
                            className="p-3.5 rounded-xl border border-emerald-100 bg-emerald-50/40 flex items-center justify-between gap-3"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded uppercase">
                                {plan.subCategory.replace('_', ' ')}
                              </span>
                              <h5 className="text-sm font-bold text-slate-900 mt-1">{plan.name}</h5>
                              <p className="text-xs text-slate-500 mt-0.5">
                                Type: {plan.vehicleType}
                              </p>
                            </div>
                            <button
                              onClick={() => onRemoveVehiclePlan(plan.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                              title="Remove from list"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span>Ready to proceed with {totalPlansCount} selected plans?</span>
                    <button
                      onClick={() => setActiveTab('form')}
                      className="font-bold text-blue-700 hover:text-blue-900 underline"
                    >
                      Fill Contact & Budget Details →
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 2: Form */}
          {activeTab === 'form' && (
            <div className="space-y-5">
              {/* Contact Info Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span>Your Contact Details</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kulkarni"
                      value={form.clientName}
                      onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={form.clientPhone}
                      onChange={(e) => setForm({ ...form, clientPhone: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Age of Insured (Years)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 32"
                      value={form.clientAge}
                      onChange={(e) => setForm({ ...form, clientAge: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pune, Mumbai, Kolhapur"
                      value={form.clientCity}
                      onChange={(e) => setForm({ ...form, clientCity: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Best Time to Call
                  </label>
                  <select
                    value={form.preferredContactTime}
                    onChange={(e) => setForm({ ...form, preferredContactTime: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Anytime / Immediate">Anytime / Immediate</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    <option value="WhatsApp Chat Only">WhatsApp Chat Only (Do not call)</option>
                  </select>
                </div>
              </div>

              {/* LIC Specific Section */}
              {selectedLicPlans.length > 0 && (
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                      LIC Life Plan Preferences
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Desired Sum Assured
                      </label>
                      <select
                        value={form.licSumAssured}
                        onChange={(e) => setForm({ ...form, licSumAssured: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="₹2,00,000 (2 Lakhs)">₹2 Lakhs</option>
                        <option value="₹5,00,000 (5 Lakhs)">₹5 Lakhs</option>
                        <option value="₹10,00,000 (10 Lakhs)">₹10 Lakhs (Popular)</option>
                        <option value="₹25,00,000 (25 Lakhs)">₹25 Lakhs</option>
                        <option value="₹50,00,000 (50 Lakhs)">₹50 Lakhs</option>
                        <option value="₹1 Crore+">₹1 Crore & Above (HNI)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Investment Budget
                      </label>
                      <select
                        value={form.licBudget}
                        onChange={(e) => setForm({ ...form, licBudget: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="₹2,000 - ₹3,000 / Month">₹2,000 - ₹3,000 / Month</option>
                        <option value="₹5,000 / Month">₹5,000 / Month (Approx ₹60,000/yr)</option>
                        <option value="₹10,000 / Month">₹10,000 / Month</option>
                        <option value="₹1,00,000 - ₹1,50,000 / Year (Max 80C)">₹1.5 Lakh / Year (Max 80C)</option>
                        <option value="One-time Lump Sum Deposit">One-time Lump Sum (Single Pay)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Financial Goal
                    </label>
                    <select
                      value={form.licGoal}
                      onChange={(e) => setForm({ ...form, licGoal: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Wealth Creation & High Guaranteed Return">Wealth Creation & High Guaranteed Return</option>
                      <option value="Child Higher Education & Marriage Fund">Child Higher Education & Marriage Fund</option>
                      <option value="Retirement Regular Pension Income">Retirement Regular Pension Income</option>
                      <option value="High Pure Term Family Security">High Pure Term Family Security</option>
                      <option value="Income Tax Exemption under Sec 80C & 10(10D)">Income Tax Exemption under Sec 80C & 10(10D)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Vehicle Specific Section */}
              {selectedVehiclePlans.length > 0 && (
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-emerald-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                      Vehicle & Motor Details
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Creta SX / Activa 6G / Swift VXi"
                        value={form.vehicleModel}
                        onChange={(e) => setForm({ ...form, vehicleModel: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mfg / Registration Year
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2023 or Brand New"
                        value={form.vehicleYear}
                        onChange={(e) => setForm({ ...form, vehicleYear: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Vehicle Registration No. (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. MH 12 AB 1234"
                        value={form.vehicleRegNo}
                        onChange={(e) => setForm({ ...form, vehicleRegNo: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Current Policy Status
                      </label>
                      <select
                        value={form.vehiclePolicyStatus}
                        onChange={(e) => setForm({ ...form, vehiclePolicyStatus: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Expiring Soon (within 30 days)">Expiring Soon (within 30 days)</option>
                        <option value="Already Expired (Break-in)">Already Expired (Break-in)</option>
                        <option value="Brand New Vehicle Delivery">Brand New Vehicle Showroom Delivery</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Existing No Claim Bonus (NCB %)
                      </label>
                      <select
                        value={form.vehicleNcb}
                        onChange={(e) => setForm({ ...form, vehicleNcb: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="0% (New Vehicle or Claimed last year)">0% (New Vehicle / Claimed)</option>
                        <option value="20% NCB">20% NCB (1 Claim-Free Year)</option>
                        <option value="25% NCB">25% NCB (2 Claim-Free Years)</option>
                        <option value="35% NCB">35% NCB (3 Claim-Free Years)</option>
                        <option value="45% NCB">45% NCB (4 Claim-Free Years)</option>
                        <option value="50% NCB (Maximum Discount)">50% NCB (Maximum 5 Claim-Free Years)</option>
                      </select>
                    </div>
                  </div>

                  {/* Add-ons checkboxes */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-slate-800 mb-1.5">
                      Included Motor Add-on Requests:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {VEHICLE_ADDONS.slice(0, 6).map((addon) => {
                        const checked = (form.selectedAddons || []).includes(addon.name);
                        return (
                          <label
                            key={addon.id}
                            onClick={() => toggleAddon(addon.name)}
                            className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium cursor-pointer transition border ${
                              checked
                                ? 'bg-emerald-100/70 border-emerald-300 text-emerald-950 font-semibold'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => {}}
                              className="rounded text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="truncate">{addon.name}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Questions or Requirements for Agent Prasad Salgaonkar
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Please quote with tax saving calculation and compare 16-year vs 20-year term..."
                  value={form.customNotes}
                  onChange={(e) => setForm({ ...form, customNotes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                <span>The message below will be sent to Prasad Salgaonkar via WhatsApp:</span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-900"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto border border-slate-800">
                {whatsappMessage}
              </div>
            </div>
          )}

        </div>

        {/* Sticky Action Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 shrink-0 space-y-2.5">
          {totalPlansCount === 0 ? (
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2">Please select at least 1 plan to submit to WhatsApp.</p>
              <button
                onClick={onAddQuickPopular}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-blue-900 bg-blue-100 hover:bg-blue-200 transition"
              >
                + Auto-Select Popular LIC & Car Plans
              </button>
            </div>
          ) : (
            <>
              {/* PRIMARY SUBMIT TO WHATSAPP BUTTON */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-400 hover:from-emerald-300 hover:to-green-300 shadow-lg shadow-emerald-500/25 active:scale-[0.99] transition flex items-center justify-center gap-2.5 text-base sm:text-lg uppercase tracking-wide"
              >
                <MessageSquare className="w-6 h-6 fill-slate-950" />
                <span>Submit to Agent WhatsApp ({AGENT_INFO.phone})</span>
              </a>

              {/* Secondary Options */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={handleCopy}
                  className="py-2.5 px-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Message!' : 'Copy Inquiry Text'}</span>
                </button>

                <a
                  href={`tel:${AGENT_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call {AGENT_INFO.phone}</span>
                </a>
              </div>
            </>
          )}

          <p className="text-[11px] text-center text-slate-400">
            Clicking submit opens WhatsApp with your pre-filled inquiry. Agent Prasad Salgaonkar will respond with official quotations & benefit charts.
          </p>
        </div>

      </div>
    </div>
  );
};
