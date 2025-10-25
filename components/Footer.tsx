"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const footerSectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const smairysTextVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const EPPELSTYLE_PHONE = "+4968815951818";
const EPPELSTYLE_MAIL = "info@eppelstyle.de";
const EPPELSTYLE_INSTAGRAM = "https://www.instagram.com/eppel_style/";

const FOOTER_LINKS = [
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const SMAIRYS_MOTTO = "Wir weben digitale Präsenz, die begeistert.";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-charcoal text-creme/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={footerSectionVariants}
      role="contentinfo"
    >
      {/* Oberer Bereich */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {/* Kontaktdaten */}
          <motion.section
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-creme">
              EppelStyle
            </h3>
            <address className="font-body not-italic text-sm sm:text-base">
              <p>Kirchplatz 11</p>
              <p>66571 Eppelborn, Saarland</p>
              <p className="mt-2">
                Tel:{" "}
                <a
                  href={`tel:${EPPELSTYLE_PHONE}`}
                  className="transition-colors hover:text-accent-coral"
                >
                  {EPPELSTYLE_PHONE.replace("+49", "0")}
                </a>
              </p>
              <p>
                Mail:{" "}
                <a
                  href={`mailto:${EPPELSTYLE_MAIL}`}
                  className="transition-colors hover:text-accent-coral"
                >
                  {EPPELSTYLE_MAIL}
                </a>
              </p>
            </address>
          </motion.section>

          {/* Info-Links */}
          <motion.nav
            aria-label="Rechtliches & Informationen"
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-creme">
              Informationen
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm transition-colors duration-300 hover:text-accent-coral sm:text-base"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social */}
          <motion.section
            variants={itemVariants}
            className="text-center sm:text-left md:text-right"
            aria-label="Soziale Medien"
          >
            <h3 className="mb-4 font-heading text-lg font-semibold uppercase tracking-wider text-creme">
              Folgen Sie EppelStyle
            </h3>
            <div className="flex justify-center space-x-4 md:justify-end">
              <a
                href={EPPELSTYLE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EppelStyle auf Instagram"
                className="text-creme/70 transition-colors duration-300 hover:text-accent-coral"
              >
                <motion.svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301C7.15 2.225 7.53 2.163 12 2.163m0-2.163C8.74.001 8.333.015 7.053.072c-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014S16.023.072 14.476.001C13.196.015 12.788 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.881-.001z" />
                </motion.svg>
              </a>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Trennlinie */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.hr
          className="my-8 border-t-2 border-accent-coral/30 sm:my-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Smairys Branding */}
      <motion.div className="relative overflow-hidden bg-neutral-950 pt-10 pb-12 sm:pt-12 sm:pb-16">
        {/* animiertes, sehr dezentes Muster */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff7f50' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6zM24 20c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6zM42 6c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-6 h-20 w-auto sm:h-24 md:h-28 lg:h-32"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 12px rgba(255,127,80,0.6))",
              }}
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                },
              }}
            >
              <Image
                src="/images/logo/copyright-logo.png"
                alt="Smairys Netz-Manufaktur Logo"
                width={256}
                height={128}
                className="h-full w-auto object-contain"
                priority={false}
              />
            </motion.div>

            <motion.h2
              className="font-heading text-2xl font-bold text-creme sm:text-3xl md:text-4xl lg:text-5xl"
              variants={smairysTextVariants}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Smairys Netz-Manufaktur
            </motion.h2>

            <motion.p
              className="mt-2 font-body text-base italic text-coral-light/90 sm:text-lg md:text-xl"
              variants={smairysTextVariants}
              custom={0.5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              “{SMAIRYS_MOTTO}”
            </motion.p>

            <motion.p
              className="mt-8 font-body text-xs text-creme/60"
              variants={smairysTextVariants}
              custom={0.7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              Eine Webseite, handgefertigt mit{" "}
              <motion.span
                aria-hidden="true"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block text-accent-coral"
              >
                ♥
              </motion.span>{" "}
              von Smairys Netz-Manufaktur
              <br />
              Copyright © {currentYear} Smairys Netz-Manufaktur. Alle Rechte
              vorbehalten.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
