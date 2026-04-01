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
            className="mb-4 text-center font-[family-name:var(--font-body)] text-xs font-medium uppercase tracking-[0.15em]"
            style={{ color: "var(--accent-primary)" }}
          >
            The Approach
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mb-16 text-center font-[family-name:var(--font-display)] text-3xl font-light md:text-[40px]"
            style={{ color: "var(--content-primary)" }}
          >
            Five frames that tell your full story.
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {shots.map((shot, i) => (
            <FadeIn key={shot.number} delay={i * 0.08}>
              <div
                className="flex items-baseline gap-6 py-6 md:py-8"
                style={{
                  borderBottom: "1px solid var(--accent-blush)",
                }}
              >
                <span
                  className="font-[family-name:var(--font-body)] text-xs font-medium tracking-wider"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {shot.number}
                </span>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <h3
                    className="font-[family-name:var(--font-display)] text-lg font-medium shrink-0 md:w-56"
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
