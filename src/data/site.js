/**
 * ─────────────────────────────────────────────────────────────
 *  RR PACKAGING COMPANY — SINGLE SOURCE OF TRUTH
 *  Everything the website says lives in this one file.
 *  Edit here, rebuild, and the whole site updates.
 *
 *  Lines marked  // ⚠️ CONFIRM  should be checked with Avinash ji
 *  before the site goes live.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  name: "RR Packaging Company",
  legalName: "RR Packaging Company",
  tagline: "We deal in all types of packaging solutions",
  motto: ["Quality", "Durability", "Innovation"],
  blurb:
    "Manufacturing & trading of all packaging printing materials — rotogravure-printed laminated rolls, pouches, sachets and shrink sleeves.",
  proprietor: {
    name: "Avinash Kumar",
    role: "Founder & Proprietor",
  },
  partner: {
    name: "Ramakant Pandey",
    role: "Proprietor",
    region: "Bihar & Jharkhand",
    phones: [
      { label: "Sales", number: "+918434635708", display: "+91 84346 35708" },
      { label: "Works & Sales", number: "+919711853825", display: "+91 97118 53825" },
    ],
    show: true,
  },
  phones: [
    { label: "Sales", number: "+919507989049", display: "+91 95079 89049" },
    { label: "Works", number: "+919711853825", display: "+91 97118 53825" },
  ],
  whatsapp: "919507989049",
  email: "rrpackagingcompany@gmail.com", // ⚠️ CONFIRM full address
  address: {
    line1: "C-43-44, Phase-III, UPSIDC",
    line2: "MG Road Industrial Area",
    city: "Hapur",
    pin: "245101",
    state: "Uttar Pradesh",
    country: "India",
  },
  mapQuery:
    "C-43-44 Phase III UPSIDC MG Road Industrial Area Hapur 245101 Uttar Pradesh",
  hours: "Mon – Sat · 9:30 am – 7:00 pm",
}

export const addressOneLine = `${company.address.line1}, ${company.address.line2}, ${company.address.city}–${company.address.pin}, ${company.address.state}`

/** Headline numbers. Every one of these is backed by what is on this site. */
export const stats = [
  { value: "8", label: "Pack formats", note: "rolls to spouted pouches" },
  { value: "6", label: "Industries served", note: "food, pharma, FMCG & more" },
  { value: "9+", label: "Brands packed", note: "see Our Work" },
  { value: "Pan-India", label: "Dispatch", note: "from Hapur, U.P." },
]

export const nav = [
  { label: "About", to: "/about/" },
  { label: "Products", to: "/products/" },
  { label: "Industries", to: "/industries/" },
  { label: "Our Work", to: "/work/" },
  { label: "Contact", to: "/contact/" },
]

