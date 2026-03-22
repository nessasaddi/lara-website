"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16"
      style={{ background: "var(--atmosphere-gradient)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Text — left 55% */}
          <div className="w-full md:w-[55%]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-primary)" }}
            >
              Brand Content Strategist + Photographer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 font-[family-name:var(--font-display)] text-4xl font-light leading-[1.15] md:text-5xl lg:text-[56px]"
              style={{ color: "var(--content-primary)" }}
            >
              Content that reflects who you&apos;re becoming.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10 max-w-lg font-[family-name:var(--font-body)] text-lg font-light leading-relaxed"
              style={{ color: "var(--content-secondary)" }}
            >
              Strategic brand photography, content creation, and social media
              management for established businesses ready to elevate their
              presence with intention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button href="#contact">Let&apos;s talk about your brand</Button>
              <Button href="#portfolio" variant="secondary">
                View recent work →
              </Button>
            </motion.div>
          </div>

          {/* Image — right 45% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-[45%]"
          >
            <div
              className="placeholder-image aspect-[3/4] w-full overflow-hidden"
              style={{
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-medium)",
              }}
            >
              <span className="text-white/60 text-sm">Portrait</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
