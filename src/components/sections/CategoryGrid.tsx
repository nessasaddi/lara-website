"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

type PortfolioItem = {
  id: string;
  name: string;
  category: string;
  imageUrl: string | null;
  isCover: boolean;
  isFeatured: boolean;
  order: number;
};

type CategoryGroup = {
  category: string;
  coverImage: string | null;
  items: PortfolioItem[];
};

const categoryDescriptions: Record<string, string> = {
  "Personal Branding": "Coaches, consultants & solopreneurs",
  "Founders & CEOs": "Executive-level brand content",
  "Real Estate": "Property + agent branding",
  "Wellness": "Med spas, pilates & dental",
  "Ongoing Content": "Monthly retainer content creation",
};

// Fallback gradient colors when no image
const fallbackGradients: string[] = [
  "linear-gradient(135deg, #E8F2F7 0%, #C9E0EC 50%, #89B8D3 100%)",
  "linear-gradient(200deg, #F5F0EB 0%, #E2E8E4 50%, #C9E0EC 100%)",
  "linear-gradient(160deg, #C9E0EC 0%, #89B8D3 40%, #E8F2F7 100%)",
  "linear-gradient(225deg, #E8F2F7 0%, #A3CCDF 50%, #F5F0EB 100%)",
  "linear-gradient(180deg, #C9E0EC 0%, #E8F2F7 50%, #89B8D3 100%)",
];

export default function CategoryGrid({
  categories,
}: {
  categories: CategoryGroup[];
}) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activeGroup = categories.find((c) => c.category === openCategory);
  const activeItems = activeGroup?.items ?? [];

  const closeLightbox = useCallback(() => {
    setOpenCategory(null);
    setLightboxIndex(0);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % activeItems.length);
  }, [activeItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + activeItems.length) % activeItems.length);
  }, [activeItems.length]);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <FadeIn>
            <p
              className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-primary)" }}
            >
              What We Do
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mb-14 font-[family-name:var(--font-display)] text-3xl font-light md:text-[40px]"
              style={{ color: "var(--content-primary)" }}
            >
              Built for brands like yours.
            </h2>
          </FadeIn>

          {/* Category cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.08}>
                <button
                  onClick={() => {
                    setOpenCategory(group.category);
                    setLightboxIndex(0);
                  }}
                  className="group relative block w-full overflow-hidden text-left"
                  style={{ borderRadius: "var(--radius-lg)" }}
                  aria-label={`View ${group.category} portfolio`}
                >
                  {/* Image or gradient fallback */}
                  <div
                    className="relative aspect-[4/5] w-full transition-transform"
                    style={{
                      transitionDuration: "var(--duration-slow)",
                      background: group.coverImage
                        ? undefined
                        : fallbackGradients[i % fallbackGradients.length],
                    }}
                  >
                    {group.coverImage && (
                      <Image
                        src={group.coverImage}
                        alt={group.category}
                        fill
                        className="object-cover transition-transform group-hover:scale-[1.03]"
                        style={{ transitionDuration: "var(--duration-slow)" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}

                    {/* Overlay — always visible, darkens on hover */}
                    <div
                      className="absolute inset-0 transition-colors"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(27,42,51,0.7) 0%, rgba(27,42,51,0.1) 60%, transparent 100%)",
                        transitionDuration: "var(--duration-normal)",
                      }}
                    />

                    {/* Label */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p
                        className="mb-1 font-[family-name:var(--font-display)] text-2xl font-light"
                        style={{ color: "var(--content-inverse)" }}
                      >
                        {group.category}
                      </p>
                      <p
                        className="font-[family-name:var(--font-body)] text-xs font-light tracking-wide"
                        style={{ color: "rgba(250, 249, 247, 0.7)" }}
                      >
                        {categoryDescriptions[group.category] ?? ""}
                      </p>
                      <div
                        className="mt-3 h-px w-8 transition-all group-hover:w-14"
                        style={{
                          backgroundColor: "var(--accent-primary)",
                          transitionDuration: "var(--duration-normal)",
                        }}
                      />
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen lightbox slideshow */}
      <AnimatePresence>
        {openCategory && activeItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(27, 42, 51, 0.95)" }}
            onClick={closeLightbox}
          >
            {/* Header */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-5">
              <div>
                <p
                  className="font-[family-name:var(--font-display)] text-lg font-light"
                  style={{ color: "var(--content-inverse)" }}
                >
                  {openCategory}
                </p>
                <p
                  className="font-[family-name:var(--font-body)] text-xs font-light"
                  style={{ color: "rgba(250,249,247,0.5)" }}
                >
                  {lightboxIndex + 1} / {activeItems.length}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Close gallery"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <motion.div
              key={activeItems[lightboxIndex]?.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative mx-auto max-h-[75vh] w-full max-w-4xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItems[lightboxIndex]?.imageUrl ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "var(--radius-lg)" }}>
                  <Image
                    src={activeItems[lightboxIndex].imageUrl!}
                    alt={activeItems[lightboxIndex].name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="aspect-[4/3] w-full flex items-center justify-center"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    background: fallbackGradients[lightboxIndex % fallbackGradients.length],
                  }}
                >
                  <span className="text-white/40 text-sm font-[family-name:var(--font-body)]">
                    {activeItems[lightboxIndex]?.name}
                  </span>
                </div>
              )}

              {/* Caption */}
              <p
                className="mt-4 text-center font-[family-name:var(--font-body)] text-sm font-light"
                style={{ color: "rgba(250,249,247,0.6)" }}
              >
                {activeItems[lightboxIndex]?.name}
              </p>
            </motion.div>

            {/* Navigation arrows */}
            {activeItems.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  aria-label="Previous image"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  aria-label="Next image"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
