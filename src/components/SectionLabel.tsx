interface SectionLabelProps {
  number: string;
  children: string;
  as?: "h1" | "h2" | "p";
}

const SectionLabel = ({
  number,
  children,
  as: Heading = "h2",
}: SectionLabelProps) => (
  <Heading className="section-label">
    <span aria-hidden="true">{number}</span> {children}
  </Heading>
);

export default SectionLabel;
