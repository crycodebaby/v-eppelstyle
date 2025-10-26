import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";

/** ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "Impressum – EppelStyle Friseur Eppelborn",
  description:
    "Impressum von EppelStyle Barber in 66571 Eppelborn. Anbieterkennzeichnung nach § 5 TMG, Verantwortlicher, Kontakt, Haftungshinweise, Urheberrecht, OS-Plattform und Hosting.",
  alternates: { canonical: "/impressum" },
};

/** ---------- Stammdaten ---------- */
const COMPANY = "EppelStyle Barber";
const RESPONSIBLE = "Kesra Ibrahim";
const STREET = "Kirchplatz 11";
const ZIP_CITY = "66571 Eppelborn";
const COUNTRY = "Deutschland";
const PHONE = "+49 6881 5951818";
const EMAIL = "info@eppelstyle.de";
const WEBSITE = "https://eppelstyle.de";

const INSTAGRAM = "https://www.instagram.com/eppel_style/";
const FACEBOOK = "https://www.facebook.com/people/EppelStyle/61576307230626/";
const MAPS_LINK = "https://g.co/kgs/GDJvoGW";

// freiwillige Felder – bei Bedarf ausfüllen/entfernen
const BUSINESS_FORM = "Einzelunternehmen";
const VAT_ID = ""; // z. B. "DE123456789" – falls vorhanden eintragen, sonst leer lassen
const CHAMBER = ""; // z. B. "Handwerkskammer des Saarlandes" – optional
const PROFESSIONAL_TITLE = "Friseur/Friseurmeister (Deutschland)"; // optional

/** ---------- dezentes SVG-Pattern (Hintergrund) ---------- */
const subtlePattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-opacity='0.18' stroke-width='1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E\")";

/** ---------- Wasserzeichen-Positionen (typisiert) ---------- */
type Watermark = {
  top: string;
  size: number;
  rotate: string;
  left?: string;
  right?: string;
};

const marks: ReadonlyArray<Watermark> = [
  { top: "7%", left: "6%", size: 120, rotate: "-5deg" },
  { top: "20%", right: "8%", size: 160, rotate: "6deg" },
  { top: "46%", left: "12%", size: 110, rotate: "8deg" },
  { top: "64%", right: "12%", size: 140, rotate: "-9deg" },
  { top: "82%", left: "6%", size: 130, rotate: "3deg" },
];

