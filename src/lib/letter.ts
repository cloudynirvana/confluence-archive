export type Letter = {
  id: string;
  label: string;
  audience: string;
  subject: string;
  body: string;
};

export const LETTERS: Letter[] = [
  {
    id: "stroma",
    label: "Stromal mechanics",
    audience: "Groups that already feel Butcher–Weaver / PDAC stroma as a modelling problem",
    subject: "Computational identifiability around stromal force — a 20-minute methods note",
    body: `Dear Professor,

I am writing with a methods archive, not a trial protocol.

Butcher, Alliston and Weaver (Nat Rev Cancer 2009) stated a medical fact that most lumped tumour ODEs still refuse to carry: the stroma is a mechanically active driver of progression, not a backdrop. Olive and colleagues, and Provenzano and colleagues, showed in PDAC models that the same stroma can physically exclude drug. If a one-state burden is fitted anyway, the barrier has been averaged away and the parameters are no longer about the disease that was claimed.

That is the idea I am trying to make computationally honest.

I am Kelechi Emeka Ogbonna. I keep a public GitHub archive of computational theses (T00–T35) under the rule

    Knowledge ≠ Evidence ≠ Mechanism ≠ Parameter (Θ) ≠ Prediction

The papers do not treat patients. They name failures that medicine already has, and they publish a number that can be wrong:

• A lumped burden ODE cannot represent a fibrotic delivery barrier (T11, T21, T32).
• Occult residual disease is hybrid switching, not a hidden continuous state (T04). Under a sparse delayed liquid-biopsy-style observer, pause modes that share a burden law have Fisher contrast 0 (T20). A full-state controller on that scalar fails; the sensitive coordinate is driven to 0 (T27).
• Cancer kinetic models are fitted as if Θ were unique. Phan, Bennett and Patten (Life 2023) documented the clinical-modelling version of this. On a documented toy, multi-channel rank is 5 of 6 after reduction (T24); parameter-only 95% bands cover 0.755 of a held-out path, while an explicit discrepancy process recovers 1.000 (T35).
• Knowledge-graph pages and guideline text must not become ODE rates (T01, T19, T31).

What I am asking for is a 20-minute methods conversation: whether the Butcher–Weaver mechanical fact, as an identifiability constraint rather than a slogan, is a problem your group already feels. I am not asking for a dose, a collaboration contract, or a clinical claim.

Index: https://github.com/cloudynirvana/research-theses-hub
Butcher-facing papers: T11, T21, T32, T05, T30
Latest numbered result: T35, envelope A = 0.755 vs B = 1.000

Research only. Not a medical device. Not CDS. No document DOI.

With respect,
Kelechi Emeka Ogbonna
kelechiogbonna300@gmail.com
GitHub: cloudynirvana
`,
  },
  {
    id: "identifiability",
    label: "Identifiability",
    audience: "Systems-biology / mathematical-oncology groups that fit ODEs to cancer data",
    subject: "When a fitted cancer ODE is not unique — a 20-minute methods note",
    body: `Dear Professor,

I am writing with a methods archive, not a trial protocol.

Phan, Bennett and Patten (Life 2023) documented a fact that clinical cancer modelling still treats as optional: models used as unique are often unidentified. Predictions from unidentified Θ are not evidence. Raue–Kreutz–Timmer profile likelihood, and Villaverde’s structural-ID tools, already say this. Most fitted tumour ODEs still report a point as if it were the disease.

I am Kelechi Emeka Ogbonna. I keep a public GitHub archive of computational theses (T00–T35) under the rule

    Knowledge ≠ Evidence ≠ Mechanism ≠ Parameter (Θ) ≠ Prediction

Each deposit isolates one failure and publishes a number that can be wrong. The papers do not treat patients.

Selected results, all on documented toys, all on GitHub:

• Shared metabolic ODE under noisy multi-channel maps: a ratio snapshot is rank 1 of 5; after loadings are profiled out, rank is 4 of 5 (T09). The missing direction is a common rescaling.
• After a stiff–sloppy reduction that is supposed to preserve claims, practical rank is 5 of 6 (T24).
• Parameter-only 95% bands cover 0.755 of a held-out path. Adding an explicit discrepancy process covers 1.000. A wrong structure covers 0.510 (T35). The open question is whether that residual ate the omitted mechanism.
• A legal “new forcing” after reduction is numerically a rescaling of a reduced product (T28). The 3.841 cut used there is a slice, not a profile.
• Knowledge-graph pages and guideline JSON must not become rates (T01, T19, T31).

I am asking for a 20-minute methods conversation: whether unidentified cancer ODEs, used as unique, is a problem your group already feels. I am not asking for a dose, a collaboration contract, or a clinical claim.

Index: https://github.com/cloudynirvana/research-theses-hub
Identifiability spine: T07, T09, T12, T24, T28, T35
Latest numbered result: T35, envelope A = 0.755 vs B = 1.000

Research only. Not a medical device. Not CDS. No document DOI.

With respect,
Kelechi Emeka Ogbonna
kelechiogbonna300@gmail.com
GitHub: cloudynirvana
`,
  },
  {
    id: "occult",
    label: "Occult residual disease",
    audience: "Groups working on dormancy, MRD, or liquid-biopsy-style observation",
    subject: "Occult residual disease as hybrid switching, not a hidden state — a 20-minute methods note",
    body: `Dear Professor,

I am writing with a methods archive, not a trial protocol.

Undetectable residual disease is still a dynamical object. Naming it as a hidden continuous parameter licenses extra states into Θ. The honest alternative is hybrid modes with named switching observables — quiescence, angiogenic pause, immune-held latency — and an observer that is allowed to be sparse, lagged, and floored.

I am Kelechi Emeka Ogbonna. I keep a public GitHub archive of computational theses (T00–T35) under the rule

    Knowledge ≠ Evidence ≠ Mechanism ≠ Parameter (Θ) ≠ Prediction

The papers do not treat patients. They are not a ctDNA product. They publish numbers that can be wrong:

• Occult residual disease as named hybrid modes, not a smuggled continuous state (T04).
• Under a sparse delayed liquid-biopsy-style observer, pause modes that share a burden law have Fisher contrast 0 (T20). The scalar is a pattern, not an assay.
• A full-state sparse controller on that scalar fails. The sensitive coordinate is driven to 0 — closed-loop cancellation (T27). The documented rescue is a fraction readout, not a new observer family.
• Hybrid labels and chain-recurrent labels do not align on a joint field (T26). The Lyapunov certificate remains a collocation defect, not a Conley set (T17).

I am asking for a 20-minute methods conversation: whether occult residual disease, as a hybrid identifiability problem under a partial observer, is something your group already feels. I am not asking for a dose, a collaboration contract, or a limit of detection.

Index: https://github.com/cloudynirvana/research-theses-hub
Occult spine: T04, T20, T26, T27, T30
Latest numbered result: T35, envelope A = 0.755 vs B = 1.000

Research only. Not a medical device. Not CDS. No document DOI.

With respect,
Kelechi Emeka Ogbonna
kelechiogbonna300@gmail.com
GitHub: cloudynirvana
`,
  },
];

