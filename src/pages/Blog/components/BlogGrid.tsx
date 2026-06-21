import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function BlogGrid() {
  return (
    <section id="blog-grid" aria-labelledby="grid-h2">
      <div className="container">
        <div className="blog-section-head">
          <h2 id="grid-h2" className="blog-section-title">
            {t('blogGridAllTitle')}
          </h2>
          <span className="post-count" id="postCount" aria-live="polite">{t('blogGridPostCount')}</span>
        </div>

        <div className="posts-grid" id="postsGrid" role="list">
          <p id="postsStatus" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
            {t('blogGridLoading')}
          </p>
        </div>

        <div className="no-results" id="noResults" role="status" aria-live="polite" style={{ display: 'none' }}>
          <div className="no-results-icon"></div>
          <p className="no-results-text">{t('blogGridNoResults')}</p>
        </div>

        <div className="load-more-wrap reveal">
            <button className="btn-load-more" id="loadMore" aria-label={t('blogGridLoadMoreAria')}>
              <Icon name="chevron-down" />
              {t('blogGridLoadMoreText')}
          </button>
        </div>
      </div>
    </section>
  );
}
