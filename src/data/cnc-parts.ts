/**
 * Replacement key sheets, soft keys and overlays for CNC machine panels.
 *
 * Source: the Wironic Harness Corporation catalogue on IndiaMART, used with
 * permission. Photos are that catalogue's own, one folder per part in
 * src/assets/cnc/. What was changed on the way in:
 *
 *   - Listings that share a part number are merged into one part
 *     (0524#AM, 0524#AU, 0628#E, 0646#B, 0647#M, 0033#KN).
 *   - Certificates, banners and brochure pages that sat in the photo galleries
 *     are left out; only photographs of parts are kept.
 *   - Specs are published only where the listing states them plainly and they
 *     do not contradict each other. Left out on purpose: single-figure
 *     "150 °C" operating temperatures (not credible for polyester and acrylic
 *     adhesive), USB / resistive-touch / matrix fields on key sheets, and
 *     voltage ratings on sheets that are overlays with no circuit of their own.
 *     Where two merged listings disagree, the narrower figure is used.
 *   - The listings give "Brand: Fanuc". These are not FANUC parts, so the site
 *     says what they replace instead, and carries a trademark notice.
 *
 * Prices are the listed per-piece prices, in rupees.
 */
import type { ImageMetadata } from 'astro';

export type CncGroup = 'key-sheet' | 'soft-key' | 'overlay';

export interface CncPart {
  slug: string;
  /** Maker of the machine control the part fits. */
  system: 'FANUC' | 'Doosan' | 'Hwacheon';
  /** OEM part number in FANUC's own format, or null when the listing gives none. */
  partNumber: string | null;
  /** What the part is, without the brand: "key sheet", "7-key soft key strip". */
  kind: string;
  group: CncGroup;
  /** One line for cards. */
  summary: string;
  /** Listed price per piece, INR. */
  price: number;
  /** A second listing of the same part carried a higher price. */
  priceFrom?: boolean;
  /** Minimum order quantity, pieces. */
  moq: number;
  specs: { label: string; value: string }[];
}

const POLY = { label: 'Overlay material', value: 'Polyester' };

