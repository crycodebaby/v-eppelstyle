// app/page.tsx
import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import DecorativeIcon from "@/components/DecorativeIcon";
import PriceTabs from "@/components/PriceTabs";
import FadeInSection from "@/components/FadeInSection";

// ---- Daten
type PriceItem = {
  name: string;
  length: string;
  price: string;
  tooltip?: string;
};
export type PriceCategories = { Herren: PriceItem[]; Damen: PriceItem[] };

const priceCategories: PriceCategories = {
  Herren: [
    { name: "Haarschnitt (klassisch & modern)", length: "-", price: "22€" },
    { name: "Maschinenschnitt (eine Länge)", length: "-", price: "18€" },
    { name: "Bartrasur & Pflege", length: "-", price: "15€" },
    { name: "Komplett Paket (Schnitt & Bart)", length: "-", price: "38€" },
    { name: "Kinderhaarschnitt (bis 10 J.)", length: "-", price: "16€" },
    { name: "Färben / Blondierung", length: "-", price: "ab 35€" },
    { name: "Dauerwelle", length: "-", price: "ab 50€" },
    { name: "Gesichtsmaske (entspannend)", length: "-", price: "8€" },
    { name: "Augenbrauen zupfen (Fadentechnik)", length: "-", price: "8€" },
    {
      name: "Haarschnitt (Schüler/Student/Azubi)",
      length: "-",
      price: "19€",
      tooltip: "Mit gültigem Ausweis",
    },
  ],
  Damen: [
    { name: "Trockenhaarschnitt", length: "-", price: "28€" },
    {
      name: "Waschen, Schneiden, Föhnen",
      length: "Kurz",
      price: "38€",
      tooltip: "Haarlänge bis Kinn",
    },
    {
      name: "Waschen, Schneiden, Föhnen",
      length: "Mittel",
      price: "45€",
      tooltip: "Haarlänge bis Schulter",
    },
    {
      name: "Waschen, Schneiden, Föhnen",
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
    { name: "Komplett färben", length: "Kurz", price: "ab 40€" },
    { name: "Komplett färben", length: "Mittel", price: "ab 50€" },
    { name: "Komplett färben", length: "Lang", price: "ab 60€" },
    { name: "Blondierung / Aufhellung", length: "-", price: "ab 55€" },
    { name: "Foliensträhnen", length: "-", price: "ab 45€" },
    {
      name: "Balayage / Ombré",
      length: "-",
      price: "ab 80€",
      tooltip: "Individuelle Farbtechniken",
    },
    { name: "Tönung", length: "Kurz", price: "ab 25€" },
    { name: "Tönung", length: "Mittel", price: "ab 30€" },
    { name: "Tönung", length: "Lang", price: "ab 35€" },
    { name: "Dauerwelle", length: "Kurz", price: "ab 50€" },
    { name: "Dauerwelle", length: "Mittel", price: "ab 60€" },
    { name: "Dauerwelle", length: "Lang", price: "ab 75€" },
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

const statsItems = [
  { end: 2, text: "Jahre Leidenschaft & Erfahrung", icon: "scissors" as const },
  { end: 612, text: "Glückliche Stammkunden", icon: "family" as const },
  { end: 78, text: "Strahlende Kinderaugen pro Monat", icon: "child" as const },
];

const leistungenPreviewItems = [
  {
    img: "/images/bild1.png",
    title: "Für unsere Kleinsten",
    text: "Geduldige und spielerische Haarschnitte, die Spaß machen.",
  },
  {
    img: "/images/bild2.png",
    title: "Für Sie: Eleganz & Stil",
    text: "Moderne Schnitte, brillante Farben und typgerechte Beratung.",
  },
  {
    img: "/images/bild3.png",
    title: "Für Ihn: Präzision & Pflege",
    text: "Klassische Schnitte, trendige Styles und professionelle Bartkunst.",
  },
];

const oeffnungszeitenItems = [
  {
    title: "Unsere Öffnungszeiten",
    text: "Montag – Samstag: 09:00 – 19:00 Uhr",
  },
  {
    title: "Terminvereinbarung",
    text: (
      <>
        Telefon:{" "}
        <a
          href="tel:+4968815951818"
          className="rounded font-semibold text-accent-coral hover:underline focus:outline-none focus:ring-2 focus:ring-accent-coral"
        >
          06881 5951818
        </a>
        <br />
        Wir freuen uns auf Ihren Anruf!
      </>
    ),
  },
];

const bewertungenItems = [
  {
    quote:
      "Ein wunderbarer Salon für die ganze Familie! Super freundlich und das Ergebnis ist immer top.",
    author: "Anna M.",
    avatar: "/images/bild4.png",
  },
  {
    quote:
      "Meine Kinder lieben es, hierher zu kommen. Kesra ist einfach toll mit ihnen! Sehr zu empfehlen.",
    author: "Markus S.",
    avatar: "/images/bild5.png",
  },
  {
    quote:
      "Endlich ein Friseur in Eppelborn, der moderne Schnitte und Farben perfekt umsetzt. Bin Stammkundin!",
    author: "Lisa K.",
    avatar: "/images/bild6.png",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="EppelStyle"
        subtitle="Ihr Friseurmeister in Eppelborn – mit Herz und Handwerk."
        ctaText="Termin vereinbaren"
        ctaLink="/kontakt"
        logoSrc="/images/logo/Friseurlogo-Barber-Saarland.png"
      />

      {/* Willkommen */}
      <section className="section-wrapper text-center">
        <FadeInSection className="eyebrow mb-2">Willkommen</FadeInSection>
        <FadeInSection>
          <h2 className="mb-6 font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Herzlich Willkommen bei EppelStyle
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-charcoal sm:text-xl">
            Ihrem Friseursalon in Eppelborn, wo meisterhaftes Handwerk auf eine
            warme, familiäre Atmosphäre trifft. Wir nehmen uns Zeit für Sie und
            Ihre Wünsche – für Haarschnitte, die Ihre Persönlichkeit
            unterstreichen.
          </p>
        </FadeInSection>
      </section>

      {/* Über uns */}
      <section className="section-wrapper bg-coral-light/40 text-center">
        <FadeInSection>
          <h2 className="mb-6 font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Ihr Meisterbetrieb mit Herz & Stil
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="mx-auto mb-8 max-w-3xl font-body text-lg leading-relaxed text-charcoal sm:text-xl">
            Inhaber Kesra Ibrahim, Friseurmeister aus Leidenschaft, hat mit
            EppelStyle einen Ort geschaffen, an dem sich jeder Gast – ob groß
            oder klein – sofort wohl und bestens beraten fühlt. Qualität und
            Ihre Zufriedenheit sind unser täglicher Antrieb.
          </p>
        </FadeInSection>
        <FadeInSection>
          <figure>
            <blockquote className="mx-auto max-w-2xl font-body text-lg italic leading-relaxed text-charcoal sm:text-xl">
              <p>
                „Es ist erfreulich, dass sich mit Eppelstyle ein weiterer
                moderner Dienstleistungsbetrieb in unserer Gemeinde ansiedelt.“
              </p>
            </blockquote>
            <figcaption className="mt-3 text-base">
              – Bürgermeister Andreas Feld
            </figcaption>
          </figure>
        </FadeInSection>
      </section>

      {/* Stats */}
      <section className="section-wrapper text-center">
        <FadeInSection>
          <h2 className="mb-12 font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Momente, die begeistern
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {statsItems.map((s, i) => (
            <FadeInSection key={i}>
              <div className="rounded-xl bg-creme p-6 py-8 shadow-card transition-shadow duration-300 hover:shadow-subtle-dark">
                <DecorativeIcon
                  type={s.icon}
                  className="mx-auto mb-5 h-14 w-14 text-accent-coral"
                />
                <h3 className="mb-2 font-heading text-5xl text-accent-coral sm:text-6xl">
                  <AnimatedCounter end={s.end} durationMs={2500} />+
                </h3>
                <p className="font-body text-lg text-charcoal">{s.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Leistungen Preview */}
      <section className="section-wrapper">
        <FadeInSection>
          <h2 className="mb-12 text-center font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Unsere Expertise für Sie
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
          {leistungenPreviewItems.map((it, idx) => (
            <FadeInSection key={idx}>
              <article className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-xl shadow-card">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="mb-2 font-heading text-2xl text-creme lg:text-3xl">
                    {it.title}
                  </h3>
                  <p className="font-body text-base text-creme/90 lg:text-lg">
                    {it.text}
                  </p>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Preise */}
      <section className="section-wrapper bg-coral-light/40 text-center">
        <FadeInSection>
          <h2 className="mb-6 font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Faire Preise, beste Qualität
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="mx-auto mb-10 max-w-3xl font-body text-lg leading-relaxed text-charcoal sm:text-xl">
            Transparenz und erstklassiger Service zu fairen Konditionen. Alle
            Preise verstehen sich inklusive Beratung und hochwertiger Produkte.
          </p>
        </FadeInSection>

        <PriceTabs categories={priceCategories} />
      </section>

      {/* Öffnungszeiten + CTA */}
      <section className="section-wrapper text-center">
        <FadeInSection>
          <h2 className="mb-10 font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Wir freuen uns auf Ihren Besuch!
          </h2>
        </FadeInSection>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {oeffnungszeitenItems.map((it, i) => (
            <FadeInSection key={i}>
              <div className="rounded-xl bg-creme p-6 py-8 shadow-card transition-shadow duration-300 hover:shadow-subtle-dark">
                <h3 className="mb-3 text-2xl font-semibold text-heading-charcoal sm:text-3xl">
                  {it.title}
                </h3>
                <p className="font-body text-lg leading-relaxed text-charcoal">
                  {it.text}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection className="mt-12">
          <AnimatedButton
            href="/kontakt"
            variant="primary"
            className="min-h-[56px] rounded-lg px-10 py-3.5 text-xl shadow-glow-coral"
          >
            Jetzt Termin anfragen
          </AnimatedButton>
        </FadeInSection>
      </section>

      {/* Bewertungen */}
      <section className="section-wrapper bg-coral-light/40">
        <FadeInSection>
          <h2 className="mb-12 text-center font-heading text-4xl text-heading-charcoal sm:text-5xl lg:text-5xl">
            Stimmen unserer Kunden
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
          {bewertungenItems.map((r, i) => (
            <FadeInSection key={i}>
              <figure className="flex flex-col rounded-xl bg-creme p-6 py-8 text-center shadow-card transition-shadow duration-300 hover:shadow-subtle-dark">
                <div className="mb-4 flex items-center justify-center">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className="h-5 w-5 fill-accent-coral"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 flex-grow font-body text-base italic text-charcoal sm:text-lg">
                  {`"${r.quote}"`}
                </p>
                <figcaption className="font-body text-base font-semibold text-heading-charcoal">
                  – {r.author}
                </figcaption>
              </figure>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection className="mt-12 text-center">
          <p className="font-body text-lg text-charcoal">
            Überzeugt? Lesen Sie{" "}
            <a
              href="https://g.co/kgs/GDJvoGW"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-semibold text-accent-coral hover:underline focus:outline-none focus:ring-2 focus:ring-accent-coral"
            >
              alle unsere Google-Bewertungen
            </a>
            .
          </p>
        </FadeInSection>
      </section>
    </main>
  );
}
