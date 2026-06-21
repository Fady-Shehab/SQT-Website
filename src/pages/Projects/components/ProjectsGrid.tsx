
import { Icon } from "@/components";

export default function ProjectsGrid() {
  return (
    <section id="projects-list" className="section-pad" aria-labelledby="projects-title">
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

        <div className="proj-grid" id="projectsGrid" role="list" aria-label="قائمة المشاريع">
          <p id="projectsStatus" style={{ gridColumn: "1 / -1", textAlign: "center", color: "var(--text-secondary)", padding: "40px 0" }}>
            جارِ تحميل المشاريع...
          </p>
        </div>

        <div className="empty-state" id="emptyState" role="status" aria-live="polite" style={{ display: "none" }}>
<Icon name="search" />
          <p>لا توجد مشاريع تطابق بحثك أو الفلتر المختار.</p>
        </div>

        <div className="load-more-wrap reveal">
          <button className="btn btn-outline" id="load-more-btn" aria-label="تحميل المزيد من المشاريع">
<Icon name="chevron-down" size={16} />
            تحميل المزيد
          </button>
        </div>
      </div>
    </section>
  );
}
