// app/leistungen/page.tsx
import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedButton from "@/components/AnimatedButton";
import StickyCTA from "@/components/StickyCTA";
import FadeInSection from "@/components/FadeInSection";
import LeistungenHero from "@/components/LeistungenHero";

// SEO
export const metadata = {
  title: "Unsere Leistungen – EppelStyle Friseur Eppelborn",
  description:
    "Entdecken Sie das vielfältige Leistungsangebot von EppelStyle in Eppelborn: Präzise Haarschnitte für Damen, Herren & Kinder, professionelle Barber-Services, brillante Farben und individuelle Stylings.",
  keywords:
    "Friseur Leistungen Eppelborn, Haarschnitt Preise, Barber Eppelborn, Damenfriseur, Herrenfriseur, Kinderfriseur, Haarfarbe, Styling, EppelStyle",
};

type ServiceItem = {
  name: string;
  length: string;
  price: string;
  tooltip?: string;
};

type Services = {
  Herren: ServiceItem[];
  Damen: ServiceItem[];
};

const services: Services = {
  Herren: [
    { name: "Haarschnitt (klassisch & modern)", length: "-", price: "22€" },
    { name: "Maschinenschnitt (eine Länge)", length: "-", price: "18€" },
    { name: "Bartrasur & Pflege", length: "-", price: "15€" },
    { name: "Komplett Paket (Schnitt & Bart)", length: "-", price: "38€" },
    { name: "Kinderhaarschnitt (bis 10 J.)", length: "-", price: "16€" },
    { name: "Färben / Blondierung (Herren)", length: "-", price: "ab 35€" },
    { name: "Dauerwelle (Herren)", length: "-", price: "ab 50€" },
    { name: "Gesichtsmaske (entspannend)", length: "-", price: "8€" },
    { name: "Augenbrauen zupfen (Fadentechnik)", length: "-", price: "8€" },
    {
      name: "Haarschnitt (Schüler/Studenten/Azubis)",
      length: "-",
      price: "19€",
      tooltip: "Mit gültigem Ausweis",
    },
  ],
  Damen: [
    { name: "Trockenhaarschnitt", length: "-", price: "28€" },
    {
      name: "Schneiden, Waschen, Föhnen",
      length: "Kurz",
      price: "38€",
      tooltip: "Haarlänge bis Kinn",
    },
    {
      name: "Schneiden, Waschen, Föhnen",
      length: "Mittel",
      price: "45€",
      tooltip: "Haarlänge bis Schulter",
    },
    {
      name: "Schneiden, Waschen, Föhnen",
      length: "Lang",
      price: "52€",
      tooltip: "Haarlänge über Schulter",
    },
    {
      name: "Waschen & Föhnen/Stylen",
      length: "Kurz",
      price: "20€",
      tooltip: "Haarlänge bis Kinn",
    },
    {
      name: "Waschen & Föhnen/Stylen",
      length: "Mittel",
      price: "25€",
      tooltip: "Haarlänge bis Schulter",
    },
    {
      name: "Waschen & Föhnen/Stylen",
      length: "Lang",
      price: "30€",
      tooltip: "Haarlänge über Schulter",
    },
    { name: "Ansatz färben", length: "-", price: "ab 35€" },
    {
      name: "Komplett färben",
      length: "Kurz",
      price: "ab 40€",
      tooltip: "Haarlänge bis Kinn",
    },
    {
      name: "Komplett färben",
      length: "Mittel",
      price: "ab 50€",
      tooltip: "Haarlänge bis Schulter",
    },
    {
      name: "Komplett färben",
      length: "Lang",
      price: "ab 60€",
      tooltip: "Haarlänge über Schulter",
    },
    { name: "Blondierung / Aufhellung", length: "-", price: "ab 55€" },
    { name: "Foliensträhnen (Highlights)", length: "-", price: "ab 45€" },
    {
      name: "Balayage / Ombré",
      length: "-",
      price: "ab 80€",
      tooltip: "Individuelle Farbtechniken",
    },
    {
      name: "Tönung",
      length: "Kurz",
      price: "ab 25€",
      tooltip: "Haarlänge bis Kinn",
    },
    {
      name: "Tönung",
      length: "Mittel",
      price: "ab 30€",
      tooltip: "Haarlänge bis Schulter",
    },
    {
      name: "Tönung",
      length: "Lang",
      price: "ab 35€",
      tooltip: "Haarlänge über Schulter",
    },
    {
      name: "Dauerwelle",
      length: "Kurz",
      price: "ab 50€",
      tooltip: "Haarlänge bis Kinn",
    },
    {
      name: "Dauerwelle",
      length: "Mittel",
      price: "ab 60€",
      tooltip: "Haarlänge bis Schulter",
    },
    {
      name: "Dauerwelle",
      length: "Lang",
      price: "ab 75€",
      tooltip: "Haarlänge über Schulter",
    },
    {
      name: "Dauerhafte Haarglättung",
      length: "-",
      price: "ab 150€",
      tooltip: "Beratung erforderlich",
    },
    { name: "Augenbrauen zupfen/formen", length: "-", price: "8€" },
    { name: "Augenbrauen färben", length: "-", price: "10€" },
    { name: "Wimpern färben", length: "-", price: "12€" },
    {
      name: "Hochsteckfrisuren / Eventstyling",
      length: "-",
      price: "auf Anfrage",
    },
  ],
};

