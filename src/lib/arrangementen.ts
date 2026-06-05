import bbqImg from "@/assets/bbq-grill.jpg.asset.json";
import bbqBuiten from "@/assets/bbq-buiten.jpg.asset.json";
import pizzaImg from "@/assets/pizza-buffet.jpg.asset.json";
import lunchImg from "@/assets/lunch-croissants.jpg.asset.json";
import proeftuinGroep from "@/assets/proeftuin-groep.jpg.asset.json";
import proeftuinTafel from "@/assets/proeftuin-tafel.jpg.asset.json";

export type Arrangement = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  includes: string[];
  options?: string[];
  planning?: string[];
  description: string;
  image: string;
  gallery?: string[];
  accent: "teal" | "coral" | "pink";
};

const challengeNote =
  "Let op: de Compass Challenge zit niet in de arrangementsprijs en komt los bij. Combineer met een leuke challenge — chopper, auto of wandel.";

export const arrangementen: Arrangement[] = [
  {
    slug: "challenge-en-bbq",
    name: "Challenge & BBQ",
    tagline: "Combineer met een leuke challenge + Italiaanse BBQ bij De Proeftuin",
    price: "+ €30 p.p. (excl. drank)",
    includes: [
      "Goed gevulde salades, gemarineerde krieltjes, vers brood en sauzen",
      "Ready-to-use houtskool BBQ",
      "Ook in herfst & winter mogelijk met vuurschalen en safaritent",
    ],
    options: [
      "Standaard BBQ €30 · Medium €35 · Luxe €40",
      "Luxe vispakket €40 · Surf & Turf €37,50",
      "Kinderpakket €15",
      "Drank afkoop 3 uur €22,50 p.p. (extra uur €5 p.p., tot 18 jr €12,50 p.p.)",
    ],
    planning: [
      "15:00 – 17:30  Chopper of Wandel Compass Challenge",
      "of 14:30 – 17:30  Auto Compass Challenge",
      "17:30 – 20:00  BBQ bij De Proeftuin",
    ],
    description:
      "BBQ'en met een groep is altijd een goed idee. De mediterrane BBQ bij De Proeftuin geeft hier een verrassende invulling aan met smaakvolle bereidingen van vis, vlees en groenten, aangevuld met ciabatta, focaccia's, verse salades en sauzen. Er wordt zelf gebarbecued op houtskool, zodat iedereen kan genieten op z'n eigen tempo.\n\nOok in de herfst en winter is barbecueën mogelijk. Met vuurschalen en een gezellige safaritent wordt het een warme en sfeervolle ervaring.\n\n" +
      challengeNote,
    image: bbqImg.url,
    gallery: [bbqBuiten.url],
    accent: "teal",
  },
  {
    slug: "challenge-en-pizza-buffet",
    name: "Challenge & Pizza buffet",
    tagline: "Combineer met een leuke challenge + heerlijke pizza's uit de houtoven",
    price: "+ €27,50 p.p. (excl. drank)",
    includes: [
      "Vers vegetarisch soepje vooraf",
      "Onbeperkt pizza uit de houtgestookte oven (vlees, vis of vegetarisch)",
      "Verschillende salades",
      "Shared dining stijl — gezellig samen delen",
    ],
    options: [
      "Kinderoptie pizza proeverij (4 t/m 12 jaar): €15 p.p.",
      "Drank afkoop 3 uur €22,50 p.p. (extra uur €5 p.p., tot 18 jr €12,50 p.p.)",
      "Trots op een 4e plek NK Pizzabakken 2025 (Horecava Amsterdam)",
    ],
    planning: [
      "15:00 – 17:30  Chopper of Wandel Compass Challenge",
      "of 14:30 – 17:30  Auto Compass Challenge",
      "17:30 – 19:00  Pizza buffet bij De Proeftuin",
    ],
    description:
      "Ga eerst samen op pad tijdens een verrassende en interactieve activiteit en ontdek de omgeving op een speelse manier. In teams ga je de uitdaging aan, vol opdrachten, competitie en plezier.\n\nDaarna schuif je aan bij De Proeftuin voor een gezellige afsluiting met een pizza shared dining diner. Vers uit de houtgestookte oven worden verschillende pizza's geserveerd om samen te delen — de perfecte manier om na te praten en de dag smaakvol af te ronden.\n\nWist je dat De Proeftuin in 2025 een prachtige 4e plaats op het NK Pizzabakken behaalde, tijdens de Horecava in Amsterdam? Pizzabakker Kostaq behoort hiermee tot de absolute Nederlandse top!\n\n" +
      challengeNote,
    image: pizzaImg.url,
    gallery: [proeftuinTafel.url],
    accent: "coral",
  },
  {
    slug: "lunch-en-challenge",
    name: "Lunch & Challenge",
    tagline: "Italiaanse lunch vooraf + een leuke challenge op de Veluwe",
    price: "+ €26,50 p.p. (excl. drank en diner)",
    includes: [
      "Italiaanse lunch met huisgemaakte broodjes (vlees, vis, vegetarisch)",
      "Vers gebakken croissants, fruit, salades en soep",
      "Optionele drankafkoop bij de lunch",
    ],
    options: [
      "Drank afkoop lunch (2 uur): €11,50 p.p.",
      "Kindertarief lunch (4–12 jr): €15 p.p.",
    ],
    planning: [
      "12:00 – 13:30  Italiaanse lunch bij De Proeftuin",
      "14:00 – 16:30  Chopper of Wandel Compass Challenge",
      "of 13:30 – 17:00  Auto Compass Challenge",
      "Optioneel napraten met een hapje & drankje op het terras",
    ],
    description:
      "Begin de middag met een uitgebreide, late lunch. Net zoals de Italianen altijd doen, de belangrijkste maaltijd van de dag!\n\nNa de uitgebreide lunch begint de activiteit, lekker touren in de omgeving. Maak opdrachten, verken nieuwe hotspots & ga voor de hoogste score. Of geniet gewoon van de omgeving.\n\nNa de activiteit is het mogelijk om nog lekker te dineren bij de Proeftuin. Een hapje met een drankje, de dag bespreken. En dat in het zonnetje, op het verwarmde terras of het restaurant. Klinkt als een geslaagde middag, niet?\n\nLiever alleen een activiteit met lunch of juist alleen met diner boeken, dan is dat ook mogelijk.\n\n" +
      challengeNote,
    image: lunchImg.url,
    gallery: [proeftuinGroep.url],
    accent: "pink",
  },
];

export function getArrangement(slug: string) {
  return arrangementen.find((a) => a.slug === slug);
}
