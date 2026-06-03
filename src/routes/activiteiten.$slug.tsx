import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { activities, getActivity } from "@/lib/activities";
import { FAQ } from "@/components/FAQ";
import { activityFaqs } from "@/lib/faqs";

export const Route = createFileRoute("/activiteiten/$slug")({
  loader: ({ params }) => {
    const activity = getActivity(params.slug);
    if (!activity) throw notFound();
    return { activity };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.activity;
    if (!a) return { meta: [{ title: "Activiteit niet gevonden — Spot de Veluwe" }] };
    return {
      meta: [
        { title: `${a.name} — Spot de Veluwe` },
        { name: "description", content: a.short },
        { property: "og:title", content: `${a.name} — Spot de Veluwe` },
        { property: "og:description", content: a.short },
        { property: "og:image", content: a.image },
      ],
    };
  },
  component: ActivityDetail,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 px-6 text-center">
      <h1 className="text-4xl font-display font-bold uppercase">Activiteit niet gevonden</h1>
      <Link to="/activiteiten" className="mt-6 inline-block underline">
        Terug naar overzicht
      </Link>
    </div>
  ),
});

function ActivityDetail() {
  const { activity: a } = Route.useLoaderData();
  const others = activities.filter((o) => o.slug !== a.slug);
  const faqs = activityFaqs[a.slug] ?? [];

  return (
    <>
      <div className="pt-32 pb-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/activiteiten"
            className="inline-block mb-8 text-sm font-bold uppercase tracking-wide border-2 border-ink rounded-full px-4 py-1.5 hover:bg-ink hover:text-cream transition-colors"
          >
            ← Alle activiteiten
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="border-2 border-ink rounded-[2rem] overflow-hidden shadow-[12px_12px_0px_0px_var(--color-coral)]">
                <img
                  src={a.image}
                  alt={a.name}
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover"
                />
              </div>
              {a.showPrice && (
                <div
                  className={`absolute -top-6 -right-6 ${a.badgeBg} ${a.badgeText} border-2 border-ink px-5 py-3 rounded-2xl rotate-6 shadow-xl`}
                >
                  <div className="font-display text-3xl leading-none tracking-tighter">
                    {a.price}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest">{a.priceLabel}</div>
                </div>
              )}

              {a.gallery && a.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {a.gallery.map((g: string, i: number) => (
                    <div
                      key={i}
                      className="border-2 border-ink rounded-2xl overflow-hidden"
                    >
                      <img
                        src={g}
                        alt=""
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="font-script text-2xl text-coral">Compass Challenge</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none mt-1 mb-6">
                {a.name}
              </h1>
              <p className="text-lg text-ink/80 mb-8">{a.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {a.practical.map((p: { label: string; value: string }) => (
                  <div key={p.label} className="border-2 border-ink rounded-2xl p-4">
                    <div className="text-xs font-bold uppercase text-ink/50">{p.label}</div>
                    <div className="font-display text-lg uppercase leading-tight">{p.value}</div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-display font-bold uppercase mb-4">Wat je krijgt</h2>
                <ul className="space-y-3">
                  {a.highlights.map((h: string) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="size-3 mt-2 rounded-full bg-coral border border-ink" />
                      <span className="font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {a.primaryCta.external ? (
                  <a
                    href={a.primaryCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-teal text-cream border-2 border-ink px-6 py-3 rounded-full font-bold uppercase shadow-[6px_6px_0px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--color-ink)] transition-all"
                  >
                    {a.primaryCta.label} ↗
                  </a>
                ) : (
                  <Link
                    to={a.primaryCta.href}
                    className="bg-teal text-cream border-2 border-ink px-6 py-3 rounded-full font-bold uppercase shadow-[6px_6px_0px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--color-ink)] transition-all"
                  >
                    {a.primaryCta.label}
                  </Link>
                )}
                {a.secondaryCta && (
                  <Link
                    to={a.secondaryCta.href}
                    className="border-2 border-ink px-6 py-3 rounded-full font-bold uppercase hover:bg-ink hover:text-cream transition-colors"
                  >
                    {a.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      {faqs.length > 0 && (
        <FAQ kicker="Vragen over deze challenge —" title="Veelgestelde vragen" faqs={faqs} />
      )}

      {/* Others */}
      <div className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-bold uppercase mb-8">Andere challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/activiteiten/$slug"
                params={{ slug: o.slug }}
                className="group flex gap-4 bg-white border-2 border-ink rounded-2xl p-3 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: `6px 6px 0px 0px ${o.shadowColor}` }}
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
                  <div className="text-xs text-ink/60 mt-1 line-clamp-2">{o.short}</div>
                  {o.showPrice && (
                    <div className="mt-2 text-sm font-bold">
                      {o.price} {o.priceLabel}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
