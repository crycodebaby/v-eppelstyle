import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FadeInSection from "@/components/FadeInSection";
import StickyCTA from "@/components/StickyCTA";
import AnimatedButton from "@/components/AnimatedButton";

/** ---------- SEO / Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Über uns – EppelStyle Friseurmeister in Eppelborn | Team & Philosophie",
  description:
    "Lerne EppelStyle kennen: Meisterbetrieb in 66571 Eppelborn mit Herz für moderne Haarschnitte und präzise Barber-Styles. Für Damen, Herren & Kids. Wir sind für dich da – auch aus Lebach, Illingen, Uchtelfangen, Schmelz und Umgebung.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns – EppelStyle Friseurmeister in Eppelborn",
    description:
      "Team, Werte und Salon von EppelStyle: moderne Haarschnitte, präzise Fades und ehrliche Beratung in 66571 Eppelborn.",
    url: "/ueber-uns",
    type: "website",
    images: [
      {
        url: "/images/team/kesra_ibrahim_eppelstyle_portrait.webp",
        width: 1080,
        height: 1350,
        alt: "Kesra Ibrahim – Inhaber von EppelStyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns – EppelStyle Friseurmeister in Eppelborn",
    description:
      "Lerne Team & Philosophie von EppelStyle kennen. Friseurmeisterbetrieb für Damen, Herren & Kids in Eppelborn.",
  },
};

/** ---------- Team-Daten ---------- */
type TeamMember = {
  name: string;
  role: string;
  image: string;
  desc: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mohsin",
    role: "Stylingexperte Herren",
    image: "/images/team/Mohsin-eppelstyle.png",
    desc: "Über 15 Jahre Erfahrung, präzises Handwerk und ein klares Ziel: ein Salon, in dem sich jede Person willkommen fühlt – mit ehrlicher Beratung und Ergebnissen, die lange Freude machen.",
  },
  {
    name: "Alan",
    role: "Top-Stylist & Farbexperte",
    image: "/images/team/Alan-eppelstyle.png",
    desc: "Leidenschaft für Farbarbeiten, Balayage und typgerechte Damenhaarschnitte. Sorgfalt, Kreativität und feines Gespür für Nuancen.",
  },
  {
    name: "Berzan",
    role: "Barber & Herren-Spezialist",
    image: "/images/team/Berzan-eppelstyle.png",
    desc: "Klassische Barber-Techniken, moderne Fades und exakte Konturen. Präzision, Stil und entspannte Atmosphäre am Stuhl.",
  },
];

/** ---------- Werte / Philosophie ---------- */
const philosophiePunkte = [
  {
    icon: "🌟",
    title: "Höchste Qualität",
    text: "Wir arbeiten mit hochwertigen Produkten und präzisen Techniken für Ergebnisse, die überzeugen – heute und in den Wochen danach.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Familienfreundlich",
    text: "Bei uns fühlen sich Klein und Groß wohl. Geduld, Komfort und eine entspannte Atmosphäre sind Standard.",
  },
  {
    icon: "✂️",
    title: "Modern & Handwerk",
    text: "Wir verbinden Meister-Know-how mit Trends und stetiger Weiterbildung – für Schnitte, die zu dir passen.",
  },
  {
    icon: "😊",
    title: "Beratung mit Herz",
    text: "Wir hören zu, beraten ehrlich und empfehlen Styles, die deinen Alltag und deinen Look besser machen.",
  },
];

/** ---------- Service-Gebiet (für SEO kopiert in JSON-LD) ---------- */
const serviceArea = [
  { name: "Eppelborn", postalCode: "66571" },
  { name: "Lebach" },
  { name: "Illingen" },
  { name: "Uchtelfangen" },
  { name: "Schmelz" },
  { name: "Heusweiler" },
  { name: "Nalbach" },
];

