import { Icon } from "@/components";

export default function ProjectsHero() {
  return (
    <section id="page-hero" aria-labelledby="hero-title">
      <div className="hero-pattern" aria-hidden="true"></div>
      <div className="hero-gems" aria-hidden="true">
        <div className="gem gem-1"></div>
        <div className="gem gem-2"></div>
        <div className="gem gem-3"></div>
        <div className="gem gem-4"></div>
      </div>

      <div className="container hero-inner">
        <nav className="breadcrumb" aria-label="مسار التنقل">
          <a href="/">الرئيسية</a>
          <Icon name="chevron-left" />
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

        <div className="hero-stats" role="list">
          <div className="hero-stat reveal" role="listitem">
            <div className="hero-stat-num">
              <span className="counter" data-target="15">0</span>
              <span className="hero-stat-suf">+</span>
            </div>
            <div className="hero-stat-lbl">مشروع مكتمل</div>
          </div>
          <div className="hero-stat reveal" role="listitem" style={{ transitionDelay: ".08s" }}>
            <div className="hero-stat-num">
              <span className="counter" data-target="8">0</span>
            </div>
            <div className="hero-stat-lbl">مشروع نشط</div>
          </div>
          <div className="hero-stat reveal" role="listitem" style={{ transitionDelay: ".16s" }}>
            <div className="hero-stat-num">
              <span className="counter" data-target="4">0</span>
            </div>
            <div className="hero-stat-lbl">قيد التطوير</div>
          </div>
          <div className="hero-stat reveal" role="listitem" style={{ transitionDelay: ".24s" }}>
            <div className="hero-stat-num">
              <span className="counter" data-target="12">0</span>
            </div>
            <div className="hero-stat-lbl">تقنية مستخدمة</div>
          </div>
        </div>
      </div>
      <div className="hero-line" aria-hidden="true"></div>
    </section>
  );
}
