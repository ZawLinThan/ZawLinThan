import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import StatusBadge from "./StatusBadge";
import TechStack from "./TechStack";
import Arrow from "./Arrow";

const ProjectCard = ({
  project,
  index,
  headingLevel: Heading,
}: {
  project: Project;
  index: number;
  headingLevel: "h2" | "h3";
}) => (
  <Link
    className="project-card"
    to={`/projects/${project.slug}`}
    aria-label={`View ${project.title} project`}
  >
    <div className="project-filebar">
      <span className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span>{project.category}</span>
      <span className="filebar-arrow" aria-hidden="true">
        ↗
      </span>
    </div>
    <div className="project-card-body">
      <div className="project-card-title">
        <Heading>{project.title}</Heading>
        <StatusBadge
          status={project.status === "Done" ? project.date : project.status}
        />
      </div>
      <p className="project-summary">{project.summary}</p>
      {project.pipeline && (
        <div className="project-pipeline">
          <p>System flow</p>
          <ol>
            {project.pipeline.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      <TechStack items={project.stack} />
      <span className="card-link">
        View project <Arrow />
      </span>
    </div>
  </Link>
);

export default ProjectCard;
