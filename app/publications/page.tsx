import { publications } from "../data/publications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications — Nelson Nicolas Higuera Ruiz",
  alternates: { canonical: "/publications/" },
};

const profiles = [
  { label: "DBLP", href: "https://dblp.org/pid/242/3002.html" },
  { label: "ORCID", href: "https://orcid.org/0000-0003-3172-723X" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=0vaa2Z8AAAAJ" },
];

export default function Publications() {
  const pubs = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="mx-auto max-w-[900px] px-5 py-10">
      <h1 className="text-3xl mb-2">Publications</h1>
      <p className="text-sm text-muted mb-2">{`${pubs.length} papers`}</p>
      <p className="flex gap-4 text-sm mb-10">
        {profiles.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {p.label}
          </a>
        ))}
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5">
        {pubs.map((pub) => {
          const inner = (
            <>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-display text-2xl leading-none">{pub.year}</span>
                <span className="tag shrink-0">{pub.venueShort}</span>
              </div>
              <h3 className="text-sm font-semibold leading-snug line-clamp-4">
                {pub.title}
              </h3>
              <p className="text-xs text-muted leading-[1.4] line-clamp-2 mt-auto">
                {pub.authors}
              </p>
            </>
          );
          const label = `${pub.title} (${pub.venue})`;
          return pub.url ? (
            <a
              key={pub.title}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="tile tile-square"
            >
              {inner}
            </a>
          ) : (
            <article key={pub.title} title={label} className="tile tile-square">
              {inner}
            </article>
          );
        })}
      </div>
    </div>
  );
}
