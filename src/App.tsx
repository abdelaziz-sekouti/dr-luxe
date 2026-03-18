import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  Navigation, 
  Bookmark, 
  Smartphone, 
  Share2,
  CheckCircle2,
  Sparkles,
  Stethoscope,
  Zap,
  Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_INFO, TRANSLATIONS } from './constants';
import { Language, Service, Review } from './types';

const SERVICES: Service[] = [
  {
    id: "1",
    title: "HydraFacial Elite",
    description: "Advanced skin resurfacing treatment that combines cleansing, exfoliation, extraction, and hydration.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: "2",
    title: "Medical Aesthetics",
    description: "Non-surgical treatments to enhance natural beauty and restore youthful vitality.",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: "3",
    title: "Laser Therapy",
    description: "State-of-the-art laser technology for skin rejuvenation and hair removal.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "4",
    title: "Dermal Fillers",
    description: "Premium injectables to restore volume and smooth fine lines with natural results.",
    icon: <Sparkles className="w-6 h-6" />
  }
];

const REVIEWS: Review[] = [
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

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl]);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-clinic-cream text-clinic-dark font-sans transition-colors duration-300 ${isRtl ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-clinic-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">L</div>
            <span className="text-xl font-serif font-bold tracking-tight">DR. LUXE</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('Overview')} className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-clinic-gold text-clinic-dark/70">{t.overview}</button>
            <button onClick={() => scrollToSection('Reviews')} className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-clinic-gold text-clinic-dark/70">{t.reviews}</button>
            <button onClick={() => scrollToSection('About')} className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-clinic-gold text-clinic-dark/70">{t.about}</button>
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-bold text-clinic-dark/70 hover:text-clinic-gold transition-colors uppercase tracking-widest">
                <Globe className="w-4 h-4" />
                <span>{lang.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl overflow-hidden border border-clinic-dark/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {(['en', 'fr', 'es', 'it', 'ar'] as Language[]).map((l) => (
                  <button 
                    key={l}
                    onClick={() => setLang(l)} 
                    className="w-full text-left px-4 py-3 text-sm hover:bg-clinic-cream transition-colors capitalize"
                  >
                    {l === 'en' ? 'English' : l === 'fr' ? 'Français' : l === 'es' ? 'Español' : l === 'it' ? 'Italiano' : 'العربية'}
                  </button>
                ))}
              </div>
            </div>

            <a href={CLINIC_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-clinic-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-clinic-gold/90 transition-all shadow-md hover:shadow-lg">{t.bookNow}</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-clinic-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <button onClick={() => scrollToSection('Overview')} className="text-2xl font-serif text-left border-b border-clinic-dark/10 pb-4">{t.overview}</button>
              <button onClick={() => scrollToSection('Reviews')} className="text-2xl font-serif text-left border-b border-clinic-dark/10 pb-4">{t.reviews}</button>
              <button onClick={() => scrollToSection('About')} className="text-2xl font-serif text-left border-b border-clinic-dark/10 pb-4">{t.about}</button>
              
              <div className="py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-clinic-dark/40 mb-4">Language</p>
                <div className="grid grid-cols-2 gap-3">
                  {(['en', 'fr', 'es', 'it', 'ar'] as Language[]).map((l) => (
                    <button 
                      key={l}
                      onClick={() => { setLang(l); setIsMenuOpen(false); }} 
                      className={`px-4 py-3 rounded-xl text-sm font-bold border transition-all ${lang === l ? 'bg-clinic-gold text-white border-clinic-gold' : 'border-clinic-dark/10 text-clinic-dark/70'}`}
                    >
                      {l === 'en' ? 'English' : l === 'fr' ? 'Français' : l === 'es' ? 'Español' : l === 'it' ? 'Italiano' : 'العربية'}
                    </button>
                  ))}
                </div>
              </div>

              <a href={CLINIC_INFO.whatsapp} className="bg-clinic-gold text-white py-4 rounded-xl text-center font-bold text-lg">{t.whatsappUs}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-start lg:items-center overflow-hidden pt-32 lg:pt-0">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" alt="Clinic Interior" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${isRtl ? 'from-transparent to-clinic-cream' : 'from-clinic-cream via-clinic-cream/80 to-transparent'}`}></div>
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
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-clinic-dark/60 uppercase tracking-widest">
                  4.8 (124 {t.reviews})
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
                  <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 right-12 hidden lg:block glass-card p-8 rounded-3xl max-w-sm"
          >
            <h3 className="text-2xl font-serif mb-4">{t.nextAvailable}</h3>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">{t.tomorrow}</p>
                <p className="text-sm text-clinic-dark/50">Dr. Elena Luxe</p>
              </div>
            </div>
            <a href={CLINIC_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 border border-clinic-gold text-clinic-gold rounded-xl font-bold hover:bg-clinic-gold hover:text-white transition-all">
              {t.quickBook}
            </a>
          </motion.div>
        </section>

        {/* Quick Actions Bar */}
        <div className="bg-white border-y border-clinic-dark/5 py-4 sticky top-[72px] z-30 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 min-w-max">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-clinic-gold font-bold text-sm uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>{t.directions}</span>
              </button>
              <button className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider">
                <Bookmark className="w-4 h-4" />
                <span>{t.save}</span>
              </button>
              <button className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{t.nearby}</span>
              </button>
              <button className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                <span>{t.sendToPhone}</span>
              </button>
              <button className="flex items-center gap-2 text-clinic-dark/60 hover:text-clinic-gold transition-colors font-bold text-sm uppercase tracking-wider">
                <Share2 className="w-4 h-4" />
                <span>{t.share}</span>
              </button>
            </div>
            <div className="h-8 w-px bg-clinic-dark/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                <span>{t.openNow}</span>
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
                    className="p-8 rounded-3xl border border-clinic-dark/5 bg-white hover:border-clinic-gold/30 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-clinic-cream text-clinic-gold rounded-2xl flex items-center justify-center mb-6 group-hover:bg-clinic-gold group-hover:text-white transition-all">
                      {service.icon}
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
                <h2 className="text-4xl font-serif uppercase tracking-tight">{t.viewGallery}</h2>
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
                <button className="text-clinic-gold font-bold border-b border-clinic-gold/30 hover:border-clinic-gold transition-all">
                  Write a review
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1 text-center md:text-left">
                  <div className="text-6xl font-serif mb-2">4.8</div>
                  <div className="flex justify-center md:justify-start text-clinic-gold mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <div className="text-sm text-clinic-dark/50 uppercase tracking-widest font-bold">
                    124 {t.reviews}
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-3">
                  {[85, 10, 2, 1, 2].map((percent, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-xs font-bold w-4">{5 - i}</span>
                      <div className="flex-grow h-2 bg-clinic-dark/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percent}%` }}
                          className="h-full bg-clinic-gold"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="p-8 rounded-3xl bg-white border border-clinic-dark/5">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <h4 className="font-bold text-clinic-dark">{review.author}</h4>
                          <p className="text-xs text-clinic-dark/40 uppercase tracking-widest">
                            {review.authorReviewsCount} Reviews • {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-clinic-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-clinic-dark/70 leading-relaxed mb-6 italic">
                      "{review.content}"
                    </p>
                    {review.response && (
                      <div className="mt-6 p-6 bg-clinic-cream rounded-2xl border-l-4 border-clinic-gold">
                        <p className="text-xs font-bold uppercase tracking-widest text-clinic-gold mb-2">Response from owner</p>
                        <p className="text-sm text-clinic-dark/60">{review.response}</p>
                      </div>
                    )}
                  </div>
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
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-clinic-dark/40 uppercase tracking-widest mb-1">{t.address}</p>
                    <p className="text-clinic-dark/80 leading-snug">{CLINIC_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-clinic-cream text-clinic-gold rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-clinic-dark/40 uppercase tracking-widest mb-1">{t.hours}</p>
                    <div className="space-y-2 text-sm">
                      {CLINIC_INFO.hours.map((h, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-clinic-dark/60">{h.day}</span>
                          <span className="text-clinic-dark/60">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-clinic-cream text-clinic-gold rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-clinic-dark/40 uppercase tracking-widest mb-1">{t.phone}</p>
                    <p className="text-clinic-dark/80">{CLINIC_INFO.phone}</p>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <a href={CLINIC_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:opacity-90 transition-all">
                    <Phone className="w-5 h-5 fill-current" />
                    <span>{t.whatsappUs}</span>
                  </a>
                  <a href={CLINIC_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-clinic-dark text-white rounded-2xl font-bold hover:bg-clinic-dark/90 transition-all">
                    <span>{t.bookAppointment}</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-clinic-dark/5">
                <div className="flex items-center gap-3 text-clinic-dark/40 text-xs font-bold uppercase tracking-tighter">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{t.womenOwned}</span>
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
                Excellence in aesthetic medicine. We are committed to providing the highest standard of care and achieving natural, beautiful results for every patient.
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
};

export default App;
