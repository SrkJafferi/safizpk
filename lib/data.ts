// ─── Service Categories ─────────────────────────────────────────────

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  itemCount: number;
  products: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "printing",
    title: "Printing Services",
    icon: "Printer",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80",
    description: "Business cards to brochures — precision print for every need.",
    itemCount: 11,
    products: [
      "Business Cards",
      "Letterheads",
      "Brochures",
      "Flyers",
      "Vouchers",
      "Invoice Books",
      "Paper Stickers",
      "Customized Stationery",
      "Tags",
      "Files & Folders",
      "Envelopes",
      "Packaging / Gift Boxes",
    ],
  },
  {
    id: "signage",
    title: "Signage",
    icon: "SignpostBig",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
    description: "Indoor, outdoor, 2D, 3D — signs that command attention.",
    itemCount: 9,
    products: [
      "2D Signs",
      "3D Signs",
      "A-Board",
      "Acrylic Board",
      "Flag Stands",
      "Indoor Sign",
      "Pop-Up",
      "Promotional Table",
      "Roll Up",
    ],
  },
  {
    id: "large-format",
    title: "Large Format Printing",
    icon: "Frame",
    image: "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?w=800&q=80",
    description: "Banners to vehicle wraps — go big or go home.",
    itemCount: 11,
    products: [
      "Banner",
      "Canvas",
      "DuraTrans",
      "Flag Printing",
      "Flex Printing",
      "One Way Vision",
      "Forex Board",
      "Plotter Cutting Sticker",
      "Poster",
      "Print & Cut Sticker",
      "PVC Sticker",
    ],
  },
  {
    id: "promotional",
    title: "Promotional Items",
    icon: "Gift",
    image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&q=80",
    description: "Branded merchandise that keeps your name in hand.",
    itemCount: 13,
    products: [
      "Mugs",
      "Bags",
      "Caps",
      "Pens",
      "Keychains",
      "T-Shirts",
      "Badges",
      "Diaries",
      "Plaques",
      "Awards",
      "Card Holders",
      "Crystal Shields",
      "Vouchers",
    ],
  },
  {
    id: "brand-collateral",
    title: "Brand Collateral",
    icon: "PenTool",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    description: "Letterheads, tags, stationery — every touchpoint branded.",
    itemCount: 6,
    products: [
      "Letterheads",
      "Tags",
      "Customized Stationery",
      "File Folders",
      "Envelopes",
      "Invoice Books",
    ],
  },
  {
    id: "retail-events",
    title: "Retail & Storefront / Event & Exhibition",
    icon: "Store",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
    description: "Roll-ups, pop-ups, media walls, flag stands — own the floor.",
    itemCount: 8,
    products: [
      "Roll Up",
      "Pop-Up Display",
      "Media Wall",
      "Flag with Stand",
      "Promotional Table",
      "A-Board",
      "Acrylic Sign",
      "LED Neon Sign",
    ],
  },
  {
    id: "vehicle-branding",
    title: "Vehicle Branding",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    description: "Full and partial vehicle wraps to turn your fleet into mobile billboards.",
    itemCount: 4,
    products: [
      "Car Wrap",
      "Van Branding",
      "Bus Wrap",
      "Fleet Graphics"
    ],
  },
  {
    id: "digital-design",
    title: "Digital Design",
    icon: "MonitorPlay",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    description: "Graphic design, UI/UX, and complete branding for the digital age.",
    itemCount: 4,
    products: [
      "Logo Design",
      "UI/UX Design",
      "Social Media Graphics",
      "Brand Identity"
    ],
  },
  {
    id: "it-services",
    title: "IT Services",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    description: "Web development, mobile apps, and complete IT infrastructure solutions.",
    itemCount: 4,
    products: [
      "Website Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "IT Support"
    ],
  },
];

