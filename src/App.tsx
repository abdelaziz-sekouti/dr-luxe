/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Star, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  Navigation, 
  Smartphone,
  Sparkles,
  Stethoscope,
  Zap,
  Droplets,
  Menu,
  X,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_INFO, SERVICES, REVIEWS } from './constants';

const IconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
};

type Language = 'en' | 'fr' | 'es' | 'ar' | 'it';

const translations = {
  en: {
    bookNow: "BOOK NOW",
    overview: "Overview",
    reviews: "Reviews",
    about: "About",
    directions: "Directions",
    elevate: "Elevate Your",
    naturalBeauty: "Natural Beauty",
    heroDesc: "Madrid's premier destination for advanced medical aesthetics. We combine scientific precision with an artistic eye to deliver transformative results.",
    explore: "EXPLORE TREATMENTS",
    viewGallery: "VIEW GALLERY",
    nextAvailable: "Next Available",
    tomorrow: "Tomorrow, 10:30 AM",
    quickBook: "Quick Book",
    openNow: "Open now",
    closes: "Closes 8:00 PM",
    theClinic: "The Clinic",
    patientStories: "Patient Stories",
    visitUs: "Visit Us",
    address: "Address",
    hours: "Hours",
    phone: "Phone",
    whatsappUs: "WhatsApp Us",
    bookAppointment: "Book Appointment",
    womenOwned: "Identifies as women-owned",
    save: "Save",
    nearby: "Nearby",
    sendToPhone: "Send to phone",
    share: "Share"
  },
  fr: {
    bookNow: "RÉSERVER",
    overview: "Aperçu",
    reviews: "Avis",
    about: "À propos",
    directions: "Itinéraire",
    elevate: "Sublimez Votre",
    naturalBeauty: "Beauté Naturelle",
    heroDesc: "La destination de premier choix à Madrid pour l'esthétique médicale avancée. Nous combinons précision scientifique et regard artistique.",
    explore: "EXPLORER LES SOINS",
    viewGallery: "VOIR LA GALERIE",
    nextAvailable: "Prochain RDV",
    tomorrow: "Demain, 10h30",
    quickBook: "Réservation Rapide",
    openNow: "Ouvert",
    closes: "Ferme à 20h00",
    theClinic: "La Clinique",
    patientStories: "Témoignages",
    visitUs: "Nous Visiter",
    address: "Adresse",
    hours: "Horaires",
    phone: "Téléphone",
    whatsappUs: "WhatsApp",
    bookAppointment: "Prendre RDV",
    womenOwned: "Entreprise gérée par des femmes",
    save: "Enregistrer",
    nearby: "À proximité",
    sendToPhone: "Envoyer au tél",
    share: "Partager"
  },
  es: {
    bookNow: "RESERVAR",
    overview: "Resumen",
    reviews: "Reseñas",
    about: "Sobre nosotros",
    directions: "Cómo llegar",
    elevate: "Eleva Tu",
    naturalBeauty: "Belleza Natural",
    heroDesc: "El destino principal de Madrid para la estética médica avanzada. Combinamos precisión científica con un ojo artístico.",
    explore: "EXPLORAR TRATAMIENTOS",
    viewGallery: "VER GALERÍA",
    nextAvailable: "Próximo Disponible",
    tomorrow: "Mañana, 10:30 AM",
    quickBook: "Reserva Rápida",
    openNow: "Abierto ahora",
    closes: "Cierra a las 8:00 PM",
    theClinic: "La Clínica",
    patientStories: "Historias de Pacientes",
    visitUs: "Visítanos",
    address: "Dirección",
    hours: "Horarios",
    phone: "Teléfono",
    whatsappUs: "WhatsApp",
    bookAppointment: "Reservar Cita",
    womenOwned: "Identificado como propiedad de mujeres",
    save: "Guardar",
    nearby: "Cerca",
    sendToPhone: "Enviar al móvil",
    share: "Compartir"
  },
  ar: {
    bookNow: "احجز الآن",
    overview: "نظرة عامة",
    reviews: "المراجعات",
    about: "حول",
    directions: "الاتجاهات",
    elevate: "ارتقِ بـ",
    naturalBeauty: "جمالك الطبيعي",
    heroDesc: "وجهة مدريد الأولى للجمال الطبي المتقدم. نجمع بين الدقة العلمية والنظرة الفنية لتقديم نتائج مذهلة.",
    explore: "استكشف العلاجات",
    viewGallery: "عرض المعرض",
    nextAvailable: "الموعد المتاح التالي",
    tomorrow: "غداً، 10:30 صباحاً",
    quickBook: "حجز سريع",
    openNow: "مفتوح الآن",
    closes: "يغلق الساعة 8:00 مساءً",
    theClinic: "العيادة",
    patientStories: "قصص المرضى",
    visitUs: "تفضل بزيارتنا",
    address: "العنوان",
    hours: "الساعات",
    phone: "الهاتف",
    whatsappUs: "واتساب",
    bookAppointment: "حجز موعد",
    womenOwned: "تدار من قبل النساء",
    save: "حفظ",
    nearby: "قريب",
    sendToPhone: "إرسال إلى الهاتف",
    share: "مشاركة"
  },
  it: {
    bookNow: "PRENOTA ORA",
    overview: "Panoramica",
    reviews: "Recensioni",
    about: "Chi siamo",
    directions: "Indicazioni",
    elevate: "Eleva la Tua",
    naturalBeauty: "Bellezza Naturale",
    heroDesc: "La destinazione principale di Madrid per l'estetica medica avanzata. Combiniamo precisione scientifica e occhio artistico.",
    explore: "ESPLORA TRATTAMENTI",
    viewGallery: "VEDI GALLERIA",
    nextAvailable: "Prossimo Disponibile",
    tomorrow: "Domani, 10:30",
    quickBook: "Prenotazione Rapida",
    openNow: "Aperto ora",
    closes: "Chiude alle 20:00",
    theClinic: "La Clinica",
    patientStories: "Storie dei Pazienti",
    visitUs: "Vieni a Trovarci",
    address: "Indirizzo",
    hours: "Orari",
    phone: "Telefono",
    whatsappUs: "WhatsApp",
    bookAppointment: "Prenota Appuntamento",
    womenOwned: "Gestito da donne",
    save: "Salva",
    nearby: "Nelle vicinanze",
    sendToPhone: "Invia al telefono",
    share: "Condividi"
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'it', label: 'Italiano' },
    { code: 'ar', label: 'العربية' },
  ];

  const tabs = [t.overview, t.reviews, t.about, t.directions];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAction = (action: string) => {
    // In a real app, these would trigger specific logic
    console.log(`Action triggered: ${action}`);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-clinic-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">L</div>
            <span className={`text-xl font-serif font-bold tracking-tight text-clinic-dark`}>
              DR. LUXE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['Overview', 'Reviews', 'About'].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab);
                }}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-clinic-gold ${activeTab === tab ? 'text-clinic-gold' : 'text-clinic-dark/70'}`}
              >
                {tabs[idx]}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-sm font-bold text-clinic-dark/70 hover:text-clinic-gold transition-colors uppercase tracking-widest"
              >
                <Globe size={16} />
                {lang}
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl overflow-hidden border border-clinic-dark/5"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-clinic-cream transition-colors ${lang === l.code ? 'text-clinic-gold font-bold' : 'text-clinic-dark/70'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-clinic-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-clinic-gold/90 transition-all shadow-md hover:shadow-lg"
            >
              {t.bookNow}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-clinic-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {['Overview', 'Reviews', 'About'].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                    scrollToSection(tab);
                  }}
                  className="text-2xl font-serif text-left border-b border-clinic-dark/10 pb-4"
                >
                  {tabs[idx]}
                </button>
              ))}
              
              <div className="py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-clinic-dark/40 mb-4">Language</p>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl text-sm font-bold border ${lang === l.code ? 'bg-clinic-gold text-white border-clinic-gold' : 'border-clinic-dark/10 text-clinic-dark/70'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href={CLINIC_INFO.whatsapp}
                className="bg-clinic-gold text-white py-4 rounded-xl text-center font-bold text-lg"
              >
                {t.whatsappUs}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-start lg:items-center overflow-hidden pt-32 lg:pt-0">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
              alt="Clinic Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${isRtl ? 'from-transparent via-clinic-cream/80 to-clinic-cream' : 'from-clinic-cream via-clinic-cream/80 to-transparent'}`}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full lg:mt-20">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl pt-12 lg:pt-0"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-clinic-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-clinic-dark/60 uppercase tracking-widest">
                  {CLINIC_INFO.rating} ({CLINIC_INFO.reviewCount} {t.reviews})
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-6 text-clinic-dark">
                {t.elevate} <br />
                <span className="italic text-clinic-gold">{t.naturalBeauty}</span>
              </h1>
              <p className="text-lg md:text-xl text-clinic-dark/70 mb-8 max-w-lg leading-relaxed">
                {t.heroDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('Overview')}
                  className="bg-clinic-dark text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-clinic-dark/90 transition-all flex items-center gap-2 group"
                >
                  {t.explore}
                  <ChevronRight size={18} className={`group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
                </button>
                <button 
                  onClick={() => scrollToSection('Gallery')}
                  className="border border-clinic-dark/20 text-clinic-dark px-8 py-4 rounded-full font-bold tracking-wide hover:bg-clinic-dark hover:text-white transition-all"
                >
                  {t.viewGallery}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Floating Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`absolute bottom-12 ${isRtl ? 'left-12' : 'right-12'} hidden lg:block glass-card p-8 rounded-3xl max-w-sm`}
          >
            <h3 className="text-2xl font-serif mb-4">{t.nextAvailable}</h3>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold">{t.tomorrow}</p>
                <p className="text-sm text-clinic-dark/50">Dr. Elena Luxe</p>
              </div>
            </div>
            <a 
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 border border-clinic-gold text-clinic-gold rounded-xl font-bold hover:bg-clinic-gold hover:text-white transition-all"
            >
              {t.quickBook}
            </a>
          </motion.div>
        </section>

        {/* Quick Actions Bar */}
        <div className="bg-white border-y border-clinic-dark/5 py-4 sticky top-[72px] z-30 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 min-w-max">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleAction('Directions')}
                className="flex items-center gap-2 text-clinic-gold font-bold text-sm uppercase tracking-wider"
              >
                <Navigation size={18} /> {t.directions}
              </button>
              <button 
                onClick={() => handleAction('Save')}
                className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider"
              >
                <Bookmark size={18} /> {t.save}
              </button>
              <button 
                onClick={() => handleAction('Nearby')}
                className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider"
              >
                <MapPin size={18} /> {t.nearby}
              </button>
              <button 
                onClick={() => handleAction('Send to phone')}
                className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider"
              >
                <Smartphone size={18} /> {t.sendToPhone}
              </button>
              <button 
                onClick={() => handleAction('Share')}
                className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider"
              >
                <Share2 size={18} /> {t.share}
              </button>
            </div>
            <div className="h-8 w-px bg-clinic-dark/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                {t.openNow}
              </span>
              <span className="text-clinic-dark/40 text-sm">{t.closes}</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Info & Services */}
          <div className="lg:col-span-2 space-y-20">
            {/* Overview */}
            <section id="Overview">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-serif">{t.theClinic}</h2>
                <div className="h-px flex-grow bg-clinic-dark/10"></div>
              </div>
              <p className="text-xl text-clinic-dark/70 leading-relaxed mb-12">
                {lang === 'en' ? "Located in the heart of Madrid's prestigious Salamanca district, Dr. Luxe Aesthetic Clinic is a sanctuary of beauty and wellness. We specialize in non-invasive facial rejuvenation, body contouring, and advanced dermatological care." : t.heroDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map((service) => (
                  <motion.div 
                    key={service.id}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl border border-clinic-dark/5 bg-white hover:border-clinic-gold/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-clinic-cream text-clinic-gold rounded-2xl flex items-center justify-center mb-6 group-hover:bg-clinic-gold group-hover:text-white transition-all">
                      {IconMap[service.icon]}
                    </div>
                    <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                    <p className="text-clinic-dark/60 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Gallery Section */}
            <section id="Gallery">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-4xl font-serif">{t.viewGallery}</h2>
                <div className="h-px flex-grow bg-clinic-dark/10"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square rounded-2xl overflow-hidden bg-clinic-dark/5"
                  >
                    <img 
                      src={`https://picsum.photos/seed/clinic-${i}/600/600`} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section id="Reviews">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-4xl font-serif">{t.patientStories}</h2>
                  <div className="h-px w-24 bg-clinic-dark/10"></div>
                </div>
                <button 
                  onClick={() => handleAction('Write Review')}
                  className="text-clinic-gold font-bold border-b border-clinic-gold/30 hover:border-clinic-gold transition-all"
                >
                  {lang === 'en' ? 'Write a review' : t.reviews}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className={`md:col-span-1 ${isRtl ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                  <div className="text-6xl font-serif mb-2">{CLINIC_INFO.rating}</div>
                  <div className={`flex justify-center ${isRtl ? 'md:justify-end' : 'md:justify-start'} text-clinic-gold mb-2`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <div className="text-sm text-clinic-dark/50 uppercase tracking-widest font-bold">
                    {CLINIC_INFO.reviewCount} {t.reviews}
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-4">
                      <span className="text-xs font-bold w-4">{rating}</span>
                      <div className="flex-grow h-2 bg-clinic-dark/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-clinic-gold" 
                          style={{ width: `${rating === 5 ? 85 : rating === 4 ? 10 : 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {REVIEWS.map((review) => (
                  <motion.div 
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-white border border-clinic-dark/5"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <img 
                          src={review.avatar} 
                          alt={review.author} 
                          className="w-12 h-12 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-bold text-clinic-dark">{review.author}</h4>
                          <p className="text-xs text-clinic-dark/40 uppercase tracking-widest">
                            {review.authorReviewsCount} {t.reviews} • {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-clinic-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                    </div>
                    <p className="text-clinic-dark/70 leading-relaxed mb-6 italic">
                      "{review.content}"
                    </p>
                    {review.response && (
                      <div className={`mt-6 p-6 bg-clinic-cream rounded-2xl border-l-4 border-clinic-gold ${isRtl ? 'border-l-0 border-r-4' : ''}`}>
                        <p className="text-xs font-bold uppercase tracking-widest text-clinic-gold mb-2">Response from owner</p>
                        <p className="text-sm text-clinic-dark/60">{review.response}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Info */}
          <aside className="space-y-8" id="About">
            <div className="glass-card p-8 rounded-3xl sticky top-32">
              <h3 className="text-2xl font-serif mb-6">{t.visitUs}</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-clinic-cream text-clinic-gold rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-clinic-dark/40 uppercase tracking-widest mb-1">{t.address}</p>
                    <p className="text-clinic-dark/80 leading-snug">{CLINIC_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-clinic-cream text-clinic-gold rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-clinic-dark/40 uppercase tracking-widest mb-1">{t.hours}</p>
                    <div className="space-y-2">
                      {CLINIC_INFO.hours.map((h) => (
                        <div key={h.day} className="flex justify-between text-sm">
                          <span className="text-clinic-dark/60">{h.day}</span>
                          <span className="text-clinic-dark/60">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-clinic-cream text-clinic-gold rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-clinic-dark/40 uppercase tracking-widest mb-1">{t.phone}</p>
                    <p className="text-clinic-dark/80">{CLINIC_INFO.phone}</p>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <a 
                    href={CLINIC_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:opacity-90 transition-all"
                  >
                    <MessageCircle size={20} />
                    {t.whatsappUs}
                  </a>
                  <a 
                    href={CLINIC_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 bg-clinic-dark text-white rounded-2xl font-bold hover:bg-clinic-dark/90 transition-all"
                  >
                    {t.bookAppointment}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-clinic-dark/5">
                <div className="flex items-center gap-3 text-clinic-dark/40 text-xs font-bold uppercase tracking-tighter">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  {t.womenOwned}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-clinic-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-clinic-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">L</div>
                <span className="text-2xl font-serif font-bold tracking-tight">DR. LUXE</span>
              </div>
              <p className="text-white/50 max-w-sm leading-relaxed mb-8">
                {lang === 'en' ? "Excellence in aesthetic medicine. We are committed to providing the highest standard of care and achieving natural, beautiful results for every patient." : t.heroDesc}
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-medium uppercase tracking-widest">
            <p>© 2026 Dr. Luxe Aesthetic Clinic Madrid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
