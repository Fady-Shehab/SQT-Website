import { Link, useLocation } from "react-router-dom";

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
                <svg
                  className="icon-sun"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                {/* Moon icon (shown in dark mode) */}
                <svg
                  className="icon-moon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </button>

              {/* Auth Button */}
              <Link to="/auth" className="nav-auth" aria-label="تسجيل الدخول">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          الرئيسية
        </Link>
        <Link
          to="/team"
          className={`mob-link ${location.pathname === "/team" ? "active" : ""}`}
          aria-current={location.pathname === "/team" ? "page" : undefined}
          aria-label="الفريق"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          الفريق
        </Link>
        <Link
          to="/projects"
          className={`mob-link ${location.pathname === "/projects" ? "active" : ""}`}
          aria-current={location.pathname === "/projects" ? "page" : undefined}
          aria-label="المشاريع"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          المشاريع
        </Link>
        <Link
          to="/blog"
          className={`mob-link ${location.pathname === "/blog" ? "active" : ""}`}
          aria-current={location.pathname === "/blog" ? "page" : undefined}
          aria-label="المدونة"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          المجد
        </Link>
      </nav>
    </>
  );
}
