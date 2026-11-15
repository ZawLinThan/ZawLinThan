export type ProjectStatus = "In progress" | string;

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  return (
    <span
      className={`status-badge ${status === "In progress" ? "in-progress" : "done"}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
