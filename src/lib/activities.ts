import chopperImg from "@/assets/activity-chopper.jpg.asset.json";
import autoImg from "@/assets/activity-auto.jpg.asset.json";
import autoInCar from "@/assets/auto-incar.jpg.asset.json";
import autoLaan from "@/assets/auto-laan.jpg.asset.json";
import wandelImg from "@/assets/activity-wandel.jpg.asset.json";
import wandelBospad from "@/assets/wandel-bospad.jpg.asset.json";

export type Activity = {
  slug: string;
  name: string;
  short: string;
  metaLine: string;
  price: string;
  priceLabel: string;
  showPrice: boolean;
  duration: string;
  groupSize: string;
  description: string;
  highlights: string[];
  practical: { label: string; value: string }[];
  image: string;
  gallery?: string[];
  shadowColor: string;
  badgeBg: string;
  badgeText: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
};

export const activities: Activity[] = [
  {
    slug: "chopper-compass-challenge",
    name: "Chopper Compass Challenge",
    short:
      "Scheur stilletjes over de Veluwe met onze stoere E-choppers en navigeer met het kompas in de app.",
    metaLine: "2–50 personen · 2,5 uur · Lunchpakket +€15 p.p.",
    price: "€41,50",
    priceLabel: "p.p.",
    showPrice: true,
    duration: "2,5 uur",
    groupSize: "2–50 personen",
    description:
      "De ultieme manier om de Veluwe te ontdekken. Stap op een stoere elektrische chopper en ga met je team op zoek naar verborgen checkpoints. Met een kompas en een kaart in de app vind je je weg door bossen, heide en dorpjes. Geruisloos, krachtig en gegarandeerd één groot avontuur. Teambuilding gegarandeerd, want er zitten diverse leuke opdrachten in de route verwerkt.",
    highlights: [
      "Stoere elektrische choppers",
      "Navigatie met kompas in de app",
      "Leuke teamopdrachten onderweg",
      "Inclusief instructie en helm",
    ],
    practical: [
      { label: "Start", value: "11:30 of 15:00 uur" },
      { label: "Duur", value: "± 2,5 uur" },
      { label: "Groep", value: "2–50 personen" },
      { label: "Vereist", value: "Rijbewijs verplicht" },
      { label: "Extra", value: "Lunchpakket +€15 p.p." },
    ],
    image: chopperImg.url,
    shadowColor: "#1A1A1A",
    badgeBg: "bg-teal",
    badgeText: "text-cream",
    primaryCta: {
      label: "Direct boeken",
      href: "https://eurowheelz.eu/nl/locaties/de-proeftuin-hoenderloo/",
      external: true,
    },
    secondaryCta: { label: "Of als arrangement →", href: "/arrangementen" },
  },
  {
    slug: "auto-compass-challenge",
    name: "Auto Compass Challenge",
    short:
      "Lekker touren met een autopuzzeltocht over de Veluwe. Een echte rally langs de leukste hotspots.",
    metaLine: "2–100+ personen · 2,5 uur · Eigen auto of bij te huren",
    price: "€29,50",
    priceLabel: "per auto",
    showPrice: false,
    duration: "3 tot 4 uur",
    groupSize: "2–100+ personen",
    description:
      "Een echte rally over de Veluwe! Ontdek de meest verrassende hotspots, leuke restaurants en wees er zeker van dat het uitje altijd kan doorgaan — ook met regen. Een route van ca. 60 kilometer via de mooiste weggetjes, langs de leukste plekken. Mogelijk met je eigen auto of huur er één bij. Voor groepen maken we de route op maat als rally, en we kunnen het uitbreiden met finishboog, rally master op locatie, prijsuitreiking en zelfs oldtimer kevers.",
    highlights: [
      "Rally over de Veluwe op maat",
      "Route ca. 60 km langs hotspots",
      "Eigen auto of bij te huren",
      "Uit te breiden met finishboog, rally master & prijsuitreiking",
      "Oldtimer kevers boekbaar",
      "Altijd doorgang — ook bij regen",
    ],
    practical: [
      { label: "Duur", value: "3 tot 4 uur" },
      { label: "Groep", value: "2–100+ personen" },
      { label: "Route", value: "± 60 km" },
      { label: "Auto", value: "Eigen of bij te huren" },
      { label: "Extra", value: "Lunchpakket +€15 p.p." },
    ],
    image: autoImg.url,
    gallery: [autoInCar.url, autoLaan.url],
    shadowColor: "#E84A8A",
    badgeBg: "bg-coral",
    badgeText: "text-white",
    primaryCta: { label: "Offerte aanvragen", href: "/contact" },
  },
  {
    slug: "wandel-compass-challenge",
    name: "Wandel Compass Challenge",
    short:
      "De moderne versie van de gps-wandeltocht. Navigeer met het kompas en ontdek de coördinaten.",
    metaLine: "2–100+ personen · 2,5 uur · 7–9 km",
    price: "€9,50",
    priceLabel: "p.p.",
    showPrice: true,
    duration: "2,5 uur",
    groupSize: "2–100+ personen",
    description:
      "De moderne versie van de gps-wandeltocht! Ga de natuur in, navigeer met het kompas en ontdek de coördinaten. Maak leuke opdrachten onderweg en leer meer over de omgeving. De Wandel Compass Challenge is ca. 7 tot 9 kilometer lang en een combinatie van bospaden en verharde paden. Leuk om te combineren met een andere challenge!",
    highlights: [
      "Navigatie met kompas in de app",
      "7 tot 9 km natuurroute",
      "Mix bospaden en verharde paden",
      "Leerzame opdrachten onderweg",
      "Combineer met chopper of auto",
    ],
    practical: [
      { label: "Duur", value: "± 2,5 uur" },
      { label: "Afstand", value: "7 – 9 km" },
      { label: "Groep", value: "2–100+ personen" },
      { label: "Terrein", value: "Bospaden & verharde paden" },
    ],
    image: wandelImg.url,
    gallery: [wandelBospad.url],
    shadowColor: "#E26A3D",
    badgeBg: "bg-pink",
    badgeText: "text-white",
    primaryCta: { label: "Boek deze challenge", href: "/contact" },
    secondaryCta: { label: "Of als arrangement →", href: "/arrangementen" },
  },
];

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug);
}
