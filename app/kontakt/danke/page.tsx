import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danke – Nachricht verschickt | EppelStyle Friseur Eppelborn",
  description:
    "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah zurück – Ihr EppelStyle Team.",
  alternates: { canonical: "/kontakt/danke" },
  robots: { index: false, follow: false },
};

// Discriminated type: entweder left ODER right
type Mark =
  | { top: string; size: number; rotate: string; left: string; right?: never }
  | { top: string; size: number; rotate: string; right: string; left?: never };

const marks: ReadonlyArray<Mark> = [
  { top: "8%", left: "6%", size: 110, rotate: "-5deg" },
  { top: "24%", right: "8%", size: 140, rotate: "6deg" },
  { top: "58%", left: "10%", size: 120, rotate: "8deg" },
  { top: "78%", right: "10%", size: 130, rotate: "-7deg" },
];

export default function KontaktDankePage() {
  return (
    <main
      className="relative min-h-[100dvh] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FAF8F4 0%, #FFFFFF 55%, #FAF8F4 100%)",
      }}
    >
      {/* zartes Kachelnetz */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D1D5DB' stroke-opacity='0.18' stroke-width='1'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(1200px 600px at 50% 15%, rgba(0,0,0,0.28), transparent 70%), radial-gradient(900px 500px at 20% 85%, rgba(0,0,0,0.22), transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(1200px 600px at 50% 15%, rgba(0,0,0,0.28), transparent 70%), radial-gradient(900px 500px at 20% 85%, rgba(0,0,0,0.22), transparent 70%)",
        }}
      />

      {/* mehrere Logo-Wasserzeichen */}
      {marks.map((m, i) => (
        <div
          key={i}
          aria-hidden
          className="pointer-events-none absolute opacity-[0.06]"
          style={{
            top: m.top,
            transform: `rotate(${m.rotate})`,
            filter: "blur(0.2px)",
            ...("left" in m ? { left: m.left } : { right: m.right }),
          }}
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
      ))}

      {/* Inhalt */}
      <section className="section text-center">
        <div className="mx-auto max-w-2xl card">
          <div className="mx-auto mb-4 h-14 w-14 sm:mb-5">
            <Image
              src="/icon.png"
              alt="EppelStyle Icon"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
          </div>

          <p className="eyebrow">Nachricht gesendet</p>
          <h1 className="h1 mt-1">Vielen Dank für Ihre Anfrage!</h1>
          <p className="lead mt-3">
            Wir haben Ihre Nachricht erhalten und melden uns in der Regel{" "}
            <strong>zeitnah während unserer Öffnungszeiten</strong>.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="card-muted">
              <p className="font-heading text-[15px] text-heading-charcoal">
                Telefonnummer
              </p>
              <p className="mt-1 font-body">
                <a
                  className="text-accent-coral underline-offset-2 hover:underline"
                  href="tel:+4968815951818"
                >
                  06881 5951818
                </a>
              </p>
            </div>
            <div className="card-muted">
              <p className="font-heading text-[15px] text-heading-charcoal">
                E-Mail
              </p>
              <p className="mt-1 font-body">
                <a
                  className="text-accent-coral underline-offset-2 hover:underline"
                  href="mailto:info@eppelstyle.de"
                >
                  info@eppelstyle.de
                </a>
              </p>
            </div>
            <div className="card-muted">
              <p className="font-heading text-[15px] text-heading-charcoal">
                Öffnungszeiten
              </p>
              <p className="mt-1 font-body">Mo–Sa: 09:00–19:00 Uhr</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="btn btn-secondary w-full sm:w-auto">
              Zur Startseite
            </Link>
            <Link href="/kontakt" className="btn btn-primary w-full sm:w-auto">
              Weitere Nachricht senden
            </Link>
          </div>

          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="https://www.instagram.com/eppel_style/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-coral underline-offset-2 hover:underline"
            >
              Instagram
            </a>
            <span className="hidden text-subtle sm:inline">•</span>
            <a
              href="https://www.facebook.com/people/EppelStyle/61576307230626/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-coral underline-offset-2 hover:underline"
            >
              Facebook
            </a>
            <span className="hidden text-subtle sm:inline">•</span>
            <a
              href="https://g.co/kgs/GDJvoGW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-coral underline-offset-2 hover:underline"
            >
              Route auf Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
