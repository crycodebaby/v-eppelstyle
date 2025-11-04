// app/kontakt/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FadeInSection from "@/components/FadeInSection";
import StickyCTA from "@/components/StickyCTA";
import AnimatedButton from "@/components/AnimatedButton";

/** ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "Kontakt & Termin – EppelStyle Friseur Eppelborn",
  description:
    "Kontaktiere EppelStyle in 66571 Eppelborn für deinen nächsten Friseurtermin. Anruf oder Instagram – wir freuen uns auf dich.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt & Termin – EppelStyle Friseur Eppelborn",
    description:
      "Telefon oder Instagram. So erreichst du EppelStyle in Eppelborn.",
    url: "/kontakt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt & Termin – EppelStyle Friseur Eppelborn",
    description: "Schnell Termin anfragen: Telefon oder Instagram.",
  },
};

const phoneNumber = "+4968815951818";

/** Dein geteilter Google-Maps-Link (für Öffnen/Route) */
const mapsShareUrl = "https://maps.app.goo.gl/LvURVBAfHF5UM4KH7";

/** Saubere Embed-URL für das iFrame (Rendering in der Seite) */
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.001070993938!2d6.962780676901662!3d49.4056899632699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b06dc09e70c9%3A0x8b9287e62f08f78b!2sEppelStyle!5e0!3m2!1sde!2sde!4v1716937647636!5m2!1sde!2sde";

const instagramUrl = "https://www.instagram.com/eppel_style/";

/** ---------- Seite ---------- */
export default function KontaktPage() {
  // JSON-LD: HairSalon mit ContactPoints, SameAs und hasMap
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "EppelStyle Barber",
    url: "https://eppelstyle.de/kontakt",
    telephone: phoneNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirchplatz 11",
      postalCode: "66571",
      addressLocality: "Eppelborn",
      addressCountry: "DE",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [instagramUrl, mapsShareUrl],
    hasMap: mapsShareUrl,
    geo: { "@type": "GeoCoordinates", latitude: 49.40569, longitude: 6.96278 },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: phoneNumber,
        areaServed: "DE",
        availableLanguage: ["de"],
      },
    ],
  };

  return (
    <main className="bg-creme">
      {/* Hero */}
      <Hero
        title="Nimm Kontakt auf"
        subtitle="Für Termin- und Kontaktanfragen erreichst du uns ausschließlich per Telefon oder über Instagram."
        ctaText="Jetzt anrufen"
        ctaLink={`tel:${phoneNumber}`}
        logoSrc="/images/logo/Friseurlogo-Barber-Saarland.png"
      />

      {/* Sticky CTAs (unten rechts) – Direktanruf + Karte */}
      <StickyCTA
        contactHref={`tel:${phoneNumber}`}
        mapsHref={mapsShareUrl}
        mapsLabel="Karte"
      />

      {/* Intro */}
      <section className="section-wrapper text-center">
        <FadeInSection>
          <h1 className="font-heading text-4xl text-heading-charcoal sm:text-5xl">
            Dein direkter Draht zu uns
          </h1>
        </FadeInSection>
        <FadeInSection>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-charcoal sm:text-xl">
            Termin oder Frage? Ruf uns an oder schreib uns auf Instagram.
            Weitere Kontaktwege (E-Mail/Formular) bieten wir aktuell nicht an.
          </p>
        </FadeInSection>
      </section>

      {/* 2-Spalten: Kontakt/Karte/Öffnungszeiten + Hinweis */}
      <section className="section-wrapper pt-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Linke Spalte */}
          <FadeInSection>
            <div className="flex flex-col gap-6 rounded-xl bg-creme p-6 shadow-card sm:p-8">
              <div>
                <h2 className="mb-3 font-heading text-2xl text-heading-charcoal sm:text-3xl">
                  Kontaktdaten
                </h2>
                <address className="not-italic font-body text-base text-charcoal sm:text-lg">
                  <p>EppelStyle Friseur</p>
                  <p>Kirchplatz 11</p>
                  <p>66571 Eppelborn, Saarland</p>
                  <p className="mt-2">
                    Telefon{" "}
                    <a
                      href={`tel:${phoneNumber}`}
                      className="font-medium text-accent-coral hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral"
                    >
                      {phoneNumber.replace("+49", "0")}
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl text-heading-charcoal sm:text-3xl">
                  Terminvereinbarung
                </h2>
                <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
                  Bitte vereinbare deinen Wunschtermin per Telefon oder schreibe
                  uns eine Direktnachricht auf Instagram. So können wir dir am
                  schnellsten antworten und Wartezeiten vermeiden.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <AnimatedButton
                    href={`tel:${phoneNumber}`}
                    variant="primary"
                    ariaLabel="Jetzt telefonisch Termin anfragen"
                    className="px-5"
                  >
                    Jetzt anrufen
                  </AnimatedButton>
                  <AnimatedButton
                    href={instagramUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Über Instagram schreiben"
                    className="px-5"
                  >
                    Instagram öffnen
                  </AnimatedButton>
                </div>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl text-heading-charcoal sm:text-3xl">
                  Öffnungszeiten
                </h2>
                <p className="font-body text-base text-charcoal sm:text-lg">
                  Montag bis Samstag: 09:00–19:00 Uhr
                  <br />
                  Sonntag: geschlossen
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl text-heading-charcoal sm:text-3xl">
                  So findest du uns
                </h2>
                <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-subtle-dark">
                  <iframe
                    className="h-full w-full"
                    src={mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EppelStyle Friseursalon auf Google Maps"
                    aria-label="Karte von EppelStyle in Eppelborn"
                  />
                </div>
                <div className="mt-3">
                  <AnimatedButton
                    href={mapsShareUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Route zu EppelStyle in Google Maps öffnen"
                    className="px-4"
                  >
                    Karte in Google Maps öffnen
                  </AnimatedButton>
                </div>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl text-heading-charcoal sm:text-3xl">
                  Während deines Besuchs
                </h2>
                <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
                  Genieße kostenlose Erfrischungen in unserem einladenden
                  Ambiente. Wir möchten, dass du dich rundum wohlfühlst.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Rechte Spalte: Hinweis statt Formular */}
          <FadeInSection>
            <div className="rounded-xl bg-coral-light/40 p-6 shadow-card sm:p-8">
              <h2 className="mb-4 text-center font-heading text-3xl text-heading-charcoal sm:text-4xl">
                Kontakt & Termine
              </h2>
              <p className="mx-auto max-w-prose text-center font-body text-base leading-relaxed text-charcoal sm:text-lg">
                Aktuell nehmen wir Anfragen ausschließlich per{" "}
                <strong>Telefon</strong> oder via <strong>Instagram</strong>{" "}
                entgegen.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <AnimatedButton
                  href={`tel:${phoneNumber}`}
                  variant="primary"
                  ariaLabel="Jetzt telefonisch Termin anfragen"
                  className="w-full sm:w-auto px-6 py-3.5 text-lg"
                >
                  Jetzt anrufen
                </AnimatedButton>
                <AnimatedButton
                  href={instagramUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="Über Instagram schreiben"
                  className="w-full sm:w-auto px-6 py-3.5 text-lg"
                >
                  Instagram öffnen
                </AnimatedButton>
              </div>
              <p className="mt-4 text-center font-body text-sm text-charcoal/70">
                Danke für dein Verständnis!
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
