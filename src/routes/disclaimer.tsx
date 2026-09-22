import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [{ title: "Disclaimer — Confluence Archive" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <article className="flex max-w-2xl flex-col gap-5 text-sm leading-relaxed text-muted">
      <h1 className="font-display text-4xl tracking-tight text-fg">Disclaimer</h1>
      <p>
        This site indexes computational research by Kelechi Emeka Ogbonna. Theses
        T01–T35 are in-silico / methods objects. Thesis T00 is a historical
        wet-lab B.Sc. (Nile University of Nigeria, 2022) and is a separate study.
      </p>
      <p>
        Nothing here is a medical device, clinical decision support, a dose, a
        diagnosis, a protocol, or a cure. Numbers are from documented toys unless
        a landing repo says otherwise. Observation channels named after assays
        are not those assays copied into Θ.
      </p>
      <p>
        No document DOI is registered for the computational theses. Do not invent
        identifiers. Cite GitHub.
      </p>
      <p>
        Knowledge ≠ Evidence ≠ Mechanism ≠ Parameter (Θ) ≠ Prediction.
      </p>
    </article>
  );
}