/** The eight formats RR produces. `image` = key in src/images/gen. */
export const products = [
  {
    slug: "laminated-rolls",
    image: "prod-roll",
    name: "Printed Laminated Rolls",
    kicker: "Form-fill-seal ready",
    summary:
      "Multi-layer rotogravure-printed film supplied on cores, cut to your machine's web width and wound to your tension spec.",
    detail:
      "Our core product. We print, laminate and slit continuous film for automatic FFS lines — vertical or horizontal. Registration marks, eye-marks and tear notches are laid in at pre-press so the roll runs clean on your machine from the first metre.",
    specs: [
      ["Structures", "PET / PE, BOPP / PE, PET / MET-PET / PE, PET / AL / PE"],
      ["Web width", "Slit to order"],
      ["Core", "76 mm (3\") standard, others on request"],
      ["Printing", "Up to 8 colours, rotogravure"],
    ],
  },
  {
    slug: "centre-seal-pouches",
    image: "prod-centerseal",
    name: "Centre-Seal Pillow Pouches",
    kicker: "The classic snack pack",
    summary:
      "Back-seam pillow packs for biscuits, namkeen, wafers and confectionery — the fastest, most economical format on the shelf.",
    detail:
      "Made from our own printed laminate, centre-seal pouches give you the lowest cost per pack at high line speeds. Available with gussets, euro-slots, tear notches and easy-open laser scoring.",
    specs: [
      ["Options", "Side gusset, euro hole, tear notch"],
      ["Sealing", "Fin seal / lap seal"],
      ["Barrier", "Moisture, aroma and light barrier grades"],
      ["Finish", "Gloss, matte, matte with spot gloss"],
    ],
  },
  {
    slug: "stand-up-pouches",
    image: "prod-standup",
    name: "Stand-Up Zipper Pouches",
    kicker: "Resealable",
    summary:
      "Doypacks with a K-seal or round bottom gusset and a press-to-close zipper — for dry fruits, spices, health mixes and pet food.",
    detail:
      "A stand-up pouch earns its place on a shelf. We supply them plain or fully printed, with zipper, tear notch, hang hole and one-way degassing valve options for roasted products.",
    specs: [
      ["Bottom", "K-seal / round bottom gusset"],
      ["Closures", "Press-to-close zipper, slider, tin-tie"],
      ["Extras", "Valve, hang hole, laser tear line"],
      ["Sizes", "50 g to 5 kg fills"],
    ],
  },
  {
    slug: "three-side-seal",
    image: "prod-3side",
    name: "Three-Side-Seal Sachets",
    kicker: "Single-serve & sampling",
    summary:
      "Flat sachets in strips or singles, for antacids, ayurvedic powders, henna, shampoo, ketchup and spice mixes.",
    detail:
      "High-speed sachet stock with tight print registration, eye-marks and perforation between packs. We print these for pharma and ayurvedic brands where legibility of the dosage panel is non-negotiable.",
    specs: [
      ["Formats", "Singles, strips, perforated chains"],
      ["Fill", "Powder, granule, liquid, paste"],
      ["Structures", "PET / AL / PE, PET / MET-PET / PE"],
      ["Compliance", "Food-grade & pharma-grade laminates"],
    ],
  },
  {
    slug: "flat-bottom-pouches",
    image: "prod-flatbottom",
    name: "Flat-Bottom Box Pouches",
    kicker: "Premium, five-panel",
    summary:
      "Rigid box-style pouches that stand square and print on five faces — for coffee, tea, dry fruits and gifting packs.",
    detail:
      "The most premium pouch we make. Sharp side gussets and a flat base give the pack a carton-like presence with a fraction of the material, and five printable panels give your designer real room to work.",
    specs: [
      ["Panels", "Front, back, two gussets, base"],
      ["Closures", "Zipper, tin-tie, valve"],
      ["Finish", "Matte soft-touch, gloss, metallic"],
      ["Sizes", "250 g to 2 kg fills"],
    ],
  },
  {
    slug: "spouted-pouches",
    image: "prod-spout",
    name: "Spouted Pouches",
    kicker: "Liquids on the move",
    summary:
      "Stand-up pouches with a welded spout and cap for juices, sauces, sanitisers, lubricants and agro-chemicals.",
    detail:
      "Spouted pouches ship flat and fill fast. We supply the pouch with the spout welded and torque-tested, in corner or centre-top position, with tamper-evident caps.",
    specs: [
      ["Spout position", "Corner or centre-top"],
      ["Spout sizes", "8.6 mm / 10 mm / 22 mm"],
      ["Caps", "Tamper-evident, child-resistant"],
      ["Fills", "100 ml to 5 L"],
    ],
  },
  {
    slug: "shrink-sleeves",
    image: "prod-shrink",
    name: "Shrink Sleeves & Wrap Labels",
    kicker: "360° bottle decoration",
    summary:
      "Full-body shrink sleeves and wrap-around labels that hug every contour of a bottle, jar or container.",
    detail:
      "Printed on PVC, PET-G or OPS film and seamed to your bottle's shrink profile. We build the distortion compensation into pre-press so your artwork lands undistorted after the tunnel.",
    specs: [
      ["Films", "PVC, PET-G, OPS"],
      ["Shrink", "Up to 65% TD"],
      ["Supply", "Seamed reels or cut sleeves"],
      ["Extras", "Perforation, tamper band"],
    ],
  },
  {
    slug: "custom-printing",
    image: "prod-supplies",
    name: "Custom Printing & Trading",
    kicker: "Whatever the job needs",
    summary:
      "Beyond our own formats we trade the full range of packaging printing materials — so one purchase order covers everything.",
    detail:
      "If you need a material or a format we do not run in-house, we source it. Adhesive tapes, courier bags, BOPP bags, laminates, printed labels — RR Packaging Company has been a manufacturing and trading house from day one.",
    specs: [
      ["Trading", "All packaging printing materials"],
      ["Sourcing", "Vetted mills and converters"],
      ["Logistics", "Consolidated dispatch"],
      ["Terms", "On request"],
    ],
    hideSpecsOnGrid: true,
  },
]

