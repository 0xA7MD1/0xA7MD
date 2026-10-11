"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectList({
  projects,
}: {
  projects: readonly PortfolioProject[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index + 1}
          active={activeId === project.id}
          onActiveChange={setActiveId}
        />
      ))}
    </div>
  );
}
