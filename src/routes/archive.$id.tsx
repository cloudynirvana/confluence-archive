import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CLUSTERS, THESES } from "@/lib/catalog";
import { stakeOf } from "@/lib/stakes";

export const Route = createFileRoute("/archive/$id")({
  head: ({ params }) => {
    const t = THESES.find((x) => x.id.toLowerCase() === params.id.toLowerCase());
    return {
      meta: [{ title: t ? `${t.id} — Confluence Archive` : "Not found — Confluence Archive" }],
    };
  },
  component: ThesisPage,
});

function ThesisPage() {
  const { id } = Route.useParams();
  const thesis = THESES.find((t) => t.id.toLowerCase() === id.toLowerCase());
  if (!thesis) throw notFound();

  const clusters = CLUSTERS.filter((c) => thesis.clusters.includes(c.id));
  const idx = THESES.findIndex((t) => t.id === thesis.id);
  const prev = idx > 0 ? THESES[idx - 1] : null;
  const next = idx < THESES.length - 1 ? THESES[idx + 1] : null;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <Link to="/archive" className="inline-flex min-h-11 w-fit items-center gap-2 text-sm text-muted no-underline hover:text-fg">
        <ArrowLeft className="size-4" strokeWidth={1.75} /> Archive
      </Link>
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">
          {thesis.id}
          {thesis.wetlab ? " · wet-lab B.Sc." : " · computational"}
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          {thesis.title}
        </h1>
      </header>
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">The medical-modelling problem</h2>
        <p className="mt-3 text-base leading-relaxed text-fg">{stakeOf(thesis.id)}</p>
      </section>
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">What this deposit adds</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{thesis.contribution}</p>
      </section>
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">Problem as stated</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{thesis.problem}</p>
      </section>
      <section>
        <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">Clusters</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {clusters.map((c) => (
            <li key={c.id}>
              <Link
                to="/problems"
                hash={c.id}
                className="inline-flex min-h-11 items-center rounded-lg border border-border bg-surface px-3 text-xs text-muted no-underline hover:text-fg"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <a
        href={thesis.repo}
        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-fg px-5 text-sm text-bg no-underline hover:bg-copper"
      >
        Open the GitHub thesis <ArrowUpRight className="size-4" />
      </a>
      <nav className="flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-sm">
        {prev ? (
          <Link
            to="/archive/$id"
            params={{ id: prev.id.toLowerCase() }}
            className="text-muted no-underline hover:text-fg"
          >
            ← {prev.id}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/archive/$id"
            params={{ id: next.id.toLowerCase() }}
            className="text-muted no-underline hover:text-fg"
          >
            {next.id} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
