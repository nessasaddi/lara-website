"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--surface-sunken)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Portrait */}
          <FadeIn className="w-full md:w-[45%]">
            <div
              className="placeholder-image-alt aspect-[3/4] w-full"
              style={{
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-medium)",
              }}
            >
              <span className="text-[var(--content-muted)] text-sm">Portrait</span>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="w-full md:w-[55%]">
            <FadeIn>
              <p
                className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
                style={{ color: "var(--accent-primary)" }}
              >
                About
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="mb-8 font-[family-name:var(--font-display)] text-3xl font-light leading-snug md:text-[36px]"
                style={{ color: "var(--content-primary)" }}
              >
                Intentional content. Elevated presence. Lasting impact.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5">
                <p
                  className="font-[family-name:var(--font-body)] text-base font-light leading-relaxed"
                  style={{ color: "var(--content-secondary)" }}
                >
                  I&apos;m Lara Maria — a brand content strategist and
                  photographer for established business owners who are ready to
                  show up at the level they&apos;re operating at. I help real
                  estate professionals, med spas, dentists, pilates studios, and
                  personal brands create content that reflects their purpose and
                  elevates how the world sees them.
                </p>
                <p
                  className="font-[family-name:var(--font-body)] text-base font-light leading-relaxed"
                  style={{ color: "var(--content-secondary)" }}
                >
                  My work sits at the intersection of brand strategy and visual
                  content production. I don&apos;t just deliver beautiful images
                  — I build the strategic infrastructure behind them:
                  positioning, content systems, moodboards, shot lists, and
                  campaign development. Everything is created with intention.
                </p>
                <p
                  className="font-[family-name:var(--font-body)] text-base font-light leading-relaxed"
                  style={{ color: "var(--content-secondary)" }}
                >
                  I believe content should carry a light that people can feel —
                  something that draws them in, impacts them deeply, and points
                  to something greater. This isn&apos;t just about looking good.
                  It&apos;s about stepping into who you&apos;re becoming with
                  confidence and clarity.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href="https://www.instagram.com/laramaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-[family-name:var(--font-body)] text-sm font-medium tracking-wide transition-colors"
                style={{
                  color: "var(--accent-primary)",
                  transitionDuration: "var(--duration-fast)",
                }}
                aria-label="Follow Lara Maria on Instagram"
              >
                @laramaria →
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
