/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Roodepoort Value Maids & Care",
    phone:     "+27 79 039 6828",
    whatsapp:  "+27 79 039 6828",
    address:   "120c Ontdekkers Rd, Roodepoort, South Africa",
    hours:     "Mon–Sat 7am–5pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Roodepoort",
      "Florida",
      "Weltevreden Park",
      "Radiokop",
      "Little Falls",
      "Honeydew",
      "Constantia Kloof"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Roodepoort Value Maids & Care — Cleaning services in roodepoort",
    description: "Roodepoort Value Maids & Care provides professional cleaning services in Roodepoort. 20 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "tide",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Cleaning services · Roodepoort & surrounds",
    heroTitle:  "Spotless, every time — <em>professional cleaning.</em>",
    heroLead:   "Roodepoort Value Maids & Care provides professional domestic and commercial cleaning services across Roodepoort. Regular cleans, deep cleans and once-off services available.",

    googleRating: "4.8",
    reviewsCount: "20",
    featuredQuote: "Regular weekly clean and the team is always thorough, punctual and professional. My house has never been this clean.",
    featuredQuoteAuthor: "— Angela P., Google review",

    trustSignals: ["Domestic cleaning", "Office cleaning", "Deep cleaning", "Reliable team"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Professional cleaning for homes and businesses.",
    servicesLead:  "We bring the equipment, the products and the experience. You come home to a spotless property.",
    services: [
      {
        icon:  "broom",
        title: "Domestic cleaning",
        desc:  "Regular home cleaning — kitchen, bathrooms, bedrooms and living areas cleaned thoroughly on your schedule."
      },
      {
        icon:  "wrench",
        title: "Office & commercial cleaning",
        desc:  "Office, retail and commercial space cleaning — before or after business hours so it does not disrupt your day."
      },
      {
        icon:  "droplet",
        title: "Deep cleaning",
        desc:  "Full top-to-bottom deep clean for homes, offices, ovens, fridges and anywhere that needs more than a regular clean."
      },
      {
        icon:  "hardhat",
        title: "Post-construction cleaning",
        desc:  "Dust, debris and building residue removed after renovation or construction work so the property is move-in ready."
      },
      {
        icon:  "calendar",
        title: "Move-in / move-out cleaning",
        desc:  "Thorough end-of-tenancy or pre-move-in clean so the property is spotless for the next occupant or inspection."
      },
      {
        icon:  "shield",
        title: "Carpet & upholstery cleaning",
        desc:  "Steam cleaning and dry extraction for carpets, couches and fabric chairs — removes stains and odours."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Kitchen cleaning",
        title:   "Cleaned throughout",
        caption: "Kitchen surfaces, appliances, cupboards and floors cleaned thoroughly — including behind and underneath appliances."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Bathroom deep clean",
        title:   "Disinfected and shining",
        caption: "Tiles, grout, fixtures and fittings scrubbed and disinfected. Limescale and soap scum removed."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Office cleaning",
        title:   "Ready for the next day",
        caption: "Desks, floors, kitchen area and bathrooms cleaned after hours so the office is fresh for the morning."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Post-construction",
        title:   "Dust and debris removed",
        caption: "Construction dust, plaster residue, adhesive and debris cleared completely so the property is move-in ready."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Carpet cleaning",
        title:   "Stains lifted, fibres refreshed",
        caption: "Hot water extraction removes embedded dirt, stains and odours from carpets and fabric furniture."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Roodepoort Value Maids & Care team at work in Roodepoort",
      text:  "A clean home or office, every time — professional and reliable."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Serving Roodepoort and the surrounding area.",
    areasLead:  "We cover Roodepoort, Florida, Weltevreden Park and the wider region. Regular contracts and once-off cleans both available.",
    areasNote:  "Not sure if your area is covered? Send us a message.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why clients keep us on regular contract.",
    why: [
      {
        title: "Consistent, reliable team",
        desc:  "The same people come each time — they know your property and what needs attention."
      },
      {
        title: "We bring everything",
        desc:  "Products, equipment and cloths all supplied. You do not need to stock anything."
      },
      {
        title: "Trustworthy and vetted",
        desc:  "Our cleaners are vetted and referenced. We take care of who enters your home or office."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 20 verified Google reviews.",
    reviews: [
      {
        body:   "Regular weekly clean and the team is always thorough, punctual and professional. My house has never been this clean.",
        name:   "Angela P.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Used them for an end-of-tenancy deep clean. Landlord was completely happy with the state of the property. Brilliant.",
        name:   "Sibusiso M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Office cleaning contract — always done before we arrive in the morning. Reliable and excellent standard.",
        name:   "Lisa F.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Cleaning service questions.",
    faqLead:  "What most clients ask before booking.",
    faq: [
      {
        q: "Do you supply cleaning products and equipment?",
        a: "Yes — we bring everything needed including products, mops, vacuum and cloths. You do not need to supply anything."
      },
      {
        q: "How often should I have my home cleaned?",
        a: "Weekly is ideal for most homes. Fortnightly is popular for smaller properties or homes with fewer people. We also do monthly deep cleans."
      },
      {
        q: "Do I need to be home when you clean?",
        a: "No — many clients leave a key or access code. We are insured and all staff are vetted."
      },
      {
        q: "Can you do a once-off deep clean?",
        a: "Yes — once-off deep cleans are available and popular for post-construction, move-in/out and spring cleaning."
      },
      {
        q: "Do you clean offices and commercial properties?",
        a: "Yes — office and commercial cleaning is available, usually scheduled before or after business hours."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what needs cleaning.",
    contactLead:  "Let us know the property size, what you need and how often. We will reply with availability and a quote.",
    contactPlaceholder: "e.g. 3-bedroom house, weekly cleaning, first deep clean needed",

    // ─── CLOSING CTA BAND ──────────────────────────────────
    ctaBannerTitle: "Need it spotless <em>by the weekend?</em>",
    ctaBannerSub:   "One message and we'll schedule your clean."
  }
};
