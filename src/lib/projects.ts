export interface Project {
  slug: string;
  index: string;
  category: string;
  title: string;
  discipline: string;
  metrics: string;
  stack: string[];
  overview: string;
  architecture: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "permission-to-defend",
    index: "01",
    category: "AI & ANALYSIS",
    title: "Permission to Defend",
    discipline: "Automated Manifest Audit & LLM Guardrails",
    metrics: "Deterministic Risk Engine",
    stack: ["FastAPI", "Gemini 2.5", "Python", "BeautifulSoup4"],
    overview: "An AI-powered security workspace built to automate Android application permission audits, parsing manifest XML files and enforcing strict domain guards via raw REST APIs[cite: 1].",
    architecture: [
      "Automated ingestion pipelines parsing raw Google Play Store permissions and Android Manifest XML via BeautifulSoup4[cite: 1].",
      "Integrated Gemini 2.5 Flash via raw REST payloads to establish domain-guarded chat assistants[cite: 1].",
      "Transforms unstructured security policies into a structured mathematical risk dashboard[cite: 1]."
    ],
    link: "https://permission-to-defend.vercel.app/"
  },
  {
    slug: "trackeat",
    index: "02",
    category: "CLIENT RUNTIME",
    title: "TrackEat! Sync Engine",
    discipline: "Sub-millisecond Offline-First Local Store",
    metrics: "Sub-ms CRUD / 60 FPS Fixed",
    stack: ["Flutter", "Dart", "Hive NoSQL"],
    overview: "A cross-platform mobile application engineered for meal tracking and real-time order calculation with a zero-latency local caching layer[cite: 1].",
    architecture: [
      "Implemented an offline-first Hive NoSQL database schema for instantaneous local caching and sub-millisecond CRUD operations[cite: 1].",
      "Designed dynamic, reactive UI rendering flows maintaining a strict 60 FPS performance floor[cite: 1].",
      "Strict data models and input validation layers eliminating runtime null-pointer exceptions[cite: 1]."
    ]
  },
  {
    slug: "need-for-50",
    index: "03",
    category: "SIMULATION",
    title: "Need for 50",
    discipline: "Discrete State Machine & Telemetry Simulation",
    metrics: "Deterministic Tick Pipeline",
    stack: ["Unity", "C#", "Vector Physics"],
    overview: "A low-level racing simulation prototype focusing on precise player control loops, fixed-timestep physics updates, and deterministic state management[cite: 1].",
    architecture: [
      "Built core gameplay and interaction systems utilizing fixed-timestep event loops.",
      "Implemented finite state machines for vehicle behavior tracking and dynamic telemetry triggers.",
      "Optimized asset memory footprints and update cycles for smooth runtime performance[cite: 1]."
    ],
    link: "https://youtu.be/jiL2SUUjnPo?si=13_FwUc1AeTZAQ-5"
  },
  {
    slug: "hazard-telemetry",
    index: "04",
    category: "GEOSPATIAL",
    title: "Hazard Telemetry",
    discipline: "Spatial Data Ingestion & Indexing Engine",
    metrics: "GeoJSON Spatial Query Layer",
    stack: ["Django", "MongoDB", "REST APIs"],
    overview: "A data-driven backend service designed to ingest, store, and visualize multi-source crime and hazard telemetry with optimized spatial queries[cite: 1].",
    architecture: [
      "Structured backend data models in MongoDB to handle complex GeoJSON coordinate documents[cite: 1].",
      "Engineered REST API endpoints to process structured hazard feeds asynchronously[cite: 1].",
      "Optimized database indexing strategies to handle spatial filtering overhead efficiently[cite: 1]."
    ],
    link: "https://youtu.be/DnyuYM8pGwk?si=1j4ZxzMm5CWyUbxD"
  },
];