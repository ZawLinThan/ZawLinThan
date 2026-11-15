import SectionHeading from "../components/SectionHeading";
import ProjectGrid from "../components/ProjectGrid";
import PageMeta from "../components/PageMeta";
import { projects } from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="wrap page">
      <PageMeta
        title="Projects"
        description="Explore projects in AI, full-stack development, and algorithms."
      />
      <SectionHeading label="PROJECT INDEX" title="Things I’ve built.">
        <p>
          {projects.length} projects across AI, full-stack development, and
          algorithms.
        </p>
      </SectionHeading>
      <ProjectGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
