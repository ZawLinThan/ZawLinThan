import { Link } from "react-router-dom";
import HomeActions from "./HomeActions";
import portrait from "../assets/zaw-lin-than.jpg";

const Hero = () => (
  <section className="hero wrap">
    <div className="hero-copy">
      <p className="hero-kicker">
        <span aria-hidden="true">01 /</span> Engineering portfolio
      </p>
      <h1>
        Zaw Lin Than<span className="accent">.</span>
      </h1>
      <p className="hero-lead">
        I build AI tools and
        <br className="hero-break" /> full-stack applications.
      </p>
      <p className="hero-description">
        Computer science at Georgia Tech. I’m interested in how intelligent
        systems learn and how connected software works in practice.
      </p>
      <HomeActions />
    </div>
    <aside className="profile-panel" aria-labelledby="profile-title">
      <div className="panel-titlebar">
        <h2 id="profile-title">
          <span aria-hidden="true">[+]</span> Engineer profile
        </h2>
        <span aria-hidden="true">FIG. 01</span>
      </div>
      <div className="profile-identity">
        <img src={portrait} alt="" width="64" height="64" />
        <div>
          <p className="profile-school">Georgia Tech</p>
          <p>Atlanta, Georgia</p>
        </div>
      </div>
      <dl>
        <div>
          <dt>Major</dt>
          <dd>Computer Science · 4.00 GPA</dd>
        </div>
        <div>
          <dt>Threads</dt>
          <dd>AI & Information Internetworks</dd>
        </div>
        <div>
          <dt>Class</dt>
          <dd>Junior · Expected May 2028</dd>
        </div>
      </dl>
      <div className="profile-bottom">
        <span className="availability">
          <span aria-hidden="true" />
          Open to internships & co-ops
        </span>
        <Link to="/about" className="text-link">
          About me <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </aside>
  </section>
);

export default Hero;
