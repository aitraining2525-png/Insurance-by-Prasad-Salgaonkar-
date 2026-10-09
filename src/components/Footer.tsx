import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Heart, MapPin, Mail } from 'lucide-react';
import { AGENT_INFO } from '../data/plansData';

interface FooterProps {
  onSelectTab: (tab: 'lic' | 'vehicle') => void;
  onOpenCalculator: () => void;
  onOpenBasket: () => void;
  selectedCount: number;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenCalculator,
  onOpenBasket,
  selectedCount
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Agent Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-lg flex items-center justify-center">
                PS
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{AGENT_INFO.name}</h3>
                <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Insurance Agent</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Specialist in Life Insurance Corporation of India (LIC) wealth, pension, and child plans, plus multi-brand Two-Wheeler, Private Car, and Commercial Vehicle Insurance.
            </p>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 {AGENT_INFO.phone}</span>
              </a>

              <a
                href={AGENT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {AGENT_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Maharashtra & Pan-India Digital Service</span>
              </div>
            </div>
          </div>

          {/* Col 2: LIC Plans Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              LIC Life Insurance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC Jeevan Labh (Table 936)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC New Jeevan Anand (Table 915)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC Jeevan Umang (Table 945 - 8% Pension)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC Jeevan Utsav (Table 871 - 10% Return)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC Jeevan Tarun & Amritbaal (Child Plans)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC Tech Term & Yuva Term Insurance
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('lic')} className="hover:text-amber-300 transition text-left">
                  • LIC Jeevan Shanti & Akshay VII (Pension)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Vehicle Plans Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Vehicle Insurance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • Car Zero-Depreciation (Bumper to Bumper)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • Two-Wheeler Nil-Dep & Comprehensive
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • Electric Vehicle (EV) Battery Shield
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • Commercial Goods & Pickup Insurance
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • Ola / Uber Taxi & Passenger Carrier Policy
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • 24x7 Roadside Assistance & Engine Cover
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('vehicle')} className="hover:text-emerald-300 transition text-left">
                  • Instant Third Party (TP) Legal Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action & Dispatch */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              WhatsApp Proposal Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Click below to view all your selected insurance plans and submit them to Prasad Salgaonkar in one tap on WhatsApp.
            </p>

            <button
              onClick={onOpenBasket}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition flex items-center justify-center gap-2 shadow-md shadow-amber-400/10"
            >
              <span>Review & Submit Plans ({selectedCount})</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition border border-slate-700"
            >
              📊 Open Premium Calculator
            </button>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-slate-500 text-[11px] leading-relaxed space-y-2">
          <p>
            <strong>Disclaimer:</strong> Insurance is the subject matter of solicitation. Policy terms, bonuses, premium rates, and conditions are governed by the respective insurance corporation rules (Life Insurance Corporation of India and respective General Insurance Companies registered with IRDAI). All quotes and illustrations displayed on this advisory platform are indicative approximations based on standard tariffs. Official benefits and premium receipts will be issued upon proposal underwriting by Prasad Salgaonkar.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Prasad Salgaonkar - Insurance Agent. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              <span>Insurance Agent: <strong>Prasad Salgaonkar</strong> • Phone: <strong>+91 8550927882</strong></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