export const cncParts: CncPart[] = [
  // ── FANUC key sheets ──
  {
    slug: 'a98l-0001-0298t', system: 'FANUC', partNumber: 'A98L-0001-0298#T', kind: 'MDI key sheet', group: 'key-sheet',
    summary: 'Series 0i MDI key sheet with a 44-key alphanumeric layout.',
    price: 950, moq: 25,
    specs: [
      { label: 'Keys', value: '44, alphanumeric' },
      { label: 'Construction', value: 'Tactile' },
      { label: 'Axes', value: '2-axis' },
      { label: 'Size', value: '132 × 165 mm' },
      { label: 'Thickness', value: '2 mm' },
      { label: 'Mounting', value: 'Adhesive backed' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 70 °C' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0481m', system: 'FANUC', partNumber: 'A98L-0001-0481#M', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed key sheet for CNC and VMC controls.',
    price: 1550, moq: 50,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0481t', system: 'FANUC', partNumber: 'A98L-0001-0481#T', kind: 'key sheet', group: 'key-sheet',
    summary: 'Tactile key sheet for CNC and VMC controls.',
    price: 1550, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0482m', system: 'FANUC', partNumber: 'A98L-0001-0482#M', kind: 'key sheet', group: 'key-sheet',
    summary: '40-key sheet for 2-axis controls, 170 × 140 mm.',
    price: 950, moq: 25,
    specs: [
      { label: 'Keys', value: '40' },
      { label: 'Construction', value: 'Tactile' },
      { label: 'Axes', value: '2-axis' },
      { label: 'Size', value: '170 × 140 mm' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0482t', system: 'FANUC', partNumber: 'A98L-0001-0482#T', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed key sheet for turning centres and VMCs.',
    price: 950, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Machine', value: 'CNC turning and VMC' },
      { label: 'Operating temperature', value: '−20 to 70 °C' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0524a', system: 'FANUC', partNumber: 'A98L-0001-0524#A', kind: 'key sheet', group: 'key-sheet',
    summary: 'Tactile key sheet for VMCs.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Machine', value: 'VMC' },
      POLY,
    ],
  },
  {
    // VERIFY — the second merged listing is titled 0524#AM but its model field reads 0524#B.
    slug: 'a98l-0001-0524am', system: 'FANUC', partNumber: 'A98L-0001-0524#AM', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed 2-axis key sheet, 245 × 154 mm.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Axes', value: '2-axis' },
      { label: 'Size', value: '245 × 154 mm' },
      { label: 'Operating temperature', value: '−20 to 80 °C' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    // The "CNC Machine Keyboard" listing at the same price is filed under this
    // part number; only its main photo is used, the rest show other sheets.
    slug: 'a98l-0001-0524au', system: 'FANUC', partNumber: 'A98L-0001-0524#AU', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed key sheet for CNC and VMC controls.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Operating temperature', value: '−20 to 80 °C' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0524b', system: 'FANUC', partNumber: 'A98L-0001-0524#B', kind: 'key sheet', group: 'key-sheet',
    summary: 'Panel-mount IP65 key sheet on 3M adhesive.',
    price: 2800, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Mounting', value: 'Panel mount, 3M adhesive' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: 'Up to 80 °C' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0555a', system: 'FANUC', partNumber: 'A98L-0001-0555#A', kind: 'key sheet', group: 'key-sheet',
    summary: 'Tactile key sheet for CNC and VMC controls.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0568m', system: 'FANUC', partNumber: 'A98L-0001-0568#M', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed polyester key sheet.',
    price: 1550, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0568t', system: 'FANUC', partNumber: 'A98L-0001-0568#T', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed, panel-mount IP65 key sheet.',
    price: 1550, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Mounting', value: 'Panel mount' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Machine', value: 'CNC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0628e', system: 'FANUC', partNumber: 'A98L-0001-0628#E', kind: 'control panel key sheet', group: 'key-sheet',
    summary: '52-key control panel sheet for 4-axis machines.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Keys', value: '52' },
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Axes', value: '4-axis' },
      { label: 'Size', value: '330 × 107 mm' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 85 °C' },
      { label: 'Machine', value: 'CNC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0633m', system: 'FANUC', partNumber: 'A98L-0001-0633#M', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed key sheet for CNC and VMC controls.',
    price: 4000, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0633t', system: 'FANUC', partNumber: 'A98L-0001-0633#T', kind: 'key sheet', group: 'key-sheet',
    summary: 'IP65 key sheet, −20 to 70 °C.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 70 °C' },
      POLY,
    ],
  },
  {
    // VERIFY — listed as 0634 A in the title but 0634#B in the model field and photo name.
    slug: 'a98l-0001-0634a', system: 'FANUC', partNumber: 'A98L-0001-0634#A', kind: 'key sheet', group: 'key-sheet',
    summary: 'Key sheet for 4-axis CNC and VMC controls, 218 × 230 mm.',
    price: 4500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Axes', value: '4-axis' },
      { label: 'Size', value: '218 × 230 mm' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0646b', system: 'FANUC', partNumber: 'A98L-0001-0646#B', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed IP65 key sheet, −20 to 70 °C.',
    price: 3500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 70 °C' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0646d', system: 'FANUC', partNumber: 'A98L-0001-0646#D', kind: 'key sheet', group: 'key-sheet',
    summary: 'IP65 key sheet, −20 to 70 °C.',
    price: 4500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 70 °C' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0001-0647m', system: 'FANUC', partNumber: 'A98L-0001-0647#M', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed, adhesive-backed IP65 key sheet.',
    price: 1200, priceFrom: true, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Mounting', value: 'Adhesive backed' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 70 °C' },
      POLY,
    ],
  },
  {
    slug: 'a98l-0005-0033kn', system: 'FANUC', partNumber: 'A98L-0005-0033#KN', kind: 'operator panel overlay', group: 'key-sheet',
    summary: 'Embossed machine operator panel overlay on 3M adhesive.',
    price: 4000, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Mounting', value: '3M adhesive backed' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 80 °C' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: '518mr', system: 'FANUC', partNumber: '518#MR', kind: 'key sheet', group: 'key-sheet',
    summary: 'Embossed 33-key sheet for 3-axis controls.',
    price: 950, moq: 25,
    specs: [
      { label: 'Keys', value: '33' },
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Axes', value: '3-axis' },
      { label: 'Size', value: '141 × 174 mm' },
      { label: 'Machine', value: 'CNC' },
      POLY,
    ],
  },
  {
    slug: '518t', system: 'FANUC', partNumber: '518#T', kind: 'key sheet', group: 'key-sheet',
    summary: 'Key sheet for turning centres, rated to a million operations.',
    price: 950, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Thickness', value: '1 mm' },
      { label: 'Rated life', value: '1,000,000 operations' },
      { label: 'Operating temperature', value: '−20 to 80 °C' },
      { label: 'Machine', value: 'CNC turning centre' },
      POLY,
    ],
  },
  {
    slug: 'fanuc-vmc-control-panel-overlay', system: 'FANUC', partNumber: null, kind: 'VMC control panel overlay', group: 'key-sheet',
    summary: 'Embossed 4-axis VMC control panel overlay, 400 micron.',
    price: 3000, moq: 25,
    specs: [
      { label: 'Construction', value: 'Embossed, tactile' },
      { label: 'Axes', value: '4-axis' },
      { label: 'Sheet thickness', value: '400 micron' },
      { label: 'Mounting', value: 'Adhesive backed' },
      { label: 'Operating temperature', value: '−20 to 80 °C' },
      { label: 'Machine', value: 'VMC' },
      POLY,
    ],
  },
  {
    slug: 'fanuc-key-sheet-controller', system: 'FANUC', partNumber: null, kind: 'key sheet circuit', group: 'key-sheet',
    summary: 'Flexible membrane circuit behind a FANUC key sheet, 235 × 110 mm.',
    price: 4000, moq: 25,
    specs: [
      { label: 'Construction', value: 'Flexible circuit, non-tactile' },
      { label: 'Size', value: '235 × 110 mm' },
      { label: 'Machine', value: 'CNC and VMC' },
    ],
  },

  // ── FANUC soft keys ──
  {
    slug: 'a98l-0005-0298m', system: 'FANUC', partNumber: 'A98L-0005-0298#M', kind: '7-key soft key', group: 'soft-key',
    summary: '7-key operator panel soft key with an FFC tail.',
    price: 950, moq: 25,
    specs: [
      { label: 'Keys', value: '7' },
      { label: 'Construction', value: 'Tactile' },
      { label: 'Actuation force', value: '250 gf' },
      { label: 'Rating', value: '5 V DC, 100 mA' },
      { label: 'Connector', value: 'FFC' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 85 °C' },
      POLY,
    ],
  },
  {
    slug: 'fanuc-7-key-soft-key-strip', system: 'FANUC', partNumber: null, kind: '7-key soft key strip', group: 'soft-key',
    summary: '7-key strip, 199 × 20.5 mm.',
    price: 850, moq: 25,
    specs: [
      { label: 'Keys', value: '7' },
      { label: 'Construction', value: 'Tactile' },
      { label: 'Size', value: '199 × 20.5 mm' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'fanuc-7-key-soft-key-metal-dome', system: 'FANUC', partNumber: null, kind: '7-key metal dome soft key', group: 'soft-key',
    summary: '7-key strip with metal domes and a female insertion connector.',
    price: 950, moq: 25,
    specs: [
      { label: 'Keys', value: '7' },
      { label: 'Construction', value: 'Metal dome, tactile' },
      { label: 'Actuation force', value: '250 gf' },
      { label: 'Rating', value: '5 V DC, 100 mA' },
      { label: 'Size', value: '192 × 21 mm' },
      { label: 'Connector', value: 'Female, insertion type' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 65 °C' },
      POLY,
    ],
  },
  {
    // The listing also gives 307 × 200 mm, which does not fit a 12-key strip; left out.
    slug: 'fanuc-12-key-soft-key-strip', system: 'FANUC', partNumber: null, kind: '12-key soft key strip', group: 'soft-key',
    summary: '12-key strip, 200 gf actuation.',
    price: 900, moq: 25,
    specs: [
      { label: 'Keys', value: '12' },
      { label: 'Construction', value: 'Tactile' },
      { label: 'Actuation force', value: '200 gf' },
      { label: 'Machine', value: 'CNC' },
      POLY,
    ],
  },

  // ── Doosan and Hwacheon ──
  {
    slug: 'doosan-cnc-machine-overlay', system: 'Doosan', partNumber: null, kind: 'CNC machine overlay', group: 'overlay',
    summary: 'Screen-printed matte overlay on 3M 467, 0.5 mm.',
    price: 5500, moq: 25,
    specs: [
      { label: 'Construction', value: 'Graphic overlay' },
      { label: 'Printing', value: 'Screen printed, matte finish' },
      { label: 'Sheet thickness', value: '0.5 mm' },
      { label: 'Adhesive', value: '3M 467' },
      { label: 'Axes', value: '3-axis' },
      { label: 'Machine', value: 'CNC and VMC' },
      POLY,
    ],
  },
  {
    slug: 'doosan-cnc-machine-keyboard', system: 'Doosan', partNumber: null, kind: 'CNC machine keyboard', group: 'overlay',
    summary: 'Panel-mount IP65 machine keyboard, 250 gf actuation.',
    price: 4000, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Actuation force', value: '250 gf' },
      { label: 'Rating', value: '12 V DC, 100 mA' },
      { label: 'Mounting', value: 'Panel mount' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Machine', value: 'CNC' },
      POLY,
    ],
  },
  {
    slug: 'hwacheon-cnc-machine-overlay', system: 'Hwacheon', partNumber: null, kind: 'CNC machine overlay', group: 'overlay',
    summary: 'IP65 overlay and key sheet, −20 to 85 °C.',
    price: 5000, moq: 25,
    specs: [
      { label: 'Construction', value: 'Tactile' },
      { label: 'Sealing', value: 'IP65' },
      { label: 'Operating temperature', value: '−20 to 85 °C' },
      POLY,
    ],
  },
];

export const cncGroups: { id: CncGroup; title: string; lede: string }[] = [
  {
    id: 'key-sheet',
    title: 'FANUC key sheets and panel overlays',
    lede: 'MDI and machine operator panel key sheets, listed by FANUC part number.',
  },
  {
    id: 'soft-key',
    title: 'FANUC soft keys',
    lede: 'The strips of soft keys that sit below the display.',
  },
  {
    id: 'overlay',
    title: 'Doosan and Hwacheon',
    lede: 'Operator panel overlays and keyboards for Doosan and Hwacheon machines.',
  },
];

/* Photos are read from src/assets/cnc/<slug>/, in filename order; 01 is the
   main photo. Adding a part means adding its folder. */
const photoFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/cnc/*/*.{jpg,png}', { eager: true });

export function cncPhotos(slug: string): ImageMetadata[] {
  return Object.entries(photoFiles)
    .filter(([file]) => file.includes(`/cnc/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default);
}

/** "A98L-0001-0481#M key sheet", or "7-key soft key strip" when there is no part number. */
export const cncTitle = (p: CncPart) => (p.partNumber ? `${p.partNumber} ${p.kind}` : `${p.system} ${p.kind}`);

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

export const cncTrademarkNote =
  'FANUC, Doosan and Hwacheon are trademarks of their respective owners. AFI Technologies is not affiliated with or endorsed by them. These are replacement parts made in India; manufacturer part numbers are given only to identify the panel each part fits.';
