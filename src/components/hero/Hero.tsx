"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--atmosphere-gradient)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--accent-primary)" }}
      >
        Brand and Content Strategy Partner
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-6 font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.1] tracking-[0.18em] md:text-4xl lg:text-5xl"
        style={{ color: "var(--content-primary)" }}
      >
        IN LIGHT COLLECTIVE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-md font-[family-name:var(--font-body)] text-lg font-light leading-relaxed"
        style={{ color: "var(--content-secondary)" }}
      >
        Ongoing brand content for businesses that are ready.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="font-[family-name:var(--font-body)] text-[10px] font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--content-muted)" }}
          >
            Explore
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ color: "var(--content-muted)" }}
          >
            <path
              d="M8 4L8 20M8 20L2 14M8 20L14 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
