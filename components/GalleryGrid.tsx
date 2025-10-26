"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Pre-calc next/prev
  const lastIndex = images.length - 1;
  const goPrev = useCallback(
    () => setIndex((i) => (i === 0 ? lastIndex : i - 1)),
    [lastIndex]
  );
  const goNext = useCallback(
    () => setIndex((i) => (i === lastIndex ? 0 : i + 1)),
    [lastIndex]
  );

  // ESC / Arrow keys
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goPrev, goNext]);

  const colsClass =
    "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5";

  // Für <Image sizes> – sorgt für richtige Auflösungen je Breakpoint
  const sizes = useMemo(
    () =>
      "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw",
    []
  );

  return (
    <>
      {/* Thumbnail Grid */}
      <ul
        className={colsClass}
        aria-label="Galerie mit Beispielen unserer Haarschnitte"
      >
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              className="group block w-full overflow-hidden rounded-xl bg-neutral-200"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              aria-label={`Bild ${i + 1} öffnen: ${img.alt}`}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={sizes}
                  // Performance
                  loading={i < 6 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox (native <dialog>) */}
      <dialog
        aria-label="Großansicht Bild"
        className={`fixed inset-0 z-50 m-0 size-full bg-black/75 p-0 backdrop:backdrop-blur-sm ${
          open ? "flex" : "hidden"
        }`}
        onClose={() => setOpen(false)}
      >
        {/* Klick auf Overlay schließt */}
        <div
          className="absolute inset-0"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center p-4 sm:p-6">
          {/* Bild */}
          <div className="relative w-full max-w-[90vw] overflow-hidden rounded-xl shadow-2xl sm:max-w-[75vw]">
            <div className="relative mx-auto aspect-[4/5] w-full bg-neutral-900">
              <Image
                key={images[index].src}
                src={images[index].src}
                alt={images[index].alt}
                fill
                sizes="90vw"
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between gap-3 text-creme">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-lg bg-charcoal/70 px-4 py-2 font-body text-sm hover:bg-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral"
              aria-label="Vorheriges Bild"
            >
              Zurück
            </button>
            <span className="font-body text-sm opacity-90">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              className="rounded-lg bg-charcoal/70 px-4 py-2 font-body text-sm hover:bg-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral"
              aria-label="Nächstes Bild"
            >
              Weiter
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-3 rounded-lg bg-accent-coral px-4 py-2 font-body text-sm text-creme hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Lightbox schließen"
            >
              Schließen
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