export const LETTER_SUBJECT = LETTERS[0].subject;
export const LETTER_BODY = LETTERS[0].body;

export const NEXT_PAPERS = [
  {
    id: "A",
    title: "T35 addendum — omitted mechanism versus discrepancy",
    why: "Envelope B covers at 1.000 with a 12-coefficient residual. An examiner will say the residual ate k_par. Profile k_par with the residual free. Same repo, no new number.",
    medical:
      "Kennedy–O’Hagan calibration: computer-model discrepancy and calibration parameters are confounded. If the profile of the omitted path contains 0 once the residual is free, coverage was a hack and we say so.",
  },
  {
    id: "B",
    title: "T42 — calibrated 1-df profile likelihood FPR",
    why: "T28’s 3.841 is a slice (η frozen). Wilks after a rank-5-of-6 reduction is the actual scientific gate, applied to T35-C and T28 u_h after token filters have already passed.",
    medical:
      "Admission of a ‘new mechanism’ that is a rescaling of a reduced product is how unidentified models enter the clinic as if they were unique.",
  },
  {
    id: "C",
    title: "SIAN versus Raue profiles on frozen T07 and T28",
    why: "Thirty Fisher tables, zero independent structural-ID tool. Jaccard overlap. A note, not a thesis, unless they disagree.",
    medical:
      "Villaverde and colleagues have already shown that published tumour-growth models fail identifiability. External-tool agreement is how this archive stops being a private toy family.",
  },
  {
    id: "D",
    title: "T36 — T-optimal discrimination, not D-optimal densification",
    why: "Extra samples that shrink κ while the pause contrast ψ stays flat are estimation theatre. Kill if the minimizer is T27’s already-documented fraction readout.",
    medical:
      "Liquid-biopsy calendars that sample a cancelled coordinate cannot tell angiogenic pause from immune-held latency when burdens match.",
  },
];
