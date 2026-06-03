import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { arrangementen, getArrangement } from "@/lib/arrangementen";

const accentMap = {
  teal: { bg: "bg-teal", text: "text-cream", shadow: "var(--color-coral)" },
  coral: { bg: "bg-coral", text: "text-cream", shadow: "var(--color-pink)" },
  pink: { bg: "bg-pink", text: "text-cream", shadow: "var(--color-teal)" },
} as const;

export const Route = createFileRoute("/arrangementen/$slug")({
  loader: ({ params }) => {
    const arr = getArrangement(params.slug);
    if (!arr) throw notFound();
    return { arr };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.arr;
    if (!a) return { meta: [{ title: "Arrangement niet gevonden — Spot de Veluwe" }] };
    return {
      meta: [
        { title: `${a.name} — Spot de Veluwe` },
        { name: "description", content: a.tagline },
        { property: "og:title", content: `${a.name} — Spot de Veluwe` },
        { property: "og:description", content: a.tagline },
        { property: "og:image", content: a.image },
      ],
    };
  },
  component: ArrangementDetail,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 px-6 text-center">
      <h1 className="text-4xl font-display font-bold uppercase">Niet gevonden</h1>
      <Link to="/arrangementen" className="mt-6 inline-block underline">
        Terug naar overzicht
      </Link>
    </div>
  ),
});

function ArrangementDetail() {
  const { arr } = Route.useLoaderData();
  const accent = accentMap[arr.accent as keyof typeof accentMap];
  const others = arrangementen.filter((o) => o.slug !== arr.slug);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/arrangementen"
          className="inline-block mb-8 text-sm font-bold uppercase tracking-wide border-2 border-ink rounded-full px-4 py-1.5 hover:bg-ink hover:text-cream transition-colors"
        >
          ← Alle arrangementen
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="border-2 border-ink rounded-[2rem] overflow-hidden shadow-[12px_12px_0px_0px_var(--color-coral)]">
              <img
                src={arr.image}
                alt={arr.name}
                width={1280}
                height={896}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className={`absolute -top-6 -right-6 ${accent.bg} ${accent.text} border-2 border-ink px-5 py-3 rounded-2xl rotate-6 shadow-xl`}>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Vanaf</div>
              <div className="font-display text-2xl leading-none tracking-tighter">{arr.price}</div>
            </div>
          </div>

          <div>
            <span className="font-script text-2xl text-pink">Arrangement</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mt-1 mb-4">
              {arr.name}
            </h1>
            <p className="text-xl font-serif italic text-ink/70 mb-6">{arr.tagline}</p>
            <p className="text-lg text-ink/80 mb-8">{arr.description}</p>

            <div className="bg-white border-2 border-ink rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-display font-bold uppercase mb-4">Inbegrepen</h2>
              <ul className="space-y-3">
                {arr.includes.map((h: string) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="size-3 mt-2 rounded-full bg-pink border border-ink" />
                    <span className="font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {arr.options && arr.options.length > 0 && (
              <div className="bg-cream border-2 border-ink rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-display font-bold uppercase mb-4">Opties & extra's</h2>
                <ul className="space-y-2 text-sm">
                  {arr.options.map((o: string) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="size-2 mt-1.5 rounded-full bg-coral border border-ink shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-teal text-cream border-2 border-ink px-6 py-3 rounded-full font-bold uppercase shadow-[6px_6px_0px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--color-ink)] transition-all"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-display font-bold uppercase mb-8">Andere arrangementen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/arrangementen/$slug"
                params={{ slug: o.slug }}
                className="group flex gap-4 bg-white border-2 border-ink rounded-2xl p-3 hover:-translate-y-1 transition-transform"
              >
                <img
                  src={o.image}
                  alt={o.name}
                  width={120}
                  height={120}
                  loading="lazy"
                  className="size-24 rounded-xl object-cover border-2 border-ink"
                />
                <div className="flex-1">
                  <div className="font-display font-bold uppercase">{o.name}</div>
                  <div className="text-xs text-ink/60 mt-1 line-clamp-2">{o.tagline}</div>
                  <div className="mt-2 text-sm font-bold">{o.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
