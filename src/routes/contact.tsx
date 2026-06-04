import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Spot de Veluwe" },
      {
        name: "description",
        content:
          "Neem contact op met Spot de Veluwe in Hoenderloo. Boek een challenge of vraag een arrangement op maat aan.",
      },
      { property: "og:title", content: "Contact — Spot de Veluwe" },
      {
        property: "og:description",
        content: "Boek je challenge of vraag een arrangement aan bij Spot de Veluwe.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-coral">Klaar voor avontuur —</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mt-2">
            Neem{" "}
            <span className="font-serif italic font-normal lowercase text-teal">contact</span> op
          </h1>
          <p className="text-lg text-ink/80 mt-6 max-w-2xl mx-auto">
            Stuur ons een bericht, bel of mail. We reageren meestal binnen één werkdag.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-teal text-cream border-2 border-ink rounded-3xl p-6 shadow-[8px_8px_0px_0px_var(--color-coral)]">
              <div className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
                Bezoekadres — De Proeftuin
              </div>
              <div className="font-display text-xl uppercase leading-tight">
                De Krim 4 <br /> 7351 BL Hoenderloo
              </div>
              <a
                href="https://maps.google.com/?q=De+Krim+4,+7351+BL+Hoenderloo"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-bold uppercase tracking-wide underline hover:text-pink"
              >
                Open in Maps →
              </a>
            </div>

            <div className="bg-coral text-cream border-2 border-ink rounded-3xl p-6 shadow-[8px_8px_0px_0px_var(--color-teal)]">
              <div className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">
                Telefoon
              </div>
              <a
                href="tel:+31318250999"
                className="font-display text-2xl uppercase block hover:text-ink transition-colors"
              >
                0318 — 250 999
              </a>
            </div>

            <div className="bg-white border-2 border-ink rounded-3xl p-6 shadow-[8px_8px_0px_0px_var(--color-pink)]">
              <div className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">
                E-mail
              </div>
              <a
                href="mailto:info@spotveluwe.nl"
                className="font-display text-xl uppercase block hover:text-coral transition-colors break-all"
              >
                info@spotveluwe.nl
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-white border-2 border-ink rounded-3xl p-6 md:p-8 shadow-[10px_10px_0px_0px_var(--color-ink)]"
            >
              <h2 className="text-2xl font-display font-bold uppercase mb-6">Stuur een bericht</h2>

              {sent ? (
                <div className="bg-pink text-cream border-2 border-ink rounded-2xl p-6 text-center">
                  <div className="font-display text-2xl uppercase mb-2">Bedankt!</div>
                  <p className="text-sm">We nemen zo snel mogelijk contact met je op.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Naam" name="name" required />
                    <Field label="E-mail" name="email" type="email" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Aantal personen" name="people" type="number" />
                    <SelectField
                      label="Interesse"
                      name="interest"
                      options={[
                        "Chopper Compass Challenge",
                        "Auto Compass Challenge",
                        "Wandel Compass Challenge",
                        "Arrangement (8+ personen)",
                        "Iets anders",
                      ]}
                    />
                  </div>
                  <TextareaField label="Je bericht" name="message" required />
                  <button
                    type="submit"
                    className="w-full bg-teal text-cream border-2 border-ink py-4 rounded-full font-display text-lg font-bold uppercase shadow-[6px_6px_0px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--color-ink)] transition-all"
                  >
                    Verstuur bericht
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-widest mb-1.5">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-2 border-ink rounded-full px-4 py-2.5 bg-cream focus:outline-none focus:ring-2 focus:ring-coral"
      />
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-widest mb-1.5">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="w-full border-2 border-ink rounded-2xl px-4 py-3 bg-cream focus:outline-none focus:ring-2 focus:ring-coral resize-none"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-widest mb-1.5">{label}</span>
      <select
        name={name}
        className="w-full border-2 border-ink rounded-full px-4 py-2.5 bg-cream focus:outline-none focus:ring-2 focus:ring-coral"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
