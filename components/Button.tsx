import { type ReactNode } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion"; // Geändert: Type-only import

interface ButtonProps {
  children: ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  href,
  variant = "primary",
  ariaLabel,
  disabled = false,
  target,
  rel,
}: ButtonProps) => {
  const isLink = typeof href === "string";
  const Component = isLink ? motion.a : motion.button;

  const baseStyles =
    "relative inline-flex items-center justify-center rounded-lg px-5 py-2.5 sm:px-6 sm:py-3 font-body text-base font-semibold tracking-normal transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme group disabled:opacity-60 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: `bg-accent-coral text-creme shadow-md ${disabled ? "" : "hover:brightness-110 hover:shadow-glow-coral"}`,
    secondary: `bg-transparent text-accent-coral border-2 border-accent-coral ${disabled ? "" : "hover:bg-coral-light"}`,
    ghost: `bg-transparent text-accent-coral ${disabled ? "" : "hover:bg-coral-light/50"}`,
  };

  const motionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2, type: "spring", stiffness: 170, damping: 20 },
    whileTap: disabled
      ? {}
      : {
          scale: 0.95,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        },
    whileHover: disabled
      ? {}
      : {
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 10 },
        },
  };

  const elementProps:
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    onClick,
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    "aria-label":
      ariaLabel || (typeof children === "string" ? children : "Button"),
    ...(isLink
      ? {
          href,
          target: target || (href!.startsWith("http") ? "_blank" : undefined),
          rel:
            rel ||
            (href!.startsWith("http") ? "noopener noreferrer" : undefined),
        }
      : { type, disabled }),
  };

  return (
    // @ts-expect-error Geändert: TypeScript kann bei der Kombination von MotionProps und HTML-Attributen manchmal pingelig sein, wenn Component dynamisch ist.
    <Component {...elementProps} {...motionProps}>
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default Button;
