/**
 * Forge Technologies — Currency & Budget Utilities
 * Standardized INR currency formatting and Indian market budget presets.
 */

/**
 * Formats a number into Indian Rupees (INR / ₹) with standard Indian numbering grouping.
 * E.g., formatINR(5000) => "₹5,000", formatINR(100000) => "₹1,00,000"
 */
export const formatINR = (amount: number): string =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

/**
 * Standardized Ballpark Budget Tiers tailored for Indian startups, retail, and freelance clients
 */
export interface BudgetTier {
  id: string;
  value: string;
  label: string;
  rangeText: string;
  minAmount: number;
  maxAmount: number;
  idealFor: string;
}

export const BUDGET_TIERS: BudgetTier[] = [
  {
    id: 'starter',
    value: 'Under ₹25,000 (Starter / Sprint)',
    label: 'Under ₹25,000 (Starter / Sprint)',
    rangeText: '₹15,000 – ₹25,000',
    minAmount: 15000,
    maxAmount: 25000,
    idealFor: 'Landing pages, brand portfolio revamp, or speed & SEO optimization sprint',
  },
  {
    id: 'growth',
    value: '₹25,000 – ₹60,000 (Standard Website / App MVP)',
    label: '₹25,000 – ₹60,000 (Standard Website / App MVP)',
    rangeText: '₹25,000 – ₹60,000',
    minAmount: 25000,
    maxAmount: 60000,
    idealFor: 'Complete business website, React/Next.js frontend, or early product MVP',
  },
  {
    id: 'commerce',
    value: '₹60,000 – ₹1,20,000 (Custom Full-Stack / E-Commerce)',
    label: '₹60,000 – ₹1,20,000 (Custom Full-Stack / E-Commerce)',
    rangeText: '₹60,000 – ₹1,20,000',
    minAmount: 60000,
    maxAmount: 120000,
    idealFor: 'Custom online store, local retail inventory sync, full-stack client portal',
  },
  {
    id: 'platform',
    value: '₹1,20,000 – ₹2,50,000+ (Comprehensive Platform / AI Solution)',
    label: '₹1,20,000 – ₹2,50,000+ (Comprehensive Platform / AI Solution)',
    rangeText: '₹1,20,000 – ₹2,50,000+',
    minAmount: 120000,
    maxAmount: 250000,
    idealFor: 'Enterprise Java backend, YOLO computer vision, RAG AI assistant, multi-service package',
  },
  {
    id: 'flexible',
    value: 'Flexible / Need scoping guidance',
    label: 'Flexible / Need scoping guidance',
    rangeText: 'Custom Milestone Scoping',
    minAmount: 0,
    maxAmount: 0,
    idealFor: 'Exploratory projects, multi-phase technical consulting, or custom architectures',
  },
];
