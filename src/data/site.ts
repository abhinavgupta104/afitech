/**
 * Every company fact lives here once.
 *
 * The old site contradicted itself because the same claim was retyped into a
 * dozen Elementor widgets — "over 12 years" in seven places, "over 15 years" in
 * five. Anything a visitor reads about the company must be imported from this
 * file so that can't happen again.
 *
 * Values marked VERIFY are carried over from the old site or read off the ISO
 * certificate and still need the client to confirm them. See CONTENT-TODO.md.
 */

export const site = {
  name: 'AFI Technologies',
  legalName: 'AFI Technologies',
  url: 'https://afitechnologies.co.in',
  tagline: 'Membrane keypads, graphic overlays and PCB-backed switch panels, built to your drawing in Pune.',

  founded: 2011, // VERIFY — derived from the "15+ years" claim
  yearsExperience: 15, // VERIFY — old site said both 12 and 15

  phone: '+91 9309097161',
  phoneHref: '+919309097161',
  whatsapp: '919309097161',
  email: 'afitechnologies1@gmail.com', // VERIFY — a domain address reads better on quotes

  address: {
    // Full address as printed on the ISO 9001:2015 certificate. The old site
    // only ever showed "Kondhwa, Pune - 411048".
    line1: 'Floor No. 3, Godown No. 3, Alima Towers',
    line2: 'Punyadham Ashram Road, Burhani Industrial Estates',
    locality: 'Kondhwa',
    region: 'Maharashtra',
    city: 'Pune',
    postalCode: '411048',
    country: 'IN',
    countryName: 'India',
  },

  hours: 'Monday to Saturday, 9:30am – 6:30pm IST', // VERIFY

  social: {
    youtube: 'https://www.youtube.com/@AFITechnologies',
    // VERIFY — currently a personal profile, not a company page
    linkedin: 'https://www.linkedin.com/in/afi-technologies-technologies-b6766132a/',
  },

  certification: {
    standard: 'ISO 9001:2015',
    number: '25UQLX26',
    body: 'Absolute Quality Certification Pvt. Ltd. (AQC)',
    accreditation: 'UAF / IAF',
    bodyCode: 'CB-MS-790143',
    iafCode: '19',
    registered: '2025-12-16',
    expires: '2028-12-15',
    surveillance: ['2026-11-16', '2027-11-16'],
    scope:
      'Manufacturing of membrane keypad, PCB based keypad, graphic overlay, connectors and wire harness.',
    verifyUrl: 'https://www.uafaccreditation.org',
  },

  /** Headline figures. VERIFY all — carried over from the old counters. */
  stats: [
    { value: '1M+', label: 'Keypads delivered', note: 'Cumulative production to date' },
    { value: '100+', label: 'Customers served', note: 'Across nine industries' },
    { value: '15+', label: 'Years manufacturing', note: 'Building membrane switches since 2011' },
    { value: '20+', label: 'On the technical team', note: 'Design, tooling, printing and QC' },
  ],
} as const;

export const nav = [
  { label: 'Products', href: '/products/' },
  { label: 'Technical', href: '/technicals/' },
  { label: 'Industries', href: '/industries-we-serve/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Quality', href: '/certificates/' },
  { label: 'Contact', href: '/contact-us/' },
] as const;

export const footerNav = [
  {
    title: 'Products',
    links: [
      { label: 'Non-tactile membrane keypads', href: '/non-tactile-membrane-keypad/' },
      { label: 'Tactile membrane keypads', href: '/tactile-membrane-keypad/' },
      { label: 'Embossed membrane keypads', href: '/embossed-membrane-keypad/' },
      { label: 'Graphic overlays', href: '/graphic-overlays/' },
      { label: 'PCB-backed keypads', href: '/pcb-backed-keypad/' },
      { label: 'CNC key sheets & overlays', href: '/cnc-key-sheets/' },
    ],
  },
  {
    title: 'Engineering',
    links: [
      { label: 'Technical specifications', href: '/technicals/' },
      { label: 'Industries we serve', href: '/industries-we-serve/' },
      { label: 'Manufacturing facility', href: '/infrastructure-facilities/' },
      { label: 'Quality & certification', href: '/certificates/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About AFI Technologies', href: '/about-us/' },
      { label: 'Why choose us', href: '/why-us/' },
      { label: 'Contact', href: '/contact-us/' },
      { label: 'Request a quote', href: '/get-quote/' },
    ],
  },
] as const;
