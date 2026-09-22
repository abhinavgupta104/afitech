/**
 * Product catalogue.
 *
 * `slug` values reproduce the old WordPress URLs exactly so that no inbound
 * link or search ranking breaks in the migration. Do not rename them.
 *
 * The old product pages carried ~100 words each, which is why none of them
 * ranked. Each entry below is written to stand on its own as the answer to a
 * buyer's search — what the part is, how it is built, when to choose it, and
 * what to send us to get a price.
 */

import nonTactile from '../assets/products/non-tactile.png';
import tactile from '../assets/products/tactile.png';
import tacNoTac from '../assets/products/tac-no-tac.png';
import embossed from '../assets/products/embossed.png';
import graphicOverlay from '../assets/products/graphic-overlay.png';
import pcbBacked from '../assets/products/pcb-backed.png';
import type { ImageMetadata } from 'astro';

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  /** One line, used on cards and in the nav. */
  summary: string;
  /** 150–160 chars. Written per page — the old site auto-generated junk here. */
  metaDescription: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Opening paragraph on the product page. */
  intro: string;
  /** The case for choosing this construction over the alternatives. */
  chooseWhen: string[];
  /** Layer-by-layer build. */
  construction: { layer: string; detail: string }[];
  /** Distinguishing specs. Shared specs live in specs.ts. */
  keySpecs: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
  applications: string[];
  /** Sibling products worth comparing against. */
  compareWith: string[];
}

