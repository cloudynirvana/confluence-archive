import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CLUSTERS, THESES, type ClusterId } from "@/lib/catalog";
import { ThesisCard } from "@/components/thesis-card";

export const Route = createFileRoute("/archive/")({
  head: () => ({
    meta: [{ title: "Archive T00–T35 — Confluence Archive" }],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  const [q, setQ] = useState("");
  const [cluster, setCluster] = useState<ClusterId | "all">("all");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return THESES.filter((t) => {
      if (cluster !== "all" && !t.clusters.includes(cluster)) return false;
      if (!query) return true;
      const blob = `${t.id} ${t.title} ${t.problem} ${t.contribution}`.toLowerCase();
      return blob.includes(query);
    });
  }, [q, cluster]);

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">Archive</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">T00–T35, published.</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Thirty-six citable computational objects (T00 is the wet-lab B.Sc.).
          Each is an addition to knowledge as a named problem plus a number that
          can be wrong.
        </p>
      </header>
      <div className="flex flex-col gap-3">
        <label className="text-xs uppercase tracking-[0.14em] text-faint" htmlFor="archive-q">
          Filter
        </label>
        <input
          id="archive-q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search id, title, problem"
          className="min-h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm text-fg outline-none placeholder:text-faint focus:border-copper/60"
        />
        <div className="flex flex-wrap gap-2">
          <Chip active={cluster === "all"} onClick={() => setCluster("all")}>
            All
          </Chip>
          {CLUSTERS.map((c) => (
            <Chip key={c.id} active={cluster === c.id} onClick={() => setCluster(c.id)}>
              {c.short}
            </Chip>
          ))}
        </div>
      </div>
      <p className="text-xs text-faint">
        {list.length} of {THESES.length}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {list.map((t) => (
          <ThesisCard key={t.id} thesis={t} />
        ))}
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex min-h-11 items-center rounded-lg border px-3 text-xs " +
        (active
          ? "border-copper/50 bg-raised text-fg"
          : "border-border bg-surface text-muted hover:text-fg")
      }
    >
      {children}
    </button>
  );
}
