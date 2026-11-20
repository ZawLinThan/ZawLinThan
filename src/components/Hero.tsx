import { Link } from "react-router-dom";
import HomeActions from "./HomeActions";
import ActionIcon from "./ActionIcon";
import portrait from "../assets/zaw-lin-than-thumbnail.jpg";

const Hero = () => (
  <div className="hero-shell">
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Zaw Lin Than<span className="accent"></span>
        </h1>
        <p className="hero-lead">
          I build AI tools and full-stack applications.
        </p>
        <p className="hero-description">
          CS @ <Link to="/about">Georgia Tech</Link>.
          I’m interested in how intelligent
        systems learn and how connected software works in practice.
        </p>
        <HomeActions />
      </div>
      <aside className="profile-panel" aria-label="Developer profile">
        <div className="panel-titlebar">
          <span>
            <b aria-hidden="true">{"{ }"}</b> profile.json
          </span>
        </div>
        <div className="profile-body">
          <div className="profile-identity">
            <img
              className="profile-chip"
              src={portrait}
              width={78}
              height={78}
              alt="Portrait of Zaw Lin Than"
            />
            <div>
              <p>
                Georgia Tech
              </p>
              <span>Computer Science · Junior</span>
            </div>
          </div>
          <dl className="profile-specs">
            <div>
              <dt>Concentration</dt>
              <dd>AI &amp; Information Internetworks</dd>
            </div>
            <div>
              <dt>GPA</dt>
              <dd>4.00</dd>
            </div>
            <div>
              <dt>Graduation</dt>
              <dd>Expected May 2028</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Atlanta, Georgia</dd>
            </div>
          </dl>
        </div>
        <div className="profile-footer">
          <span className="availability">Open to internships &amp; co-ops</span>
          <Link to="/about" className="text-link" aria-label="More about me">
            About me <ActionIcon name="arrow" />
          </Link>
        </div>
      </aside>
    </section>
  </div>
);

export default Hero;
