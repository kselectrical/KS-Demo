import { useState, useEffect } from "react";
import { Phone, ArrowRight, Wrench, Wind, Droplet, Bolt, Flame, ShieldCheck, Sparkles, Star } from "lucide-react";
import { OWNER_INFO } from "../data";
import AdvancedSearchBar from "./AdvancedSearchBar";

interface HeroProps {
  onBookNowClick: () => void;
  onExploreServicesClick: () => void;
  onServiceSelect: (serviceId: string) => void;
}

export default function Hero({ onBookNowClick, onExploreServicesClick, onServiceSelect }: HeroProps) {
  // Stats counter states
  const [repairs, setRepairs] = useState(0);
  const [experience, setExperience] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  // Counter effect on mount
  useEffect(() => {
    const duration = 1800; // Total ms of count-up
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      
      // repairs target 1500
      setRepairs(Math.min(1500, Math.floor((1500 / steps) * step)));
      // experience target 5
      setExperience(Math.min(5, Math.floor((5 / steps) * step)));
      // satisfaction target 98
      setSatisfaction(Math.min(98, Math.floor((98 / steps) * step)));

      if (step >= steps) {
        clearInterval(timer);
        setRepairs(1500);
        setExperience(5);
        setSatisfaction(98);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // For orbit speed toggle on card hovering
  const [orbitSpeedSec, setOrbitSpeedSec] = useState(12);

  return (
    <section
      id="home"
      className="hero min-h-screen relative flex items-center overflow-hidden px-6 pt-24 pb-16 md:pt-32"
    >
      {/* BACKGROUND GRAPHICS & BLURS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_60%_50%,rgba(249,115,22,0.12)_0%,transparent_70%),linear-gradient(180deg,#0c0a09_0%,#1a0a00_100%)] z-0"></div>
      <div className="circuit-lines"></div>
      <div className="hero-glow absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.12)_0%,transparent_70%)] right-[5%] top-1/2 -translate-y-1/2 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* HERO LEFT: COMPREHENSIVE TEXT */}
        <div className="hero-content lg:col-span-7 select-none">
          <div className="hero-badge reveal-visible inline-flex items-center gap-2 px-4 py-2 bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.3)] rounded-full text-xs md:text-sm font-semibold text-[#f97316] tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#fbbf24] fill-[#fbbf24]" /> 
            कौशिंद्र सिंह द्वारा विश्वसनीय होम सर्विस (Noida & Ghaziabad)
          </div>

          <h1 className="hero-title reveal-visible font-heading font-black tracking-tight text-white mb-6 leading-none flex flex-col">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#fbbf24] mb-3 select-none flex items-center gap-2">
              घर बैठे पाएं
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-[#f97316] uppercase mt-1 tracking-wide leading-none filter drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">
              Expert Repair
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-stone-100 uppercase tracking-widest mt-2 leading-none">
              Service
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#fbbf24] uppercase mb-4 font-heading">
            AC • RO • Washing Machine • Geyser • Electrical Work
          </p>
          <p className="hero-desc text-stone-400 text-base md:text-lg max-w-xl mb-5 leading-relaxed font-light">
            आपके घर पर आकर सही करते हैं — Fast, Affordable, Reliable & Safe. 5+ साल के अनुभव के साथ सभी होम अप्लायंसेज की सर्वश्रेष्ठ रिपेयरिंग।
          </p>

          {/* ADVANCED SMART SEARCH BAR */}
          <div className="w-full mb-8 max-w-xl relative z-20">
            <AdvancedSearchBar onServiceSelect={onServiceSelect} />
          </div>

          <div className="hero-buttons flex flex-wrap gap-4 mb-10">
            <button
              onClick={onBookNowClick}
              className="btn-primary flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-xl text-base font-bold text-white shadow-[0_8px_30px_rgba(249,115,22,0.4)] hover:shadow-[0_16px_40px_rgba(249,115,22,0.5)] hover:-translate-y-1 active:translate-y-0 cursor-pointer border-0 transition-all duration-300"
            >
              <Phone className="w-4.5 h-4.5 fill-white text-white" /> Call / Book Service: {OWNER_INFO.phone1}
            </button>
            <button
              onClick={onExploreServicesClick}
              className="btn-secondary flex items-center gap-2 px-6 py-4 border-2 border-[rgba(249,115,22,0.4)] bg-[rgba(249,115,22,0.05)] rounded-xl text-base font-semibold text-stone-100 hover:border-[#f97316] hover:bg-[rgba(249,115,22,0.12)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300"
            >
              Our Services <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* STATS COUNT */}
          <div className="hero-stats flex items-center gap-0 max-w-lg">
            <div className="stat text-center px-4 md:px-8 first:pl-0">
              <span className="stat-num font-display text-4xl md:text-5xl text-[#f97316] font-extrabold block">
                {repairs}
              </span>
              <span className="stat-label text-[10px] md:text-xs text-stone-500 font-bold tracking-wider uppercase block mt-1">
                Repairs Done
              </span>
            </div>
            <div className="stat-divider w-px h-10 bg-[rgba(249,115,22,0.15)]"></div>
            
            <div className="stat text-center px-4 md:px-8">
              <span className="stat-num font-display text-4xl md:text-5xl text-[#f97316] font-extrabold block">
                {experience}
              </span>
              <span className="stat-label text-[10px] md:text-xs text-stone-500 font-bold tracking-wider uppercase block mt-1">
                Years Experience
              </span>
            </div>
            <div className="stat-divider w-px h-10 bg-[rgba(249,115,22,0.15)]"></div>

            <div className="stat text-center px-4 md:px-8">
              <span className="stat-num font-display text-4xl md:text-5xl text-[#f97316] font-extrabold block">
                {satisfaction}%
              </span>
              <span className="stat-label text-[10px] md:text-xs text-stone-500 font-bold tracking-wider uppercase block mt-1">
                Rating / Happy
              </span>
            </div>
          </div>
        </div>

        {/* HERO RIGHT: DYNAMIC CELESTIAL ORBITING RING */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative select-none">
          <div className="hero-visual w-[360px] h-[360px] md:w-[420px] md:h-[420px] relative">
            
            {/* Pulsing rings */}
            <div className="tech-ring inset-0 absolute border border-[rgba(249,115,22,0.15)] rounded-full animate-[ringPulse_3s_ease-in-out_infinite]"></div>
            <div className="tech-ring inset-10 absolute border border-[rgba(249,115,22,0.1)] rounded-full animate-[ringPulse_3s_ease-in-out_infinite_1s]"></div>
            <div className="tech-ring inset-20 absolute border border-[rgba(249,115,22,0.06)] rounded-full animate-[ringPulse_3s_ease-in-out_infinite_2s]"></div>

            {/* Rotating central tool anchor */}
            <div
              onMouseEnter={() => setOrbitSpeedSec(4)}
              onMouseLeave={() => setOrbitSpeedSec(12)}
              className="center-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(249,115,22,0.5)] z-20 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Wrench className="w-10 h-10 stroke-custom animate-spin [animation-duration:8s]" />
            </div>

            {/* 4 Orbital nodes representing core services */}
            <div
              className="orbit-icon absolute w-12 h-12 bg-[#1c1917] border border-[rgba(249,115,22,0.25)] rounded-full flex items-center justify-center shadow-lg pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-24px",
                marginLeft: "-24px",
                animation: `orbit ${orbitSpeedSec}s linear infinite`,
                animationDelay: "0s",
              }}
            >
              <Wind className="w-5 h-5 text-[#f97316]" />
            </div>

            <div
              className="orbit-icon absolute w-12 h-12 bg-[#1c1917] border border-[rgba(249,115,22,0.25)] rounded-full flex items-center justify-center shadow-lg pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-24px",
                marginLeft: "-24px",
                animation: `orbit ${orbitSpeedSec}s linear infinite`,
                animationDelay: `-${orbitSpeedSec / 4}s`,
              }}
            >
              <Droplet className="w-5 h-5 text-[#f97316]" />
            </div>

            <div
              className="orbit-icon absolute w-12 h-12 bg-[#1c1917] border border-[rgba(249,115,22,0.25)] rounded-full flex items-center justify-center shadow-lg pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-24px",
                marginLeft: "-24px",
                animation: `orbit ${orbitSpeedSec}s linear infinite`,
                animationDelay: `-${(orbitSpeedSec / 4) * 2}s`,
              }}
            >
              <Bolt className="w-5 h-5 text-[#f97316]" />
            </div>

            <div
              className="orbit-icon absolute w-12 h-12 bg-[#1c1917] border border-[rgba(249,115,22,0.25)] rounded-full flex items-center justify-center shadow-lg pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-24px",
                marginLeft: "-24px",
                animation: `orbit ${orbitSpeedSec}s linear infinite`,
                animationDelay: `-${(orbitSpeedSec / 4) * 3}s`,
              }}
            >
              <Flame className="w-5 h-5 text-[#f97316]" />
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER SCROLL INDICATOR */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer" onClick={onExploreServicesClick}>
        <div className="scroll-dot w-[28px] h-[48px] border-2 border-[rgba(249,115,22,0.4)] rounded-full relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#f97316] rounded-full animate-[scrollBounce_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
