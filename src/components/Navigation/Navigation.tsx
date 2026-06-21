import { Link, useLocation } from "react-router-dom";
import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      {/* Header */}
      <header id="navbar" role="banner">
        <div className="container">
          <nav className="nav-inner" aria-label={t('navMainNav')}>
            {/* Logo */}
            <Link to="/" className="nav-logo" aria-label={t('navHomePage')}>
              <img
                src="/img/logo-dark.png"
                alt={t('navLogoAlt')}
                className="nav-logo-img nav-logo-dark"
              />
              <img
                src="/img/logo-light.png"
                alt={t('navLogoAlt')}
                className="nav-logo-img nav-logo-light"
              />
                <div
                  className="nav-logo-fallback"
                  style={{ display: "none" }}
                  aria-hidden="true"
                >
                  {t('navLogoFallback')}
                </div>
            </Link>

            {/* Desktop Links */}
            <ul className="nav-links" role="list">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className={`nav-link ${location.pathname === "/team" ? "active" : ""}`}
                  aria-current={
                    location.pathname === "/team" ? "page" : undefined
                  }
                >
                  {t('navTeam')}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                  aria-current={
                    location.pathname === "/projects" ? "page" : undefined
                  }
                >
                  {t('navProjects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
                  aria-current={
                    location.pathname === "/blog" ? "page" : undefined
                  }
                >
                  {t('navBlog')}
                </Link>
              </li>
              <li>
                <Link
                  to="/hall-of-fame"
                  className={`nav-link ${location.pathname === "/hall-of-fame" ? "active" : ""}`}
                  aria-current={
                    location.pathname === "/hall-of-fame" ? "page" : undefined
                  }
                >
                  {t('navHallOfFame')}
                </Link>
              </li>
            </ul>

            {/* Actions */}
            <div className="nav-actions">
              {/* Theme Toggle */}
              <button
                className="theme-toggle"
                id="themeToggle"
                aria-label={t('navToggleTheme')}
              >
                {/* Sun icon (shown in light mode) */}
                <Icon name="sun" className="icon-sun" />
                <Icon name="moon" className="icon-moon" />
              </button>

              {/* Auth Button */}
              <Link to="/auth" className="nav-auth" aria-label={t('navLogin')}>
                <Icon name="log-in" />
                {t('navLogin')}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className="mobile-nav" id="mobileNav" aria-label={t('navMobileNav')}>
        <Link
          to="/"
          className={`mob-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current={location.pathname === "/" ? "page" : undefined}
          aria-label={t('navHome')}
        >
          <Icon name="home" />
          {t('navHome')}
        </Link>
        <Link
          to="/team"
          className={`mob-link ${location.pathname === "/team" ? "active" : ""}`}
          aria-current={location.pathname === "/team" ? "page" : undefined}
          aria-label={t('navTeam')}
        >
          <Icon name="users" />
          {t('navTeam')}
        </Link>
        <Link
          to="/projects"
          className={`mob-link ${location.pathname === "/projects" ? "active" : ""}`}
          aria-current={location.pathname === "/projects" ? "page" : undefined}
          aria-label={t('navProjects')}
        >
          <Icon name="monitor" />
          {t('navProjects')}
        </Link>
        <Link
          to="/blog"
          className={`mob-link ${location.pathname === "/blog" ? "active" : ""}`}
          aria-current={location.pathname === "/blog" ? "page" : undefined}
          aria-label={t('navBlog')}
        >
          <Icon name="file-text" />
          {t('navBlog')}
        </Link>
        <Link
          to="/hall-of-fame"
          className={`mob-link ${location.pathname === "/hall-of-fame" ? "active" : ""}`}
          aria-current={
            location.pathname === "/hall-of-fame" ? "page" : undefined
          }
          aria-label={t('navHallOfFame')}
        >
          <Icon name="award" />
          {t('navHallOfFameShort')}
        </Link>
      </nav>
    </>
  );
}