/** Verticals we already print for, drawn from real jobs. */
export const industries = [
  {
    slug: "bakery-snacks",
    image: "ind-bakery",
    name: "Bakery & Snacks",
    line: "Rusk, khari, doughnuts, biscuits, namkeen",
    body:
      "Bakery products are fragile and they go stale fast. We build laminates with the moisture and aroma barrier to hold texture through the supply chain, and print them so the pack still looks appetising after a week in a hot warehouse.",
    proof: ["SIMUN Khari", "Baker n Caker"],
  },
  {
    slug: "spices-masala",
    image: "ind-spices",
    name: "Spices & Masala",
    line: "Turmeric, chilli, blended masala, whole spices",
    body:
      "Spice packs live or die on aroma retention and colour fidelity. Our structures keep volatile oils in and moisture out, and our pre-press holds the deep reds and yellows that spice buyers judge on sight.",
    proof: ["Aowsome Indian", "Bansila Masala"],
  },
  {
    slug: "ayurveda-pharma",
    image: "ind-ayurveda",
    name: "Ayurveda & Pharma",
    line: "Churna, health mixes, antacids, sachets",
    body:
      "Dosage panels, licence numbers and batch coding have to be perfectly legible — every time. We print pharma and ayurvedic packs on high-barrier foil and metallised structures with tight registration and clean coding windows.",
    proof: ["UNOCID", "RM Ayurved"],
  },
  {
    slug: "beverages",
    image: "ind-beverage",
    name: "Beverages",
    line: "Soft drinks, juices, water, dairy drinks",
    body:
      "Beverage labels run at speed and get wet, cold and handled hard. We supply shrink sleeves and wrap-around labels with the scuff resistance and shrink profile your filling line needs.",
    proof: ["Bottled beverage labels"],
  },
  {
    slug: "staples-agri",
    image: "ind-staples",
    name: "Staples & Agri",
    line: "Rice, atta, pulses, soya, seeds",
    body:
      "High-fill-weight packs need seal strength above everything else. We build heavy-duty laminates and gusseted formats that survive stacking, hooks and a long road to the retailer.",
    proof: ["NARPA Soya Chunks"],
  },
  {
    slug: "personal-home-care",
    image: "ind-personalcare",
    name: "Personal & Home Care",
    line: "Henna, hair colour, soaps, cleaning bars",
    body:
      "Cosmetic and home-care packs face oils, pigments and surfactants. We match the laminate to the chemistry so the pack does not delaminate, and print the finishes — metallic, matte, spot gloss — that make the product look premium.",
    proof: ["Radhika Mehndi", "Aanganwadi"],
  },
]

