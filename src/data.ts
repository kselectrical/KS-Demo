import { ServiceDetail } from "./types";

export const OWNER_INFO = {
  name: "कौशिंद्र सिंह",
  englishName: "Kaushindr Singh",
  phone1: "7895321472",
  phone2: "9625724903",
  email: "kselectrical004@gmail.com",
  address: "Gaur City 1 Rd, Gaur City 1, Sector 4, Greater Noida, Uttar Pradesh 201318",
  serviceArea: "Gaur City 1, Gaur City 2, Noida Extension, Ghaziabad, Greater Noida & nearby areas",
  gmbLink: "https://share.google/SbXTvRmlznSTs5Vib",
  reviewLink: "https://reviewthis.biz/b4d5f51f",
  websiteUrl: "https://www.kselectrical.in",
};

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  titleHindi: string;
  image: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  { id: "g1", category: "ac", title: "AC Foam Jet Service", titleHindi: "एसी जेट सर्विस", image: "/kselectrical1/images/gallery_ac_1.png" },
  { id: "g2", category: "ac", title: "AC Gas Leakage Fix", titleHindi: "एसी गैस रिपेयर", image: "/kselectrical1/images/gallery_ac_2.png" },
  { id: "g3", category: "wm", title: "Washing Machine Drum Alignment", titleHindi: "वॉशिंग मशीन ड्रम संरेखण", image: "/kselectrical1/images/gallery_washing_1.png" },
  { id: "g4", category: "fridge", title: "Double Door Refrigerator Repair", titleHindi: "रेफ्रिजरेटर कूलिंग जांच", image: "/kselectrical1/images/gallery_fridge_1.png" },
  { id: "g5", category: "elec", title: "House Underground Conduiting", titleHindi: "कंसील्ड पाइप फिटिंग", image: "/kselectrical1/images/gallery_wiring_1.png" },
  { id: "g6", category: "elec", title: "MCB & Distribution Box Wiring", titleHindi: "एमसीबी बॉक्स वायरिंग", image: "/kselectrical1/images/gallery_wiring_2.png" },
  { id: "g7", category: "ro", title: "RO Complete Filter Kit Replacement", titleHindi: "आरओ सर्विसिंग एवं टीडीएस सेट", image: "/kselectrical1/images/gallery_ro_1.png" },
  { id: "g8", category: "geyser", title: "Geyser Heating Element replacement", titleHindi: "गीजर हीटिंग एलिमेंट बदलना", image: "/kselectrical1/images/gallery_geyser_1.png" },
  { id: "g9", category: "drill", title: "Heavy Wall Drilling Photo Frame Hanging", titleHindi: "वॉल ड्रिलिंग और फ्रेम टांगना", image: "/kselectrical1/images/gallery_drill_1.png" },
  { id: "g10", category: "cooler", title: "Air Cooler Water Pump Repair & Grass change", titleHindi: "कूलर पंप व हनीकॉम्ब पैड्स सेट", image: "/kselectrical1/images/gallery_cooler_1.png" },
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "ac",
    title: "AC Repair & Service",
    titleHindi: "एसी सर्विस और रिपेयर",
    image: "/kselectrical1/images/ac_service.png",
    bannerImage: "/kselectrical1/images/ac_service.png",
    icon: "Wind",
    shortDesc: "Split AC, Window AC, Cassette AC — Gas Filling, Cooling Problem, PCB Repair, Installation, Deep Cleaning",
    longDesc: "हम Gaur City, Noida Extension, Ghaziabad और आस-पास के क्षेत्रों में सभी प्रकार के AC (Split & Window) के लिए बेहतरीन और प्रोफेशनल रिपेयर एवं सर्विसिंग प्रदान करते हैं। चाहे एयर कंडीशनर ठंडा न कर रहा हो, गैस लीक हो, या पीसीबी (PCB) में समस्या हो, हमारे अनुभवी मैकेनिक आपके घर आकर इसे तुरंत ठीक करेंगे।",
    features: [
      "AC Gas Refilling (गैस फिलिंग - R22, R32, R410, R290)",
      "Cooling Problem Diagnosis (कूलिंग न होने का समाधान)",
      "AC Jet / Foam Deep Cleaning (एसी की जेट सर्विसिंग) (Starting ₹349)",
      "New AC Installation & Uninstallation (नया एसी लगाना/निकालना)",
      "PCB Repairing & Electrical Checks (एसी सर्किट बोर्ड मरम्मत)",
      "Water Leakage Blockage Solution (इनडोर यूनिट से पानी टपकने का इलाज)"
    ],
    pricing: [
      { item: "AC Jet Service & Cleaning (Split / Window)", price: "Starts from ₹349", time: "45 Mins" },
      { item: "Split / Window AC Installation", price: "Starts from ₹999", time: "1 Hour" },
      { item: "AC Gas Leakage Repair & Complete Refill", price: "Starts from ₹1499", time: "1 - 1.5 Hours" },
      { item: "AC PCB Circuit Board Repairing", price: "Starts from ₹699", time: "1 Hour" },
      { item: "General Cooling Checkup & Diagnostic", price: "Starts from ₹199", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "AC is running but not cooling (एसी चल रहा है पर ठंडी हवा नहीं दे रहा)",
        solution: "This is usually caused by low refrigerant gas (leakage) or heavily clogged filters. Our jet-washing clears blocked fins, and gas levels will be refilled.",
        solutionHindi: "यह आमतौर पर गैस की कमी या फिल्टर जाम होने से होता है। हमारे जेट-सर्विस से ब्लॉक फिन्स साफ हो जाते हैं और जरूरत होने पर गैस रीफिल की जाती है।"
      },
      {
        problem: "Water dripping inside the room (कमरे के अंदर एसी से पानी टपक रहा है)",
        solution: "A blocked drain pipe or dirt buildup in the internal tray forces water to overflow inside. We clean and flush the drain pipes properly.",
        solutionHindi: "पाइप जाम होने या ट्रे में गंदगी जमने से पानी बाहर बहने लगता है। हम ड्रेन पाइप को अच्छी तरह साफ कर चेक करते हैं।"
      }
    ],
    faqs: [
      {
        q: "हाफ गैस चार्ज और फुल गैस चार्ज में क्या अंतर है?",
        a: "अगर गैस थोड़ी कम है तो टॉप-अप किया जाता है। लेकिन अगर पूरी गैस निकल चुकी है, तो पहले लीक का पता लगाकर उसे ब्रेज़िंग द्वारा बंद किया जाता है और फिर पूरी तरह से नई गैस भरी जाती है।"
      }
    ]
  },
  {
    id: "fridge",
    title: "Refrigerator (Fridge) Service",
    titleHindi: "रेफ्रिजरेटर (फ्रिज) सेवाएँ",
    image: "/kselectrical1/images/refrigerator_service.png",
    bannerImage: "/kselectrical1/images/refrigerator_service.png",
    icon: "Snowflake",
    shortDesc: "Double Door, Single Door, Side-by-Side — Gas Charging, Cooling Problem, Relay / Thermostat Replacement",
    longDesc: "हम आपके घर पर ही सभी प्रकार के सिंगल डोर और डबल डोर रेफ्रिजरेटर (फ्रिज) के लिए तेज और विश्वसनीय मरम्मत सेवा प्रदान करते हैं। गैस चार्जिंग (R134a, R600a), कंप्रेसर रिप्लेसमेंट, ओवरलोड रिले और डोर गैस्केट बदलने की सेवा उचित दरों पर उपलब्ध है।",
    features: [
      "Compressor Testing & Spare Replacements (कंप्रेसर और रिले मरम्मत)",
      "Fridge Gas Refilling (गैस चार्जिंग - R134a / R600a)",
      "Thermostat, Defrost Timer & Sensor Fix (थर्मोस्टेट व डिफ्रॉस्ट हीटर)",
      "Ice Maker & Water Dispenser Repairs (आइस मेकर मरम्मत)",
      "Magnetic Door Gasket (Rubber) Change (डोर रबर बदलना)",
      "Fridge Cleaning & General Diagnostics (विस्तृत सर्विसिंग)"
    ],
    pricing: [
      { item: "General Refrigerator Inspection & Diagnostics", price: "Starts from ₹249", time: "30 Mins" },
      { item: "Fridge Overload Relay / Thermostat Change", price: "Starts from ₹349", time: "30 Mins" },
      { item: "Fridge Gas Charging & Leak Prevention", price: "Starts from ₹899", time: "1 Hour" },
      { item: "Defrost Heater / Fan Motor Change", price: "Starts from ₹499", time: "45 Mins" },
      { item: "Double Door Gasket Fitting & Seal", price: "Starts from ₹599", time: "45 Mins" }
    ],
    problems: [
      {
        problem: "Fridge not cooling or ice melting (फ्रिज ठंडा नहीं कर रहा है या बर्फ पिघल रही है)",
        solution: "This usually happens due to a broken starter relay, worn thermostat, or leaked refrigerant gas. We inspect the compressor circuit and replace faulty relays on-the-spot.",
        solutionHindi: "यह अक्सर थर्मल रिले खराब होने या गैस लीक होने से होता है। हम लाइन प्रेशर जांचकर नया रिले फिट कर देते हैं।"
      }
    ],
    faqs: [
      {
        q: "क्या गैस चार्जिंग के बाद कूलिंग गारंटी मिलती है?",
        a: "जी हाँ, गैस रिफिल करने के उपरांत लीकेज को अच्छी तरह ठीक करने और सुरक्षित कूलिंग पर हम पूरा 30 दिनों का वारंटी सपोर्ट देते हैं।"
      }
    ]
  },
  {
    id: "wm",
    title: "Washing Machine Repair",
    titleHindi: "वॉशिंग मशीन सेवाएँ",
    image: "/kselectrical1/images/washing_machine_service.png",
    bannerImage: "/kselectrical1/images/washing_machine_service.png",
    icon: "RefreshCw",
    shortDesc: "Semi-Automatic, Fully Automatic, Top Load, Front Load — Drum Bearings, Gearbox, Inlet/Drain Valves, PCB",
    longDesc: "वॉशिंग मशीन में स्पिन न होना, ड्रम का न घूमना, पानी लीक होना या ड्रेन न होना दैनिक कार्य में रुकावट पैदा करता है। हम आपके द्वार पर वास्तविक स्पेयर पार्ट्स और उच्च सटीकता के साथ सेमी और फुल्ली ऑटोमैटिक रिपेयर करते हैं।",
    features: [
      "Washing Machine Drum & Bearings fixes (ड्रम और बियरिंग रिपेयर)",
      "Inlet Water Valve & Solenoid Control (पानी न भरने की समस्या)",
      "Drain Blockage & Pump Replacements (गंदा पानी अटकने की समस्या)",
      "Drive Belt & Custom Gearbox Replacements (बेल्ट और गियरबॉक्स परिवर्तन)",
      "Washing Machine Motherboard / PCB Repair (पीसीबी नियंत्रण बोर्ड ठीक करना)",
      "Severe Vibrations & Suspension Rod Tuning (अत्यधिक आवाज और कंपन ठीक करना)"
    ],
    pricing: [
      { item: "Washing Machine General Diagnosis & Visit", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Inlet Solenoid Water Valve Change", price: "Starts from ₹449", time: "45 Mins" },
      { item: "Drain Motor / Pump Replacement", price: "Starts from ₹549", time: "1 Hour" },
      { item: "Heavy Drum Bearing / Gearbox Repair", price: "Starts from ₹999", time: "2 Hours" },
      { item: "Motherboard (PCB) Component Refurbishing", price: "Starts from ₹799", time: "1.5 Hours" }
    ],
    problems: [
      {
        problem: "Washing machine won't spin or rotate (कपड़े सूखाने वाला ड्रायर नहीं घूम रहा)",
        solution: "This could be a snapped drive belt, worn-out motor capacitor, lid switch failure, or a jammed spin motor. We replace standard capacitor belts or switches as needed.",
        solutionHindi: "यह बेल्ट टूटने, कैपेसिटर खराब होने या डोर स्विच ख़राब होने से होता है। हम नया कपलिंग बेल्ट फिट कर इसे चालू करते हैं।"
      }
    ],
    faqs: [
      {
        q: "क्या फ्रंट लोड और टॉप लोड दोनों की मरम्मत होती है?",
        a: "हाँ, हमारे पास LG, Samsung, Whirlpool, IFB और अन्य सभी ब्रांडों के टॉप लोड और फ्रंट लोड मशीनों की रिपेयरिंग का संपूर्ण टूल्स व पार्ट्स मौजूद रहता है।"
      }
    ]
  },
  {
    id: "ro",
    title: "RO Water Purifier",
    titleHindi: "आरओ वॉटर प्यूरीफायर सेवाएँ",
    image: "/kselectrical1/images/ro_service.png",
    bannerImage: "/kselectrical1/images/ro_service.png",
    icon: "Droplets",
    shortDesc: "Kent, Aquaguard, Pureit, Livpure, HUL — Membrane change, Filter replacement (Pre-filter, Sediment, Carbon), Booster Pump",
    longDesc: "साफ और शुद्ध पानी आपके स्वास्थ्य के लिए सब कुछ है। हम सभी प्रसिद्ध ब्रांडों के आरओ वाटर प्यूरीफायर की रासायनिक धुलाई, प्री-फिल्टर बदलाव, सेडीमेंट और कार्बन फिल्टर रीप्लेसमेंट, बूस्टर पंप मरम्मत एवं टीडीएस एड्जस्टमेंट सर्वश्रेष्ठ तरीके से करते हैं।",
    features: [
      "RO Filter Kit Refurbishing (प्री-फिल्टर, सेडीमेंट, कार्बन सेट)",
      "Durable RO Membrane Lifetime Change (आरओ मुख्य मेम्ब्रेन बदलना)",
      "SMPS Power Supply Replacement (लाइट न आने की समस्या)",
      "Water Leakage & Auto Shut-Off SV Repairs (पानी टपकने व लीकेज का इलाज)",
      "TDS Level Adjustment & Free TDS Check (टीडीएस स्तर संतुलन)",
      "High-Pressure Booster Pump Repair (बूस्टर क्रैंक पंप परिवर्तन)"
    ],
    pricing: [
      { item: "RO Comprehensive Alkaline General Service", price: "Starts from ₹299", time: "30 Mins" },
      { item: "RO Full Filtration Filters Change Kit", price: "Starts from ₹899", time: "1 Hour" },
      { item: "SMPS Adapter Power Supply Replacement", price: "Starts from ₹399", time: "30 Mins" },
      { item: "High-Pressure RO Booster Pump Change", price: "Starts from ₹1199", time: "1 Hour" },
      { item: "TDS Balancing & Chemistry Water Analysis", price: "Starts from ₹199", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "RO turns on but water flow is extremely slow (आरओ ऑन है पर शुद्ध पानी बहुत कम आ रहा है)",
        solution: "Usually means the Sediment or Pre-filter is heavily choked with clay or scale, blocking the water flow. We flush or replace the pre-sediment layers.",
        solutionHindi: "यह धूल-मिट्टी के कारण प्री-फिल्टर जाम होने से होता है। हम नया फिल्टर फिट कर जल प्रवाह सुचारू करते हैं।"
      }
    ],
    faqs: [
      {
        q: "फिल्टर कब बदलने चाहिए?",
        a: "सामान्य पानी की खपत के अनुसार प्री-फिल्टर 6-8 महीने में और आंतरिक मुख्य फिल्टर किट 1 साल में बदल लेना चाहिए ताकि आरओ मेम्ब्रेन लम्बे समय तक सुरक्षित रहे।"
      }
    ]
  },
  {
    id: "geyser",
    title: "Geyser (Water Heater)",
    titleHindi: "गीजर (वॉटर हीटर) सेवाएँ",
    image: "/kselectrical1/images/geyser_service.png",
    bannerImage: "/kselectrical1/images/geyser_service.png",
    icon: "Flame",
    shortDesc: "Electric Geyser, Gas Geyser, Instant Geyser — Copper Element, Thermostat Change, Pressure Valves, Scaling clean",
    longDesc: "सर्दियों में गीजर की खराबी या करंट मारना एक बड़ा खतरा साबित हो सकता है। हम आपके गैस या इलेक्ट्रिक गीजर के स्केलिंग को हटाकर, हीटिंग एलिमेंट बदलकर और सेफ्टी प्रेशर वाल्व फिट करके उसे पूरी तरह से सुरक्षित तथा कुशल बनाते हैं।",
    features: [
      "Copper/Glassline Heating Element change (हीटिंग क्वाइल एलिमेंट बदलना)",
      "Safety Valve & Inlet Connection Pipes (सेफ्टी वाल्व और इनपुट पाइप बदलना)",
      "High-Sensitivity Thermostat Fitting (थर्मोस्टेट व कटआउट सेफ्टी स्विच)",
      "Gas Geyser Sensors & Ignition Repair (गैस गीजर ऑटो इंडिकेटर)",
      "Geyser Tank Scaling Removal (गीजर के अंदर जमी खारे पानी की परत हटाना)",
      "Short Circuit Checks & Earthing Protection (करंट लगने की समस्या ठीक करना)"
    ],
    pricing: [
      { item: "Geyser Service & Mechanical Scaling Clean", price: "Starts from ₹349", time: "45 Mins" },
      { item: "Geyser Thermostat Replacement for Safety", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Heavy Duty Isi Copper Heating Element", price: "Starts from ₹649", time: "45 Mins" },
      { item: "Safety Non-Return Pressure Valve Setup", price: "Starts from ₹249", time: "30 Mins" },
      { item: "New Geyser Installation & Hanging Work", price: "Starts from ₹399", time: "45 Mins" }
    ],
    problems: [
      {
        problem: "Geyser is on but water is not heating (गीजर ऑन है पर पानी गर्म नहीं हो रहा)",
        solution: "A burnt heating element or tripped safety cutout thermostat is the primary cause. We replace the burnt coil with an ISI-certified shockproof heating element.",
        solutionHindi: "यह मुख्य हीटिंगelement के खराब होने से होता है। हम सेफ्टी रिले चेक कर ब्रांडेड तांबे का नया एलिमेंट डाल देते हैं।"
      }
    ],
    faqs: [
      {
        q: "गीजर से हल्का करंट क्यों महसूस होता है?",
        a: "जब हीटिंग एलिमेंट काफी पुराना होकर फट जाता है, तो लाइव बिजली सीधे पानी के संपर्क में आ जाती है। यह बेहद खतरनाक है। तुरंत गीजर बंद करें और हमें बुलाएं।"
      }
    ]
  },
  {
    id: "heater",
    title: "Room Heater / Blower",
    titleHindi: "रूम हीटर / ब्लोअर सेवाएँ",
    image: "/kselectrical1/images/room_heater_service.png",
    bannerImage: "/kselectrical1/images/room_heater_service.png",
    icon: "ThermometerSun",
    shortDesc: "Halogen Heater, Quartz Heater, Fan Blower, Oil-Filled Radiator (OFR) — Heating Coil, Fan Motor, Switch Repair",
    longDesc: "रूम हीटर या ब्लोअर का पंखा न चलना, गर्म हवा न देना या ब्लोअर स्विच की खराबी को दूर करने के लिए घर बैठे त्वरित समाधान प्राप्त करें। हम हैलोजन रॉड, हीटिंग और थर्मोस्टेट सेंसर की तत्काल मरम्मत करते हैं।",
    features: [
      "Quartz / Halogen Tubes Fitting (हैलोजन ट्यूब रॉड परिवर्तन)",
      "Blower Fan Motor & Blade Aligning (फैन ब्लोअर मोटर मरम्मत)",
      "Thermostat Overheat Protection Fix (ऑटो कट-ऑफ थर्मोस्टेट रिपेयर)",
      "Selector Switches & Wiring Repair (स्पीड कंट्रोल स्विच बदलना)",
      "Internal Cleaning & Power Cord Check (कॉर्ड और सेफ्टी ग्रिल ठीक करना)"
    ],
    pricing: [
      { item: "Room Heater General Inspection Fee", price: "Starts from ₹199", time: "30 Mins" },
      { item: "Halogen Tube / Heizstab rod Replacement", price: "Starts from ₹249", time: "30 Mins" },
      { item: "Blower Bimetal Thermostat Change", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Fan Blower Motor Rewinding / Change", price: "Starts from ₹399", time: "45 Mins" },
      { item: "Main Switch Control Replacement", price: "Starts from ₹199", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "Heater turns on but fan doesn't blow (हीटर ऑन है पर ब्लोअर का पंखा नहीं घूम रहा)",
        solution: "This occurs due to a jammed rotor or a burned fan winding. We clean scale particles or rewire the micro fan safely.",
        solutionHindi: "यह अक्सर ब्लोअर फैन मोटर जाम होने या क्वाइल फटने से होता है। हम मोटर वाइंडिंग या शाफ्ट को साफ तथा रिपेयर करते हैं।"
      }
    ],
    faqs: [
      {
        q: "क्या हैलोजन और तेल से भरने वाले (OFR) हीटर की रिपेयर संभव है?",
        a: "हाँ, हम सभी प्रकार के साधारण क्वार्ट्ज हीटर, फैन ब्लोअर और बड़े बहु-स्तरीय ऑयल-फिल्ड रेडिएटर की मरम्मत करते हैं।"
      }
    ]
  },
  {
    id: "mixer",
    title: "Mixer Grinder & Juicer",
    titleHindi: "मिक्सर ग्राइंडर / जूसर / ब्लेंडर",
    image: "/kselectrical1/images/mixer_grinder_service.png",
    bannerImage: "/kselectrical1/images/mixer_grinder_service.png",
    icon: "Compass",
    shortDesc: "Coupling, Motor Bush, Carbon Brushes, Speed Controller Switch, Blade Replacement & Solder Repair",
    longDesc: "किचन में उपयोग होने वाले मिक्सर ग्राइंडर, जूसर या फूड प्रोसेसर का मोटर जाम होना, ब्लेड का काम न करना या कप्लिंग का टूटना बहुत आम है। उचित मूल्य पर ओरिजिनल कार्बन ब्रश और मोटर बुश बदलवाएं।",
    features: [
      "Motor Bush & Sharding Replacements (स्पीड बुशिंग और कंपन ठीक करना)",
      "Coupler & Socket Bottom Change (टूटी हुई कप्लिंग प्लास्टिक बदलना)",
      "Carbon Brush Renewal & Soldering (भारी जंग युक्त कार्बन चेंज)",
      "Overload Protector Switch Fit (नीचे का ट्रिप स्विच रीसेट/बदलना)",
      "High Sharp Blade Repairing (ब्लेड पैना करना या बदलना)",
      "Speed Rotary Regulator Fitting (स्पीड स्विच रेगुलेटर फिटिंग)"
    ],
    pricing: [
      { item: "Mixer Grinder Socket / Coupler Change", price: "Starts from ₹149", time: "20 Mins" },
      { item: "Carbon Brush Replacement (Pair)", price: "Starts from ₹199", time: "25 Mins" },
      { item: "Mixer Motor Bush Changing & Grease", price: "Starts from ₹249", time: "30 Mins" },
      { item: "Rotary Speed Control Switch Change", price: "Starts from ₹199", time: "20 Mins" },
      { item: "Mixer Overload Switch Replacement", price: "Starts from ₹149", time: "15 Mins" }
    ],
    problems: [
      {
        problem: "Mixer motor produces sparks or burning smell (मोटर से चिंगारी निकलना या जलने की गंध आना)",
        solution: "Caused by worn-out carbon brushes or an overloaded stator winding. Replacing the carbon brush pair solves this immediately.",
        solutionHindi: "यह ब्रश घिस जाने या लोड बढ़ने से होता है। नए कार्बन ब्रश जोड़ी डालने से मिक्सर फिर से स्मूथ चलने लगता है।"
      }
    ],
    faqs: [
      {
        q: "मिक्सर के नीचे का छोटा लाल बटन क्यों ट्रिप होता है?",
        a: "लंबे समय तक कड़े मसालों को पीसने पर ओवरलोड की सुरक्षा में यह ट्रिप होकर बंद हो जाता है। इसे 2 मिनट बाद दबाकर रीसेट करें, यदि फिर भी न चले तो अंदर शॉर्टिंग हो सकती है।"
      }
    ]
  },
  {
    id: "cooler",
    title: "Cooler (Air Cooler)",
    titleHindi: "कूलर (एयर कूलर) सर्विस",
    image: "/kselectrical1/images/cooler_service.png",
    bannerImage: "/kselectrical1/images/cooler_service.png",
    icon: "Fan",
    shortDesc: "Desert Cooler, Tower Cooler, Personal Cooler — Submersible Water Pump, Motor Rewinding, Honeycomb Pads",
    longDesc: "गर्मियों में कूलर का ठंडा पानी न देना या मोटर का जाम होना एक बड़ी समस्या है। हमारा एक्सपर्ट टेक्नीशियन आपके कूलर का सबमर्सिबल वाटर पंप बदलने, मोटर रिपेयर/वाइंडिंग करने और हनीकॉम्ब/खस पैड्स फिट करने का कार्य घर पर ही पूरा करता है।",
    features: [
      "Submersible Cooler Water Pump Repair (नया हाई-प्रेशर पंप बदलना)",
      "Cooler Fan Motor Rewinding (फैन मोटर कॉपर वाइंडिंग)",
      "Honeycomb / Woodwool Grass Pad set (कूलिंग पैड्स खस घास बदलना)",
      "Water Tank Leakage Sealing (टैंक पानी लीकेज एमसील कोटिंग)",
      "Internal Electric Wire Protection (शॉर्ट सर्किट से सेफ्टी अर्थिंग)",
      "Cooler Swing Blade Motor Repair (हवा घुमाने वाली मोटर बदलना)"
    ],
    pricing: [
      { item: "Submersible Heavy Duty Water Pump Change", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Cooler Cleaning & General Prep-Up", price: "Starts from ₹199", time: "35 Mins" },
      { item: "Honeycomb cooling pads Fitting Work", price: "Starts from ₹399", time: "45 Mins" },
      { item: "Cooler Fan Motor Repair & Bush Adjust", price: "Starts from ₹499", time: "1 Hour" },
      { item: "Swing Louver Shutter Motor Replacement", price: "Starts from ₹249", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "Cooler is running but water isn't dripping on pads (हवा आ रही है पर पानी पंप नहीं हो रहा)",
        solution: "Usually indicates a locked submersible water pump impeller due to dry sediments or a dead pump coil. We replace it with an energy-efficient water pump.",
        solutionHindi: "यह मोटर पंप के खराब होने या पाइप ब्लॉक होने से होता है। हम नया कूलिंग हाई-लिफ्ट पंप लगाकर पानी शुरू करते हैं।"
      }
    ],
    faqs: [
      {
        q: "हमारे कूलर की बॉडी में हाथ लगाने पर करेंट मारता है, क्या करें?",
        a: "यह पंप या फैन मोटर की कटी हुई वायरिंग के लोहे की बॉडी से छूने के कारण होता है। कृपया तुरंत स्विच बंद कर प्लग निकालें और हमारे एक्सपर्ट को कॉल करें।"
      }
    ]
  },
  {
    id: "chimney",
    title: "Kitchen Chimney Repair",
    titleHindi: "चिमनी (किचन चिमनी) सेवा",
    image: "/kselectrical1/images/chimney_service.png",
    bannerImage: "/kselectrical1/images/chimney_service.png",
    icon: "Filter",
    shortDesc: "Chidney Deep Cleaning, Filter replacement, Suction Blower Repair, Custom Push Button / Touch Panel PCB Repair",
    longDesc: "रसोई की चिमनी में जमी तेल व कालिख (grease) के कारण सक्शन पॉवर का बिल्कुल कमजोर होना सबसे अधिक आम समस्या है। हम आपके चिमनी की डीप क्लीनिंग, ब्लोअर पंखा साफ करने और कंट्रोल सर्किट/टच पैनल को बिल्कुल दुरुस्त करते हैं।",
    features: [
      "Suction Fan Blower Deep Cleaning (पंखे से जमा तेल व कालिख हटाना)",
      "Baffle / Mesh Carbon Filter Clean-up (फ़िल्टर की केमिकल धुलाई)",
      "Push Button / Touch Screen PCB Replacement (कंट्रोल बटन रिपेयर)",
      "Exhaust Duct Pipe Re-fitting (धुंआ निकलने वाला डक्ट सुचारू करना)",
      "Chimney Motor Capacitor & Speed Fixes (मोटर स्पीड बढ़ाना)"
    ],
    pricing: [
      { item: "Kitchen Chimney Dry Checkup Diagnosis", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Chimney Deep Chemical Clean & Washing", price: "Starts from ₹699", time: "1.5 Hours" },
      { item: "Blower Motor Capacitor replacement", price: "Starts from ₹349", time: "45 Mins" },
      { item: "Touch Switch Panel PCB Repairing", price: "Starts from ₹599", time: "1 Hour" },
      { item: "Custom Duct Exhaust Pipe Fitting", price: "Starts from ₹399", time: "45 Mins" }
    ],
    problems: [
      {
        problem: "Chimney is making too much noise & poor suction (चिमनी तेज आवाज कर रही है और धुंआ नहीं खींच रही)",
        solution: "This is a result of greasy grease sticking to the blower blades creating an imbalance or clogs. De-greasing the core components eliminates noise and restores full suction power.",
        solutionHindi: "लगातार तेल जमने से चिमनी में ब्लॉकेज हो जाता है। हम इसके ब्लोअर की डीप-क्लीनिंग करके सुचारू खिंचाव सुनिश्चित करते हैं।"
      }
    ],
    faqs: [
      {
        q: "रसोई की चिमनी कितने दिनों में साफ़ होनी चाहिए?",
        a: "सब्जियों में तले छौंक के तेल के कारण डस्ट जमती है, अतः हर 4 से 6 महीने में चिमनी की सामान्य डीप क्लीनिंग बहुत जरूरी है।"
      }
    ]
  },
  {
    id: "induction",
    title: "Induction Cooker",
    titleHindi: "इंडक्शन कुकर रिपेयर",
    image: "/kselectrical1/images/induction_cooker_service.png",
    bannerImage: "/kselectrical1/images/induction_cooker_service.png",
    icon: "ToggleLeft",
    shortDesc: "E0, E1, E2, E3, E4... Errors — Heating Coil Fix, IGBT Sensor replace, Keypad Button Panel, Fuse Blown Fixes",
    longDesc: "इंडक्शन कुकर पर बर्तन न दिखाना, कीपैड के बटन काम न करना, गरम न होना या पावर ऑन न होने जैसी समस्याओं का झटपट समाधान प्राप्त करें। बजाज, प्रेस्टीज, पिजन, फिलिप्स आदि सभी ब्रांड्स के वास्तविक IGBT, कॉइल और रिपेयर।",
    features: [
      "Power Fuse & Bridge Rectifier repairs (शॉर्ट सर्किट फ्यूज बदलना)",
      "IGBT Fast-Switch Sensor replacement (हीटिंग का मेन सेंसर दुरुस्त करना)",
      "Keypad Controller Switch Replacements (बटन पैनल ठीक करना)",
      "Ceramic Induction Heating Coil Fixing (हीटिंग तांबा प्लेट मरम्मत)",
      "Exhaust DC Cooling Fan Maintenance (ओवरहीट बंद होने का निवारण)"
    ],
    pricing: [
      { item: "Induction Power Shortage fuse Repair", price: "Starts from ₹199", time: "25 Mins" },
      { item: "IGBT Transistor Core Replacement", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Key Board Button micro switches Change", price: "Starts from ₹199", time: "25 Mins" },
      { item: "Induction Ceramic Coil Repair & Thermal Sensor", price: "Starts from ₹349", time: "35 Mins" },
      { item: "Internal DC Brushless Cooling Fan", price: "Starts from ₹249", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "Induction shows E0 / E1 Error and doesn't heat (इंडक्शन स्क्रीन पर E0 / E1 दिखाता है और गर्म नहीं करता)",
        solution: "E0 usually means no metal pot detected or the internal sensing circuit has a failed resonance capacitor / IGBT. We test and change the damaged capacitors.",
        solutionHindi: "यह बर्तन सेंसिंग सर्किट के कैपेसिटर या आईजीबीटी ट्रांजिस्टर खराब होने से होता है। हम नया कंपोनेंट सोल्डर करके इसे बनाते हैं।"
      }
    ],
    faqs: [
      {
        q: "इंडक्शन ऑन करते ही घर की मेन लाइट ट्रिप (MCB Down) क्यों हो जाती है?",
        a: "यह इंडक्शन के आंतरिक मदरबोर्ड सर्किट में शॉर्ट सर्किट होने (IGBT फटने) के कारण होता है। ऐसे में प्लग न लगाएं और हमसे संपर्क करें।"
      }
    ]
  },
  {
    id: "microwave",
    title: "Microwave Oven",
    titleHindi: "माइक्रोवेव ओवन सेवाएँ",
    image: "/kselectrical1/images/microwave_service.png",
    bannerImage: "/kselectrical1/images/microwave_service.png",
    icon: "Tv",
    shortDesc: "Solo, Grill, Convection — Burnt Magnetron, Transformer, Turntable Motor, Tact Controller Glass, High-Voltage Fuse",
    longDesc: "माइक्रोवेव का घूमना बंद होना, बर्तन गर्म न करना, ऑन करते ही चिंगारी उठना या बटन काम न करना आदि समस्याओं की विशेषज्ञ रिपेयर उपलब्ध है। मैग्नेट्रॉन रिप्लेसमेंट और हाई वोल्टेज डायोड चेकिंग की त्वरित सुविधा।",
    features: [
      "Magnetron Burnt Core change (माइक्रोवेव मैग्नेट्रॉन रिप्लेसमेंट)",
      "Turntable Glass Tray Synchronous Motor (सलाद प्लेट न घूमने की मरम्मत)",
      "High Voltage Capacitor & Diode Repairs (हीटिंग न होने की समस्या)",
      "Door Interlock Micro Switches change (दरवाजा बंद न होने पर करंट सुरक्षा)",
      "Keypad Film Touch Screen Membrane panel (टास्क कंट्रोलर स्विच बोर्ड)"
    ],
    pricing: [
      { item: "Microwave Oven Diagnostic Check fee", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Glass Tray Synchronous Motor changing", price: "Starts from ₹399", time: "45 Mins" },
      { item: "Replacement of Burnt High Voltage Diode", price: "Starts from ₹349", time: "30 Mins" },
      { item: "Genuine ISI-Certified Microwave Magnetron", price: "Starts from ₹999", time: "1 Hour" },
      { item: "Replacement Door Safety Switch Set", price: "Starts from ₹299", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "Microwave is running but not heating food (ओवन चल रहा है पर खाना गर्म नहीं हो रहा)",
        solution: "A burnt magnetron or damaged high-voltage transformer/fuse is responsible. We safely test current flow with proper high-voltage safety tools and fit a genuine magnetron.",
        solutionHindi: "यह खाना गर्म करने वाली वैक्यूम ट्यूब (मैग्नेट्रॉन) जल जाने के कारण होता है। हम इसे सावधानी से नए मैग्नेट्रॉन से बदल देते हैं।"
      }
    ],
    faqs: [
      {
        q: "माइक्रोवेव के अंदर खाना गर्म करने पर चिंगारी (Sparks) क्यों उठती हैं?",
        a: "सामान्यतः अंदर की मिका शीट (Mica Waveguide Cover) पर भोजन की चिकनाई चिपकने या धातु का कोई बर्तन इस्तेमाल करने से चिंगारियां उठती हैं। मिका शीट बदलना तुरंत जरूरी है।"
      }
    ]
  },
  {
    id: "stove",
    title: "Electric Stove, Oven & Ovens",
    titleHindi: "इलेक्ट्रिक चूल्हा (ओवन / टोस्टर / कैतल)",
    image: "/kselectrical1/images/electric_stove_service.png",
    bannerImage: "/kselectrical1/images/electric_stove_service.png",
    icon: "Disc",
    shortDesc: "Hot Plate Stove, OTG, Toaster, Waffle Maker Repairs — Heating Element, Power Lead, Toggle Heat Select Switch",
    longDesc: "हॉट प्लेट चूल्हा, ओटीजी (OTG) ओवन या ब्रेड टोस्टर का काम न करना, तार जलना या रेगुलेटर खराब होने की तुरंत मरम्मत। हम हाई टीडीएस टेम्प्रेचर हीटिंग प्लेट्स और थर्मोस्टेट सेंसर ओरिजिनल पार्ट्स के साथ ठीक करते हैं।",
    features: [
      "Heating Stove Elements & Coil Fit (हीटिंग क्वाइल / प्लेट बदलना)",
      "Thermostat Overheat Sensor Repairs (हीटिंग रोकने वाला स्विच)",
      "Power Heat selector Rotary Switches (हीटिंग कम-ज्यादा करने वाला स्विच)",
      "Internal Heat Insulation Wiring renewal (गर्मी प्रतिरोधी सिलिकॉन तार बदलने का काम)",
      "Toaster Spring latch Lock Maintenance (ब्रेड ऊपर फेंकने वाला स्प्रिंग लॉक)"
    ],
    pricing: [
      { item: "Electric Otg Stove general Inspection", price: "Starts from ₹199", time: "30 Mins" },
      { item: "Oven Core Filament Element replacement", price: "Starts from ₹349", time: "45 Mins" },
      { item: "Rotary Temperature Selector Switch change", price: "Starts from ₹249", time: "30 Mins" },
      { item: "Toaster Heating Element wire repair", price: "Starts from ₹199", time: "30 Mins" },
      { item: "Silicone Heat Resistant Internal Wire Upgrade", price: "Starts from ₹149", time: "25 Mins" }
    ],
    problems: [
      {
        problem: "OTG oven heats from bottom only, not top (ओवन सिर्फ नीचे से गर्म होता है, ऊपर की कॉइल ठंडी है)",
        solution: "Usually means the top heating element is burned or the selector switch has a disconnected contact. We restore wiring paths or swap the heater switch.",
        solutionHindi: "यह ऊपरी एलिमेंट जलने या तापमान स्विच ख़राब होने से होता है। हम स्विच कनेक्शन या रोटर कॉइल बदलते हैं।"
      }
    ],
    faqs: [
      {
        q: "क्या टूटी हुई हीटिंग हॉट प्लेट चूल्हा बदली जा सकती है?",
        a: "हाँ, यदि आपके इलेक्ट्रिक हीटर की हॉट प्लेट में दरारें आ गई हैं, तो हम सुरक्षा कारणों से समान साइज की नई हॉट-प्लेट लगा देते हैं।"
      }
    ]
  },
  {
    id: "fan",
    title: "Fans (Ceiling, Table, Pedestal & Exhaust)",
    titleHindi: "पंके (सीलिंग, टेबल, पेडेस्टल, एग्जॉस्ट)",
    image: "/kselectrical1/images/fan_repair_service.png",
    bannerImage: "/kselectrical1/images/fan_repair_service.png",
    icon: "RotateCw",
    shortDesc: "Noisy Fan, Slow Speed, Capacitor change, Copper Wire Coil Rewinding, Shaft Bearing replace, Regulator switch",
    longDesc: "पंखा धीरे घूमना, घिस-घिस की तेज आवाज आना, मोटर जलना या रेगुलेटर काम न करने की तुरंत होम विजिट रिपेयर उपलब्ध है। हम सीलिंग फैन, वॉल फैन, पेडेस्टल (फराटा) और किचन की एग्जॉस्ट चिमनी का काम बहुत सफाई से करते हैं।",
    features: [
      "High-Efficiency Capacitor replacement (धीमी स्पीड के लिए नया कंडेंसर फिट करना)",
      "Shaft & Ball Bearings Replacement (शोर बंद कर सुचारू चाल सुनिश्चित करना)",
      "Stator Copper Wire Rewinding (जली हुई मोटर की कॉपर री-वाइंडिंग)",
      "Ceiling Fan Rod & Shackle installation (पंखे की रॉड और सुरक्षा कुंडा टांगना)",
      "Fan Speed Regulator Switches connection (दीवार का स्पीड रेगुलेटर फिटिंग)"
    ],
    pricing: [
      { item: "Simple Capacitor Replacement (with capacitor)", price: "Starts from ₹149", time: "15 Mins" },
      { item: "Fan Shaft Bushing / Double Bearings replacement", price: "Starts from ₹249", time: "30 Mins" },
      { item: "Ceiling Fan Hanging & Hook Fitting", price: "Starts from ₹149", time: "20 Mins" },
      { item: "Kitchen Exhaust Fan Motor replacement", price: "Starts from ₹349", time: "30 Mins" },
      { item: "Stator Rewinding with Pure Copper Wire", price: "Starts from ₹499", time: "1 Hour" }
    ],
    problems: [
      {
        problem: "Ceiling fan hums but doesn't rotate (पंखा धीमे हम की आवाज कर रहा है पर घूम नहीं रहा)",
        solution: "This is primarily due to a weak or completely dead capacitor, or jammed bearings. Swapping the 2.5/3.15 mfd capacitor will instantly resolve the starting torque issue.",
        solutionHindi: "यह कमजोर कैपेसिटर (कंडेंसर) या जाम बियरिंग्स के कारण होता है। नया कंडेंसर डालने से पंखा शुरू हो जाता है।"
      }
    ],
    faqs: [
      {
        q: "क्या तांबे (Copper) और एल्युमिनियम (Aluminium) की वाइंडिंग में क्या अंतर है?",
        a: "तांबे (Copper) की मोटर वाइंडिंग अधिक बिजली सहन करती है, गरम कम होती है और सालों-साल चलती है। हम केवल 100% तांबे के तार का उपयोग करते हैं।"
      }
    ]
  },
  {
    id: "kettle",
    title: "Electric Kettle & Flask",
    titleHindi: "इलेक्ट्रिक केतली / फ्लास्क",
    image: "/kselectrical1/images/electric_kettle_service.png",
    bannerImage: "/kselectrical1/images/electric_kettle_service.png",
    icon: "Flame",
    shortDesc: "Water Not Heating, Auto Cup switch, Bottom Contact Plate, Indicator lamp, Thermostat Element Replacement",
    longDesc: "इलेक्ट्रिक केतली में पानी गरम न होना, स्विच ऑन न रहना या नीचे की बेस प्लेट में करंट आना आम शिकायतें हैं। हम सभी बड़े ब्रांडों की इलेक्ट्रिक केतली और चाय/कॉफी मेकर्स की झटपट रिपेयरिंग सुनिश्चित करते हैं।",
    features: [
      "Bottom Ring Heating Plates checks (नीचे की मुख्य हीटिंग प्लेट बदलना)",
      "Auto Cutoff Thermostat Relay change (उबाल आने पर ऑटोमैटिक बंद होने की सुरक्षा)",
      "Lid & Upper Switch Contacts cleaning (ऊपरी ढक्कन के स्विच प्वाइंट ठीक करना)",
      "360-Degree Swivel Base Ring replace (नीचे का पावर कनेक्टर बेस)",
      "Overheat Fuse & Wire Connection Soldering (थर्मल कटआउट सुरक्षा फ्यूज)"
    ],
    pricing: [
      { item: "Electric Kettle Basic Diagnostics fee", price: "Starts from ₹149", time: "15 Mins" },
      { item: "Auto Cutoff Thermostat Bracket replacing", price: "Starts from ₹199", time: "25 Mins" },
      { item: "Base Contact Joint Power Ring Replacement", price: "Starts from ₹149", time: "20 Mins" },
      { item: "Lid Cover Handle Toggle Switch change", price: "Starts from ₹149", time: "15 Mins" },
      { item: "Internal Heating Ring Plate replacement", price: "Starts from ₹299", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "Water heats up but kettle doesn't turn off automatically (केतली में पानी उबलता रहता है, ऑटो-कट नहीं होता)",
        solution: "Usually means the bimetallic strip or the handle thermostat is broken, failing to detect steam. We install a high sensitive bimetallic switch.",
        solutionHindi: "यह भाप संवेदक धातु पत्ती ख़राब होने से होता है। नया हैंडल कटऑफ स्विच डालने से यह पानी उबलते ही स्वतः बंद होने लगती है।"
      }
    ],
    faqs: [
      {
        q: "केतली के अंदर जमी सफेद परत/स्केल को कैसे हटाए?",
        a: "खारे पानी के कारण नीचे केतली में कैल्शियम स्केल बन जाती है। सफेद सिरका या नींबू का रस पानी में मिलाकर उबालने से स्केल साफ हो जाती है।"
      }
    ]
  },
  {
    id: "vacuum",
    title: "Vacuum Cleaner",
    titleHindi: "वैक्यूम क्लीनर सेवा",
    image: "/kselectrical1/images/vacuum_cleaner_service.png",
    bannerImage: "/kselectrical1/images/vacuum_cleaner_service.png",
    icon: "Trash2",
    shortDesc: "Suction Motor Repair, Carbon brushes, On/Off cord re-wiring, Clogged filters cleaning, Roller brush replace",
    longDesc: "वैक्यूम क्लीनर का सक्शन काफी कमजोर हो जाना, चालू न होना या अजीब तेज आवाज करने की समस्या को मिनटों में हल करें। हाई-आरपीएम मोटर वाइंडिंग, स्विच मरम्मत, और नली/पाइप ब्लॉकेज हटाने की सुविधायें उपलब्ध हैं।",
    features: [
      "High RPM Suction Motor Rewinding (शक्तिशाली सक्शन मोटर वाइंडिंग)",
      "Carbon Brushes & Commutator cleaning (आर्मेचर कार्बन ब्रश बदलना)",
      "Dynamic Roller Brush Belt change (सुपर रोलर घूमना सुनिश्चित करना)",
      "Exhaust HEPA Micro Filter replacement (फ़िल्टर ब्लॉक साफ करना)",
      "Internal Cord Reel Socket fixes (सुरक्षित बिजली केबल फिटिंग)"
    ],
    pricing: [
      { item: "Vacuum Cleaner General Inspection fee", price: "Starts from ₹199", time: "30 Mins" },
      { item: "Carbon brush pair & armature Soldering", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Power Switch Cord replacement", price: "Starts from ₹199", time: "20 Mins" },
      { item: "Exhaust Filter replacements", price: "Starts from ₹249", time: "20 Mins" },
      { item: "High RPM Suction Motor deep Rewinding", price: "Starts from ₹599", time: "1.5 Hours" }
    ],
    problems: [
      {
        problem: "Vacuum starts but emits high screaming noise (मशीन ऑन है पर अत्यंत तेज सीटी जैसी आवाज आ रही है)",
        solution: "Usually indicates damaged high speed ball bearings or a piece of debris jammed inside the fan impeller. We disassemble and fit new lubricated bearings.",
        solutionHindi: "यह मोटर की बेयरिंग्स सूख जाने या टूट जाने के कारण होता है। हम साफ़ करके नई बॉल बीयरिंग बैठाते हैं।"
      }
    ],
    faqs: [
      {
        q: "सक्शन (Suction) अचानक कम क्यों हो जाता है?",
        a: "यह आमतौर पर डस्ट बैग पूरा भरने या आंतरिक फ़िल्टर चोक होने से होता है। इन्हें साफ करने से सक्शन पूर्ण गति से काम करने लगता है।"
      }
    ]
  },
  {
    id: "trimmer",
    title: "Electric Shaver & Trimmer",
    titleHindi: "इलेक्ट्रिक शेवर / ट्रिमर",
    image: "/kselectrical1/images/trimmer_service.png",
    bannerImage: "/kselectrical1/images/trimmer_service.png",
    icon: "Scissors",
    shortDesc: "Inoperative Trimmer, Rechargeable Li-Ion Battery replacement, Blade Resharpening, Circuit Charging Jack Fix",
    longDesc: "आपके महंगे नोवा, फिलिप्स, श्याओमी या प्रिमियम बॉडी ट्रिमर का चार्ज न होना, स्पीड कम होना या बियर्ड ट्रिमर का बाल खींचना? हम आपके ट्रिमर की रिचार्जेबल लिथियम बैटरी बदलने और ब्लेड धार ठीक करने की सेवा देते हैं।",
    features: [
      "High Capacity Rechargeable Battery (रिचार्जेबल लिथियम आयन सेल बदलना)",
      "Micro USB / Type C Charging Port board (चार्जिंग जैक फिट करना/सोलडर)",
      "Cutter Steel Blade align & Resharpening (ब्लेड अलाइन करना व धार लगाना)",
      "Power Slide Toggle Switch replacement (ऑन-ऑफ़ स्विच ठीक करना)",
      "High RPM Micro DC Shaft Motor repair (माइक्रो वाइब्रेशन मोटर बदलना)"
    ],
    pricing: [
      { item: "Shaver/Trimmer general Repair & Service", price: "Starts from ₹149", time: "20 Mins" },
      { item: "Li-Ion Rechargeable Battery Cell Change", price: "Starts from ₹199", time: "25 Mins" },
      { item: "Charging Socket Micro USB/Type C board", price: "Starts from ₹149", time: "20 Mins" },
      { item: "Micro DC Shaft Motor replacement", price: "Starts from ₹249", time: "30 Mins" },
      { item: "Micro Slider Switch Board Soldering", price: "Starts from ₹149", time: "15 Mins" }
    ],
    problems: [
      {
        problem: "Trimmer doesn't turn on unless plugged into charger (बिना चार्जर लगाए ट्रिमर बिल्कुल ऑन नहीं हो रहा)",
        solution: "Indicates a dry/damaged internal NiMH or Li-Ion battery cell that can no longer hold charge. We replace it with a new high-mAh safety rechargeable cell.",
        solutionHindi: "यह बैटरी डेड होने के कारण होता है। हम अंदर नया रिचार्जेबल लिथियम सेल डालकर सोल्डरिंग कर देते हैं।"
      }
    ],
    faqs: [
      {
        q: "ब्लेड बार-बार बाल क्यों खींचता है?",
        a: "ब्लेड में बाल फंसने, चिकनाई खत्म होने या ब्लेड के टेढ़े होने से यह बाल खींचता है। इसकी सर्विस कर ऑयल लगाना समाधान है।"
      }
    ]
  },
  {
    id: "elec",
    title: "Electrical Safety & Wiring",
    titleHindi: "इलेक्ट्रिक सेफ्टी और वायरिंग कार्य",
    image: "/kselectrical1/images/electrical_safety_service.png",
    bannerImage: "/kselectrical1/images/electrical_safety_service.png",
    icon: "Zap",
    shortDesc: "Underground Pipe Wiring, MCB / ELCB installation, switch / sockets, lighting fixtures, earthing & inverter",
    longDesc: "घर में शॉर्ट सर्किट की जांच हो, झूमर लगाना हो, नया डेकोरेटिव स्विचबोर्ड बदलना हो या पूरे मकान की अंडरग्राउंड पाइप वायरिंग करनी हो—हम सभी बिजली कार्य अत्यंत सावधानी और कुशल गुणवत्ता के साथ करते हैं।",
    features: [
      "House Rewiring & Concealed Pipe wiring (घरों की नई अंडरग्राउंड वायरिंग)",
      "MCB Tripping & Short Circuit Mapping (एमसीबी व फॉल्ट चेकिंग)",
      "Modern Switchboard Fitting & Modular Plate set (मॉडर्न स्विचबोर्ड लगाना)",
      "Chandelier, Profile Light & Ceiling Lights (फैंसी लाइटें व प्रोफाइल लाइट्स टांगना)",
      "Inverter Installation & Battery maintenance (इन्वर्टर और बैटरी चार्ज कनेक्शन)",
      "Home Earthing & Shock Protection Grounding (लीकेज करंट रोकने का काम - अर्थिंग)"
    ],
    pricing: [
      { item: "Single Switch or Socket Replacement (Per unit)", price: "Starts from ₹49", time: "15 Mins" },
      { item: "Ceiling Fan / Chandelier Hanging Installation", price: "Starts from ₹149", time: "30 Mins" },
      { item: "New MCB Indicator/Tripping Core swapping", price: "Starts from ₹199", time: "30 Mins" },
      { item: "Inverter setup and battery Acid water refill", price: "Starts from ₹299", time: "40 Mins" },
      { item: "Underground Loop Conduit Cable Pulling (Per point)", price: "Starts from ₹99", time: "45 Mins" }
    ],
    problems: [
      {
        problem: "Main MCB trips frequently at heavy load (जरा सा अधिक लोड पड़ने पर बार-बार एमसीबी नीचे गिर जाती है)",
        solution: "This represents an overloaded circuit breaker phase or a short circuit in heavy appliances. We separate phase lines onto individual modular MCBs.",
        solutionHindi: "यह ओवरलोड या लाइन में शॉर्ट होने से होता है। हम बिजली लोड बांटकर बिल्कुल सही एंपियर की एमसीबी लगा देते हैं।"
      }
    ],
    faqs: [
      {
        q: "क्या बड़े मकान के पूरे अंडरग्राउंड वायरिंग का ठेका लेते हैं?",
        a: "हाँ, हम कंसील्ड पाइप कटिंग, केबल खींचना, एमसीबी बोर्ड सजाने का पूरा काम मटीरियल या लेबर बेसिस पर जिम्मेदारी से करते हैं।"
      }
    ]
  },
  {
    id: "drill",
    title: "Drill Work, Wall Hanging & Fittings",
    titleHindi: "ड्रिल वर्क, वॉल हैंगिंग व फिटिंग्स",
    image: "/kselectrical1/images/drill_hanging_service.png",
    bannerImage: "/kselectrical1/images/drill_hanging_service.png",
    icon: "Hammer",
    shortDesc: "Pristine Heavy Walls/Tile Drilling — Photo Frames, Paintings, Clocks, TV Installation, Flower Pots, Mirror, Towel Rods",
    longDesc: "घर को सजाने के लिए मजबूत कंक्रीट दीवारों या नाजुक टाइल्स पर बिना दरार डाले हैवी ड्रिलिंग कार्य। फोटो फ्रेम, कलात्मक पेंटिंग, घड़ी, एलसीडी टीवी इंस्टालेशन, फ्लावर पॉट, दर्पण तथा अलमारी होल्डर की फिनिशिंग के साथ फिटिंग उपलब्ध है।",
    features: [
      "Dust-free Concrete Walls Drilling (बिना धूल साफ-सुधरा ड्रिल कार्य)",
      "Delicate Bathroom Tile Boring (टाइल टूटने के डर के बिना स्मूथ छिद्र)",
      "LED TV Mounting Installation (दीवार पर मजबूत टीवी स्टैंड सेट करना)",
      "Kitchen Shelf, Hook, Mirror & Towel Rail hanging (शीशा व हुक्स लगाना)",
      "Curtain Rods, Blinds & Curtain hanger setups (पर्दा फिटिंग और पाइप ब्रैकेट)",
      "Flower Pots & Decorative Hanging holders (गमले व डेकोरेटिव डेकोर लटकाना)"
    ],
    pricing: [
      { item: "Standard Wall Drilling (With high-grade Screw & Gitti)", price: "Starts from ₹99", time: "15 Mins" },
      { item: "Photo Frame / Painting / Clock Hanging up", price: "Starts from ₹149", time: "20 Mins" },
      { item: "Wall Mount LCD / LED TV Stand installation", price: "Starts from ₹399", time: "45 Mins" },
      { item: "Bathroom Towel Rail, Mirror or Cabinet setup", price: "Starts from ₹299", time: "30 Mins" },
      { item: "Curtain Rod Bracket & Pipes installation (Per Window)", price: "Starts from ₹199", time: "30 Mins" }
    ],
    problems: [
      {
        problem: "Concerned about drilling breaking bathroom glazed tiles (चिंता है कि टॉयलेट/किचन की टाइल्स चटक न जाय)",
        solution: "We utilize industrial diamond-core ceramic bits and hammer-free speeds to bore tiles perfectly without any fracturing or hairline cracks.",
        solutionHindi: "हम बिना टाइल तोड़े बहुत ही बारीकी से कोर ड्रिल बिट से टाइल्स में एकदम साफ छेद करते हैं।"
      }
    ],
    faqs: [
      {
        q: "गमले या भारी पेंटिंग के लिए क्या वॉल गिट्टी सुरक्षित हैं?",
        a: "हाँ, हम भारी पेंटिंग्स या फ्लावर-पॉट टांगने के लिए हमेशा मोटे स्क्रू और उत्तम दर्जे की रॉयल नायलॉन गिट्टी का ही उपयोग करते हैं।"
      }
    ]
  }
];
