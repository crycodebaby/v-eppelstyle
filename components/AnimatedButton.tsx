"use client";

import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { type ReactNode, type MouseEvent } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement>
  ) => void;
};

type ButtonOnlyProps = {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  target?: undefined;
  rel?: undefined;
};

type LinkOnlyProps = {
  href: string;
  type?: undefined;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export type AnimatedButtonProps = CommonProps &
  (ButtonOnlyProps | LinkOnlyProps);

const baseStyles =
  "relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 sm:px-7 sm:py-3.5 font-body text-base font-semibold tracking-normal transition-shadow duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-coral focus-visible:ring-offset-2 focus-visible:ring-offset-creme group disabled:opacity-60 disabled:cursor-not-allowed";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-coral text-creme shadow-md hover:brightness-110 hover:shadow-glow-coral",
  secondary:
    "bg-transparent text-accent-coral border-2 border-accent-coral hover:bg-coral-light",
  ghost: "bg-transparent text-accent-coral hover:bg-coral-light/50",
};

const motionProps: MotionProps = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, type: "spring", stiffness: 170, damping: 17 },
  whileTap: {
    scale: 0.96,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  whileHover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const isExternal = (href: string) => /^https?:\/\//i.test(href);

export default function AnimatedButton(props: AnimatedButtonProps) {
  const {
    children,
    onClick,
    variant = "primary",
    className = "",
    ariaLabel,
    disabled = false,
  } = props;

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // BUTTON
  if (!("href" in props) || !props.href) {
    const { type = "button" } = props;
    return (
      <motion.button
        type={type}
        className={classes}
        aria-label={
          ariaLabel || (typeof children === "string" ? children : "Button")
        }
        disabled={disabled}
        onClick={onClick}
        {...motionProps}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  // LINK
  const { href, target, rel } = props;
  const external = isExternal(href);

  // Gemeinsamer Click-Handler für Links (typisiert, kein any)
  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement | HTMLSpanElement>
  ) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  const linkCommon = {
    className: `${classes} ${disabled ? "pointer-events-none opacity-60" : ""}`,
    "aria-label":
      ariaLabel || (typeof children === "string" ? children : "Link"),
    "aria-disabled": disabled || undefined,
    onClick: handleLinkClick,
  };

  if (external) {
    // EXTERN
    const _rel =
      rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
    const _target = target ?? "_blank";
    return (
      <motion.a
        href={href}
        target={_target}
        rel={_rel}
        {...linkCommon}
        {...motionProps}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  // INTERN (Next Link): animiere das Kind
  return (
    <Link href={href} {...linkCommon}>
      <motion.span {...motionProps}>
        <span className="relative z-10">{children}</span>
      </motion.span>
    </Link>
  );
}