// ─── Testimonials ───────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Raza Khan",
    role: "Marketing Manager",
    company: "HBL",
    quote:
      "SAFIZ delivered our entire branch branding rollout across 12 locations. Exceptional quality and on-time delivery every single time.",
    rating: 5,
  },
  {
    name: "Aisha Siddiqui",
    role: "Brand Head",
    company: "Unilever Pakistan",
    quote:
      "From promotional merchandise to large format printing, Safiz handles it all. They understand brand standards and never compromise on quality.",
    rating: 5,
  },
  {
    name: "Khalid Al Mansoori",
    role: "Operations Director",
    company: "Dubai Police (UAE)",
    quote:
      "Our official event signage and branded stationery have always been produced flawlessly by the Safiz team in UAE. Highly recommended.",
    rating: 5,
  },
  {
    name: "Tariq Hussain",
    role: "COO",
    company: "First Motors UAE",
    quote:
      "Safiz produced our entire showroom signage package. The 3D signs and acrylic boards were stunning — exactly what we envisioned.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Director",
    company: "GEMS Westminster School Sharjah",
    quote:
      "Professional, creative, and responsive. Our school branding materials have been produced by Safiz for 3+ years now.",
    rating: 5,
  },
  {
    name: "Omar Sheikh",
    role: "Event Manager",
    company: "UAE Hockey Federation",
    quote:
      "We rely on Safiz for all our event media walls, banners, and promotional items. They always deliver under tight deadlines.",
    rating: 5,
  },
  {
    name: "Sana Mirza",
    role: "Procurement Lead",
    company: "K-Electric",
    quote:
      "Thousands of branded stationery items sourced through Safiz — consistent quality and great pricing every order.",
    rating: 5,
  },
  {
    name: "Ahmed Farooq",
    role: "Director",
    company: "PAF KIET",
    quote:
      "Vehicle branding, office signage, and printed materials — Safiz is our go-to partner for every visual communication need.",
    rating: 5,
  },
];

// ─── Client Lists ───────────────────────────────────────────────────

export const uaeClients: string[] = [
  "University of Sharjah",
  "Dubai Police",
  "Ajman Police",
  "TP-Link",
  "Subway",
  "First Motors",
  "GEMS Westminster",
  "Mashriq Elite",
  "H3C",
  "La Marquise",
  "UAE Hockey Federation",
  "Gulf & World Traders",
  "Student Biryani",
  "Medtra",
  "Easytruck",
  "BNI",
  "Al Dana Medical",
  "Makkah Pharmacies",
  "Cosmedent Clinic",
  "Yoko Spa",
  "Al Takamul Computers",
  "Bundoo Khan's",
];

export const uaeLogos = [
  { name: "Ajman Police", src: "/clients/uae/Ajman Police.webp" },
  { name: "Al Haaj Bando Khan", src: "/clients/uae/Al Haaj Bando Khan.webp" },
  { name: "Al Takamul", src: "/clients/uae/Al Takamul.webp" },
  { name: "Amer", src: "/clients/uae/Amer.webp" },
  { name: "Ana Medical Equipment", src: "/clients/uae/Ana Medical Equipment.webp" },
  { name: "BNI", src: "/clients/uae/BNI.webp" },
  { name: "Cosmedent Clinic", src: "/clients/uae/Cosmedent Cilinic.webp" },
  { name: "First Motors", src: "/clients/uae/First Motors.webp" },
  { name: "GEMS Westminister School", src: "/clients/uae/GEMS Westminister School.webp" },
  { name: "Gulf & World", src: "/clients/uae/Gulf & World.webp" },
  { name: "HBC", src: "/clients/uae/HBC.webp" },
  { name: "La Mariques", src: "/clients/uae/La Mariques.webp" },
  { name: "Makkah Pharmacy", src: "/clients/uae/Makkah Pharmacy.webp" },
  { name: "Mashriq Elite", src: "/clients/uae/Mashriq Elite.webp" },
  { name: "Medtra", src: "/clients/uae/Medtra.webp" },
  { name: "Student Biryani", src: "/clients/uae/Student Biryani.webp" },
  { name: "Subway", src: "/clients/uae/Subway.webp" },
  { name: "TP Link", src: "/clients/uae/TP Link.webp" },
  { name: "Tad-beer", src: "/clients/uae/Tad-beer.webp" },
  { name: "Tas-heel", src: "/clients/uae/Tas-heel.webp" },
  { name: "Taw-jeeh", src: "/clients/uae/Taw-jeeh.webp" },
  { name: "UAE Hockey Federation", src: "/clients/uae/UAE Hockey Federation.webp" },
  { name: "W3 Canada", src: "/clients/uae/W3 Canada.webp" },
  { name: "YOKO Spa Beauty", src: "/clients/uae/YOKO Spa Beuty.webp" },
  { name: "Dubai Police", src: "/clients/uae/dubai Police.webp" },
  { name: "Easytruck", src: "/clients/uae/easytruck.webp" },
  { name: "University of Sharjah", src: "/clients/uae/univesity of sharjah.webp" },
];


