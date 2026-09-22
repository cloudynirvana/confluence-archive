import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({
  text,
  label = "Copy",
}: {
  text: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      window.setTimeout(() => setDone(false), 1600);
    } catch {
      setDone(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-raised px-4 text-sm text-fg transition-colors duration-150 hover:border-copper/50 hover:text-copper"
    >
      {done ? <Check className="size-4" strokeWidth={1.75} /> : <Copy className="size-4" strokeWidth={1.75} />}
      {done ? "Copied" : label}
    </button>
  );
}
