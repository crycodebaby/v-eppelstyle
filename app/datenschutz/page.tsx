import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";

/** ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "Datenschutz – EppelStyle Friseur Eppelborn",
  description:
    "Datenschutzhinweise von EppelStyle in 66571 Eppelborn. Informationen zu Hosting (Vercel), Kontaktformular (Formspree), Social Links, Rechtsgrundlagen und Betroffenenrechten.",
  alternates: { canonical: "/datenschutz" },
};

/** ---------- Stammdaten ---------- */
const COMPANY = "EppelStyle Barber";
const RESPONSIBLE = "Kesra Ibrahim";
const STREET = "Kirchplatz 11";
const ZIP_CITY = "66571 Eppelborn";
const COUNTRY = "Deutschland";
const PHONE = "+49 6881 5951818";
const EMAIL = "info@eppelstyle.de";

const MAPS_LINK = "https://g.co/kgs/GDJvoGW";
const VERCEL_PRIVACY = "https://vercel.com/legal/privacy-policy";
const VERCEL_DPA = "https://vercel.com/legal/dpa";
const FORMSPREE_PRIVACY = "https://formspree.io/legal/privacy-policy";
const INSTAGRAM = "https://www.instagram.com/eppel_style/";
const FACEBOOK = "https://www.facebook.com/people/EppelStyle/61576307230626/";
const LAST_UPDATE = "26.10.2025";

/** ---------- dezentes SVG-Pattern (Hintergrund) ---------- */
const subtlePattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-opacity='0.18' stroke-width='1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E\")";

/** ---------- Typ für die Wasserzeichen-Positionen (ohne any) ---------- */
type Watermark = {
  top: string;
  size: number;
  rotate: string;
  left?: string;
  right?: string;
};

const marks: ReadonlyArray<Watermark> = [
  { top: "6%", left: "5%", size: 120, rotate: "-6deg" },
  { top: "18%", right: "8%", size: 160, rotate: "4deg" },
  { top: "42%", left: "12%", size: 110, rotate: "8deg" },
  { top: "60%", right: "12%", size: 140, rotate: "-10deg" },
  { top: "78%", left: "5%", size: 130, rotate: "2deg" },
];

