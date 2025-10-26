"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

type Props = {
  contactHref: string;
  mapsHref: string;
  mapsLabel?: string;
};

export default function StickyCTA({
  contactHref,
  mapsHref,
  mapsLabel = "Karte",
}: Props) {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3 sm:bottom-6 sm:right-6"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 12 }}
      aria-label="Schnellzugriff Aktionen"
    >
      <AnimatedButton
        href={contactHref}
        variant="primary"
        className="min-h-[50px] rounded-full px-4 text-base shadow-glow-coral"
        ariaLabel="Termin anfragen"
      >
        Termin
      </AnimatedButton>

      <AnimatedButton
        href={mapsHref}
        variant="secondary"
        className="min-h-[50px] rounded-full px-4"
        ariaLabel="EppelStyle auf Google Maps öffnen"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* kleines Map-Icon */}
        <span className="inline-flex items-center gap-2">
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.74 1.62 5.15 4 6.32V21h6v-5.68c2.38-1.17 4-3.58 4-6.32 0-3.87-3.13-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
          <span className="hidden sm:inline">{mapsLabel}</span>
        </span>
      </AnimatedButton>
    </motion.div>
  );
}
