import { useState } from "react";
import { Bolt, Phone, Mail, Clock, MapPin, Dot } from "lucide-react";
import { OWNER_INFO, SERVICES_DATA } from "../data";
import SafeImage from "./SafeImage";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onServiceSelect: (serviceId: string) => void;
  currentServiceId: string | null;
  onBackToHome: () => void;
}

export default function Footer({
  onNavigate,
  onServiceSelect,
  currentServiceId,
  onBackToHome,
}: FooterProps) {
  const [logoSrc, setLogoSrc] = useState("/kselectrical1/images/log.png");
  const [useFallbackLogo, setUseFallbackLogo] = useState(false);

  const handleLogoError = () => {
    if (logoSrc === "/kselectrical1/images/log.png") {
      setLogoSrc("/kselectrical1/images/logo.png");
    } else if (logoSrc === "/kselectrical1/images/logo.png") {
      setLogoSrc("/kselectrical1/images/log.png.png");
    } else if (logoSrc === "/kselectrical1/images/log.png.png") {
      setLogoSrc("/images/log.png");
    } else {
      setUseFallbackLogo(true);
    }
  };

  const handleQuickLink = (hash: string) => {
    if (currentServiceId) {
      onBackToHome();
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        onNavigate(hash);
      }
    }
  };

  return (
    <footer className="footer bg-[#1c1917] border-t border-[rgba(249,115,22,0.15)] relative z-10 select-none">
      <div className="footer-top max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* BRAND */}
          <div className="footer-brand flex flex-col">
            <div
              className="logo flex items-center gap-3 cursor-pointer self-start"
              onClick={() => {
                onBackToHome();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {!useFallbackLogo ? (
                <SafeImage
                  src={logoSrc}
                  alt="KS Electrical & AC Service"
                  referrerPolicy="no-referrer"
                  onErrorCallback={handleLogoError}
                  className="logo-icon w-10 h-10 object-contain rounded-lg bg-stone-900"
                />
              ) : (
                <div className="logo-icon w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#fbbf24] rounded-lg flex items-center justify-center text-white">
                  <Bolt className="w-5 h-5 fill-white text-white" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-stone-50 leading-tight uppercase">
                  KS Electrical
                </span>
                <span className="text-[10px] text-[#f97316] font-semibold tracking-[0.5px] leading-none uppercase">
                  & AC Service
                </span>
              </div>
            </div>
            
            <p className="text-sm text-stone-400 leading-relaxed mt-4 mb-6">
              आपके घर के सभी Appliances की Expert Repair — Fast, Affordable, Guaranteed & Reliable.
            </p>

            <a
              href={`tel:${OWNER_INFO.phone1}`}
              className="footer-phone inline-flex items-center gap-2 text-[#f97316] font-heading font-bold text-xl hover:text-[#fbbf24] transition-colors self-start"
            >
              <Phone className="w-5 h-5 fill-[#f97316] text-[#f97316]" /> {OWNER_INFO.phone1}
            </a>
          </div>

          {/* LIST SERVICES */}
          <div className="footer-links-col">
            <h5 className="font-heading font-bold text-base text-stone-100 tracking-wider uppercase pb-2.5 mb-5 border-b border-[rgba(249,115,22,0.15)]">
              Our Services
            </h5>
            <ul className="flex flex-col gap-3">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onServiceSelect(service.id)}
                    className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer bg-transparent border-0 outline-none text-left"
                  >
                    {service.title} ({service.titleHindi})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links-col">
            <h5 className="font-heading font-bold text-base text-stone-100 tracking-wider uppercase pb-2.5 mb-5 border-b border-[rgba(249,115,22,0.15)]">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => handleQuickLink("home")}
                  className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Home / मुख्य पेज
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("services")}
                  className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Services Listing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("gallery")}
                  className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Work Gallery / गैलरी
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("why-us")}
                  className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Why Choose Us / विशेषता
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("process")}
                  className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Booking Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleQuickLink("testimonials")}
                  className="text-sm text-stone-400 hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT DETAIL SHEET */}
          <div className="footer-contact-col">
            <h5 className="font-heading font-bold text-base text-stone-100 tracking-wider uppercase pb-2.5 mb-5 border-b border-[rgba(249,115,22,0.15)]">
              Contact Info
            </h5>
            <div className="flex flex-col gap-3.5 text-sm text-stone-400">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                <span>Gaur City, Sector 4, Noida Extension & Ghaziabad.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                <a href={`tel:${OWNER_INFO.phone2}`} className="hover:text-white transition-colors">
                  {OWNER_INFO.phone2} / {OWNER_INFO.phone1}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                <a href={`mailto:${OWNER_INFO.email}`} className="hover:text-white transition-colors">
                  {OWNER_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                <span>Mon-Sun: 08:00 AM - 09:00 PM</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEGAL RIGHTS */}
      <div className="footer-bottom border-t border-[rgba(249,115,22,0.15)] py-6 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 font-medium">
            © {new Date().getFullYear()} KS Electrical & AC Service. All Rights Reserved.
          </p>
          <div className="flex items-center text-xs text-stone-500">
            <span>Made for Local Service Excellence</span>
            <Dot className="w-4 h-4 text-[#f97316]" />
            <a href={OWNER_INFO.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#f97316] transition-colors underline">
              Google Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