/** Real jobs, photographed on our own floor. */
export const work = [
  { image: "simun-khari", brand: "SIMUN Premium Khari", format: "Centre-seal pouch", note: "Bakery — printed laminate with matte finish" },
  { image: "baker-n-caker", brand: "Baker n Caker", format: "Printed laminated roll", note: "Maa Laxmi Foods — cream doughnut wrapper" },
  { image: "narpa-soya", brand: "NARPA Soya Mini Chunks", format: "Printed laminated roll", note: "Svera Agro Ltd — FFS film" },
  { image: "radhika-henna", brand: "Radhika Marwadi Mehndi", format: "Three-side-seal sachet", note: "NK Traders, Bareilly — henna hair colour" },
  { image: "unocid-sachet", brand: "UNOCID", format: "Sachet chain", note: "Patil Dabur Ayurved — antacid, 5 g pouches" },
  { image: "rm-health-mix", brand: "RM Ayurved Health Mix", format: "Stand-up zipper pouch", note: "300 g ayurvedic powder, front panel" },
  { image: "rm-health-back", brand: "RM Ayurved Health Mix", format: "Stand-up zipper pouch", note: "Reverse panel — dosage and licence copy" },
  { image: "beverage-label", brand: "Bottled beverage", format: "Wrap-around bottle label", note: "1.25 L PET — high-speed label stock" },
  { image: "aowsome-turmeric", brand: "Aowsome Indian", format: "Printed laminated roll", note: "Muskan Food Industries — turmeric powder" },
  { image: "bartan-bar-rolls", brand: "Aanganwadi Bartan Bar", format: "Printed laminated rolls", note: "NR Industries — dish bar wrapper, in production" },
]

/** Brand names for the marquee. */
export const brandNames = [
  "SIMUN",
  "Baker n Caker",
  "NARPA",
  "Radhika Mehndi",
  "UNOCID",
  "RM Ayurved",
  "Aowsome Indian",
  "Aanganwadi",
  "Maa Laxmi Foods",
  "Svera Agro",
  "Muskan Food Industries",
  "NK Traders",
]

/** How a job moves through the plant. */
export const process = [
  { n: "01", title: "Artwork & pre-press", body: "We take your design, colour-separate it, add registration and eye-marks, and send you a digital proof before a single cylinder is cut." },
  { n: "02", title: "Cylinder engraving", body: "Copper cylinders are engraved to the separation, chrome-plated for run length, and proofed against your approved colour targets." },
  { n: "03", title: "Rotogravure printing", body: "Up to eight colours in a single pass, with in-line registration control and continuous density checks against the approved proof." },
  { n: "04", title: "Lamination & curing", body: "Layers are bonded to the structure your product needs — moisture, oxygen, aroma or light barrier — then cured to full bond strength." },
  { n: "05", title: "Slitting & pouching", body: "Slit to your web width and core, or converted into finished pouches and sachets on our pouching lines." },
  { n: "06", title: "QC & dispatch", body: "Every reel is checked for print, bond and seal before it is packed, labelled and dispatched anywhere in India." },
]

export const whyUs = [
  { title: "Manufacturer and trader", body: "We print and convert in-house, and we trade everything else. One supplier, one purchase order, one point of accountability." },
  { title: "Built around your machine", body: "Web width, core size, wind direction, eye-mark position — we set the reel up for your line, not ours, so it runs from the first metre." },
  { title: "Colour you can hold to", body: "Approved proof first, then density checks through the run. The tenth reel matches the first." },
  { title: "Pan-India dispatch", body: "From the UPSIDC industrial area in Hapur, with easy road access to Delhi NCR and the whole country." },
]

export const faqs = [
  { q: "What is your minimum order quantity?", a: "It depends on the format and the number of colours. Rotogravure needs cylinders to be engraved, so roll and pouch jobs carry a minimum run — call us with your artwork and pack size and we will give you a straight answer and a quote the same day." },
  { q: "Do you make the cylinders too?", a: "Cylinder engraving is arranged as part of the job. You approve a digital proof before engraving starts, and the cylinders stay available for your repeat orders." },
  { q: "Can you match my existing pack?", a: "Yes. Send us a physical sample of the current pack. We will identify the structure and match the print, and tell you honestly if there is a better or cheaper structure for the same job." },
  { q: "Which structures do you supply?", a: "PET/PE, BOPP/PE, PET/MET-PET/PE and PET/AL/PE as standard, plus paper and speciality laminates on request. We recommend the structure from your product, shelf life and filling line." },
  { q: "How long does a first order take?", a: "Artwork and proofing is the part that varies. Once the proof is approved and cylinders are ready, printing, lamination and slitting run to a scheduled date that we commit to in writing." },
  { q: "Do you deliver outside Uttar Pradesh?", a: "Yes — we dispatch across India by road from Hapur. Freight is quoted with the order." },
]
