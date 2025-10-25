"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  animate,
} from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  /** Dauer in Millisekunden (Standard: 1200ms) */
  durationMs?: number;
  /** Startwert (Standard: 0) */
  start?: number;
  /** Optionaler Präfix (z.B. "+") */
  prefix?: string;
  /** Optionaler Suffix (z.B. "%") */
  suffix?: string;
  /** Schwelle für InView (0..1), Standard: 0.5 */
  amount?: number;
  /** Partikel-Farbe (Standard: Akzent-Koralle) */
  particleColor?: string;
  /** Zusätzliche Klassen */
  className?: string;
  /** Callback nach Abschluss */
  onComplete?: () => void;
}

export default function AnimatedCounter({
  end,
  durationMs = 1200,
  start = 0,
  prefix = "",
  suffix = "",
  amount = 0.5,
  particleColor = "#FF7F50",
  className,
  onComplete,
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(containerRef, { once: true, amount });

  const mv = useMotionValue<number>(start);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [display, setDisplay] = useState<number>(start);
  useMotionValueEvent(rounded, "change", (v) => setDisplay(v));

  // Animation nur in einem Effect starten (nicht während render)
  useEffect(() => {
    if (!inView) return;
    if (mv.get() === end) return;

    const controls = animate(mv, end, {
      duration: durationMs / 1000,
      ease: "easeOut",
    });

    controls.then(() => {
      if (!prefersReducedMotion)
        triggerParticles(canvasRef.current, particleColor);
      onComplete?.();
    });

    return () => {
      controls.stop();
    };
  }, [
    inView,
    end,
    durationMs,
    prefersReducedMotion,
    particleColor,
    onComplete,
    mv,
  ]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative inline-flex items-center ${className ?? ""}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-live="polite"
    >
      <span className="font-heading text-3xl sm:text-4xl md:text-5xl text-heading-charcoal">
        {prefix}
        {display}
        {suffix}
      </span>

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
    </motion.div>
  );
}

/** Mini-Partikeleffekt: DPR-scharf, stoppt automatisch */
function triggerParticles(
  canvas?: HTMLCanvasElement | null,
  color = "#FF7F50"
) {
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rect = canvas.getBoundingClientRect();
  const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
  canvas.width = Math.max(80, Math.floor(rect.width * dpr));
  canvas.height = Math.max(80, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cx = rect.width / 2;
  const cy = rect.height / 2;

  type P = {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    life: number;
  };
  const particles: P[] = [];
  const N = 16;

  for (let i = 0; i < N; i++) {
    const angle = (i / N) * Math.PI * 2;
    const speed = 2 + Math.random() * 2.5;
    particles.push({
      x: cx,
      y: cy,
      size: 2 + Math.random() * 2.5,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
    });
  }

  let raf = 0;
  const step = () => {
    ctx.clearRect(0, 0, rect.width, rect.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.size *= 0.96;
      p.life -= 0.02;

      if (p.life <= 0 || p.size < 0.2) {
        particles.splice(i, 1);
        continue;
      }

      ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    if (particles.length > 0) {
      raf = requestAnimationFrame(step);
    } else {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, rect.width, rect.height);
    }
  };

  raf = requestAnimationFrame(step);
}
