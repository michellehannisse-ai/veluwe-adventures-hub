import { createFileRoute, Link } from "@tanstack/react-router";
import { arrangementen } from "@/lib/arrangementen";
import arrangementenImg from "@/assets/arrangementen.jpg";

const accentMap = {
  teal: { bg: "bg-teal", text: "text-cream", shadow: "var(--color-coral)" },
  coral: { bg: "bg-coral", text: "text-cream", shadow: "var(--color-pink)" },
  pink: { bg: "bg-pink", text: "text-cream", shadow: "var(--color-teal)" },
} as const;

export const Route = createFileRoute("/arrangementen/")({
  head: () => ({
    meta: [
      { title: "Arrangementen — Spot de Veluwe" },
      {
        name: "description",
        content:
          "Arrangementen vanaf 8 personen: activiteit, Italiaans diner en drankjes bij De ProefTuin in Hoenderloo.",
      },
      { property: "og:title", content: "Arrangementen — Spot de Veluwe" },
      {
        property: "og:description",
        content:
          "Bedrijfsuitje, familiefeest of vriendendag? Wij stellen een arrangement op maat samen vanaf 8 personen.",
      },
    ],
  }),
  component: ArrangementenIndex,
});

function ArrangementenIndex() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <span className="font-script text-3xl text-pink">Vanaf 8 personen —</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mt-2 mb-6">
              Samen op{" "}
              <span className="font-serif italic font-normal lowercase text-teal">
                avontuur
              </span>
            </h1>
            <p className="text-lg text-ink/80">
              Bedrijfsuitje, familiefeest of vriendenweekend? Wij combineren een
              challenge op de Veluwe met een heerlijke Italiaanse maaltijd bij De
              ProefTuin. Alles in één regel — jullie genieten.
            </p>
          </div>
          <div className="border-2 border-ink rounded-[2rem] overflow-hidden shadow-[10px_10px_0px_0px_var(--color-coral)]">
            <img
              src={arrangementenImg}
              alt="Groep vrienden bij De ProefTuin"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {arrangementen.map((arr) => {
            const accent = accentMap[arr.accent];
            return (
              <Link
                key={arr.slug}
                to="/arrangementen/$slug"
                params={{ slug: arr.slug }}
                className="group flex flex-col bg-white border-2 border-ink rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                style={{ boxShadow: `8px 8px 0px 0px ${accent.shadow}` }}
              >
                <div className={`${accent.bg} ${accent.text} px-5 py-3 border-b-2 border-ink`}>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-80">
                    Arrangement
                  </div>
                  <div className="font-display text-xl uppercase">{arr.price}</div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-2xl font-display font-bold uppercase mb-2">{arr.name}</h2>
                  <p className="text-sm text-ink/70 mb-4">{arr.tagline}</p>
                  <ul className="space-y-2 mb-6 text-sm">
                    {arr.includes.slice(0, 3).map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="size-2 mt-1.5 rounded-full bg-coral shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto block w-full text-center border-2 border-ink rounded-full py-2 font-bold uppercase text-xs group-hover:bg-ink group-hover:text-cream transition-colors">
                    Bekijken
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-24 bg-teal text-cream border-2 border-ink rounded-[2rem] p-8 md:p-12 text-center shadow-[10px_10px_0px_0px_var(--color-pink)]">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
            Iets anders in gedachten?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Met onze offerte-tool stel je je eigen arrangement samen op maat. Wij
            denken graag mee.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cream text-ink border-2 border-cream px-8 py-4 rounded-full text-xl font-display font-bold uppercase hover:bg-coral hover:text-cream hover:border-ink transition-colors"
          >
            Vraag een offerte aan
          </Link>
        </div>
      </div>
    </div>
  );
}
