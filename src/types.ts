export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  authorReviewsCount: number;
  authorPhotosCount?: number;
  response?: string;
  avatar?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClinicInfo {
  name: string;
  rating: number;
  reviewCount: number;
  category: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: {
    day: string;
    time: string;
    isOpen?: boolean;
  }[];
}
