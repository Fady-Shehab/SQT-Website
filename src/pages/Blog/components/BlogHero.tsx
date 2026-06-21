import { t } from "@/utils/strings";

export default function BlogHero() {
  return (
    <section id="blog-hero" aria-labelledby="blog-h1">
      <div className="eg-pattern" aria-hidden="true"></div>
      <div className="hero-gems" aria-hidden="true">
        <div className="gem gem-1"></div>
        <div className="gem gem-2"></div>
        <div className="gem gem-3"></div>
        <div className="gem gem-4"></div>
      </div>

      <div className="container">
        <div className="blog-hero-inner">
          <div className="blog-hero-pill" aria-hidden="true">
            <span className="blog-hero-pill-dot"></span>
            {t('blogHeroPill')}
          </div>

          <h1 id="blog-h1" className="blog-hero-title">
            {t('blogHeroTitle1')}<br /><em>{t('blogHeroTitleEm')}</em>{t('blogHeroTitle2')}
          </h1>

          <p className="blog-hero-sub">
            {t('blogHeroSub')}
          </p>

          <div className="blog-hero-ornament" aria-hidden="true">
            <div className="blog-hero-orn-diamond"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
