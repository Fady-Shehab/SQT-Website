export default function ProjectsPage() {
  return (
    <main id="main-content">
      {/* PAGE HERO */}
      <section id="page-hero" aria-labelledby="hero-title">
        <div className="hero-pattern" aria-hidden="true"></div>
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div>
          <div className="gem gem-2"></div>
          <div className="gem gem-3"></div>
          <div className="gem gem-4"></div>
        </div>

        <div className="container hero-inner">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="مسار التنقل">
            <a href="/">الرئيسية</a>
            <svg viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>المشاريع</span>
          </nav>

          <div className="hero-eyebrow">
            <span className="hero-dot" aria-hidden="true"></span>
            ما نبنيه
          </div>

          <h1 id="hero-title" className="hero-title">
            مشاريع <em>حقيقية</em>,<br />
            تأثير <em>ملموس</em>
          </h1>

          <p className="hero-desc">
            كل مشروع هنا وُلد من فكرة جريئة وصُنع بأيدٍ مصرية من الإسكندرية.
            نبني حلولاً تقنية تُحدث فرقاً حقيقاً في الواقع.
          </p>

          {/* Stats */}
          <div className="hero-stats" role="list">
            <div className="hero-stat reveal" role="listitem">
              <div className="hero-stat-num">
                <span className="counter" data-target="15">
                  0
                </span>
                <span className="hero-stat-suf">+</span>
              </div>
              <div className="hero-stat-lbl">مشروع مكتمل</div>
            </div>
            <div
              className="hero-stat reveal"
              role="listitem"
              style={{ transitionDelay: ".08s" }}
            >
              <div className="hero-stat-num">
                <span className="counter" data-target="8">
                  0
                </span>
              </div>
              <div className="hero-stat-lbl">مشروع نشط</div>
            </div>
            <div
              className="hero-stat reveal"
              role="listitem"
              style={{ transitionDelay: ".16s" }}
            >
              <div className="hero-stat-num">
                <span className="counter" data-target="4">
                  0
                </span>
              </div>
              <div className="hero-stat-lbl">قيد التطوير</div>
            </div>
            <div
              className="hero-stat reveal"
              role="listitem"
              style={{ transitionDelay: ".24s" }}
            >
              <div className="hero-stat-num">
                <span className="counter" data-target="12">
                  0
                </span>
              </div>
              <div className="hero-stat-lbl">تقنية مستخدمة</div>
            </div>
          </div>
        </div>
        <div className="hero-line" aria-hidden="true"></div>
      </section>

      {/* FILTER BAR */}
      <div id="filter-bar" role="search" aria-label="تصفية المشاريع">
        <div className="container">
          <div className="filter-inner">
            <div
              className="filter-chips"
              role="group"
              aria-label="تصفية حسب الحالة"
            >
              <button className="chip active" data-filter="all">
                الكل
              </button>
              <button className="chip" data-filter="active">
                نشط
              </button>
              <button className="chip" data-filter="completed">
                مكتمل
              </button>
              <button className="chip" data-filter="in-progress">
                قيد التطوير
              </button>
            </div>
            <div className="filter-search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="search"
                className="search-input"
                id="searchInput"
                placeholder="ابحث عن مشروع..."
                aria-label="البحث في المشاريع"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECT */}
      <section id="featured" aria-labelledby="featured-title">
        <div className="container">
          <div className="featured-grid">
            {/* Image */}
            <div className="featured-img-wrap reveal">
              <img
                id="featured-img"
                alt="صورة المشروع المميز"
                width="700"
                height="394"
                loading="eager"
              />
              <div
                className="featured-img-ph"
                style={{ display: "none" }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span>project-featured.jpg</span>
              </div>
            </div>
            {/* Text */}
            <div className="reveal" style={{ transitionDelay: ".12s" }}>
              <div className="featured-label">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                المشروع المميز
              </div>

              <h2 id="featured-title" className="featured-title"></h2>

              <p className="featured-desc"></p>

              <div className="featured-tags">
                <span className="tech-tag">
                  <svg viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                <span className="tech-tag">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
                <span className="tech-tag">
                  <svg viewBox="0 0 24 24">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </span>
              </div>

              <div className="featured-meta">
                <div className="featured-meta-item">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="featured-meta-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="featured-meta-item">
                  قيد التطوير
                  <svg viewBox="0 0 24 24">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
              </div>

              <div className="featured-actions">
                <a
                  id="featured-link"
                  href="/project/featured"
                  className="btn btn-gold"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  عرض المشروع
                </a>
                <a href="#projects-list" className="btn btn-outline">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  كل المشاريع
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section
        id="projects-list"
        className="section-pad"
        aria-labelledby="projects-title"
      >
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">جميع المشاريع</div>
            <h2 id="projects-title" className="stb-h">
              ما <em>بنيناه</em>
            </h2>
            <div className="gold-rule">
              <div className="gold-rule-diamond"></div>
            </div>
            <p className="stb-sub">
              كل مشروع يعكس شغف فريقنا وإيمانه بأن التكنولوجيا تُغير الواقع
            </p>
          </div>

          <p className="result-count" id="result-count" aria-live="polite">
            عرض <span id="countNum">6</span> مشروع
          </p>

          <div
            className="proj-grid"
            id="projectsGrid"
            role="list"
            aria-label="قائمة المشاريع"
          >
            <p
              id="projectsStatus"
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                color: "var(--text-secondary)",
                padding: "40px 0",
              }}
            >
              جارِ تحميل المشاريع...
            </p>
          </div>

          {/* Empty state */}
          <div
            className="empty-state"
            id="emptyState"
            role="status"
            aria-live="polite"
            style={{ display: "none" }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <p>لا توجد مشاريع تطابق بحثك أو الفلتر المختار.</p>
          </div>

          {/* Load More */}
          <div className="load-more-wrap reveal">
            <button
              className="btn btn-outline"
              id="load-more-btn"
              aria-label="تحميل المزيد من المشاريع"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
              </svg>
              تحميل المزيد
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
