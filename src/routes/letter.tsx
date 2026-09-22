import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { LETTERS } from "@/lib/letter";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [{ title: "Cold-email letters — Confluence Archive" }],
  }),
  component: LetterPage,
});

function LetterPage() {
  const [id, setId] = useState(LETTERS[0].id);
  const letter = LETTERS.find((l) => l.id === id) ?? LETTERS[0];
  const full = `Subject: ${letter.subject}\n\n${letter.body}`;

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">Letter</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-fg">
          Methods notes, not trial protocols.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Cold email is for a 20-minute conversation about a named modelling
          failure. It is not a request for a dose, a contract, or a clinical
          claim. Pick the audience, copy the letter, send.
        </p>
      </header>
      <div className="flex flex-wrap gap-2">
        {LETTERS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setId(l.id)}
            className={
              "inline-flex min-h-11 items-center rounded-lg border px-4 text-sm " +
              (l.id === id
                ? "border-copper/50 bg-raised text-fg"
                : "border-border bg-surface text-muted hover:text-fg")
            }
          >
            {l.label}
          </button>
        ))}
      </div>
      <p className="max-w-2xl text-sm text-muted">{letter.audience}</p>
      <div className="flex flex-wrap gap-3">
        <CopyButton text={full} label="Copy letter" />
        <CopyButton text={letter.subject} label="Copy subject" />
      </div>
      <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-faint">Subject</p>
        <p className="mt-2 font-display text-lg text-fg">{letter.subject}</p>
        <pre className="mt-6 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">
          {letter.body}
        </pre>
      </div>
    </div>
  );
}
