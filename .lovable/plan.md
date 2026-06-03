## Doel

De site behoudt het Retro Sticker Bold design, maar krijgt de echte content uit `SpotVeluwe2.docx` + brochure `De ProefTuin`, en de AI-foto's worden vervangen door de geüploade originelen.

## 1. Foto's vervangen (Lovable Assets via CDN)

Alle huidige AI-gegenereerde JPG's in `src/assets/` worden vervangen door de uploads via `lovable-assets create` (geen binaries in repo):

- `hero-chopper` → `Chopperhuren_Veluwe.jpg` (groep met helmen, lacht, hero)
- `activity-chopper` → `Chopper_veluwe_huren.jpg` (twee choppers op pad)
- `activity-auto` → `Autopuzzeltocht.jpg` (oldtimer + app)
- `activity-wandel` → `Wandel.jpg` (telefoon met "Onjuist"-scherm)
- `proeftuin` → behouden of vervangen met `checkpoint.jpg` als sfeerbeeld
- Nieuwe extra's: `Autopuzzeltocht_1.jpg` (in-car), `Autopuzzeltocht_Wild.jpg` (lommerlaan), `C083990C…jpg` (bospad) — voor detailpagina galerijen

De oude AI-assets worden uit `src/assets/` verwijderd zodra niets er meer naar verwijst.

## 2. Homepagina (`src/routes/index.tsx`)

- **Hero titel**: "Spot de Veluwe en ga mee op ontdekking"
- **Subtitel**: "Ontdek de gave omgeving van Hoenderloo met onze activiteiten en ga samen op pad. Combineer het met heerlijk eten voorafgaand of na de activiteit. Jouw volgende bedrijfsuitje, familie-uitje, vriendenuitje?" (woord rouleert via simpele swap-animatie)
- **Sticker op hero-foto**: "Vanaf 2 personen" (i.p.v. "vanaf €9,50"). CTA "Bekijk challenges" blijft.
- **Activity cards** krijgen extra meta-regel: `2–50 pers · 2,5 uur · Lunchpakket +€15 p.p.` (per activiteit aangepast). Prijzen blijven.
- **ProefTuin sectie**: kopij uit doc ("Na je challenge even helemaal tot rust komen?…"), 3 pillars (Houtoven pizza's / Verse pasta & antipasti / Veluws terras). Knop heet **"Bekijk arrangementen"** i.p.v. "Reserveren".
- **"Samen op pad" blok**: titel **"UITJES VAN 2 TOT 100 PERSONEN"** met de bewegende achtergrondtekst, daaronder de groepsuitleg uit het doc en knop "Bekijk arrangementen".
- **Nieuw: FAQ-sectie** onderaan de home — accordion gevoed door een data-array in `src/lib/faqs.ts` zodat klant zelf tekst kan aanpassen.

## 3. Activiteiten — overzichtspagina (`activiteiten.index.tsx`)

- **Titel**: "Leuk" (met script-aanloop)
- **Subtekst**: "Met diverse leuke challenges dagen we jou uit een leuke dag op de Veluwe te hebben! Met al onze uitjes ben je actief bezig met zijn allen. Alle uitjes starten en eindigen bij de ProefTuin in Hoenderloo. Hier kan je de auto gemakkelijk parkeren. Let's go!"
- Cards tonen dezelfde meta als op home.

## 4. Activiteit-detail (`activiteiten.$slug.tsx` + `src/lib/activities.ts`)

`activities.ts` uitbreiden met velden: `longDescription`, `practical[]`, `bookingUrl?`, `showPrice` (bool), `ctaLabel`, `gallery[]`.

**Chopper Compass Challenge**
- Nieuwe long copy uit doc (stoere e-chopper, kompas in app, teambuilding-opdrachten)
- Praktisch: start 11:30 of 15:00, duur 2,5 uur, rijbewijs verplicht, 2–50 personen, lunchpakket +€15 p.p.
- Primary CTA: **"Direct boeken"** → `https://eurowheelz.eu/nl/locaties/de-proeftuin-hoenderloo/` (extern)
- Secondary CTA: "Of als arrangement"

**Auto Compass Challenge**
- Long copy benadrukt **rally over de Veluwe** + route op maat
- Uitbreidingen: finishboog, rally master op locatie, prijsuitreiking, oldtimer kevers
- Praktisch: duur 3–4 uur, 2–100+ personen, eigen auto of bij te huren, lunchpakket optie
- **Prijs verbergen** op detailpagina (`showPrice=false`)
- Enige CTA: **"Offerte aanvragen"** → `/contact`

**Wandel Compass Challenge**
- Long copy uit doc (moderne GPS-wandeltocht, kompas in app)
- Praktisch: 7–9 km, mix bospaden + verharde paden, 2,5 uur, 2–100+ personen, leuk combineren met andere challenge
- CTA "Boek deze challenge" + "Of als arrangement"

**FAQ per challenge**: elke activity krijgt eigen `faqs[]` array, weergegeven als accordion onder de praktische info.

## 5. Arrangementen (`src/lib/arrangementen.ts` + detail/index)

Inhoud volledig vervangen door de echte 3 arrangementen uit doc + brochure:

- **Subtekst overview**: "Bedrijfsuitje, familiefeest of vriendenweekend? Combineer een challenge op de Veluwe met een heerlijke Italiaanse maaltijd bij De ProefTuin."

**1. Tour & BBQ** — Challenge + BBQ-buffet bij De ProefTuin
- Keuze uit Standaard BBQ (€30), Medium (€35), Luxe (€40), Luxe vis (€40), Surf & Turf (€37,50), Kinderpakket (€15)
- Optie: zelf bbq'en of master chef inhuren
- Foto's uit `Chopperhuren_Veluwe.jpg` + sfeer

**2. Tour & Pizza Buffet** — Challenge + onbeperkt pizza uit de houtoven
- Soep vooraf, onbeperkt pizza (vlees/vis/veggie), salades
- 4e plek NK Pizzabakken 2025 als trust-signal

**3. Lunch & Challenge & Borrel** — Italiaanse lunch + challenge + borrelafkoop
- Huisgemaakte broodjes, croissants, fruit, salades, soep
- Optioneel drankafkoop borrel (3u €22,50 p.p.)

Prijzen worden als "v.a. €XX p.p." gepresenteerd o.b.v. brochure-tarieven; precieze totaalprijs blijft via offerte (knop "Offerte aanvragen" → `/contact`).

## 6. FAQ-data

Nieuw bestand `src/lib/faqs.ts`:
```ts
export const homeFaqs = [{q,a}, …];
export const activityFaqs: Record<slug, {q,a}[]> = { … };
```
Renderen via een nieuwe `<FAQ />` component (shadcn Accordion). Klant kan tekst direct in dat bestand wijzigen.

## 7. Footer / contact ongewijzigd
Behalve eventuele kleine tekstuele tweaks.

---

### Technisch overzicht

- Bestanden bewerkt: `src/routes/index.tsx`, `src/routes/activiteiten.index.tsx`, `src/routes/activiteiten.$slug.tsx`, `src/routes/arrangementen.index.tsx`, `src/routes/arrangementen.$slug.tsx`, `src/lib/activities.ts`, `src/lib/arrangementen.ts`
- Nieuwe bestanden: `src/lib/faqs.ts`, `src/components/FAQ.tsx`, `src/assets/*.asset.json` (CDN-pointers voor de geüploade foto's)
- Verwijderd: oude AI-jpg's in `src/assets/`
- Externe link (eurowheelz) opent in nieuw tabblad
- Type `Activity` krijgt nieuwe optionele velden (backwards-compatible)
