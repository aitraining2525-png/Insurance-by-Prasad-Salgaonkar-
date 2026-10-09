import React from 'react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import { AGENT_INFO } from '../data/plansData';

interface NavbarProps {
  selectedCount: number;
  onOpenBasket: () => void;
  activeTab: 'lic' | 'vehicle';
  onSelectTab: (tab: 'lic' | 'vehicle') => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedCount,
  onOpenBasket,
  activeTab,
  onSelectTab,
  onOpenCalculator
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              <Award className="w-3 h-3" /> Insurance Agent
            </span>
            <span className="hidden sm:inline text-slate-200">
              IRDAI Licensed Life & General Insurance Agent
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Available 9:00 AM – 9:00 PM</span>
            </div>
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="flex items-center gap-1 text-white hover:text-amber-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{AGENT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Agent Branding */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-white ring-2 ring-blue-100">
              PS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {AGENT_INFO.name}
                </h1>
                <span title="Verified Insurance Agent">
                  <ShieldCheck className="w-5 h-5 text-blue-600 fill-blue-50" />
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <span className="font-semibold text-blue-900">Insurance Agent</span>
                <span className="text-slate-300">•</span>
                <span>LIC & Vehicle Insurance</span>
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <div className="hidden md:flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => onSelectTab('lic')}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'lic'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🛡️ LIC Life Insurance</span>
            </button>
            <button
              onClick={() => onSelectTab('vehicle')}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'vehicle'
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🚗 Vehicle Insurance</span>
            </button>
          </div>

          {/* Actions & Basket */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Calculator */}
            <button
              onClick={onOpenCalculator}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition border border-slate-200"
            >
              📊 Premium Calculator
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={`${AGENT_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Prasad Sir, I want to discuss insurance plans for my family/vehicle.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span className="hidden sm:inline">Chat with Prasad</span>
            </a>

            {/* Selected Plans Basket Trigger */}
            <button
              onClick={onOpenBasket}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/20 active:scale-95 transition"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Selected Plans</span>
              <span className="bg-slate-950 text-white text-xs font-black px-2 py-0.5 rounded-full min-w-5 text-center">
                {selectedCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden border-t border-slate-100 py-2 gap-2">
          <button
            onClick={() => onSelectTab('lic')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'lic'
                ? 'bg-blue-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            🛡️ LIC Life Plans
          </button>
          <button
            onClick={() => onSelectTab('vehicle')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'vehicle'
                ? 'bg-blue-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            🚗 Vehicle Plans
          </button>
        </div>
      </div>
    </header>
  );
};
