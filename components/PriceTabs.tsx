"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

export type PriceItem = {
  name: string;
  length: string;
  price: string;
  tooltip?: string;
};

export type PriceCategories = {
  Herren: PriceItem[];
  Damen: PriceItem[];
};

type Props = {
  categories: PriceCategories;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PriceTabs({ categories }: Props) {
  const [active, setActive] = useState<keyof PriceCategories>("Herren");

  return (
    <>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        role="tablist"
        aria-label="Preiskategorien"
      >
        {(Object.keys(categories) as Array<keyof PriceCategories>).map(
          (key) => {
            const isActive = active === key;
            return (
              <motion.button
                key={key}
                role="tab"
                aria-selected={isActive}
                aria-controls={`prices-panel-${key}`}
                id={`prices-tab-${key}`}
                onClick={() => setActive(key)}
                className={`min-h-[48px] rounded-lg px-5 py-2.5 font-body font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme
                ${
                  isActive
                    ? "bg-accent-coral text-creme shadow-md"
                    : "bg-coral-light text-accent-coral hover:bg-accent-coral hover:text-creme"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {key}
              </motion.button>
            );
          }
        )}
      </motion.div>

      <motion.div
        key={active}
        id={`prices-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`prices-tab-${active}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="container mx-auto max-w-4xl overflow-x-auto rounded-xl bg-creme p-4 shadow-card sm:p-6"
      >
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-subtle/60">
              <th className="min-w-[170px] px-3 py-3.5 text-base font-semibold text-heading-charcoal sm:min-w-[220px] sm:px-4 sm:text-lg">
                Dienstleistung
              </th>
              <th className="min-w-[80px] px-3 py-3.5 text-base font-semibold text-heading-charcoal sm:min-w-[120px] sm:px-4 sm:text-lg">
                Details
              </th>
              <th className="min-w-[70px] px-3 py-3.5 text-right text-base font-semibold text-heading-charcoal sm:min-w-[100px] sm:px-4 sm:text-lg">
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            {categories[active].map((it, i) => (
              <motion.tr
                key={`${active}-${i}`}
                className="border-b border-coral-light/70 last:border-b-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <td className="px-3 py-3 font-body text-sm text-charcoal sm:px-4 sm:text-base">
                  {it.name}
                </td>
                <td className="group relative px-3 py-3 font-body text-sm text-charcoal sm:px-4 sm:text-base">
                  {it.length}
                  {it.tooltip ? (
                    <span className="absolute bottom-2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-charcoal p-2 text-xs text-creme shadow-lg group-hover:block">
                      {it.tooltip}
                    </span>
                  ) : null}
                </td>
                <td className="px-3 py-3 text-right font-body text-sm font-medium text-charcoal sm:px-4 sm:text-base">
                  {it.price}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </>
  );
}
