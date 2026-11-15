import { useLayoutEffect, useRef } from "react";
import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
const ProjectGrid = ({
  projects,
  headingLevel = "h2",
}: {
  projects: Project[];
  headingLevel?: "h2" | "h3";
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(":scope > .project-card"),
    );

    const layout = () => {
      const gap = Number.parseFloat(getComputedStyle(grid).columnGap);
      const heights = cards.map((card) => card.getBoundingClientRect().height);
      const nextRow = [1, 1];

      // Fill the shorter column while keeping the links in source order.
      cards.forEach((card, index) => {
        const column = nextRow[1] < nextRow[0] ? 1 : 0;
        const height = Math.ceil(heights[index]);
        card.style.setProperty("--project-column", String(column + 1));
        card.style.setProperty("--project-row", String(nextRow[column]));
        card.style.setProperty("--project-span", String(height));
        nextRow[column] += height + gap;
      });
      grid.setAttribute("data-packed", "");
    };

    layout();
    const observer = new ResizeObserver(layout);
    cards.forEach((card) => observer.observe(card, { box: "border-box" }));
    return () => {
      observer.disconnect();
      grid.removeAttribute("data-packed");
    };
  }, [projects]);

  return (
    <div className="project-grid" ref={gridRef}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          headingLevel={headingLevel}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
