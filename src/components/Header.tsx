import { Link, NavLink } from "react-router-dom";

const routes = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/experience", "Experience"],
  ["/contact", "Contact"],
];

const Header = () => (
  <header className="site-header wrap">
    <Link className="wordmark" to="/" aria-label="Zaw Lin Than home">
      <span className="brand-mark" aria-hidden="true">
        ZLT
      </span>
      <span className="brand-name" aria-hidden="true">
        Zaw Lin Than
      </span>
    </Link>
    <nav aria-label="Main navigation">
      {routes.map(([to, label]) => (
        <NavLink key={to} to={to} end={to === "/"}>
          {label}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
