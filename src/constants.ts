import { Review, Service, ClinicInfo } from './types';

export const CLINIC_INFO: ClinicInfo = {
  name: "Dr. Luxe Aesthetic Clinic",
  rating: 4.8,
  reviewCount: 124,
  category: "Medical Aesthetic Center",
  address: "C. de Serrano, 45, Salamanca, 28001 Madrid, Spain",
  phone: "+34 912 34 56 78",
  whatsapp: "https://wa.me/34912345678",
  hours: [
    { day: "Monday", time: "10:00 AM - 8:00 PM", isOpen: true },
    { day: "Tuesday", time: "10:00 AM - 8:00 PM", isOpen: true },
    { day: "Wednesday", time: "10:00 AM - 8:00 PM", isOpen: true },
    { day: "Thursday", time: "10:00 AM - 8:00 PM", isOpen: true },
    { day: "Friday", time: "10:00 AM - 8:00 PM", isOpen: true },
    { day: "Saturday", time: "10:00 AM - 2:00 PM", isOpen: true },
    { day: "Sunday", time: "Closed", isOpen: false },
  ]
};

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "HydraFacial Elite",
    description: "Advanced skin resurfacing treatment that combines cleansing, exfoliation, extraction, and hydration.",
    icon: "Sparkles"
  },
  {
    id: "2",
    title: "Medical Aesthetics",
    description: "Non-surgical treatments to enhance natural beauty and restore youthful vitality.",
    icon: "Stethoscope"
  },
  {
    id: "3",
    title: "Laser Therapy",
    description: "State-of-the-art laser technology for skin rejuvenation and hair removal.",
    icon: "Zap"
  },
  {
    id: "4",
    title: "Dermal Fillers",
    description: "Premium injectables to restore volume and smooth fine lines with natural results.",
    icon: "Droplets"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Elena Rodriguez",
    rating: 5,
    date: "2 months ago",
    content: "An exceptional experience from start to finish. Dr. Luxe and the entire team are true professionals. The results of my HydraFacial were immediate and stunning. Highly recommend booking in advance!",
    authorReviewsCount: 4,
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    id: "2",
    author: "Marco Silva",
    rating: 5,
    date: "a year ago",
    content: "This is by far the best clinic in Madrid. The staff is incredibly friendly and the atmosphere is so relaxing. They really listen to your needs and provide personalized care.",
    authorReviewsCount: 12,
    authorPhotosCount: 3,
    response: "Thank you so much for your trust, Marco! It's always a pleasure to see you. ✨",
    avatar: "https://picsum.photos/seed/marco/100/100"
  },
  {
    id: "3",
    author: "Sofia Chen",
    rating: 4,
    date: "6 months ago",
    content: "Very professional medical aesthetic center. The translator was very helpful and the doctor explained everything clearly. The clinic is spotless and very modern.",
    authorReviewsCount: 8,
    authorPhotosCount: 1,
    avatar: "https://picsum.photos/seed/sofia/100/100"
  }
];
