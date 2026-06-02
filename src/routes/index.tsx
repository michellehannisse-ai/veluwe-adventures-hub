import { createFileRoute, Link } from "@tanstack/react-router";
import heroChopper from "@/assets/hero-chopper.jpg";
import proeftuinImg from "@/assets/proeftuin.jpg";
import { activities } from "@/lib/activities";

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
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase mb-6">
              Spot de <br />
              <span className="font-serif italic font-normal lowercase text-coral">Veluwe</span>{" "}
              op wielen
            </h1>
            <p className="max-w-md text-lg font-medium mb-8 text-ink/80">
              Ontdek de ruige natuur van de Veluwe vanaf De ProefTuin in Hoenderloo.
              Kies je challenge en ga op avontuur — alleen, met vrienden of als groep.
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
                src={heroChopper}
                alt="Vintage chopper op een Veluws bospad"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink text-white border-2 border-ink p-5 rounded-2xl rotate-6 shadow-xl">
              <div className="font-display text-2xl leading-none uppercase">Vanaf</div>
              <div className="font-display text-4xl tracking-tighter">€9,50</div>
            </div>
          </div>
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
                <p className="text-sm text-ink/70 mb-6">{a.short}</p>
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="border-2 border-cream rounded-[2.5rem] overflow-hidden shadow-[12px_12px_0px_0px_var(--color-pink)]">
              <img
                src={proeftuinImg}
                alt="De ProefTuin in Hoenderloo"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase leading-none mb-6">
              De ProefTuin{" "}
              <span className="font-serif italic font-normal lowercase text-pink">
                Italiaans
              </span>{" "}
              genieten
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-prose">
              Na je challenge even helemaal tot rust komen? Onze Italiaanse keuken
              serveert houtoven-pizza's, verse pasta en de lekkerste antipasti — midden
              in het groen van Hoenderloo. De perfecte uitvalbasis voor elk avontuur.
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
              to="/contact"
              className="inline-block bg-pink text-cream border-2 border-cream px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-coral transition-colors"
            >
              Reserveer een tafel
            </Link>
          </div>
        </div>
      </section>

      {/* ARRANGEMENTEN CTA */}
      <section className="bg-coral py-20 border-y-2 border-ink overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee opacity-20">
          <span className="text-7xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Groepen 8+ Personen
          </span>
          <span className="text-7xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Bedrijfsuitjes
          </span>
          <span className="text-7xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Familiedagen
          </span>
          <span className="text-7xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Groepen 8+ Personen
          </span>
          <span className="text-7xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Bedrijfsuitjes
          </span>
          <span className="text-7xl md:text-8xl font-display font-bold uppercase tracking-tighter mx-4">
            Familiedagen
          </span>
        </div>
        <div className="max-w-4xl mx-auto text-center -mt-12 md:-mt-16 relative z-10 px-6">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-cream uppercase tracking-tighter mb-8">
            Samen op{" "}
            <span className="bg-ink text-white px-4 rounded-xl rotate-2 inline-block">
              pad?
            </span>
          </h2>
          <p className="text-xl text-ink font-bold mb-10 max-w-2xl mx-auto">
            Vanaf 8 personen maken we een arrangement op maat. Activiteit + diner +
            drankjes — alles in één.
          </p>
          <Link
            to="/arrangementen"
            className="inline-block bg-cream text-ink border-2 border-ink px-10 py-5 rounded-full text-2xl font-display font-bold uppercase shadow-[8px_8px_0px_0px_var(--color-teal)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Bekijk Arrangementen
          </Link>
        </div>
      </section>
    </div>
  );
}