export default function ImpressumPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: COMPANY,
    url: WEBSITE,
    image: `${WEBSITE}/images/logo/Friseurlogo-Barber-Saarland.png`,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET,
      postalCode: ZIP_CITY.split(" ")[0],
      addressLocality: ZIP_CITY.split(" ").slice(1).join(" "),
      addressCountry: "DE",
    },
    sameAs: [INSTAGRAM, FACEBOOK, MAPS_LINK],
  };

  return (
    <main
      className="relative min-h-[100dvh] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FAF8F4 0%, #FFFFFF 60%, #FAF8F4 100%)",
      }}
    >
      {/* zartes Pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: subtlePattern,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(1200px 600px at 50% 10%, rgba(0,0,0,0.25), transparent 70%), radial-gradient(900px 500px at 20% 80%, rgba(0,0,0,0.2), transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(1200px 600px at 50% 10%, rgba(0,0,0,0.25), transparent 70%), radial-gradient(900px 500px at 20% 80%, rgba(0,0,0,0.2), transparent 70%)",
        }}
      />

      {/* mehrere Logo-Wasserzeichen */}
      {marks.map((m, i) => {
        const style: CSSProperties = {
          top: m.top,
          left: m.left,
          right: m.right,
          transform: `rotate(${m.rotate})`,
          filter: "blur(0.2px)",
        };
        return (
          <div
            key={`${m.top}-${m.left ?? m.right}`}
            aria-hidden
            className="pointer-events-none absolute opacity-[0.06]"
            style={style}
          >
            <div className="relative" style={{ width: m.size, height: m.size }}>
              <Image
                src="/images/logo/Friseurlogo-Barber-Saarland.png"
                alt=""
                fill
                className="object-contain"
                priority={i === 0}
              />
            </div>
          </div>
        );
      })}

      {/* Inhalt */}
      <section className="relative mx-auto max-w-3xl px-4 py-12 sm:py-16">
        {/* Kopf */}
        <header className="mb-8 text-center">
          <p className="eyebrow mb-2 text-accent-coral">Recht & Angaben</p>
          <h1 className="font-heading text-4xl text-heading-charcoal sm:text-5xl">
            Impressum
          </h1>
        </header>

        {/* Anbieterkennzeichnung */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/80 p-4 shadow-card backdrop-blur">
            <h2 className="mb-2 font-heading text-xl text-heading-charcoal">
              Anbieter nach § 5 TMG
            </h2>
            <address className="not-italic font-body text-sm leading-6 text-charcoal">
              <strong className="block">{COMPANY}</strong>
              {RESPONSIBLE}
              <br />
              {STREET}
              <br />
              {ZIP_CITY}, {COUNTRY}
              <br />
              Telefon: {PHONE}
              <br />
              E-Mail:{" "}
              <a className="text-accent-coral" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </address>
          </div>

          <div className="rounded-xl bg-white/80 p-4 shadow-card backdrop-blur">
            <h2 className="mb-2 font-heading text-xl text-heading-charcoal">
              Unternehmensangaben
            </h2>
            <ul className="list-[square] pl-5 font-body text-sm leading-6 text-charcoal">
              <li>Rechtsform: {BUSINESS_FORM}</li>
              {PROFESSIONAL_TITLE && (
                <li>Berufsbezeichnung: {PROFESSIONAL_TITLE}</li>
              )}
              {CHAMBER && <li>Zuständige Kammer: {CHAMBER}</li>}
              {VAT_ID ? (
                <li>USt-IdNr.: {VAT_ID}</li>
              ) : (
                <li>USt-IdNr.: nicht angegeben</li>
              )}
              <li>Hosting: Vercel Inc., USA</li>
            </ul>
          </div>
        </div>

        {/* Erreichbarkeit & Social */}
        <div className="mb-8 rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
            Erreichbarkeit & Social Media
          </h2>
          <p className="font-body leading-7 text-charcoal">
            Du erreichst uns telefonisch oder per E-Mail. Außerdem über unsere
            Social-Media-Kanäle:
          </p>
          <ul className="mt-3 list-disc pl-5 font-body leading-7 text-charcoal">
            <li>
              Instagram:{" "}
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                @eppel_style
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                EppelStyle – Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Haftung für Inhalte */}
        <div className="mb-8 rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
            Haftung für Inhalte
          </h2>
          <p className="font-body leading-7 text-charcoal">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-3 font-body leading-7 text-charcoal">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </div>

        {/* Haftung für Links */}
        <div className="mb-8 rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
            Haftung für Links
          </h2>
          <p className="font-body leading-7 text-charcoal">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
          <p className="mt-3 font-body leading-7 text-charcoal">
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>

        {/* Urheberrecht */}
        <div className="mb-8 rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
            Urheberrecht
          </h2>
          <p className="font-body leading-7 text-charcoal">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p className="mt-3 font-body leading-7 text-charcoal">
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Solltest du trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>

        {/* Verbraucherstreitbeilegung / OS-Plattform */}
        <div className="mb-8 rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
            Verbraucherstreitbeilegung & OS-Plattform
          </h2>
          <p className="font-body leading-7 text-charcoal">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-coral underline-offset-2 hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>
          <p className="mt-3 font-body leading-7 text-charcoal">
            Wir sind nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen (§ 36 VSBG).
          </p>
        </div>

        {/* Bildnachweise / Credits */}
        <div className="mb-8 rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
          <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
            Bildnachweise & Marken
          </h2>
          <p className="font-body leading-7 text-charcoal">
            Eigene Aufnahmen und Materialien von EppelStyle Barber. Logos und
            Marken sind Eigentum der jeweiligen Rechteinhaber.
          </p>
        </div>
      </section>

      {/* JSON-LD für Rich Results */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD für SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
