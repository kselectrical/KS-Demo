import React, { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  Wind, 
  Droplets, 
  RefreshCw, 
  Flame, 
  Zap, 
  HelpCircle,
  Snowflake,
  ThermometerSun,
  Compass,
  Fan,
  Filter,
  ToggleLeft,
  Tv,
  Disc,
  RotateCw,
  Trash2,
  Scissors,
  Hammer
} from "lucide-react";
import { ServiceDetail } from "../types";
import SafeImage from "./SafeImage";

interface ServiceCardProps {
  key?: string;
  service: ServiceDetail;
  onSelect: (id: string) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Exact custom tilt effect from script.js
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Cap tilts at slightly safer 6 degrees
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setCoords({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Get matching Lucide Icon
  const renderIcon = () => {
    const iconClass = "w-6 h-6 text-[#f97316] transition-all group-hover:text-white";
    switch (service.icon) {
      case "Wind":
        return <Wind className={iconClass} />;
      case "Droplets":
        return <Droplets className={iconClass} />;
      case "RefreshCw":
        return <RefreshCw className={iconClass} />;
      case "Flame":
        return <Flame className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      case "Snowflake":
        return <Snowflake className={iconClass} />;
      case "ThermometerSun":
        return <ThermometerSun className={iconClass} />;
      case "Compass":
        return <Compass className={iconClass} />;
      case "Fan":
        return <Fan className={iconClass} />;
      case "Filter":
        return <Filter className={iconClass} />;
      case "ToggleLeft":
        return <ToggleLeft className={iconClass} />;
      case "Tv":
        return <Tv className={iconClass} />;
      case "Disc":
        return <Disc className={iconClass} />;
      case "RotateCw":
        return <RotateCw className={iconClass} />;
      case "Trash2":
        return <Trash2 className={iconClass} />;
      case "Scissors":
        return <Scissors className={iconClass} />;
      case "Hammer":
        return <Hammer className={iconClass} />;
      default:
        return <HelpCircle className={iconClass} />;
    }
  };

  // Extract starting price dynamically
  const getStartingPrice = () => {
    let minPriceNum = Infinity;
    let minPriceStr = "₹199 से शुरू"; // Safe fallback
    
    if (service.pricing && service.pricing.length > 0) {
      service.pricing.forEach(p => {
        const matched = p.price.match(/₹([0-9]+)/);
        if (matched && matched[1]) {
          const val = parseInt(matched[1]);
          if (val < minPriceNum) {
            minPriceNum = val;
            minPriceStr = `₹${val} से शुरू`;
          }
        }
      });
    }
    return minPriceStr;
  };

  const currentTransform = isHovered
    ? `translateY(-6px) rotateX(${coords.y}deg) rotateY(${coords.x}deg)`
    : "translateY(0px) rotateX(0deg) rotateY(0deg)";

  return (
    <div
      onClick={() => onSelect(service.id)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="service-card group cursor-pointer bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-400 select-none flex flex-col justify-between"
      style={{
        transform: currentTransform,
        perspective: "1000px",
        willChange: "transform",
      }}
    >
      {/* GLOW EFFECT */}
      <div className="absolute -inset-50 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div>
        {/* UPPER ROW: ICON AND DYNAMIC OPTIONAL IMAGE BANNER */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="service-icon-wrap relative w-16 h-16">
            <div className="service-icon w-16 h-16 bg-gradient-to-br from-[rgba(249,115,22,0.2)] to-[rgba(249,115,22,0.05)] border border-[rgba(249,115,22,0.3)] rounded-2xl flex items-center justify-center transition-all duration-300 z-10 relative group-hover:bg-gradient-to-br group-hover:from-[#f97316] group-hover:to-[#ea580c] group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              {renderIcon()}
            </div>
            {/* Pulsing Aura */}
            <div className="service-pulse absolute -inset-1.5 border border-[rgba(249,115,22,0.2)] rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
          </div>

          {/* Service Thumbnail */}
          <div className="w-20 h-16 rounded-lg overflow-hidden border border-stone-800 bg-stone-950/80 flex items-center justify-center relative">
            {!imageError ? (
              <SafeImage
                src={service.image}
                alt={`${service.title} - Best Appliance Repair & Services in Noida Extension`}
                referrerPolicy="no-referrer"
                onErrorCallback={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-stone-900 to-stone-950 flex items-center justify-center text-stone-700">
                {renderIcon()}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* PRICE TAG STARTS FROM BADGE */}
        <div className="inline-flex items-center gap-1 px-2.5 py-1 mb-3 bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.25)] rounded-full text-xs font-bold text-[#fbbf24] tracking-wide">
          ⚡ {getStartingPrice()} (Starts at)
        </div>

        {/* TITLE */}
        <div className="mb-3">
          <h3 className="font-heading font-bold text-2xl text-stone-50 leading-tight group-hover:text-[#f97316] transition-colors">
            {service.title}
          </h3>
          <span className="text-xs text-stone-500 font-semibold uppercase font-serif tracking-wider">
            {service.titleHindi}
          </span>
        </div>

        {/* SUBTITLE */}
        <p className="text-sm text-stone-400 leading-relaxed mb-5 font-light line-clamp-2">
          {service.shortDesc}
        </p>

        {/* BULLETS */}
        <ul className="service-list flex flex-col gap-2.5 mb-6">
          {service.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-400">
              <Check className="w-3.5 h-3.5 text-[#f97316] mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA BUTTON */}
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(service.id);
          }}
          className="card-btn inline-flex items-center gap-2 px-5 py-2.5 bg-[rgba(249,115,22,0.06)] border border-[rgba(249,115,22,0.25)] rounded-lg text-xs font-bold text-[#f97316] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] hover:shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:gap-3 cursor-pointer transition-all duration-300"
        >
          पूरा विवरण (View Details) <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
