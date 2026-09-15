/**
 * Industries served.
 *
 * The old page listed ten industry names as two bullet lists and 33 words of
 * copy. Each entry here says what the sector actually demands of a keypad and
 * which construction answers it, so the page is worth landing on from a search
 * like "membrane keypad for medical equipment".
 */

export interface Industry {
  name: string;
  /** What this sector asks of a front panel that others do not. */
  demand: string;
  /** How that requirement is met. */
  answer: string;
  /** Slug of the product usually specified here. */
  typical: string;
  typicalLabel: string;
}

export const industries: Industry[] = [
  {
    name: 'Medical equipment',
    demand:
      'Panels are wiped down between patients, often many times a day, with alcohol and disinfectants that destroy printed labels and attack unsealed seams.',
    answer:
      'Sub-surface printing puts the legend under the film where cleaning agents cannot reach it, and a continuous perimeter seal keeps fluid out of the stack entirely.',
    typical: 'non-tactile-membrane-keypad',
    typicalLabel: 'Non-tactile keypads',
  },
  {
    name: 'Industrial control',
    demand:
      'Operators key while watching a process rather than the panel, frequently wearing gloves, in environments with dust, oil and vibration.',
    answer:
      'A stainless dome gives a snap that is felt through a glove, in a stack that is sealed against the surrounding environment.',
    typical: 'tactile-membrane-keypad',
    typicalLabel: 'Tactile keypads',
  },
  {
    name: 'Testing & measuring equipment',
    demand:
      'Instrument fronts carry dense legends, fine symbols and display windows, and are expected to stay legible for the working life of the instrument.',
    answer:
      'Screen-printed overlays hold fine detail, and tinted or anti-glare windows raise display contrast under bench lighting.',
    typical: 'graphic-overlays',
    typicalLabel: 'Graphic overlays',
  },
  {
    name: 'Automotive electronics',
    demand:
      'Assemblies face wide temperature swings, constant vibration, and must be compact enough for a dashboard or console.',
    answer:
      'A rigid PCB-backed assembly survives vibration better than a flexible stack, and the circuit is rated from −35 °C to +90 °C.',
    typical: 'pcb-backed-keypad',
    typicalLabel: 'PCB-backed keypads',
  },
  {
    name: 'Access control & security',
    demand:
      'Keypads are mounted outdoors or in unsupervised locations, used constantly, and must resist both weather and deliberate abuse.',
    answer:
      'A sealed non-tactile stack with no moving parts has nothing to force and nothing to wear, and takes five million actuations.',
    typical: 'non-tactile-membrane-keypad',
    typicalLabel: 'Non-tactile keypads',
  },
  {
    name: 'Telecommunications',
    demand:
      'Rack and cabinet equipment needs compact, low-profile interfaces with clear status indication in poorly lit rooms.',
    answer:
      'Embedded LEDs with a 180° viewing angle, read through dead-front windows that stay blank until lit.',
    typical: 'pcb-backed-keypad',
    typicalLabel: 'PCB-backed keypads',
  },
  {
    name: 'Aviation & aerospace',
    demand:
      'Panels must be readable in direct sunlight and in darkness, and hold their finish and legends over long service intervals.',
    answer:
      'Anti-glare hardcoats for sunlight, backlighting for night operation, and sub-surface legends that cannot wear off.',
    typical: 'graphic-overlays',
    typicalLabel: 'Graphic overlays',
  },
  {
    name: 'Automation',
    demand:
      'Machine HMIs are operated thousands of times per shift and cannot be taken out of service for a keypad failure.',
    answer:
      'Domes soften gradually rather than failing suddenly, so a panel signals its own end of life well before it stops working.',
    typical: 'tactile-membrane-keypad',
    typicalLabel: 'Tactile keypads',
  },
  {
    name: 'Vending & kiosks',
    demand:
      'Public-facing fascias take heavy, careless use and carry branding that has to survive it.',
    answer:
      'Embossed keys locate the finger without looking, and hardcoated polyester resists scratching and repeated cleaning.',
    typical: 'embossed-membrane-keypad',
    typicalLabel: 'Embossed keypads',
  },
];
