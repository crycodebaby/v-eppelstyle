"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

type LeistungenHeroProps = {
  /** Optional: eigenes Bild, sonst Default */
  imageSrc?: string;
};

export default function LeistungenHero({
  imageSrc = "/images/hero/leistungenhero.webp",
}: LeistungenHeroProps) {
  return (
    <section className="relative isolate grid min-h-[55vh] place-items-center overflow-hidden sm:min-h-[60vh] lg:min-h-[70vh]">
      {/* Hintergrundbild */}
      <Image
        src={imageSrc}
        alt="Haarschnitt bei EppelStyle – Leistungen"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Kontrast-Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/55" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="eyebrow mb-2 text-creme/90">Leistungen</p>
        <h1 className="font-heading text-4xl text-creme sm:text-5xl lg:text-6xl">
          Dein Schnitt. Dein Stil. Auf den Punkt.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-creme/85 sm:text-xl">
          Präzise Haarschnitte, saubere Konturen und Beratung, die zu dir passt
          — für Damen, Herren und Kids.
        </p>

        <div className="mt-8">
          <AnimatedButton
            href="/kontakt"
            variant="primary"
            ariaLabel="Termin vereinbaren"
          >
            Termin vereinbaren
          </AnimatedButton>
        </div>
      </motion.div>

      {/* Deko-Glow (dezent) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-coral/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </section>
  );
}
