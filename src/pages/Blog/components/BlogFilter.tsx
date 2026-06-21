import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function BlogFilter() {
  return (
    <>
      <section id="blog-stats" aria-label={t('blogStatsAria')}>
        <div className="container">
          <div className="blog-stats-row" role="list">
            <div className="blog-stat-cell reveal" role="listitem">
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>+
              </div>
              <div className="blog-stat-lbl">{t('blogStatsPublished')}</div>
            </div>
            <div className="blog-stat-cell reveal" role="listitem" style={{ transitionDelay: '.08s' }}>
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="blog-stat-lbl">{t('blogStatsWriters')}</div>
            </div>
            <div className="blog-stat-cell reveal" role="listitem" style={{ transitionDelay: '.16s' }}>
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="blog-stat-lbl">{t('blogStatsSpecialties')}</div>
            </div>
            <div className="blog-stat-cell reveal" role="listitem" style={{ transitionDelay: '.24s' }}>
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>+
              </div>
              <div className="blog-stat-lbl">{t('blogStatsTags')}</div>
            </div>
          </div>
        </div>
      </section>

      <div id="blog-filter" role="search" aria-label={t('blogFilterAria')}>
        <div className="container">
          <div className="filter-wrap">
            <div className="blog-search-wrap">
              <span className="blog-search-icon" aria-hidden="true">
                <Icon name="search" />
              </span>
              <input
                type="search" id="blogSearch"
                className="blog-search-input"
                placeholder={t('blogSearchPlaceholder')}
                aria-label={t('blogSearchAria')}
                autoComplete="off"
              />
            </div>
            <div className="cat-pills" role="group" aria-label={t('blogFilterCatAria')} id="catPills">
              <button className="cat-pill active" data-cat="all">{t('blogFilterAll')}</button>
              <button className="cat-pill" data-cat="برمجة">{t('blogFilterProg')}</button>
              <button className="cat-pill" data-cat="تصميم">{t('blogFilterDesign')}</button>
              <button className="cat-pill" data-cat="ذكاء اصطناعي">{t('blogFilterAi')}</button>
              <button className="cat-pill" data-cat="أمن سيبراني">{t('blogFilterCyber')}</button>
              <button className="cat-pill" data-cat="تجارب">{t('blogFilterExp')}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
