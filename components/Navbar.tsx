"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const EPPELSTYLE_INSTAGRAM = "https://www.instagram.com/eppel_style/";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/galerie", label: "Galerie" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

// Motion
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, when: "afterChildren" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, staggerChildren: 0.05 },
  },
};
const linkItemVariants: Variants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};
const underlineVariants: Variants = {
  initial: { width: "0%" },
  active: {
    width: "100%",
    transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Active-Logik
  const isActive = useCallback(
    (href: string) =>
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(href + "/"),
    [pathname]
  );

  // Schatten nach Scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body lock + ESC bei mobile Menu
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // Resize: ab sm schließen
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const desktopLinkClass = (active: boolean) =>
    `relative px-3 py-2 text-[15px] font-semibold rounded-md transition-colors font-body ${
      active
        ? "text-accent-coral"
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/40"
    }`;
  const mobileLinkClass = (active: boolean) =>
    `block px-4 py-3 text-lg font-semibold text-center rounded-md transition-colors font-body ${
      active
        ? "text-accent-coral bg-coral-light/60"
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/50"
    }`;

  return (
    <>
      {/* Skip-Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-creme focus:px-3 focus:py-2 focus:shadow-card"
      >
        Zum Inhalt springen
      </a>

      <motion.nav
        role="navigation"
        aria-label="Hauptnavigation"
        className={`sticky top-0 z-30 bg-creme/95 backdrop-blur-md transition-shadow ${
          isScrolled || isOpen ? "shadow-md" : "shadow-none"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Kompakter Header-Rahmen: kein dickes vertikales Padding */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[68px] sm:h-[80px] md:h-[92px] lg:h-[100px] items-center justify-between">
            {/* LOGO – skaliert über Container-Höhe, unverzerrt */}
            <Link
              href="/"
              aria-label="Zur Startseite EppelStyle"
              className="shrink-0"
            >
              <div className="flex items-center h-[46px] sm:h-[58px] md:h-[70px] lg:h-[78px]">
                <Image
                  src="/images/logo/Friseurlogo-Barber-Saarland.png"
                  alt="EppelStyle Logo"
                  width={600} // nur für Ratio; tatsächliche Darstellung über Höhe
                  height={600}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Hamburger */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="rounded-md p-2.5 text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral"
                aria-label="Menü öffnen oder schließen"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Desktop-Navigation + Instagram */}
            <ul className="hidden items-center gap-4 sm:flex lg:gap-6">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={desktopLinkClass(active)}
                      aria-label={`Zu ${item.label}`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.span
                        className="absolute left-0 -bottom-1 h-[2px] rounded-full bg-accent-coral"
                        variants={underlineVariants}
                        animate={active ? "active" : "initial"}
                      />
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={EPPELSTYLE_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-charcoal transition-colors hover:text-accent-coral"
                  aria-label="EppelStyle auf Instagram folgen"
                  title="@eppel_style"
                >
                  {/* Schönes Instagram-Logo (wie zuvor) */}
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.441 1.441 1.44 1.44 0 0 0-1.441-1.441z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              id="mobile-menu"
              className="sm:hidden bg-creme shadow-xl px-4 py-3"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.li
                    key={item.href}
                    variants={linkItemVariants}
                    className="my-1.5"
                  >
                    <Link
                      href={item.href}
                      className={mobileLinkClass(active)}
                      aria-label={`Zu ${item.label}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                variants={linkItemVariants}
                className="mt-3 border-t border-subtle/60 pt-3"
              >
                <a
                  href={EPPELSTYLE_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EppelStyle auf Instagram"
                  className="group block rounded-md px-4 py-3 text-center font-body text-lg font-semibold text-charcoal transition-colors hover:bg-coral-light/50 hover:text-accent-coral"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07z" />
                    </svg>
                    Instagram
                  </span>
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
