"use client";

import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote:
      "Working with Lara completely transformed how I present myself online. My listings now attract the caliber of clients I've always wanted — and my brand finally reflects the level I'm operating at.",
    name: "Jessica Morales",
    title: "Luxury Real Estate Agent",
  },
  {
    quote:
      "Lara didn&apos;t just take beautiful photos — she understood our brand, our clientele, and what makes us different. The content strategy she built has been the foundation of our growth this year.",
    name: "Dr. Anisa Park",
    title: "Founder, Radiance Med Spa",
  },
  {
    quote:
      "The experience felt intentional from the very first call. Lara sees things in your brand that you didn't even know were there — and brings them to light in the most beautiful way.",
    name: "Tiana Brooks",
    title: "Business Coach & Personal Brand",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--surface-base)" }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-0">
        <FadeIn>
          <p
            className="mb-4 text-center font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "var(--accent-primary)" }}
          >
            Kind Words
          </p>
        </FadeIn>

        <div className="mt-12 space-y-20">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <article className="relative">
                {/* Large quotation mark */}
                <span
                  className="absolute -top-8 -left-2 font-[family-name:var(--font-display)] text-[120px] font-light leading-none select-none"
                  style={{ color: "var(--accent-blush)", opacity: 0.2 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote
                  className="relative font-[family-name:var(--font-display)] text-xl font-light italic leading-relaxed md:text-[22px] md:leading-[1.6]"
                  style={{ color: "var(--content-primary)" }}
                >
                  {t.quote}
                </blockquote>

                <div className="mt-6">
                  <p
                    className="font-[family-name:var(--font-body)] text-sm font-medium"
                    style={{ color: "var(--content-primary)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-[family-name:var(--font-body)] text-sm font-light"
                    style={{ color: "var(--content-muted)" }}
                  >
                    {t.title}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
