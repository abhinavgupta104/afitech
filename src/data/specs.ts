/**
 * Technical specifications.
 *
 * Values are carried across from the old /technicals/ page, with two
 * corrections flagged in CONTENT-TODO.md:
 *   - non-tactile actuation force was published as "125 TO 250MGS"
 *     (milligrams). Corrected to grams to match the tactile figure and to be
 *     physically sensible. NEEDS CLIENT CONFIRMATION.
 *   - "MILISECONDS" / "MILI-AMPS" spelling corrected.
 *
 * Rows marked `added: true` are standard membrane-switch parameters that
 * buyers ask for and the old page did not publish. They are marked so the
 * client can confirm or amend them before they go live as claims.
 */

export interface SpecRow {
  parameter: string;
  value: string;
  note?: string;
  added?: boolean;
}

export interface SpecGroup {
  title: string;
  intro?: string;
  rows: SpecRow[];
}

export const specGroups: SpecGroup[] = [
  {
    title: 'Electrical',
    intro: 'Ratings apply to the printed silver circuit. Switching above these figures requires a relay or driver behind the panel.',
    rows: [
      { parameter: 'Operating voltage', value: '30 V DC maximum' },
      { parameter: 'Operating current', value: '30 mA – 100 mA maximum' },
      { parameter: 'Contact resistance', value: 'Less than 2 Ω' },
      { parameter: 'Circuit resistance', value: '20 – 100 Ω typical', note: 'Varies with trace length and geometry' },
      { parameter: 'Contact bounce', value: 'Less than 10 ms' },
      { parameter: 'Insulation resistance', value: '100 MΩ at 100 V DC', added: true },
      { parameter: 'Dielectric strength', value: '250 V AC for 1 minute', added: true },
    ],
  },
  {
    title: 'Mechanical',
    rows: [
      { parameter: 'Actuation force — non-tactile', value: '125 – 250 g', note: 'Published previously as milligrams; corrected' },
      { parameter: 'Actuation force — tactile', value: '250 – 400 g' },
      { parameter: 'Actuation life — non-tactile', value: 'Up to 5,000,000 cycles', added: true },
      { parameter: 'Actuation life — tactile', value: '1,000,000+ cycles', added: true },
      { parameter: 'Key travel', value: '0.05 – 0.15 mm non-tactile, 0.3 – 0.6 mm tactile', added: true },
      { parameter: 'Snap ratio (tactile)', value: '40 – 55%', added: true },
      { parameter: 'Minimum key pitch', value: '10 mm centre to centre', added: true },
    ],
  },
  {
    title: 'Environmental',
    rows: [
      { parameter: 'Operating temperature', value: '−35 °C to +90 °C' },
      { parameter: 'Storage temperature', value: '−40 °C to +85 °C', added: true },
      { parameter: 'Relative humidity', value: 'Up to 95% non-condensing', added: true },
      { parameter: 'Front panel sealing', value: 'To IP65 with a continuous perimeter seal', added: true, note: 'Rating applies to the front face only' },
      { parameter: 'Thermal shock', value: 'Survives cycling across the operating range' },
      { parameter: 'Chemical resistance', value: 'Isopropyl alcohol, mild detergents, common disinfectants', added: true },
    ],
  },
  {
    title: 'LED options',
    intro: 'LEDs can be embedded in the switch stack or mounted on the rigid board of a PCB-backed assembly.',
    rows: [
      { parameter: 'Current rating per LED', value: '2 – 25 mA' },
      { parameter: 'Voltage rating per LED', value: '2.0 – 2.8 V DC' },
      { parameter: 'Colours available', value: 'Red, green, yellow, orange, blue' },
      { parameter: 'Viewing angle', value: '180°' },
    ],
  },
  {
    title: 'Materials',
    rows: [
      { parameter: 'Overlay film', value: 'Polyester 0.175 – 0.25 mm, or polycarbonate', added: true },
      { parameter: 'Overlay finish', value: 'Matt, gloss, velvet, fine texture', added: true },
      { parameter: 'Circuit substrate', value: 'Polyester film, or FR4 for PCB-backed', added: true },
      { parameter: 'Conductor', value: 'Screen-printed silver conductive ink', added: true },
      { parameter: 'Adhesive', value: '3M 467MP / 468MP acrylic transfer', added: true },
      { parameter: 'Contact finish (PCB)', value: 'Hard gold over nickel, or printed carbon', added: true },
    ],
  },
];

export const switchOptions = [
  {
    name: 'Metal dome',
    detail: 'Stainless steel domes in 4-leg or round formats, 250–400 g. Positive snap, 1 million+ cycles.',
  },
  {
    name: 'Polyester dome',
    detail: 'A formed dome in the circuit film. Softer feedback than steel, at lower cost and with longer life.',
  },
  {
    name: 'Feather-touch non-tactile',
    detail: 'No dome at all. The lightest actuation force and the longest life of any construction we build.',
  },
];

export const connectorSystems = [
  {
    name: 'Flextail',
    detail: 'The printed tail runs directly into an FFC or ZIF socket on your board. Lowest cost, lowest profile.',
  },
  {
    name: 'Crimpflex',
    detail: 'A crimped pin header applied to the tail, mating with a standard housing. Field-serviceable.',
  },
  {
    name: 'Male solder tab',
    detail: 'Tinned tabs for direct soldering where a connector would be another failure point.',
  },
];

/** What we need on an enquiry to quote without a back-and-forth. */
export const rfqChecklist = [
  'Panel outline dimensions, and the key layout — a PDF, DXF or STEP drawing is ideal',
  'Number of keys, and which of them need tactile feedback',
  'Whether LEDs or a display window are required, and where',
  'Connector type and tail exit position',
  'Colours: Pantone or RAL references, or a physical sample to match',
  'Environment: temperature range, sealing requirement, any chemicals present',
  'Annual quantity and the quantity for the first order',
];
