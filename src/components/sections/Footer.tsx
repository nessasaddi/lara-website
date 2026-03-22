export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        backgroundColor: "var(--surface-dark)",
        borderTop: "1px solid rgba(253, 251, 247, 0.06)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:px-12 md:text-left lg:px-16">
        <p
          className="font-[family-name:var(--font-body)] text-xs font-light"
          style={{ color: "var(--content-muted)" }}
        >
          &copy; 2026 Lara Maria. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://laramaria.mypixieset.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-body)] text-xs font-light transition-colors hover:text-[var(--accent-secondary)]"
            style={{
              color: "var(--content-muted)",
              transitionDuration: "var(--duration-fast)",
            }}
          >
            View Galleries
          </a>
          <span
            className="font-[family-name:var(--font-body)] text-xs font-light"
            style={{ color: "var(--content-muted)", opacity: 0.5 }}
          >
            Designed by Cherry Pi Creative Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
