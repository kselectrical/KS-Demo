import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Mail,
  Star,
  CheckCircle,
  Home,
  User,
  Headset,
  Coins,
  Wrench,
  Sparkles,
  Award,
  ChevronLeft,
  ChevronRight,
  Check,
  MessageSquare,
  X
} from "lucide-react";
import { OWNER_INFO, SERVICES_DATA } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import ServicesDetail from "./components/ServicesDetail";
import BookingForm from "./components/BookingForm";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import SafeImage from "./components/SafeImage";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse serviceId from location path /service/:id and validate it
  const serviceMatch = location.pathname.match(/^\/service\/([^/]+)/);
  const matchedServiceId = serviceMatch ? serviceMatch[1] : null;
  const currentServiceId = (matchedServiceId && SERVICES_DATA.some((s) => s.id === matchedServiceId)) ? matchedServiceId : null;

  const [activeSection, setActiveSection] = useState("home");
  const [testiIndex, setTestiIndex] = useState(0);

  // References for smooth scrolling
  const contactFormRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll active section tracking
  useEffect(() => {
    if (currentServiceId) return; // Disable scroll tracking on sub page

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      const sections = ["home", "services", "gallery", "why-us", "process", "testimonials", "contact"];
      
      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentServiceId]);

  // Testimonial sliding data rows
  const reviews = [
    {
      avatar: "R",
      name: "Ramesh Sharma",
      area: "Sector 12, Noida",
      stars: 5,
      text: "AC बहुत गर्म हो रही थी, उन्होंने Same Day आकर Gas Refill की और Cooling Perfect हो गई। बहुत अच्छी Service!"
    },
    {
      avatar: "S",
      name: "Sunita Gupta",
      area: "Indirapuram, Ghaziabad",
      stars: 5,
      text: "RO बंद हो गई थी, पानी आना बंद हो गया था। इन्होंने Pump और Filter दोनों ठीक किए। Rate भी बहुत Reasonable था।"
    },
    {
      avatar: "A",
      name: "Amit Verma",
      area: "Vasundhara, Ghaziabad",
      stars: 5,
      text: "Washing Machine का Drum spin नहीं कर रहा था। बहुत जल्दी आए और बढ़िया Repair किया। Highly Recommend!"
    },
    {
      avatar: "P",
      name: "Priya Singh",
      area: "Kaushambi, Ghaziabad",
      stars: 5,
      text: "Geyser में पानी गरम नहीं होता था। Element Change किया और अब Perfect काम करता है। Professional Service!"
    },
    {
      avatar: "M",
      name: "Manoj Kumar",
      area: "Vaishali, Ghaziabad",
      stars: 5,
      text: "Switchboard बदलवाना था। बहुत Clean और Professional काम किया। बिल्कुल सही लगाया। Thank you KS Service!"
    }
  ];

  // Auto-slide reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Lock body scroll when popup modal is open
  useEffect(() => {
    if (currentServiceId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [currentServiceId]);

  const handleServiceSelect = (id: string) => {
    navigate(`/service/${id}`);
  };

  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToForm = () => {
    if (currentServiceId) {
      const el = document.getElementById("detail-booking-panel");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      if (contactFormRef.current) {
        contactFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Why choose us items
  const chooseUsFeatures = [
    {
      num: "01",
      icon: <Home className="w-8 h-8 text-[#f97316]" />,
      title: "Home Visit Service",
      desc: "आपको कहीं बाहर नहीं जाना पड़ेगा — हमारा एक्सपर्ट Technician खुद आपके घर आएगा।"
    },
    {
      num: "02",
      icon: <Clock className="w-8 h-8 text-[#f97316]" />,
      title: "Same Day Repair",
      desc: "कॉल करते ही जल्द से जल्द हमारे टेक्नीशियन पहुँचते हैं — कोई लंबा इंतज़ार नहीं।"
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-8 h-8 text-[#f97316]" />,
      title: "Genuine Parts",
      desc: "हम केवल ओरिजिनल और बेस्ट क्वालिटी के स्पेयर पार्ट्स ही बदलते हैं — टिकाऊ और सुरक्षित।"
    },
    {
      num: "04",
      icon: <Coins className="w-8 h-8 text-[#f97316]" />,
      title: "Affordable Rates",
      desc: "उचित और एकदम पारदर्शी मूल्य (Transparent Pricing) — कोई हिडन चार्ज नहीं।"
    },
    {
      num: "05",
      icon: <Wrench className="w-8 h-8 text-[#f97316]" />,
      title: "Experienced Experts",
      desc: "5+ साल से अधिक का व्यावहारिक अनुभव — सभी बड़े ब्रांड्स और डिज़ाइनों की पूरी समझ।"
    },
    {
      num: "06",
      icon: <Award className="w-8 h-8 text-[#f97316]" />,
      title: "Service Warranty",
      desc: "किए गए काम पर निश्चित वारंटी — अगर कोई दोबारा समस्या आई तो तुरंत मुफ्त निदान।"
    }
  ];

  return (
    <div className="bg-[#0c0a09] text-stone-50 min-h-screen relative font-sans leading-relaxed selection:bg-[#f97316] selection:text-white">
      
      {/* GLOBAL NAVBAR */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(sect) => {
          const el = document.getElementById(sect);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        currentServiceId={currentServiceId}
        onBackToHome={handleBackToHome}
      />

      {/* ALWAYS RENDER HOME SCREEN - DETAILED SERVICE OVERLAYS OPEN AS A POPUP ON TOP */}
      <main className="relative">
        
        {/* HERO SECTION */}
          <Hero
            onBookNowClick={scrollToForm}
            onExploreServicesClick={scrollToServices}
            onServiceSelect={handleServiceSelect}
          />

          {/* INFINITE RUNNING TICKER RIBBON */}
          <div className="ticker-wrap w-full bg-gradient-to-r from-[#f97316] to-[#ea580c] py-3.5 overflow-hidden whitespace-nowrap relative select-none">
            <div className="ticker flex animate-[ticker_35s_linear_infinite] gap-0">
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">⚡ AC Repair & Service</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">💧 RO Water Purifier Repair</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🌀 Washing Machine Repair</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🔥 Geyser Repair</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🔌 Electrical Work</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">📞 Call / WhatsApp: {OWNER_INFO.phone1}</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🏠 100% Home Visit Service</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">⚡ AC Repair & Service</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">💧 RO Water Purifier Repair</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🌀 Washing Machine Repair</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🔥 Geyser Repair</span>
              <span className="px-8 text-sm font-bold text-white uppercase tracking-wider flex items-center border-r border-white/20">🔌 Electrical Work</span>
            </div>
          </div>

          {/* SERVICES DIRECTORY SECTION */}
          <section
            ref={servicesRef}
            id="services"
            className="services-section relative py-20 px-6 max-w-7xl mx-auto"
          >
            <div className="section-header text-center mb-16 select-none">
              <span className="section-tag inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-full text-xs font-bold text-[#f97316] tracking-widest uppercase mb-4">
                Our Expert Services
              </span>
              <h2 className="section-title text-4xl sm:text-5xl font-heading font-black text-stone-50 leading-tight mb-4 uppercase">
                हम क्या Repair करते हैं?
              </h2>
              <p className="section-desc text-stone-300 font-light text-base max-w-xl mx-auto leading-relaxed">
                सभी प्रकार के घरेलू उपकरणों (Home Appliances) की विशेषज्ञ होम रिपेयर सेवा — Gaur City 1, 2, नोएडा एक्सटेंशन और वसुंधरा/गाजियाबाद।
              </p>
            </div>

            {/* SERVICES bento grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelect={handleServiceSelect}
                />
              ))}

              {/* GRADIANT HIGHLIGHTED ADVERT CARD */}
              <div className="service-card service-card-cta bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-400 min-h-[350px]">
                <div className="absolute inset-0 bg-radial-gradient(circle, rgba(255,255,255,0.1)_0%,transparent_60%) pointer-events-none rounded-2xl"></div>
                
                <div className="text-center flex flex-col items-center">
                  <div className="cta-icon w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 animate-bounce">
                    <Headset className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-4xl text-white tracking-widest uppercase mb-3 leading-none">
                    अभी Call करें!
                  </h3>
                  <p className="text-sm text-white/90 font-light leading-relaxed mb-6 max-w-sm">
                    Same day fast service is available. हमारे कुशल मिस्त्री शीघ्रता से आपके द्वार पर पहुँचेंगे।
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <a
                    href={`tel:${OWNER_INFO.phone1}`}
                    className="cta-phone w-full flex items-center justify-center gap-2.5 bg-white text-[#ea580c] py-4 rounded-xl text-xl font-heading font-black tracking-wider transition-transform duration-300 hover:scale-[1.03] shadow-lg border-0"
                  >
                    <Phone className="w-5 h-5 fill-[#ea580c] text-[#ea580c]" /> {OWNER_INFO.phone1}
                  </a>
                  <span className="text-xs text-white/85 font-medium flex items-center gap-1 mt-1 justify-center">
                    <Clock className="w-3.5 h-3.5" /> सुबह 8 बजे से रात 9 बजे तक (Active & Online)
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* DYNAMIC WORK GALLERY SECTION */}
          <GallerySection onPreselectService={(id) => {
            handleServiceSelect(id);
          }} />

          {/* WHY US SECTION */}
          <section id="why-us" className="why-us py-20 px-6 relative overflow-hidden">
            <div className="why-bg absolute inset-0 bg-[linear-gradient(135deg,#1a0800_0%,#0c0a09_50%,#1a0800_100%)] z-0"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="section-header text-center mb-16 select-none">
                <span className="section-tag inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-full text-xs font-bold text-[#f97316] tracking-widest uppercase mb-4">
                  Why Choose Us
                </span>
                <h2 className="section-title text-4xl sm:text-5xl font-heading font-black text-stone-100 leading-tight mb-4 uppercase">
                  हमें क्यों चुनें? (Our Speciality)
                </h2>
                <p className="section-desc text-stone-400 font-light text-base max-w-xl mx-auto leading-relaxed">
                  KS Electrical & AC Service ही क्यों है आपकी पहली पसंद? जानिए हमारी खूबियां:
                </p>
              </div>

              {/* FEATURES GRID */}
              <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(249,115,22,0.15)] rounded-2xl overflow-hidden border border-[rgba(249,115,22,0.15)] shadow-2xl">
                {chooseUsFeatures.map((feat) => (
                  <div
                    key={feat.num}
                    className="feature-item bg-[#1c1917]/95 hover:bg-[rgba(249,115,22,0.04)] p-8 md:p-10 relative overflow-hidden group transition-all duration-300"
                  >
                    {/* Upper decorative numbering */}
                    <div className="feature-num absolute top-4 right-6 font-display text-5xl md:text-6xl text-orange-500/5 font-black group-hover:text-orange-500/10 transition-colors">
                      {feat.num}
                    </div>

                    <div className="feature-icon mb-5 text-[#f97316]">
                      {feat.icon}
                    </div>

                    <h4 className="font-heading font-bold text-xl text-stone-50 mb-3 group-hover:text-[#f97316] transition-colors leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-stone-400 leading-relaxed font-light">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BOOKING PROCESS STEP TIMELINE */}
          <section id="process" className="process-section py-20 px-6 max-w-7xl mx-auto">
            <div className="section-header text-center mb-16 select-none">
              <span className="section-tag inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-full text-xs font-bold text-[#f97316] tracking-widest uppercase mb-4">
                How It Works
              </span>
              <h2 className="section-title text-4xl sm:text-5xl font-heading font-black text-stone-100 leading-tight mb-4 uppercase">
                Booking कैसे करें?
              </h2>
              <p className="section-desc text-stone-300 font-light text-base max-w-xl mx-auto leading-relaxed">
                सिर्फ 3 आसान Steps में पाएं अनुभवी मिस्त्री की झटपट सेवाएं
              </p>
            </div>

            {/* Timelines list */}
            <div className="process-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              
              {/* STAGE 1 */}
              <div className="process-step group flex flex-col items-center">
                <div className="step-number w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white font-display text-2xl font-black shadow-[0_8px_25px_rgba(249,115,22,0.4)] relative z-10 mb-6 group-hover:scale-105 transition-transform">
                  1
                </div>
                {/* Connector line for large monitors */}
                <div className="hidden lg:block step-connector absolute top-7 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-[#f97316] to-[rgba(249,115,22,0.15)] z-0"></div>

                <div className="step-content text-center px-4">
                  <div className="step-icon w-16 h-16 bg-[#1c1917] border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-center justify-center text-[#f97316] text-2xl mx-auto mb-4 group-hover:bg-[rgba(249,115,22,0.06)] group-hover:border-[#f97316]/50 transition-all">
                    <Phone className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-stone-50 mb-2 leading-none">Call करें / फॉर्म भरें</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">{OWNER_INFO.phone1} पर कॉल करें या हमारी साइट पर विवरण भरें।</p>
                </div>
              </div>

              {/* STAGE 2 */}
              <div className="process-step group flex flex-col items-center">
                <div className="step-number w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white font-display text-2xl font-black shadow-[0_8px_25px_rgba(249,115,22,0.4)] relative z-10 mb-6 group-hover:scale-105 transition-transform">
                  2
                </div>
                <div className="hidden lg:block step-connector absolute top-7 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-[#f97316] to-[rgba(249,115,22,0.15)] z-0"></div>

                <div className="step-content text-center px-4">
                  <div className="step-icon w-16 h-16 bg-[#1c1917] border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-center justify-center text-[#f97316] text-2xl mx-auto mb-4 group-hover:bg-[rgba(249,115,22,0.06)] group-hover:border-[#f97316]/50 transition-all">
                    <Clock className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-stone-50 mb-2 leading-none">Time Fix करें</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">अपनी सुविधानुसार समय (Morning/Evening) स्लॉट का चयन करें।</p>
                </div>
              </div>

              {/* STAGE 3 */}
              <div className="process-step group flex flex-col items-center">
                <div className="step-number w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white font-display text-2xl font-black shadow-[0_8px_25px_rgba(249,115,22,0.4)] relative z-10 mb-6 group-hover:scale-105 transition-transform">
                  3
                </div>
                <div className="hidden lg:block step-connector absolute top-7 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-[#f97316] to-[rgba(249,115,22,0.15)] z-0"></div>

                <div className="step-content text-center px-4">
                  <div className="step-icon w-16 h-16 bg-[#1c1917] border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-center justify-center text-[#f97316] text-2xl mx-auto mb-4 group-hover:bg-[rgba(249,115,22,0.06)] group-hover:border-[#f97316]/50 transition-all">
                    <Wrench className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-stone-50 mb-2 leading-none">Technician आएगा</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">हमारा मुख्य एक्सपर्ट आपके घर आएगा और खराबी की जांच करेगा।</p>
                </div>
              </div>

              {/* STAGE 4 */}
              <div className="process-step group flex flex-col items-center">
                <div className="step-number w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white font-display text-2xl font-black shadow-[0_8px_25px_rgba(249,115,22,0.4)] relative z-10 mb-6 group-hover:scale-105 transition-transform">
                  4
                </div>

                <div className="step-content text-center px-4">
                  <div className="step-icon w-16 h-16 bg-[#1c1917] border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-center justify-center text-[#f97316] text-2xl mx-auto mb-4 group-hover:bg-[rgba(249,115,22,0.06)] group-hover:border-[#f97316]/50 transition-all">
                    <CheckCircle className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-stone-50 mb-2 leading-none">Repair & Happy!</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">Same Day रिपेयरिंग सफल होगी और उपकरण फिर से एकदम चकाचक!</p>
                </div>
              </div>

            </div>
          </section>

          {/* CUSTOMER REVIEWS SLIDER SECTION */}
          <section id="testimonials" className="testimonials py-20 px-6 relative overflow-hidden">
            <div className="testi-bg absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-[#1a0800] to-[#0c0a09] z-0"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="section-header text-center mb-12 select-none">
                <span className="section-tag inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-full text-xs font-bold text-[#f97316] tracking-widest uppercase mb-4">
                  Customer Reviews
                </span>
                <h2 className="section-title text-4xl sm:text-5xl font-heading font-black text-stone-100 leading-tight mb-4 uppercase">
                  हमारे Customers क्या कहते हैं?
                </h2>
                <div className="flex justify-center items-center gap-1.5 text-[#fbbf24] mt-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                  <span className="text-xs ml-1 text-stone-300">(Average rating 4.9/5 by 180+ customers)</span>
                </div>
              </div>

              {/* SLIDING ENVELOPE */}
              <div className="relative max-w-3xl mx-auto">
                <div className="overflow-hidden min-h-[300px] flex items-center px-4">
                  
                  {reviews.map((rev, idx) => {
                    const isCurrent = idx === testiIndex;
                    return (
                      <div
                        key={idx}
                        className={`absolute inset-x-4 bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-8 transition-all duration-500 select-none ${
                          isCurrent
                            ? "opacity-100 translate-x-0 scale-100 z-10"
                            : "opacity-0 translate-x-12 scale-95 pointer-events-none z-0"
                        }`}
                      >
                        <span className="absolute top-4 right-8 text-8xl font-serif text-orange-500/10 leading-none">“</span>
                        
                        {/* Rating block */}
                        <div className="flex items-center gap-1 text-[#fbbf24] mb-4">
                          {[...Array(rev.stars)].map((_, st) => (
                            <Star key={st} className="w-4.5 h-4.5 fill-[#fbbf24] text-[#fbbf24]" />
                          ))}
                        </div>

                        {/* Review quote */}
                        <p className="text-base md:text-lg text-stone-200 font-light italic mb-6 leading-relaxed">
                          "{rev.text}"
                        </p>

                        {/* Author info */}
                        <div className="flex items-center gap-4 border-t border-stone-800/60 pt-4">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] flex items-center justify-center font-bold text-white text-lg">
                            {rev.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-stone-100 leading-tight">{rev.name}</p>
                            <p className="text-xs text-stone-400 mt-0.5 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#f97316]" /> {rev.area}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* SLIDE ACTIONS BAR */}
                <div className="flex gap-4 items-center justify-center mt-6">
                  <button
                    onClick={() => setTestiIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="w-10 h-10 border border-stone-700 hover:border-[#f97316] bg-stone-900 rounded-full flex items-center justify-center text-stone-400 hover:text-[#f97316] transition-all cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex gap-1.5">
                    {reviews.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setTestiIndex(dotIdx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          testiIndex === dotIdx
                            ? "bg-[#f97316] w-6"
                            : "bg-stone-700 hover:bg-stone-500"
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setTestiIndex((prev) => (prev + 1) % reviews.length)}
                    className="w-10 h-10 border border-stone-700 hover:border-[#f97316] bg-stone-900 rounded-full flex items-center justify-center text-stone-400 hover:text-[#f97316] transition-all cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* GOOGLE REVIEWS BUTTON LINK */}
                <div className="text-center mt-10">
                  <a
                    href={OWNER_INFO.reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.3)] hover:border-[#f97316] text-sm text-[#f97316] font-semibold rounded-xl hover:bg-[#f97316] hover:text-white transition-all cursor-pointer"
                  >
                    View & Write Google GMB Review <Star className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT & BOOKING SECTION */}
          <section
            ref={contactFormRef}
            id="contact"
            className="contact-section py-20 px-6 max-w-7xl mx-auto"
          >
            <div className="section-header text-center mb-16 select-none">
              <span className="section-tag inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-full text-xs font-bold text-[#f97316] tracking-widest uppercase mb-4">
                Contact Us
              </span>
              <h2 className="section-title text-4xl sm:text-5xl font-heading font-black text-stone-100 leading-tight mb-4 uppercase">
                अभी Booking Contact करें!
              </h2>
              <p className="section-desc text-stone-300 font-light text-base max-w-xl mx-auto leading-relaxed">
                आपकी समस्या — हमारी पूरी जिम्मेदारी (No High Diagnostic Fee)
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* CONTACT METADATA ROWS (LEFT) */}
              <div className="lg:col-span-5 flex flex-col gap-4">

                {/* OWNER DETAILS CARD */}
                <div className="p-6 bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-center gap-5 hover:border-[#f97316]/50 transition-colors">
                  <SafeImage
                    src="/kselectrical1/images/profile.png"
                    alt={OWNER_INFO.englishName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500/40 shadow-lg animate-[fadeIn_0.5s_ease-out]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] text-[#f97316] uppercase font-bold tracking-wider px-2 py-0.5 bg-orange-500/10 rounded-full border border-orange-500/20">Website Owner / Tech Lead</span>
                    <h4 className="font-heading font-bold text-lg text-stone-200 mt-1 select-none">{OWNER_INFO.englishName}</h4>
                    <p className="text-xs text-stone-400 select-none mt-0.5">कौशिंद्र सिंह — सीनियर इलेक्ट्रिकल एवं होम एप्लायंसेज एक्सपर्ट टेक्नीशियन।</p>
                  </div>
                </div>
                
                {/* CARD 1: PRIMARY CALL */}
                <div className="p-6 bg-stone-900 border border-[rgba(249,115,22,0.3)] bg-gradient-to-br from-[#1c1917]/90 to-[rgba(249,115,22,0.05)] rounded-2xl flex items-start gap-4 shadow-xl select-none group hover:border-[#f97316] transition-colors">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center text-[#f97316] flex-shrink-0 animate-[glowPulse_3s_infinite]">
                    <Phone className="w-5 h-5 fill-[#f97316] text-[#f97316]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-stone-200">Phone / WhatsApp</h4>
                    <a
                      href={`tel:${OWNER_INFO.phone1}`}
                      className="font-display font-black text-3xl md:text-4xl text-[#f97316] tracking-wider block mt-1 hover:text-[#fbbf24] transition-colors"
                    >
                      {OWNER_INFO.phone1}
                    </a>
                    <span className="text-xs text-stone-400 mt-1 block">या {OWNER_INFO.phone2} पर कॉल/व्हाट्सएप करें। त्वरित प्रतिक्रिया!</span>
                  </div>
                </div>

                {/* CARD 2: WORKING HOURS */}
                <div className="p-6 bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-start gap-4 hover:border-[#f97316]/50 transition-colors">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-[#f97316] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-stone-200">Working Hours</h4>
                    <p className="text-sm font-bold text-stone-100 mt-1">Monday - Sunday</p>
                    <p className="text-xs text-stone-400 mt-0.5">सुबह 08:00 बजे से रात्रि 09:00 बजे तक (सप्ताह के सातों दिन लगातार)</p>
                  </div>
                </div>

                {/* CARD 3: SERVICE AREA */}
                <div className="p-6 bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl flex items-start gap-4 hover:border-[#f97316]/50 transition-colors">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-[#f97316] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-stone-200">Our Service Areas</h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-light mt-1.5">
                      {OWNER_INFO.serviceArea}
                    </p>
                    <span className="text-[10px] text-[#f97316] uppercase font-bold tracking-wider mt-1 block">Rapid Doorstep Response</span>
                  </div>
                </div>

                {/* QUICK WHATSAPP CTA CHAT */}
                <div className="mt-2.5">
                  <a
                    href={`https://wa.me/91${OWNER_INFO.phone1}?text=Hello%20KS%20Electrical%20AC%20Service%2C%20mujhe%20repair%20service%20chahiye.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] py-4 rounded-xl text-stone-50 text-base font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_35px_rgba(34,197,94,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" /> WhatsApp पर मैसेज भेजें (Chat Now)
                  </a>
                </div>
              </div>

              {/* BOOKING INTERACTIVE COMPONENT (RIGHT) */}
              <div className="lg:col-span-7">
                <BookingForm />
              </div>

            </div>
          </section>

      </main>

      {/* DETAILED SERVICE OVERLAY POPUP MODAL */}
      {currentServiceId && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md overflow-y-auto flex items-start justify-center p-4 md:p-6 pt-20 md:pt-28 shadow-2xl transition-all duration-300"
          onClick={handleBackToHome} /* Close on clicking backdrop */
        >
          {/* Prevent click bubbling on modal contents */}
          <div 
            className="relative bg-[#0c0a09] border border-stone-800/60 rounded-3xl max-w-6xl w-full shadow-[0_0_50px_rgba(249,115,22,0.18)] overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Upper Floating Close Button */}
            <button
              onClick={handleBackToHome}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 text-stone-400 hover:text-[#f97316] bg-stone-900 border border-stone-850 hover:bg-stone-800 hover:scale-105 rounded-full transition-all cursor-pointer shadow-lg active:scale-95 outline-none"
              title="Close Popup (बंद करें)"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Custom wrapper for modal structure */}
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
              <ServicesDetail
                service={SERVICES_DATA.find((s) => s.id === currentServiceId)!}
                onBack={handleBackToHome}
                onScrollToForm={scrollToForm}
                isModal={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* PERSISTENT FLOATING ACTIONS */}
      <a
        href={`tel:${OWNER_INFO.phone1}`}
        className="fixed bottom-[100px] right-6 w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white rounded-full flex items-center justify-center text-lg z-40 transition-transform duration-300 hover:scale-110 shadow-2xl"
        title="अभी फोन करें"
      >
        <Phone className="w-6 h-6 fill-white text-white" />
        <span className="float-pulse"></span>
      </a>

      <a
        href={`https://wa.me/91${OWNER_INFO.phone1}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[30px] right-6 w-14 h-14 bg-[#22c55e] text-white rounded-full flex items-center justify-center text-lg z-40 transition-transform duration-300 hover:scale-110 shadow-2xl float-whatsapp"
        title="WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 fill-white text-white" />
      </a>

      {/* MASTER FOOTER */}
      <Footer
        onNavigate={(sect) => {
          const el = document.getElementById(sect);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        onServiceSelect={handleServiceSelect}
        currentServiceId={currentServiceId}
        onBackToHome={handleBackToHome}
      />

    </div>
  );
}
