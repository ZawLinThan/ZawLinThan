import type { Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
const ProjectGrid = ({
  projects,
  headingLevel = "h2",
}: {
  projects: Project[];
  headingLevel?: "h2" | "h3";
}) => {
  return (
    <div className="project-grid">
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
