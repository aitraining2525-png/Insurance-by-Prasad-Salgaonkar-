import React from 'react';
import { ShieldCheck, HeartHandshake, PhoneCall, Clock, CheckCircle2, Award, Zap, FileCheck } from 'lucide-react';
import { AGENT_INFO } from '../data/plansData';

export const AgentTrustSection: React.FC = () => {
  const guarantees = [
    {
      icon: HeartHandshake,
      title: '100% Claim Settlement Assistance',
      desc: 'During an accident, critical illness, or bereavement, Prasad Salgaonkar personally assists your family with claim paperwork, hospital/garage coordination, and branch follow-ups.'
    },
    {
      icon: Clock,
      title: 'Instant WhatsApp & Doorstep Service',
      desc: 'No waiting in long branch queues. Get immediate policy quotes, premium receipts, revival quotes, and address change assistance directly via WhatsApp or at your home.'
    },
    {
      icon: Award,
      title: '12+ Years Insurance Agent Experience',
      desc: 'Trained and IRDAI licensed insurance agent trusted by over 1,800 families and vehicle owners across Maharashtra and Pan-India.'
    },
    {
      icon: Zap,
      title: 'Fast Cashless Motor Garage Network',
      desc: 'Seamless coordination with authorized workshops for cashless accident repairs, spot surveyor assignment, and maximum No Claim Bonus (NCB) transfer.'
    },
    {
      icon: FileCheck,
      title: 'Policy Revival & Old Portfolio Audit',
      desc: 'Have old or lapsed LIC policies? Prasad helps you calculate revival interest concessions, track unclaimed maturity funds, and optimize family tax savings.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hidden Charges • Sovereign Safety',
      desc: 'All LIC policies carry the sovereign guarantee of the Government of India under Section 37 of the LIC Act, guaranteeing 100% safety of your capital and bonuses.'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Why Insure with Agent Prasad Salgaonkar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Trusted Personal Insurance Agent
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Online aggregator websites sell policies and leave you alone during claims. With Prasad Salgaonkar, you get a dedicated personal insurance agent standing by your side for every life milestone and claim emergency.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-300 flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emergency Callout Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Direct Agent Helpline
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Have an urgent claim or expiring policy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Connect directly with Prasad Salgaonkar right now on WhatsApp or phone call for immediate doorstep / digital resolution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="py-3.5 px-6 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition flex items-center gap-2 text-sm backdrop-blur-xs"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call: {AGENT_INFO.displayPhone}</span>
            </a>

            <a
              href={AGENT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center gap-2 text-sm shadow-md"
            >
              <span>WhatsApp Prasad Sir</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
