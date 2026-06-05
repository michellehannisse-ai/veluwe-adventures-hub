import { createFileRoute, Link } from "@tanstack/react-router";
import heroChopper from "@/assets/hero-chopper.jpg.asset.json";
import proeftuinTerras from "@/assets/proeftuin-terras.jpg.asset.json";
import proeftuinGroep from "@/assets/proeftuin-groep.jpg.asset.json";
import proeftuinTafel from "@/assets/proeftuin-tafel.jpg.asset.json";
import { activities } from "@/lib/activities";
import { FAQ } from "@/components/FAQ";
import { homeFaqs } from "@/lib/faqs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spot de Veluwe — Avontuurlijke uitjes vanaf Hoenderloo" },
      {
        name: "description",
        content:
          "Ontdek de Veluwe op een chopper, met de auto of te voet. Speelse compass challenges en Italiaanse arrangementen vanaf De ProefTuin in Hoenderloo.",
      },
      { property: "og:title", content: "Spot de Veluwe — Avontuur in Hoenderloo" },
      {
        property: "og:description",
        content:
          "Chopper, auto en wandel challenges op de Veluwe + Italiaanse arrangementen bij De ProefTuin in Hoenderloo.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-cream text-ink">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 animate-entrance">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tighter uppercase mb-6">
              Spot de{" "}
              <span className="font-serif italic font-normal lowercase text-coral">Veluwe</span>{" "}
              en ga mee op ontdekking
            </h1>
            <p className="max-w-md text-lg font-medium mb-8 text-ink/80">
              Ontdek de gave omgeving van Hoenderloo met onze activiteiten en ga samen op pad.
              Combineer het met heerlijk eten voorafgaand of na de activiteit. Jouw volgende
              bedrijfsuitje, familie&shy;uitje of vriendenuitje?
            </p>
            <div className="relative inline-block">
              <span className="absolute -top-10 -left-6 font-script text-3xl text-pink -rotate-12">
                Nu boeken!
              </span>
              <Link
                to="/activiteiten"
                className="inline-block bg-teal text-cream border-2 border-ink px-8 py-4 rounded-full text-xl font-display font-bold uppercase tracking-tight shadow-[6px_6px_0px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--color-ink)] transition-all"
              >
                Bekijk Challenges
              </Link>
            </div>
          </div>
          <div className="flex-1 relative animate-entrance" style={{ animationDelay: "150ms" }}>
            <div className="border-2 border-ink rounded-[2rem] overflow-hidden shadow-[12px_12px_0px_0px_var(--color-coral)]">
              <img
                src={heroChopper.url}
                alt="Groep gasten met helmen lacht tijdens een Chopper Compass Challenge op de Veluwe"
                width={1280}
                height={1280}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink text-white border-2 border-ink p-5 rounded-2xl rotate-6 shadow-xl">
              <div className="font-display text-xl leading-none uppercase">Vanaf</div>
              <div className="font-display text-3xl tracking-tighter">2 pers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* USP MARQUEE BAR */}
      <section
        aria-label="Onze pluspunten"
        className="bg-coral text-cream border-y-2 border-ink py-4 overflow-hidden"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {[
                "Midden op de Veluwe",
                "Boek een compleet uitje",
                "Voor iedereen wat leuks",
                "Genoeg parkeergelegenheid",
                "Vanaf 2 personen",
              ].map((usp) => (
                <span key={`${dup}-${usp}`} className="flex items-center shrink-0">
                  <span className="font-display font-bold uppercase tracking-tight text-xl md:text-2xl mx-6">
                    {usp}
                  </span>
                  <span className="size-3 rounded-full bg-cream border-2 border-ink shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activiteiten" className="bg-cream py-24 px-6 border-t-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              De Challenges
            </h2>
            <span className="font-script text-2xl text-teal hidden md:block">
              Kies jouw tempo —
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((a, i) => (
              <Link
                key={a.slug}
                to="/activiteiten/$slug"
                params={{ slug: a.slug }}
                className="group bg-white border-2 border-ink rounded-3xl p-4 hover:-translate-y-2 transition-transform duration-300"
                style={{
                  boxShadow: `8px 8px 0px 0px ${a.shadowColor}`,
                }}
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden border-2 border-ink">
                  <img
                    src={a.image}
                    alt={a.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 ${a.badgeBg} ${a.badgeText} border-2 border-ink px-3 py-1 rounded-lg font-bold ${
                      i === 0 ? "-rotate-3" : i === 1 ? "rotate-3" : "-rotate-6"
                    }`}
                  >
                    {a.price} {a.priceLabel}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-2">{a.name}</h3>
                <p className="text-sm text-ink/70 mb-3">{a.short}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-teal mb-6">
                  {a.metaLine}
                </p>
                <span className="block w-full text-center border-2 border-ink rounded-full py-2 font-bold uppercase text-xs group-hover:bg-teal group-hover:text-cream transition-colors">
                  Meer Info
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROEFTUIN */}
      <section id="proeftuin" className="bg-teal text-cream py-24 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="border-2 border-cream rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_var(--color-pink)] col-span-2">
              <img
                src={proeftuinTerras.url}
                alt="Het terras en de serre van De Proeftuin in Hoenderloo"
                width={1280}
                height={853}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
            <div className="border-2 border-cream rounded-2xl overflow-hidden">
              <img
                src={proeftuinGroep.url}
                alt="Groep proost met wijn aan tafel bij De Proeftuin"
                width={800}
                height={534}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="border-2 border-cream rounded-2xl overflow-hidden">
              <img
                src={proeftuinTafel.url}
                alt="Italiaanse shared dining tafel bij De Proeftuin"
                width={800}
                height={534}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-none mb-6">
              De Proeftuin{" "}
              <span className="font-serif italic font-normal lowercase text-pink">
                Italiaans
              </span>{" "}
              genieten
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-prose">
              Na je challenge even helemaal tot rust komen? Of starten met een volle maag? De
              Italiaanse keuken van De Proeftuin serveert houtoven-pizza's, verse pasta en de
              lekkerste antipasti — midden in het groen van Hoenderloo. De perfecte uitvalbasis
              voor elk avontuur.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-pink" />
                <span className="font-bold uppercase tracking-tight">Houtoven Pizza's</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-coral" />
                <span className="font-bold uppercase tracking-tight">
                  Verse Pasta &amp; Antipasti
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-cream" />
                <span className="font-bold uppercase tracking-tight">Veluws Terras</span>
              </li>
            </ul>
            <Link
              to="/arrangementen"
              className="inline-block bg-pink text-cream border-2 border-cream px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-coral transition-colors"
            >
              Bekijk arrangementen
            </Link>
          </div>
        </div>
      </section>

      {/* ARRANGEMENTEN CTA */}
      <section className="bg-coral py-20 border-y-2 border-ink overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee opacity-20">
          <span className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Uitjes 2 tot 100 personen
          </span>
          <span className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Bedrijfsuitjes
          </span>
          <span className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Familiedagen
          </span>
          <span className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Uitjes 2 tot 100 personen
          </span>
          <span className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Bedrijfsuitjes
          </span>
        </div>
        <div className="max-w-4xl mx-auto text-center -mt-10 md:-mt-16 relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-cream uppercase tracking-tighter mb-8">
            Uitjes van{" "}
            <span className="bg-ink text-white px-4 rounded-xl rotate-2 inline-block">
              2 tot 100
            </span>{" "}
            personen
          </h2>
          <p className="text-lg text-ink font-medium mb-10 max-w-2xl mx-auto">
            Met een groepje tot 8 personen boek je de challenge direct online. Vanaf 8 personen
            kies je één van onze arrangementen — challenge + eten bij De Proeftuin — en vragen we
            een offerte op maat voor je samen.
          </p>
          <Link
            to="/arrangementen"
            className="inline-block bg-cream text-ink border-2 border-ink px-10 py-5 rounded-full text-2xl font-display font-bold uppercase shadow-[8px_8px_0px_0px_var(--color-teal)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Bekijk Arrangementen
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ kicker="Goed om te weten —" title="Veelgestelde vragen" faqs={homeFaqs} />
    </div>
  );
}
