import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import PageMeta from "../components/PageMeta";
import { projects } from "../data/projects";
const HomePage = () => {
  return (
    <>
      <PageMeta
        title="Computer Science at Georgia Tech"
        description="AI and full-stack projects by Zaw Lin Than. Seeking internships and co-ops."
      />
      <Hero />
      <section className="wrap section home-projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / PROJECT INDEX</p>
            <h2>Selected projects</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects ↗
          </Link>
        </div>
        <ProjectGrid projects={projects.slice(0, 2)} headingLevel="h3" />
      </section>
    </>
  );
};

export default HomePage;