export default function DatenschutzPage() {
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
          <p className="eyebrow mb-2 text-accent-coral">Recht & Datenschutz</p>
          <h1 className="font-heading text-4xl text-heading-charcoal sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-2 font-body text-sm text-charcoal/70">
            Stand: {LAST_UPDATE}
          </p>
        </header>

        {/* Einleitung – kurz, in Karten */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/80 p-4 shadow-card backdrop-blur">
            <h2 className="mb-2 font-heading text-xl text-heading-charcoal">
              Verantwortlicher
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
              Kurzfassung
            </h2>
            <ul className="list-disc pl-5 font-body text-sm leading-6 text-charcoal">
              <li>Kein Werbe-Tracking, keine Marketing-Cookies.</li>
              <li>Hosting bei Vercel, Formular via Formspree.</li>
              <li>Social Links sind einfache, freiwillige Verweise.</li>
            </ul>
          </div>
        </div>

        {/* Abschnitte – kurze Paragraphen & Listen */}
        <div className="space-y-8">
          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              1. Zwecke & Rechtsgrundlagen
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Wir verarbeiten personenbezogene Daten ausschließlich, um diese
              Website bereitzustellen, Anfragen zu beantworten und gesetzliche
              Pflichten zu erfüllen.
            </p>
            <ul className="mt-3 list-disc pl-5 font-body leading-7 text-charcoal">
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung)</li>
              <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Pflichten)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
            </ul>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              2. Hosting (Vercel) & Server-Logs
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Beim Aufruf unserer Seiten verarbeitet Vercel technisch notwendige
              Daten (z.&nbsp;B. IP, Zeitpunkt, User-Agent, Referrer) zur
              Sicherstellung von Stabilität, Sicherheit und Performance
              (berechtigtes Interesse).
            </p>
            <p className="mt-3 font-body leading-7 text-charcoal">
              Details:{" "}
              <a
                href={VERCEL_PRIVACY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                Vercel Privacy
              </a>{" "}
              ·{" "}
              <a
                href={VERCEL_DPA}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                Vercel DPA
              </a>
              . Übermittlungen in die USA erfolgen mit geeigneten Garantien (u.
              a. EU-Standardvertragsklauseln).
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              3. Kontakt (E-Mail/Telefon/Formular via Formspree)
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Bei Kontakt verarbeiten wir die mitgeteilten Daten zur Bearbeitung
              deiner Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
            <p className="mt-3 font-body leading-7 text-charcoal">
              Das Formular wird über Formspree bereitgestellt. Informationen:{" "}
              <a
                href={FORMSPREE_PRIVACY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                Formspree Privacy
              </a>
              . Es kann zu Übermittlungen in die USA kommen (mit Garantien).
            </p>
            <p className="mt-3 font-body leading-7 text-charcoal">
              Löschung erfolgt, sobald die Bearbeitung abgeschlossen ist,
              vorbehaltlich gesetzlicher Aufbewahrungspflichten.
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              4. Social-Media-Links
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Unsere Verweise auf{" "}
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                Instagram
              </a>{" "}
              &{" "}
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                Facebook
              </a>{" "}
              sind reine Links. Eine Datenübertragung findet erst nach Anklicken
              statt. Für die weitere Verarbeitung ist der jeweilige Anbieter
              verantwortlich.
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              5. Karten (Google Maps – extern)
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Wenn du unsere Kartenansicht nutzt (z. B. über den Link zu{" "}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-coral underline-offset-2 hover:underline"
              >
                Google Maps
              </a>
              ), findet die Verarbeitung bei Google in eigener Verantwortung
              statt. Der Aufruf ist freiwillig.
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              6. Cookies, Tracking & Analyse
            </h2>
            <ul className="list-disc pl-5 font-body leading-7 text-charcoal">
              <li>Keine Marketing-Cookies.</li>
              <li>
                Optional: technisch-aggregierte Messungen (z. B. Performance),
                ohne Nutzerprofile (berechtigtes Interesse).
              </li>
            </ul>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              7. Empfänger & Drittlandübermittlungen
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Empfänger sind die genannten Dienstleister (Vercel, Formspree) als
              Auftragsverarbeiter. Drittländer (USA) mit geeigneten Garantien
              (u. a. EU-SCC).
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              8. Speicherdauer
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Daten werden gelöscht, sobald der Zweck entfällt und keine
              gesetzlichen Pflichten entgegenstehen.
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              9. Deine Rechte
            </h2>
            <ul className="list-disc pl-5 font-body leading-7 text-charcoal">
              <li>
                Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit
              </li>
              <li>Widerspruch (Art. 21 DSGVO) bei lit. e/f-Verarbeitungen</li>
              <li>Beschwerde bei der Aufsichtsbehörde (z. B. LfDI Saarland)</li>
            </ul>
            <p className="mt-3 font-body leading-7 text-charcoal">
              Kontakt:{" "}
              <a className="text-accent-coral" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              10. Erforderlichkeit & Sicherheit
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Für die reine Nutzung der Website ist die Bereitstellung von Daten
              nicht erforderlich. Für Kontaktanfragen benötigen wir die
              zweckbezogenen Angaben. Übertragung per TLS, technische &
              organisatorische Maßnahmen zum Schutz deiner Daten.
            </p>
          </section>

          <section className="rounded-xl bg-white/80 p-6 shadow-card backdrop-blur">
            <h2 className="mb-3 font-heading text-2xl text-heading-charcoal">
              11. Haftung & Änderungen
            </h2>
            <p className="font-body leading-7 text-charcoal">
              Für verlinkte Inhalte Dritter übernehmen wir keine Haftung. Diese
              Hinweise passen wir an, wenn sich technische oder rechtliche
              Rahmenbedingungen ändern.
            </p>
            <p className="mt-3 text-sm text-charcoal/70">
              Hinweis: Mustertext, keine Rechtsberatung.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
