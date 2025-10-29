// tailwind.config.ts
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  future: {
    // Verhindert Hover-Styles auf Touch-Devices → weniger „sticky hover“-Bugs
    hoverOnlyWhenSupported: true,
  },
  theme: {
    // Feinere Breakpoints – Mobile-First
    screens: {
      xs: "350px", // echte Kleinstgeräte
      sm: "640px",
      md: "768px",
      tab: "1000px", // Tablet-Sweet-Spot (feiner als lg:1024)
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        creme: "hsl(var(--creme))",
        charcoal: "hsl(var(--charcoal))",
        "heading-charcoal": "hsl(var(--heading-charcoal))",
        "accent-coral": "hsl(var(--accent-coral))",
        "coral-light": "hsl(var(--coral-light))",
        subtle: "hsl(var(--subtle))",
      },
      boxShadow: {
        "glow-coral": "0 0 15px hsl(var(--accent-coral) / 0.35)",
        "subtle-dark": "0 4px 12px rgba(0,0,0,0.08)",
        card: "0 2px 8px rgba(0,0,0,0.06)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      // Konsistentes Container-System gegen horizontales Scrollen
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // ~16px – für 350–400px Devices perfekt
          sm: "1.25rem",
          md: "1.5rem",
          lg: "2rem",
        },
        // Max-Breiten je Breakpoint – verhindert „zu breite“ Zeilen
        screens: {
          xs: "100%", // lässt sich sauber zentrieren
          sm: "640px",
          md: "768px",
          tab: "960px", // etwas unter 1000 px, damit Innenabstände wirken
          lg: "1024px",
          xl: "1200px",
          "2xl": "1320px",
        },
      },
      // Kleine Helfer für Scroll-Fixes
      spacing: {
        // Optionale Micro-steps für feinere Abstände
        13: "3.25rem",
        15: "3.75rem",
      },
      zIndex: {
        // leichte Leitplanken – optional
        base: "0",
        header: "10",
        canvas: "5",
        floating: "20",
        modal: "40",
      },
    },
  },
  plugins: [
    forms, // bessere Mobile-Forms (ohne Umstyling-Zwang)
    containerQueries, // @container Utilities – mega für Karten/Grids
    typography, // schöne Fließtexte (optional je nach Projekt)
  ],
};

export default config;
