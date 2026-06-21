import { t } from "@/utils/strings";
import { Icon } from "@/components";

export default function CultureSection() {
  return (
    <>
      <section id="team-culture" className="section-pad" aria-labelledby="culture-h2">
        <div className="container">
          <div className="stb">
            <div className="stb-eye">{t('cultureEye')}</div>
            <h2 id="culture-h2" className="stb-h" dangerouslySetInnerHTML={{ __html: t('cultureHeading') }} />
            <p className="stb-sub">{t('cultureSub')}</p>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="culture-grid" role="list">
            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.05s' }}>
              <div className="value-icon">
                <Icon name="lightbulb" size={28} />
              </div>
              <h3 className="value-title">{t('valueInnovation')}</h3>
              <p className="value-desc">{t('valueInnovationDesc')}</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.1s' }}>
              <div className="value-icon">
                <Icon name="users" size={28} />
              </div>
              <h3 className="value-title">{t('valueCollaboration')}</h3>
              <p className="value-desc">{t('valueCollaborationDesc')}</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.15s' }}>
              <div className="value-icon">
                <Icon name="trending-up" size={28} />
              </div>
              <h3 className="value-title">{t('valueGrowth')}</h3>
              <p className="value-desc">{t('valueGrowthDesc')}</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.2s' }}>
              <div className="value-icon">
                <Icon name="star" size={28} />
              </div>
              <h3 className="value-title">{t('valueQuality')}</h3>
              <p className="value-desc">{t('valueQualityDesc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="team-stats" aria-labelledby="stats-h2">
        <div className="container">
          <h2 id="stats-h2" className="sr-only">{t('teamStatsHeading')}</h2>

          <div className="stats-row" role="list">
            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.05s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="members" data-target="0">0</span>
              </div>
              <div className="stat-lbl">{t('statMember')}</div>
            </div>

            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.1s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="projects" data-target="0">0</span>
              </div>
              <div className="stat-lbl">{t('statCompletedProject')}</div>
            </div>

            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.15s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="posts" data-target="0">0</span>
              </div>
              <div className="stat-lbl">{t('statPublishedPost')}</div>
            </div>

            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.2s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="sections" data-target="0">0</span>
              </div>
              <div className="stat-lbl">{t('statSpecializedSection')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
