import proeftuinImg from "@/assets/proeftuin.jpg.asset.json";
import chopperImg from "@/assets/activity-chopper.jpg.asset.json";
import autoImg from "@/assets/activity-auto.jpg.asset.json";

export type Arrangement = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  includes: string[];
  options?: string[];
  description: string;
  image: string;
  accent: "teal" | "coral" | "pink";
};

export const arrangementen: Arrangement[] = [
  {
    slug: "tour-en-bbq",
    name: "Tour & BBQ",
    tagline: "Challenge op de Veluwe + Italiaanse BBQ",
    price: "v.a. €30 p.p. (BBQ, excl. challenge)",
    includes: [
      "Keuze uit Chopper, Auto of Wandel Compass Challenge",
      "BBQ-buffet bij De ProefTuin",
      "Goed gevulde salades, gemarineerde krieltjes, vers brood en sauzen",
      "Ready-to-use kolen BBQ",
    ],
    options: [
      "Standaard BBQ €30 · Medium €35 · Luxe €40",
      "Luxe vispakket €40 · Surf & Turf €37,50",
      "Kinderpakket €15",
      "Zelf bbq'en of master chef inhuren",
    ],
    description:
      "Het uitje voor echte fijnproevers. Eerst de Veluwe veroveren met een challenge, daarna gezellig aanschuiven voor een uitgebreide BBQ bij De ProefTuin. Kies zelf het BBQ-pakket dat bij je groep past — van Standaard tot Luxe vis of Surf & Turf. Zelf bbq'en kan, maar je kunt ook een master chef inhuren.",
    image: chopperImg.url,
    accent: "teal",
  },
  {
    slug: "tour-en-pizza-buffet",
    name: "Tour & Pizza Buffet",
    tagline: "Challenge + onbeperkt pizza uit de houtoven",
    price: "Op aanvraag — offerte op maat",
    includes: [
      "Keuze uit Chopper, Auto of Wandel Compass Challenge",
      "Vers vegetarisch soepje vooraf",
      "Onbeperkt pizza's uit de houtoven (vlees, vis of vegetarisch)",
      "Focaccia, bruchetta en rijke salades",
    ],
    options: [
      "Trots op een 4e plek NK Pizzabakken 2025",
      "Pizza naar wens bij te bestellen",
      "Drankafkoop optioneel (3 uur €22,50 p.p.)",
    ],
    description:
      "Pizza: dat lust bijna iedereen. De ProefTuin staat bekend om zijn vers gebakken pizza's uit de authentieke houtoven — niet voor niks behaalden ze een 4e plek op het NK Pizzabakken 2025. Combineer een challenge over de Veluwe met onbeperkt pizza, salades en heerlijke voorgerechten.",
    image: proeftuinImg.url,
    accent: "coral",
  },
  {
    slug: "lunch-challenge-en-borrel",
    name: "Lunch, Challenge & Borrel",
    tagline: "Italiaanse lunch · actief uitje · gezellige borrel",
    price: "v.a. €26,50 p.p. (lunch, excl. challenge & borrel)",
    includes: [
      "Italiaanse lunch met huisgemaakte broodjes (vlees, vis, vegetarisch)",
      "Vers gebakken croissants, fruit, salades en soep",
      "Keuze uit Chopper, Auto of Wandel Compass Challenge",
      "Borrelafkoop bij terugkomst (optioneel)",
    ],
    options: [
      "Drankafkoop lunch (2 uur): €11,50 p.p.",
      "Borrelafkoop 3 uur: €22,50 p.p. (extra uur €5 p.p.)",
      "Kindertarief lunch (4–12 jr): €15 p.p.",
    ],
    description:
      "Perfect voor een complete dag uit. Start gezellig met een uitgebreide Italiaanse lunch — precies zoals de Italianen het doen. Daarna actief de Veluwe in met een challenge naar keuze. En bij terugkomst nog even napraten onder het genot van een drankje op het Veluwse terras.",
    image: autoImg.url,
    accent: "pink",
  },
];

export function getArrangement(slug: string) {
  return arrangementen.find((a) => a.slug === slug);
}
