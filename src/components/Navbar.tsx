import { useState, useEffect } from "react";
import { Bolt, Phone, Menu, X, ArrowLeft } from "lucide-react";
import { OWNER_INFO } from "../data";
import SafeImage from "./SafeImage";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentServiceId: string | null;
  onBackToHome: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  currentServiceId,
  onBackToHome,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (hash: string) => {
    setIsMobileMenuOpen(false);
    if (currentServiceId) {
      onBackToHome();
      // Wait for DOM to restore home elements before scrolling
      setTimeout(() => {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        onNavigate(hash);
      }
    }
  };

  const navLinks = [
    { name: "Home", hash: "home" },
    { name: "Services", hash: "services" },
    { name: "Gallery", hash: "gallery" },
    { name: "Why Us", hash: "why-us" },
    { name: "Process", hash: "process" },
    { name: "Reviews", hash: "testimonials" },
    { name: "Contact", hash: "contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-400 ${
        isScrolled || currentServiceId
          ? "bg-[rgba(12,10,9,0.95)] backdrop-blur-[20px] py-3 border-b border-[rgba(249,115,22,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 h-12">
        {/* LOGO */}
        <div
          className="logo flex items-center gap-3 cursor-pointer select-none"
          onClick={() => {
            onBackToHome();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {!useFallbackLogo ? (
            <SafeImage
              src={logoSrc}
              alt="KS Electrical & AC Service Logo"
              referrerPolicy="no-referrer"
              onErrorCallback={handleLogoError}
              className="logo-icon w-10 h-10 object-contain rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.3)] bg-stone-900"
            />
          ) : (
            <div className="logo-icon w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#fbbf24] rounded-lg flex items-center justify-center text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Bolt className="w-5 h-5 fill-white text-white" />
            </div>
          )}
          <div className="flex flex-col select-none">
            <span className="font-heading font-bold text-lg text-stone-50 tracking-wide uppercase leading-tight">
              KS Electrical
            </span>
            <span className="text-[10px] text-[#f97316] font-semibold tracking-[0.5px] leading-none uppercase">
              & AC Service
            </span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        {!currentServiceId ? (
          <ul className="hidden md:flex items-center gap-1 xl:gap-2 ml-auto">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <button
                  onClick={() => handleLinkClick(link.hash)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === link.hash
                      ? "text-[#f97316] bg-[rgba(249,115,22,0.1)] font-semibold"
                      : "text-stone-400 hover:text-[#f97316] hover:bg-[rgba(249,115,22,0.06)]"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="hidden md:flex items-center ml-auto">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 px-4 py-2 border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.05)] rounded-lg text-sm font-medium text-stone-200 hover:text-white hover:border-[#f97316] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> मुख्य पेज पर जाएँ (Home)
            </button>
          </div>
        )}

        {/* CALL DIRECT CTA */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${OWNER_INFO.phone1}`}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-lg text-sm font-bold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.6)] hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-white" /> Call: {OWNER_INFO.phone1}
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 p-1 cursor-pointer outline-none text-stone-200 hover:text-[#f97316]"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-50" />
            ) : (
              <Menu className="w-6 h-6 text-stone-50" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE POPUP MENU */}
      <div
        className={`md:hidden fixed top-[60px] left-0 right-0 bg-stone-950/98 backdrop-blur-[20px] border-b border-[rgba(249,115,22,0.25)] p-6 transition-all duration-300 flex flex-col gap-4 shadow-2xl ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-10 opacity-0 invisible"
        }`}
      >
        {!currentServiceId ? (
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <button
                  onClick={() => handleLinkClick(link.hash)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                    activeSection === link.hash
                      ? "text-[#f97316] bg-[rgba(249,115,22,0.12)]"
                      : "text-stone-300 hover:text-[#f97316]"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBackToHome();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.3)] rounded-lg text-base font-semibold text-stone-200"
          >
            <ArrowLeft className="w-4 h-4" /> मुख्य पेज पर जाएँ (Home)
          </button>
        )}

        {/* MOBILE CALL BUTTON */}
        <a
          href={`tel:${OWNER_INFO.phone1}`}
          className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-lg text-base font-bold text-white shadow-xl"
        >
          <Phone className="w-5 h-5 fill-white text-white" /> अभी बात करें ({OWNER_INFO.phone1})
        </a>
      </div>
    </nav>
  );
}
