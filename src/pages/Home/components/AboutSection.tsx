import { t } from "@/utils/strings";
import { SectionHeader, Button, Reveal, Icon } from "@/components";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-h2">
      <div className="alex-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <SectionHeader
              eye={t('aboutEye')}
              title={<>{t('aboutTitleBefore')} <em>{t('aboutTitleEm')}</em></>}
            />

            <p className="about-p">
              {t('aboutP1')}
            </p>

            <p className="about-p">
              {t('aboutP2')}
            </p>

            <ul className="about-list" aria-label={t('aboutFeaturesAria')}>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="users" />
                </div>
                {t('aboutFeature1')}
              </li>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="activity" />
                </div>
                {t('aboutFeature2')}
              </li>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="award" />
                </div>
                {t('aboutFeature3')}
              </li>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="star" />
                </div>
                {t('aboutFeature4')}
              </li>
            </ul>

            <Button as="a" href="/team" variant="text" endIcon={
              <Icon name="arrow-left" size={16} />
            }>
              {t('heroCtaTeam')}
            </Button>
          </div>

          <Reveal delay={0.15} className="about-visual" as="div" aria-label={t('aboutStatsAria')}>
            <div className="about-cards-grid">
              <div className="about-stat-card c-gold">
                <div className="asc-icon gold" aria-hidden="true">
                  <Icon name="users" />
                </div>
                <div className="asc-num">26</div>
                <div className="asc-lbl">{t('aboutStatActive')}</div>
              </div>
              <div className="about-stat-card c-green">
                <div className="asc-icon green" aria-hidden="true">
                  <Icon name="monitor" />
                </div>
                <div className="asc-num">15+</div>
                <div className="asc-lbl">{t('aboutStatProject')}</div>
              </div>
              <div className="about-stat-card c-gold">
                <div className="asc-icon gold" aria-hidden="true">
                  <Icon name="star" />
                </div>
                <div className="asc-num">30+</div>
                <div className="asc-lbl">{t('aboutStatAchievement')}</div>
              </div>
              <div className="about-stat-card c-green">
                <div className="asc-icon green" aria-hidden="true">
                  <Icon name="award" />
                </div>
                <div className="asc-num">3</div>
                <div className="asc-lbl">{t('aboutStatSeasons')}</div>
              </div>
            </div>
            <div className="about-wide-card">
              <div className="awc-icon" aria-hidden="true">
                <Icon name="map-pin" />
              </div>
              <div className="awc-text">
                <div className="awc-title">{t('aboutLocation')}</div>
                <div className="awc-sub">{t('aboutLocationSub')}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
