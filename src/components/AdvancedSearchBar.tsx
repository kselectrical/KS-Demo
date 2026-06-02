import { useState, useEffect, useRef } from "react";
import { Search, X, Sparkles, CornerDownRight, Phone } from "lucide-react";
import { SERVICES_DATA, OWNER_INFO } from "../data";
import { ServiceDetail } from "../types";

interface AdvancedSearchBarProps {
  onServiceSelect: (id: string) => void;
}

interface SearchResult {
  service: ServiceDetail;
  matchedType: "title" | "feature" | "pricing" | "problem";
  matchedText: string;
  matchedTextHindi?: string;
  score: number;
}

export default function AdvancedSearchBar({ onServiceSelect }: AdvancedSearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const popularTags = [
    { label: "AC Gas Repair (एसी गैस)", query: "AC gas" },
    { label: "RO Filter Replacement (आरओ फ़िल्टर)", query: "RO filter" },
    { label: "Washing Drum Spin (वाशिंग ड्रम)", query: "Washing drum" },
    { label: "Geyser Heating (गीजर हीटिंग)", query: "Geyser heater" },
    { label: "Switchboard & Wiring (वायरिंग)", query: "wiring" },
    { label: "Mixer Coupler (मिक्सर कप्लिंग)", query: "mixer" },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Search Logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const tempResults: SearchResult[] = [];

    SERVICES_DATA.forEach((service) => {
      let score = 0;
      let matchedType: "title" | "feature" | "pricing" | "problem" = "title";
      let matchedText = "";
      let matchedTextHindi = "";

      // 1. Match title & titleHindi (highest priority)
      const titleMatch = service.title.toLowerCase().includes(q);
      const titleHindiMatch = service.titleHindi.includes(q);
      if (titleMatch || titleHindiMatch) {
        score += 100;
        matchedType = "title";
        matchedText = service.title;
        matchedTextHindi = service.titleHindi;
      }

      // 2. Match pricing items
      service.pricing.forEach((p) => {
        if (p.item.toLowerCase().includes(q)) {
          score += 50;
          if (matchedType !== "title") {
            matchedType = "pricing";
            matchedText = p.item;
            matchedTextHindi = `${p.price} - ${p.time}`;
          }
        }
      });

      // 3. Match features
      service.features.forEach((f) => {
        if (f.toLowerCase().includes(q)) {
          score += 40;
          if (matchedType !== "title" && matchedType !== "pricing") {
            matchedType = "feature";
            matchedText = f;
          }
        }
      });

      // 4. Match common problems
      service.problems.forEach((p) => {
        const probMatch = p.problem.toLowerCase().includes(q);
        const probHindiMatch = p.solutionHindi?.includes(q) || p.problem.includes(q);
        if (probMatch || probHindiMatch) {
          score += 30;
          if (matchedType !== "title" && matchedType !== "pricing" && matchedType !== "feature") {
            matchedType = "problem";
            matchedText = p.problem;
          }
        }
      });

      // 5. Match description
      if (service.shortDesc.toLowerCase().includes(q) || service.longDesc.toLowerCase().includes(q)) {
        score += 20;
        if (score === 20) {
          matchedType = "title";
          matchedText = service.title;
          matchedTextHindi = service.titleHindi;
        }
      }

      if (score > 0) {
        tempResults.push({
          service,
          matchedType,
          matchedText,
          matchedTextHindi,
          score,
        });
      }
    });

    // Sort results by score (descending)
    tempResults.sort((a, b) => b.score - a.score);
    setResults(tempResults);
  }, [query]);

  const handleResultClick = (serviceId: string) => {
    onServiceSelect(serviceId);
    setIsOpen(false);
    setQuery("");
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto z-40 px-1 select-none">
      
      {/* SEARCH BOX GROUP */}
      <div className="relative flex items-center bg-stone-900/90 hover:bg-stone-900 border border-[rgba(249,115,22,0.3)] focus-within:border-[#f97316] focus-within:ring-2 focus-within:ring-[#f97316]/20 rounded-2xl p-1 shadow-lg transition-all duration-300">
        
        {/* Glow behind input on focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f97316]/10 to-[#ea580c]/10 rounded-2xl opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none"></div>

        <div className="flex items-center justify-center pl-4 pr-2 text-stone-400">
          <Search className="w-5 h-5 text-[#f97316]" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="सर्विस खोजें (उदा: AC, RO, वायरिंग, Geyser, Fridge...)"
          className="w-full bg-transparent border-0 outline-none text-stone-100 placeholder-stone-500 test-sm font-medium py-3 px-1 relative z-10 antialiased"
        />

        {query && (
          <button
            onClick={clearSearch}
            className="p-2 mr-1 rounded-lg bg-stone-850 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer relative z-10"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* POPULAR SEARCH TAGS */}
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5 px-1">
        <span className="text-[11px] text-stone-500 font-bold uppercase tracking-wider mr-1">
          पॉपुलर:
        </span>
        {popularTags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(tag.query);
              setIsOpen(true);
            }}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-stone-950/40 hover:bg-[rgba(249,115,22,0.06)] text-stone-450 hover:text-[#f97316] border border-stone-900 hover:border-[rgba(249,115,22,0.25)] transition-all cursor-pointer"
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* AUTOCOMPLETE SUGGESTIONS DROPDOWN */}
      {isOpen && query && (
        <div className="absolute left-0 right-0 top-full mt-3 bg-[#0c0a09]/95 backdrop-blur-xl border border-stone-800 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden max-h-96 overflow-y-auto z-50 animate-[fadeIn_0.15s_ease-out]">
          
          <div className="p-3 bg-stone-900/60 border-b border-stone-850 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest font-black text-stone-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] animate-pulse" /> search results ({results.length})
            </span>
            {results.length > 0 && (
              <span className="text-[10px] text-[#f97316] font-bold">
                क्लिक कर विवरण देखें (Click to Open Popup)
              </span>
            )}
          </div>

          <div className="divide-y divide-stone-850/60">
            {results.map((result) => (
              <div
                key={result.service.id}
                onClick={() => handleResultClick(result.service.id)}
                className="group p-4 bg-transparent hover:bg-[rgba(249,115,22,0.04)] flex items-start gap-4 transition-all duration-200 cursor-pointer"
              >
                {/* Visual indicator / category icon */}
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all flex-shrink-0">
                  <span className="text-lg font-heading">🔧</span>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Core Service Title */}
                  <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-bold text-sm text-stone-100 group-hover:text-[#f97316] transition-colors leading-tight">
                      {result.service.title}
                    </span>
                    <span className="text-xs text-stone-400 font-serif">
                      ({result.service.titleHindi})
                    </span>
                  </div>

                  {/* Match sub-details block */}
                  {result.matchedType !== "title" && (
                    <div className="text-xs text-stone-450 mt-1.5 flex items-start gap-1 p-1.5 rounded bg-stone-950/40 border border-stone-850/40">
                      <CornerDownRight className="w-3 h-3 text-[#f97316] mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 truncate">
                        <span className="text-[10px] font-bold text-[#f97316] uppercase tracking-wider mr-1.5">
                          {result.matchedType === "pricing" ? "RATE ITEM" : result.matchedType.toUpperCase()}:
                        </span>
                        <span className="text-stone-300 font-light truncate">
                          {result.matchedText}
                        </span>
                        {result.matchedTextHindi && (
                          <span className="text-stone-400 italic ml-1 select-none">
                            ({result.matchedTextHindi})
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Service tagline */}
                  {result.matchedType === "title" && (
                    <p className="text-xs text-stone-400 line-clamp-1 mt-1 font-light">
                      {result.service.shortDesc}
                    </p>
                  )}
                </div>

                {/* Arrow indicator */}
                <div className="text-stone-600 group-hover:text-[#f97316] transition-colors pr-1 self-center">
                  →
                </div>
              </div>
            ))}

            {/* IF NO RESULTS FOUND */}
            {results.length === 0 && (
              <div className="p-8 text-center text-stone-400">
                <span className="text-4xl block mb-3">🛠️</span>
                <p className="font-bold text-stone-200">कोई परिमाण नहीं मिला! (Result Not Found)</p>
                <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto font-light leading-relaxed">
                  चिंता न करें, आप कौशिंद्र सिंह को सीधे कॉल कर अपनी समस्या बता सकते हैं। हम आपकी सहायता के लिए तैयार हैं।
                </p>
                
                <div className="mt-5 flex justify-center gap-3">
                  <a
                    href={`tel:${OWNER_INFO.phone1}`}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white text-xs font-bold rounded-lg shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <Phone className="w-3 h-3 fill-currentColor" /> अभी कॉल करें
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
