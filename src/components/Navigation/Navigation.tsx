import { Link, useLocation } from "react-router-dom";
import { Icon } from "@/components";

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      {/* Header */}
      <header id="navbar" role="banner">
        <div className="container">
          <nav className="nav-inner" aria-label="التنقل الرئيسية">
            {/* Logo */}
            <Link to="/" className="nav-logo" aria-label="الصفحة الرئيسية">
              <img
                src="/img/logo-dark.png"
                alt="شعار شرق تك"
                className="nav-logo-img nav-logo-dark"
              />
              <img
                src="/img/logo-light.png"
                alt="شعار شرق تك"
                className="nav-logo-img nav-logo-light"
              />
              <div
                className="nav-logo-fallback"
                style={{ display: "none" }}
                aria-hidden="true"
              >
                شرق
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
                  الرئيسية
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
                  الفريق
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
                  المشاريع
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
                  المدونة
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
                  قاعة المجد
                </Link>
              </li>
            </ul>

            {/* Actions */}
            <div className="nav-actions">
              {/* Theme Toggle */}
              <button
                className="theme-toggle"
                id="themeToggle"
                aria-label="تبديل المظهر"
              >
                {/* Sun icon (shown in light mode) */}
                <Icon name="sun" className="icon-sun" />
                <Icon name="moon" className="icon-moon" />
              </button>

              {/* Auth Button */}
              <Link to="/auth" className="nav-auth" aria-label="تسجيل الدخول">
                <Icon name="log-in" />
                تسجيل الدخول
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className="mobile-nav" id="mobileNav" aria-label="قائمة التنقل">
        <Link
          to="/"
          className={`mob-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current={location.pathname === "/" ? "page" : undefined}
          aria-label="الرئيسية"
        >
          <Icon name="home" />
          الرئيسية
        </Link>
        <Link
          to="/team"
          className={`mob-link ${location.pathname === "/team" ? "active" : ""}`}
          aria-current={location.pathname === "/team" ? "page" : undefined}
          aria-label="الفريق"
        >
          <Icon name="users" />
          الفريق
        </Link>
        <Link
          to="/projects"
          className={`mob-link ${location.pathname === "/projects" ? "active" : ""}`}
          aria-current={location.pathname === "/projects" ? "page" : undefined}
          aria-label="المشاريع"
        >
          <Icon name="monitor" />
          المشاريع
        </Link>
        <Link
          to="/blog"
          className={`mob-link ${location.pathname === "/blog" ? "active" : ""}`}
          aria-current={location.pathname === "/blog" ? "page" : undefined}
          aria-label="المدونة"
        >
          <Icon name="file-text" />
          المدونة
        </Link>
        <Link
          to="/hall-of-fame"
          className={`mob-link ${location.pathname === "/hall-of-fame" ? "active" : ""}`}
          aria-current={
            location.pathname === "/hall-of-fame" ? "page" : undefined
          }
          aria-label="قاعة المجد"
        >
          <Icon name="award" />
          المجد
        </Link>
      </nav>
    </>
  );
}
