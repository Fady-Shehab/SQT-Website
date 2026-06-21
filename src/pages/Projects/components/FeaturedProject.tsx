import { t } from "@/utils/strings";
import { Icon } from "@/components";

export default function FeaturedProject() {
  return (
    <section id="featured" aria-labelledby="featured-title">
      <div className="container">
        <div className="featured-grid">
          <div className="featured-img-wrap reveal">
            <img
              id="featured-img"
              alt={t('featuredImgAlt')}
              width="700"
              height="394"
              loading="eager"
            />
            <div className="featured-img-ph" style={{ display: "none" }} aria-hidden="true">
<Icon name="monitor" />
              <span>{t('featuredImgPhText')}</span>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: ".12s" }}>
            <div className="featured-label">
<Icon name="star" />
              {t('featuredLabel')}
            </div>

            <h2 id="featured-title" className="featured-title"></h2>

            <p className="featured-desc"></p>

            <div className="featured-tags">
              <span className="tech-tag">
  <Icon name="code-brackets" />
              </span>
              <span className="tech-tag">
  <Icon name="globe" />
              </span>
              <span className="tech-tag">
  <Icon name="database" />
              </span>
            </div>

            <div className="featured-meta">
              <div className="featured-meta-item">
<Icon name="clock" />
              </div>
              <div className="featured-meta-item">
<Icon name="users" />
              </div>
              <div className="featured-meta-item">
                {t('featuredStatus')}
<Icon name="activity" />
              </div>
            </div>

            <div className="featured-actions">
              <a id="featured-link" href="/project/featured" className="btn btn-gold">
<Icon name="eye-on" size={16} />
                {t('featuredViewProject')}
              </a>
              <a href="#projects-list" className="btn btn-outline">
<Icon name="grid" size={16} />
                {t('featuredAllProjects')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