export const pakistanClients: string[] = [
  "Pakistan Army",
  "FBR",
  "ISI",
  "Unilever",
  "DHL",
  "HBL",
  "UBL",
  "NBP",
  "MCB",
  "Bank Alfalah",
  "K-Electric",
  "PAF",
  "FJDC",
  "The Kidney Centre",
  "Provincial Assembly Sindh",
  "Transparency International",
  "Roche",
  "Bosch",
  "Adobe",
  "PAF KIET",
  "LTO Karachi",
  "KWSB",
  "Karachi Port",
  "Pakistan Boxing Federation",
];

export const pakistanLogos = [
  { name: "ASF", src: "/clients/pakistan/ASF.webp" },
  { name: "Agha Khan University", src: "/clients/pakistan/Agha Khan University.webp" },
  { name: "BOSCH Pharma", src: "/clients/pakistan/BOSCH Pharma.webp" },
  { name: "Bank ALfalah", src: "/clients/pakistan/Bank ALfalah.webp" },
  { name: "CPSP", src: "/clients/pakistan/CPSP.webp" },
  { name: "DHL", src: "/clients/pakistan/DHL.webp" },
  { name: "DUHS", src: "/clients/pakistan/DUHS.webp" },
  { name: "FBR", src: "/clients/pakistan/FBR.webp" },
  { name: "Fatima Jinnah Dental College", src: "/clients/pakistan/Fatima Jinnah Dental College.webp" },
  { name: "GOVT OF SINDH", src: "/clients/pakistan/GOVT OF SINDH.webp" },
  { name: "Governor House", src: "/clients/pakistan/Governor House.webp" },
  { name: "HBL", src: "/clients/pakistan/HBL.webp" },
  { name: "ISI", src: "/clients/pakistan/ISI.webp" },
  { name: "Inter Selection Board Malir", src: "/clients/pakistan/Inter Selection Board Malir.webp" },
  { name: "KE", src: "/clients/pakistan/KE.webp" },
  { name: "KPT", src: "/clients/pakistan/KPT.webp" },
  { name: "KU", src: "/clients/pakistan/KU.webp" },
  { name: "Kidney Center", src: "/clients/pakistan/Kidney Center.webp" },
  { name: "MCB", src: "/clients/pakistan/MCB.webp" },
  { name: "NBL", src: "/clients/pakistan/NBL.webp" },
  { name: "NED", src: "/clients/pakistan/NED.webp" },
  { name: "PAK KIET", src: "/clients/pakistan/PAK KIET.webp" },
  { name: "Pak Army", src: "/clients/pakistan/Pak Army.webp" },
  { name: "Pakistan Air Force", src: "/clients/pakistan/Pakistan Air Force.webp" },
  { name: "Pakistan Boxing Federation", src: "/clients/pakistan/Pakistan Boxing Federation.webp" },
  { name: "Pakistan Institute", src: "/clients/pakistan/Pakistan Institute.webp" },
  { name: "Paksitan Navy", src: "/clients/pakistan/Paksitan Navy.webp" },
  { name: "ROCHE Pharma", src: "/clients/pakistan/ROCHE Pharma.webp" },
  { name: "SINDH Police", src: "/clients/pakistan/SINDH Police.webp" },
  { name: "SJAS", src: "/clients/pakistan/SJAS.webp" },
  { name: "Transparency Internatonal", src: "/clients/pakistan/Transparency Internatonal.webp" },
  { name: "Unilever", src: "/clients/pakistan/Unilever.webp" },
  { name: "WATER BOARD", src: "/clients/pakistan/WATER BOARD.webp" },
  { name: "liaquat National Hospital", src: "/clients/pakistan/liaquat National Hospital.webp" },
  { name: "muhammadi blood bank", src: "/clients/pakistan/muhammadi blood bank.webp" },
  { name: "pakistan air force base faisal", src: "/clients/pakistan/pakistan air force base faisal.webp" },
];


