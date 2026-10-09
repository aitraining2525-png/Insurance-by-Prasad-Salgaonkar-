import React from 'react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Star, Zap, Users, Award, FileText } from 'lucide-react';
import { AGENT_INFO } from '../data/plansData';

interface HeroProps {
  activeTab: 'lic' | 'vehicle';
  onSelectTab: (tab: 'lic' | 'vehicle') => void;
  licCount: number;
  vehicleCount: number;
  onOpenBasket: () => void;
  selectedCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  activeTab,
  onSelectTab,
  licCount,
  vehicleCount,
  onOpenBasket,
  selectedCount
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/50">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Advisor Intro & Headings */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Insurance Agent Portal</span>
              <span className="text-blue-300">•</span>
              <span className="text-amber-300">100% Claim Assistance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Protect What Matters Most with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
                Agent {AGENT_INFO.name}
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Select your required <strong>LIC Life Insurance</strong> policies and <strong>Vehicle Insurance</strong> covers below. Calculate estimated quotes and click <strong>Submit</strong> to instantly send your selected plans directly to Agent Prasad Salgaonkar’s personal WhatsApp.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={AGENT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>WhatsApp: {AGENT_INFO.phone}</span>
              </a>

              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition text-sm sm:text-base backdrop-blur-xs"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {AGENT_INFO.displayPhone}</span>
              </a>

              {selectedCount > 0 && (
                <button
                  onClick={onOpenBasket}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition text-sm sm:text-base shadow-lg shadow-amber-400/20"
                >
                  <FileText className="w-5 h-5" />
                  <span>Submit ({selectedCount} Selected)</span>
                </button>
              )}
            </div>

            {/* Credibility Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Advisory Trust</p>
                  <p className="text-xs font-bold text-white">12+ Years Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-emerald-400">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Satisfied Clients</p>
                  <p className="text-xs font-bold text-white">1,800+ Families</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Policy Dispatch</p>
                  <p className="text-xs font-bold text-white">Fast Digital & Doorstep</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Advisor Business Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-br from-slate-800/90 via-slate-850 to-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl backdrop-blur-md">
              <div className="flex items-start justify-between pb-5 border-b border-slate-700/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg ring-4 ring-amber-400/20">
                    PS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{AGENT_INFO.name}</h3>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        Online
                      </span>
                    </div>
                    <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Insurance Agent</p>
                    <p className="text-xs text-slate-400 mt-0.5">LIC & Multi-Brand Motor General Insurance</p>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="py-4 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Direct Contact:</span>
                  <a href={`tel:${AGENT_INFO.phone}`} className="font-bold text-white hover:text-amber-400 transition">
                    +91 {AGENT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">WhatsApp Hotline:</span>
                  <span className="font-bold text-emerald-400">{AGENT_INFO.phone}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Key Guarantees:</span>
                  <span className="font-medium text-slate-200">100% Claim Handholding</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Doorstep & Digital:</span>
                  <span className="font-medium text-emerald-300">Pan-India Support</span>
                </div>
              </div>

              {/* Bottom Card Notification */}
              <div className="mt-4 p-3 rounded-xl bg-blue-900/40 border border-blue-500/20 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-blue-200">
                  Select plans below, fill your details, and hit <strong>Submit to WhatsApp</strong> for instant personalized proposal.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Large Category Tabs */}
        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700 flex gap-2">
          <button
            onClick={() => onSelectTab('lic')}
            className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 ${
              activeTab === 'lic'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span className="text-lg">🛡️</span>
            <span>LIC Life Insurance Plans</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              activeTab === 'lic' ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'
            }`}>
              {licCount} Plans
            </span>
          </button>

          <button
            onClick={() => onSelectTab('vehicle')}
            className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 ${
              activeTab === 'vehicle'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span className="text-lg">🚗</span>
            <span>Vehicle Insurance Plans</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              activeTab === 'vehicle' ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'
            }`}>
              {vehicleCount} Plans
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
