"use client";

import FadeIn from "@/components/ui/FadeIn";

const shots = [
  {
    number: "01",
    title: "Doing the Thing",
    description:
      "Visual evidence in your element. Builds immediate authority.",
  },
  {
    number: "02",
    title: "Behind-the-Scenes",
    description:
      "The preparation and inspired chaos of the process. Makes your brand relatable.",
  },
  {
    number: "03",
    title: "The Environment Shot",
    description:
      "Your workspace as a vibe signal. The location tells part of the story.",
  },
  {
    number: "04",
    title: "Lifestyle & Routine",
    description:
      "Morning coffee, movement, daily rituals. Creates common ground.",
  },
  {
    number: "05",
    title: "Direct Connection",
    description:
      "Portraits that evoke warmth, energy, thoughtfulness. The digital handshake.",
  },
];

export default function FiveShots() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--surface-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <FadeIn>
          <p
            className="mb-4 font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "var(--accent-primary)" }}
          >
            The Approach
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mb-16 font-[family-name:var(--font-display)] text-3xl font-light md:text-[40px]"
            style={{ color: "var(--content-primary)" }}
          >
            Five frames that tell your full story.
          </h2>
        </FadeIn>

        {/* Horizontal scroll on mobile, 5-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 snap-x snap-mandatory">
          {shots.map((shot, i) => (
            <FadeIn key={shot.number} delay={i * 0.1} className="shrink-0 w-[72%] sm:w-[48%] md:w-auto snap-start">
              <article
                className="relative overflow-hidden p-6 h-full"
                style={{
                  backgroundColor: "var(--surface-raised)",
                  boxShadow: "var(--shadow-subtle)",
                  borderRadius: "var(--radius-md)",
                  borderTop: "2px solid var(--accent-primary)",
                }}
              >
                {/* Watermark number */}
                <span
                  className="absolute -top-2 -right-1 font-[family-name:var(--font-display)] text-[80px] font-light leading-none select-none"
                  style={{ color: "var(--accent-blush)", opacity: 0.3 }}
                >
                  {shot.number}
                </span>

                <div className="relative">
                  <h3
                    className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold"
                    style={{ color: "var(--content-primary)" }}
                  >
                    {shot.title}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-body)] text-sm font-light leading-relaxed"
                    style={{ color: "var(--content-secondary)" }}
                  >
                    {shot.description}
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
