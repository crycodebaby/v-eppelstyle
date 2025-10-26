import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid"; // Client-Komponente (Lightbox)
import FadeInSection from "@/components/FadeInSection"; // bereits vorhanden

/** SEO */
export const metadata: Metadata = {
  title: "Galerie – Haarschnitte & Fades | EppelStyle Barber Eppelborn",
  description:
    "Entdecke moderne Haarschnitte, präzise Fades und Bartstyles von EppelStyle Barber in Eppelborn. Inspiration für Damen, Herren und Kids – echte Arbeiten aus unserem Salon.",
  alternates: { canonical: "/galerie" },
  openGraph: {
    title: "Galerie – Haarschnitte & Fades | EppelStyle",
    description:
      "Moderne Haarschnitte und präzise Fades – eine Auswahl echter Arbeiten von EppelStyle.",
    url: "/galerie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie – Haarschnitte & Fades | EppelStyle",
    description:
      "Moderne Haarschnitte und präzise Fades – echte Arbeiten aus unserem Salon.",
  },
};

// Bilder-Setup (einfach erweiterbar)
type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const images: GalleryImage[] = Array.from({ length: 16 }).map((_, i) => {
  const n = i + 1;
  return {
    src: `/images/gallery/haarschnitt-fade${n}.webp`,
    // Alternativtext kurz, aber beschreibend + Markenbezug
    alt: `Haarschnitt Fade ${n} – moderner Schnitt von EppelStyle Barber`,
    // typische Hochkant-Aufnahme (deine Bilder sind 1080x1350 oder ähnlich)
    width: 1080,
    height: 1350,
  };
});

export default function GaleriePage() {
  // JSON-LD (ItemList) für Bilder – hilft Suchmaschinen, die Galerie zu verstehen
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EppelStyle Galerie",
    itemListElement: images.map((img, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: img.src,
      name: img.alt,
    })),
  };

  return (
    <main className="bg-creme">
      {/* Intro */}
      <section className="section-wrapper text-center">
        <FadeInSection>
          <h1 className="font-heading text-4xl text-heading-charcoal sm:text-5xl">
            Galerie – Inspiration für deinen nächsten Schnitt
          </h1>
        </FadeInSection>

        <FadeInSection>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-charcoal sm:text-xl">
            Präzise Fades, saubere Konturen und Hairstyles, die sitzen. Alle
            Looks wurden bei EppelStyle in Eppelborn kreiert.
          </p>
        </FadeInSection>
      </section>

      {/* Grid + Lightbox (Client) */}
      <section className="section-wrapper pt-0">
        <GalleryGrid images={images} />
      </section>

      {/* JSON-LD ausspielen */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
