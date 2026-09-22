import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Thesis } from "@/lib/catalog";
import { stakeOf } from "@/lib/stakes";

export function ThesisCard({ thesis }: { thesis: Thesis }) {
  const stake = stakeOf(thesis.id);
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-copper">
          {thesis.id}
          {thesis.wetlab ? " · wet-lab" : ""}
        </p>
        <a
          href={thesis.repo}
          className="inline-flex min-h-11 items-center gap-1 text-xs text-muted no-underline hover:text-fg"
        >
          GitHub <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
        </a>
      </div>
      <h3 className="font-display text-lg leading-snug text-fg">
        <Link
          to="/archive/$id"
          params={{ id: thesis.id.toLowerCase() }}
          className="text-fg no-underline hover:text-copper"
        >
          {thesis.title}
        </Link>
      </h3>
      <p className="text-sm leading-relaxed text-muted">{stake || thesis.problem}</p>
    </article>
  );
}
