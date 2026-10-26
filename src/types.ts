export type PageRoute = 
  | '/' 
  | '/projects'
  | '/about' 
  | '/services' 
  | '/products' 
  | '/contact' 
  | '/policies' 
  | '/terms' 
  | '/privacy'
  | string;

export interface ServiceItem {
  id: string;
  title: string;
  category: 'web' | 'mobile-software' | 'ai' | 'creative';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface ProjectBriefForm {
  name: string;
  email: string;
  businessName: string;
  service: string;
  budgetRange: string;
  timeline: string;
  description: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
}
