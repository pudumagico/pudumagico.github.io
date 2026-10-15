import { projects } from "../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Nelson Nicolas Higuera Ruiz",
  alternates: { canonical: "/projects/" },
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-10">
      <h1 className="text-3xl mb-2">Projects</h1>
      <p className="text-sm text-muted mb-10">
        Research systems, open-source tools, and ventures.
      </p>

      <div className="space-y-2.5">
        {projects.map((project) => (
          <article key={project.title} className="tile">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="text-xl">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <span className="tag shrink-0">{project.status}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
