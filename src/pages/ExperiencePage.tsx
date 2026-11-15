import SectionHeading from "../components/SectionHeading";
import LeadershipSection from "../components/LeadershipSection";
import ExperienceSection from "../components/ExperienceSection";
import PageMeta from "../components/PageMeta";
import HonorsSection from "../components/HonorsSection";
const ExperiencePage = () => {
  return (
    <>
      <PageMeta
        title="Experience"
        description="Leadership, work experience, and awards."
      />
      <div className="wrap experience-heading">
        <SectionHeading label="Career /" title="Experience" />
      </div>
      <LeadershipSection />
      <ExperienceSection />
      <HonorsSection />
    </>
  );
};

export default ExperiencePage;
