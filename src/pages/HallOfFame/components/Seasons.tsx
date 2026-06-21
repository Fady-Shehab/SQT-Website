import { t } from "@/utils/strings";

export default function Seasons() {
  return (
    <section id="hof-seasons" aria-labelledby="seasons-h2">
      <div className="container">
        <div className="stb reveal">
          <div className="stb-eye">{t('seasonsEye')}</div>
          <h2 id="seasons-h2" className="stb-h">{t('seasonsTitle')} <em>{t('seasonsTitleEm')}</em></h2>
          <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
        </div>

        <div className="seasons-nav" role="tablist" aria-label={t('seasonsTablistAria')}>
          <button className="season-tab active" role="tab" aria-selected="true" data-season="all" id="tab-all">
            {t('seasonsAll')}
          </button>
          <button className="season-tab" role="tab" aria-selected="false" data-season="daily" id="tab-daily">
            {t('seasonsDaily')}
          </button>
          <button className="season-tab" role="tab" aria-selected="false" data-season="weekly" id="tab-weekly">
            {t('seasonsWeekly')}
          </button>
          <button className="season-tab" role="tab" aria-selected="false" data-season="monthly" id="tab-monthly">
            {t('seasonsMonthly')}
          </button>
          <button className="season-tab" role="tab" aria-selected="false" data-season="all-time" id="tab-all-time">
            {t('seasonsAllTime')}
          </button>
        </div>
      </div>
    </section>
  );
}
