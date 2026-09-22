import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Program" },
  { to: "/problems", label: "Problems" },
  { to: "/archive", label: "Archive" },
  { to: "/letter", label: "Letter" },
  { to: "/handoff", label: "Handoff" },
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <Lattice />
      <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="group flex min-h-11 items-center gap-3 no-underline">
            <span className="font-display text-lg tracking-tight text-fg">
              Confluence Archive
            </span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-faint sm:inline">
              T00–T35
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-11 items-center px-3 text-sm text-muted no-underline hover:text-fg"
                activeProps={{ className: "text-fg" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="relative mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted">
          <p>
            Computational research only. Not a medical device, not clinical decision support, not a
            dose, not a cure. No document DOI.
          </p>
          <p>
            <Link to="/disclaimer" className="text-copper no-underline hover:text-fg">
              Full disclaimer
            </Link>
            {" · "}
            <a
              href="https://github.com/cloudynirvana/research-theses-hub"
              className="text-copper no-underline hover:text-fg"
            >
              GitHub hub
            </a>
            {" · "}
            <a
              href="https://github.com/cloudynirvana/confluence-archive"
              className="text-copper no-underline hover:text-fg"
            >
              Site source
            </a>
            {" · "}
            Kelechi Emeka Ogbonna
          </p>
        </div>
      </footer>
    </div>
  );
}

function Lattice() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-[520px] w-full opacity-[0.35]"
      aria-hidden="true"
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMin slice"
    >
      {Array.from({ length: 42 }, (_, i) => {
        const x = (i * 97 + 40) % 1180;
        const y = (i * 53 + 30) % 480;
        const r = 1.1 + (i % 3) * 0.35;
        return <circle key={i} cx={x} cy={y} r={r} fill={i % 7 === 0 ? "#c4a574" : "#ece7dc"} />;
      })}
      <path
        d="M80 420 C 280 280, 520 360, 780 220 S 1100 160, 1180 90"
        fill="none"
        stroke="#c4a574"
        strokeWidth="0.7"
        opacity="0.45"
      />
    </svg>
  );
}
