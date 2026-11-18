import type { Project } from "../data/projects";

const workflows: Record<string, readonly string[]> = {
  //folio: ["Course materials", "Retrieve context", "Study tools"],
  fieldwork: ["Research question", "Evaluate sources", "Cited report"],
};

const stepGlyphs = [
  "M7 3h7l4 4v14H6V3h1Zm6 0v5h5M9 12h6m-6 4h6",
  "M9 6 3 12l6 6m6-12 6 6-6 6m-2-14-2 16",
  "M4 5h16v14H4zM4 9h16m-12 5 2 2 4-4",
];

const ProjectPreview = ({ project }: { project: Project }) => {
  const workflow = workflows[project.slug];
  const screenshot = project.screenshots[2] ?? project.screenshots[0];

  if (!workflow?.length && !screenshot) return null;
  const hasBoth = Boolean(workflow?.length && screenshot);

  return (
    <div
      className={`project-preview ${project.slug}${hasBoth ? " project-preview-combined" : ""}`}
    >
      {screenshot && (
        <div className="project-screenshot">
          <img src={screenshot.src} alt="" loading="lazy" decoding="async" />
        </div>
      )}
      {!!workflow?.length && (
        <div className="workflow">
          <span className="preview-caption">WORKFLOW</span>
          <ol aria-label={`${project.title} workflow`}>
            {workflow.map((step, index) => {
              const row = Math.floor(index / 3);
              const slot = index % 3;
              const forward = row % 2 === 0;
              const column = forward ? slot + 1 : 3 - slot;
              const next =
                index === workflow.length - 1
                  ? undefined
                  : slot === 2
                    ? "down"
                    : forward
                      ? "right"
                      : "left";

              return (
                <li
                  key={index}
                  style={{ gridRow: row + 1, gridColumn: column }}
                  data-next={next}
                >
                  <span aria-hidden="true" className="workflow-step">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={stepGlyphs[index % stepGlyphs.length]} />
                    </svg>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
