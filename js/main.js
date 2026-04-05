/* Elegance Auto Restyling — Main JS */

/* --- Nav scroll effect ------------------------------------- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* --- Mobile menu toggle ------------------------------------ */
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    hamburger.classList.toggle('is-open');
    if (hamburger.classList.contains('is-open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
}

/* --- FAQ accordion ----------------------------------------- */
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Open clicked if it wasn't open
    if (!isOpen) item.classList.add('open');
  });
});

/* --- Active nav link --------------------------------------- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

/* --- Language Management ----------------------------------- */
const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_ceramic: "Ceramic Pro Coatings",
    nav_ppf: "Paint Protection Film",
    nav_vinyl: "Vinyl Wraps",
    nav_tesla: "Tesla Packages",
    nav_about: "About",
    nav_faq: "FAQ",
    nav_book: "Book Now",
    nav_logo_sub: "Restyling · Ceramic Pro Montreal",
    hero_eyebrow: "Montreal's First Ceramic Pro Installer",
    hero_title: "Protection Built On <span class='highlight'>Passion</span>.",
    hero_sub: "Since 2008, Elegance Auto has set the standard for vehicle protection in Quebec. Certified ceramic coatings, precision PPF, and premium wraps — applied with surgical accuracy.",
    hero_btn_book: "Book An Appointment",
    hero_btn_services: "Explore Services",
    card1_title: "Professional Services",
    card1_desc: "Certified by the industry's leading brands: Ceramic Pro, STEK, and 3M.",
    card2_title: "High-End Equipment",
    card2_desc: "We use state-of-the-art tools and climate-controlled facilities for perfect results.",
    card3_title: "Competitive Pricing",
    card3_desc: "Transparent pricing tiers built to fit your needs, from daily drivers to exotics.",
    story_label: "Our Story",
    story_title: "Driven By <span class='highlight'>Passion</span> Since 2008",
    story_p1: "From racing karts at 8 years old to protecting some of Montreal's most exclusive vehicle collections, Joey Villeneuve has built Elegance Auto on a single principle: **Uncompromising Quality.**",
    story_p2: "By 2014, Joey became one of the first Ceramic Pro installers in Canada, and the first in Quebec. Today, he personally oversees every project, ensuring that every curve and corner meets his surgical standards.",
    story_quote: '"My mission is simple: to have your car stand out from the rest with a finish that\'s better than factory. I stand by every job with a 100% satisfaction guarantee."',
    story_btn: "Read Full Story",
    story_badge_name: "Joey Villeneuve",
    story_badge_sub: "Founder & Lead Specialist",
    services_label: "What We Do",
    services_title: "Our <span class='highlight'>Services</span>",
    services_sub: "Every service starts with a thorough preparation and ends with a result you'll be proud of. We don't cut corners — ever.",
    service_ceramic_label: "Certified Application",
    service_ceramic_title: "Ceramic Pro Nano-Coatings",
    service_ceramic_desc: "Permanent paint protection with 9H hardness. Lifetime warranty on our Gold package. UV protection, hydrophobicity, and mirror gloss that lasts for years.",
    service_ppf_label: "STEK DYNOshield",
    service_ppf_title: "Paint Protection Film",
    service_ppf_desc: "Military-grade polyurethane film that absorbs rock chips, scratches, and road debris. Self-healing technology with a 10-year warranty.",
    service_vinyl_label: "3M · Avery · KPMF",
    service_vinyl_title: "Vinyl Wraps",
    service_vinyl_desc: "Transform your vehicle's look with premium vinyl films. Full wraps, chrome deletes, accents, color changes — the possibilities are endless.",
    service_tesla_label: "Model 3 & Model Y",
    service_tesla_title: "Tesla Packages",
    service_tesla_desc: "Purpose-built PPF packages for Tesla's notoriously thin paint. Three coverage tiers, from full front-end to complete vehicle protection.",
    service_view_packages: "View Packages",
    service_get_quote: "Get a Quote",
    pricing_label: "Ceramic Pro Nano-Coatings",
    pricing_title: "Simple, <span class='highlight'>Transparent</span> Pricing",
    pricing_sub: "Three tiers of protection built for different needs — from an introduction to the world of ceramic coating, all the way to a lifetime guarantee.",
    pricing_bronze: "Bronze",
    pricing_silver: "Silver",
    pricing_gold: "Gold",
    pricing_from: "Starting at",
    pricing_duration_1: "1 Day+ &nbsp;·&nbsp; 2-Year Protection",
    pricing_duration_2: "2 Days+ &nbsp;·&nbsp; 5-Year Protection",
    pricing_duration_3: "3 Days+ &nbsp;·&nbsp; Lifetime Protection",
    pricing_note: "PPF and Vinyl Wrap pricing is vehicle-specific. <a href='contact.html'>Contact us for a personalized quote.</a>",
    testi_label: "What Clients Say",
    testi_title: "Real Cars. Real <span class='highlight'>Results</span>.",
    booking_label: "By Appointment Only",
    booking_title: "Ready To <span class='highlight'>Protect</span> Your Investment?",
    booking_desc: "We work by appointment only to ensure every vehicle gets our full attention. Fill out the form and we'll be in touch shortly to confirm your date and discuss your needs.",
    booking_item_address: "2776 Rathwell, Lachine, QC H8S 1K7",
    booking_item_phone: "Joey — 514-998-8412",
    booking_item_hours: "Mon–Fri: 9am – 6pm &nbsp;·&nbsp; Weekends Closed",
    form_h3: "Request an Appointment",
    form_fname: "First Name",
    form_lname: "Last Name",
    form_phone: "Phone",
    form_email: "Email",
    form_vehicle: "Vehicle (Year / Make / Model)",
    form_service: "Service of Interest",
    form_submit: "Send Request",
    footer_desc: "Montreal's first Ceramic Pro installer and one of Canada's most trusted auto protection specialists. Serving the greater Montreal area since 2008.",
    footer_services: "Services",
    footer_company: "Company",
    footer_follow: "Follow Us",
    footer_rights: "© 2024 Elegance Auto Restyling. All rights reserved. · Lachine, Quebec",
    footer_location: "Location",
    footer_addr: "2776 Rathwell<br>Lachine, QC H8S 1K7",
    footer_email: "Email",

    // About Page specific
    about_eyebrow: "Owner-Operator",
    about_title: "Meet <span class='highlight'>Joey Villeneuve</span>",
    about_sub: "The person behind every job. A lifelong car enthusiast, certified professional, and Montreal's first Ceramic Pro installer.",
    about_badge_sub: "Owner-Operator · Montreal, QC",
    about_story_title: "Born to Work on <span class='highlight'>Cars</span>.",
    about_p1: "I've been around cars my entire life. It started at 8 years old racing karts — that spark of passion has never left me. I'm a hands-on person by nature. Every car I've owned, I've taken care of personally. That approach shaped everything I do today.",
    about_p2: "My last personal project was a 1992 Mazda RX-7 (FD3S) that I took on in 2009. Taking care of that car pushed me to go deeper — expanding my product knowledge, refining my technique, and perfecting my craft. People started noticing. And so a business was born.",
    about_p3: "I <strong>established Elegance Auto in 2008</strong>, earned my professional coating certifications in 2012, and by 2014 I had become one of the first Ceramic Pro installers in all of Canada — and <strong>the first in Quebec</strong>.",
    about_how_label: "How I Work",
    about_how_title: "Full Transparency. <span class='highlight'>No Exceptions.</span>",
    about_how_sub: "In a market full of false claims and shoddy workmanship, these aren't marketing promises — they're how I've done business since day one.",
    about_watch_title: "Watch Every Step",
    about_watch_desc: "You're welcome — and encouraged — to watch the entire process. I invite clients to ask questions at every stage. When you understand what's being done to your car, you can make better decisions and leave with complete confidence.",
    about_money_title: "Money-Back Guarantee",
    about_money_desc: "I stand behind my work with a no-nonsense guarantee. If you're unhappy with the results, I will give you your money back. No conditions, no arguments. That's the level of confidence I have in what I deliver.",
    about_cert_title: "Certified & Insured",
    about_cert_desc: "Fully insured and certified by Ceramic Pro 9H, STEK Films, and 3M. These aren't just logos — they represent years of training, testing, and proven application standards that protect your investment.",
    about_cta_title: "Ready to work with someone who actually cares about your car?",
    about_cta_sub: "I treat every vehicle like it's my own. I'm by appointment only — which means your car gets my complete, undivided attention.",
    about_cta_btn: "Book an Appointment",

    // Ceramic Pro Page
    ceramic_eyebrow: "Nano-Ceramic Technology",
    ceramic_title: "Ceramic Pro <span class='highlight'>Nano-Coatings</span>",
    ceramic_sub: "Permanent paint protection with above 9H hardness. The world's most advanced ceramic coating, applied by Quebec's first certified installer.",
    ceramic_overview_label: "What Is Ceramic Pro?",
    ceramic_overview_title: "Not a Wax. Not a Sealant. <span class='highlight'>Permanent.</span>",
    ceramic_overview_p1: "Ceramic Pro 9H is a permanent nanoceramic protective paint coating. Its transparent 3D matrix structure bonds directly to your vehicle's paint at a molecular level — it doesn't sit on top of the surface, it <em>becomes</em> part of it.",
    ceramic_overview_p2: "Unlike waxes and sealants that leave a film and fade within months, Ceramic Pro can only be removed by machine polishing. Once cured, it creates a surface that stays cleaner longer, resists contamination, and delivers a depth of gloss no other product can match.",
    spec_9h_title: "9H+ Hardness",
    spec_9h_desc: "The highest rating on the pencil hardness scale. Resists light stone chips and everyday scratches.",
    spec_hydro_title: "Unmatched Hydrophobicity",
    spec_hydro_desc: "Rain causes water to bead and roll off, carrying dirt with it. A drive in the rain leaves your car looking freshly washed.",
    spec_heat_title: "Thermal Resistance up to 750°C",
    spec_heat_desc: "Withstands extreme heat and protects against oxidation and premature fading.",
    spec_cert_title: "SGS-Certified & REACH Compliant",
    spec_cert_desc: "Tested by the world's leading verification company. Safe for humans and the environment.",
    ceramic_pricing_label: "Choose Your Level of Protection",
    ceramic_pricing_title: "Ceramic Pro <span class='highlight'>Packages</span>",
    ceramic_pricing_sub: "Every package begins with a thorough wash, decontamination, and paint correction to ensure a perfect base before any coating is applied.",
    ceramic_btn_bronze: "Book Bronze",
    ceramic_btn_silver: "Book Silver",
    ceramic_btn_gold: "Book Gold",
    ceramic_note: "Pricing may vary based on vehicle size, paint condition, and level of paint correction required. <a href='contact.html'>Contact us for a precise quote.</a>",
    why_ceramic_label: "Global Recognition",
    why_ceramic_title: "Why Ceramic Pro <span class='highlight'>9H</span>?",
    why_ceramic_sub: "With over 2,500 dealers in 50+ countries, Ceramic Pro is the world's leading automotive protective coating — and we've been applying it since 2014.",
    why_sgs_title: "SGS Seal of Approval",
    why_sgs_desc: "The only automotive coating tested and approved by SGS — the world's leading inspection, verification, testing and certification company.",
    why_exotic_title: "Trusted by Exotic Collections",
    why_exotic_desc: "Ceramic Pro is trusted by ecurie25 in Australia to protect their $8+ million exotic car collection. It's also the official coating for Carlsson Cars — Mercedes-Benz tuners.",
    why_thick_title: "More Than 3× Thicker",
    why_thick_desc: "Ceramic Pro 9H is more than three times the thickness of competing coatings. The unique multi-layer formulation allows additional coats to increase hardness further over time.",
    cta_ceramic_title: "Ready to protect your paint permanently?",
    cta_ceramic_sub: "Quebec's first Ceramic Pro installer is ready to take care of your vehicle.",
    cta_ceramic_btn: "Book Your Appointment",

    // PPF Page
    ppf_eyebrow: "Paint Protection Film",
    ppf_title: "STEK <span class='highlight'>DYNOshield</span> PPF",
    ppf_sub: "The ultimate defense against rock chips, road debris, and scratches. Self-healing, high-gloss polyurethane film with a 10-year warranty.",
    ppf_overview_label: "Why PPF?",
    ppf_overview_title: "Invisible <span class='highlight'>Armor</span> For Your Paint.",
    ppf_overview_p1: "Paint Protection Film (PPF) is a thick, clear polyurethane film applied to the high-impact areas of your vehicle. While ceramic coatings protect against chemicals and UV, PPF is the only real protection against physical damage like rock chips.",
    ppf_overview_p2: "We use STEK DYNOshield, which features a specialized 'hydrophobic' top coat baked into the film. This means you get the impact protection of PPF with the water-beading and self-cleaning properties of a ceramic coating.",
    spec_self_healing_title: "Self-Healing Technology",
    spec_self_healing_desc: "Swirl marks and light scratches disappear with simple exposure to heat (sunlight or warm water).",
    spec_stain_title: "Stain Resistance",
    spec_stain_desc: "Resists yellowing and staining from environmental contaminants, bird droppings, and tree sap.",
    spec_warranty_title: "10-Year Warranty",
    spec_warranty_desc: "Guaranteed against yellowing, bubbling, and cracking for a full decade.",
    ppf_packages_label: "Protection Packages",
    ppf_packages_title: "Coverage <span class='highlight'>Options</span>",
    ppf_packages_sub: "From essential protection to full vehicle wraps, choose the level of coverage that fits your driving habits.",
    ppf_pkg_partial_title: "Partial Front",
    ppf_pkg_partial_desc: "Bumper, partial hood, partial fenders, and mirrors. Essential protection for city driving.",
    ppf_pkg_full_front_title: "Full Front",
    ppf_pkg_full_front_desc: "Full bumper, full hood, full fenders, and mirrors. The most popular choice for complete front-end protection.",
    ppf_pkg_full_car_title: "Full Vehicle",
    ppf_pkg_full_car_desc: "Every painted surface is covered. Maximum peace of mind and maximum resale value.",
    ppf_pkg_btn: "Get Pricing",
    cta_ppf_sub: "Protect your investment with the industry's most advanced paint protection film.",
    ppf_specialty_label: "Specialized Protection",

    // Vinyl Wraps Page
    vinyl_eyebrow: "Transform Your Vehicle",
    vinyl_title: "Vinyl <span class='highlight'>Wraps</span>",
    vinyl_sub: "Change your vehicle's color, add accents, delete chrome — all without touching the factory paint. Premium films from the world's leading brands, applied with precision.",
    vinyl_feat_1_title: "Full Vehicle Color Wraps",
    vinyl_feat_1_desc: "Transform your car's entire appearance with a new color — gloss, matte, satin, metallic, chameleon, and more.",
    vinyl_feat_2_title: "Chrome Deletes",
    vinyl_feat_2_desc: "Replace factory chrome trim with blacked-out or color-matched vinyl for a clean, modern look.",
    vinyl_feat_3_title: "Accents & Partial Wraps",
    vinyl_feat_3_desc: "Roof panels, mirror caps, hoods, spoilers, pillars — precision accent work that elevates the whole vehicle.",
    vinyl_overview_p1: "Vinyl wrapping is one of the most versatile services in auto restyling. Whether you want to completely change your car's color, protect a specific panel, or add a unique custom detail — vinyl makes it possible without a single drop of paint.",
    vinyl_overview_p2: "Because no two projects are alike, we don't publish a standard price list. Every quote is personalized based on the vehicle, the film, the desired coverage, and the current condition of the paint. What we can guarantee is world-class installation using only premium-grade films.",
    cta_quote: "Get a Custom Quote",
    gallery_label: "Recent Work",
    gallery_title: "The Work Speaks for <span class='highlight'>Itself</span>",
    transform_label: "Ready to Transform Your Vehicle?",
    envision_title: "Tell Us What You're <span class='highlight'>Envisioning</span>",
    envision_sub: "Due to the endless variables involved in vinyl projects, every quote is personalized. When you reach out, let us know: vehicle make & model, desired color/finish, which panels, and any current coatings or wraps already on the car.",
    brands_label: "Premium Films From",
    vision_title: "Your Vision. Our <span class='highlight'>Craft</span>.",

    // Tesla Page
    tesla_eyebrow: "Model 3 & Model Y",
    tesla_title: "Tesla <span class='highlight'>Protection</span> Packages",
    tesla_sub: "Purpose-built PPF packages for Tesla's notoriously thin and fragile paint. Because your EV investment deserves the same level of protection as its technology.",
    tesla_notice: "<strong>Taillight Cracking Notice:</strong> Early Model 3 and Model Y vehicles have a known taillight cracking issue common in colder months. The plastic molding process leaves pressure points that can crack during temperature shifts or washing in cold weather. This may occur during our preparation process, but we cannot be held liable for this as it is a documented Tesla issue — Tesla will typically replace these under warranty.",
    tesla_why_label: "Why Tesla Owners Need PPF",
    tesla_why_title: "Tesla's Paint Is <span class='highlight'>Beautiful. And Fragile.</span>",
    tesla_why_p1: "Tesla's paint quality — while visually impressive — is notoriously thin and fragile. It's highly susceptible to the 'sandblasting' effect caused by road debris, producing chips and paint damage at a rate much higher than most traditional vehicles.",
    tesla_why_p2: "This is such a well-documented issue that it's extensively discussed on Tesla owner forums and communities. The solution is applying a physical barrier before the paint takes the abuse — and that's exactly what paint protection film does.",
    tesla_sacrificial: "PPF is a sacrificial film — it absorbs the damage your paint would otherwise take. Rock chips, door dings, road grit: the film takes it all, and your factory paint stays pristine underneath.",
    tesla_pkg_label: "Model 3 & Model Y",
    tesla_pkg_title: "Choose Your <span class='highlight'>Coverage Level</span>",
    tesla_pkg_sub: "Three packages designed specifically for Tesla's geometry and most vulnerable areas. All packages use STEK DYNOshield film with a 10-year warranty.",
    tesla_pkg_1_title: "Full Front",
    tesla_pkg_1_desc: "Most vulnerable areas covered",
    tesla_pkg_2_title: "Executive",
    tesla_pkg_2_desc: "Comprehensive protection",
    tesla_pkg_3_title: "Full Vehicle",
    tesla_pkg_3_desc: "Complete protection",
    tesla_pkg_btn: "Book This Package",
    tesla_cta_title: "Protect your Tesla before it's too late.",
    tesla_cta_sub: "Most paint damage happens in the first few months of ownership. Book your appointment now.",

    // FAQ Page
    faq_eyebrow: "Transparency First",
    faq_title: "Frequently Asked <span class='highlight'>Questions</span>",
    faq_sub: "We believe an informed client makes the best decisions. Read through our honest answers — no marketing fluff, no upselling, just the truth.",
    faq_general_label: "General Questions",
    faq_general_title: "About Our <span class='highlight'>Services</span>",
    faq_q_payment: "What methods of payment do you accept?",
    faq_a_payment: "We accept cash, cheques, debit/credit cards, and e-transfer payments.",
    faq_q_trust: "What are your credentials? How can I trust you?",
    faq_a_trust: "The concern is completely understandable. In a market full of false claims, false promises, and shoddy workmanship, Elegance Auto Restyling stands out through a fully transparent approach.<br><br>Joey is a passionate car enthusiast who treats every vehicle as if it were his own. He is fully insured and certified by Ceramic Pro 9H Nano-coatings, STEK Films, and 3M Films. He's been in the industry since 2008 and has been one of the first Ceramic Pro installers in Canada since 2014 — the first in Quebec.<br><br>He also offers you the opportunity to watch every step of the process and encourages questions. No beating around the bush.",
    faq_q_cancel: "Are there cancellation fees?",
    faq_a_cancel: "There is a $50 cancellation fee if you choose to cancel or reschedule your appointment with less than 48 hours notice. We always try to confirm appointments a few days prior, but please notify us as early as possible if you need to change your booking.",
    faq_q_hours: "What are your hours?",
    faq_a_hours: "Phone hours are Monday through Friday, 9am to 6pm. We are closed on weekends. All work is <strong>by appointment only</strong> — this ensures every vehicle gets our complete, undivided attention.",
    faq_myths_label: "Myths & Misconceptions",
    faq_ppf_title: "Paint Protection Film — <span class='highlight'>The Real Story</span>",
    faq_ppf_sub: "PPF is a great product — but there's a lot of inaccurate marketing out there. Here's the honest breakdown.",
    faq_q_vinyl_ppf: "Are PPF and Vinyl the same thing?",
    faq_a_vinyl_ppf: "No — other than both being films applied to a vehicle, they are completely different products.<br><br><strong>Vinyl</strong> is a thin layer (roughly 2 mils) of cast or calendered PVC with pigments added for color. It's very malleable and highly conformable, allowing it to wrap over complex shapes and edges.<br><br><strong>PPF</strong> is a much thicker (8–12 mils) multi-layered polyurethane film. It's designed to be perfectly clear and have impact and abrasion resistance. Most premium PPF films today also have self-healing properties. Being thicker and more resistant also means it has some limitations in terms of conformability.",
    faq_q_perfection: "Will a PPF install be 100% perfect / invisible?",
    faq_a_perfection: "The short answer is <strong>no</strong>. PPF installation is not easy — the material is expensive and it takes many years to become a proficient installer. Even an experienced installer will have some 'blemishes.' Here's what to expect:<br><br><strong>Water bubbles/air pockets</strong> will dry out after a few weeks once the film cures. If they don't completely evaporate, a hypodermic needle can release the air.<br><br><strong>Lift lines</strong> occur during installation when part of the film is temporarily set while another area is worked on. These generally level down over time and are simply part of the process.<br><br><strong>Dust specs</strong> may occasionally be present. Most installers work in a clean shop but not a surgically sealed clean room.<br><br>Remember: it's <em>Paint PROTECTION Film</em>, not <em>Paint PERFECTION Film</em>.",
    faq_q_seams: "Will I see seams in my installation?",
    faq_a_seams: "On almost every panel — no. But certain parts of a vehicle have too complex a shape for film to fully contour to in a single piece. Bumpers, mirrors, and trunks are often done in multiple pieces, meaning there will be seams.<br><br>A skilled installer places seams in areas where they get lost naturally — curve reflections, edges with high reflection, or hidden areas. When a visible seam is unavoidable, we minimize it as much as possible and align both edges as closely as possible.",
    faq_q_longevity: "How long does PPF last?",
    faq_a_longevity: "Past the 5-year mark, warranty length is mostly marketing. PPF is a <em>sacrificial</em> film — it absorbs damage so your paint doesn't have to. After 5 years of taking abuse, some panels will likely need replacement.<br><br>We always advise clients to focus on the quality of the film and installer rather than the length of the warranty. Durability varies based on: which panels are covered, how well the car is maintained, and environmental factors.<br><br>Most people don't keep their cars more than 4–5 years anyway — a quality install that lasts that long is a complete success.",
    faq_q_consistency: "Are all PPF installations the same?",
    faq_a_consistency: "Absolutely not. Two restaurants can serve a steak — but not all chefs cook at the same level.<br><br>Even if two shops use the same film brand, the quality of the installation itself can vary dramatically. Doing your research and choosing your installer carefully is more important than focusing on brand, warranty length, or price.",
    faq_still_q: "Still have questions?",
    faq_still_sub: "Reach out directly — we're happy to talk through your specific vehicle and situation before you book.",

    // Contact Page
    contact_breadcrumb: "Contact & Booking",
    contact_eyebrow: "Stay in touch",
    contact_title: "Book Your Consultation",
    contact_sub: "Fill out the form below or call Joey directly to discuss your project. We respond to all inquiries within 24 hours.",
    contact_phone_label: "Phone — Joey",
    contact_hours_val: "Mon–Fri: 9am – 6pm<br>Sat–Sun: Closed<br><span style='color:var(--red); font-weight:600;'>By Appointment Only</span>",
    booking_label: "Appointment Request",
    request_date: "Request Your <span style='color:var(--blue);'>Date</span>",
    form_fname: "First Name *",
    form_lname: "Last Name *",
    form_phone: "Phone *",
    form_email: "Email *",
    form_vehicle: "Vehicle (Year / Make / Model) *",
    form_service: "Service of Interest *",
    form_select_service: "Select a service...",
    form_not_sure: "Not sure — I'd like advice",
    form_date: "Preferred Date",
    form_notes: "Additional Notes",
    form_btn: "Send Booking Request",
    form_confirm_msg: "We'll confirm availability within 1 business day.",
    form_placeholder_fname: "First Name",
    form_placeholder_lname: "Last Name",
    form_placeholder_phone: "514-XXX-XXXX",
    form_placeholder_email: "you@email.com",
    form_placeholder_vehicle: "e.g. 2023 Tesla Model 3 Long Range",
    form_placeholder_notes: "Paint condition, any existing coatings, specific areas of concern..."
  },
  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_ceramic: "Revêtements Ceramic Pro",
    nav_ppf: "Pellicule de Protection (PPF)",
    nav_vinyl: "Enveloppements (Vinyl Wrap)",
    nav_tesla: "Forfaits Tesla",
    nav_about: "À Propos",
    nav_faq: "FAQ",
    nav_book: "Réservez",
    nav_logo_sub: "Restyling · Ceramic Pro Montréal",
    hero_eyebrow: "Premier installateur Ceramic Pro à Montréal",
    hero_title: "La Protection au service de la <span class='highlight'>Passion</span>.",
    hero_sub: "Depuis 2008, Elegance Auto définit les standards de protection automobile au Québec. Revêtements céramiques certifiés, PPF de précision et wraps premium — appliqués avec une précision chirurgicale.",
    hero_btn_book: "Prendre un rendez-vous",
    hero_btn_services: "Explorer les services",
    card1_title: "Services Professionnels",
    card1_desc: "Certifié par les plus grandes marques de l'industrie : Ceramic Pro, STEK et 3M.",
    card2_title: "Équipement de Pointe",
    card2_desc: "Nous utilisons des outils ultramodernes et des installations climatisées pour des résultats parfaits.",
    card3_title: "Prix Compétitifs",
    card3_desc: "Gamme de prix transparente adaptée à vos besoins, des voitures quotidiennes aux exotiques.",
    story_label: "Notre Histoire",
    story_title: "Guidés par la <span class='highlight'>Passion</span> depuis 2008",
    story_p1: "De la course de karting à l'âge de 8 ans à la protection des collections les plus exclusives de Montréal, Joey Villeneuve a bâti Elegance Auto sur un principe unique : **Un Qualité Sans Compromis.**",
    story_p2: "En 2014, Joey est devenu l'un des premiers installateurs Ceramic Pro au Canada, et le premier au Québec. Aujourd'hui, il supervise personnellement chaque projet, s'assurant que chaque courbe réponde à ses standards chirurgicaux.",
    story_quote: '"Ma mission est simple : faire en sorte que votre voiture se démarque avec un fini supérieur à la sortie d\'usine. Je garantis chaque travail à 100%."',
    story_btn: "Lire l'histoire complète",
    story_badge_name: "Joey Villeneuve",
    story_badge_sub: "Fondateur et Spécialiste Principal",
    services_label: "Nos Services",
    services_title: "Nos <span class='highlight'>Services</span>",
    services_sub: "Chaque service commence par une préparation minutieuse et se termine par un résultat dont vous serez fier. Nous ne coupons jamais les coins ronds.",
    service_ceramic_label: "Application Certifiée",
    service_ceramic_title: "Nano-Revêtements Ceramic Pro",
    service_ceramic_desc: "Protection permanente de la peinture avec dureté 9H. Garantie à vie sur notre forfait Or. Protection UV, hydrophobicité et un lustre miroir durable.",
    service_ppf_label: "STEK DYNOshield",
    service_ppf_title: "Pellicule de Protection (PPF)",
    service_ppf_desc: "Film polyuréthane de qualité militaire qui absorbe les éclats de pierre et débris. Technologie auto-cicatrisante avec garantie de 10 ans.",
    service_vinyl_label: "3M · Avery · KPMF",
    service_vinyl_title: "Enveloppements Vinyle",
    service_vinyl_desc: "Transformez l'apparence de votre véhicule. Wraps complets, suppression de chrome, accents, changements de couleur — les possibilités sont infinies.",
    service_tesla_label: "Model 3 & Model Y",
    service_tesla_title: "Forfaits Tesla",
    service_tesla_desc: "Forfaits PPF conçus pour la peinture mince des Tesla. Trois niveaux de couverture, de l'avant complet à la protection totale du véhicule.",
    service_view_packages: "Voir les forfaits",
    service_get_quote: "Obtenir un devis",
    pricing_label: "Nano-Revêtements Ceramic Pro",
    pricing_title: "Prix Simples et <span class='highlight'>Transparents</span>",
    pricing_sub: "Trois niveaux de protection pour différents besoins — d'une introduction à la céramique jusqu'à une garantie à vie.",
    pricing_bronze: "Bronze",
    pricing_silver: "Argent",
    pricing_gold: "Or",
    pricing_from: "À partir de",
    pricing_duration_1: "1 Jour+ &nbsp;·&nbsp; Protection 2 Ans",
    pricing_duration_2: "2 Jours+ &nbsp;·&nbsp; Protection 5 Ans",
    pricing_duration_3: "3 Jours+ &nbsp;·&nbsp; Protection à Vie",
    pricing_note: "Les prix pour le PPF et le vinyle varient selon le véhicule. <a href='contact.html'>Contactez-nous pour un devis personnalisé.</a>",
    testi_label: "Témoignages Clients",
    testi_title: "Vraies Voitures. Vrais <span class='highlight'>Résultats</span>.",
    booking_label: "Sur Rendez-Vous Uniquement",
    booking_title: "Prêt à <span class='highlight'>Protéger</span> votre investissement ?",
    booking_desc: "Nous travaillons sur rendez-vous uniquement pour accorder toute notre attention à chaque véhicule. Remplissez le formulaire et nous vous contacterons sous peu.",
    booking_item_address: "2776 Rathwell, Lachine, QC H8S 1K7",
    booking_item_phone: "Joey — 514-998-8412",
    booking_item_hours: "Lun–Ven: 9h – 18h &nbsp;·&nbsp; Fermé les weekends",
    form_h3: "Demander un rendez-vous",
    form_fname: "Prénom",
    form_lname: "Nom",
    form_phone: "Téléphone",
    form_email: "Courriel",
    form_vehicle: "Véhicule (Année / Marque / Modèle)",
    form_service: "Service d'intérêt",
    form_submit: "Envoyer la demande",
    footer_desc: "Montreal's first Ceramic Pro installer and one of Canada's most trusted auto protection specialists. Serving the greater Montreal area since 2008.",
    footer_services: "Services",
    footer_company: "Entreprise",
    footer_follow: "Suivez-nous",
    footer_rights: "© 2024 Elegance Auto Restyling. Tous droits réservés. · Lachine, Québec",
    footer_location: "Localisation",
    footer_addr: "2776 Rathwell<br>Lachine, QC H8S 1K7",
    footer_email: "Courriel",

    // About Page specific
    about_eyebrow: "Propriétaire-Opérateur",
    about_title: "Rencontrez <span class='highlight'>Joey Villeneuve</span>",
    about_sub: "La personne derrière chaque projet. Passionné d'automobile depuis l'enfance, professionnel certifié et premier installateur Ceramic Pro à Montréal.",
    about_badge_sub: "Propriétaire-Opérateur · Montréal, QC",
    about_story_title: "Né pour travailler sur des <span class='highlight'>voitures</span>.",
    about_p1: "J'ai été entouré de voitures toute ma vie. Tout a commencé à l'âge de 8 ans en faisant du karting — cette étincelle de passion ne m'a jamais quitté. Je suis une personne manuelle par nature. Chaque voiture que j'ai possédée, je l'ai entretenue personnellement. Cette approche a façonné tout ce que je fais aujourd'hui.",
    about_p2: "Mon dernier projet personnel était une Mazda RX-7 (FD3S) 1992 que j'ai entreprise en 2009. Prendre soin de cette voiture m'a poussé à aller plus loin — approfondir mes connaissances des produits, affiner ma technique et perfectionner mon métier. Les gens ont commencé à le remarquer, et c'est ainsi qu'une entreprise est née.",
    about_p3: "J'ai <strong>établi Elegance Auto en 2008</strong>, obtenu mes certifications professionnelles en revêtement en 2012, et en 2014, je suis devenu l'un des premiers installateurs Ceramic Pro au Canada — et <strong>le premier au Québec</strong>.",
    about_how_label: "Ma Méthode",
    about_how_title: "Transparence Totale. <span class='highlight'>Sans Exceptions.</span>",
    about_how_sub: "Dans un marché plein de fausses promesses et de travail bâclé, ce ne sont pas des paroles de marketing — c'est ma façon de faire des affaires depuis le premier jour.",
    about_watch_title: "Observez chaque étape",
    about_watch_desc: "Vous êtes les bienvenus — et encouragés — à observer tout le processus. J'invite mes clients à poser des questions à chaque étape. Quand vous comprenez ce qui est fait sur votre voiture, vous pouvez prendre de meilleures décisions et partir en toute confiance.",
    about_money_title: "Garantie de remboursement",
    about_money_desc: "Je garantis mon travail avec une politique de remboursement simple. Si vous n'êtes pas satisfait des résultats, je vous rembourserai. Pas de conditions, pas d'arguments. C'est le niveau de confiance que j'ai dans ce que je livre.",
    about_cert_title: "Certifié et Assuré",
    about_cert_desc: "Entièrement assuré and certifié par Ceramic Pro 9H, STEK Films et 3M. Ces logos ne sont pas seulement esthétiques — ils représentent des années de formation, de tests et de standards d'application éprouvés qui protègent votre investissement.",
    about_cta_title: "Prêt à travailler avec quelqu'un qui se soucie réellement de votre voiture ?",
    about_cta_sub: "Je traite chaque véhicule comme s'il était le mien. Je travaille uniquement sur rendez-vous — ce qui signifie que votre voiture reçoit mon attention complète et exclusive.",
    about_cta_btn: "Prendre un rendez-vous",

    // Ceramic Pro Page
    ceramic_eyebrow: "Technologie Nano-Céramique",
    ceramic_title: "Nano-Revêtements <span class='highlight'>Ceramic Pro</span>",
    ceramic_sub: "Protection permanente de la peinture avec une dureté supérieure à 9H. Le revêtement céramique le plus avancé au monde, appliqué par le premier installateur certifié au Québec.",
    ceramic_overview_label: "Qu'est-ce que Ceramic Pro ?",
    ceramic_overview_title: "Ni une cire. Ni un scellant. <span class='highlight'>Permanent.</span>",
    ceramic_overview_p1: "Ceramic Pro 9H est un revêtement de protection permanent nanocéramique. Sa structure matricielle 3D transparente se lie directement à la peinture de votre véhicule au niveau moléculaire — il ne repose pas sur la surface, il en <em>devient</em> une partie intégrante.",
    ceramic_overview_p2: "Contrairement aux cires et scellants qui laissent un film et s'estompent en quelques mois, Ceramic Pro ne peut être retiré que par polissage à la machine. Une fois durci, il crée une surface qui reste propre plus longtemps et offre un lustre inégalé.",
    spec_9h_title: "Dureté 9H+",
    spec_9h_desc: "Le niveau le plus élevé sur l'échelle de dureté. Résiste aux légers éclats de pierre et aux égratignures quotidiennes.",
    spec_hydro_title: "Hydrophobicité Inégalée",
    spec_hydro_desc: "L'eau perle et s'écoule en emportant la saleté. Rouler sous la pluie laisse votre voiture comme si elle venait d'être lavée.",
    spec_heat_title: "Résistance Thermique jusqu'à 750°C",
    spec_heat_desc: "Résiste aux chaleurs extrêmes et protège contre l'oxydation et la décoloration prématurée.",
    spec_cert_title: "Certifié SGS et Conforme REACH",
    spec_cert_desc: "Testé par le leader mondial de la certification. Sans danger pour l'humain et l'environnement.",
    ceramic_pricing_label: "Choisissez votre niveau de protection",
    ceramic_pricing_title: "Forfaits <span class='highlight'>Ceramic Pro</span>",
    ceramic_pricing_sub: "Chaque forfait commence par un lavage complet, une décontamination et une correction de peinture pour assurer une base parfaite.",
    ceramic_btn_bronze: "Réserver Bronze",
    ceramic_btn_silver: "Réserver Argent",
    ceramic_btn_gold: "Réserver Or",
    ceramic_note: "Les prix peuvent varier selon la taille du véhicule et l'état de la peinture. <a href='contact.html'>Contactez-nous pour un devis précis.</a>",
    why_ceramic_label: "Reconnaissance Mondiale",
    why_ceramic_title: "Pourquoi Ceramic Pro <span class='highlight'>9H</span> ?",
    why_ceramic_sub: "Avec plus de 2 500 détaillants dans plus de 50 pays, Ceramic Pro est le leader mondial des revêtements protecteurs — et nous l'appliquons depuis 2014.",
    why_sgs_title: "Sceau d'approbation SGS",
    why_sgs_desc: "Le seul revêtement automobile testé et approuvé par SGS — le leader mondial de l'inspection et de la certification.",
    why_exotic_title: "Approuvé pour les collections exotiques",
    why_exotic_desc: "Ceramic Pro protège des collections de plus de 8 millions de dollars. C'est aussi le revêtement officiel de Carlsson Cars — préparateur Mercedes-Benz.",
    why_thick_title: "Plus de 3× plus épais",
    why_thick_desc: "Ceramic Pro 9H est plus de trois fois plus épais que les revêtements concurrents. Sa formulation multicouche permet d'augmenter la dureté avec le temps.",
    cta_ceramic_title: "Prêt à protéger votre peinture de façon permanente ?",
    cta_ceramic_sub: "Le premier installateur Ceramic Pro au Québec est prêt à prendre soin de votre véhicule.",
    cta_ceramic_btn: "Réserver votre rendez-vous",

    // PPF Page
    ppf_eyebrow: "Pellicule de Protection (PPF)",
    ppf_title: "STEK <span class='highlight'>DYNOshield</span> PPF",
    ppf_sub: "La défense ultime contre les éclats de pierre et les égratignures. Film polyuréthane auto-cicatrisant et ultra-lustré avec garantie de 10 ans.",
    ppf_overview_label: "Pourquoi le PPF ?",
    ppf_overview_title: "Une <span class='highlight'>Armure</span> Invisible pour votre peinture.",
    ppf_overview_p1: "Le pare-pierre (PPF) est un film polyuréthane épais et transparent appliqué sur les zones d'impact. C'est la seule réelle protection contre les dommages physiques comme les éclats de roche.",
    ppf_overview_p2: "Nous utilisons le STEK DYNOshield, qui possède une couche de finition hydrophobe intégrée. Vous obtenez la protection contre les impacts du PPF avec les propriétés autonettoyantes d'une céramique.",
    spec_self_healing_title: "Technologie Auto-Cicatrisante",
    spec_self_healing_desc: "Les micro-rayures disparaissent avec une simple exposition à la chaleur (soleil ou eau chaude).",
    spec_stain_title: "Résistance aux taches",
    spec_stain_desc: "Résiste au jaunissement et aux taches causées par les contaminants environnementaux.",
    spec_warranty_title: "Garantie de 10 ans",
    spec_warranty_desc: "Garanti contre le jaunissement, les bulles et les fissures pendant une décennie complète.",
    ppf_packages_label: "Forfaits de Protection",
    ppf_packages_title: "Options de <span class='highlight'>Couverture</span>",
    ppf_packages_sub: "De la protection essentielle à l'enveloppement complet, choisissez le niveau qui convient à vos habitudes de conduite.",
    ppf_pkg_partial_title: "Avant Partiel",
    ppf_pkg_partial_desc: "Pare-chocs, partie du capot, partie des ailes et miroirs. Protection essentielle pour la ville.",
    ppf_pkg_full_front_title: "Avant Complet",
    ppf_pkg_full_front_desc: "Pare-chocs complet, capot complet, ailes complètes et miroirs. Le choix le plus populaire.",
    ppf_pkg_full_car_title: "Véhicule Complet",
    ppf_pkg_full_car_desc: "Chaque surface peinte est couverte. Une tranquillité d'esprit totale et une valeur de revente maximale.",
    ppf_pkg_btn: "Obtenir les prix",
    cta_ppf_sub: "Protégez votre investissement avec la pellicule la plus avancée de l'industrie.",
    ppf_specialty_label: "Protection Spécialisée",

    // Vinyl Wraps Page
    vinyl_eyebrow: "Transformez Votre Véhicule",
    vinyl_title: "Vinyl <span class='highlight'>Wraps</span>",
    vinyl_sub: "Changez la couleur de votre véhicule, ajoutez des accents, effectuez un 'chrome delete' — le tout sans toucher à la peinture d'origine. Films premium des plus grandes marques mondiales, appliqués avec précision.",
    vinyl_feat_1_title: "Wraps complets de couleur",
    vinyl_feat_1_desc: "Transformez l'apparence entière de votre voiture avec une nouvelle couleur — lustrée, mate, satinée, métallique, caméléon et plus encore.",
    vinyl_feat_2_title: "Chrome Deletes",
    vinyl_feat_2_desc: "Remplacez les garnitures chromées d'usine par du vinyle noir ou assorti à la couleur pour un look épuré et moderne.",
    vinyl_feat_3_title: "Accents & Wraps Partiels",
    vinyl_feat_3_desc: "Toits, coques de rétroviseurs, capots, spoilers, piliers — un travail d'accentuation précis qui rehausse l'ensemble du véhicule.",
    vinyl_overview_p1: "L'enveloppement vinyle est l'un des services les plus polyvalents en restylage automobile. Que vous souhaitiez changer complètement la couleur de votre voiture, protéger un panneau spécifique ou ajouter un détail personnalisé unique, le vinyle le permet sans une seule goutte de peinture.",
    vinyl_overview_p2: "Comme il n'y a pas deux projets identiques, nous ne publions pas de liste de prix standard. Chaque devis est personnalisé en fonction du véhicule, du film, de la couverture souhaitée et de l'état actuel de la peinture. Ce que nous garantissons, c'est une installation de calibre mondial utilisant uniquement des films de qualité premium.",
    cta_quote: "Obtenir un Devis Personnalisé",
    gallery_label: "Travaux Récents",
    gallery_title: "Le Travail Parle d'<span class='highlight'>Lui-même</span>",
    transform_label: "Prêt à Transformer votre Véhicule ?",
    envision_title: "Dites-nous ce que vous <span class='highlight'>Imaginez</span>",
    envision_sub: "En raison des variables infinies impliquées dans les projets de vinyle, chaque devis est personnalisé. Lors de votre demande, précisez-nous : la marque et le modèle du véhicule, la couleur/le fini souhaité, quels panneaux, et tout revêtement ou wrap déjà présent sur la voiture.",
    brands_label: "Films Premium de",
    vision_title: "Votre Vision. Notre <span class='highlight'>Métier</span>.",

    // Tesla Page
    tesla_eyebrow: "Model 3 & Model Y",
    tesla_title: "Forfaits de <span class='highlight'>Protection</span> Tesla",
    tesla_sub: "Forfaits PPF spécialement conçus pour la peinture de Tesla, réputée pour être mince et fragile. Parce que votre investissement électrique mérite le même niveau de protection que sa technologie.",
    tesla_notice: "<strong>Avis sur les fissures de feux arrière :</strong> Les premiers véhicules Model 3 et Model Y ont un problème connu de fissures de feux arrière, fréquent durant les mois froids. Le processus de moulage du plastique laisse des points de pression qui peuvent se fissurer lors de changements de température ou d'un lavage par temps froid. Cela peut se produire durant notre processus de préparation, mais nous ne pouvons en être tenus responsables car il s'agit d'un problème documenté par Tesla — Tesla les remplace généralement sous garantie.",
    tesla_why_label: "Pourquoi les propriétaires de Tesla ont besoin de PPF",
    tesla_why_title: "La peinture Tesla est <span class='highlight'>Belle. Et Fragile.</span>",
    tesla_why_p1: "La qualité de la peinture Tesla — bien qu'impressionnante visuellement — est notoirement mince et fragile. Elle est très sensible à l'effet de 'sablage' causé par les débris de la route, produisant des éclats et des dommages à un rythme beaucoup plus élevé que la plupart des véhicules traditionnels.",
    tesla_why_p2: "Il s'agit d'un problème si bien documenté qu'il fait l'objet de nombreuses discussions sur les forums et communautés de propriétaires de Tesla. La solution consiste à appliquer une barrière physique avant que la peinture ne subisse les dommages — et c'est exactement ce que fait le film de protection de peinture.",
    tesla_sacrificial: "Le PPF est un film sacrificiel — il absorbe les dommages que votre peinture subirait autrement. Éclats de roche, coups de porte, sable routier : le film encaisse tout, et votre peinture d'usine reste impeccable en dessous.",
    tesla_pkg_label: "Model 3 & Model Y",
    tesla_pkg_title: "Choisissez votre <span class='highlight'>Niveau de Couverture</span>",
    tesla_pkg_sub: "Trois forfaits conçus spécifiquement pour la géométrie de Tesla et ses zones les plus vulnérables. Tous les forfaits utilisent le film STEK DYNOshield avec une garantie de 10 ans.",
    tesla_pkg_1_title: "Avant Complet",
    tesla_pkg_1_desc: "Zones les plus vulnérables couvertes",
    tesla_pkg_2_title: "Exécutif",
    tesla_pkg_2_desc: "Protection complète",
    tesla_pkg_3_title: "Véhicule Complet",
    tesla_pkg_3_desc: "Protection totale",
    tesla_pkg_btn: "Réserver ce Forfait",
    tesla_cta_title: "Protégez votre Tesla avant qu'il ne soit trop tard.",
    tesla_cta_sub: "La plupart des dommages à la peinture surviennent au cours des premiers mois de possession. Réservez votre rendez-vous maintenant.",

    // FAQ Page
    faq_eyebrow: "Transparence Avant Tout",
    faq_title: "Foire aux <span class='highlight'>Questions</span>",
    faq_sub: "Nous croyons qu'un client informé prend les meilleures décisions. Lisez nos réponses honnêtes — pas de baratin marketing, pas de vente forcée, juste la vérité.",
    faq_general_label: "Questions Générales",
    faq_general_title: "À Propos de nos <span class='highlight'>Services</span>",
    faq_q_payment: "Quels modes de paiement acceptez-vous ?",
    faq_a_payment: "Nous acceptons l'argent comptant, les chèques, les cartes de débit/crédit et les virements Interac.",
    faq_q_trust: "Quelles sont vos qualifications ? Puis-je vous faire confiance ?",
    faq_a_trust: "Cette préoccupation est tout à fait compréhensible. Dans un marché plein de fausses promesses et de travail bâclé, Elegance Auto Restyling se distingue par une approche totalement transparente.<br><br>Joey est un passionné de voitures qui traite chaque véhicule comme s'il était le sien. Il est entièrement assuré et certifié par Ceramic Pro 9H Nano-coatings, STEK Films et 3M Films. Il est dans l'industrie depuis 2008 et est l'un des premiers installateurs Ceramic Pro au Canada depuis 2014 — le premier au Québec.<br><br>Il vous offre également la possibilité de regarder chaque étape du processus et encourage les questions. Pas de détours.",
    faq_q_cancel: "Y a-t-il des frais d'annulation ?",
    faq_a_cancel: "Il y a des frais d'annulation de 50 $ si vous choisissez d'annuler ou de reporter votre rendez-vous avec un préavis de moins de 48 heures. Nous essayons toujours de confirmer les rendez-vous quelques jours auparavant, mais veuillez nous en informer le plus tôt possible si vous devez modifier votre réservation.",
    faq_q_hours: "Quelles sont vos heures d'ouverture ?",
    faq_a_hours: "Les heures de réponse téléphonique sont du lundi au vendredi, de 9h à 18h. Nous sommes fermés le week-end. Tout travail se fait <strong>uniquement sur rendez-vous</strong> — cela garantit que chaque véhicule bénéficie de notre attention complète et exclusive.",
    faq_myths_label: "Mythes et Idées Fausses",
    faq_ppf_title: "Film de Protection de Peinture — <span class='highlight'>La Réalité</span>",
    faq_ppf_sub: "Le PPF est un excellent produit — mais il y a beaucoup de marketing inexact. Voici l'honnête vérité.",
    faq_q_vinyl_ppf: "Le PPF et le Vinyle sont-ils la même chose ?",
    faq_a_vinyl_ppf: "Non — à part le fait que les deux sont des films appliqués sur un véhicule, ce sont des produits complètement différents.<br><br><strong>Le Vinyle</strong> est une couche mince (environ 2 mils) de PVC coulé ou calandré avec des pigments ajoutés pour la couleur. Il est très malléable, ce qui lui permet d'épouser des formes et des arêtes complexes.<br><br><strong>Le PPF</strong> est un film de polyuréthane multicouche beaucoup plus épais (8–12 mils). Il est conçu pour être parfaitement transparent et offre une résistance aux chocs et à l'abrasion. La plupart des films PPF premium d'aujourd'hui ont également des propriétés auto-cicatrisantes. Être plus épais signifie également qu'il a certaines limites en termes de conformabilité.",
    faq_q_perfection: "Une installation de PPF sera-t-elle 100% parfaite / invisible ?",
    faq_a_perfection: "La réponse courte est <strong>non</strong>. L'installation de PPF n'est pas facile — le matériau est coûteux et il faut de nombreuses années pour devenir un installateur compétent. Même un installateur expérimenté aura quelques 'imperfections'. Voici à quoi vous attendre :<br><br><strong>Les bulles d'eau/poches d'air</strong> sécheront après quelques semaines une fois que le film aura durci.<br><br><strong>Les lignes de démarcation (lift lines)</strong> surviennent lors de l'installation lorsqu'une partie du film est temporairement fixée pendant qu'une autre zone est travaillée. Celles-ci s'atténuent généralement avec le temps.<br><br><strong>Des grains de poussière</strong> peuvent occasionnellement être présents. La plupart des installateurs travaillent dans un atelier propre, mais pas dans une salle blanche chirurgicale.<br><br>Rappelez-vous : c'est un film de <em>PROTECTION</em> de peinture, pas de <em>PERFECTION</em> de peinture.",
    faq_q_seams: "Vais-je voir des joints dans mon installation ?",
    faq_a_seams: "Sur presque tous les panneaux — non. Mais certaines parties d'un véhicule ont une forme trop complexe pour que le film puisse épouser parfaitement les contours en une seule pièce. Les pare-chocs, les rétroviseurs et les coffres sont souvent réalisés en plusieurs pièces, ce qui signifie qu'il y aura des joints.<br><br>Un installateur qualifié place les joints dans des zones où ils se perdent naturellement. Lorsqu'un joint visible est inévitable, nous le minimisons au maximum.",
    faq_q_longevity: "Combien de temps dure le PPF ?",
    faq_a_longevity: "Passé le cap des 5 ans, la durée de la garantie est surtout du marketing. Le PPF est un film <em>sacrificiel</em> — il absorbe les dommages pour que votre peinture n'ait pas à le faire. Après 5 ans à subir des agressions, certains panneaux devront probablement être remplacés.<br><br>Nous conseillons toujours aux clients de se concentrer sur la qualité du film et de l'installateur plutôt que sur la durée de la garantie. La durabilité varie selon les panneaux couverts, l'entretien de la voiture et les facteurs environnementaux.",
    faq_q_consistency: "Toutes les installations de PPF sont-elles les mêmes ?",
    faq_a_consistency: "Absolument pas. Deux restaurants peuvent servir un steak — mais tous les chefs ne cuisinent pas au même niveau.<br><br>Même si deux ateliers utilisent la même marque de film, la qualité de l'installation elle-même peut varier considérablement. Choisir votre installateur avec soin est plus important que de se concentrer sur la marque ou le prix.",
    faq_still_q: "Vous avez encore des questions ?",
    faq_still_sub: "Contactez-nous directement — nous serons ravis de discuter de votre véhicule et de votre situation spécifique avant votre réservation.",

    // Contact Page
    contact_breadcrumb: "Contact et Réservation",
    contact_eyebrow: "Restons en contact",
    contact_title: "Réservez votre consultation",
    contact_sub: "Remplissez le formulaire ci-dessous ou appelez Joey directement pour discuter de votre projet. Nous répondons à toutes les demandes sous 24 heures.",
    contact_phone_label: "Téléphone — Joey",
    contact_hours_val: "Lun–Ven : 9h – 18h<br>Sam–Dim : Fermé<br><span style='color:var(--red); font-weight:600;'>Sur rendez-vous uniquement</span>",
    booking_label: "Demande de rendez-vous",
    request_date: "Demandez votre <span style='color:var(--blue);'>Date</span>",
    form_fname: "Prénom *",
    form_lname: "Nom de famille *",
    form_phone: "Téléphone *",
    form_email: "Courriel *",
    form_vehicle: "Véhicule (Année / Marque / Modèle) *",
    form_service: "Service d'intérêt *",
    form_select_service: "Sélectionnez un service...",
    form_not_sure: "Pas certain — j'aimerais des conseils",
    form_date: "Date préférée",
    form_notes: "Notes additionnelles",
    form_btn: "Envoyer la demande de réservation",
    form_confirm_msg: "Nous confirmerons la disponibilité dans un délai d'un jour ouvrable.",
    form_placeholder_fname: "Prénom",
    form_placeholder_lname: "Nom",
    form_placeholder_phone: "514-XXX-XXXX",
    form_placeholder_email: "votre@courriel.com",
    form_placeholder_vehicle: "ex: 2023 Tesla Model 3 Long Range",
    form_placeholder_notes: "État de la peinture, revêtements existants, zones préoccupantes..."
  }
};

class LanguageManager {
  constructor() {
    this.lang = localStorage.getItem('preferred_lang') || 'en';
    this.init();
  }

  init() {
    this.applyLanguage(this.lang);
    this.setupListeners();
  }

  setupListeners() {
    document.querySelectorAll('.lang-switch').forEach(toggle => {
      toggle.addEventListener('click', () => {
        this.lang = this.lang === 'en' ? 'fr' : 'en';
        localStorage.setItem('preferred_lang', this.lang);
        this.applyLanguage(this.lang);
      });
    });
  }

  applyLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-value') === lang);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.langManager = new LanguageManager();
});
