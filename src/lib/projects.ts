export interface GalleryItem {
  src: string;
  caption?: string;
  alt: string;
}

export interface Project {
  slug: string;
  index: string;
  category: string;
  title: string;
  discipline: string;
  metrics: string;
  stack: string[];
  thumbnail: string; 
  cover: string;     
  overview: string; 
  problemStatement: string; 
  architecture: {
    heading: string;
    details: string;
  }[];
  outcomes: string[];
  link?: string;
  gallery?: GalleryItem[];
}

export const PROJECTS: Project[] = [
  {
    slug: "trackit-food-order-management",
    index: "01",
    category: "Mobile Application",
    title: "TrackIt: Food Order & Menu Management",
    discipline: "Mobile App Development & UI Engineering",
    metrics: "Sub-100ms local query latency, 100% offline uptime",
    stack: ["Flutter", "Dart", "Hive DB", "Android"],
    thumbnail: "/assets/trackit-thumb.jpg",
    cover: "/assets/trackit-cover.jpg",
    overview: "A lightweight, offline-first Android application designed for independent food businesses to streamline dynamic order intake, real-time bill calculations, and catalog management without cloud dependency.",
    problemStatement: "Small-scale culinary businesses handling high-volume daily custom orders frequently suffer from manual calculation errors, chaotic pen-and-paper tracking, and disrupted workflows during intermittent network connectivity.",
    architecture: [
      {
        heading: "Offline-First Local Persistence",
        details: "Leveraged Hive NoSQL key-value store to maintain low-latency read/write operations for menu configurations and persistent order histories directly on device storage."
      },
      {
        heading: "Dynamic State & Real-Time Calculation Engine",
        details: "Built an on-the-fly order computation pipeline handling multiple measurement units (pcs, gms, ml) alongside live bill tallies and dynamic item reordering without state disruption."
      },
      {
        heading: "Hardware-Aware Reactive UI",
        details: "Structured adaptive layout trees with custom focus and inset handling to eliminate system navigation overlaps, keyboard collisions, and view obstruction during rapid data entry."
      }
    ],
    outcomes: [
      "Eliminated manual pricing inaccuracies with real-time, multi-unit arithmetic calculations during order compilation.",
      "Ensured continuous operation in low-connectivity kitchen environments through an embedded local database architecture.",
      "Streamlined rapid order creation via contextual search filtering and dynamic cart prioritization."
    ],
    link: "https://github.com/Hiithaard47/TrackIt"
  },
  {
    slug: "permission-to-defend",
    index: "02",
    category: "AI & ANALYSIS",
    title: "Permission to Defend",
    discipline: "Automated Manifest Audit & LLM Guardrails",
    metrics: "Deterministic Risk Engine",
    stack: ["FastAPI", "Gemini 2.5", "Python", "BeautifulSoup4"],
    thumbnail: "/assets/ptd-thumb.jpg",
    cover: "/assets/ptd-cover.jpg",
    overview: "An AI-powered security workspace built to automate Android application permission audits, parsing manifest XML files and enforcing strict domain guards via raw REST APIs.",
    problemStatement: "Manual auditing of Android application manifests is a time-consuming and error-prone process, leaving systems vulnerable to overlooked permission escalations and domain-specific exploits.",
    architecture: [
      {
        heading: "Automated Ingestion Pipeline",
        details: "Engineered automated ingestion pipelines parsing raw Google Play Store permissions and Android Manifest XML via BeautifulSoup4."
      },
      {
        heading: "LLM Guardrails & Integration",
        details: "Integrated Gemini 2.5 Flash via raw REST payloads to establish domain-guarded chat assistants that reject out-of-scope prompts."
      },
      {
        heading: "Risk Transformation Layer",
        details: "Architected a system that transforms unstructured security policies into a structured mathematical risk dashboard."
      }
    ],
    outcomes: [
      "Automated the extraction and analysis of complex XML manifest files.",
      "Enforced strict domain guards to prevent hallucinated security policies.",
      "Reduced audit time significantly by generating structured mathematical risk assessments."
    ],
    link: "https://permission-to-defend.vercel.app/"
  },
  {
    slug: "need-for-50",
    index: "03",
    category: "SIMULATION",
    title: "Need for 50",
    discipline: "Discrete State Machine & Telemetry Simulation",
    metrics: "Deterministic Tick Pipeline",
    stack: ["Unity", "C#", "Vector Physics"],
    thumbnail: "/assets/nf50-thumb.jpg",
    cover: "/assets/nf50-cover.jpg",
    overview: "A low-level racing simulation prototype focusing on precise player control loops, fixed-timestep physics updates, and deterministic state management.",
    problemStatement: "Developing a precise simulation requires overcoming the physics engine's non-deterministic variable framerates, which normally cause unpredictable telemetry and control desyncs.",
    architecture: [
      {
        heading: "Fixed-Timestep Event Loops",
        details: "Built core gameplay and interaction systems utilizing fixed-timestep event loops to guarantee physics consistency."
      },
      {
        heading: "Finite State Machines",
        details: "Implemented finite state machines for vehicle behavior tracking and dynamic telemetry triggers."
      },
      {
        heading: "Memory & Cycle Optimization",
        details: "Optimized asset memory footprints and update cycles for smooth runtime performance and garbage collection reduction."
      }
    ],
    outcomes: [
      "Achieved deterministic state management across all player control loops.",
      "Stabilized physics updates eliminating frame-rate dependent collision errors.",
      "Maintained consistent telemetry polling without frame-drop disruptions."
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
    thumbnail: "/assets/hazard-thumb.jpg",
    cover: "/assets/hazard-cover.jpg",
    overview: "A data-driven backend service designed to ingest, store, and visualize multi-source crime and hazard telemetry with optimized spatial queries.",
    problemStatement: "Standard relational databases struggle to efficiently index and query complex, high-velocity geospatial coordinate data originating from multiple disparate telemetry feeds.",
    architecture: [
      {
        heading: "GeoJSON Document Modeling",
        details: "Structured backend data models in MongoDB to handle complex GeoJSON coordinate documents natively."
      },
      {
        heading: "Asynchronous REST Endpoints",
        details: "Engineered REST API endpoints to process structured hazard feeds asynchronously without blocking the main event thread."
      },
      {
        heading: "Spatial Indexing Strategy",
        details: "Optimized database indexing strategies to handle spatial filtering overhead efficiently during heavy read operations."
      }
    ],
    outcomes: [
      "Enabled sub-second spatial querying over large, multi-source hazard datasets.",
      "Standardized diverse telemetry feeds into unified GeoJSON outputs.",
      "Scaled read-performance through optimized 2dsphere indexing algorithms."
    ],
    link: "https://youtu.be/DnyuYM8pGwk?si=1j4ZxzMm5CWyUbxD"
  },
  {
    slug: "dijkstra-logistics-optimizer",
    index: "05",
    category: "Systems & Algorithms",
    title: "Multi-Node Logistics Network Optimizer",
    discipline: "Systems Programming & Graph Theory",
    metrics: "O(E log V) Routing Efficiency",
    stack: ["C++", "Graph Theory", "Data Structures", "STL", "CLI"],

    thumbnail: "/assets/dijkstra-logistics-thumb.jpg",
    cover: "/assets/dijkstra-logistics-cover.jpg",

    overview: "A high-performance C++ routing engine engineered to compute optimal dispatch paths across multi-node logistical supply networks using Dijkstra’s shortest-path algorithm.",

    problemStatement: "Supply chain networks frequently face significant dispatch delays and suboptimal fuel consumption when navigating complex, weighted multi-node distribution grids under dynamic road and transit constraints.",

    architecture: [
      {
        heading: "Graph Modeling & State Representation",
        details: "Modeled distribution hubs, transfer centers, and delivery points as directed weighted adjacency lists, enabling rapid state queries and minimal memory overhead."
      },
      {
        heading: "Priority Queue Optimization",
        details: "Implemented Dijkstra's algorithm leveraging min-heaps via the C++ STL priority queue to achieve O((V + E) log V) time complexity during route discovery."
      },
      {
        heading: "Path Reconstruction & Network Diagnostics",
        details: "Engineered backtracking traversal mechanisms to extract exact end-to-end waypoint sequences alongside cumulative traversal costs for operational audits."
      }
    ],

    outcomes: [
      "Delivered deterministic, low-latency shortest-path calculations across dense multi-node logistics graphs.",
      "Eliminated redundant path recalculations through efficient adjacency-list traversal and heap-based vertex evaluation.",
      "Validated edge cases including disconnected components, cyclic routes, and variable dispatch weights."
    ]
  }
];