"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

interface ServiceItemProps {
  text: string;
}

function ServiceItem({ text }: ServiceItemProps) {
  return (
    <li className="flex items-start gap-3 py-1.5">
      <span
        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: "var(--accent-primary)" }}
      />
      <span
        className="font-[family-name:var(--font-body)] text-[15px] font-light"
        style={{ color: "var(--content-secondary)" }}
      >
        {text}
      </span>
    </li>
  );
}

interface ServiceTierProps {
  tag?: string;
  title: string;
  subtitle: string;
  investment: string;
  description: string;
  includes: string[];
  bestFor: string;
  cta: string;
  sunken?: boolean;
}

function ServiceTier({
  tag,
  title,
  subtitle,
  investment,
  description,
  includes,
  bestFor,
  cta,
  sunken = false,
}: ServiceTierProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="py-10 md:py-12"
      style={{
        backgroundColor: sunken ? "var(--surface-sunken)" : "var(--surface-base)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-0">
        <FadeIn>
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left flex items-start justify-between gap-4"
          >
            <div>
              {tag && (
                <span
                  className="mb-4 inline-block rounded-full px-4 py-1.5 font-[family-name:var(--font-body)] text-xs font-medium tracking-wide"
                  style={{
                    backgroundColor: "var(--accent-cream)",
                    color: "var(--accent-primary)",
                  }}
                >
                  {tag}
                </span>
              )}
              <h3
                className="font-[family-name:var(--font-display)] text-[28px] font-semibold leading-snug"
                style={{ color: "var(--content-primary)" }}
              >
                {title}
              </h3>
              <p
                className="mt-2 font-[family-name:var(--font-body)] text-base font-light"
                style={{ color: "var(--content-secondary)" }}
              >
                {subtitle}
              </p>
              <p
                className="mt-3 font-[family-name:var(--font-display)] text-[32px] font-light"
                style={{ color: "var(--accent-primary)" }}
              >
                {investment}
              </p>
            </div>
            <span
              className="mt-2 shrink-0 text-2xl font-light transition-transform"
              style={{
                color: "var(--accent-primary)",
                transform: open ? "rotate(45deg)" : "rotate(0deg)",
                transitionDuration: "var(--duration-normal)",
              }}
            >
              +
            </span>
          </button>
        </FadeIn>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-8">
                <p
                  className="mb-8 font-[family-name:var(--font-body)] text-base font-light leading-relaxed"
                  style={{ color: "var(--content-secondary)" }}
                >
                  {description}
                </p>

                <div className="mb-8">
                  <p
                    className="mb-4 font-[family-name:var(--font-body)] text-sm font-medium uppercase tracking-[0.1em]"
                    style={{ color: "var(--content-primary)" }}
                  >
                    What&apos;s Included
                  </p>
                  <ul
                    className="border-l-2 pl-6"
                    style={{ borderColor: "var(--accent-primary)" }}
                  >
                    {includes.map((item) => (
                      <ServiceItem key={item} text={item} />
                    ))}
                  </ul>
                </div>

                <p
                  className="mb-8 font-[family-name:var(--font-body)] text-sm font-light italic leading-relaxed"
                  style={{ color: "var(--content-muted)" }}
                >
                  <span className="font-medium not-italic" style={{ color: "var(--content-secondary)" }}>
                    Best for:
                  </span>{" "}
                  {bestFor}
                </p>

                <Button href="#contact" variant="secondary">
                  {cta}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      {/* Section header */}
      <div
        className="py-20 text-center md:py-24"
        style={{ backgroundColor: "var(--surface-sunken)" }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <p
              className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-primary)" }}
            >
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-[family-name:var(--font-display)] text-3xl font-light leading-snug md:text-[40px]"
              style={{ color: "var(--content-primary)" }}
            >
              Strategic brand content, designed with intention.
            </h2>
          </FadeIn>
        </div>
      </div>

      {/* Tier 1: Personal Brand Photography */}
      <ServiceTier
        tag="Most Popular"
        title="Signature Brand Experience"
        subtitle="Quarterly · For established brands ready to elevate their presence with intention and consistency."
        investment="$1,475"
        description="This experience is designed for entrepreneurs and business owners who are actively growing and need high-quality, strategic content that reflects the level they're stepping into."
        includes={[
          "75 curated, high-resolution images",
          "20 short-form video clips (reels + content ready)",
          "Professional retouching + formatting for web, print & social",
          "Creative direction + campaign development",
          "Pre-shoot strategy call",
          "Location sourcing + coordination",
          "Custom shot list + moodboard curation",
          "7–10 day turnaround",
          "Full usage rights",
        ]}
        bestFor="Real estate professionals, entrepreneurs, med spas, dentists, pilates studios, and personal brands who are established and ready to scale their visibility."
        cta="Inquire about this experience →"
      />

      <ServiceTier
        title="Essential Brand Session"
        subtitle="A refined, streamlined experience for consistent and elevated content."
        investment="$995"
        description="Perfect for business owners who need fresh, polished content while keeping things simple and intentional."
        includes={[
          "35 curated, high-resolution images",
          "10 short-form video clips",
          "Professional retouching + formatting",
          "Creative direction + campaign planning",
          "Pre-shoot strategy call",
          "Location guidance",
          "Shot list + moodboard",
          "7–10 day turnaround",
          "Full usage rights",
        ]}
        bestFor="Entrepreneurs and professionals who want to stay consistent, visible, and aligned in their brand presence."
        cta="Inquire about this experience →"
        sunken
      />

      {/* Tier 2: Content Creation + Social Media */}
      <ServiceTier
        tag="Done-For-You"
        title="Signature Content + Management"
        subtitle="Full-service content, strategy, and presence — so you can focus on what you do best."
        investment="$1,950 – $3,250/month"
        description="This is a full-service experience for brands that want to show up consistently, professionally, and with intention — without carrying the weight of content creation and management on their own."
        includes={[
          "4 posts per week",
          "4–6 reels per month",
          "20 professionally edited images",
          "Full account management (up to 2 platforms)",
          "Monthly strategy call",
          "Monthly analytics + performance report",
          "1 monthly content shoot (up to 2 hours)",
          "Done-for-you content calendar",
          "Caption writing (optimized for engagement + conversions)",
          "Engagement management (comments, DMs, story interactions)",
        ]}
        bestFor="Established businesses ready to grow their brand, increase visibility, and convert online with ease."
        cta="Let's build your content strategy →"
      />

      {/* Add-on callout */}
      <div className="py-12" style={{ backgroundColor: "var(--surface-sunken)" }}>
        <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-0">
          <FadeIn>
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: "var(--surface-raised)",
                boxShadow: "var(--shadow-subtle)",
                borderLeft: "3px solid var(--accent-primary)",
              }}
            >
              <p
                className="font-[family-name:var(--font-display)] text-lg font-semibold"
                style={{ color: "var(--content-primary)" }}
              >
                Quarterly Content Partnership Bundle
              </p>
              <p
                className="mt-2 font-[family-name:var(--font-body)] text-sm font-light"
                style={{ color: "var(--content-secondary)" }}
              >
                3 Signature Shoots at a preferred rate for brands who want
                consistent, high-level content all year.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
