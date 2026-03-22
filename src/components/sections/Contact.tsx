"use client";

import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--surface-dark)" }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center md:px-12 lg:px-0">
        <FadeIn>
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-light leading-snug md:text-[44px]"
            style={{ color: "var(--content-inverse)" }}
          >
            Let&apos;s create something intentional.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] text-lg font-light leading-relaxed"
            style={{ color: "var(--content-muted)" }}
          >
            Whether you&apos;re ready to invest in a brand shoot, build a
            content strategy, or explore what a partnership looks like — I&apos;d
            love to hear your story.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10">
            <Button href="mailto:hello@laramaria.com" variant="inverse">
              Start the conversation
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            className="mt-6 font-[family-name:var(--font-body)] text-sm font-light"
            style={{ color: "var(--content-muted)" }}
          >
            Or reach out directly —{" "}
            <a
              href="mailto:hello@laramaria.com"
              className="underline underline-offset-4 decoration-1 transition-colors"
              style={{
                color: "var(--accent-secondary)",
                textDecorationColor: "var(--accent-secondary)",
                transitionDuration: "var(--duration-fast)",
              }}
            >
              hello@laramaria.com
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <a
              href="https://www.instagram.com/laramaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
              style={{ transitionDuration: "var(--duration-fast)" }}
              aria-label="Follow Lara Maria on Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--accent-primary)" }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
