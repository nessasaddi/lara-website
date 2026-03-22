"use client";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-block font-[family-name:var(--font-body)] font-medium text-sm tracking-wide transition-all rounded-full";

  const variants = {
    primary:
      "bg-[var(--accent-primary)] text-[var(--content-inverse)] px-10 py-4 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]",
    secondary:
      "text-[var(--accent-primary)] hover:text-[var(--content-primary)] underline underline-offset-4 decoration-[var(--accent-primary)] decoration-1",
    inverse:
      "bg-[var(--content-inverse)] text-[var(--surface-dark)] px-10 py-4 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={{ transitionDuration: "var(--duration-normal)" }}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={{ transitionDuration: "var(--duration-normal)" }}>
      {children}
    </button>
  );
}