// ─── Offices ────────────────────────────────────────────────────────

export interface Office {
  label: string;
  city: string;
  address: string;
  phones: string[];
  emails: string[];
  website: string;
}

export const offices: Office[] = [
  {
    label: "Pakistan HQ (Saddar)",
    city: "Karachi",
    address:
      "Office 327, Hakim Center, Abdullah Haroon Road, Saddar, Karachi",
    phones: ["+92 315 1282583", "+92 315 1282583"],
    emails: ["info@safiz.pk"],
    website: "www.safiz.pk",
  },
  {
    label: "Pakistan (DHA)",
    city: "Karachi",
    address:
      "Office 9C, Mezzanine Floor, Street 33, Touheed Commercial, Phase-V, DHA, Karachi",
    phones: ["+92 21 35304195", "+92 300 2131655"],
    emails: ["info@creativebrand.pk"],
    website: "www.creativebrand.pk",
  },
  {
    label: "UAE (Ajman)",
    city: "Ajman",
    address:
      "Office 6, A.R.A Building, Street 10, Near Bank Saderat Iran, Al-Nakhil 1, Ajman, UAE",
    phones: ["+971 6 744 7844", "+971 50 6972274"],
    emails: ["info@safiz.ae"],
    website: "www.safiz.ae",
  },
];

// ─── Why Us Features ────────────────────────────────────────────────

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const whyUsFeatures: Feature[] = [
  {
    icon: "Award",
    title: "20+ Years of Expertise",
    description:
      "Decades of delivering results across Pakistan and UAE with unmatched consistency.",
  },
  {
    icon: "Users",
    title: "100+ Trusted Clients",
    description:
      "From startups to government bodies and global brands — trusted at every level.",
  },
  {
    icon: "Zap",
    title: "Strategy + Speed",
    description:
      "We combine creative thinking with fast turnaround to meet the tightest deadlines.",
  },
  {
    icon: "Globe",
    title: "One Partner, Every Need",
    description:
      "Signage, print, promo items, large format — no need to juggle multiple vendors. We handle it all.",
  },
];

// ─── Marquee Ticker ─────────────────────────────────────────────────

export const marqueeClients: string[] = [
  "Dubai Police",
  "Unilever",
  "HBL",
  "DHL",
  "Subway",
  "TP-Link",
  "Roche",
  "Bosch",
  "University of Sharjah",
  "MCB Bank",
  "UBL",
  "NBP",
  "Pakistan Air Force",
  "FBR Pakistan",
  "ISI",
  "Mashriq Elite",
  "K-Electric",
  "Bank Alfalah",
  "Adobe",
  "PAF KIET",
];

// ─── Stats ──────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Clients Served" },
  { value: 3, suffix: "", label: "Office Locations" },
  { value: 4, suffix: "", label: "Core Service Areas" },
];

// ─── Sister Companies ───────────────────────────────────────────────

export const sisterCompanies: string[] = [
  "Express Advertising",
  "Safi & Co. Advertiser",
  "Creative Brand",
  "Khuddam-e-Makkah",
  "PakiWebHost",
  "Safiz Catering",
];

// ─── Nav Links ──────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  disabled?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Portfolio", href: "/portfolio", disabled: true },
];
