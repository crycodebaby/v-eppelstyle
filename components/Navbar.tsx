"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const EPPELSTYLE_INSTAGRAM = "https://www.instagram.com/eppel_style/";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/galerie", label: "Galerie" },
  { href: "/ueber-uns", label: "Über Uns" },
  { href: "/kontakt", label: "Kontakt" },
];

// Varianten – strikt typisieren + Easing als Tupel
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.07 },
  },
};

const linkItemVariants: Variants = {
  closed: { opacity: 0, y: -15, transition: { duration: 0.2, ease: "easeIn" } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const underlineVariants: Variants = {
  initial: { width: "0%" },
  active: {
    width: "100%",
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }, // <— Tupel
  },
  hover: {
    width: "100%",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
    <motion.nav
      className={`sticky top-0 z-30 bg-creme/95 backdrop-blur-md transition-all duration-300 ease-out ${
        isScrolled || isOpen ? "shadow-lg" : "shadow-none"
      }`}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.1,
      }}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Zur Startseite EppelStyle">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 90,
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="relative h-12 w-[140px] sm:h-16 sm:w-[180px] lg:h-[70px] lg:w-[240px]"
          >
            <Image
              src="/images/logo/Friseurlogo-Barber-Saarland.png"
              alt="EppelStyle Logo"
              fill
              sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 240px"
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Hamburger (Mobile) */}
        <div className="sm:hidden">
          <motion.button
            onClick={toggleMenu}
            className="rounded-md p-2.5 text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
            aria-label="Menü öffnen oder schließen"
            aria-expanded={isOpen}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 127, 80, 0.1)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
                transition={{ duration: 0.3, ease: "circOut" }}
              />
            </svg>
          </motion.button>
        </div>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center space-x-6 sm:flex lg:space-x-8">
          {NAV_ITEMS.map((item, index) => {
            const active = pathname === item.href;
            return (
              <motion.li
                key={item.href}
                className="relative"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.07,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                whileHover="hover"
              >
                <Link
                  href={item.href}
                  aria-label={`Zu ${item.label}`}
                  className={desktopLinkClass(active)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute left-0 -bottom-1 h-[2.5px] rounded-full bg-accent-coral"
                    variants={underlineVariants}
                    animate={active ? "active" : "initial"}
                  />
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5 + NAV_ITEMS.length * 0.07,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <a
              href={EPPELSTYLE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-charcoal transition-colors duration-300 hover:text-accent-coral"
              aria-label="EppelStyle auf Instagram folgen"
            >
              <motion.svg
                className="h-6 w-6 fill-current sm:h-7 sm:w-7"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250, damping: 10 }}
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242 1.24 3.608 1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </motion.svg>
            </a>
          </motion.li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute left-0 right-0 w-full overflow-hidden bg-creme px-4 py-3 shadow-xl sm:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
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
              className="mb-1 mt-3 border-t border-subtle/70 pt-3"
            >
              <a
                href={EPPELSTYLE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body group flex items-center justify-center rounded-md py-3 text-center text-lg font-semibold text-charcoal transition-colors duration-200 ease-out hover:bg-coral-light/50 hover:text-accent-coral"
                aria-label="EppelStyle auf Instagram folgen"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975.975 2.242 1.24 3.608 1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.547.07-2.928.398-4.014 1.484S1.625 3.977 1.555 5.524C1.497 6.804 1.483 7.212 1.483 12s.014 5.196.072 6.476c.07 1.547.398 2.928 1.484 4.014s2.477 1.414 4.014 1.484c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.547-.07 2.928-.398 4.014-1.484s1.414-2.477 1.484-4.014c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.547-.398-2.928-1.484-4.014s-2.477-1.414-4.014-1.484c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
                <span className="ml-2">Instagram</span>
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
