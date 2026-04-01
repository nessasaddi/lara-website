"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const portfolioItems = [
  { id: 1, title: "Modern Living Spaces", category: "Real Estate", aspect: "portrait" as const, gradient: "135deg" },
  { id: 2, title: "Glow Aesthetics Studio", category: "Med Spa", aspect: "landscape" as const, gradient: "200deg" },
  { id: 3, title: "Dr. Chen Dental Arts", category: "Dentistry", aspect: "portrait" as const, gradient: "160deg" },
  { id: 4, title: "Core Balance Pilates", category: "Pilates Studio", aspect: "landscape" as const, gradient: "225deg" },
  { id: 5, title: "Maya Torres Coaching", category: "Personal Brand", aspect: "portrait" as const, gradient: "180deg" },
  { id: 6, title: "Luxe Property Group", category: "Real Estate", aspect: "landscape" as const, gradient: "145deg" },
  { id: 7, title: "Serene Skin Clinic", category: "Med Spa", aspect: "portrait" as const, gradient: "190deg" },
  { id: 8, title: "Aligned Movement Studio", category: "Pilates Studio", aspect: "landscape" as const, gradient: "210deg" },
];

const gradientColors = [
  ["#E8F2F7", "#C9E0EC", "#89B8D3"],
  ["#F5F0EB", "#E2E8E4", "#C9E0EC"],
  ["#C9E0EC", "#89B8D3", "#E8F2F7"],
  ["#E8F2F7", "#A3CCDF", "#F5F0EB"],
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--surface-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <FadeIn>
          <p
            className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "var(--accent-secondary)" }}
          >
            Selected Work
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mb-16 font-[family-name:var(--font-display)] text-3xl font-light md:text-[40px]"
            style={{ color: "var(--content-inverse)" }}
          >
            Brands we&apos;ve elevated.
          </h2>
        </FadeIn>

        {/* Masonry-style staggered grid */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {portfolioItems.map((item, i) => {
            const colors = gradientColors[i % gradientColors.length];
            return (
              <FadeIn key={item.id} delay={i * 0.08}>
                <button
                  onClick={() => setLightbox(item.id)}
                  className="group relative mb-5 block w-full overflow-hidden"
                  style={{ borderRadius: "var(--radius-md)" }}
                  aria-label={`View ${item.title} project`}
                >
                  <div
                    className={`w-full transition-transform ${
                      item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"
                    }`}
                    style={{
                      background: `linear-gradient(${item.gradient}, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
                      transitionDuration: "var(--duration-slow)",
                      transform: "scale(1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-white/40 text-sm font-[family-name:var(--font-body)] font-light">
                      Image
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      backgroundColor: "rgba(26, 23, 20, 0.6)",
                      transitionDuration: "var(--duration-normal)",
                    }}
                  >
                    <p
                      className="font-[family-name:var(--font-display)] text-xl font-semibold"
                      style={{ color: "var(--content-inverse)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 font-[family-name:var(--font-body)] text-xs font-light tracking-wide uppercase"
                      style={{ color: "var(--accent-secondary)" }}
                    >
                      {item.category}
                    </p>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <p
            className="mt-16 text-center font-[family-name:var(--font-display)] text-xl font-light italic"
            style={{ color: "var(--content-muted)" }}
          >
            Every frame is intentional. Every detail, considered.
          </p>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(26, 23, 20, 0.9)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="placeholder-image-warm relative max-h-[80vh] w-full max-w-3xl"
              style={{ borderRadius: "var(--radius-lg)", aspectRatio: "4/3" }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white/50 text-sm">
                {portfolioItems.find((p) => p.id === lightbox)?.title}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
                style={{ backgroundColor: "rgba(26, 23, 20, 0.5)" }}
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
