export interface PricingEstimate {
  item: string;
  price: string;
  time: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface CommonProblem {
  problem: string;
  solution: string;
  solutionHindi?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  titleHindi: string;
  image: string;
  bannerImage?: string;
  icon: string; // Lucide icon name
  shortDesc: string;
  longDesc: string;
  features: string[];
  pricing: PricingEstimate[];
  problems: CommonProblem[];
  faqs: FAQ[];
}

export interface BookingData {
  name: string;
  phone: string;
  serviceId: string;
  problem: string;
  date?: string;
  timeSlot?: string;
  address?: string;
}
