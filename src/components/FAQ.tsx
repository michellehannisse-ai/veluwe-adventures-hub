import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/faqs";

type Props = {
  title?: string;
  kicker?: string;
  faqs: Faq[];
  variant?: "light" | "dark";
};

export function FAQ({ title = "Veelgestelde vragen", kicker, faqs, variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <section className={`py-20 px-6 ${isDark ? "bg-teal text-cream" : "bg-cream text-ink"}`}>
      <div className="max-w-3xl mx-auto">
        {kicker && (
          <span className={`font-script text-2xl ${isDark ? "text-pink" : "text-coral"}`}>
            {kicker}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-none mt-1 mb-10">
          {title}
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`border-2 ${isDark ? "border-cream" : "border-ink"} rounded-2xl px-5 bg-white/5`}
            >
              <AccordionTrigger className="font-display uppercase text-lg tracking-tight text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className={`text-base ${isDark ? "text-cream/90" : "text-ink/80"}`}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
