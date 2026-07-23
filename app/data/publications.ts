export type Publication = {
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  url?: string;
};

export const publications: Publication[] = [
  // 2026
  {
    title:
      "Distilling Answer-Set Programming Rules from LLMs for Neurosymbolic Visual Question Answering",
    authors: "T. Eiter, N. Higuera Ruiz, J. Oetsch",
    venue: "CoRR abs/2606.03269",
    venueShort: "arXiv",
    year: 2026,
    url: "https://doi.org/10.48550/arXiv.2606.03269",
  },
  // 2025
  {
    title:
      "T-norm Selection for Object Detection in Autonomous Driving with Logical Constraints",
    authors: "T. Eiter, N. Higuera Ruiz, K. Inoue, S. Moriyama",
    venue: "Advances in Neural Information Processing Systems (NeurIPS 2025)",
    venueShort: "NeurIPS",
    year: 2025,
    url: "http://papers.nips.cc/paper_files/paper/2025/hash/7dbdf006424e7749c8a35913d3574c4e-Abstract-Conference.html",
  },
  {
    title:
      "Explainable Zero-Shot Visual Question Answering via Logic-Based Reasoning",
    authors:
      "T. Eiter, J. Hadl, N. Higuera Ruiz, L. Lange, J. Oetsch, B. Scheuvens, J. Strötgen",
    venue: "NeSy 2025, PMLR 284, pp. 977–991",
    venueShort: "NeSy",
    year: 2025,
    url: "https://proceedings.mlr.press/v284/eiter25a.html",
  },
  {
    title:
      "Explainable Zero-Shot Visual Question Answering Logic-Based Reasoning (Extended Abstract)",
    authors:
      "T. Eiter, J. Hadl, N. Higuera, L. Lange, J. Oetsch, B. Scheuvens, J. Strötgen",
    venue: "SEMANTiCS 2025, Vienna, Austria",
    venueShort: "SEMANTiCS",
    year: 2025,
    url: "https://ceur-ws.org/Vol-4064/kgnesy-paper2.pdf",
  },
  // 2024
  {
    title:
      "Adaptive large-neighbourhood search for optimisation in answer-set programming",
    authors:
      "T. Eiter, T. Geibinger, N. Higuera Ruiz, N. Musliu, J. Oetsch, D. Pfliegler, D. Stepanova",
    venue: "Artificial Intelligence 337: 104230",
    venueShort: "AIJ",
    year: 2024,
    url: "https://doi.org/10.1016/j.artint.2024.104230",
  },
  {
    title: "Leveraging Neurosymbolic AI for Slice Discovery",
    authors: "M. Collevati, T. Eiter, N. Higuera",
    venue: "NeSy 2024, Barcelona, Spain. LNCS 14979, pp. 403–418",
    venueShort: "NeSy",
    year: 2024,
    url: "https://doi.org/10.1007/978-3-031-71167-1_22",
  },
  {
    title:
      "Visual Graph Question Answering with ASP and LLMs for Language Parsing",
    authors: "J.J. Bauer, T. Eiter, N. Higuera Ruiz, J. Oetsch",
    venue: "ICLP 2024, Dallas, USA. EPTCS 416, pp. 15–28",
    venueShort: "ICLP",
    year: 2024,
    url: "https://doi.org/10.4204/EPTCS.416.2",
  },
  {
    title:
      "Declarative Knowledge Distillation from Large Language Models for Visual Question Answering Datasets",
    authors: "T. Eiter, J. Hadl, N. Higuera, J. Oetsch",
    venue: "CoRR abs/2410.09428",
    venueShort: "arXiv",
    year: 2024,
    url: "https://doi.org/10.48550/arXiv.2410.09428",
  },
  // 2023
  {
    title:
      "A Logic-based Approach to Contrastive Explainability for Neurosymbolic Visual Question Answering",
    authors: "T. Eiter, T. Geibinger, N. Higuera, J. Oetsch",
    venue: "IJCAI 2023, Macao, China, pp. 3668–3676",
    venueShort: "IJCAI",
    year: 2023,
    url: "https://doi.org/10.24963/ijcai.2023/408",
  },
  {
    title:
      "A Modular Neurosymbolic Approach for Visual Graph Question Answering",
    authors: "T. Eiter, N. Higuera Ruiz, J. Oetsch",
    venue: "NeSy 2023, Siena, Italy. CEUR 3432, pp. 139–149",
    venueShort: "NeSy",
    year: 2023,
    url: "https://ceur-ws.org/Vol-3432/paper11.pdf",
  },
  // 2022
  {
    title:
      "On the expressiveness of Lara: A proposal for unifying linear and relational algebra",
    authors: "P. Barceló, N. Higuera, J. Pérez, B. Subercaseaux",
    venue: "Theoretical Computer Science 935: 105–127",
    venueShort: "TCS",
    year: 2022,
    url: "https://doi.org/10.1016/j.tcs.2022.09.003",
  },
  {
    title: "A Neuro-Symbolic ASP Pipeline for Visual Question Answering",
    authors: "T. Eiter, N. Higuera, J. Oetsch, M. Pritz",
    venue: "Theory and Practice of Logic Programming 22(5): 739–754",
    venueShort: "TPLP",
    year: 2022,
    url: "https://doi.org/10.1017/S1471068422000229",
  },
  {
    title: "Large-Neighbourhood Search for Optimisation in Answer-Set Solving",
    authors:
      "T. Eiter, T. Geibinger, N. Higuera Ruiz, N. Musliu, J. Oetsch, D. Stepanova",
    venue: "AAAI 2022, pp. 5616–5625",
    venueShort: "AAAI",
    year: 2022,
    url: "https://doi.org/10.1609/aaai.v36i5.20502",
  },
  {
    title: "ALASPO: An Adaptive Large-Neighbourhood ASP Optimiser",
    authors:
      "T. Eiter, T. Geibinger, N. Higuera Ruiz, N. Musliu, J. Oetsch, D. Stepanova",
    venue: "KR 2022, Haifa, Israel",
    venueShort: "KR",
    year: 2022,
    url: "https://proceedings.kr.org/2022/58/",
  },
  // 2020
  {
    title:
      "On the Expressiveness of LARA: A Unified Language for Linear and Relational Algebra",
    authors: "P. Barceló, N. Higuera, J. Pérez, B. Subercaseaux",
    venue: "ICDT 2020, Copenhagen, Denmark. LIPIcs 155, 6:1–6:20",
    venueShort: "ICDT",
    year: 2020,
    url: "https://doi.org/10.4230/LIPIcs.ICDT.2020.6",
  },
  // 2019
  {
    title:
      "Expressiveness of Matrix and Tensor Query Languages in terms of ML Operators",
    authors: "P. Barceló, N. Higuera, J. Pérez, B. Subercaseaux",
    venue: "DEEM@SIGMOD 2019, Amsterdam, Netherlands, 9:1–9:5",
    venueShort: "SIGMOD-W",
    year: 2019,
    url: "https://doi.org/10.1145/3329486.3329498",
  },
];
