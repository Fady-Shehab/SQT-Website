import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function Leaderboard() {
  return (
    <>
      <section id="hof-leaderboard" aria-labelledby="leaderboard-h2">
        <div className="container">
          <div className="leaderboard-head">
            <h2 id="leaderboard-h2" className="leaderboard-title">{t('leaderboardTitle')} <span id="leaderboardSeasonLabel">{t('leaderboardSeasonLabel')}</span></h2>
            <div className="leaderboard-meta">
              <div className="leaderboard-filters">
                <span className="filter-chip active" data-range="all" aria-label={t('leaderboardAllAria')}>{t('leaderboardAll')}</span>
                <span className="filter-chip" data-range="top10" aria-label={t('leaderboardTop10Aria')}>{t('leaderboardTop10')}</span>
              </div>
              <div className="leaderboard-info" aria-live="polite">
                {/* eslint-disable-next-line sqt/no-inline-strings */}
                <span id="leaderboardUserCount">٢٣</span> {t('leaderboardMemberLabel')}
                <span className="meta-dot" aria-hidden="true"></span>
                {/* eslint-disable-next-line sqt/no-inline-strings */}
                <span id="leaderboardTotalPoints">١٢٬٥٨٠</span> {t('leaderboardPointsLabel')}
              </div>
            </div>
          </div>

          <div className="leaderboard-list" id="leaderboardList" role="list" aria-label={t('leaderboardListAria')}>
            <p id="leaderboardStatus" style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              {t('leaderboardLoading')}
            </p>
          </div>

          <div className="load-more-wrap reveal">
            <button className="btn btn-outline" id="lbLoadMore" aria-label={t('leaderboardLoadMoreAria')} style={{ marginTop: '16px' }}>
              <Icon name="chevron-down" size={16} />
              {t('leaderboardLoadMore')}
            </button>
          </div>
        </div>
      </section>

      <section id="hof-legends" className="section-pad" aria-labelledby="legends-h2">
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">{t('legendsEye')}</div>
            <h2 id="legends-h2" className="stb-h">{t('legendsTitle')} <em>{t('legendsTitleEm')}</em></h2>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
            <p className="stb-sub">{t('legendsSub')}</p>
          </div>

          <div className="legends-grid reveal" id="legendsGrid">
            <p id="legendsStatus" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              {t('legendsLoading')}
            </p>
          </div>
        </div>
      </section>

      <section id="hof-stats" aria-label={t('hofStatsAria')}>
        <div className="container">
          <div className="hof-stats-row" role="list">
            <div className="hof-stat-cell reveal" role="listitem">
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">{t('hofStatsPoints')}</div>
            </div>
            <div className="hof-stat-cell reveal" role="listitem" style={{ transitionDelay: '.08s' }}>
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">{t('hofStatsMembers')}</div>
            </div>
            <div className="hof-stat-cell reveal" role="listitem" style={{ transitionDelay: '.16s' }}>
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">{t('hofStatsAchievements')}</div>
            </div>
            <div className="hof-stat-cell reveal" role="listitem" style={{ transitionDelay: '.24s' }}>
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">{t('hofStatsWeekly')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