export const products: Product[] = [
  {
    slug: 'non-tactile-membrane-keypad',
    name: 'Non-Tactile Membrane Keypad / Switch',
    shortName: 'Non-tactile keypad',
    summary:
      'A flat, sealed switch with no moving parts — the most economical and longest-lasting construction we build.',
    metaDescription:
      'Non-tactile membrane keypads manufactured in Pune. Flat sealed construction, no moving parts, 1–5 million actuations. ISO 9001:2015. Send a drawing for a quote.',
    image: nonTactile,
    imageAlt:
      'Non-tactile membrane keypad with a printed polyester overlay and flexible tail connector',
    intro:
      'A non-tactile membrane keypad closes a circuit under finger pressure without any mechanical click. There is no metal dome and no moving part anywhere in the stack, which makes it the simplest, cheapest and most durable switch we manufacture. Feedback is given by the equipment instead of the key — an LED, a buzzer or a change on the display.',
    chooseWhen: [
      'The panel must be fully sealed against dust, water or cleaning chemicals',
      'You need the highest possible actuation life and the lowest unit cost',
      'The equipment already gives feedback through a display, LED or audible beep',
      'Panel height is tight — this is the thinnest construction available',
      'The keypad will be operated with gloves, where tactile feedback is felt poorly anyway',
    ],
    construction: [
      { layer: 'Graphic overlay', detail: 'Sub-surface printed polyester, 0.175–0.25 mm, matt or gloss hardcoat' },
      { layer: 'Overlay adhesive', detail: '3M 467MP or 468MP acrylic transfer adhesive' },
      { layer: 'Upper circuit', detail: 'Silver conductive ink screen-printed on polyester film' },
      { layer: 'Spacer', detail: 'Die-cut polyester with adhesive both faces, sets the switch gap' },
      { layer: 'Lower circuit', detail: 'Silver conductive ink with the tail routed to your connector' },
      { layer: 'Rear adhesive', detail: 'Applied to your panel specification' },
    ],
    keySpecs: [
      { label: 'Actuation force', value: '125–250 g' },
      { label: 'Tactile feedback', value: 'None' },
      { label: 'Actuation life', value: 'Up to 5 million cycles' },
      { label: 'Travel', value: '0.05–0.15 mm' },
      { label: 'Typical thickness', value: '0.6–1.2 mm' },
    ],
    sections: [
      {
        heading: 'Why non-tactile lasts longer than anything else',
        body: [
          'Every other membrane construction contains something that deforms on each press — a metal dome that snaps through, or an embossed bubble in the polyester. Deformation is what eventually fails. A non-tactile switch has none of it: two printed silver traces separated by a die-cut spacer, brought into contact by the pressure of a fingertip and separated again by the natural stiffness of the film.',
          'That is why non-tactile panels are specified where a keypad is pressed constantly for years — weighing terminals, process controllers, access panels — and why they are the usual choice when the keypad will outlive several generations of the electronics behind it.',
        ],
      },
      {
        heading: 'Sealing and chemical resistance',
        body: [
          'Because the stack is a continuous sheet of polyester with no perforations, a non-tactile keypad seals naturally. With a correctly specified overlay and a continuous perimeter adhesive, panels are routinely built to withstand washdown and splash exposure on the front face.',
          'Polyester overlays tolerate isopropyl alcohol, mild detergents and most common disinfectants, which is why this construction appears so often on medical and food-processing equipment. If the panel will see aggressive solvents, tell us which ones at enquiry stage — it changes the overlay material and the hardcoat.',
        ],
      },
      {
        heading: 'Designing the feedback in',
        body: [
          'The one thing a non-tactile keypad cannot do is tell the operator that the press registered. That job moves to the equipment. In practice this means an LED beside or behind the key, a short audible beep, or a visible change on the display within about 100 ms of the press.',
          'We can integrate LEDs directly into the switch stack, with the legend window printed so the light reads cleanly through the overlay. Current and voltage ratings for embedded LEDs are on the technical page.',
        ],
      },
    ],
    applications: [
      'Weighing and batching terminals',
      'Process and temperature controllers',
      'Medical diagnostic equipment',
      'Access control panels',
      'Test and measurement instruments',
    ],
    compareWith: ['tactile-membrane-keypad', 'embossed-membrane-keypad'],
  },

  {
    slug: 'tactile-membrane-keypad',
    name: 'Tactile Membrane Keypad / Switch',
    shortName: 'Tactile keypad',
    summary:
      'A stainless steel dome under each key gives a positive, audible snap the operator can feel through gloves.',
    metaDescription:
      'Tactile membrane keypads with stainless steel domes, manufactured in Pune. Positive snap feedback, 250–400 g actuation, 1 million+ cycles. ISO 9001:2015 certified.',
    image: tactile,
    imageAlt:
      'Tactile membrane keypad with embossed keys and a printed legend on a black polyester overlay',
    intro:
      'A tactile membrane keypad places a formed stainless steel dome beneath each key. Pressing the key collapses the dome through its snap point, which both closes the circuit and returns a sharp, unmistakable click to the fingertip. It is the construction to specify when the operator must know a key registered without looking at the screen.',
    chooseWhen: [
      'The operator is looking at the process, not at the panel, while keying',
      'The equipment is used with gloves — a dome is felt through nitrile or leather',
      'Data entry accuracy matters and double-presses are costly',
      'The panel is in a noisy environment where an audible beep would be lost',
      'You need the familiar feel of a mechanical keypad in a sealed assembly',
    ],
    construction: [
      { layer: 'Graphic overlay', detail: 'Sub-surface printed polyester with embossing over each dome' },
      { layer: 'Overlay adhesive', detail: '3M 467MP or 468MP acrylic transfer adhesive' },
      { layer: 'Dome retainer', detail: 'Polyester film holding each dome on centre over its contact' },
      { layer: 'Metal domes', detail: 'Stainless steel, 4-leg or round, selected for the force you specify' },
      { layer: 'Upper circuit', detail: 'Silver conductive ink on polyester' },
      { layer: 'Spacer', detail: 'Die-cut polyester, adhesive both faces' },
      { layer: 'Lower circuit', detail: 'Silver conductive ink with tail to your connector' },
    ],
    keySpecs: [
      { label: 'Actuation force', value: '250–400 g' },
      { label: 'Tactile feedback', value: 'Metal dome, positive snap' },
      { label: 'Actuation life', value: '1 million+ cycles' },
      { label: 'Snap ratio', value: '40–55%' },
      { label: 'Typical thickness', value: '1.0–1.6 mm' },
    ],
    sections: [
      {
        heading: 'Choosing the dome',
        body: [
          'Dome selection is the decision that sets the feel of the finished panel, and it is worth getting right at drawing stage rather than at first article. Force, diameter and snap ratio all trade against one another: a higher snap ratio gives a crisper click but shortens life, while a lower force is easier on the operator over a long shift but feels vague.',
          'We hold stainless domes across the 250–400 g range in both 4-leg and round formats. If you have a competitor panel whose feel you want matched, send us a sample — measuring an existing dome is far more reliable than describing it.',
        ],
      },
      {
        heading: 'Life and the failure mode',
        body: [
          'A stainless dome is rated to over a million actuations, which for most industrial panels is a decade of service. The dome is also the part that eventually defines the life of the assembly: the printed circuit underneath it will outlast it comfortably.',
          'Domes fail gradually rather than suddenly. The snap softens over hundreds of thousands of cycles before contact is ever lost, so an operator notices the feel changing long before the key stops working — which is usually the behaviour you want on equipment that cannot be taken out of service unexpectedly.',
        ],
      },
      {
        heading: 'Embossing over the dome',
        body: [
          'The overlay is normally embossed above each dome — a shallow raised pillow that locates the fingertip on the centre of the dome and stops the press landing off-axis, where it would foul the snap. Pillow embossing is the usual choice; rim embossing is available where the panel design calls for a flat key face inside a raised border.',
          'Where a keypad has a mix of frequently and rarely used keys, it is common to emboss only the frequent ones. That is a drawing decision and costs nothing extra at tooling.',
        ],
      },
    ],
    applications: [
      'Industrial control panels and HMIs',
      'Medical infusion and monitoring equipment',
      'Crane and load-moment indicators',
      'Fuel dispensing and metering equipment',
      'Laboratory analysers',
    ],
    compareWith: ['non-tactile-membrane-keypad', 'pcb-backed-keypad'],
  },

  {
    slug: 'embossed-membrane-keypad',
    name: 'Embossed Membrane Keypad',
    shortName: 'Embossed keypad',
    summary:
      'Keys raised out of the overlay itself — the operator finds them by touch, without a metal dome in the stack.',
    metaDescription:
      'Embossed membrane keypads manufactured in Pune. Pillow and rim embossing raises each key from the polyester overlay for tactile location. ISO 9001:2015 certified.',
    image: embossed,
    imageAlt:
      'Embossed membrane keypad with raised pillow keys and colour-coded legends on a blue overlay',
    intro:
      'Embossing forms the key shapes out of the polyester overlay itself, under heat and pressure in a matched tool. The result is a panel whose keys can be located by fingertip in the dark or without looking, while the switching underneath stays as simple and as sealed as a flat non-tactile stack.',
    chooseWhen: [
      'Operators need to find keys by touch but you do not want domes in the assembly',
      'The panel should look and feel more substantial than a flat printed overlay',
      'Certain keys must stand out physically — an emergency stop, an enter key',
      'You want tactile location without the cost and life limit of metal domes',
    ],
    construction: [
      { layer: 'Embossed overlay', detail: 'Polyester formed in a matched tool, 0.175–0.25 mm' },
      { layer: 'Overlay adhesive', detail: '3M 467MP or 468MP acrylic transfer adhesive' },
      { layer: 'Upper circuit', detail: 'Silver conductive ink on polyester' },
      { layer: 'Spacer', detail: 'Die-cut polyester, adhesive both faces' },
      { layer: 'Lower circuit', detail: 'Silver conductive ink with tail to your connector' },
      { layer: 'Optional domes', detail: 'Can be combined with steel domes where a snap is also wanted' },
    ],
    keySpecs: [
      { label: 'Emboss height', value: '0.4–1.2 mm typical' },
      { label: 'Emboss types', value: 'Pillow, rim, dome-shaped' },
      { label: 'Actuation force', value: '150–400 g depending on construction' },
      { label: 'Actuation life', value: 'Up to 5 million cycles without domes' },
      { label: 'Overlay material', value: 'Polyester (autotex or equivalent)' },
    ],
    sections: [
      {
        heading: 'Pillow, rim and the difference between them',
        body: [
          'Pillow embossing raises the whole key area into a gentle mound. It is the most common form, it locates the finger centrally, and it is the shape to use over a metal dome. Rim embossing instead raises a border around a flat key face, which keeps the printed legend on a flat plane — worth having where the legend is dense or where the key carries a barcode or fine symbol.',
          'Both can be combined on one panel. A typical instrument front has rim-embossed function keys around a pillow-embossed numeric block, so the operator can tell the two groups apart without looking.',
        ],
      },
      {
        heading: 'What embossing does to the print',
        body: [
          'Forming stretches the polyester, and any ink already on it stretches with it. That is managed at artwork stage by compensating the printed legend so it lands correctly after forming, which is why embossed panels need their tooling and artwork developed together rather than separately.',
          'It also sets a practical limit on emboss height for a given key size: too much draw and the legend distorts or the hardcoat crazes. We will tell you at drawing review if a requested height is going to cause trouble at the size you have specified.',
        ],
      },
      {
        heading: 'Embossed without domes',
        body: [
          'An embossed panel does not have to contain domes. Without them you keep the five-million-cycle life and the low cost of a non-tactile stack, and the operator still gets positional feedback — they can feel where the key is, just not a click when it operates.',
          'For a great many instruments that is exactly the right trade. Reserve domes for the panels where the operator genuinely cannot watch the display while keying.',
        ],
      },
    ],
    applications: [
      'Medical stimulators and therapy units',
      'Bench-top laboratory instruments',
      'Vending and kiosk fascias',
      'Industrial timers and counters',
      'Panels operated in low light',
    ],
    compareWith: ['tactile-membrane-keypad', 'graphic-overlays'],
  },

  {
    slug: 'graphic-overlays',
    name: 'Graphic Overlays',
    shortName: 'Graphic overlay',
    summary:
      'The printed front face of the panel — your branding, legends and windows, supplied as a part in its own right.',
    metaDescription:
      'Custom graphic overlays and front panel decals manufactured in Pune. Sub-surface printed polyester and polycarbonate, hardcoat finishes, display windows. ISO 9001:2015.',
    image: graphicOverlay,
    imageAlt:
      'Graphic overlay for an industrial controller, printed with legends, indicator windows and a product logo',
    intro:
      'A graphic overlay is the printed layer a user actually looks at and touches: your product name, the key legends, the indicator windows, the warning marks and the surface finish. We supply overlays as part of a complete keypad assembly, and equally as a standalone part where the switching is already handled by a PCB, a touchscreen or mechanical buttons behind the panel.',
    chooseWhen: [
      'You need a decorative and protective front face over existing switchgear',
      'The panel has a display or indicator that needs a clear or tinted window',
      'Product branding and regulatory marks must survive years of handling',
      'You are refreshing a product\'s appearance without changing its electronics',
    ],
    construction: [
      { layer: 'Base material', detail: 'Polyester 0.175–0.25 mm, or polycarbonate where rigidity matters' },
      { layer: 'Print', detail: 'Sub-surface screen printing — ink on the reverse, protected by the film' },
      { layer: 'Windows', detail: 'Clear, tinted or anti-glare areas left unprinted for displays and LEDs' },
      { layer: 'Hardcoat', detail: 'Matt, gloss, velvet or fine-texture, applied to the front face' },
      { layer: 'Adhesive', detail: '3M acrylic transfer adhesive, die-cut to your panel outline' },
    ],
    keySpecs: [
      { label: 'Materials', value: 'Polyester, polycarbonate' },
      { label: 'Print method', value: 'Sub-surface screen print' },
      { label: 'Finishes', value: 'Matt, gloss, velvet, fine texture' },
      { label: 'Colour matching', value: 'Pantone / RAL to sample' },
      { label: 'Windows', value: 'Clear, tinted, anti-glare, dead-front' },
    ],
    sections: [
      {
        heading: 'Sub-surface printing, and why it matters',
        body: [
          'Every overlay we produce is printed on the reverse of the film, so the ink sits between the polyester and the adhesive rather than on the exposed face. Nothing an operator touches ever contacts the ink. A legend printed this way cannot be scratched, scrubbed or solvent-wiped off, because reaching it means destroying the film above it.',
          'This is the single biggest difference between a manufactured overlay and a printed label, and it is why overlays on twenty-year-old equipment are usually still legible while the surrounding paint has gone.',
        ],
      },
      {
        heading: 'Windows and dead-front effects',
        body: [
          'Display windows can be left water-clear, tinted to raise contrast, or given an anti-glare texture for equipment used under bright light. A tinted window over an LED display improves perceived contrast substantially, and costs nothing extra.',
          'A dead-front window is printed with a translucent ink dense enough to hide the indicator when it is off, and thin enough to let it read clearly when lit. Done well, a warning legend appears out of a blank panel only when it is relevant. It needs the ink density matched to the specific LED brightness, so send us the LED part number with the artwork.',
        ],
      },
      {
        heading: 'Colour, finish and matching an existing product',
        body: [
          'We match to Pantone or RAL references, and to physical samples where a product family has drifted from its original specification over the years. Sending a current production part is always more reliable than sending a colour number, because it captures the finish as well as the hue.',
          'Surface finish changes the perceived colour more than most people expect — the same ink under a matt hardcoat and a gloss hardcoat will not look like the same grey. If the overlay has to sit beside an existing moulding or an extruded bezel, tell us and send the neighbouring part too.',
        ],
      },
    ],
    applications: [
      'Instrument and equipment front panels',
      'Control panel fascias over existing switchgear',
      'Appliance and consumer product faces',
      'Nameplates, rating plates and warning labels',
      'Touchscreen bezels and display surrounds',
    ],
    compareWith: ['embossed-membrane-keypad', 'non-tactile-membrane-keypad'],
  },

  {
    slug: 'pcb-backed-keypad',
    name: 'PCB-Backed Keypad',
    shortName: 'PCB-backed keypad',
    summary:
      'A membrane front face built directly onto a rigid printed circuit board, carrying components as well as switches.',
    metaDescription:
      'PCB-backed membrane keypads manufactured in Pune. Rigid FR4 construction with SMD components, LEDs and connectors integrated behind the overlay. ISO 9001:2015 certified.',
    image: pcbBacked,
    imageAlt:
      'PCB-backed keypad assembly showing the rigid circuit board beneath a printed membrane front face',
    intro:
      'A PCB-backed keypad replaces the flexible printed lower circuit with a rigid printed circuit board. The board carries the switch contacts, and can equally carry LEDs, resistors, a connector header, a microcontroller or anything else the panel needs — so the keypad arrives as a functioning sub-assembly rather than as a switch matrix to be wired into one.',
    chooseWhen: [
      'The panel needs components — LEDs, ICs, resistors — behind the keys',
      'The assembly must be rigid and self-supporting rather than flexible',
      'You want a board-to-board or pin header connection instead of a flex tail',
      'Backlighting needs to be dense or precisely positioned',
      'You are consolidating a keypad and a separate driver board into one part',
    ],
    construction: [
      { layer: 'Graphic overlay', detail: 'Sub-surface printed polyester, embossed if specified' },
      { layer: 'Overlay adhesive', detail: '3M acrylic transfer adhesive' },
      { layer: 'Dome retainer', detail: 'Polyester film locating each dome over its contact pad' },
      { layer: 'Metal domes', detail: 'Stainless steel, snapping onto gold or carbon-printed pads' },
      { layer: 'Rigid PCB', detail: 'FR4, single or double sided, with components populated as required' },
      { layer: 'Termination', detail: 'Pin header, FFC socket, board-to-board or flying lead' },
    ],
    keySpecs: [
      { label: 'Substrate', value: 'FR4, 1.0–1.6 mm' },
      { label: 'Contact finish', value: 'Gold plated or carbon over copper' },
      { label: 'Components', value: 'SMD and through-hole' },
      { label: 'Actuation force', value: '250–400 g, dome dependent' },
      { label: 'Termination', value: 'Header, FFC socket, board-to-board' },
    ],
    sections: [
      {
        heading: 'When the rigid board earns its cost',
        body: [
          'A PCB-backed panel costs more than a flexible one, and for a plain switch matrix it is not worth it. It becomes the right answer as soon as the panel has to do something more than switch: drive indicators, debounce in hardware, hold a microcontroller, or present a connector that a flex tail cannot.',
          'It is also the answer when the assembly must be rigid. A flexible keypad needs a flat supported surface behind it. A PCB-backed keypad supports itself, which simplifies the enclosure and removes a tolerance stack from the design.',
        ],
      },
      {
        heading: 'Contact finish and long-term reliability',
        body: [
          'Where a steel dome snaps onto a bare copper pad, the copper oxidises and contact resistance climbs over the years. We specify either hard gold plating over nickel on the contact pads, or a printed carbon layer over the copper, both of which give a stable contact surface for the life of the panel.',
          'Gold gives the lowest and most stable contact resistance and is the usual choice for low-voltage logic-level signals. Carbon is more economical and is entirely adequate for most applications. We will recommend one at drawing review based on the switching voltage and current you give us.',
        ],
      },
      {
        heading: 'Backlighting',
        body: [
          'Because components can be placed anywhere on the board, PCB-backed panels give the most control over backlighting. LEDs can be positioned per key rather than per zone, mixed in colour across one panel, and driven at whatever current the design calls for.',
          'Current and voltage ratings for the LEDs we fit as standard are on the technical page. If a specific colour temperature or a particular part number is required, send it with the enquiry — LED selection affects the overlay ink density and needs to be settled before artwork is finalised.',
        ],
      },
    ],
    applications: [
      'Handheld and portable instruments',
      'Backlit control panels',
      'Access control and security keypads',
      'Automotive and vehicle electronics',
      'Equipment consolidating keypad and driver electronics',
    ],
    compareWith: ['tactile-membrane-keypad', 'non-tactile-membrane-keypad'],
  },
];

/** Products shown in the main catalogue grid, in the order a buyer meets them. */
export const catalogue = products;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * The tac-no-tac variant appeared as its own homepage slide on the old site but
 * never had a page of its own. It is a variant of the tactile construction, so
 * it is documented on that page rather than given a thin page here.
 */
export const tacNoTacImage = tacNoTac;
