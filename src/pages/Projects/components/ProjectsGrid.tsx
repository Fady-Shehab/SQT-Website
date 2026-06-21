import { t } from "@/utils/strings";
import { Icon } from "@/components";

export default function ProjectsGrid() {
  return (
    <section id="projects-list" className="section-pad" aria-labelledby="projects-title">
      <div className="container">
        <div className="stb reveal">
          <div className="stb-eye">{t('projectsGridEye')}</div>
          <h2 id="projects-title" className="stb-h" dangerouslySetInnerHTML={{ __html: t('projectsGridTitle') }} />
          <div className="gold-rule">
            <div className="gold-rule-diamond"></div>
          </div>
          <p className="stb-sub">{t('projectsGridSub')}</p>
        </div>

        <p className="result-count" id="result-count" aria-live="polite">
          {t('projectsGridShowingBefore')} <span id="countNum">6</span> {t('projectsGridShowingAfter')}
        </p>

        <div className="proj-grid" id="projectsGrid" role="list" aria-label={t('projectsGridListAria')}>
          <p id="projectsStatus" style={{ gridColumn: "1 / -1", textAlign: "center", color: "var(--text-secondary)", padding: "40px 0" }}>
            {t('projectsGridLoading')}
          </p>
        </div>

        <div className="empty-state" id="emptyState" role="status" aria-live="polite" style={{ display: "none" }}>
<Icon name="search" />
          <p>{t('projectsGridEmpty')}</p>
        </div>

        <div className="load-more-wrap reveal">
          <button className="btn btn-outline" id="load-more-btn" aria-label={t('projectsGridLoadMoreAria')}>
<Icon name="chevron-down" size={16} />
            {t('projectsGridLoadMore')}
          </button>
        </div>
      </div>
    </section>
  );
}
