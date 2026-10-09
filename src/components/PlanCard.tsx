import React from 'react';
import { Check, Plus, Shield, ArrowRight, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { LicPlan, VehiclePlan } from '../types/insurance';

interface LicPlanCardProps {
  plan: LicPlan;
  isSelected: boolean;
  onToggleSelect: () => void;
  onViewDetails: () => void;
}

export const LicPlanCard: React.FC<LicPlanCardProps> = ({
  plan,
  isSelected,
  onToggleSelect,
  onViewDetails
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl ${
        isSelected
          ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md bg-blue-50/20'
          : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
      }`}
    >
      {/* Top Banner / Badge */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-md text-xs font-black tracking-wider uppercase bg-blue-900 text-amber-300">
              Table {plan.planNo}
            </span>
            {plan.badge && (
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300/50 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                {plan.badge}
              </span>
            )}
          </div>
          
          <span className="text-[11px] font-semibold text-slate-500 capitalize bg-slate-100 px-2 py-0.5 rounded">
            {plan.subCategory.replace('_', ' ')}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition tracking-tight">
          {plan.name}
        </h3>
        <p className="text-xs font-medium text-slate-600 mt-1 line-clamp-2">
          {plan.tagline}
        </p>

        {/* Key Metrics Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50/90 border border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] font-semibold uppercase">Policy Term</span>
            <span className="font-bold text-slate-800">{plan.policyTerm}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] font-semibold uppercase">Premium Paying</span>
            <span className="font-bold text-slate-800">{plan.premiumPayingTerm}</span>
          </div>
          <div className="col-span-2 pt-1 border-t border-slate-200/60 mt-1">
            <span className="text-slate-400 block text-[10px] font-semibold uppercase">Min. Sum Assured</span>
            <span className="font-bold text-blue-900">₹{plan.minSumAssured.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Bullet Benefits */}
        <div className="mt-4 space-y-2">
          <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Key Plan Highlights:</p>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {plan.keyBenefits.slice(0, 3).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tax Note */}
        <div className="mt-3.5 p-2 rounded-lg bg-emerald-50/80 border border-emerald-100 text-[11px] text-emerald-800 font-medium">
          🌱 {plan.taxBenefit}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl flex items-center gap-2">
        <button
          onClick={onToggleSelect}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition active:scale-95 ${
            isSelected
              ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
              : 'bg-blue-800 text-white shadow-sm hover:bg-blue-900'
          }`}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4" />
              <span>Selected for WhatsApp</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Select Plan</span>
            </>
          )}
        </button>

        <button
          onClick={onViewDetails}
          className="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition"
          title="View full benefits, eligibility and calculator"
        >
          Details
        </button>
      </div>
    </div>
  );
};

interface VehiclePlanCardProps {
  plan: VehiclePlan;
  isSelected: boolean;
  onToggleSelect: () => void;
  onViewDetails: () => void;
}

export const VehiclePlanCard: React.FC<VehiclePlanCardProps> = ({
  plan,
  isSelected,
  onToggleSelect,
  onViewDetails
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl ${
        isSelected
          ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-md bg-emerald-50/15'
          : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
      }`}
    >
      {/* Top Banner / Badge */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-md text-xs font-black tracking-wider uppercase bg-slate-900 text-emerald-400">
              {plan.subCategory.replace('_', ' ')}
            </span>
            {plan.badge && (
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-950 border border-emerald-300/50 flex items-center gap-1">
                <Award className="w-3 h-3 text-emerald-700" />
                {plan.badge}
              </span>
            )}
          </div>
          
          <span className="text-[11px] font-semibold text-slate-500 capitalize bg-slate-100 px-2 py-0.5 rounded">
            Motor Cover
          </span>
        </div>

        {/* Title & Vehicle type */}
        <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition tracking-tight">
          {plan.name}
        </h3>
        <p className="text-xs font-semibold text-emerald-700 mt-0.5">
          {plan.vehicleType}
        </p>
        <p className="text-xs font-medium text-slate-600 mt-1 line-clamp-2">
          {plan.tagline}
        </p>

        {/* Highlights */}
        <div className="mt-4 space-y-2">
          <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Key Coverage Advantages:</p>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {plan.keyBenefits.slice(0, 3).map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Add-ons tags */}
        <div className="mt-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Recommended Add-ons:</p>
          <div className="flex flex-wrap gap-1">
            {plan.recommendedAddons.slice(0, 3).map((addon, i) => (
              <span key={i} className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md border border-slate-200">
                {addon}
              </span>
            ))}
          </div>
        </div>

        {/* Claim Support Note */}
        <div className="mt-3.5 p-2 rounded-lg bg-blue-50/80 border border-blue-100 text-[11px] text-blue-900 font-medium">
          🛡️ {plan.claimSupport}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-slate-50/50 rounded-b-2xl flex items-center gap-2">
        <button
          onClick={onToggleSelect}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition active:scale-95 ${
            isSelected
              ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
              : 'bg-emerald-700 text-white shadow-sm hover:bg-emerald-800'
          }`}
        >
          {isSelected ? (
            <>
              <Check className="w-4 h-4" />
              <span>Selected for WhatsApp</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Select Plan</span>
            </>
          )}
        </button>

        <button
          onClick={onViewDetails}
          className="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition"
          title="View full benefits, eligibility and calculator"
        >
          Details
        </button>
      </div>
    </div>
  );
};
