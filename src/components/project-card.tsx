"use client";
import { ArrowUpLeft, Check, Code2, Play } from "lucide-react";
import { ProjectBrowser } from "@/components/project-browser";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectCard({
  project,
  index,
  active,
  onActiveChange,
}: {
  project: PortfolioProject;
  index: number;
  active: boolean;
  onActiveChange: (id: string | null) => void;
}) {
  return (
    <article id={project.id} className="project-card">
      <div className="project-topline">
        <span className="project-index" dir="ltr">
          /{String(index).padStart(2, "0")}
        </span>
        <span>{project.category}</span>
        {project.year && (
          <span className="project-year" dir="ltr">
            {project.year}
          </span>
        )}
      </div>
      {project.websiteUrl && (
        <ProjectBrowser
          id={project.id}
          title={project.title}
          url={project.websiteUrl}
          active={active}
          onActiveChange={onActiveChange}
        />
      )}
      <div className="project-info">
        <div className="project-story">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-cta"
              >
                فتح الموقع
                <span className="cta-icon">
                  <ArrowUpLeft size={17} aria-hidden="true" />
                </span>
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-glass"
              >
                <Code2 size={17} aria-hidden="true" />
                الكود المصدري
              </a>
            )}
            {project.videoUrl && (
              <a
                className="text-link"
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play size={15} aria-hidden="true" />
                عرض الفيديو
                <ArrowUpLeft size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className="project-details">
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <Check size={15} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="tags" dir="ltr">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
