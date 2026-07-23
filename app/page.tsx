import Link from "next/link";

const interests = [
  {
    title: "Neurosymbolic AI",
    desc: "Combining neural perception with symbolic reasoning (ASP) for Visual Question Answering",
    icon: "⧉",
  },
  {
    title: "Explainability",
    desc: "Contrastive explanations for AI decisions, making models auditable and trustworthy",
    icon: "⭐",
  },
  {
    title: "Optimization",
    desc: "Large-neighbourhood search for Answer Set Programming (ALASPO system)",
    icon: "⚡",
  },
  {
    title: "Knowledge & LLMs",
    desc: "Declarative knowledge distillation from large language models for structured reasoning",
    icon: "⬡",
  },
];

const timeline = [
  {
    period: "2026 – present",
    role: "AI Researcher",
    org: "ExtensityAI",
    detail: "Research and development on neurosymbolic AI systems.",
  },
  {
    period: "2024",
    role: "Research Intern",
    org: "NII, Tokyo, Japan",
    detail: "6-month internship. Fuzzy logic constraints in deep learning for autonomous driving. Led to NeurIPS 2025 paper.",
  },
  {
    period: "2020 – 2025",
    role: "PhD Researcher",
    org: "TU Wien, Austria",
    detail: "Neurosymbolic AI under Thomas Eiter. Bosch industrial collaboration. Co-supervised 3 BSc + 1 MSc students. PC member of NeSy and TAASP.",
  },
  {
    period: "2019 – 2020",
    role: "Software Engineer",
    org: "Vigigo, Chile",
    detail: "Full-stack development in agile. Delivered projects Gregario, Sherpy, HX, and Nomad.",
  },
  {
    period: "2018 – 2019",
    role: "MSc Computer Science",
    org: "Universidad de Chile",
    detail: "GPA 7.0/7.0 cum laude. Advised by Pablo Barceló and Jorge Pérez. IMFD scholarship.",
  },
  {
    period: "2012 – 2019",
    role: "BSc Engineering in CS",
    org: "Universidad de Chile, FCFM",
    detail: "GPA 6.5/7.0 cum laude. Beca Presidente de la República and Bicentenario scholar.",
  },
];

const pages = [
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
];

export default function Home() {
  return (
    <div className="masonry px-5 pt-8 pb-16">
      <article className="tile">
        <p className="text-xs text-muted tracking-[1.5px] lowercase mb-2">
          ai researcher
        </p>
        <p className="text-sm leading-relaxed">
          Computer scientist specializing in <strong>neurosymbolic AI</strong>{" "}
          &mdash; systems that combine neural networks with logical reasoning to
          produce results that are explainable, verifiable, and auditable. PhD
          from <strong>TU Wien</strong>, published at <strong>NeurIPS</strong>,{" "}
          <strong>AAAI</strong>, <strong>IJCAI</strong>, and the{" "}
          <em>Artificial Intelligence</em> journal.
        </p>
      </article>

      {pages.map((p) => (
        <Link key={p.href} href={p.href} className="tile tile-link">
          {p.label}
        </Link>
      ))}

      {interests.map((item) => (
        <article key={item.title} className="tile">
          <div className="font-display text-2xl mb-1">{item.icon}</div>
          <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
          <p className="text-xs leading-[1.4] text-muted">{item.desc}</p>
        </article>
      ))}

      {timeline.map((item) => (
        <article key={item.period} className="tile">
          <div className="text-xs text-muted tracking-[1.5px] lowercase mb-1">
            {item.period}
          </div>
          <div className="text-sm font-semibold">
            {item.role} <span className="font-normal text-muted">&middot; {item.org}</span>
          </div>
          <p className="text-xs leading-[1.4] text-muted mt-1">{item.detail}</p>
        </article>
      ))}

      <a href="mailto:nelson.higueraruiz@extensity.ai" className="tile tile-link text-sm">
        nelson.higueraruiz@extensity.ai
      </a>
      <a
        href="https://linkedin.com/in/nelson-higuera-ruiz-4372b2204"
        target="_blank"
        rel="noopener noreferrer"
        className="tile tile-link"
      >
        LinkedIn
      </a>
    </div>
  );
}
