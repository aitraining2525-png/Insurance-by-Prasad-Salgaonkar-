import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, ShieldCheck, Car, Check, Plus, MessageSquare, 
  Phone, Sparkles, ChevronRight, Calculator, FileText, ArrowRight,
  TrendingUp, Award, Clock, HeartHandshake, X
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LicPlanCard, VehiclePlanCard } from './components/PlanCard';
import { PlanDetailModal } from './components/PlanDetailModal';
import { QuoteBasketDrawer } from './components/QuoteBasketDrawer';
import { VehicleAddonSelector } from './components/VehicleAddonSelector';
import { PremiumCalculatorModal } from './components/PremiumCalculatorModal';
import { AgentTrustSection } from './components/AgentTrustSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { LIC_PLANS, VEHICLE_PLANS, AGENT_INFO } from './data/plansData';
import { LicPlan, VehiclePlan, LicSubCategory, VehicleSubCategory } from './types/insurance';
import { generateWhatsAppLink } from './utils/whatsappHelper';

export default function App() {
  const [activeTab, setActiveTab] = useState<'lic' | 'vehicle'>('lic');
  const [licSubCategory, setLicSubCategory] = useState<LicSubCategory>('all');
  const [vehicleSubCategory, setVehicleSubCategory] = useState<VehicleSubCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected plan IDs
  const [selectedLicPlanIds, setSelectedLicPlanIds] = useState<string[]>(['lic-936']); // default 1 popular
  const [selectedVehiclePlanIds, setSelectedVehiclePlanIds] = useState<string[]>(['veh-car-zerodep']); // default 1 popular
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Zero Depreciation (Bumper-to-Bumper)',
    'Engine & Gearbox Protection',
    '24x7 Roadside Assistance (RSA)'
  ]);

  // Modal states
  const [detailPlan, setDetailPlan] = useState<LicPlan | VehiclePlan | null>(null);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Filtered LIC plans
  const filteredLicPlans = useMemo(() => {
    return LIC_PLANS.filter((plan) => {
      const matchesSubCategory = licSubCategory === 'all' || plan.subCategory === licSubCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        plan.name.toLowerCase().includes(q) ||
        plan.planNo.includes(q) ||
        plan.tagline.toLowerCase().includes(q) ||
        plan.description.toLowerCase().includes(q) ||
        plan.bestFor.toLowerCase().includes(q);
      return matchesSubCategory && matchesSearch;
    });
  }, [licSubCategory, searchQuery]);

  // Filtered Vehicle plans
  const filteredVehiclePlans = useMemo(() => {
    return VEHICLE_PLANS.filter((plan) => {
      const matchesSubCategory = vehicleSubCategory === 'all' || plan.subCategory === vehicleSubCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        plan.name.toLowerCase().includes(q) ||
        plan.vehicleType.toLowerCase().includes(q) ||
        plan.coverageType.toLowerCase().includes(q) ||
        plan.tagline.toLowerCase().includes(q) ||
        plan.description.toLowerCase().includes(q) ||
        plan.idealFor.toLowerCase().includes(q);
      return matchesSubCategory && matchesSearch;
    });
  }, [vehicleSubCategory, searchQuery]);

  // Resolving selected plan objects
  const selectedLicPlans = useMemo(() => {
    return LIC_PLANS.filter((p) => selectedLicPlanIds.includes(p.id));
  }, [selectedLicPlanIds]);

  const selectedVehiclePlans = useMemo(() => {
    return VEHICLE_PLANS.filter((p) => selectedVehiclePlanIds.includes(p.id));
  }, [selectedVehiclePlanIds]);

  const totalSelectedCount = selectedLicPlanIds.length + selectedVehiclePlanIds.length;

  // Toggle helpers
  const toggleLicPlan = (id: string) => {
    setSelectedLicPlanIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleVehiclePlan = (id: string) => {
    setSelectedVehiclePlanIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const handleAddQuickPopular = () => {
    setSelectedLicPlanIds((prev) => Array.from(new Set([...prev, 'lic-936', 'lic-945'])));
    setSelectedVehiclePlanIds((prev) => Array.from(new Set([...prev, 'veh-car-zerodep', 'veh-bike-zerodep'])));
  };

  const quickSubmitToWhatsAppDirectly = () => {
    if (totalSelectedCount === 0) {
      handleAddQuickPopular();
    }
    setIsBasketOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-900">
      
      {/* Navigation */}
      <Navbar
        selectedCount={totalSelectedCount}
        onOpenBasket={() => setIsBasketOpen(true)}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Hero Header */}
      <Hero
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        licCount={LIC_PLANS.length}
        vehicleCount={VEHICLE_PLANS.length}
        onOpenBasket={() => setIsBasketOpen(true)}
        selectedCount={totalSelectedCount}
      />

      {/* Main Browse Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Controls Bar: Search & Subcategory Filter */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-4 mb-8">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={
                  activeTab === 'lic'
                    ? "Search LIC plans by name (e.g. Jeevan Labh, 936, Umang, Pension, Child)..."
                    : "Search vehicle plans (e.g. Zero Dep, EV Bike, Taxi, Ola, Goods, Activa, Creta)..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition flex items-center gap-1.5 shrink-0"
              >
                <Calculator className="w-4 h-4 text-blue-700" />
                <span>Calculate Quotes</span>
              </button>

              <button
                onClick={() => setIsBasketOpen(true)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 transition flex items-center gap-1.5 shrink-0 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>Submit ({totalSelectedCount})</span>
              </button>
            </div>
          </div>

          {/* Sub-Category Pills */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {activeTab === 'lic' ? (
              <>
                {[
                  { id: 'all', label: 'All LIC Plans', count: LIC_PLANS.length },
                  { id: 'endowment', label: 'Endowment & Savings', count: LIC_PLANS.filter(p => p.subCategory === 'endowment').length },
                  { id: 'whole_life', label: 'Whole Life (8-10% Income)', count: LIC_PLANS.filter(p => p.subCategory === 'whole_life').length },
                  { id: 'money_back', label: 'Money Back Plans', count: LIC_PLANS.filter(p => p.subCategory === 'money_back').length },
                  { id: 'children', label: 'Children Education', count: LIC_PLANS.filter(p => p.subCategory === 'children').length },
                  { id: 'term_assurance', label: 'Pure Term Insurance', count: LIC_PLANS.filter(p => p.subCategory === 'term_assurance').length },
                  { id: 'pension_retirement', label: 'Pension & Annuity', count: LIC_PLANS.filter(p => p.subCategory === 'pension_retirement').length },
                  { id: 'ulip_health', label: 'ULIP & Cancer Health', count: LIC_PLANS.filter(p => p.subCategory === 'ulip_health').length }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLicSubCategory(item.id as LicSubCategory)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                      licSubCategory === item.id
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      licSubCategory === item.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {item.count}
                    </span>
                  </button>
                ))}
              </>
            ) : (
              <>
                {[
                  { id: 'all', label: 'All Vehicle Insurance', count: VEHICLE_PLANS.length },
                  { id: 'four_wheeler', label: 'Cars & 4-Wheelers', count: VEHICLE_PLANS.filter(p => p.subCategory === 'four_wheeler').length },
                  { id: 'two_wheeler', label: 'Bikes & Scooters', count: VEHICLE_PLANS.filter(p => p.subCategory === 'two_wheeler').length },
                  { id: 'commercial', label: 'Commercial Fleet & Taxis', count: VEHICLE_PLANS.filter(p => p.subCategory === 'commercial').length },
                  { id: 'electric_vehicle', label: 'EV Electric Vehicles', count: VEHICLE_PLANS.filter(p => p.subCategory === 'electric_vehicle').length }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setVehicleSubCategory(item.id as VehicleSubCategory)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                      vehicleSubCategory === item.id
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      vehicleSubCategory === item.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {item.count}
                    </span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Section Heading & Selected Count Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              {activeTab === 'lic' ? (
                <>
                  <span>🛡️ Life Insurance Corporation (LIC) Plans</span>
                  <span className="text-xs bg-blue-100 text-blue-900 font-bold px-2.5 py-0.5 rounded-full">
                    {filteredLicPlans.length} Plans
                  </span>
                </>
              ) : (
                <>
                  <span>🚗 Motor & Vehicle Insurance Plans</span>
                  <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2.5 py-0.5 rounded-full">
                    {filteredVehiclePlans.length} Plans
                  </span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {activeTab === 'lic'
                ? "Select multiple plans to compare and request customized benefit charts via WhatsApp."
                : "Select your vehicle type, pick Zero Dep / Add-ons, and submit for instant competitive quotes."}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">
              Selected in quote cart: <strong className="text-blue-900">{totalSelectedCount}</strong>
            </span>
            <button
              onClick={() => setIsBasketOpen(true)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 transition flex items-center gap-1 shadow-xs"
            >
              <span>Submit to WhatsApp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        {activeTab === 'lic' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLicPlans.map((plan) => (
              <LicPlanCard
                key={plan.id}
                plan={plan}
                isSelected={selectedLicPlanIds.includes(plan.id)}
                onToggleSelect={() => toggleLicPlan(plan.id)}
                onViewDetails={() => setDetailPlan(plan)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehiclePlans.map((plan) => (
                <VehiclePlanCard
                  key={plan.id}
                  plan={plan}
                  isSelected={selectedVehiclePlanIds.includes(plan.id)}
                  onToggleSelect={() => toggleVehiclePlan(plan.id)}
                  onViewDetails={() => setDetailPlan(plan)}
                />
              ))}
            </div>

            {/* Vehicle Add-on Selector */}
            <VehicleAddonSelector
              selectedAddons={selectedAddons}
              onToggleAddon={toggleAddon}
              onOpenBasket={() => setIsBasketOpen(true)}
            />
          </div>
        )}

        {/* Empty Search State */}
        {((activeTab === 'lic' && filteredLicPlans.length === 0) ||
          (activeTab === 'vehicle' && filteredVehiclePlans.length === 0)) && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No matching plans found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching with different terms or reset your filters to browse all plans.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setLicSubCategory('all');
                setVehicleSubCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-blue-800 bg-blue-50 hover:bg-blue-100 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Trust & Credentials Section */}
      <AgentTrustSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenBasket={() => setIsBasketOpen(true)}
        selectedCount={totalSelectedCount}
      />

      {/* FLOATING PERSISTENT QUOTE & WHATSAPP ACTION BAR */}
      <div className="fixed bottom-4 left-4 right-4 z-30 max-w-2xl mx-auto">
        <div className="bg-slate-950/95 backdrop-blur-md text-white p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shrink-0">
              {totalSelectedCount}
            </div>
            <div className="hidden xs:block">
              <p className="text-xs font-bold text-white">
                {totalSelectedCount} {totalSelectedCount === 1 ? 'Plan' : 'Plans'} Selected
              </p>
              <p className="text-[10px] text-slate-400">
                Send to Agent Prasad Salgaonkar ({AGENT_INFO.phone})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition flex items-center gap-1.5"
              title="Call Prasad Salgaonkar"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <button
              onClick={quickSubmitToWhatsAppDirectly}
              className="px-4 py-2.5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-300 hover:to-green-300 shadow-md shadow-emerald-500/25 active:scale-95 transition flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Submit to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {/* 1. Full Details Modal */}
      <PlanDetailModal
        plan={detailPlan}
        onClose={() => setDetailPlan(null)}
        isSelected={
          detailPlan
            ? detailPlan.category === 'lic'
              ? selectedLicPlanIds.includes(detailPlan.id)
              : selectedVehiclePlanIds.includes(detailPlan.id)
            : false
        }
        onToggleSelect={() => {
          if (!detailPlan) return;
          if (detailPlan.category === 'lic') {
            toggleLicPlan(detailPlan.id);
          } else {
            toggleVehiclePlan(detailPlan.id);
          }
        }}
      />

      {/* 2. Quote Basket & WhatsApp Submission Drawer */}
      <QuoteBasketDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        selectedLicPlans={selectedLicPlans}
        selectedVehiclePlans={selectedVehiclePlans}
        onRemoveLicPlan={toggleLicPlan}
        onRemoveVehiclePlan={toggleVehiclePlan}
        onAddQuickPopular={handleAddQuickPopular}
      />

      {/* 3. Interactive Premium Calculator Modal */}
      <PremiumCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

    </div>
  );
}
