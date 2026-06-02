import { useState } from "react";
import { ArrowLeft, Check, AlertTriangle, HelpCircle, Phone, Calculator, CheckCircle2, DollarSign, Clock, ChevronDown } from "lucide-react";
import { ServiceDetail } from "../types";
import { OWNER_INFO } from "../data";
import BookingForm from "./BookingForm";
import SafeImage from "./SafeImage";

interface ServicesDetailProps {
  service: ServiceDetail;
  onBack: () => void;
  onScrollToForm: () => void;
  isModal?: boolean;
}

export default function ServicesDetail({ service, onBack, onScrollToForm, isModal = false }: ServicesDetailProps) {
  const [imageError, setImageError] = useState(false);
  const [calcSelections, setCalcSelections] = useState<string[]>([]);
  const [calcSuccess, setCalcSuccess] = useState(false);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaqIdx((prev) => (prev === idx ? null : idx));
  };

  // Estimator logic
  const handleCalcToggle = (item: string) => {
    setCalcSelections((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Convert pricing string to a clean number
  const extractPriceNumber = (priceStr: string) => {
    const matched = priceStr.replace(/[^0-9]/g, "");
    return matched ? parseInt(matched) : 0;
  };

  // Sum calculated values
  const totalEstimatedCost = calcSelections.reduce((acc, itemTitle) => {
    const found = service.pricing.find((p) => p.item === itemTitle);
    if (found) {
      return acc + extractPriceNumber(found.price);
    }
    return acc;
  }, 0);

  const handleShareCalculationOnWhatsApp = () => {
    if (calcSelections.length === 0) return;
    setCalcSuccess(true);
    setTimeout(() => setCalcSuccess(false), 3000);

    const heading = `नमस्ते KS Electrical & AC Service! 🙏`;
    const selectedItemsList = calcSelections
      .map((item) => {
        const p = service.pricing.find((pi) => pi.item === item);
        return `• ${item} (${p ? p.price : ""})`;
      })
      .join("\n");

    const messageText = 
`*अनुमानित रिपेयर बिल कैलकुलेशन (Estimated Repair Calculation)*
📐 *सर्विस:* ${service.title} (${service.titleHindi})
-----------------------------------------
${selectedItemsList}
-----------------------------------------
📊 *कुल अनुमानित लागत (Total Estimate):* ₹${totalEstimatedCost}/-
📍 *सर्विस एरिया:* ${OWNER_INFO.serviceArea}

कृपया इस काम के लिए मेरे पास टेक्नीशियन भेजने की कृपा करें।`;

    const waUrl = `https://wa.me/91${OWNER_INFO.phone1}?text=${encodeURIComponent(heading + "\n\n" + messageText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className={`bg-[#0c0a09] ${isModal ? "p-3 md:p-6" : "min-h-screen pt-28 pb-16"}`}>
      
      {/* HEADER BANNER */}
      <div className="max-w-7xl mx-auto px-1 md:px-6 mb-8">
        {!isModal && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f97316] hover:text-[#fbbf24] transition-colors mb-6 cursor-pointer bg-transparent border-0 outline-none"
          >
            <ArrowLeft className="w-4 h-4" /> मुख्य पेज पर वापस जाएँ (Back to Home)
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_70%)] pointer-events-none rounded-full"></div>
          
          <div className="lg:col-span-8 flex flex-col relative z-10">
            <span className="text-xs text-[#f97316] font-bold tracking-widest uppercase mb-2 font-heading">
              {service.titleHindi}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-stone-50 leading-none tracking-tight mb-4">
              {service.title}
            </h2>
            <p className="text-base text-stone-300 leading-relaxed font-light max-w-2xl">
              {service.longDesc}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={`tel:${OWNER_INFO.phone1}`}
                className="px-5 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs md:text-sm font-bold rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" /> अभी कॉल करें: {OWNER_INFO.phone1}
              </a>
              <button
                onClick={onScrollToForm}
                className="px-5 py-3 border border-[rgba(249,115,22,0.4)] hover:border-[#f97316] bg-[rgba(249,115,22,0.05)] text-stone-100 hover:text-white rounded-lg text-xs md:text-sm font-semibold transition-colors cursor-pointer"
              >
                बुकिंग फॉर्म पर जाएँ ↓
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 max-h-[220px] rounded-xl overflow-hidden border border-stone-800 bg-stone-950 flex items-center justify-center relative shadow-inner">
            {!imageError ? (
              <SafeImage
                src={service.bannerImage || service.image}
                alt={`${service.title} - KS Electrical & AC Service Noida Extension & Ghaziabad`}
                referrerPolicy="no-referrer"
                onErrorCallback={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="p-8 text-stone-700 text-center flex flex-col items-center gap-2">
                <AlertTriangle className="w-12 h-12 text-[#f97316]" />
                <span className="text-xs">Image loading from GitHub repository...</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* BODY SECTIONS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: SPECS, CALCULATOR & PROBLEMS */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* FEATURES GRID */}
          <div className="bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-2xl text-stone-50 mb-5 pb-2 border-b border-stone-800">
              सर्विस की मुख्य विशेषताएं (Service Benefits)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-stone-950/40 rounded-xl border border-stone-850">
                  <div className="w-7 h-7 bg-[rgba(34,197,94,0.15)] border border-green-500/30 rounded-full flex items-center justify-center text-[#22c55e] flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-200">{feature}</p>
                    <p className="text-[10px] text-stone-500 mt-0.5">गुड़वत्तापूर्ण पार्ट्स और प्रमाणित टेक्नीशियन</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DYNAMIC PRICE ESTIMATOR */}
          <div className="bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-8 relative">
            <div className="absolute top-4 right-4 text-[#fbbf24] animate-pulse">
              <Calculator className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-medium text-2xl text-[#f97316] mb-1">
              Live Rate Estimator Calculator
            </h3>
            <p className="text-xs text-stone-400 mb-6 font-light">
              काम का चयन करें और तुरंत कुल अनुमानित लागत जानें। (Select services to estimate total bill)
            </p>

            <div className="flex flex-col gap-3.5">
              {service.pricing.map((priceItem, idx) => {
                const isSelected = calcSelections.includes(priceItem.item);
                return (
                  <div
                    key={idx}
                    onClick={() => handleCalcToggle(priceItem.item)}
                    className={`flex items-center justify-between gap-4 p-4 rounded-xl border transition-all cursor-pointer select-none ${
                      isSelected
                        ? "bg-[rgba(249,115,22,0.06)] border-[#f97316]/50 shadow-[0_4px_15px_rgba(249,115,22,0.1)]"
                        : "bg-stone-950/40 border-stone-850 hover:border-stone-700 hover:bg-stone-900/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                          isSelected
                            ? "bg-[#f97316] border-[#f97316] text-white"
                            : "border-stone-600 text-transparent"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-stone-200">{priceItem.item}</p>
                        <span className="text-[10.5px] text-stone-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" /> समय अवधि: {priceItem.time}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm font-heading font-extrabold text-[#fbbf24] tracking-wide">
                        {priceItem.price}
                      </p>
                      <span className="text-[9px] text-[#f97316] uppercase mt-0.5 font-bold tracking-wider">
                        Estimated Rates
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TOTALS WRAP */}
            <div className="mt-6 pt-5 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-950/60 p-4 rounded-xl">
              <div>
                <p className="text-xs text-stone-400">कुल अनुमानित लागत (Estimate Bill Sum):</p>
                <p className="text-3xl font-heading font-black text-[#f97316] tracking-wide mt-1">
                  ₹{totalEstimatedCost}/-
                </p>
                <span className="text-[10px] text-stone-500 leading-none">
                  *अंतिम रेट टेक्नीशियन द्वारा ऑन-साइट जांच के बाद तय होगा (टैक्स एक्स्ट्रा)
                </span>
              </div>
              
              <button
                type="button"
                onClick={handleShareCalculationOnWhatsApp}
                disabled={calcSelections.length === 0}
                className={`px-5 py-3.5 rounded-lg text-sm font-bold text-white border-0 transition-all flex items-center gap-2 cursor-pointer ${
                  calcSelections.length > 0
                    ? "bg-[#22c55e] hover:bg-[#16a34a] hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
                    : "bg-stone-800 text-stone-500 pointer-events-none"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" /> estimate व्हाट्सएप पर शेयर करें
              </button>
            </div>
            
            {calcSuccess && (
              <div className="absolute inset-x-6 bottom-4 p-3 bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e] text-xs font-semibold text-center rounded-lg animate-pulse">
                ✅ Calculation shared on WhatsApp! Redirecting...
              </div>
            )}
          </div>

          {/* COMMON TROUBLESHOOTING PANEL */}
          <div className="bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#f97316]" />
              <h3 className="font-heading font-bold text-2xl text-stone-50">
                आम समस्याएं और समाधान (FAQs & Issues)
              </h3>
            </div>
            <p className="text-xs text-stone-400 mb-6 leading-relaxed">
              क्या आपके उपकरण में यह परेशानी आ रही है? जानिए इसके पीछे का असली कारण और हम इसे कैसे ठीक करते हैं:
            </p>
            
            <div className="flex flex-col gap-5">
              {service.problems.map((prob, idx) => (
                <div key={idx} className="p-5 bg-stone-950/50 rounded-xl border border-stone-850">
                  <h4 className="text-sm font-bold text-[#fbbf24] flex items-center gap-2.5 mb-2.5">
                    <span className="w-5 h-5 bg-[#fbbf24]/10 rounded flex items-center justify-center text-xs">?</span>
                    {prob.problem}
                  </h4>
                  <div className="pl-7 text-xs flex flex-col gap-1.5 text-stone-300 leading-relaxed font-light border-l-2 border-[#f97316]/30">
                    <p className="font-semibold text-[#f97316] mb-0.5">हमारा समाधान (Our Solution):</p>
                    <p>{prob.solution}</p>
                    {prob.solutionHindi && (
                      <p className="font-serif italic text-stone-400 mt-1">{prob.solutionHindi}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQS PANEL */}
          <div className="bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-2xl text-stone-50 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#f97316]" /> पूछे जाने वाले सवाल (Additional FAQs)
            </h3>
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = activeFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-stone-950/40 border-[#f97316]/40 shadow-sm"
                        : "bg-stone-950/20 border-stone-850 hover:border-stone-800"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left flex items-center justify-between gap-4 p-4 cursor-pointer focus:outline-none bg-transparent border-0 outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-stone-200">प्रश्न: {faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#f97316] transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? "max-h-96 opacity-100 p-4 pt-0 border-t border-stone-850/40"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="pt-3 text-xs text-stone-400 leading-relaxed pl-3 border-l-2 border-[#f97316]/50">
                        उत्तर: {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: BOOKING FORM */}
        <div className="lg:col-span-4 sticky top-24" id="detail-booking-panel">
          <BookingForm preselectedServiceId={service.id} />
        </div>

      </div>
    </div>
  );
}
