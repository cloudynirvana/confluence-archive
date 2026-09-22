import { createFileRoute } from "@tanstack/react-router";
import { CopyButton } from "@/components/copy-button";
import { GROKBOT_HANDOFF } from "@/lib/handoff";
import { NEXT_PAPERS } from "@/lib/letter";

export const Route = createFileRoute("/handoff")({
  head: () => ({
    meta: [{ title: "Grokbot handoff — Confluence Archive" }],
  }),
  component: HandoffPage,
});

function HandoffPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">Handoff</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
          For the next grokbot.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Paste this into a new session. It is the operating contract: what is
          real on GitHub, what the site may claim, what to write next, and what
          to refuse.
        </p>
        <div className="mt-6">
          <CopyButton text={GROKBOT_HANDOFF} label="Copy full handoff" />
        </div>
      </header>
      <section>
        <h2 className="font-display text-2xl text-fg">Quality next papers</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Goal is problem-solving, not count. These four close gaps the archive
          already exposed.
        </p>
        <ol className="mt-6 grid gap-4">
          {NEXT_PAPERS.map((p) => (
            <li key={p.id} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs text-copper">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg">{p.medical}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.why}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="rounded-xl border border-border bg-surface p-5">
        <pre className="whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-muted">
          {GROKBOT_HANDOFF}
        </pre>
      </section>
    </div>
  );
}
