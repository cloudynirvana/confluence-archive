import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AUTHOR, CLUSTERS, HUB, THESES } from "@/lib/catalog";
import { NEXT_PAPERS } from "@/lib/letter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Confluence Archive — named failures in medical modelling" },
      {
        name: "description",
        content:
          "Thirty-six public computational theses on identifiability, stromal force, occult residual disease, and evidence gates. Research only. Not a medical device.",
      },
    ],
  }),
  component: Home,
});

const FEATURED = ["T11", "T04", "T09", "T20", "T24", "T35"];

function Home() {
  const featured = FEATURED.map((id) => THESES.find((t) => t.id === id)!);

  return (
    <div className="flex flex-col gap-16">
      <section className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          Computational research archive
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.12] tracking-tight text-fg sm:text-5xl">
          Named failures in how medicine uses models.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {AUTHOR} publishes computational theses that isolate problems medicine
          already has — unidentified kinetics used as unique, fibrotic stroma
          averaged into a one-state sink, occult residual disease smuggled as a
          hidden parameter, guideline text written as rates — and return a
          number that can be wrong.
        </p>
        <p className="mt-4 font-mono text-sm text-fg">
          Knowledge ≠ Evidence ≠ Mechanism ≠ Θ ≠ Prediction
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/problems"
            className="inline-flex min-h-11 items-center rounded-lg bg-fg px-5 text-sm text-bg no-underline hover:bg-copper hover:text-bg"
          >
            The problems
          </Link>
          <Link
            to="/letter"
            className="inline-flex min-h-11 items-center rounded-lg border border-border bg-raised px-5 text-sm text-fg no-underline hover:border-copper/50"
          >
            Cold-email letters
          </Link>
          <a
            href={HUB}
            className="inline-flex min-h-11 items-center gap-1 px-3 text-sm text-muted no-underline hover:text-fg"
          >
            GitHub hub <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["36", "public deposits"],
          ["7", "problem clusters"],
          ["0.755", "T35 param-only coverage"],
          ["1.000", "T35 with discrepancy"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl border border-border bg-surface px-4 py-5">
            <p className="font-display text-2xl text-fg">{n}</p>
            <p className="mt-1 text-xs leading-snug text-muted">{l}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-copper/40 bg-surface p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">Review · 22 Sep 2026</p>
        <h2 className="mt-2 font-display text-2xl text-fg">No new problem.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          A second pass does not open T36, T37, or T41. The only next object is
          the T35 addendum: profile omitted <span className="font-mono text-fg">k_par</span> while
          the envelope-B residual is free. If that interval contains 0, coverage
          1.000 was a hack. If it excludes 0, discrepancy and the omitted path
          are separable. Same repository. No new thesis number.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-fg">Every paper addresses a real problem</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          T00 is the awarded wet-lab B.Sc. T01–T35 are computational objects.
          Each one names a failure in medical modelling and publishes a
          citable GitHub result. They are additions to knowledge as methods,
          not as care.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CLUSTERS.map((c) => (
            <Link
              key={c.id}
              to="/problems"
              hash={c.id}
              className="rounded-xl border border-border bg-surface p-5 text-fg no-underline transition-colors duration-150 hover:border-copper/40"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-copper">{c.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.medical}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-fg">Numbers that can be wrong</h2>
        <ul className="mt-6 grid gap-4">
          {featured.map((t) => (
            <li key={t.id} className="border-b border-border pb-4">
              <p className="font-mono text-xs text-copper">{t.id}</p>
              <Link
                to="/archive/$id"
                params={{ id: t.id.toLowerCase() }}
                className="mt-1 block font-display text-lg text-fg no-underline hover:text-copper"
              >
                {t.title}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.contribution}</p>
            </li>
          ))}
        </ul>
        <Link to="/archive" className="mt-6 inline-flex min-h-11 items-center text-sm text-copper no-underline hover:text-fg">
          Full archive T00–T35
        </Link>
      </section>

      <section>
        <h2 className="font-display text-2xl text-fg">What to write next</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Quality over count. The next work closes falsifiable trust gaps the
          deposits already expose. It does not compose another identifiability toy.
        </p>
        <ol className="mt-6 grid gap-4">
          {NEXT_PAPERS.map((p, i) => (
            <li key={p.id} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs text-copper">
                {i + 1}. {p.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.medical}</p>
            </li>
          ))}
        </ol>
        <Link to="/handoff" className="mt-6 inline-flex min-h-11 items-center text-sm text-copper no-underline hover:text-fg">
          Grokbot handoff
        </Link>
      </section>
    </div>
  );
}
