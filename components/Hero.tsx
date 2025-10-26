"use client";

import Image from "next/image";
import { motion, type Variants, type PanInfo } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  logoSrc?: string; // Wird jetzt als Wasserzeichen verwendet
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const bgReveal: Variants = {
  hidden: { scale: 1.08, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  logoSrc,
}: HeroProps) {
  return (
    <motion.header
      // WICHTIG: overflow-hidden ist hier entscheidend, damit das Logo angeschnitten wird
      className="relative w-full overflow-hidden bg-charcoal text-creme"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section height */}
      <div className="relative mx-auto grid min-h-[72vh] w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 py-20 sm:min-h-[80vh] lg:min-h-screen lg:grid-cols-2">
        {/* NEU: KREATIVES WASSERZEICHEN
            Liegt bei z-0, hinter dem Content (z-10) und dem Mobile-BG (z-1)
            aber über dem Desktop-Bilder-Stack (standard z-index)
        */}
        {logoSrc && (
          <motion.div
            className="pointer-events-none absolute -bottom-24 -left-32 z-0 h-auto w-[600px] -rotate-12 opacity-5 sm:-bottom-32 sm:-left-40 sm:w-[800px] lg:bottom-auto lg:left-1/4 lg:top-1/2 lg:w-[700px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:opacity-8"
            initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
            animate={{ opacity: [0.05, 0.1, 0.05], scale: 1, rotate: -12 }}
            transition={{
              duration: 15, // Sehr langsame, ruhige Animation
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <Image
              src={logoSrc}
              alt="EppelStyle Logo Wasserzeichen"
              width={700}
              height={350}
              className="h-full w-full object-contain"
              priority={false}
              aria-hidden="true"
            />
          </motion.div>
        )}

        {/* Content (z-10, liegt über allem) */}
        <div className="relative z-10">
          {/* Logo-Block aus dem Content-Flow entfernt */}

          <motion.h1
            className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl font-body text-lg text-creme/90 sm:text-xl md:text-2xl"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
            <AnimatedButton
              href={ctaLink}
              variant="primary"
              className="rounded-lg px-8 py-3.5 text-base shadow-glow-coral sm:text-lg"
            >
              {ctaText}
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Visual stack (right) (z-5, liegt hinter Content, aber über Wasserzeichen) */}
        <motion.div
          className="relative z-5 hidden h-[540px] w-full lg:block"
          variants={bgReveal}
        >
          {/* Soft coral glow */}
          <div className="absolute -left-20 top-1/3 h-40 w-40 -translate-y-1/2 rounded-full bg-accent-coral/30 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-28 w-28 rounded-full bg-coral-light/40 blur-3xl" />

          {/* Card 1 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="absolute left-6 top-4 w-[280px] rotate-[-4deg] overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <Image
              src="/images/hero/mitarbeiter1.png"
              alt="EppelStyle Mitarbeiter 1 – Barber Portrait"
              width={1080}
              height={1350}
              sizes="280px"
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="absolute left-48 top-24 w-[300px] rotate-[2.5deg] overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <Image
              src="/images/hero/mitarbeiter2.png"
              alt="EppelStyle Mitarbeiter 2 – Barber Portrait"
              width={1080}
              height={1350}
              sizes="300px"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            whileHover={{ y: -6 }}
            className="absolute right-0 top-[-10px] w-[260px] rotate-[-1.5deg] overflow-hidden rounded-2xl bg-white shadow-card"
          >
            <Image
              src="/images/hero/mitarbeiter3.png"
              alt="EppelStyle Mitarbeiter 3 – Barber Portrait"
              width={1080}
              height={1350}
              sizes="260px"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Mobile/Tablet background image (blend behind content) (z-1, liegt hinter Content, aber über Wasserzeichen) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-1 block bg-charcoal/50 lg:hidden"
          variants={bgReveal}
        >
          <Image
            src="/images/hero/mitarbeiter2.png"
            alt="EppelStyle Barber Team"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </motion.div>
      </div>

      {/* Scroll indicator (z-10, liegt über allem) */}
      <motion.div
        // Zentrierung des Scroll-Indikators
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer sm:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        whileHover={{ scale: 1.15 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info: PanInfo) => {
          if (info.offset.y < -50) {
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          }
        }}
        aria-hidden="true"
      >
        <motion.svg
          className="h-8 w-8 text-creme/80 sm:h-10 sm:w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.div>
    </motion.header>
  );
}
