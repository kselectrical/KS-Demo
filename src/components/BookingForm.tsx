import React, { useState } from "react";
import { Send, CheckCircle, Calendar, Clock, MapPin, User, Phone as PhoneIcon, MessageSquare } from "lucide-react";
import { OWNER_INFO, SERVICES_DATA } from "../data";
import { BookingData } from "../types";

interface BookingFormProps {
  preselectedServiceId?: string;
  onSuccess?: () => void;
}

export default function BookingForm({
  preselectedServiceId = "",
  onSuccess,
}: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    phone: "",
    serviceId: preselectedServiceId,
    problem: "",
    date: "",
    timeSlot: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, serviceId, problem, date, timeSlot, address } = formData;

    if (!name.trim()) {
      setError("कृपया अपना नाम लिखें।");
      return;
    }
    if (!phone.trim()) {
      setError("कृपया अपना चालू मोबाइल नंबर दर्ज करें।");
      return;
    }
    if (phone.trim().length < 10) {
      setError("कृपया सही 10-अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }
    if (!serviceId) {
      setError("कृपया रिपेयर के लिए सर्विस का चयन करें।");
      return;
    }

    setIsLoading(true);

    // Get Service Title
    const selectedService = SERVICES_DATA.find((s) => s.id === serviceId);
    const serviceName = selectedService ? selectedService.title : serviceId;

    // Simulate booking save trigger
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);

      // Reset Form fields
      setFormData({
        name: "",
        phone: "",
        serviceId: preselectedServiceId || "",
        problem: "",
        date: "",
        timeSlot: "",
        address: "",
      });

      if (onSuccess) onSuccess();

      // Build formatted Hindi/English WhatsApp message
      const greeting = "नमस्ते KS Electrical & AC Service! 🙏";
      const details = 
`*नई रिपेयर बुकिंग अनुरोध (New Booking Request)*
----------------------------------------------
👤 *ग्राहक का नाम:* ${name.trim()}
📞 *फ़ोन नंबर:* ${phone.trim()}
🛠️ *ज़रूरी सर्विस:* ${serviceName}
💬 *समस्या (Problem):* ${problem.trim() || "-"}
📅 *दिनांक (Date):* ${date || "जल्द से जल्द (As soon as possible)"}
⏰ *समय (Time Slot):* ${timeSlot || "किसी भी समय"}
📍 *पता (Address):* ${address?.trim() || "-"}
----------------------------------------------
कृपया इस बुकिंग की पुष्टि करें और टेक्नीशियन भेजें। धन्यवाद!`;

      const fullMessage = `${greeting}\n\n${details}`;
      const waUrl = `https://wa.me/91${OWNER_INFO.phone1}?text=${encodeURIComponent(fullMessage)}`;

      // Open whatsapp link
      window.open(waUrl, "_blank");

      // Hide success notification after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <div className="contact-form-wrap bg-stone-900 border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient(circle, rgba(249,115,22,0.06)_0%,transparent_70%) pointer-events-none rounded-full"></div>

      <form className="contact-form relative z-10" onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.3)] rounded-lg flex items-center justify-center text-[#f97316]">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-stone-50 leading-tight">
              Quick Booking Request
            </h3>
            <p className="text-xs text-[#f97316] font-medium tracking-wide uppercase">
              व्हाट्सएप पर सीधी बुकिंग (Book Instantly on WhatsApp)
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 mb-4 text-xs font-semibold bg-red-950/40 border border-red-500/40 text-red-400 rounded-lg">
            ⚠️ {error}
          </div>
        )}

        {success && (
          <div className="p-4 mb-5 text-sm font-semibold bg-green-950/40 border border-green-500/40 text-[#22c55e] rounded-lg flex items-start gap-2.5 shadow-[0_4px_20px_rgba(34,197,94,0.15)]">
            <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#22c55e] mt-0.5" />
            <div>
              <p className="font-bold">बुकिंग अनुरोध भेजा गया!</p>
              <p className="text-xs font-normal text-stone-300 mt-1">
                धन्यवाद! हम सीधे व्हाट्सएप पर आपके विवरण सबमिट कर रहे हैं। यदि व्हाट्सएप स्वचालित रूप से नहीं खुलता है, तो कृपया नीचे दिए गए नंबरों पर सीधे संपर्क करें।
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* NAME */}
          <div className="form-group mb-4">
            <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#f97316]" /> आपका नाम / Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="कौशिंद्र सिंह"
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] focus:ring-[3px] focus:ring-[rgba(249,115,22,0.1)] rounded-lg text-stone-100 placeholder-stone-600 outline-none transition-all duration-200"
              required
            />
          </div>

          {/* TELEPHONE */}
          <div className="form-group mb-4">
            <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
              <PhoneIcon className="w-3.5 h-3.5 text-[#f97316]" /> फ़ोन नंबर / Mobile Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="78953XXXXX"
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] focus:ring-[3px] focus:ring-[rgba(249,115,22,0.1)] rounded-lg text-stone-100 placeholder-stone-600 outline-none transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* SERVICE DROP-DOWN */}
          <div className="form-group mb-4">
            <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
              💡 Service Select करें *
            </label>
            <select
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1c1917] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] rounded-lg text-stone-100 outline-none transition-all duration-200"
              required
            >
              <option value="">— Service Select करें —</option>
              {SERVICES_DATA.map((service) => (
                <option key={service.id} value={service.id} className="bg-stone-900">
                  {service.title} ({service.titleHindi})
                </option>
              ))}
              <option value="other" className="bg-stone-900">
                अन्य काम (Other Work)
              </option>
            </select>
          </div>

          {/* DATE SELECTOR */}
          <div className="form-group mb-4">
            <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#f97316]" /> पसंदीदा तारीख / Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] rounded-lg text-stone-100 outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* TIME SLOTS */}
          <div className="form-group mb-4">
            <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#f97316]" /> उपयुक्त समय / Preferred Time
            </label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1c1917] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] rounded-lg text-stone-100 outline-none transition-all duration-200"
            >
              <option value="">— समय का स्लॉट चुनें —</option>
              <option value="Morning (9:00 AM - 12:00 PM)" className="bg-stone-900">सुबह (9:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 3:00 PM)" className="bg-stone-900">दोपहर (12:00 PM - 3:00 PM)</option>
              <option value="Evening (3:00 PM - 6:00 PM)" className="bg-stone-900">शाम (3:00 PM - 6:00 PM)</option>
              <option value="Night (6:00 PM - 9:00 PM)" className="bg-stone-900">रात (6:00 PM - 9:00 PM)</option>
            </select>
          </div>

          {/* OPERATING ADDRESS */}
          <div className="form-group mb-4">
            <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#f97316]" /> आपका पता / Your Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Gaur City, Noida Extension, Flat No..."
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] rounded-lg text-stone-100 placeholder-stone-600 outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* PROBLEM DESCRIPTION */}
        <div className="form-group mb-5">
          <label className="block text-xs font-bold text-stone-400 mb-1.5 uppercase letter-spacing-0.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#f97316]" /> Problem बताएं / State Your Issue
          </label>
          <textarea
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            placeholder="जैसे: AC कूलिंग नहीं कर रहा है, RO वाटर फ़िल्टर बदलना है..."
            rows={3}
            className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(249,115,22,0.15)] focus:border-[#f97316] focus:bg-[rgba(249,115,22,0.03)] rounded-lg text-stone-100 placeholder-stone-600 outline-none resize-none transition-all duration-200"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white text-base font-bold rounded-lg flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4)] border-0 cursor-pointer transition-all duration-300 ${
            isLoading ? "opacity-75 pointer-events-none" : ""
          }`}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              बुकिंग भेजी जा रही है...
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            </span>
          ) : (
            <>
              <Send className="w-4.5 h-4.5" /> Book Now & WhatsApp पर शेयर करें
            </>
          )}
        </button>
      </form>
    </div>
  );
}
