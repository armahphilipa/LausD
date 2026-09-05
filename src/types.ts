export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  format?: 'year' | 'number';
}

export interface ServiceImage {
  url: string;
  caption: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  isCore?: boolean;
  tag?: string;
  iconName: 'Shield' | 'Droplets' | 'Anchor' | 'Building2';
  image?: string;
  images?: ServiceImage[];
}

export interface FlowStep {
  id: number;
  title: string;
  description: string;
}

export interface ImpactItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface MarketPoint {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryFormData {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  ukExperience: string[];
  ghanaExpertise: string[];
  specialties: string[];
  quote?: string;
  isFounder?: boolean;
}
