import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Sparkles, Bot, Phone, Clock, MessageCircle } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { OWNER_INFO, SERVICES_DATA } from "../data";

// Extract API Key from environment
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

// Initialize the Gemini AI SDK client
let ai: any = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

interface Message {
  sender: "ai" | "user";
  text: string;
  timestamp: Date;
}

const systemInstruction = `
You are the official AI Assistant for "KS Electrical & AC Service", a premier home appliance repair and electrical services provider owned and run by senior technician Kaushindr Singh (कौशिंद्र सिंह).
Your goal is to answer visitor questions accurately, professionally, and warmly in a mix of Hindi, English, and Roman Urdu/Hinglish (depending on how the user writes).

Here is the verified business data you must use:
- Business Name: KS Electrical & AC Service
- Owner / Senior Tech: Kaushindr Singh (Senior electrical & home appliance expert with 5+ years experience)
- Contact Phones: ${OWNER_INFO.phone1} (Primary/WhatsApp) and ${OWNER_INFO.phone2} (Secondary)
- Email: ${OWNER_INFO.email}
- Main Address: ${OWNER_INFO.address}
- Service Locations: ${OWNER_INFO.serviceArea} and nearby areas.
- Working Hours: 8:00 AM to 9:00 PM (Monday to Sunday, active all 7 days)
- Repair Warranty: 30 days warranty on all services and parts.
- Visiting/Diagnostic Charge: ₹199 to ₹299 (fully adjusted in the final repair bill if the service is done).

Appliance Service Pricing:
1. AC Service: Jet/Foam Cleaning from ₹349, Installation from ₹999, Gas Leakage Fix & Refill from ₹1499, Diagnostic check from ₹199.
2. Refrigerator (Fridge) Service: Relay/Thermostat from ₹349, Gas Charging from ₹899, Gasket sealing from ₹599, Inspection from ₹249.
3. Washing Machine: Inlet Valve from ₹449, Drain pump from ₹549, Bearing/Gearbox from ₹999, Visit fee starts from ₹299.
4. RO Water Purifier: Filter Kit Replacement from ₹899, Booster Pump from ₹1199, TDS Balancing from ₹199, Service from ₹299.
5. Geyser: Copper Heating Element from ₹649, Thermostat from ₹299, Safety Valve from ₹249, Installation from ₹399, Service from ₹349.
6. Electrical Work: MCB wiring, switchboard fix, short circuit diagnostic, custom underground conduits.
7. Fan Repair: Capacitor change from ₹199, motor rewinding/bearing repair.
8. Others: Room Heater, Mixer Grinder, Chimney deep cleaning (from ₹699), Induction Cooker, Microwave Magnetron repair (from ₹999), Electric Stove, Drilling & Hanging.

Response Rules:
1. Be polite, friendly, and professional. Use emojis like ⚡, ❄️, 🛠️, 📞, 🙏 when appropriate.
2. If the user asks for pricing, give them the starting rates and explain that the final quote will be given on-site after diagnostic checking.
3. If they ask about booking or scheduling, tell them they can fill out the Booking Form on our website, or contact Kaushindr Singh directly via WhatsApp or call at ${OWNER_INFO.phone1}.
4. Keep answers brief (max 3-4 lines per message) so it's easy to read in a chat window. Use bullet points for lists.
5. Do not answer questions unrelated to KS Electrical, appliance repair, or electrical issues. Politely steer them back: "I can only help you with appliance repairs and electrical services. How can I assist you with your AC, RO, Fridge, or wiring today?"
`;

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "नमस्ते! 🙏 मैं KS Electrical & AC Service का AI असिस्टेंट हूँ। मैं आपकी कैसे मदद कर सकता हूँ? आप मुझसे किसी भी उपकरण की रिपेयर प्राइस या सर्विस के बारे में पूछ सकते हैं।",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Initialize chat session on first use
  const getChatSession = () => {
    if (chatSessionRef.current) return chatSessionRef.current;
    if (!ai) return null;

    try {
      chatSessionRef.current = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
          systemInstruction: systemInstruction,
        },
      });
      return chatSessionRef.current;
    } catch (err) {
      console.error("Failed to create chat session:", err);
      return null;
    }
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // If API Key is missing, show warning
    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "⚠️ क्षमा करें, AI असिस्टेंट अभी कॉन्फ़िगर नहीं है (API Key is missing). कृपया हमारी सेवाओं के लिए सीधे कॉल या व्हाट्सएप करें: " + OWNER_INFO.phone1,
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const chatSession = getChatSession();
      if (!chatSession) {
        throw new Error("Chat session not initialized");
      }

      const result = await chatSession.sendMessage({ message: textToSend });
      const aiReply = result.text || "क्षमा करें, मुझे समझ नहीं आया।";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ नेटवर्क एरर या तकनीकी समस्या के कारण मैं उत्तर नहीं दे पा रहा हूँ। कृपया सीधे कौशिंद्र सिंह जी से संपर्क करें: " + OWNER_INFO.phone1,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "AC रिपेयर का क्या चार्ज है? ❄️",
    "क्या आप Gaur City में सर्विस देते हैं? 📍",
    "RO फ़िल्टर चेंज का खर्च? 💧",
    "Washing Machine ड्रम में आवाज़ है? 🌀",
  ];

  return (
    <>
      {/* FLOATING ACTION TRIGGER BUTTON */}
      {!isOpen && (
        <div className="fixed bottom-[170px] right-6 z-40 flex items-center gap-2.5 group">
          {/* Label Tooltip - Hidden on small mobile to avoid layout crowding, visible on larger screens */}
          <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-stone-900/95 border border-[rgba(249,115,22,0.35)] text-[#f97316] text-xs font-heading font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] select-none pointer-events-none transform origin-right transition-all duration-300 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] animate-pulse fill-[#fbbf24]" /> Ask AI Assistant
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] hover:from-[#fbbf24] hover:to-[#f97316] text-white rounded-full flex items-center justify-center text-lg shadow-[0_8px_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 border-0 cursor-pointer relative"
            title="AI Assistant (सहायता लें)"
          >
            <Bot className="w-6 h-6 text-white stroke-[2.5]" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[9px] font-extrabold text-white px-1.5 py-0.5 rounded-full animate-bounce">
              AI
            </span>
            <span className="float-pulse"></span>
          </button>
        </div>
      )}

      {/* CHAT WINDOW INTERACTIVE PANEL */}
      {isOpen && (
        <div className="fixed bottom-[90px] right-6 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-140px)] bg-stone-900/95 border border-[rgba(249,115,22,0.25)] rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] overflow-hidden z-50 flex flex-col backdrop-blur-md animate-[fadeIn_0.25s_ease-out] select-none">
          
          {/* HEADER */}
          <div className="p-4 bg-gradient-to-r from-stone-900 to-stone-950 border-b border-stone-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-stone-100 flex items-center gap-1.5 leading-none">
                  KS AI Assistant
                  <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                </h4>
                <p className="text-[10px] text-stone-400 mt-1 select-none font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#f97316]" /> Instant Help 24x7
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-stone-950/40 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors border-0 cursor-pointer outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* MESSAGES LIST AREA */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-stone-950/30 custom-scrollbar">
            {messages.map((msg, index) => {
              const isAi = msg.sender === "ai";
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 items-end ${
                    isAi ? "justify-start" : "justify-end"
                  } animate-[fadeIn_0.2s_ease-out]`}
                >
                  {isAi && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.3)] mb-0.5">
                      <Bot className="w-4.5 h-4.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[80%] shadow-sm ${
                      isAi
                        ? "bg-stone-900/90 border border-stone-850 text-stone-250 rounded-tl-none"
                        : "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-tr-none"
                    }`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}
            
            {/* TYPING LOADER */}
            {isLoading && (
              <div className="flex gap-2.5 items-end justify-start animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white flex-shrink-0 shadow-[0_2px_8px_rgba(249,115,22,0.3)] mb-0.5">
                  <Bot className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="bg-stone-900/90 border border-stone-850 p-3.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-[#f97316] rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* QUICK SUGGESTION PILLS */}
          <div className="px-4 py-2.5 bg-stone-900/40 border-t border-stone-850/60 flex flex-wrap gap-1.5">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-full bg-stone-950/60 hover:bg-[rgba(249,115,22,0.1)] text-stone-400 hover:text-[#f97316] border border-stone-850 hover:border-[#f97316]/40 transition-all cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* INPUT FORM BLOCK */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-stone-900 border-t border-stone-850 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="सर्च या सवाल लिखें (उदा: AC Gas charging rates...)"
              className="flex-1 px-4 py-2.5 bg-stone-950/60 border border-stone-800 focus:border-[#f97316] rounded-xl text-stone-100 text-xs sm:text-sm outline-none transition-all placeholder-stone-600 font-medium"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all border-0 cursor-pointer"
            >
              <Send className="w-4.5 h-4.5 text-white" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
