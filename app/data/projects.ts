export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  status: "active" | "completed" | "research";
};

export const projects: Project[] = [
  {
    title: "Neurosymbolic VQA Pipeline",
    description:
      "A modular pipeline combining neural perception (object detection, scene graphs) with Answer Set Programming for Visual Question Answering. Developed across synthetic (CLEVR), graph-based (GQA), and realistic domains. Published in TPLP 2022 and extended with contrastive explainability at IJCAI 2023.",
    tags: ["ASP", "PyTorch", "Computer Vision", "Explainability", "Clingo"],
    status: "research",
  },
  {
    title: "ALASPO",
    description:
      "Adaptive Large-Neighbourhood ASP Optimiser. A framework for combinatorial optimization using answer-set programming with adaptive search. Applied to industrial scheduling at Bosch. Published at AAAI 2022, KR 2022, and Artificial Intelligence journal 2024.",
    tags: ["ASP", "Optimization", "Scheduling", "Bosch", "Clingo"],
    status: "research",
  },
  {
    title: "LLM-ASP Integration for VQA",
    description:
      "Systems combining LLMs for natural language parsing with ASP for logical reasoning over visual scenes. Includes declarative knowledge distillation from LLMs to generate ASP rules, and zero-shot VQA with explainability. Published at ICLP 2024 and SEMANTiCS 2025.",
    tags: ["LLMs", "ASP", "Knowledge Distillation", "Zero-Shot"],
    status: "research",
  },
  {
    title: "T-norm Constrained Object Detection",
    description:
      "Integration of logical constraints into deep learning models for autonomous driving using fuzzy logic t-norms. Collaborative research between TU Wien and NII Japan. Accepted at NeurIPS 2025.",
    tags: ["NeurIPS", "Fuzzy Logic", "Autonomous Driving", "Constraints"],
    status: "research",
  },
  {
    title: "LARA",
    description:
      "Theoretical work on the expressiveness of a unified language for linear and relational algebra, bridging database query languages and machine learning operators. Proved expressive completeness w.r.t. first-order logic with aggregation. Published at ICDT 2020, DEEM@SIGMOD 2019, and TCS 2022.",
    tags: ["Query Languages", "Formal Methods", "Database Theory", "ML Pipelines"],
    status: "completed",
  },
];
