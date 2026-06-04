import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/activiteiten", label: "Activiteiten" },
  { to: "/arrangementen", label: "Arrangementen" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-cream border-2 border-ink rounded-full px-5 py-2.5 flex items-center justify-between shadow-[4px_4px_0px_0px_var(--color-ink)]">
        <Link to="/" className="flex items-baseline gap-0.5 font-display font-bold text-lg md:text-xl tracking-tighter uppercase">
          <span className="bg-teal text-cream border-2 border-ink rounded-xl px-2 py-0.5 -rotate-2 inline-block">Spot</span>
          <span className="font-serif italic lowercase text-coral text-xl md:text-2xl rotate-2 inline-block">veluwe</span>
        </Link>
        <div className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wide">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-coral transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden md:inline-block bg-coral text-cream border-2 border-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-pink transition-colors"
        >
          Contact
        </Link>
        <button
          className="md:hidden ml-2 border-2 border-ink rounded-full px-3 py-1 text-xs font-bold"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 bg-cream border-2 border-ink rounded-3xl p-4 shadow-[4px_4px_0px_0px_var(--color-ink)] flex flex-col gap-3 font-bold uppercase text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="text-coral">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
