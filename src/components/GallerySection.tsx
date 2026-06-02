import { useState } from "react";
import { GALLERY_DATA, GalleryItem, OWNER_INFO } from "../data";
import { Camera, X, Check, Eye } from "lucide-react";
import SafeImage from "./SafeImage";

interface GallerySectionProps {
  onPreselectService: (serviceId: string) => void;
}

export default function GallerySection({ onPreselectService }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { label: "सभी काम (All Photos)", key: "all" },
    { label: "AC सर्विस", key: "ac" },
    { label: "वॉशिंग मशीन / फ्रिज", key: "wm_fridge" },
    { label: "बिजली और वायरिंग", key: "elec" },
    { label: "ड्रिल व हैंगिंग", key: "drill_hang" },
  ];

  const matchesFilter = (item: GalleryItem, filterKey: string) => {
    if (filterKey === "all") return true;
    if (filterKey === "ac") return item.category === "ac" || item.category === "cooler";
    if (filterKey === "wm_fridge") return item.category === "wm" || item.category === "fridge" || item.category === "ro" || item.category === "geyser";
    if (filterKey === "elec") return item.category === "elec";
    if (filterKey === "drill_hang") return item.category === "drill";
    return false;
  };

  const filteredPhotos = GALLERY_DATA.filter((item) => matchesFilter(item, activeFilter));

  const handleRequestSimilar = (item: GalleryItem) => {
    let serviceIdToSelect = "elec";
    if (item.category === "ac") serviceIdToSelect = "ac";
    else if (item.category === "wm") serviceIdToSelect = "wm";
    else if (item.category === "fridge") serviceIdToSelect = "fridge";
    else if (item.category === "ro") serviceIdToSelect = "ro";
    else if (item.category === "geyser") serviceIdToSelect = "geyser";
    else if (item.category === "cooler") serviceIdToSelect = "cooler";
    else if (item.category === "drill") serviceIdToSelect = "drill";

    onPreselectService(serviceIdToSelect);
    setSelectedPhoto(null);

    // Scroll to booking form
    setTimeout(() => {
      const formEl = document.getElementById("booking-form-section") || document.getElementById("contact");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <section id="gallery" className="relative py-20 px-6 bg-stone-950/40 border-t border-stone-900 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a0a00]/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 select-none">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.25)] rounded-full text-xs font-semibold text-[#f97316] uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" /> गैलरी / हमारा काम
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-stone-50 mb-3 leading-none uppercase">
            Work Photo Gallery
          </h2>
          <p className="text-sm md:text-base text-stone-400 font-light mt-2">
            कौशिंद्र सिंह द्वारा नोएडा और गाजियाबाद में ग्राहकों के घरों पर की गई कुछ मुख्य रिपेयरिंग और फिटिंग की वास्तविक तस्वीरें।
          </p>
        </div>

        {/* TABS FILTER */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4.5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-[0_4px_15px_rgba(249,115,22,0.3)] scale-[1.03]"
                  : "bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-stone-200 border border-stone-800"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* PHOTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              style={{ animationDelay: `${idx * 50}ms` }}
              className="group cursor-pointer bg-stone-900 border border-stone-850 rounded-2xl overflow-hidden relative shadow-lg hover:border-[#f97316]/50 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <SafeImage
                  src={item.image}
                  alt={`${item.title} at client home in Noida Extension & Ghaziabad`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onErrorCallback={() => {
                    // Fallback visual in case files aren't uploaded yet or completely fail
                    const el = document.getElementById(`gallery-img-container-${item.id}`);
                    if (el) {
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent && !parent.querySelector(".custom-fallback-grid")) {
                        const fallback = document.createElement("div");
                        fallback.className = "custom-fallback-grid w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-stone-900 to-stone-950 text-center text-stone-600 border-b border-stone-850 absolute inset-0";
                        fallback.innerHTML = `
                          <div class="w-11 h-11 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-[#f97316] mb-2 text-sm">
                            🧰
                          </div>
                          <p class="text-xs font-bold text-stone-300 px-2 line-clamp-2">${item.title}</p>
                          <p class="text-[9px] text-[#f97316] font-medium uppercase mt-1">Ready for Sync</p>
                        `;
                        parent.appendChild(fallback);
                      }
                    }
                  }}
                  id={`gallery-img-container-${item.id}`}
                />
                
                {/* BLACK OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Eye className="w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* CARD INFO FOOTER */}
              <div className="p-4 bg-stone-900/90 border-t border-stone-850 flex flex-col justify-center">
                <p className="text-xs text-[#f97316] font-semibold tracking-wide uppercase leading-none mb-1">
                  {item.category.toUpperCase()} WORK
                </p>
                <h4 className="text-sm font-bold text-stone-100 truncate group-hover:text-[#f97316] transition-colors leading-tight">
                  {item.titleHindi}
                </h4>
                <p className="text-[11px] text-stone-500 truncate leading-none mt-1">
                  {item.title}
                </p>
              </div>  
            </div>
          ))}
        </div>

        {/* EMPTY PLACES MESSAGE */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16 text-stone-500">
            इस केटेगरी में वर्तमान में कोई तस्वीर उपलब्ध नहीं है।
          </div>
        )}
      </div>

      {/* DETAIL MODAL ZOOM */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-stone-900 border border-[rgba(249,115,22,0.3)] rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.2s_ease-out]">
            {/* Close Cross */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-stone-950/80 border border-stone-800 text-stone-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Frame */}
            <div className="relative aspect-[4/3] w-full bg-stone-950">
              <SafeImage
                src={selectedPhoto.image}
                alt={`${selectedPhoto.title} completed by KS Electrical & AC Service`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onErrorCallback={() => {
                  const el = document.getElementById("gallery-zoom-img");
                  if (el) {
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector(".custom-fallback-modal")) {
                      const fallback = document.createElement("div");
                      fallback.className = "custom-fallback-modal w-full h-full flex flex-col items-center justify-center p-8 bg-stone-950 text-center absolute inset-0";
                      fallback.innerHTML = `
                        <span class="text-4xl">🛠️</span>
                        <p class="text-sm font-bold text-stone-300 mt-2">${selectedPhoto.title}</p>
                        <p class="text-xs text-stone-500 mt-1 uppercase">Image Name: ${selectedPhoto.image}</p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }
                }}
                id="gallery-zoom-img"
              />
            </div>

            {/* Modal details */}
            <div className="p-6">
              <span className="text-xs text-[#f97316] font-bold uppercase tracking-wider block mb-1">
                {selectedPhoto.category.toUpperCase()} WORK
              </span>
              <h3 className="text-xl font-heading font-extrabold text-stone-100 leading-tight">
                {selectedPhoto.titleHindi}
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-light">
                {selectedPhoto.title} (Verified Customer Appliance Project)
              </p>

              {/* Service Areas */}
              <div className="mt-4 p-3 bg-stone-950/40 border border-stone-850 rounded-xl flex items-start gap-2.5">
                <div className="text-[#22c55e] mt-0.5 font-bold text-xs font-heading">✓</div>
                <div className="text-[11px] text-stone-450 leading-relaxed font-light">
                  <span className="text-stone-300 font-semibold mb-0.5">सफलतापूर्वक पूर्ण: </span>
                  यह काम नोएडा एक्सटेंशन सोसाइटी में उत्कृष्ट समाधान और 100% सुरक्षा अनुपालन के साथ किया गया था।
                </div>
              </div>

              {/* ACTION CALL TO ACTION */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  onClick={() => handleRequestSimilar(selectedPhoto)}
                  className="px-4 py-3 bg-[#f97316] hover:bg-[#ea580c] rounded-xl text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                >
                  ऐसा काम बुक करें
                </button>
                <a
                  href={`tel:${OWNER_INFO.phone1}`}
                  className="px-4 py-3 border border-[rgba(249,115,22,0.3)] hover:border-[#f97316] bg-[rgba(249,115,22,0.04)] hover:bg-[rgba(249,115,22,0.1)] rounded-xl text-xs sm:text-sm font-bold text-stone-200 hover:text-white transition-all flex items-center justify-center text-center cursor-pointer"
                >
                  अभी कॉल करें
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
