export type ClusterId =
  | "stroma"
  | "occult"
  | "identifiability"
  | "gates"
  | "observer"
  | "host"
  | "aging";

export type Thesis = {
  id: string;
  n: number;
  title: string;
  problem: string;
  contribution: string;
  repo: string;
  clusters: ClusterId[];
  wetlab?: boolean;
};

export const CLUSTERS: {
  id: ClusterId;
  name: string;
  medical: string;
  source: string;
  cite: string;
}[] = [
  {
    id: "stroma",
    name: "Stromal mechanics and delivery failure",
    medical:
      "Solid tumours live in a mechanically active stroma. Matrix stiffness and fibrotic force are not decoration: they drive progression and can physically block drug delivery. A lumped burden ODE cannot see that barrier.",
    source:
      "Butcher, Alliston and Weaver, Nat Rev Cancer 2009; Olive et al. on Hedgehog-dependent stroma limiting chemotherapy in PDAC models; Provenzano et al. on hyaluronan as a physical barrier.",
    cite: "Butcher DT, Alliston T, Weaver VM. A tense situation: forcing tumour progression. Nat Rev Cancer. 2009;9(2):108-22. doi:10.1038/nrc2544",
  },
  {
    id: "occult",
    name: "Occult residual disease",
    medical:
      "Disease that is below detection is still a dynamical object. Naming it as a hidden continuous parameter licenses smuggling extra states into Θ. Hybrid modes with named switching observables are the honest alternative.",
    source:
      "Dormancy and residual-disease literature as a modelling problem, not a ctDNA product claim. This archive treats occult as hybrid switching (quiescence, angiogenic pause, immune-held latency).",
    cite: "Thesis 04 names the modes; Thesis 20 asks which switches survive a sparse delayed observer.",
  },
  {
    id: "identifiability",
    name: "Unidentifiable models used as unique",
    medical:
      "Cancer kinetic models are fitted and then treated as if parameters were unique. Structural and practical identifiability routinely fail. Predictions from unidentified Θ are not evidence.",
    source:
      "Phan, Bennett, Patten, Life 2023 on identifiability in clinical cancer-model applications; Raue–Kreutz–Timmer profile likelihood; Villaverde STRIKE-GOLDD on tumour-growth models.",
    cite: "Phan T, Bennett J, Patten T. Practical Understanding of Cancer Model Identifiability in Clinical Applications. Life. 2023;13(2):410. doi:10.3390/life13020410",
  },
  {
    id: "gates",
    name: "Knowledge that must not become a coefficient",
    medical:
      "Oncology knowledge graphs, guidelines, and screen scores exist. Writing them into ODE rates is a category error. Medicine needs a gate: evidence can change hypothesis rank without entering Θ.",
    source:
      "This is the CONFLUENCE refusal: Knowledge ≠ Evidence ≠ Mechanism ≠ Parameter ≠ Prediction.",
    cite: "Theses 01, 02, 03, 16, 19, 31, 34.",
  },
  {
    id: "observer",
    name: "Sparse, delayed, censored observers",
    medical:
      "Liquid-biopsy-style scalars are sparse, lagged, and floored. Controllers that assume full state fail. Extra samples of a cancelled coordinate do not restore identifiability.",
    source:
      "Partial-observation and closed-loop identification, instantiated on a liquid-biopsy-style toy. Not a ctDNA assay and not a limit of detection.",
    cite: "Theses 20 and 27. Coverage failure on T35 envelope A is the predictive twin of this gap.",
  },
  {
    id: "host",
    name: "Host context that is not PK/PD",
    medical:
      "Infection windows, lactate, checkpoint proxies, and metabolic assays change which hypotheses are even legal. They are not licence to rewrite kinetic Θ as treatment.",
    source:
      "Immunometabolic and host–tumour coupling as constraint graphs, not dosing models.",
    cite: "Theses 08, 10, 14, 15, 23, 29.",
  },
  {
    id: "aging",
    name: "Coupled-subsystem failure and Gompertz hazard",
    medical:
      "Aging-like hazard can emerge from load × gain on damaged subsystems. That is a computational biogerontology object. It is not rejuvenation.",
    source:
      "Gompertz demography as a schedule to test which gains stay free, not a mortality-database download.",
    cite: "Theses 13, 18, 25, 32.",
  },
];