/** ---------- Seite ---------- */
export default function UeberUnsPage() {
  // JSON-LD: HairSalon + ServiceArea
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "EppelStyle Barber",
    url: "https://eppelstyle.de",
    image: "/images/team/kesra_ibrahim_eppelstyle_portrait.webp",
    telephone: "+4968815951818",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirchplatz 11",
      postalCode: "66571",
      addressLocality: "Eppelborn",
      addressCountry: "DE",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [
      "https://g.co/kgs/GDJvoGW",
      "https://www.instagram.com/eppel_style/",
    ],
    areaServed: serviceArea.map((s) => ({
      "@type": "AdministrativeArea",
      name: s.postalCode ? `${s.name} ${s.postalCode}` : s.name,
    })),
  };

  return (
    <main className="bg-creme">
      {/* Hero für Über uns */}
      <Hero
        title="Wer wir sind"
        subtitle="Leidenschaft für Haare, Herz für Menschen – willkommen bei EppelStyle."
        ctaText="Termin vereinbaren"
        ctaLink="/kontakt"
        logoSrc="/images/logo/Friseurlogo-Barber-Saarland.png"
      />

      {/* Sticky Call-to-Actions */}
      <StickyCTA
        contactHref="/kontakt"
        mapsHref="https://g.co/kgs/GDJvoGW"
        mapsLabel="Karte"
      />

      {/* Vision / Story */}
      <section className="section-wrapper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <FadeInSection>
            <div>
              <p className="eyebrow mb-2 text-accent-coral">Unser Anspruch</p>
              <h1 className="mb-5 font-heading text-3xl text-heading-charcoal sm:text-4xl lg:text-5xl">
                Die Vision von EppelStyle
              </h1>
              <p className="mb-4 font-body text-lg leading-relaxed text-charcoal sm:text-xl">
                Inhaber <strong>Kesra Ibrahim</strong>, Friseurmeister mit über
                15&nbsp;Jahren Erfahrung, verbindet modernes Handwerk mit
                ehrlicher Beratung. Ziel ist ein Ort, an dem sich jede Person –
                vom Kind bis zur Seniorin – willkommen und bestens aufgehoben
                fühlt.
              </p>
              <p className="mb-4 font-body text-lg leading-relaxed text-charcoal sm:text-xl">
                Wir stehen für präzise Haarschnitte, saubere Konturen und Looks,
                die zu dir passen. Ob schnelle Auffrischung oder kompletter
                Typwechsel – wir nehmen uns Zeit und liefern Qualität.
              </p>
              <p className="font-body text-lg leading-relaxed text-charcoal sm:text-xl">
                Du kommst aus <strong>Eppelborn 66571</strong> oder aus der
                Umgebung wie <strong>Lebach</strong>, <strong>Illingen</strong>,{" "}
                <strong>Uchtelfangen</strong> oder <strong>Schmelz</strong>?
                Schön, dass du da bist – wir freuen uns auf dich!
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <AnimatedButton
                  href="/kontakt"
                  variant="primary"
                  ariaLabel="Termin anfragen"
                >
                  Termin anfragen
                </AnimatedButton>
                <AnimatedButton
                  href="https://g.co/kgs/GDJvoGW"
                  variant="secondary"
                  ariaLabel="EppelStyle auf Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zu Google&nbsp;Maps
                </AnimatedButton>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-subtle-dark">
              <Image
                src="/images/team/kesra_ibrahim_eppelstyle_portrait.webp"
                alt="Kesra Ibrahim, Inhaber und Friseurmeister bei EppelStyle in Eppelborn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Philosophie / Werte */}
      <section className="section-wrapper bg-coral-light/30">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <h2 className="mb-10 text-center font-heading text-3xl text-heading-charcoal sm:text-4xl lg:text-5xl">
              Unsere Werte – dein Erlebnis
            </h2>
          </FadeInSection>

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {philosophiePunkte.map((p) => (
              <FadeInSection key={p.title}>
                <li className="rounded-lg bg-creme p-6 text-center shadow-card">
                  <div className="mb-3 text-4xl sm:text-5xl" aria-hidden="true">
                    {p.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-heading-charcoal sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-charcoal/90">
                    {p.text}
                  </p>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="section-wrapper">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <h2 className="mb-12 text-center font-heading text-3xl text-heading-charcoal sm:text-4xl lg:text-5xl">
              Lerne unser Team kennen
            </h2>
          </FadeInSection>

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
            {teamMembers.map((m) => (
              <li
                key={m.name}
                className="group relative overflow-hidden rounded-xl bg-creme shadow-card"
              >
                <div className="relative aspect-square">
                  <Image
                    src={m.image}
                    alt={`Portrait von ${m.name}, ${m.role} bei EppelStyle`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-heading-charcoal sm:text-2xl">
                    {m.name}
                  </h3>
                  <p className="mb-2 font-body text-base text-accent-coral">
                    {m.role}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-charcoal/90">
                    {m.desc}
                  </p>
                </div>

                {/* Hover Overlay (rein dekorativ, no motion in Server-Page) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div className="absolute inset-0 bg-charcoal/10" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service-Gebiet Hinweis */}
      <section className="section-wrapper bg-coral-light/40">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <h2 className="mb-6 text-center font-heading text-2xl text-heading-charcoal sm:text-3xl">
              Wir sind für dich da – in Eppelborn und Umgebung
            </h2>
          </FadeInSection>
          <FadeInSection>
            <p className="mx-auto max-w-3xl text-center font-body text-lg leading-relaxed text-charcoal sm:text-xl">
              Unser Salon befindet sich in <strong>66571 Eppelborn</strong>.
              Viele unserer Gäste kommen außerdem aus <strong>Lebach</strong>,{" "}
              <strong>Illingen</strong>, <strong>Uchtelfangen</strong>,{" "}
              <strong>Schmelz</strong>, <strong>Heusweiler</strong> und der
              ganzen Region.
            </p>
          </FadeInSection>

          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2 text-sm text-charcoal/80">
            {serviceArea.map((s) => (
              <li
                key={s.name}
                className="rounded-full bg-creme px-3 py-1 shadow-card"
              >
                {s.postalCode ? `${s.name} ${s.postalCode}` : s.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JSON-LD ausspielen */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
