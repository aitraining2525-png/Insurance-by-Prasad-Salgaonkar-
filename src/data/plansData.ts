import { LicPlan, VehiclePlan, VehicleAddon } from '../types/insurance';

export const AGENT_INFO = {
  name: 'Prasad Salgaonkar',
  role: 'Insurance Agent',
  phone: '8550927882',
  displayPhone: '+91 8550927882',
  whatsappUrl: 'https://wa.me/918550927882',
  experience: '12+ Years Insurance Agent Experience',
  servedClients: '1,800+ Families & Vehicle Owners',
  claimSuccessRate: '99.4% Claim Assistance Record',
  location: 'Maharashtra, India (Serving Nationwide Pan-India)',
  specialties: [
    'LIC Life Insurance Plans',
    'Retirement & Child Education Planning',
    'Two-Wheeler & Car Insurance',
    'Commercial Fleet Vehicle Insurance',
    'Cashless Garage & Claim Settlement Support'
  ]
};

export const LIC_PLANS: LicPlan[] = [
  {
    id: 'lic-936',
    category: 'lic',
    subCategory: 'endowment',
    planNo: '936',
    name: 'LIC Jeevan Labh',
    tagline: 'Pay Limited Years, Enjoy Highest Bonuses & Guaranteed Protection',
    badge: 'Most Popular / Best Seller',
    minAge: 8,
    maxAge: 59,
    minSumAssured: 200000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '16, 21, or 25 Years',
    premiumPayingTerm: 'Pay only 10, 15, or 16 Years',
    keyBenefits: [
      'Limited premium payment tenure with long-term financial security',
      'High bonus earning capacity with Final Additional Bonus (FAB)',
      'Lump sum tax-free maturity payout under Section 10(10D)',
      'Comprehensive life cover protection throughout the term',
      'Loan facility accessible after just 2 continuous premium years'
    ],
    taxBenefit: 'Tax deduction under 80C up to ₹1.5L + 100% Tax-Free Maturity under 10(10D)',
    bestFor: 'Long-term wealth creation, child higher education fund, and daughter marriage planning',
    estimatedReturnOrCover: 'Up to 3x to 4x total payout including accrued simple reversionary bonuses',
    ridersAvailable: [
      'Accidental Death & Disability Benefit Rider',
      'Critical Illness Rider',
      'Term Assurance Rider',
      'Premium Waiver Benefit (PWB)'
    ],
    description: 'LIC Jeevan Labh is a limited premium paying, non-linked, with-profits endowment plan. It offers an ideal combination of protection and savings with attractive maturity returns.'
  },
  {
    id: 'lic-915',
    category: 'lic',
    subCategory: 'endowment',
    planNo: '915',
    name: 'LIC New Jeevan Anand',
    tagline: 'Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi – Double Financial Shield',
    badge: 'All-Time Classic',
    minAge: 18,
    maxAge: 50,
    minSumAssured: 100000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '15 to 35 Years',
    premiumPayingTerm: 'Same as Policy Term',
    keyBenefits: [
      'Full maturity payout with accrued Simple Reversionary Bonuses + FAB',
      'Free life cover continues for lifetime (till age 100) even after receiving full maturity',
      'Nominee receives full Basic Sum Assured whenever death occurs after maturity',
      'Accidental death and permanent disability benefits built-in options',
      'High liquidity with policy loan and surrender provisions'
    ],
    taxBenefit: 'Exemption under Sec 80C & Sec 10(10D) of Income Tax Act',
    bestFor: 'Family breadwinners who want savings now plus a guaranteed legacy for children later',
    estimatedReturnOrCover: 'Full Maturity sum at term end + 100% Sum Assured guaranteed for lifetime',
    ridersAvailable: [
      'Accidental Death Benefit Rider',
      'Accident & Disability Benefit Rider',
      'Term Rider'
    ],
    description: 'New Jeevan Anand provides a double advantage: lump sum maturity bonus during your lifetime and continuous lifelong life cover protection for your family after maturity.'
  },
  {
    id: 'lic-945',
    category: 'lic',
    subCategory: 'whole_life',
    planNo: '945',
    name: 'LIC Jeevan Umang',
    tagline: 'Guaranteed 8% Annual Pension Income for Life till Age 100',
    badge: 'Guaranteed Income King',
    minAge: 0,
    maxAge: 55,
    minSumAssured: 200000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '100 minus Age at entry (Up to 100 Years)',
    premiumPayingTerm: '15, 20, 25, or 30 Years',
    keyBenefits: [
      'Guaranteed 8% of Sum Assured credited every year starting right after PPT ends',
      'Annual 8% cash payouts continue each year until age 99 or death',
      'Huge lump sum maturity payout (Sum Assured + Bonuses + FAB) upon reaching age 100',
      'High insurance protection for 100 years of age',
      'Child entry from 90 days of age for lifetime financial independence'
    ],
    taxBenefit: '8% Annual Survival Benefit is 100% Tax-Free under Sec 10(10D)',
    bestFor: 'Lifelong second salary, early retirement planning, and generational wealth building',
    estimatedReturnOrCover: 'Guaranteed 8% yearly return on Basic Sum Assured + Multi-crore maturity legacy',
    ridersAvailable: [
      'Accidental Benefit Rider',
      'Critical Illness Rider',
      'Premium Waiver Rider',
      'Term Assurance Rider'
    ],
    description: 'LIC Jeevan Umang is a non-linked, with-profits, whole-life plan providing annual survival benefits from the end of premium payment until age 99, plus a massive final lump sum at age 100.'
  },
  {
    id: 'lic-871',
    category: 'lic',
    subCategory: 'whole_life',
    planNo: '871',
    name: 'LIC Jeevan Utsav',
    tagline: 'Lifelong Guaranteed Regular Income of 10% of Sum Assured',
    badge: 'Latest High Return Plan',
    minAge: 0,
    maxAge: 65,
    minSumAssured: 500000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: 'Whole Life (Till Age 100)',
    premiumPayingTerm: 'Short 5 to 16 Years Only',
    keyBenefits: [
      'Guaranteed 10% of Sum Assured regular income paid every single year for life',
      'Choice between Regular Income Benefit or Flexi Income Benefit (with 5.5% compounded interest)',
      'Short premium paying terms starting from just 5 years',
      'Guaranteed additions of ₹40 per ₹1,000 Sum Assured added every premium year',
      'Available for newborns from 90 days up to seniors aged 65'
    ],
    taxBenefit: 'Section 80C deductions & tax-free 10% annual guaranteed earnings',
    bestFor: 'Those seeking guaranteed market-insulated 10% annual returns with short premium tenure',
    estimatedReturnOrCover: '10% of Sum Assured guaranteed every year for life + substantial life cover',
    ridersAvailable: [
      'LIC Accidental Death Rider',
      'Disability Benefit Rider',
      'New Critical Illness Rider'
    ],
    description: 'Jeevan Utsav is LIC’s modern non-linked, non-participating whole life plan guaranteeing a life-long 10% annual payout with short payment terms from 5 to 16 years.'
  },
  {
    id: 'lic-860',
    category: 'lic',
    subCategory: 'endowment',
    planNo: '860',
    name: 'LIC Bima Jyoti',
    tagline: 'Guaranteed Additions of ₹50 per ₹1,000 Sum Assured Year After Year',
    badge: 'Guaranteed Returns',
    minAge: 0,
    maxAge: 60,
    minSumAssured: 100000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '15 to 20 Years',
    premiumPayingTerm: 'Policy Term minus 5 Years',
    keyBenefits: [
      'Contractually guaranteed ₹50 additions per ₹1,000 sum assured for each year paid',
      'Zero stock market risk – 100% predictable sovereign guarantee payout',
      'Discounted premium paying term (5 years less than total policy term)',
      'Death benefit with guaranteed additions ensures total security for dependents',
      'Maturity payout can be opted as lump sum or structured monthly/annual installments'
    ],
    taxBenefit: 'Full 80C tax rebate and tax-exempt payout under Section 10(10D)',
    bestFor: 'Risk-averse investors who want fixed, written guaranteed additions for family security',
    estimatedReturnOrCover: '₹50/thousand guaranteed annual additions + 125% basic sum assured life cover',
    ridersAvailable: [
      'Accident Benefit Rider',
      'Critical Illness Rider',
      'PWB Rider for minors'
    ],
    description: 'LIC Bima Jyoti is a non-linked, non-participating savings plan providing guaranteed additions of ₹50 per thousand basic sum assured throughout the policy term.'
  },
  {
    id: 'lic-920',
    category: 'lic',
    subCategory: 'money_back',
    planNo: '920',
    name: 'LIC 20-Year Money Back',
    tagline: 'Periodic Liquidity Every 5 Years + Robust Life Cover Protection',
    badge: 'Popular Liquidity Plan',
    minAge: 13,
    maxAge: 50,
    minSumAssured: 100000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '20 Years',
    premiumPayingTerm: '15 Years Only',
    keyBenefits: [
      '20% of Basic Sum Assured returned at 5th, 10th, and 15th year',
      'Remaining 40% of Sum Assured + all accrued bonuses + FAB paid at 20th year',
      'In case of death, 100% full Sum Assured is paid without deducting past money-back payouts',
      'Pay for only 15 years and enjoy coverage and payouts for 20 years',
      'Handy cash flow for milestone expenses like school admissions or home renovations'
    ],
    taxBenefit: 'Money-back survival benefits are 100% tax-free under Sec 10(10D)',
    bestFor: 'People who want regular payouts every 5 years for periodic family needs',
    estimatedReturnOrCover: '60% Survival cash payouts + 40% maturity bonus + uninterrupted life cover',
    ridersAvailable: [
      'Accidental Death & Disability Benefit Rider',
      'Term Rider',
      'Critical Illness Rider'
    ],
    description: 'LIC 20-Year Money Back provides regular cash flow at 5-year milestones while keeping your family safeguarded with complete risk cover.'
  },
  {
    id: 'lic-921',
    category: 'lic',
    subCategory: 'money_back',
    planNo: '921',
    name: 'LIC 25-Year Money Back',
    tagline: 'Cash Payouts at 5th, 10th, 15th, and 20th Year with 25-Year Protection',
    badge: 'Long-term Liquidity',
    minAge: 13,
    maxAge: 45,
    minSumAssured: 100000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '25 Years',
    premiumPayingTerm: '20 Years Only',
    keyBenefits: [
      '15% of Basic Sum Assured paid at end of 5th, 10th, 15th, and 20th policy year',
      'Remaining 40% of Sum Assured + full vested bonuses + FAB on 25th year maturity',
      'Full death claim paid without deducting previous survival payouts',
      'Premium paying term is 5 years shorter than total policy duration',
      'High insurance protection for a full quarter-century'
    ],
    taxBenefit: 'Tax-free survival benefits under 10(10D) & tax deduction under 80C',
    bestFor: 'Long-range family liquidity, education fee milestones, and milestone celebrations',
    estimatedReturnOrCover: '60% in four cash installments + 40% + massive 25-year accumulated bonuses',
    ridersAvailable: [
      'Accidental Death Benefit Rider',
      'Disability Benefit Rider',
      'Critical Illness Rider'
    ],
    description: 'A 25-year participating money back plan with 4 periodic milestone returns and a grand maturity bonus, ideal for structured family planning.'
  },
  {
    id: 'lic-948',
    category: 'lic',
    subCategory: 'money_back',
    planNo: '948',
    name: 'LIC Bima Shree',
    tagline: 'High Net-Worth Plan with Guaranteed Additions & Critical Illness Relief',
    badge: 'HNI Premium Plan',
    minAge: 18,
    maxAge: 55,
    minSumAssured: 1000000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '14, 16, 18, or 20 Years',
    premiumPayingTerm: '10, 12, 14, or 16 Years',
    keyBenefits: [
      'Guaranteed additions of ₹50 (first 5 yrs) and ₹55 (subsequent yrs) per ₹1,000 SA',
      'Inbuilt coverage for 15 specified critical illnesses without extra premium',
      'Survival benefit payouts of up to 45% of Sum Assured before maturity',
      'Option to defer survival benefit and earn lucrative compounding interest',
      'Minimum Sum Assured of ₹10 Lakhs specially customized for high-income earners'
    ],
    taxBenefit: 'Substantial 80C deductions and 100% tax-free high-value payouts',
    bestFor: 'Business owners, doctors, IT professionals, and HNIs needing high cover and critical illness shield',
    estimatedReturnOrCover: 'High Sum Assured + Guaranteed Additions + Free Critical Illness cover',
    ridersAvailable: [
      'Accidental Death and Disability Rider',
      'Term Assurance Rider'
    ],
    description: 'LIC Bima Shree is an exclusive money back plan for High Net Worth Individuals that incorporates guaranteed additions and built-in critical illness benefit.'
  },
  {
    id: 'lic-934',
    category: 'lic',
    subCategory: 'children',
    planNo: '934',
    name: 'LIC Jeevan Tarun',
    tagline: 'Customized Educational & Career Funding for Your Child (Ages 20 to 25)',
    badge: 'Top Child Education Plan',
    minAge: 0,
    maxAge: 12,
    minSumAssured: 750000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '25 minus Child Entry Age',
    premiumPayingTerm: '20 minus Child Entry Age',
    keyBenefits: [
      'Choice of 4 survival benefit options: from 0% to 15% per year from age 20 to 24',
      'Maturity payout at age 25 coincides with graduation, post-grad, or marriage',
      'Premium Waiver Benefit (PWB) ensures policy continues even if parent passes away',
      'High bonus participation helps outpace educational inflation',
      'Child can receive college fee assistance at age 20, 21, 22, 23, and 24'
    ],
    taxBenefit: 'Tax saving on parent investment (80C) and tax-free child payout (10(10D))',
    bestFor: 'Parents planning secure college, MBA, MBBS, or foreign university funding for young kids',
    estimatedReturnOrCover: 'Annual payouts from child age 20 to 24 + Big lump sum graduation bonus at 25',
    ridersAvailable: [
      'Premium Waiver Benefit (PWB) Rider'
    ],
    description: 'LIC Jeevan Tarun is a participating child endowment plan designed specifically to fund a child’s educational milestones between the ages of 20 and 25.'
  },
  {
    id: 'lic-874',
    category: 'lic',
    subCategory: 'children',
    planNo: '874',
    name: 'LIC Amritbaal',
    tagline: 'Highest Guaranteed Additions of ₹80 per ₹1,000 Sum Assured for Kids',
    badge: 'Super High Child Returns',
    minAge: 0,
    maxAge: 13,
    minSumAssured: 200000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '10 to 25 Years',
    premiumPayingTerm: '5, 6, 7 Years (Limited) or Single Pay',
    keyBenefits: [
      'Industry-leading guaranteed additions of ₹80 per ₹1,000 Sum Assured each year',
      'Short premium paying terms of just 5, 6, or 7 years – or pay once and relax',
      'Maturity ages from 18 to 25 years matching crucial higher education expenses',
      'Life cover on child with waiver of premium rider on parent',
      'Loan facility available to meet emergency educational fees'
    ],
    taxBenefit: '100% Tax-Free returns under Section 10(10D) & 80C rebate',
    bestFor: 'Parents wanting guaranteed high-growth educational corpus without any market volatility',
    estimatedReturnOrCover: 'Guaranteed ₹80/thousand per year – nearly doubles investment with sovereign guarantee',
    ridersAvailable: [
      'Premium Waiver Benefit Rider'
    ],
    description: 'LIC Amritbaal is an innovative child plan providing a guaranteed addition of ₹80 per thousand sum assured every policy year to build a solid education fund.'
  },
  {
    id: 'lic-854',
    category: 'lic',
    subCategory: 'term_assurance',
    planNo: '854',
    name: 'LIC Tech Term / Digi Term',
    tagline: 'High Life Cover Protection at Ultra Low Annual Premiums (₹50L to ₹10 Cr+)',
    badge: 'Pure Protection / Must Have',
    minAge: 18,
    maxAge: 65,
    minSumAssured: 5000000,
    maxSumAssured: 'No Limit (Based on Income)',
    policyTerm: '10 to 40 Years (Cover up to Age 80)',
    premiumPayingTerm: 'Regular, Limited (5 or 10 yrs), or Single Pay',
    keyBenefits: [
      'Substantial pure term life insurance to protect family lifestyle and loans',
      'Option for Level Sum Assured or Increasing Sum Assured (rises 10% each year)',
      'Subsidized premium discounts for non-smokers and healthy individuals',
      'Claim payout choice: 100% lump sum or 5/10/15 year monthly income installments',
      'Accidental benefit rider can double the claim amount'
    ],
    taxBenefit: 'Section 80C tax relief & complete tax-free death claim under Section 10(10D)',
    bestFor: 'Every earning individual, home loan borrowers, and parents supporting young children',
    estimatedReturnOrCover: '₹50 Lakhs to ₹5 Crores pure financial security for dependents',
    ridersAvailable: [
      'Accident Benefit Rider'
    ],
    description: 'Tech Term is LIC’s pure protection online term plan offering high sum assured life insurance at highly competitive rates to secure your family against any eventuality.'
  },
  {
    id: 'lic-875',
    category: 'lic',
    subCategory: 'term_assurance',
    planNo: '875',
    name: 'LIC Yuva Term',
    tagline: 'High Value Term Life Shield Tailored for Young Achievers & Professionals',
    badge: 'Youth & First Job Special',
    minAge: 18,
    maxAge: 45,
    minSumAssured: 5000000,
    maxSumAssured: 'Up to ₹5 Crores',
    policyTerm: '10 to 40 Years',
    premiumPayingTerm: 'Regular Pay / Limited Pay',
    keyBenefits: [
      'Extremely affordable premiums locked at young age for up to 40 years',
      'Attractive discounts for young women and non-smokers',
      'Protects your future family, parents, and education or vehicle loans',
      'High financial underwriting flexibility for salaried and young business professionals'
    ],
    taxBenefit: 'Tax saving up to ₹1.5 Lakh under 80C every financial year',
    bestFor: 'Young professionals in their 20s & 30s starting careers and family life',
    estimatedReturnOrCover: '₹50 Lakh to ₹3 Crore life protection starting at minimal daily cost',
    ridersAvailable: [
      'Accidental Death Rider'
    ],
    description: 'LIC Yuva Term is dedicated to young earners, providing immense sum assured protection at discounted youth premium rates.'
  },
  {
    id: 'lic-858',
    category: 'lic',
    subCategory: 'pension_retirement',
    planNo: '858',
    name: 'LIC New Jeevan Shanti',
    tagline: 'Single Deposit, Guaranteed Lifetime Pension with High Annuity Rates',
    badge: 'Best Pension Plan',
    minAge: 30,
    maxAge: 79,
    minSumAssured: 150000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: 'Lifelong Annuity',
    premiumPayingTerm: 'Single Premium (Pay Once)',
    keyBenefits: [
      'Deposit once and lock high guaranteed pension rate for the rest of your life',
      'Deferment period from 1 to 12 years (longer deferment = higher lifetime pension)',
      'Joint life option covers both husband and wife with full pension',
      '100% purchase price returned to children/nominee upon demise',
      'Ideal for VRS, retirement gratuity, PF reinvestment, and regular monthly income'
    ],
    taxBenefit: 'Purchase price eligible for 80C deduction; provides predictable taxable income',
    bestFor: 'Retirees, senior citizens, and people aged 40-60 building a second salary for retirement',
    estimatedReturnOrCover: 'Guaranteed lifetime annuity rate locked forever with 100% principal return',
    ridersAvailable: [],
    description: 'LIC New Jeevan Shanti is a deferred annuity single-premium plan that guarantees fixed lifetime pension payouts for single or joint lives with 100% refund of principal.'
  },
  {
    id: 'lic-857',
    category: 'lic',
    subCategory: 'pension_retirement',
    planNo: '857',
    name: 'LIC Jeevan Akshay VII',
    tagline: 'Immediate Lifetime Pension Starting From the Very Next Month',
    badge: 'Immediate Monthly Pension',
    minAge: 30,
    maxAge: 85,
    minSumAssured: 100000,
    maxSumAssured: 'No Limit',
    policyTerm: 'Lifelong',
    premiumPayingTerm: 'Single Premium',
    keyBenefits: [
      'Pension begins immediately from next month, quarter, half-year, or year',
      '10 different annuity payout options to choose from',
      'Annuity for life with return of purchase price to nominee',
      'Joint life option ensures surviving spouse receives full continuous pension',
      'No medical test required; quick hassle-free activation'
    ],
    taxBenefit: 'Tax saving on initial investment; predictable retirement cash flows',
    bestFor: 'Individuals needing an immediate monthly income stream for household expenses',
    estimatedReturnOrCover: 'Lifelong fixed monthly/yearly pension with complete return of deposit to children',
    ridersAvailable: [],
    description: 'LIC Jeevan Akshay VII is an immediate annuity plan where you invest once and receive guaranteed pension payouts for the rest of your life without delay.'
  },
  {
    id: 'lic-862',
    category: 'lic',
    subCategory: 'pension_retirement',
    planNo: '862',
    name: 'LIC Saral Pension',
    tagline: 'Standard Simple Immediate Annuity with 100% Capital Refund',
    badge: 'IRDAI Standard Pension',
    minAge: 40,
    maxAge: 80,
    minSumAssured: 100000,
    maxSumAssured: 'No Limit',
    policyTerm: 'Lifelong',
    premiumPayingTerm: 'Single Premium',
    keyBenefits: [
      'Standardized uniform terms approved by IRDAI',
      'Option 1: Life annuity with 100% Return of Purchase Price (ROP)',
      'Option 2: Joint life annuity with 100% ROP to nominee on last survivor demise',
      'Loan facility available after 6 months from policy commencement',
      'Surrender facility available in case of critical illness diagnosis'
    ],
    taxBenefit: 'Dependable income stream with full capital protection for nominees',
    bestFor: 'Retirees looking for a simple, zero-confusion, capital-safe pension structure',
    estimatedReturnOrCover: 'Guaranteed lifetime annuity + 100% money returned to family',
    ridersAvailable: [],
    description: 'LIC Saral Pension is a standardized non-linked immediate annuity plan offering simple lifetime pension with complete capital protection.'
  },
  {
    id: 'lic-852',
    category: 'lic',
    subCategory: 'ulip_health',
    planNo: '852',
    name: 'LIC SIIP (Systematic Investment)',
    tagline: 'Market Growth + 100% Mortality Charges Refunded Back at Maturity',
    badge: 'High Growth ULIP',
    minAge: 90, // days
    maxAge: 65,
    minSumAssured: 400000,
    maxSumAssured: 'No Limit',
    policyTerm: '10 to 25 Years',
    premiumPayingTerm: 'Same as Policy Term (Monthly / Yearly)',
    keyBenefits: [
      'Refund of 100% mortality charges back into your fund upon maturity',
      'Guaranteed additions added into fund value at 6th, 10th, 15th, 20th, and 25th year',
      'Choice of 4 distinct funds (Bond, Secured, Balanced, Growth)',
      'Free switches between debt and equity funds 4 times every year',
      'Life cover of 10x annualized premium or 105% of premiums paid'
    ],
    taxBenefit: 'Exemption under Sec 80C and tax-free returns under Sec 10(10D)',
    bestFor: 'Disciplined monthly investors wanting equity upside with sovereign LIC safety',
    estimatedReturnOrCover: 'Long-term equity-linked returns + 10x life cover + mortality charges refund',
    ridersAvailable: [
      'Accidental Death Benefit Rider'
    ],
    description: 'LIC SIIP is a unit-linked insurance plan combining market-linked capital growth with life insurance and an exclusive refund of mortality charges.'
  },
  {
    id: 'lic-905',
    category: 'lic',
    subCategory: 'ulip_health',
    planNo: '905',
    name: 'LIC Cancer Cover',
    tagline: 'Dedicated Health Shield Protecting Against Early & Major Cancer Stages',
    badge: 'Critical Health Shield',
    minAge: 20,
    maxAge: 65,
    minSumAssured: 1000000,
    maxSumAssured: '₹50,00,000',
    policyTerm: '10 to 30 Years',
    premiumPayingTerm: 'Same as Policy Term',
    keyBenefits: [
      'Early Stage: 25% Sum Assured paid immediately + waiver of premium for 3 years',
      'Major Stage: 100% Sum Assured paid lump sum + 1% monthly income for 10 years',
      'All future premiums waived completely upon Major Stage Cancer diagnosis',
      'No hospital bills required – lump sum claim paid directly upon diagnosis',
      'Choice of Level Sum Insured or Increasing Sum Insured (10% hike every year)'
    ],
    taxBenefit: 'Tax deduction under Section 80D up to ₹25,000 (₹50,000 for senior citizens)',
    bestFor: 'Every family looking for affordable cancer protection and treatment funding',
    estimatedReturnOrCover: 'Up to ₹50 Lakh lump sum claim + 120 monthly income payouts',
    ridersAvailable: [],
    description: 'LIC Cancer Cover is a non-linked health insurance plan that provides financial support on diagnosis of early or major stages of cancer.'
  },
  {
    id: 'lic-917',
    category: 'lic',
    subCategory: 'endowment',
    planNo: '917',
    name: 'LIC Single Premium Endowment',
    tagline: 'One-Time Payment, Lifetime Peace of Mind with Guaranteed Bonuses',
    badge: 'One-Time Deposit',
    minAge: 90, // days
    maxAge: 65,
    minSumAssured: 50000,
    maxSumAssured: 'No Upper Limit',
    policyTerm: '10 to 25 Years',
    premiumPayingTerm: 'Single Premium (Pay Once Only)',
    keyBenefits: [
      'No recurring annual premium reminders – pay once and enjoy 10-25 years of cover',
      'Substantial accrued simple reversionary bonuses and final additional bonus',
      'High loan value available right after 1 year of policy issuance',
      'Guaranteed life cover of 1.25 times single premium throughout the term',
      'Ideal for bonus money, property sale gains, or lump sum windfall investment'
    ],
    taxBenefit: 'Tax benefits under Section 80C & Section 10(10D)',
    bestFor: 'Individuals with lump sum surplus who want safe capital growth without ongoing payments',
    estimatedReturnOrCover: 'Substantial lump sum maturity payout + 125% life risk cover',
    ridersAvailable: [],
    description: 'LIC Single Premium Endowment is a participating savings plan where you deposit a single amount once and receive guaranteed maturity bonuses with life protection.'
  }
];

