/**
 * The homepage narrative.
 *
 * The old homepage had no argument in it — six rotating product banners and
 * 197 words. This is the case for the product, told in the order a buyer
 * actually comes to understand it:
 *
 *   1. you have already used one          (recognition)
 *   2. here is what is inside it          (the exploded stack — the centrepiece)
 *   3. here is why it outlives the machine(the one genuinely surprising fact)
 *   4. here is the only choice you must make (feedback)
 *   5. here is how yours gets made        (process, and what we need from you)
 *   6. here is who already relies on it   (proof)
 *   7. send us a drawing                  (act)
 *
 * Copy lives here rather than in the markup so it can be edited without
 * touching the scroll mechanics.
 */

export const opening = {
  eyebrow: 'AFI Technologies · Kondhwa, Pune',
  h1: 'The membrane keypad is the part everyone touches.',
  lede:
    'We have built roughly a million of them — for weighing terminals, dialysis pumps, crane load indicators and laboratory analysers. This is what is inside one, and why it usually outlives the machine around it.',
  scrollCue: 'Scroll to take one apart',
};

export const act1 = {
  chapter: 'Chapter one',
  heading: 'You used one today and never noticed it.',
  body: [
    'A keypad is the only component of a machine that every single operator puts a finger on, every shift, for years. It is also the only one nobody is ever asked to think about.',
    'That is the job. A front panel has done its work when it disappears — when the operator is watching the process, not the panel, and the key answers anyway.',
  ],
  pull: 'When it is right, nobody mentions it.',
};

/**
 * The exploded stack. Layer order is top (what a finger touches) to bottom
 * (what sticks to the equipment) — the same order as the non-tactile
 * construction in products.ts.
 */
export interface StoryLayer {
  n: string;
  name: string;
  spec: string;
  role: string;
  /** Drives the CSS treatment of the sheet. */
  tone: 'overlay' | 'adhesive' | 'circuit' | 'spacer' | 'circuit-lower' | 'backing';
}

export const stack = {
  chapter: 'Chapter two',
  heading: 'Six sheets, about a millimetre thick.',
  body:
    'A membrane keypad looks like a printed sticker. It is a laminated assembly, and every sheet in it is doing exactly one job.',
  layers: [
    {
      n: '01',
      name: 'Graphic overlay',
      spec: 'Polyester, 0.175–0.25 mm',
      role: 'The face. Your legends and branding, printed on its underside and protected by the film itself.',
      tone: 'overlay',
    },
    {
      n: '02',
      name: 'Overlay adhesive',
      spec: '3M 467MP / 468MP acrylic',
      role: 'Bonds the face to the circuit, and forms the perimeter seal that keeps fluid out of the stack.',
      tone: 'adhesive',
    },
    {
      n: '03',
      name: 'Upper circuit',
      spec: 'Silver conductive ink on polyester',
      role: 'The moving half of every switch. Screen-printed traces that come down to meet the pads below.',
      tone: 'circuit',
    },
    {
      n: '04',
      name: 'Spacer',
      spec: 'Die-cut polyester, adhesive both faces',
      role: 'Holds the two circuits apart. The hole under each key is the switch — its size sets the feel.',
      tone: 'spacer',
    },
    {
      n: '05',
      name: 'Lower circuit',
      spec: 'Silver ink, tail routed to your connector',
      role: 'The fixed half, and the tail that carries every key back to your board.',
      tone: 'circuit-lower',
    },
    {
      n: '06',
      name: 'Rear adhesive',
      spec: 'Die-cut to your panel outline',
      role: 'What holds the finished assembly onto the equipment, cut to the outline on your drawing.',
      tone: 'backing',
    },
  ] as StoryLayer[],
  closing:
    'Laminated in register, the whole assembly is between 0.6 mm and 1.6 mm thick — thinner than the panel it is stuck to.',
};

