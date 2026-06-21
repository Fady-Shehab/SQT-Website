import { t } from "@/utils/strings";

export default function Legends() {
  return (
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
  );
}
