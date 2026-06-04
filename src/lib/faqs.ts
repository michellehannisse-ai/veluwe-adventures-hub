// Pas deze teksten gerust zelf aan — ze verschijnen direct op de site.

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "Waar starten de activiteiten?",
    a: "Alle challenges starten en eindigen bij De Proeftuin in Hoenderloo (De Krim 4, 7351 BL). Er is een parkeerplek voor ca. 50 auto's.",
  },
  {
    q: "Vanaf hoeveel personen kan ik boeken?",
    a: "Vanaf 2 personen kun je een challenge direct reserveren. Vanaf 8 personen stellen we een arrangement op maat samen met een offerte.",
  },
  {
    q: "Kan ik eten en drinken combineren met een activiteit?",
    a: "Zeker! De Proeftuin serveert Italiaanse pizza's uit de houtoven, verse pasta en antipasti. Voor groepen vanaf 8 personen bieden we complete arrangementen met BBQ, pizza buffet of lunch & borrel.",
  },
  {
    q: "Gaat het uitje ook door bij slecht weer?",
    a: "De Auto Compass Challenge gaat altijd door, ook bij regen. Bij extreme weersomstandigheden voor chopper of wandeltocht zoeken we samen naar een passende oplossing.",
  },
  {
    q: "Hoe lang van tevoren moet ik boeken?",
    a: "We adviseren minimaal 2 weken van tevoren te boeken, zeker voor groepen. Voor laatste-minuut beschikbaarheid: neem gerust contact op.",
  },
];

export const activityFaqs: Record<string, Faq[]> = {
  "chopper-compass-challenge": [
    {
      q: "Heb ik een rijbewijs nodig?",
      a: "Ja, voor de E-choppers is een geldig rijbewijs verplicht.",
    },
    {
      q: "Hoe laat kan ik starten?",
      a: "De vaste starttijden zijn 11:30 en 15:00 uur. Andere tijden voor groepen op aanvraag.",
    },
    {
      q: "Hoe boek ik direct?",
      a: "Voor groepen tot 8 personen boek je direct via Eurowheelz (de partner voor de chopperverhuur). Vanaf 8 personen ga je via een arrangement op maat.",
    },
    {
      q: "Krijg ik een helm?",
      a: "Ja, een helm is bij de challenge inbegrepen.",
    },
  ],
  "auto-compass-challenge": [
    {
      q: "Kan ik met mijn eigen auto rijden?",
      a: "Ja, je kunt prima met je eigen auto deelnemen. Auto's bijhuren kan ook — laat het ons weten bij je offerte.",
    },
    {
      q: "Kan de route op maat gemaakt worden?",
      a: "Zeker. Voor grote groepen maken we een autorally op maat met eigen opdrachten, score-overzicht, finishboog, rally master op locatie en prijsuitreiking.",
    },
    {
      q: "Kan ik in oldtimer kevers rijden?",
      a: "Ja, dat is een populaire optie voor bedrijfsuitjes en feestjes. Vraag ons naar de mogelijkheden.",
    },
    {
      q: "Gaat het door bij regen?",
      a: "Ja! Dat is juist de kracht van dit uitje: in de auto blijf je lekker droog.",
    },
  ],
  "wandel-compass-challenge": [
    {
      q: "Hoe lang is de wandeling?",
      a: "De route is ca. 7 tot 9 kilometer en duurt ongeveer 2,5 uur (inclusief opdrachten).",
    },
    {
      q: "Is de route geschikt voor kinderen?",
      a: "Ja, vanaf ca. 8 jaar is de route goed te doen. Het is een mix van bospaden en verharde paden.",
    },
    {
      q: "Kan ik dit combineren met eten of borrelen?",
      a: "Absoluut — combineer de wandel challenge met een lunch, borrel of diner bij De Proeftuin om er een complete dag van te maken.",
    },
    {
      q: "Heb ik speciale uitrusting nodig?",
      a: "Stevige schoenen en kleding op het weer is genoeg. Het kompas gebruik je via de app op je telefoon.",
    },
  ],
};
