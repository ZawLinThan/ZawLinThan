import type { Project } from "../data/projects";

const workflows: Record<string, readonly string[]> = {
  "rag-study-assistant": [
    "Course materials",
    "Retrieve context",
    "Study tools",
  ],
  "ai-research-agent": [
    "Research question",
    "Evaluate sources",
    "Cited report",
  ],
};

const stepGlyphs = [
  "M7 3h7l4 4v14H6V3h1Zm6 0v5h5M9 12h6m-6 4h6",
  "M9 6 3 12l6 6m6-12 6 6-6 6m-2-14-2 16",
  "M4 5h16v14H4zM4 9h16m-12 5 2 2 4-4",
];

const ProjectPreview = ({ project }: { project: Project }) => {
  const workflow = workflows[project.slug];
  const screenshot = project.screenshots[2] ?? project.screenshots[0];

  if (workflow) {
    return (
      <div className={`project-preview workflow ${project.slug}`}>
        <span className="preview-caption">WORKFLOW</span>
        <ol aria-label={`${project.title} workflow`}>
          {workflow.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true" className="workflow-step">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={stepGlyphs[index]} />
                </svg>
                0{index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (screenshot) {
    return (
      <div className="project-preview project-screenshot">
        <img src={screenshot.src} alt="" loading="lazy" decoding="async" />
      </div>
    );
  }

  return null;
};

export default ProjectPreview;
