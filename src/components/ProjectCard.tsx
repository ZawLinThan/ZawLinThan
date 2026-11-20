import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import StatusBadge from "./StatusBadge";
import TechStack from "./TechStack";
import ProjectPreview from "./ProjectPreview";
import Arrow from "./Arrow";

const ProjectCard = ({
  project,
  headingLevel,
}: {
  project: Project;
  headingLevel: "h2" | "h3";
}) => {
  const Heading = headingLevel;
  return (
    <Link
      className="project-card"
      to={`/projects/${project.slug}`}
      aria-label={`View ${project.title} project`}
    >
      <div className="project-filebar">
        <span className="eyebrow">{project.category}</span>
        <StatusBadge status={project.date} />
      </div>
      <div className="project-title">
        <Heading>{project.title}</Heading>
      </div>
      <ProjectPreview project={project} />
      <div className="project-copy">
        <p>{project.summary}</p>
        <TechStack items={project.stack} />
        <span className="card-link">
          View project <Arrow />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
