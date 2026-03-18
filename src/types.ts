export type Language = 'en' | 'fr' | 'es' | 'it' | 'ar';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  authorReviewsCount: number;
  authorPhotosCount?: number;
  response?: string;
  avatar: string;
}

export interface ClinicHour {
  day: string;
  time: string;
  isOpen: boolean;
}

export interface Translation {
  bookNow: string;
  overview: string;
  reviews: string;
  about: string;
  directions: string;
  elevate: string;
  naturalBeauty: string;
  heroDesc: string;
  explore: string;
  viewGallery: string;
  nextAvailable: string;
  tomorrow: string;
  quickBook: string;
  openNow: string;
  closes: string;
  theClinic: string;
  patientStories: string;
  visitUs: string;
  address: string;
  hours: string;
  phone: string;
  whatsappUs: string;
  bookAppointment: string;
  womenOwned: string;
  save: string;
  nearby: string;
  sendToPhone: string;
  share: string;
}
