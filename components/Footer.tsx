"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const footerSectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const smairysTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const EPPELSTYLE_PHONE = "+4968815951818";
const EPPELSTYLE_MAIL = "info@eppelstyle.de";
const EPPELSTYLE_INSTAGRAM = "https://www.instagram.com/eppel_style/";
const EPPELSTYLE_INSTAGRAM_HANDLE = "@eppel_style";
const EPPELSTYLE_FACEBOOK =
  "https://www.facebook.com/people/EppelStyle/61576307230626/";

const FOOTER_LINKS = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/galerie", label: "Galerie" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const SMAIRYS_MOTTO = "Wir weben digitale Präsenz, die begeistert.";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-charcoal text-creme/85"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06 }}
      variants={footerSectionVariants}
      role="contentinfo"
    >
      {/* TOP: Brand + Links */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start md:gap-20">
          {/* Brand-Block mit Logo + Social */}
          <motion.div className="max-w-sm" variants={itemVariants}>
            <Link
              href="/"
              aria-label="Zur Startseite EppelStyle"
              className="inline-block"
            >
              {/* Markenlogo kompakt, ohne Weißraum – nutze die beschnittene PNG */}
              <Image
                src="/images/logo/Friseurlogo-Barber_weiss_transparent.png"
                alt="EppelStyle Logo"
                width={445}
                height={280}
                className="block h-auto w-auto"
                style={{ width: "clamp(160px, 26vw, 280px)" }}
                priority={false}
              />
            </Link>
            <p className="mt-3 font-body text-sm text-creme/70">
              Friseurmeisterbetrieb in Eppelborn. Moderne Schnitte, präzise
              Barber-Styles und ehrliche Beratung.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={EPPELSTYLE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EppelStyle auf Instagram"
                className="group inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-creme/85 transition hover:bg-white/10"
                title={EPPELSTYLE_INSTAGRAM_HANDLE}
              >
                {/* Instagram Icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
                <span className="font-body text-sm font-medium">
                  {EPPELSTYLE_INSTAGRAM_HANDLE}
                </span>
              </a>

              <a
                href={EPPELSTYLE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EppelStyle auf Facebook"
                className="group inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-creme/85 transition hover:bg-white/10"
                title="EppelStyle auf Facebook"
              >
                {/* Facebook Icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887h-2.33v6.988A10.001 10.001 0 0 0 22 12z" />
                </svg>
                <span className="font-body text-sm font-medium">Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Info-Grid */}
          <motion.div
            className="grid grid-cols-2 gap-10 text-left sm:gap-14"
            variants={itemVariants}
          >
            {/* Kontakt */}
            <section>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-creme/90">
                Kontakt
              </h3>
              <address className="mt-4 flex flex-col space-y-2 font-body not-italic text-sm text-creme/75">
                <p>
                  Kirchplatz 11
                  <br />
                  66571 Eppelborn
                </p>
                <a
                  href={`tel:${EPPELSTYLE_PHONE}`}
                  className="transition-colors hover:text-accent-coral focus:text-accent-coral focus:outline-none"
                >
                  {EPPELSTYLE_PHONE.replace("+49", "0")}
                </a>
                <a
                  href={`mailto:${EPPELSTYLE_MAIL}`}
                  className="break-words transition-colors hover:text-accent-coral focus:text-accent-coral focus:outline-none"
                >
                  {EPPELSTYLE_MAIL}
                </a>
              </address>
            </section>

            {/* Links */}
            <nav aria-label="Navigation">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-creme/90">
                Navigation
              </h3>
              <ul className="mt-4 grid gap-2">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-body text-sm text-creme/75 transition-colors duration-300 hover:text-accent-coral focus:text-accent-coral focus:outline-none"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM: Smairys – kleiner & eleganter */}
      <motion.div className="relative overflow-hidden bg-neutral-950 py-8 sm:py-9">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-4 h-10 w-auto sm:h-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 90,
                damping: 14,
              }}
            >
              <Image
                src="/images/logo/copyright-logo.png"
                alt="Smairys Netz-Manufaktur Logo"
                width={220}
                height={100}
                className="h-full w-auto object-contain"
              />
            </motion.div>

            <motion.h2
              className="font-heading text-base font-semibold text-creme sm:text-lg"
              variants={smairysTextVariants}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Smairys Netz-Manufaktur
            </motion.h2>

            <motion.p
              className="mt-1 font-body text-[13px] text-coral-light/85 sm:text-sm"
              variants={smairysTextVariants}
              custom={0.35}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              „{SMAIRYS_MOTTO}“
            </motion.p>

            <motion.p
              className="mt-5 font-body text-[12px] text-creme/55 sm:text-[13px]"
              variants={smairysTextVariants}
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Handgefertigt mit{" "}
              <span aria-hidden="true" className="text-accent-coral">
                ♥
              </span>{" "}
              von Smairys Netz-Manufaktur. © {currentYear}. Alle Rechte
              vorbehalten.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