export const VEHICLE_PLANS: VehiclePlan[] = [
  {
    id: 'veh-car-zerodep',
    category: 'vehicle',
    subCategory: 'four_wheeler',
    name: 'Private Car Zero Depreciation (Bumper to Bumper)',
    vehicleType: 'Private Car (Hatchback / Sedan / SUV / Luxury)',
    coverageType: 'Comprehensive Nil-Depreciation Package',
    badge: 'Top Recommended for Cars',
    tagline: '100% Claim Payout for Metal, Plastic, Fibre, and Rubber Parts with Zero Deduction',
    keyBenefits: [
      'Zero depreciation deduction during accident claims – full parts cost covered',
      'Cashless claim settlement at 8,500+ authorized brand network garages',
      'Covers own damage, accident, fire, lightning, theft, earthquake, flood, and riots',
      'Mandatory Third Party Legal Liability coverage included',
      'Free towing assistance and doorstep surveyor inspection'
    ],
    recommendedAddons: [
      'Engine & Gearbox Protection (Hydrostatic Lock)',
      'Return to Invoice (RTI)',
      'Consumables Cover',
      '24x7 Roadside Assistance (RSA)',
      'Key & Lock Replacement'
    ],
    claimSupport: '100% Cashless Repairs + Prasad Salgaonkar Dedicated Spot Assistance',
    discountFeatures: [
      'Up to 50% No Claim Bonus (NCB) transfer from old insurer',
      'Automobile Association of India discount',
      'Anti-theft device ARAI approved discount'
    ],
    description: 'The highest tier of private car protection. If your car meets with an accident, insurer pays 100% cost of replaced parts (fiber, plastic, glass, metal) without subtracting depreciation.',
    idealFor: 'Cars under 5 to 7 years old, new car owners, daily city drivers, and premium SUVs.'
  },
  {
    id: 'veh-car-comp',
    category: 'vehicle',
    subCategory: 'four_wheeler',
    name: 'Private Car Standard Comprehensive Policy',
    vehicleType: 'Private Car (All Makes & Models)',
    coverageType: 'Standard Comprehensive (OD + TP)',
    badge: 'Cost Effective Shield',
    tagline: 'Balanced Protection Covering Own Damage, Theft, Natural Disasters & Legal Liability',
    keyBenefits: [
      'Complete coverage against car damage due to collision, overturning, or vandalism',
      '100% claim payout on vehicle theft or total damage loss up to IDV',
      'Protection against floods, cyclones, landslides, storms, and fire',
      'Unlimited Third Party bodily injury and death legal liability',
      'Third Party property damage cover up to ₹7.5 Lakhs'
    ],
    recommendedAddons: [
      'Roadside Assistance (RSA)',
      'Personal Accident Cover (₹15 Lakh)',
      'NCB Retention Protector'
    ],
    claimSupport: 'Cashless garage access across all top car service centers',
    discountFeatures: [
      'Up to 50% NCB bonus transfer',
      'Voluntary deductible discount options'
    ],
    description: 'Standard Comprehensive Car Insurance shields your vehicle against own damage, accidental loss, fire, theft, and third-party liabilities with industry-standard depreciation scales.',
    idealFor: 'Cars older than 5 years or owners seeking a cost-effective comprehensive plan.'
  },
  {
    id: 'veh-car-ev',
    category: 'vehicle',
    subCategory: 'electric_vehicle',
    name: 'Electric Car (EV) Comprehensive & Battery Shield',
    vehicleType: 'Electric Car (Tata EV, MG, Hyundai, Mahindra, BYD, etc.)',
    coverageType: 'EV Specific Comprehensive & Charging Kit Cover',
    badge: 'Specialized EV Cover',
    tagline: 'High-Tech Protection for Costly EV Battery Pack, Inverter, Charger & Power Surges',
    keyBenefits: [
      'Dedicated high-voltage Traction Battery Pack protection against water and thermal runaway',
      'Wall-mount home charger and portable charging cable accidental loss & theft cover',
      'Emergency towing to the nearest EV fast-charging station if battery completely discharges',
      'Zero depreciation coverage for sensitive electronic controllers and display screens',
      'Electric surge and short circuit fire protection'
    ],
    recommendedAddons: [
      'EV Battery & Drive Motor Protect',
      'Zero Depreciation',
      'Return to Invoice',
      'Emergency Roadside Assistance with Battery Towing'
    ],
    claimSupport: 'Certified EV manufacturer authorized service network cashless claims',
    discountFeatures: [
      'Government EV concession incentives',
      'Max NCB transfer discounts'
    ],
    description: 'A specialized insurance plan formulated for electric vehicles, covering the expensive high-voltage battery pack, motors, onboard computers, and portable charging accessories.',
    idealFor: 'All electric car owners (Tiago EV, Nexon EV, Punch EV, MG ZS EV, XUV400, etc.).'
  },
  {
    id: 'veh-car-tp',
    category: 'vehicle',
    subCategory: 'four_wheeler',
    name: 'Private Car Third Party Liability Only',
    vehicleType: 'Private Car (All Types)',
    coverageType: 'Statutory Act Only Policy',
    badge: 'Legal Mandatory Minimum',
    tagline: '100% Legal Traffic Compliance to Avoid Heavy RTO Fines & Court Liabilities',
    keyBenefits: [
      'Legally mandated under Motor Vehicles Act, 1988',
      'Protects against legal financial liabilities for third-party injury, disability, or death',
      'Third-party property damage coverage up to ₹7.5 Lakhs',
      'Avoid heavy traffic police fines and challans (up to ₹2,000 - ₹4,000)',
      'Instant digital policy copy issued within 5 minutes'
    ],
    recommendedAddons: [
      'Compulsory Personal Accident (CPA) Owner-Driver ₹15 Lakh'
    ],
    claimSupport: 'Dedicated legal and tribunal settlement representation',
    discountFeatures: [
      'Fixed tariff rates regulated by IRDAI'
    ],
    description: 'Act-Only Third Party policy satisfies statutory legal obligations under the Motor Vehicles Act, defending you against legal suits and claims caused to others.',
    idealFor: 'Older vehicles, sparingly used secondary cars, or owners seeking minimal legal compliance.'
  },
  {
    id: 'veh-car-paydrive',
    category: 'vehicle',
    subCategory: 'four_wheeler',
    name: 'Pay-As-You-Drive / Mileage Based Car Insurance',
    vehicleType: 'Private Car (Low to Moderate Usage)',
    coverageType: 'Kilometer-Tiered Comprehensive',
    badge: 'Save up to 40% Premium',
    tagline: 'Drive Less, Pay Less – Ideal for Work-from-Home & Low Mileage Car Owners',
    keyBenefits: [
      'Save up to 25% - 40% on own damage premium if you drive under 5,000 - 10,000 km/year',
      'Full comprehensive coverage during both driving and parking hours',
      'Top-up kilometers anytime smoothly if your driving requirements increase',
      'Zero depreciation and roadside assistance can be included',
      'Simple odometer reading verification via mobile app'
    ],
    recommendedAddons: [
      'Zero Depreciation',
      'Engine Protector',
      'Roadside Assistance'
    ],
    claimSupport: 'Full cashless repair network identical to standard policies',
    discountFeatures: [
      'Direct upfront discount based on chosen kilometer slab',
      'Full NCB carryover'
    ],
    description: 'An innovative usage-based comprehensive plan where you only pay for the distance you actually drive, cutting down unnecessary costs for low-usage vehicles.',
    idealFor: 'Remote workers, retirees, city drivers, and families with multiple cars.'
  },
  {
    id: 'veh-bike-zerodep',
    category: 'vehicle',
    subCategory: 'two_wheeler',
    name: 'Two-Wheeler Bumper to Bumper (Zero Depreciation)',
    vehicleType: 'Motorcycle / Scooter / Moped',
    coverageType: 'Comprehensive Nil-Depreciation Bike Shield',
    badge: 'Best for Bikes & Scooters',
    tagline: 'Zero Cost Replacement on Expensive Fibre, Plastic & Metal Body Panels',
    keyBenefits: [
      '100% cashless settlement without parts depreciation deductions',
      'Covers fiber fairings, headlight assemblies, mudguards, and exhaust guards',
      'Full compensation on bike theft, collision, flood, or fire damage',
      'Mandatory Third Party liability coverage included',
      'Zero hassle spot survey and fast WhatsApp claim initiation'
    ],
    recommendedAddons: [
      'Roadside Assistance (RSA with on-spot puncture & fuel)',
      'Engine Protect',
      'Consumables Cover',
      'Helmet Cover'
    ],
    claimSupport: 'Cashless repairs at 5,000+ two-wheeler multi-brand centers',
    discountFeatures: [
      'Up to 50% NCB rollover from existing bike policy'
    ],
    description: 'Two-wheeler fiber parts and fairings suffer heavy depreciation deductions in ordinary policies. Zero-Dep ensures you pay almost zero out-of-pocket repair costs.',
    idealFor: 'New bikes and scooters (Honda Activa, Splendor, Pulsar, Apache, Royal Enfield, etc.).'
  },
  {
    id: 'veh-bike-comp',
    category: 'vehicle',
    subCategory: 'two_wheeler',
    name: 'Two-Wheeler Comprehensive Package (OD + TP)',
    vehicleType: 'Motorcycle / Scooter (All Brands)',
    coverageType: 'Standard Comprehensive Package',
    badge: 'Popular Everyday Choice',
    tagline: 'Complete Security for Your Daily Ride Against Accidental Damage, Fire & Theft',
    keyBenefits: [
      'Protects your bike against accidental damage, collision, and vandalism',
      'Complete IDV reimbursement in case of theft or untraceable vehicle',
      'Coverage against natural disasters (floods, heavy rain, storms, earthquakes)',
      'Statutory Third Party liability protection',
      'Instant renewal without physical vehicle inspection for expiring policies'
    ],
    recommendedAddons: [
      'Personal Accident Cover (₹15 Lakh)',
      '24x7 Roadside Assistance'
    ],
    claimSupport: 'Pan-India cashless network with fast WhatsApp settlement',
    discountFeatures: [
      'Up to 50% NCB bonus discount',
      'Discounts for two-wheeler security locks'
    ],
    description: 'Standard Comprehensive Two-Wheeler Insurance offers well-rounded protection covering your own bike’s damages as well as third-party legal liabilities.',
    idealFor: 'Bikes and scooters older than 3 to 5 years needing dependable overall protection.'
  },
  {
    id: 'veh-bike-bundle',
    category: 'vehicle',
    subCategory: 'two_wheeler',
    name: 'New Bike 1-Yr Own Damage + 5-Yr Third Party Bundle',
    vehicleType: 'Brand New Two-Wheeler / Showroom Delivery',
    coverageType: 'Multi-Year Mandatory Bundle Policy',
    badge: 'Mandatory for New Bikes',
    tagline: 'Save Up to 35% on Showroom Quotations with Prasad Salgaonkar Direct Advisory',
    keyBenefits: [
      'Complies with Supreme Court mandate: 5 Years TP + 1 Year Own Damage Cover',
      'Substantially cheaper than showroom agent quotes with better add-ons',
      'Protection against theft, accidents, natural perils, and third party claims',
      'Doorstep policy document delivery before vehicle delivery from showroom',
      'Continuous 5-year third party validity without yearly renewal headaches'
    ],
    recommendedAddons: [
      'Zero Depreciation',
      'Roadside Assistance',
      'Engine Protect'
    ],
    claimSupport: 'Cashless coordination with all brand dealership workshops',
    discountFeatures: [
      'Special showroom price match discount',
      'Bundle savings'
    ],
    description: 'By law, every brand new two-wheeler requires a 5-year Third Party policy. Prasad Salgaonkar provides this bundle at significant discounts compared to dealer prices.',
    idealFor: 'Anyone purchasing a brand new bike or scooter from any automobile showroom.'
  },
  {
    id: 'veh-bike-ev',
    category: 'vehicle',
    subCategory: 'electric_vehicle',
    name: 'Electric Two-Wheeler (EV Scooter / Bike) Shield',
    vehicleType: 'EV Scooter (Ola, Ather, TVS iQube, Bajaj Chetak, Hero Vida, etc.)',
    coverageType: 'EV Comprehensive + Battery & Charger Protection',
    badge: 'Specialized EV Two-Wheeler',
    tagline: 'Comprehensive Cover Protecting High-Cost Lithium Battery, Touchscreen & Charger',
    keyBenefits: [
      'Protection for the expensive lithium-ion battery pack against water damage & short circuits',
      'Coverage for the home portable charger against theft and accidental damage',
      'Emergency roadside assistance including battery towing if charge runs out',
      'Touchscreen instrument console and smart sensors covered',
      'Own damage and mandatory third party liability included'
    ],
    recommendedAddons: [
      'Battery Protection Add-on',
      'Zero Depreciation',
      'Roadside Assistance'
    ],
    claimSupport: 'Cashless garage access across EV authorized service hubs',
    discountFeatures: [
      'Special green energy discount rates',
      'Max NCB eligibility'
    ],
    description: 'An EV-specific two-wheeler policy engineered to safeguard expensive battery units, digital displays, and charging gear against unexpected perils.',
    idealFor: 'Ola S1, Ather 450X, TVS iQube, Chetak, and all other electric two-wheeler riders.'
  },
  {
    id: 'veh-bike-tp',
    category: 'vehicle',
    subCategory: 'two_wheeler',
    name: 'Two-Wheeler Third Party Legal Liability Only',
    vehicleType: 'Motorcycle / Scooter / Moped',
    coverageType: 'Act Only Policy',
    badge: 'Budget Statutory Cover',
    tagline: 'Safeguard Against Heavy Traffic Fines & Third-Party Legal Liabilities',
    keyBenefits: [
      '100% legal compliance to avoid traffic challans (₹2,000 fine under amended MV Act)',
      'Unlimited liability for third-party death and serious bodily injury',
      'Third-party property damages covered up to ₹1,00,000',
      'Instant policy issuance on WhatsApp in under 3 minutes',
      'No physical vehicle inspection or photos required'
    ],
    recommendedAddons: [
      '₹15 Lakh Owner-Driver Personal Accident (PA) Cover'
    ],
    claimSupport: 'Legal advocacy and MACT tribunal claim support',
    discountFeatures: [
      'Lowest legally regulated annual tariff'
    ],
    description: 'The most economical two-wheeler policy providing mandatory legal compliance under the Motor Vehicles Act with instant digital issuance.',
    idealFor: 'Very old bikes, bikes used only in rural areas, or owners seeking immediate legal clearance.'
  },
  {
    id: 'veh-comm-goods',
    category: 'vehicle',
    subCategory: 'commercial',
    name: 'Commercial Goods Vehicle Insurance',
    vehicleType: 'Goods Carriers (Tata Ace, Pickup, Bolero Maxi Truck, Eicher, Heavy Trucks)',
    coverageType: 'Commercial Comprehensive / Package Policy',
    badge: 'Transport Business Essential',
    tagline: 'Minimize Downtime & Protect Your Logistics Assets with Fast Claim Payouts',
    keyBenefits: [
      'Covers own damage resulting from highway accidents, overturning, fire, and collision',
      'High sum insured protection against vehicle theft or total loss',
      'Third-party bodily injury and property damage liabilities covered',
      'Coverage for paid driver, cleaner, and coolies under Workmen’s Compensation',
      'Fast-track surveyor assignment to reduce business vehicle downtime'
    ],
    recommendedAddons: [
      'IMT-23 Cover (Lamps, tyres, mudguards extension)',
      'Towing & Crane Charges Enhancement',
      'Legal Liability to Paid Driver & Cleaner',
      'Consumables Cover'
    ],
    claimSupport: 'Dedicated commercial fleet desk and immediate surveyor mobilization',
    discountFeatures: [
      'Fleet discount for multiple commercial vehicles',
      'Up to 50% commercial NCB bonus'
    ],
    description: 'Comprehensive commercial vehicle insurance for small, medium, and heavy goods vehicles ensuring minimal fleet downtime and full asset protection.',
    idealFor: 'Logistics operators, transporters, shop owners, and delivery fleet managers.'
  },
  {
    id: 'veh-comm-passenger',
    category: 'vehicle',
    subCategory: 'commercial',
    name: 'Commercial Passenger Vehicle (Taxi / Cab / Auto)',
    vehicleType: 'Passenger Carriers (Ola/Uber Cabs, Tourist Taxis, Auto-Rickshaws, Vans)',
    coverageType: 'Commercial Passenger Package Policy',
    badge: 'Cab & Taxi Essential',
    tagline: 'Protect Your Daily Livelihood, Passengers & Vehicle with Complete Legal Defense',
    keyBenefits: [
      'Full cover for accidental damage, riots, strikes, natural disasters, and theft',
      'Legal liability for fare-paying passengers covered under carrier policy',
      'Workmen compensation coverage for paid drivers and conductors',
      'Mandatory Third Party liability protection with high legal cover',
      'Cashless garage repair facilities across all major taxi hubs'
    ],
    recommendedAddons: [
      'Zero Depreciation (available for selected taxi models)',
      'Passenger Personal Accident Cover',
      'Driver Legal Liability'
    ],
    claimSupport: '24x7 helpline with expedited claim surveyor inspection',
    discountFeatures: [
      'NCB transfer',
      'Multi-vehicle discount for taxi operators'
    ],
    description: 'Specially structured commercial insurance for yellow-plate taxis, tourist cabs, and auto-rickshaws covering both vehicle damage and passenger legal liabilities.',
    idealFor: 'Ola/Uber drivers, tourist taxi operators, travel agencies, and auto-rickshaw owners.'
  },
  {
    id: 'veh-comm-bus',
    category: 'vehicle',
    subCategory: 'commercial',
    name: 'School Bus, Staff Bus & Fleet Vehicle Insurance',
    vehicleType: 'Buses / Tempo Travellers / Staff Shuttles (12 to 50+ Seaters)',
    coverageType: 'Commercial Passenger Fleet Package',
    badge: 'Institution & Fleet Shield',
    tagline: 'High Security Cover for Student & Employee Shuttles with Full Passenger Safety',
    keyBenefits: [
      'Comprehensive damage cover for body, chassis, engine, and electrical fittings',
      'Passenger liability coverage for all licensed seating capacity seats',
      'Coverage for driver and attendant/conductor',
      'Third party injury and property damage liability compliance',
      'Customized corporate fleet pricing with high volume discounts'
    ],
    recommendedAddons: [
      'Personal Accident Cover for Passengers',
      'Legal Liability to Paid Driver & Conductor',
      'IMT-23 Cover'
    ],
    claimSupport: 'Fleet management claim desk with direct surveyor liaison',
    discountFeatures: [
      'Special institutional concession for educational institutions',
      'Volume fleet discount'
    ],
    description: 'High-capacity passenger vehicle insurance providing comprehensive protection for school buses, college shuttles, corporate staff buses, and luxury tour coaches.',
    idealFor: 'Schools, colleges, corporate transport providers, and tour & travel operators.'
  },
  {
    id: 'veh-comm-misc',
    category: 'vehicle',
    subCategory: 'commercial',
    name: 'Special Commercial Vehicle (Tractor / JCB / Crane)',
    vehicleType: 'Agricultural Tractors, Backhoe Loaders (JCB), Cranes, Forklifts',
    coverageType: 'Miscellaneous Commercial Vehicle Package',
    badge: 'Heavy Machinery Shield',
    tagline: 'Heavy Duty Protection for Construction, Agricultural & Industrial Equipment',
    keyBenefits: [
      'Protection against tipping, overturning, impact, fire, and malicious damage',
      'Theft and burglary coverage for valuable heavy machinery assets',
      'Third-party property and bodily injury legal defense',
      'Tractor trailer attachment coverage options',
      'Covers machine operators and helpers under statutory provisions'
    ],
    recommendedAddons: [
      'Trailer attachment cover',
      'Operator personal accident',
      'Transit damage cover'
    ],
    claimSupport: 'Specialized on-site spot survey by heavy machinery technical surveyors',
    discountFeatures: [
      'Agricultural tractor concessional rates',
      'Anti-theft fitted discounts'
    ],
    description: 'Miscellaneous and special type vehicle insurance covering agricultural tractors, construction earthmovers, excavators, and industrial mobile machinery.',
    idealFor: 'Farmers, contractors, builders, industrial warehouses, and infrastructure firms.'
  }
];