const gh = (slug: string) => `https://github.com/cloudynirvana/${slug}`;

export const THESES: Thesis[] = [
  {
    id: "T00",
    n: 0,
    title:
      "In vitro antidiabetic activity of silver nanoparticles from Carica papaya leaf extract",
    problem:
      "A wet-lab B.Sc. measured α-amylase inhibition. Later papers may name that assay as an observation channel. They do not copy its tables into Θ.",
    contribution:
      "Awarded B.Sc., Nile University of Nigeria, July 2022. Format source for the computational series. Separate science.",
    repo: gh("thesis-bsc-carica-papaya-agnp"),
    clusters: ["host"],
    wetlab: true,
  },
  {
    id: "T01",
    n: 1,
    title:
      "CONFLUENCE × OnCo: evidence-gated binding of oncology knowledge graphs to a frozen cancer-state model",
    problem:
      "Heterogeneous knowledge-graph records get promoted into ODE coefficients as if they were measurements.",
    contribution:
      "A gated adapter that refuses skip-level promotion into Θ. Knowledge stays knowledge.",
    repo: gh("thesis-01-confluence-onco"),
    clusters: ["gates"],
  },
  {
    id: "T02",
    n: 2,
    title:
      "NSTG-guided in-silico pathology dynamics without auto-translating guidelines into rates",
    problem:
      "Clinical guidelines are written as if they were kinetic law.",
    contribution:
      "CaseCards constrain exploration. NSTG never becomes a coefficient.",
    repo: gh("thesis-02-complexity-nstg"),
    clusters: ["gates"],
  },
  {
    id: "T03",
    n: 3,
    title: "Disease Profiles as versioned research objects, not care products",
    problem:
      "A patient chart, a knowledge page, and a qualitative board get collapsed into one identified parameter.",
    contribution:
      "A reusable research object with an illegal-merge refusal.",
    repo: gh("thesis-03-disease-profile"),
    clusters: ["gates"],
  },
  {
    id: "T04",
    n: 4,
    title: "Occult residual disease as hybrid switching, not a hidden continuous state",
    problem:
      "Undetectable residual disease is modelled by smuggling extra continuous states into Θ.",
    contribution:
      "Named modes (proliferative, quiescent, angiogenic pause, immune-held) with switching observables.",
    repo: gh("thesis-04-occult-hybrid-switching"),
    clusters: ["occult"],
  },
  {
    id: "T05",
    n: 5,
    title: "Metastasis as spreading on anatomical graphs versus lumped burden ODEs",
    problem:
      "A one-state burden cannot carry organ-to-organ seeding, transit, or carrying capacities.",
    contribution:
      "Edge rates on a toy five-node graph remain unidentified under lumped outputs.",
    repo: gh("thesis-05-metastasis-anatomical-graphs"),
    clusters: ["stroma"],
  },
  {
    id: "T06",
    n: 6,
    title: "Sparse connectome-style controllers as in-silico policy classes",
    problem:
      "Lumped adaptive-therapy policies and sparse architectures are treated as the same closed loop.",
    contribution:
      "Identifiable closed-loop differences on a toy ODE. Not fly-neuron therapy.",
    repo: gh("thesis-06-sparse-connectome-controllers"),
    clusters: ["observer"],
  },
  {
    id: "T07",
    n: 7,
    title:
      "Identifiability of a frozen TNBC ATP–ROS–glucose ODE under known phytochemical forcings",
    problem:
      "Screen scores are written as efficacy inside a tipping-point ODE.",
    contribution:
      "Which kinetic coordinates remain identifiable when symbols are known forcings, not treatment.",
    repo: gh("thesis-07-tnbc-tipping-identifiability"),
    clusters: ["identifiability", "gates"],
  },
  {
    id: "T08",
    n: 8,
    title: "Papaya AgNP α-amylase work as a named metabolic observation channel",
    problem:
      "An undergraduate assay is silently reused as a therapy coefficient.",
    contribution:
      "The inhibition fraction stress-tests metabolic ODEs. It does not enter Θ. It does not re-tabulate Thesis 0.",
    repo: gh("thesis-08-papaya-agnp-observation-channel"),
    clusters: ["host", "gates"],
  },
  {
    id: "T09",
    n: 9,
    title: "Practical identifiability of a shared metabolic ODE under noisy multi-channel maps",
    problem:
      "A ratio snapshot looks like a measurement of five rates. It is rank 1 of 5.",
    contribution:
      "After loadings are profiled out, rank is 4 of 5. The missing direction is a common rescaling. Synthetic surrogate, not a CCLE download.",
    repo: gh("thesis-09-ccle-metabolic-ode-identifiability"),
    clusters: ["identifiability"],
  },
  {
    id: "T10",
    n: 10,
    title: "Lactate, checkpoint proxies, and host constraints that must not enter Θ",
    problem:
      "Immunometabolic observables are rewritten as drug parameters.",
    contribution:
      "They change hypothesis rank and stay outside Θ. Not a checkpoint dose.",
    repo: gh("thesis-10-immunometabolic-refuse-as-parameter"),
    clusters: ["host", "gates"],
  },
  {
    id: "T11",
    n: 11,
    title:
      "When a lumped burden ODE cannot represent a fibrotic delivery barrier",
    problem:
      "Desmoplastic force (Butcher–Weaver) and stromal exclusion (Olive, Provenzano) are averaged into a one-state sink.",
    contribution:
      "Barrier coordinates enter a three-shell reduction only through conductances. A matched spatial mean is not a core concentration.",
    repo: gh("thesis-11-desmoplastic-transport-identifiability"),
    clusters: ["stroma", "identifiability"],
  },
  {
    id: "T12",
    n: 12,
    title: "Stiff–sloppy spectra and reduction that does not rename leftovers as biology",
    problem:
      "Sloppy combinations after reduction are relabelled as mechanisms.",
    contribution:
      "MBAM-style reduction of a toy cancer-state ODE. Leftover sloppy directions stay sloppy.",
    repo: gh("thesis-12-stiff-sloppy-cancer-ode-reduction"),
    clusters: ["identifiability"],
  },
  {
    id: "T13",
    n: 13,
    title: "Gompertz-like hazard from load × gain coupling of damaged subsystems",
    problem:
      "Near-linear local damage is assumed to stay linear at the organism scale.",
    contribution:
      "Which gains stay free on a demographic-style schedule. Not rejuvenation.",
    repo: gh("thesis-13-gompertz-load-gain-coupling"),
    clusters: ["aging"],
  },
  {
    id: "T14",
    n: 14,
    title: "Host infection × residual burden as a delayed-risk constraint graph",
    problem:
      "Infection windows are absorbed into PK/PD coefficients.",
    contribution:
      "Declared windows change rank and stay outside Θ. Not a cohort.",
    repo: gh("thesis-14-infection-residual-burden-delay-graph"),
    clusters: ["host"],
  },
  {
    id: "T15",
    n: 15,
    title: "AgNP–exosome–Raman layers as separate observation channels on a Profile",
    problem:
      "Theranostic layers are merged into one θ.",
    contribution:
      "A file that writes them into one parameter is refused.",
    repo: gh("thesis-15-nanobiocomposite-multiobservation-profile"),
    clusters: ["gates", "host"],
  },
  {
    id: "T16",
    n: 16,
    title: "Gated mitochondrial phytochemical screens whose scores are not Θ",
    problem:
      "Surrogate binding scores are treated as docking, then as rates.",
    contribution:
      "Frozen linear surrogate under claim–evidence gates. Distinct from T07 forcings and T08 channels.",
    repo: gh("thesis-16-mitochondrial-dpsim-phytochemical-screen"),
    clusters: ["gates"],
  },
  {
    id: "T17",
    n: 17,
    title: "Complete Lyapunov partition of a cancer-state ODE",
    problem:
      "Chain-recurrent labels are used as if they were certified isolating blocks.",
    contribution:
      "Collocation of V; the failing set is a defect, not a Conley set. The honesty is the result.",
    repo: gh("thesis-17-complete-lyapunov-cancer-ode"),
    clusters: ["occult"],
  },
  {
    id: "T18",
    n: 18,
    title: "Bounded Adaptive Coherence as λ_min of a grounded coupling tensor",
    problem:
      "Aging-like and cancer-like failure are named without a computable object.",
    contribution:
      "Sectors of a 5×5 toy tensor. Not assays.",
    repo: gh("thesis-18-bounded-adaptive-coherence"),
    clusters: ["aging"],
  },
  {
    id: "T19",
    n: 19,
    title: "Which gated screen scores may enter a tip ODE as known forcings?",
    problem:
      "Soft priors and guideline text leak into kinetic writes.",
    contribution:
      "An admission ledger. Theta SHA unchanged on refused calls.",
    repo: gh("thesis-19-forcing-admission-gates-tip-ode"),
    clusters: ["gates"],
  },
  {
    id: "T20",
    n: 20,
    title: "Hybrid occult switches under a sparse delayed liquid-biopsy-style observer",
    problem:
      "A lagged, floored scalar is treated as if it were full state.",
    contribution:
      "When pause modes share a burden law, Fisher contrast on the scalar is 0. The scalar is a pattern, not a ctDNA assay.",
    repo: gh("thesis-20-occult-modes-partial-liquid-biopsy-observer"),
    clusters: ["occult", "observer"],
  },
  {
    id: "T21",
    n: 21,
    title: "Metastasis graphs with edge-wise desmoplastic conductances",
    problem:
      "Barrier force on edges is ignored while lumped burden is fitted.",
    contribution:
      "Edge rates stay unidentified when conductances sit on the graph. Continues T05 × T11 and the Butcher–Weaver mechanical idea.",
    repo: gh("thesis-21-metastasis-graph-barrier-conductances"),
    clusters: ["stroma"],
  },
  {
    id: "T22",
    n: 22,
    title: "Composing named observation channels into a Profile without illegal merge",
    problem:
      "Multiple legal channels are concatenated into θ.",
    contribution:
      "Composition rules that refuse the merge.",
    repo: gh("thesis-22-observation-channel-profile-composition"),
    clusters: ["gates"],
  },
  {
    id: "T23",
    n: 23,
    title: "Host infection windows that re-rank immunometabolic hypotheses",
    problem:
      "Host context is either ignored or written as a rate.",
    contribution:
      "Windows re-rank structures and stay outside Θ.",
    repo: gh("thesis-23-host-ranked-immunometabolic-hypotheses"),
    clusters: ["host"],
  },
  {
    id: "T24",
    n: 24,
    title: "Which Fisher ranks survive a stiff–sloppy reduction?",
    problem:
      "Reduction is assumed to preserve every identifiable direction.",
    contribution:
      "Practical rank 5 of 6 on the reduced chart in the documented toy. Shared multi-channel observation.",
    repo: gh("thesis-24-reduction-preserving-multichannel-id"),
    clusters: ["identifiability"],
  },
  {
    id: "T25",
    n: 25,
    title: "Aging-like BAC sectors versus load × gain Gompertz regimes",
    problem:
      "Two aging objects are assumed to coincide because both are named aging.",
    contribution:
      "On the shared toy they do not coincide. Negative results are still results.",
    repo: gh("thesis-25-bac-sectors-vs-gompertz-gain"),
    clusters: ["aging"],
  },
  {
    id: "T26",
    n: 26,
    title: "Hybrid occult switches versus chain-recurrent components on a joint field",
    problem:
      "Mode labels and Lyapunov labels are treated as the same partition.",
    contribution:
      "They do not align. Orbital derivative remains positive on a documented fraction of the orbit.",
    repo: gh("thesis-26-chain-recurrent-vs-hybrid-occult"),
    clusters: ["occult"],
  },
  {
    id: "T27",
    n: 27,
    title: "Sparse controllers under T20’s sparse delayed observer",
    problem:
      "A full-state policy is deployed on a lagged scalar.",
    contribution:
      "Steering fails. The sensitive clone is driven to 0 — closed-loop cancellation. Fraction readout is the documented rescue, not a new observer family.",
    repo: gh("thesis-27-sparse-controllers-partial-lb-observer"),
    clusters: ["observer", "occult"],
  },
  {
    id: "T28",
    n: 28,
    title: "Admitted forcings that remain distinguishable after reduction",
    problem:
      "A legal input is a rescaling of a reduced product (u_h versus κ).",
    contribution:
      "Gain forcing is numerically a κ-rescaling. Product and pool inputs remain distinguishable. Soft priors refused. Budget 3.841 is a slice, not a profile.",
    repo: gh("thesis-28-admitted-forcings-after-reduction"),
    clusters: ["gates", "identifiability"],
  },
  {
    id: "T29",
    n: 29,
    title: "Host windows that change which channel compositions stay legal",
    problem:
      "Host context is applied after an illegal merge.",
    contribution:
      "Windows act on composition legality, not on Θ.",
    repo: gh("thesis-29-host-windows-channel-profile-composition"),
    clusters: ["host", "gates"],
  },
  {
    id: "T30",
    n: 30,
    title: "Occult switches and barrier-augmented metastatic edge-rate identifiability",
    problem:
      "Dormancy and stromal force are studied apart, then the graph is fitted as if both were absent.",
    contribution:
      "Which edge rates stay identifiable from mode-partial maps. T20 × T21.",
    repo: gh("thesis-30-occult-modes-barrier-edge-rates"),
    clusters: ["stroma", "occult"],
  },
  {
    id: "T31",
    n: 31,
    title: "NSTG CaseCards as predicates for forcing admission",
    problem:
      "Guideline sentences become rates because the JSON parsed.",
    contribution:
      "19 of 20 token-poisoned writes refused. Theta SHA unchanged. Not a statistical FPR of a scientific gate.",
    repo: gh("thesis-31-casecards-forcing-admission-predicates"),
    clusters: ["gates"],
  },
  {
    id: "T32",
    n: 32,
    title: "Aging-like BAC sectors when coupling travels only through barrier-limited edges",
    problem:
      "Coherence is computed as if the stroma were empty space.",
    contribution:
      "Does the BAC sector survive when coupling is conductance-limited? T25 × T21, under the Butcher mechanical idea.",
    repo: gh("thesis-32-bac-sectors-under-barrier-transport"),
    clusters: ["aging", "stroma"],
  },
  {
    id: "T33",
    n: 33,
    title: "Chain-recurrent labels recoverable from ranks that survive reduction",
    problem:
      "Uncertified Lyapunov labels are read off surviving Fisher directions.",
    contribution:
      "Which labels remain recoverable. The collocation defect is still the honest bound.",
    repo: gh("thesis-33-chain-recurrent-under-surviving-ranks"),
    clusters: ["occult", "identifiability"],
  },
  {
    id: "T34",
    n: 34,
    title: "Named AgNP channel scores as forcing provenance under evidence gates",
    problem:
      "An assay score is admitted as both channel and kinetic write.",
    contribution:
      "Provenance only. Does not re-tabulate Thesis 0.",
    repo: gh("thesis-34-agnp-channel-forcing-provenance"),
    clusters: ["gates", "host"],
  },
  {
    id: "T35",
    n: 35,
    title: "Structural discrepancy versus Θ uncertainty after rank-preserving reduction",
    problem:
      "Parameter-only bands are reported as 95% prediction. On this toy they cover 0.755 of the held-out path.",
    contribution:
      "Envelope A (Θ only) 0.755; B (Θ + structured discrepancy) 1.000; C (wrong structure) 0.510. Open addendum: profile of omitted k_par while the residual is co-estimated.",
    repo: gh("thesis-35-discrepancy-vs-theta-uncertainty"),
    clusters: ["identifiability"],
  },
];

export const HUB = "https://github.com/cloudynirvana/research-theses-hub";
export const AUTHOR = "Kelechi Emeka Ogbonna";
export const EMAIL = "kelechiogbonna300@gmail.com";

export function thesisById(id: string) {
  return THESES.find((t) => t.id.toLowerCase() === id.toLowerCase());
}

export function thesesFor(cluster: ClusterId) {
  return THESES.filter((t) => t.clusters.includes(cluster));
}
