import { Link } from "@tanstack/react-router";
import { useState } from "react";

type NavLink = { to: string; label: string; hash?: boolean };

const links: NavLink[] = [
  { to: "/activiteiten", label: "Activiteiten" },
  { to: "/arrangementen", label: "Arrangementen" },
  { to: "/#proeftuin", label: "ProefTuin", hash: true },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-cream border-2 border-ink rounded-full px-5 py-2.5 flex items-center justify-between shadow-[4px_4px_0px_0px_var(--color-ink)]">
        <Link to="/" className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase">
          Spot de Veluwe
        </Link>
        <div className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wide">
          {links.map((l) =>
            l.hash ? (
              <a key={l.to} href={l.to} className="hover:text-coral transition-colors">
                {l.label}
              </a>
            ) : (
              <Link key={l.to} to={l.to as string} className="hover:text-coral transition-colors">
                {l.label}
              </Link>
            ),
          )}
        </div>
        <Link
          to="/contact"
          className="bg-coral text-cream border-2 border-ink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-pink transition-colors"
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
          {links.map((l) =>
            l.hash ? (
              <a key={l.to} href={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ) : (
              <Link key={l.to} to={l.to as string} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
