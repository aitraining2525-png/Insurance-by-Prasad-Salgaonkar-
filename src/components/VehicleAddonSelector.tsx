import React from 'react';
import { ShieldCheck, Plus, Check, Info } from 'lucide-react';
import { VEHICLE_ADDONS } from '../data/plansData';

interface VehicleAddonSelectorProps {
  selectedAddons: string[];
  onToggleAddon: (addonName: string) => void;
  onOpenBasket: () => void;
}

export const VehicleAddonSelector: React.FC<VehicleAddonSelectorProps> = ({
  selectedAddons,
  onToggleAddon,
  onOpenBasket
}) => {
  return (
    <section className="py-12 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Essential Motor Protection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Motor Insurance Add-on Covers & Riders
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-normal">
            Standard vehicle policies only cover partial damage. Add these essential riders to protect yourself against heavy out-of-pocket bills during an accident or breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VEHICLE_ADDONS.map((addon) => {
            const isSelected = selectedAddons.includes(addon.name);

            return (
              <div
                key={addon.id}
                onClick={() => onToggleAddon(addon.name)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {addon.name}
                    </h3>
                    {addon.tag && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 shrink-0">
                        {addon.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {isSelected ? 'Included in Request' : 'Click to include'}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedAddons.length > 0 && (
          <div className="mt-8 p-4 rounded-2xl bg-white border border-emerald-300 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                {selectedAddons.length} Motor Add-ons selected for WhatsApp quote inquiry.
              </p>
            </div>
            <button
              onClick={onOpenBasket}
              className="py-2 px-4 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
            >
              Submit in WhatsApp Inquiry →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
