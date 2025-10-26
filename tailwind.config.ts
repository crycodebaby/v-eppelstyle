// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
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
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      },
    },
  },
  plugins: [],
};
export default config;
