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
    "Kontaktiere EppelStyle in 66571 Eppelborn für deinen nächsten Friseurtermin. Adresse, Öffnungszeiten, Telefon, E-Mail oder Formular. Wir freuen uns auf dich.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt & Termin – EppelStyle Friseur Eppelborn",
    description:
      "Telefon, E-Mail, Kontaktformular und Wegbeschreibung. So erreichst du EppelStyle in Eppelborn.",
    url: "/kontakt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt & Termin – EppelStyle Friseur Eppelborn",
    description:
      "Schnell Termin anfragen: Telefon, E-Mail, Kontaktformular oder Social Media.",
  },
};

const phoneNumber = "+4968815951818";
const emailAddress = "eppelstyle8@gmail.com";

/** Dein geteilter Google-Maps-Link (für Öffnen/Route) */
const mapsShareUrl = "https://maps.app.goo.gl/LvURVBAfHF5UM4KH7";

/** Saubere Embed-URL für das iFrame (Rendering in der Seite) */
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.001070993938!2d6.962780676901662!3d49.4056899632699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b06dc09e70c9%3A0x8b9287e62f08f78b!2sEppelStyle!5e0!3m2!1sde!2sde!4v1716937647636!5m2!1sde!2sde";

const instagramUrl = "https://www.instagram.com/eppel_style/";
const facebookUrl =
  "https://www.facebook.com/people/EppelStyle/61576307230626/";

/** ---------- Seite ---------- */
export default function KontaktPage() {
  // JSON-LD: HairSalon mit ContactPoints, SameAs und hasMap
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "EppelStyle Barber",
    url: "https://eppelstyle.de/kontakt",
    telephone: phoneNumber,
    email: emailAddress,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirchplatz 11",
      postalCode: "66571",
      addressLocality: "Eppelborn",
      addressCountry: "DE",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [instagramUrl, facebookUrl, mapsShareUrl],
    hasMap: mapsShareUrl,
    geo: { "@type": "GeoCoordinates", latitude: 49.40569, longitude: 6.96278 },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: phoneNumber,
        email: emailAddress,
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
        subtitle="Wir freuen uns auf deine Nachricht oder deinen Anruf für den nächsten Wohlfühltermin."
        ctaText="Jetzt anrufen"
        ctaLink={`tel:${phoneNumber}`}
        logoSrc="/images/logo/Friseurlogo-Barber-Saarland.png"
      />

      {/* Sticky CTAs (unten rechts) – nutzt den Share-Link */}
      <StickyCTA
        contactHref="/kontakt#formular"
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
            Am besten erreichst du uns telefonisch oder per E-Mail. Du kannst
            auch das Formular nutzen oder uns auf Instagram und Facebook
            schreiben.
          </p>
        </FadeInSection>
      </section>

      {/* 2-Spalten: Kontakt/Karte/Öffnungszeiten + Formular */}
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
                  <p>
                    E-Mail{" "}
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-medium text-accent-coral hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral"
                    >
                      {emailAddress}
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl text-heading-charcoal sm:text-3xl">
                  Terminvereinbarung
                </h2>
                <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
                  Ruf uns an oder schreib eine E-Mail für deinen Wunschtermin.
                  Spontane Besuche sind willkommen. Wir empfehlen eine
                  Terminvereinbarung, damit du keine Wartezeit hast.
                </p>
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
                  Social Media
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <AnimatedButton
                    href={instagramUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Über Instagram schreiben"
                    className="px-4"
                  >
                    <span className="inline-flex items-center gap-2">
                      {/* Insta Icon */}
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                      </svg>
                      Instagram
                    </span>
                  </AnimatedButton>

                  <AnimatedButton
                    href={facebookUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Über Facebook schreiben"
                    className="px-4"
                  >
                    <span className="inline-flex items-center gap-2">
                      {/* FB Icon */}
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887h-2.33v6.988A10.001 10.001 0 0 0 22 12z" />
                      </svg>
                      Facebook
                    </span>
                  </AnimatedButton>
                </div>
                <p className="mt-2 font-body text-sm text-charcoal/80">
                  Du kannst Termine auch über Instagram oder Facebook anfragen.
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

          {/* Rechte Spalte: Formular (Formcarry) */}
          <FadeInSection>
            <div
              id="formular"
              className="rounded-xl bg-coral-light/40 p-6 shadow-card sm:p-8"
            >
              <h2 className="mb-6 text-center font-heading text-3xl text-heading-charcoal sm:text-4xl">
                Schreib uns eine Nachricht
              </h2>

              {/* >>>>>>>>>>>>>>>>>  FORM CARRY  <<<<<<<<<<<<<<<<< */}
              <form
                action="https://formcarry.com/s/AhVw9wwKz96"
                method="POST"
                acceptCharset="UTF-8"
                className="space-y-5 sm:space-y-6"
                aria-label="Kontaktformular EppelStyle"
                noValidate
              >
                {/* Honeypot gegen Spam (unsichtbar für Nutzer) */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-body text-base font-medium text-charcoal sm:text-lg"
                  >
                    Dein Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Max Mustermann"
                    className="w-full rounded-lg border border-subtle bg-creme p-3 font-body text-base text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-accent-coral"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-body text-base font-medium text-charcoal sm:text-lg"
                  >
                    Deine E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="max.mustermann@beispiel.de"
                    className="w-full rounded-lg border border-subtle bg-creme p-3 font-body text-base text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-accent-coral"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-body text-base font-medium text-charcoal sm:text-lg"
                  >
                    Deine Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Worum geht es bei deiner Anfrage?"
                    className="w-full rounded-lg border border-subtle bg-creme p-3 font-body text-base text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-accent-coral"
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  variant="primary"
                  className="w-full py-3.5 text-lg"
                  ariaLabel="Nachricht senden"
                >
                  Nachricht senden
                </AnimatedButton>

                <p className="text-center font-body text-sm text-charcoal/70">
                  Alternativ{" "}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="font-medium text-accent-coral hover:underline"
                  >
                    {phoneNumber.replace("+49", "0")}
                  </a>{" "}
                  oder{" "}
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-medium text-accent-coral hover:underline"
                  >
                    {emailAddress}
                  </a>
                  .
                </p>
              </form>
              {/* >>>>>>>>>>>>>>>>>  /FORM CARRY  <<<<<<<<<<<<<<<<< */}
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