export const VEHICLE_ADDONS: VehicleAddon[] = [
  {
    id: 'addon-zerodep',
    name: 'Zero Depreciation (Bumper-to-Bumper)',
    description: 'Insurer pays 100% cost of replaced parts (fiber, plastic, glass, metal) without any depreciation reduction.',
    tag: 'Must Have'
  },
  {
    id: 'addon-engine',
    name: 'Engine & Gearbox Protection',
    description: 'Covers repair/replacement of internal engine parts caused by water ingression (hydrostatic lock) or lubricant leakage.',
    tag: 'Crucial in Monsoons'
  },
  {
    id: 'addon-rsa',
    name: '24x7 Roadside Assistance (RSA)',
    description: 'Round-the-clock emergency support for towing, battery jump-start, flat tyre replacement, minor mechanical fixes, and fuel delivery.',
    tag: 'Highway Peace of Mind'
  },
  {
    id: 'addon-rti',
    name: 'Return to Invoice (RTI)',
    description: 'In case of vehicle theft or total damage, insurer pays the full original invoice price of the vehicle including road tax and registration.',
    tag: 'New Vehicle Best'
  },
  {
    id: 'addon-ncb',
    name: 'NCB Protection Cover',
    description: 'Protects your accumulated No Claim Bonus discount (up to 50%) even if you make 1 claim during the policy year.',
    tag: 'Saves Next Year Cash'
  },
  {
    id: 'addon-consumables',
    name: 'Consumables Cover',
    description: 'Reimburses the cost of engine oil, lubricants, brake fluid, coolants, nuts, bolts, washers, and AC gas used in accident repairs.',
    tag: 'Zero Out of Pocket'
  },
  {
    id: 'addon-tyre',
    name: 'Tyre & Rim Protection',
    description: 'Covers accidental cuts, bursts, bulges, and alloy wheel damage that standard policies exclude.',
    tag: 'Premium Cars'
  },
  {
    id: 'addon-key',
    name: 'Key & Lock Replacement Cover',
    description: 'Reimburses the expensive cost of modern sensor key replacement and vehicle lock tumbler recoding if key is lost or stolen.',
    tag: 'Smart Keys'
  },
  {
    id: 'addon-pa',
    name: 'Personal Accident Cover (₹15 Lakh)',
    description: 'Mandatory IRDAI accident cover providing ₹15 Lakh financial security to owner-driver in case of accidental demise or permanent disability.',
    tag: 'IRDAI Mandate'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does the WhatsApp inquiry with Agent Prasad Salgaonkar work?',
    a: 'Simply select the LIC plans or Vehicle insurance plans you are interested in, add any specific requirements (such as sum assured, budget, or car make/model), and click "Submit to WhatsApp". It opens a direct WhatsApp chat with Agent Prasad Salgaonkar (+91 8550927882) with all your selected plans and requirements neatly pre-typed. Prasad will immediately review your details and send you personalized premium quotations, benefit illustrations, and claim guidance.'
  },
  {
    q: 'Why should I buy insurance through Agent Prasad Salgaonkar instead of buying online alone?',
    a: 'When an accident, hospitalization, or death occurs, online portals often leave you dealing with automated chatbots and endless claim call centers. Agent Prasad Salgaonkar provides 100% personal, on-the-ground doorstep claim assistance, helps your nominee complete documentation, coordinates cashless repairs with garages, and ensures you get maximum tax benefits and bonus returns.'
  },
  {
    q: 'Can Agent Prasad Salgaonkar help me transfer my existing Car / Bike No Claim Bonus (NCB)?',
    a: 'Yes, absolutely! If you are switching insurers or buying a new car, you can transfer up to 50% of your accumulated No Claim Bonus discount. Agent Prasad will verify your previous policy documents and ensure you receive the maximum eligible discount on your premium.'
  },
  {
    q: 'Are LIC maturity returns really 100% tax-free?',
    a: 'Yes! Under Section 10(10D) of the Indian Income Tax Act, the maturity proceeds, survival benefits (money-back installments), and death claims received from life insurance policies like LIC Jeevan Labh, Jeevan Anand, and Jeevan Umang are completely exempt from income tax (subject to prevailing annual premium limits under Finance Act regulations).'
  },
  {
    q: 'What documents are required to initiate an LIC policy or Vehicle insurance renewal?',
    a: 'For LIC: Aadhaar Card, PAN Card, passport size photograph, bank account details (cheque or passbook for direct credit), and income proof for high sum assured. For Vehicle Insurance: RC copy (Registration Certificate), previous policy copy, and photos of vehicle if policy is expired. Everything can be shared conveniently via WhatsApp.'
  }
];
