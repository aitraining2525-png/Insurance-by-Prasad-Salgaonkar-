import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, Car, MessageSquare, ArrowRight, IndianRupee, Sparkles } from 'lucide-react';
import { AGENT_INFO } from '../data/plansData';
import { generateWhatsAppLink } from '../utils/whatsappHelper';

interface PremiumCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PremiumCalculatorModal: React.FC<PremiumCalculatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [calcType, setCalcType] = useState<'lic' | 'vehicle'>('lic');

  // LIC states
  const [licPlanType, setLicPlanType] = useState('labh'); // 'labh', 'anand', 'umang', 'term'
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(1000000);
  const [licTerm, setLicTerm] = useState(25);

  // Vehicle states
  const [vehCategory, setVehCategory] = useState<'car' | 'bike' | 'commercial'>('car');
  const [vehIdv, setVehIdv] = useState(700000);
  const [ncbPercent, setNcbPercent] = useState(35);
  const [hasZeroDep, setHasZeroDep] = useState(true);
  const [hasEngineProtect, setHasEngineProtect] = useState(true);

  if (!isOpen) return null;

  // Calculation formulas for LIC
  let ppt = licPlanType === 'labh' ? 16 : licPlanType === 'umang' ? 15 : licTerm;
  let ratePerThousand = 45;
  if (licPlanType === 'labh') ratePerThousand = 44 + (age - 25) * 0.4;
  else if (licPlanType === 'anand') ratePerThousand = 46 + (age - 25) * 0.5;
  else if (licPlanType === 'umang') ratePerThousand = 52 + (age - 25) * 0.5;
  else if (licPlanType === 'term') ratePerThousand = 12 + (age - 25) * 0.6;

  const licAnnual = Math.round((sumAssured / 1000) * ratePerThousand);
  const licMonthly = Math.round(licAnnual / 12);
  const totalPaid = licAnnual * ppt;
  
  let estMaturity = 0;
  if (licPlanType === 'labh') {
    // Basic Sum Assured + Reversionary bonus (~₹46/1000/yr) + FAB (~₹450/1000)
    estMaturity = Math.round(sumAssured + (sumAssured * 0.046 * licTerm) + (sumAssured * 0.45));
  } else if (licPlanType === 'anand') {
    estMaturity = Math.round(sumAssured + (sumAssured * 0.044 * licTerm) + (sumAssured * 0.35));
  } else if (licPlanType === 'umang') {
    // 8% every year after PPT till age 100!
    estMaturity = Math.round(sumAssured * 2.8);
  } else {
    estMaturity = 0; // Pure term
  }

  // Calculation formulas for Vehicle
  let baseOdRate = vehCategory === 'car' ? 0.026 : vehCategory === 'bike' ? 0.018 : 0.032;
  let basicOd = Math.round(vehIdv * baseOdRate);
  let ncbDiscount = Math.round(basicOd * (ncbPercent / 100));
  let netOd = basicOd - ncbDiscount;
  let zeroDepAddon = hasZeroDep ? Math.round(vehIdv * (vehCategory === 'car' ? 0.0075 : 0.005)) : 0;
  let engineAddon = hasEngineProtect ? Math.round(vehIdv * 0.0025) : 0;
  let tpTariff = vehCategory === 'car' ? 3416 : vehCategory === 'bike' ? 1366 : 7800;
  let totalVehiclePremium = Math.round(netOd + zeroDepAddon + engineAddon + tpTariff);

  const sendLicQuoteToWhatsApp = () => {
    const planName = licPlanType === 'labh' ? 'LIC Jeevan Labh (936)' : licPlanType === 'anand' ? 'LIC New Jeevan Anand (915)' : licPlanType === 'umang' ? 'LIC Jeevan Umang (945)' : 'LIC Pure Term Insurance';
    const text = `*Hello Agent Prasad Salgaonkar*, I calculated a quotation for *${planName}* on your website:\n\n• Age: *${age} Years*\n• Sum Assured: *₹${sumAssured.toLocaleString('en-IN')}*\n• Term / PPT: *${licTerm} Yrs / Pay ${ppt} Yrs*\n• Approx Annual Premium: *₹${licAnnual.toLocaleString('en-IN')}*\n• Est. Maturity: *${licPlanType === 'term' ? 'Pure ₹' + (sumAssured/100000) + 'L Life Cover' : '₹' + estMaturity.toLocaleString('en-IN')}*\n\nPlease review and share the official LIC branch illustration with bonus details.`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  const sendVehQuoteToWhatsApp = () => {
    const text = `*Hello Agent Prasad Salgaonkar*, I calculated a vehicle insurance quote on your website:\n\n• Vehicle Type: *${vehCategory.toUpperCase()}*\n• Vehicle IDV: *₹${vehIdv.toLocaleString('en-IN')}*\n• NCB Discount: *${ncbPercent}%*\n• Zero Depreciation: *${hasZeroDep ? 'Yes' : 'No'}*\n• Engine Protection: *${hasEngineProtect ? 'Yes' : 'No'}*\n• Estimated Net Premium: *~₹${totalVehiclePremium.toLocaleString('en-IN')}/year*\n\nPlease provide quotation from top insurers (ICICI Lombard, Bajaj, HDFC ERGO, Tata AIG, etc.) with cashless garages.`;
    window.open(generateWhatsAppLink(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-amber-300">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black">Insurance Premium & Maturity Calculator</h3>
              <p className="text-xs text-slate-300">Instant Estimate • Insurance Agent Prasad Salgaonkar (+91 {AGENT_INFO.phone})</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 text-white/80 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Switcher */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex gap-2 shrink-0">
          <button
            onClick={() => setCalcType('lic')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
              calcType === 'lic'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>LIC Plan Maturity & Premium Calculator</span>
          </button>

          <button
            onClick={() => setCalcType('vehicle')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
              calcType === 'vehicle'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Vehicle Motor Insurance Calculator</span>
          </button>
        </div>

        {/* Scroll Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* LIC CALCULATOR */}
          {calcType === 'lic' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Target LIC Plan
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { id: 'labh', name: 'Jeevan Labh (936)' },
                    { id: 'anand', name: 'Jeevan Anand (915)' },
                    { id: 'umang', name: 'Jeevan Umang (945)' },
                    { id: 'term', name: 'Tech / Pure Term' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setLicPlanType(p.id)}
                      className={`p-2.5 rounded-xl font-bold border transition text-center ${
                        licPlanType === p.id
                          ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Client Age</span>
                    <span className="text-blue-700 font-black">{age} Years</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={55}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full accent-blue-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                    <span>18 Yrs</span>
                    <span>55 Yrs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Sum Assured (Life Cover)</span>
                    <span className="text-blue-700 font-black">₹{(sumAssured / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={200000}
                    max={5000000}
                    step={100000}
                    value={sumAssured}
                    onChange={(e) => setSumAssured(Number(e.target.value))}
                    className="w-full accent-blue-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                    <span>₹2 Lakhs</span>
                    <span>₹50 Lakhs</span>
                  </div>
                </div>
              </div>

              {/* LIC Results Output Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">Estimated Quote</span>
                    <h4 className="text-base font-bold text-white">Summary for ₹{(sumAssured/100000).toFixed(1)} Lakhs Policy</h4>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Sec 10(10D) Tax-Free
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400">Monthly Approx</p>
                    <p className="text-base font-black text-white mt-1">₹{licMonthly.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400">Annual Premium</p>
                    <p className="text-base font-black text-amber-300 mt-1">₹{licAnnual.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400">Total Invested ({ppt} Yrs)</p>
                    <p className="text-base font-black text-slate-200 mt-1">₹{totalPaid.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] text-slate-400">Est. Maturity Payout</p>
                    <p className="text-base font-black text-emerald-400 mt-1">
                      {licPlanType === 'term' ? '₹' + (sumAssured/100000) + 'L Cover' : '₹' + estMaturity.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {licPlanType === 'umang' && (
                  <p className="text-xs text-amber-200 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    💡 Plus: Guaranteed ₹{(sumAssured * 0.08).toLocaleString('en-IN')} (8% of SA) every single year from end of PPT till age 99!
                  </p>
                )}

                <button
                  onClick={sendLicQuoteToWhatsApp}
                  className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Send This LIC Calculation to Prasad Sir on WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* VEHICLE CALCULATOR */}
          {calcType === 'vehicle' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Vehicle Category
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'car', label: '🚗 Private Car' },
                    { id: 'bike', label: '🏍️ Two-Wheeler' },
                    { id: 'commercial', label: '🚚 Commercial' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setVehCategory(v.id as any);
                        setVehIdv(v.id === 'bike' ? 90000 : v.id === 'car' ? 700000 : 1200000);
                      }}
                      className={`p-2.5 rounded-xl font-bold border transition text-center ${
                        vehCategory === v.id
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Vehicle IDV (Insured Value)</span>
                    <span className="text-emerald-700 font-black">₹{vehIdv.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={vehCategory === 'bike' ? 30000 : 150000}
                    max={vehCategory === 'bike' ? 300000 : 3000000}
                    step={vehCategory === 'bike' ? 5000 : 50000}
                    value={vehIdv}
                    onChange={(e) => setVehIdv(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>No Claim Bonus (NCB)</span>
                    <span className="text-emerald-700 font-black">{ncbPercent}% Discount</span>
                  </div>
                  <select
                    value={ncbPercent}
                    onChange={(e) => setNcbPercent(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value={0}>0% (New Vehicle or Made Claim)</option>
                    <option value={20}>20% (1 Claim-Free Year)</option>
                    <option value={25}>25% (2 Claim-Free Years)</option>
                    <option value={35}>35% (3 Claim-Free Years)</option>
                    <option value={45}>45% (4 Claim-Free Years)</option>
                    <option value={50}>50% (5 Claim-Free Years - Max Discount)</option>
                  </select>
                </div>
              </div>

              {/* Addons toggles */}
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs font-semibold cursor-pointer bg-slate-50">
                  <input
                    type="checkbox"
                    checked={hasZeroDep}
                    onChange={(e) => setHasZeroDep(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Zero Depreciation (Nil-Dep)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs font-semibold cursor-pointer bg-slate-50">
                  <input
                    type="checkbox"
                    checked={hasEngineProtect}
                    onChange={(e) => setHasEngineProtect(e.target.checked)}
                    className="rounded text-emerald-600"
                  />
                  <span>Engine & Gearbox Protection</span>
                </label>
              </div>

              {/* Vehicle Results Output */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Estimated Motor Premium</span>
                    <h4 className="text-base font-bold text-white">Full Package with TP & Add-ons</h4>
                  </div>
                  <span className="text-lg font-black text-emerald-300">
                    ~₹{totalVehiclePremium.toLocaleString('en-IN')}/yr
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Own Damage (OD) after {ncbPercent}% NCB:</span>
                    <span>₹{netOd.toLocaleString('en-IN')}</span>
                  </div>
                  {hasZeroDep && (
                    <div className="flex justify-between">
                      <span>Zero Depreciation Add-on:</span>
                      <span>₹{zeroDepAddon.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {hasEngineProtect && (
                    <div className="flex justify-between">
                      <span>Engine Protection Add-on:</span>
                      <span>₹{engineAddon.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-slate-800 pt-1 text-slate-400">
                    <span>Statutory Third Party (TP) Tariff:</span>
                    <span>₹{tpTariff.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={sendVehQuoteToWhatsApp}
                  className="w-full py-3 px-4 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Send This Vehicle Estimate to Prasad Sir on WhatsApp</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
