"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-block font-[family-name:var(--font-body)] font-medium text-sm tracking-wide transition-all rounded-full";

  const variants = {
    primary:
      "bg-[var(--accent-primary)] text-[var(--content-inverse)] px-7 py-2.5 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]",
    secondary:
      "text-[var(--accent-primary)] hover:text-[var(--content-primary)] underline underline-offset-4 decoration-[var(--accent-primary)] decoration-1",
    inverse:
      "bg-[var(--content-inverse)] text-[var(--surface-dark)] px-7 py-2.5 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        style={{ transitionDuration: "var(--duration-normal)" }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.93 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      style={{ transitionDuration: "var(--duration-normal)" }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