export const durability = {
  chapter: 'Chapter three',
  heading: 'Why the legend never wears off.',
  body: [
    'Find a machine that has been in service twenty years. The paint has gone chalky. The labels on the casing have curled at the corners. The keypad legend is perfect.',
    'That is not luck, and it is not better ink. It is where the ink is.',
  ],
  /** The mechanism, revealed as the reader passes it. */
  mechanism: {
    heading: 'The print is on the back of the film.',
    body:
      'Every overlay we produce is screen-printed in reverse, on the underside of the polyester, so the ink ends up sealed between the film and the adhesive. Nothing a finger, a cloth or a solvent touches ever reaches it. To scratch the legend away you would have to destroy the window above it first.',
    contrast: [
      { label: 'A printed label', detail: 'Ink on the outside. Scrubs, scratches and solvents take it off.' },
      { label: 'A sub-surface overlay', detail: 'Ink on the inside. The polyester is the thing that wears.' },
    ],
  },
  proof: [
    { figure: '5,000,000', unit: 'actuations', note: 'Non-tactile construction, with no moving part in the stack' },
    { figure: '−35 to +90', unit: '°C', note: 'Operating range, verified across thermal cycling' },
    { figure: 'IP65', unit: 'front face', note: 'With a continuous perimeter seal' },
  ],
};

export const choice = {
  chapter: 'Chapter four',
  heading: 'The one decision only you can make.',
  body:
    'Size, colours, windows, connector — those we work around. How the key should feel under a finger is the decision that changes the construction, and it is worth making before the drawing is finished.',
  options: [
    {
      slug: 'non-tactile-membrane-keypad',
      name: 'No click',
      product: 'Non-tactile',
      force: '125–250 g',
      life: 'Up to 5M cycles',
      when: 'The display, an LED or a beep confirms the press. Nothing in the stack moves, so nothing in it wears.',
    },
    {
      slug: 'tactile-membrane-keypad',
      name: 'A real snap',
      product: 'Tactile',
      force: '250–400 g',
      life: '1M+ cycles',
      when: 'A stainless dome collapses under the key. Felt through a glove, heard across a noisy floor.',
    },
    {
      slug: 'embossed-membrane-keypad',
      name: 'Found by touch',
      product: 'Embossed',
      force: '150–400 g',
      life: 'Up to 5M cycles',
      when: 'Keys raised out of the overlay itself. The finger locates them without looking, with no dome to fail.',
    },
  ],
  footnote: 'Not sure? Send the drawing and the environment it works in, and we will tell you which one fits.',
};

export const process = {
  chapter: 'Chapter five',
  heading: 'From your drawing to your panel.',
  body:
    'Every panel is bespoke, so the first step is always the same: someone here reads your drawing properly before anything is quoted.',
  steps: [
    { n: '01', name: 'Drawing review', detail: 'We check the layout, key pitch, tail exit and sealing against what the construction can actually do — and tell you where it will cause trouble.', tag: 'PDF · DXF · STEP' , art: 'drawing' },
    { n: '02', name: 'Artwork & tooling', detail: 'Legends are compensated for any embossing draw, colours matched to Pantone, RAL or your sample, and the cutting tools made.', tag: 'Pantone · RAL · sample' , art: 'artwork' },
    { n: '03', name: 'Screen printing', detail: 'Sub-surface printing onto polyester, colour by colour, with the hardcoat finish you specified.', tag: 'Polyester · hardcoat' , photo: 'screen-printing', alt: 'A gloved operator drawing a squeegee across a screen to print ink onto polyester film in the AFI Technologies workshop' },
    { n: '04', name: 'Circuit printing', detail: 'Silver conductive ink laid down on film, tail routed to your connector, LEDs placed where the drawing puts them.', tag: 'Silver conductive ink' , photo: 'circuit-print', alt: 'Close-up of printed silver conductive tracks on a flexible polyester circuit layer' },
    { n: '05', name: 'Die-cutting', detail: 'Overlay, spacer and adhesive cut to outline. The spacer holes under each key are what set the switch gap.', tag: 'Die-cut to outline' , art: 'diecut' },
    { n: '06', name: 'Lamination', detail: 'Layers aligned in register and bonded, domes seated on centre where the construction calls for them.', tag: 'Laminated in register' , art: 'laminate' },
    { n: '07', name: 'Test & despatch', detail: 'Continuity checked key by key against the schedule before anything leaves the building.', tag: 'Continuity tested' , photo: 'sealing-test', alt: 'A finished membrane keypad beaded with water during a front-face sealing check, the legends still crisp' },
  ],
};

export const proof = {
  chapter: 'Chapter six',
  heading: 'Where they end up.',
  body:
    'Nine sectors, each asking something slightly different of the same six sheets of polyester.',
};

export const closing = {
  chapter: 'Chapter seven',
  heading: 'Send us a drawing.',
  body:
    'A PDF, a DXF, a STEP file — or a photograph of the panel you are replacing. That is enough to start.',
};
