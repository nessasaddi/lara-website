"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function BrandStatement() {
  return (
    <section className="py-32 md:py-40" style={{ backgroundColor: "var(--surface-base)" }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Top rule */}
        <FadeIn>
          <div
            className="mx-auto mb-10 h-px w-20"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <blockquote
            className="font-[family-name:var(--font-display)] text-2xl font-light leading-relaxed md:text-[36px] md:leading-[1.4]"
            style={{ color: "var(--content-primary)" }}
          >
            I don&apos;t just capture content — I help you show up in the
            fullness of who you are and what you&apos;ve been called to build.
          </blockquote>
        </FadeIn>

        {/* Bottom rule */}
        <FadeIn delay={0.2}>
          <div
            className="mx-auto mt-10 mb-10 h-px w-20"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="mx-auto max-w-xl font-[family-name:var(--font-body)] text-base font-light leading-relaxed"
            style={{ color: "var(--content-secondary)" }}
          >
            For established brands who are ready to scale their visibility —
            real estate professionals, med spas, dentists, pilates studios, and
            personal brands operating at the next level.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
