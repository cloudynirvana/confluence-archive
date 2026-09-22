import { createFileRoute, Link } from "@tanstack/react-router";
import { CLUSTERS, thesesFor } from "@/lib/catalog";
import { stakeOf } from "@/lib/stakes";

export const Route = createFileRoute("/problems")({
  head: () => ({
    meta: [{ title: "Problems — Confluence Archive" }],
  }),
  component: Problems,
});

function Problems() {
  return (
    <div className="flex flex-col gap-14">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">Problems</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
          Seven failures medicine already has.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Each cluster is a modelling problem that shows up in oncology, residual
          disease, and host context. The theses do not treat it. They make it
          falsifiable.
        </p>
      </header>
      {CLUSTERS.map((c) => {
        const papers = thesesFor(c.id);
        return (
          <section key={c.id} id={c.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl text-fg">{c.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{c.medical}</p>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-faint">{c.cite}</p>
            <ul className="mt-6 grid gap-3">
              {papers.map((t) => (
                <li key={t.id} className="rounded-xl border border-border bg-surface px-4 py-4">
                  <Link
                    to="/archive/$id"
                    params={{ id: t.id.toLowerCase() }}
                    className="font-mono text-xs text-copper no-underline hover:text-fg"
                  >
                    {t.id}
                  </Link>
                  <p className="mt-1 font-display text-base text-fg">{t.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{stakeOf(t.id)}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
