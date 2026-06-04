import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-cream py-16 px-6 border-t-2 border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <span className="text-4xl font-display font-bold uppercase tracking-tighter leading-none block">
            Spot<span className="font-serif italic lowercase text-coral">veluwe</span>
          </span>
          <p className="mt-4 font-script text-2xl text-coral">De Proeftuin, Hoenderloo</p>
          <p className="mt-2 text-sm text-ink/70 max-w-xs">
            De Krim 4, 7351 BL Hoenderloo<br />
            T: <a href="tel:+31318250999" className="hover:text-coral">0318-250999</a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-2 font-bold uppercase text-xs">
            <span className="text-ink/40 mb-2">Navigatie</span>
            <Link to="/" className="hover:text-coral">Home</Link>
            <Link to="/activiteiten" className="hover:text-coral">Activiteiten</Link>
            <Link to="/arrangementen" className="hover:text-coral">Arrangementen</Link>
            <Link to="/contact" className="hover:text-coral">Contact</Link>
          </div>
          <div className="flex flex-col gap-2 font-bold uppercase text-xs">
            <span className="text-ink/40 mb-2">Socials</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-coral">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-coral">Facebook</a>
            <a href="mailto:info@spotveluwe.nl" className="hover:text-coral">E-mail</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t-2 border-ink/10 flex justify-between items-center text-[10px] font-bold uppercase opacity-50">
        <span>© {new Date().getFullYear()} Spotveluwe</span>
        <span>Avontuur op de Veluwe</span>
      </div>
    </footer>
  );
}
