import arrangementenImg from "@/assets/arrangementen.jpg";
import proeftuinImg from "@/assets/proeftuin.jpg";

export type Arrangement = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  includes: string[];
  description: string;
  image: string;
  accent: "teal" | "coral" | "pink";
};

export const arrangementen: Arrangement[] = [
  {
    slug: "chopper-arrangement",
    name: "Chopper Arrangement",
    tagline: "Avontuur op twee wielen + Italiaans tafelen",
    price: "v.a. €67,50 p.p.",
    includes: [
      "Welkomstdrankje bij De ProefTuin",
      "Chopper Compass Challenge (± 2 uur)",
      "Italiaanse 3-gangen pizza- of pastakeuze",
      "Koffie of espresso na",
    ],
    description:
      "Het stoerste arrangement voor bedrijfsuitjes, vrijgezellenfeesten of een dagje uit met vrienden. Eerst de Veluwe veroveren op de E-chopper en daarna heerlijk natafelen bij De ProefTuin. Vanaf 8 personen samen te stellen.",
    image: arrangementenImg,
    accent: "teal",
  },
  {
    slug: "auto-arrangement",
    name: "Auto Arrangement",
    tagline: "Op expeditie en daarna aanschuiven",
    price: "v.a. €49,50 p.p.",
    includes: [
      "Welkomstdrankje bij De ProefTuin",
      "Auto Compass Challenge (± 2,5 uur)",
      "Italiaanse 3-gangen keuze",
      "Koffie of espresso na",
    ],
    description:
      "Perfect voor families, vriendengroepen of collega's. Met je eigen auto's vormen jullie teams en gaan de Veluwe verkennen. Na afloop schuiven jullie aan voor een heerlijke Italiaanse maaltijd bij De ProefTuin.",
    image: proeftuinImg,
    accent: "coral",
  },
  {
    slug: "wandel-arrangement",
    name: "Wandel Arrangement",
    tagline: "Wandelen, ontdekken en samen tafelen",
    price: "v.a. €34,50 p.p.",
    includes: [
      "Welkomstdrankje bij De ProefTuin",
      "Wandel Compass Challenge (± 2 uur)",
      "Italiaanse 3-gangen keuze",
      "Koffie of espresso na",
    ],
    description:
      "Het meest toegankelijke arrangement, voor alle leeftijden. Een mooie wandeling met kompas en opdrachten door de Veluwse natuur, gevolgd door een gezellig diner bij De ProefTuin.",
    image: arrangementenImg,
    accent: "pink",
  },
];

export function getArrangement(slug: string) {
  return arrangementen.find((a) => a.slug === slug);
}
