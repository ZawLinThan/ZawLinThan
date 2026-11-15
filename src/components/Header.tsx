import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const destinations = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/experience", "Experience"],
  ["/contact", "Contact"],
];

const Header = () => (
  <div className="site-header-shell">
    <header className="site-header wrap">
      <div className="header-identity">
        <Link className="wordmark" to="/" aria-label="Zaw Lin Than home">
          <span className="brand-mark" aria-hidden="true">
            &gt;_
          </span>
          <span>Zaw Lin Than</span>
        </Link>
        <ThemeToggle />
      </div>
      <nav aria-label="Main navigation">
        {destinations.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  </div>
);

export default Header;
