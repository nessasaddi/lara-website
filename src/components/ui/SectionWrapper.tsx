interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        relative
        ${dark ? "text-[var(--content-inverse)]" : ""}
        ${className}
      `}
      style={{
        backgroundColor: dark ? "var(--surface-dark)" : undefined,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
