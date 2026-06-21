import { t } from "@/utils/strings";
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
        <nav className="breadcrumb" aria-label={t('projectsHeroBreadcrumbLabel')}>
          <a href="/">{t('projectsHeroBreadcrumbHome')}</a>
          <Icon name="chevron-left" />
          <span>{t('projectsHeroBreadcrumbCurrent')}</span>
        </nav>

        <div className="hero-eyebrow">
          <span className="hero-dot" aria-hidden="true"></span>
          {t('projectsHeroEye')}
        </div>

        <h1 id="hero-title" className="hero-title" dangerouslySetInnerHTML={{ __html: t('projectsHeroTitle') }} />

        <p className="hero-desc">{t('projectsHeroDesc')}</p>

        <div className="hero-stats" role="list">
          <div className="hero-stat reveal" role="listitem">
            <div className="hero-stat-num">
              <span className="counter" data-target="15">0</span>
              <span className="hero-stat-suf">+</span>
            </div>
            <div className="hero-stat-lbl">{t('heroStatCompleted')}</div>
          </div>
          <div className="hero-stat reveal" role="listitem" style={{ transitionDelay: ".08s" }}>
            <div className="hero-stat-num">
              <span className="counter" data-target="8">0</span>
            </div>
            <div className="hero-stat-lbl">{t('heroStatActive')}</div>
          </div>
          <div className="hero-stat reveal" role="listitem" style={{ transitionDelay: ".16s" }}>
            <div className="hero-stat-num">
              <span className="counter" data-target="4">0</span>
            </div>
            <div className="hero-stat-lbl">{t('heroStatInProgress')}</div>
          </div>
          <div className="hero-stat reveal" role="listitem" style={{ transitionDelay: ".24s" }}>
            <div className="hero-stat-num">
              <span className="counter" data-target="12">0</span>
            </div>
            <div className="hero-stat-lbl">{t('heroStatTechUsed')}</div>
          </div>
        </div>
      </div>
      <div className="hero-line" aria-hidden="true"></div>
    </section>
  );
}