// Klein: Cards/Listen; ab sm: Tabelle
function ResponsiveServiceList({
  category,
  items,
}: {
  category: keyof Services;
  items: ServiceItem[];
}) {
  return (
    <div id={`leistungen-${category.toLowerCase()}`} className="cq">
      {/* Mobile: Kartenliste */}
      <ul className="sm:hidden space-y-3">
        {items.map((item, i) => (
          <li
            key={`${category}-card-${i}`}
            className="rounded-lg bg-white p-4 shadow-card"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-medium text-heading-charcoal">{item.name}</p>
                <p className="mt-1 text-sm text-charcoal/80 break-words">
                  {item.length !== "-" ? item.length : "–"}
                </p>
                {item.tooltip ? (
                  <p className="mt-1 text-xs text-charcoal/70">
                    {item.tooltip}
                  </p>
                ) : null}
              </div>
              <div className="shrink-0 text-right font-semibold text-heading-charcoal">
                {item.price}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Ab sm: Tabelle */}
      <div className="hidden sm:block rounded-lg bg-white p-3 shadow-inner sm:p-5">
        <div className="relative overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Preisliste – {category}</caption>
            <thead className="border-b-2 border-accent-coral/50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-base font-semibold text-heading-charcoal sm:px-4 sm:text-lg"
                >
                  Dienstleistung
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-base font-semibold text-heading-charcoal sm:px-4 sm:text-lg"
                >
                  Details / Haarlänge
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-right text-base font-semibold text-heading-charcoal sm:px-4 sm:text-lg"
                >
                  Preis
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={`${category}-${item.name}-${i}`}
                  className="border-b border-coral-light/70 transition-colors duration-200 last:border-b-0 hover:bg-coral-light/40"
                >
                  <td className="px-3 py-3.5 font-body text-sm text-charcoal sm:px-4 sm:text-base">
                    {item.name}
                  </td>
                  <td className="group relative px-3 py-3.5 text-center font-body text-sm text-charcoal sm:px-4 sm:text-base">
                    <span className="inline-block align-middle">
                      {item.length}
                    </span>
                    {/* Touch-/Keyboard-freundlicher Tooltip */}
                    {item.tooltip ? (
                      <span
                        className="absolute bottom-full left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-charcoal px-2.5 py-1.5 text-xs text-creme shadow-lg group-hover:block group-focus-within:block"
                        role="tooltip"
                        aria-live="polite"
                      >
                        {item.tooltip}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-3 py-3.5 text-right font-body text-sm font-medium text-charcoal sm:px-4 sm:text-base">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function LeistungenPage() {
  return (
    <main>
      <LeistungenHero imageSrc="/images/hero/leistungenhero.webp" />

      {/* Sticky CTAs rechts unten (mit Safe-Area) */}
      <div className="safe-inline safe-block">
        <StickyCTA
          contactHref="/kontakt"
          mapsHref="https://g.co/kgs/GDJvoGW"
          mapsLabel="Karte"
        />
      </div>

      {/* Intro */}
      <section className="section-wrapper">
        <div className="mx-auto max-w-3xl text-center">
          <FadeInSection>
            <h1 className="mb-4 scroll-mt-header font-heading text-4xl text-heading-charcoal xs:text-5xl">
              Unsere Preisliste
            </h1>
          </FadeInSection>
          <FadeInSection>
            <p className="font-body text-lg leading-relaxed text-charcoal sm:text-xl">
              Wir legen Wert auf Transparenz und faire Preise für erstklassige
              Friseurdienstleistungen. Alle Preise verstehen sich inklusive
              individueller Beratung und der Verwendung hochwertiger Produkte.
              Zusatzleistungen oder spezielle Wünsche besprechen wir gerne
              persönlich mit Ihnen.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Kategorien */}
      <div className="container space-y-12 pb-16 sm:space-y-16 sm:pb-20">
        {Object.entries(services).map(([category, items]) => (
          <section
            key={category}
            className="mx-auto max-w-5xl rounded-xl bg-creme px-4 py-8 shadow-card sm:px-6 sm:py-12"
            aria-labelledby={`heading-${category.toLowerCase()}`}
          >
            <FadeInSection>
              <h2
                id={`heading-${category.toLowerCase()}`}
                className="mb-6 text-center font-heading text-2xl text-heading-charcoal sm:mb-8 sm:text-4xl"
              >
                Für {category}
              </h2>
            </FadeInSection>

            <FadeInSection>
              <ResponsiveServiceList
                category={category as keyof Services}
                items={items}
              />
            </FadeInSection>
          </section>
        ))}
      </div>

      {/* Abschluss-CTA */}
      <section className="section-wrapper text-center">
        <div className="mx-auto max-w-3xl">
          <FadeInSection>
            <h3 className="mb-4 font-heading text-2xl text-heading-charcoal sm:text-3xl">
              Fragen oder spezielle Wünsche?
            </h3>
          </FadeInSection>
          <FadeInSection>
            <p className="mb-8 font-body text-lg leading-relaxed text-charcoal sm:text-xl">
              Wir beraten Sie gerne individuell zu allen unseren Leistungen und
              finden gemeinsam den perfekten Look für Sie. Zögern Sie nicht, uns
              zu kontaktieren!
            </p>
          </FadeInSection>
          <FadeInSection>
            <AnimatedButton
              href="/kontakt"
              variant="primary"
              className="min-h-[52px] rounded-lg px-8 py-3 text-lg shadow-glow-coral"
            >
              Jetzt Kontakt aufnehmen
            </AnimatedButton>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
