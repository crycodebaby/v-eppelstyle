"use client";

import { memo } from "react";
import { motion, type Variants } from "framer-motion";

type IconType = "scissors" | "comb" | "family" | "child";

interface DecorativeIconProps {
  type: IconType;
  className?: string; // z.B. "text-accent-coral w-14 h-14"
  size?: number; // Fallback-Größe, falls kein Tailwind h/w gesetzt ist
  strokeWidth?: number; // Standard 5.5
  animateOnView?: boolean; // true = animiert beim Einblick
  hoverLift?: boolean; // true = skaliert/rotiert bei Hover
  ariaLabel?: string; // überschreibt das automatisch generierte Label
}

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 130, damping: 12 },
  },
};

const TYPE_LABEL: Record<IconType, string> = {
  scissors: "Dekoratives Scheren-Icon",
  comb: "Dekorativer Kamm",
  family: "Dekoratives Familien-Icon",
  child: "Dekoratives Kinder-Icon",
};

function DecorativeIconBase({
  type,
  className = "",
  size = 100,
  strokeWidth = 5.5,
  animateOnView = true,
  hoverLift = true,
  ariaLabel,
}: DecorativeIconProps) {
  const accessibilityLabel = ariaLabel ?? TYPE_LABEL[type];

  return (
    <motion.svg
      role="img"
      aria-label={accessibilityLabel}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      variants={iconVariants}
      initial="hidden"
      {...(animateOnView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.4 } }
        : { animate: "visible" })}
      {...(hoverLift ? { whileHover: { scale: 1.12, rotate: 6 } } : {})}
      transition={{ type: "spring", stiffness: 220, damping: 10 }}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "scissors" && (
        <>
          {/* Klingen */}
          <path d="M28 72 L50 50 M50 50 L28 28" strokeWidth={strokeWidth} />
          <path d="M72 72 L50 50 M50 50 L72 28" strokeWidth={strokeWidth} />
          {/* Griffe */}
          <circle
            cx="22"
            cy="80"
            r="9"
            strokeWidth={strokeWidth}
            className="stroke-accent-coral fill-creme transition-colors group-hover:fill-coral-light"
          />
          <circle
            cx="78"
            cy="80"
            r="9"
            strokeWidth={strokeWidth}
            className="stroke-accent-coral fill-creme transition-colors group-hover:fill-coral-light"
          />
        </>
      )}

      {type === "comb" && (
        <>
          {/* Rücken */}
          <path d="M15 75 H85" strokeWidth={strokeWidth} />
          {/* Zinken */}
          {[20, 30, 40, 50, 60, 70, 80].map((x) => (
            <line
              key={x}
              x1={x}
              y1="45"
              x2={x}
              y2="75"
              strokeWidth={strokeWidth}
            />
          ))}
        </>
      )}

      {type === "family" && (
        <>
          {/* Köpfe */}
          <circle cx="32" cy="38" r="11" className="fill-accent-coral" />
          <circle cx="68" cy="38" r="11" className="fill-accent-coral" />
          {/* Körper */}
          <path
            d="M32 49 Q32 65 23 80 M32 49 Q32 65 41 80"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
          />
          <path
            d="M68 49 Q68 65 59 80 M68 49 Q68 65 77 80"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
          />
          {/* Kind */}
          <circle
            cx="50"
            cy="58"
            r="8"
            className="stroke-accent-coral fill-coral-light"
            strokeWidth={3.5}
          />
          <path
            d="M50 66 Q50 76 46 85 M50 66 Q50 76 54 85"
            className="stroke-charcoal"
            strokeWidth={strokeWidth - 1}
          />
        </>
      )}

      {type === "child" && (
        <>
          {/* Kopf */}
          <circle cx="50" cy="35" r="14" className="fill-accent-coral" />
          {/* Körper */}
          <path
            d="M50 49 Q50 68 42 82 M50 49 Q50 68 58 82"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
          />
          {/* Haare/Bogen */}
          <path
            d="M38 28 Q50 18 62 28"
            className="stroke-charcoal"
            strokeWidth={strokeWidth}
            fill="none"
          />
        </>
      )}
    </motion.svg>
  );
}

const DecorativeIcon = memo(DecorativeIconBase);
export default DecorativeIcon;
