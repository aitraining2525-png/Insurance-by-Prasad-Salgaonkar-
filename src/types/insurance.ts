export type InsuranceCategory = 'lic' | 'vehicle';

export type LicSubCategory = 
  | 'all'
  | 'endowment'
  | 'whole_life'
  | 'money_back'
  | 'term_assurance'
  | 'pension_retirement'
  | 'children'
  | 'ulip_health';

export type VehicleSubCategory =
  | 'all'
  | 'two_wheeler'
  | 'four_wheeler'
  | 'commercial'
  | 'electric_vehicle';

export interface LicPlan {
  id: string;
  category: 'lic';
  subCategory: LicSubCategory;
  planNo: string;
  name: string;
  tagline: string;
  badge?: string;
  minAge: number;
  maxAge: number;
  minSumAssured: number;
  maxSumAssured?: string;
  policyTerm: string;
  premiumPayingTerm: string;
  keyBenefits: string[];
  taxBenefit: string;
  bestFor: string;
  estimatedReturnOrCover: string;
  ridersAvailable: string[];
  description: string;
}

export interface VehiclePlan {
  id: string;
  category: 'vehicle';
  subCategory: VehicleSubCategory;
  name: string;
  vehicleType: string;
  coverageType: string;
  badge?: string;
  tagline: string;
  keyBenefits: string[];
  recommendedAddons: string[];
  claimSupport: string;
  discountFeatures: string[];
  description: string;
  idealFor: string;
}

export type InsurancePlan = LicPlan | VehiclePlan;

export interface VehicleAddon {
  id: string;
  name: string;
  description: string;
  tag?: string;
}

export interface QuoteInquiryForm {
  clientName: string;
  clientPhone: string;
  clientCity: string;
  clientAge?: string;
  preferredContactTime: string;
  
  // LIC specific
  licBudget?: string;
  licGoal?: string;
  licSumAssured?: string;
  
  // Vehicle specific
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleRegNo?: string;
  vehiclePolicyStatus?: string;
  vehicleNcb?: string;
  selectedAddons?: string[];

  customNotes?: string;
}
