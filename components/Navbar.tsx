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

// Motion Variants
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeInOut", when: "afterChildren" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.05 },
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
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = useCallback(
    (href: string) =>
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(href + "/"),
    [pathname]
  );

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body lock + ESC close
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

  // Resize close
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);

  const desktopLinkClass = (active: boolean) =>
    `relative px-3 py-2 text-base font-semibold rounded-md transition-colors duration-200 ease-out font-body ${
      active
        ? "text-accent-coral"
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/40"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `block px-4 py-3 text-lg font-semibold text-center rounded-md transition-colors duration-200 ease-out font-body ${
      active
        ? "text-accent-coral bg-coral-light/60"
        : "text-charcoal hover:text-accent-coral hover:bg-coral-light/50"
    }`;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-creme focus:px-3 focus:py-2 focus:shadow-card"
      >
        Zum Inhalt springen
      </a>

      <motion.nav
        className={`sticky top-0 z-30 bg-creme/95 backdrop-blur-md transition-all duration-300 ease-out ${
          isScrolled || isOpen ? "shadow-md" : "shadow-none"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        role="navigation"
        aria-label="Hauptnavigation"
      >
        {/* WICHTIG: kleinere Höhe, kompakteres Padding */}
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-[84px]">
          {/* Logo – ohne übermäßigen Raum */}
          <Link
            href="/"
            aria-label="Zur Startseite EppelStyle"
            className="shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center h-24 sm:h-26" // Höhe fixieren statt Padding auf der Navbar
            >
              <Image
                src="/images/logo/Friseurlogo-Barber-Saarland.png"
                alt="EppelStyle Logo"
                width={400} // tatsächliche Pixelbreite, kontrolliert Skalierung
                height={400} // quadratisch = kein Stretch
                priority
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Hamburger Button */}
          <div className="sm:hidden">
            <motion.button
              onClick={toggleMenu}
              className="rounded-md p-2 text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral"
              aria-label="Menü öffnen oder schließen"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 18L18 6M6 6l12 12" },
                  }}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.25 }}
                />
              </svg>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center space-x-4 sm:flex lg:space-x-6">
            {NAV_ITEMS.map((item, i) => {
              const active = isActive(item.href);
              return (
                <motion.li
                  key={item.href}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                >
                  <Link href={item.href} className={desktopLinkClass(active)}>
                    {item.label}
                    <motion.span
                      className="absolute left-0 -bottom-1 h-[2px] rounded-full bg-accent-coral"
                      variants={underlineVariants}
                      animate={active ? "active" : "initial"}
                    />
                  </Link>
                </motion.li>
              );
            })}
            <li>
              <a
                href={EPPELSTYLE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EppelStyle auf Instagram"
                className="text-charcoal hover:text-accent-coral transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              id="mobile-menu"
              className="absolute left-0 right-0 w-full bg-creme px-4 py-3 shadow-xl sm:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.li key={item.href} variants={linkItemVariants}>
                    <Link
                      href={item.href}
                      className={mobileLinkClass(active)}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
