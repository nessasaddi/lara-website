"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all"
        style={{
          backgroundColor: scrolled ? "var(--surface-overlay)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "var(--shadow-subtle)" : "none",
          transitionDuration: "var(--duration-normal)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-16">
          <a
            href="#"
            className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.04em]"
            style={{ color: "var(--content-primary)" }}
            aria-label="Lara Maria — Home"
          >
            Lara Maria
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-[family-name:var(--font-body)] text-sm font-light tracking-wide transition-colors"
                style={{
                  color: "var(--content-secondary)",
                  transitionDuration: "var(--duration-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--content-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--content-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact">Let&apos;s Connect</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-[5px] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block h-[1.5px] w-6 transition-all"
              style={{
                backgroundColor: "var(--content-primary)",
                transform: mobileOpen ? "rotate(45deg) translateY(6.5px)" : "none",
                transitionDuration: "var(--duration-normal)",
              }}
            />
            <span
              className="block h-[1.5px] w-6 transition-all"
              style={{
                backgroundColor: "var(--content-primary)",
                opacity: mobileOpen ? 0 : 1,
                transitionDuration: "var(--duration-normal)",
              }}
            />
            <span
              className="block h-[1.5px] w-6 transition-all"
              style={{
                backgroundColor: "var(--content-primary)",
                transform: mobileOpen ? "rotate(-45deg) translateY(-6.5px)" : "none",
                transitionDuration: "var(--duration-normal)",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: "var(--surface-overlay)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-display)] text-2xl font-light"
                style={{ color: "var(--content-primary)" }}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" onClick={() => setMobileOpen(false)}>
              Let&apos;s Connect
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
