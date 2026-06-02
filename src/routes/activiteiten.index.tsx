import { createFileRoute, Link } from "@tanstack/react-router";
import { activities } from "@/lib/activities";

export const Route = createFileRoute("/activiteiten/")({
  head: () => ({
    meta: [
      { title: "Activiteiten — Spot de Veluwe" },
      {
        name: "description",
        content:
          "Kies uit drie compass challenges op de Veluwe: chopper, auto of wandel. Vanaf De ProefTuin in Hoenderloo.",
      },
      { property: "og:title", content: "Activiteiten — Spot de Veluwe" },
      {
        property: "og:description",
        content: "Chopper, auto en wandel challenges op de Veluwe vanaf Hoenderloo.",
      },
    ],
  }),
  component: ActiviteitenIndex,
});

function ActiviteitenIndex() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="font-script text-3xl text-coral">Kies je avontuur —</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mt-2 mb-6">
            Onze{" "}
            <span className="font-serif italic font-normal lowercase text-teal">
              Challenges
            </span>
          </h1>
          <p className="text-lg text-ink/80">
            Drie manieren om de Veluwe te veroveren. Allemaal starten ze bij De
            ProefTuin in Hoenderloo. Kompas mee, hersens aan, ga!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((a, i) => (
            <Link
              key={a.slug}
              to="/activiteiten/$slug"
              params={{ slug: a.slug }}
              className="group bg-white border-2 border-ink rounded-3xl p-4 hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: `8px 8px 0px 0px ${a.shadowColor}` }}
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
              <h2 className="text-2xl font-display font-bold uppercase mb-2">{a.name}</h2>
              <p className="text-sm text-ink/70 mb-6">{a.short}</p>
              <span className="block w-full text-center border-2 border-ink rounded-full py-2 font-bold uppercase text-xs group-hover:bg-teal group-hover:text-cream transition-colors">
                Meer Info
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
