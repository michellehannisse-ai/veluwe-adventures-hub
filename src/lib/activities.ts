import chopperImg from "@/assets/activity-chopper.jpg";
import autoImg from "@/assets/activity-auto.jpg";
import wandelImg from "@/assets/activity-wandel.jpg";

export type Activity = {
  slug: string;
  name: string;
  short: string;
  price: string;
  priceLabel: string;
  duration: string;
  groupSize: string;
  description: string;
  highlights: string[];
  image: string;
  shadowColor: string; // tailwind utility hex
  badgeBg: string;
  badgeText: string;
};

export const activities: Activity[] = [
  {
    slug: "chopper-compass-challenge",
    name: "Chopper Compass Challenge",
    short: "Scheur stilletjes over de heide met onze stoere E-choppers en een kompas in de hand.",
    price: "€41,50",
    priceLabel: "p.p.",
    duration: "± 2 uur",
    groupSize: "Vanaf 2 personen",
    description:
      "De ultieme manier om de Veluwe te ontdekken. Stap op een stoere elektrische chopper en ga met je team op zoek naar verborgen checkpoints. Met alleen een kompas en een opdrachtenkaart vind je je weg door bossen, heide en zandverstuivingen. Geruisloos, krachtig en gegarandeerd één groot avontuur.",
    highlights: [
      "Stoere elektrische choppers",
      "GPS-vrije navigatie met kompas",
      "Uitdagende opdrachten onderweg",
      "Inclusief instructie en helm",
    ],
    image: chopperImg,
    shadowColor: "#1A1A1A",
    badgeBg: "bg-teal",
    badgeText: "text-cream",
  },
  {
    slug: "auto-compass-challenge",
    name: "Auto Compass Challenge",
    short: "Met je eigen auto op expeditie. Vind de checkpoints en kraak de Veluwe-code.",
    price: "€29,50",
    priceLabel: "per auto",
    duration: "± 2,5 uur",
    groupSize: "1 tot 5 personen per auto",
    description:
      "Pak de sleutels, verzamel je crew en ga op pad. Met de Auto Compass Challenge rij je in je eigen auto een prachtige route over de Veluwe. Onderweg los je puzzels op, beantwoord je vragen en verzamel je punten. Perfect voor families, vrienden of een gezellige teamuitje.",
    highlights: [
      "Rijden in je eigen auto",
      "Uitdagende route over de Veluwe",
      "Puzzels en opdrachten onderweg",
      "Geschikt voor alle leeftijden",
    ],
    image: autoImg,
    shadowColor: "#E84A8A",
    badgeBg: "bg-coral",
    badgeText: "text-white",
  },
  {
    slug: "wandel-compass-challenge",
    name: "Wandel Compass Challenge",
    short: "Rugzak om, kompas in de hand. Dwaal door de uitgestrekte heide en bossen.",
    price: "€9,50",
    priceLabel: "p.p.",
    duration: "± 2 uur",
    groupSize: "Vanaf 2 personen",
    description:
      "Terug naar de basis. Bij de Wandel Compass Challenge ontdek je de Veluwe op de mooiste manier: te voet. Gewapend met een kompas en een routekaart navigeer je door bossen en over de heide. Onderweg krijg je leuke opdrachten die de groep dichter bij elkaar brengen.",
    highlights: [
      "Echte navigatie met kompas",
      "Prachtige natuurroute",
      "Teamopdrachten onderweg",
      "Ideaal voor families & vrienden",
    ],
    image: wandelImg,
    shadowColor: "#E26A3D",
    badgeBg: "bg-pink",
    badgeText: "text-white",
  },
];

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug);
}
