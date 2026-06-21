import { Icon } from "@/components";

export default function Leaderboard() {
  return (
    <>
      <section id="hof-leaderboard" aria-labelledby="leaderboard-h2">
        <div className="container">
          <div className="leaderboard-head">
            <h2 id="leaderboard-h2" className="leaderboard-title">تصنيف <span id="leaderboardSeasonLabel">لكل الوقت</span></h2>
            <div className="leaderboard-meta">
              <div className="leaderboard-filters">
                <span className="filter-chip active" data-range="all" aria-label="عرض جميع أعضاء الفريق">الجميع</span>
                <span className="filter-chip" data-range="top10" aria-label="عرض أفضل 10 فقط">أفضل ١٠</span>
              </div>
              <div className="leaderboard-info" aria-live="polite">
                <span id="leaderboardUserCount">٢٣</span> عضو
                <span className="meta-dot" aria-hidden="true"></span>
                <span id="leaderboardTotalPoints">١٢٬٥٨٠</span> نقطة
              </div>
            </div>
          </div>

          <div className="leaderboard-list" id="leaderboardList" role="list" aria-label="تصنيف أعضاء الفريق">
            <p id="leaderboardStatus" style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              جارِ تحميل التصنيف...
            </p>
          </div>

          <div className="load-more-wrap reveal">
            <button className="btn btn-outline" id="lbLoadMore" aria-label="تحميل المزيد من أعضاء الفريق" style={{ marginTop: '16px' }}>
              <Icon name="chevron-down" size={16} />
              تحميل المزيد
            </button>
          </div>
        </div>
      </section>

      <section id="hof-legends" className="section-pad" aria-labelledby="legends-h2">
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">خالدون</div>
            <h2 id="legends-h2" className="stb-h">أسطورة <em>التميز</em></h2>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
            <p className="stb-sub">أفضل ٣ أعضاء في تاريخ شرق تك حسب نقاط التميز المتراكمة.</p>
          </div>

          <div className="legends-grid reveal" id="legendsGrid">
            <p id="legendsStatus" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              جارِ تحميل الأسطورة...
            </p>
          </div>
        </div>
      </section>

      <section id="hof-stats" aria-label="إحصائيات قاعة المجد">
        <div className="container">
          <div className="hof-stats-row" role="list">
            <div className="hof-stat-cell reveal" role="listitem">
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">نقطة تميز</div>
            </div>
            <div className="hof-stat-cell reveal" role="listitem" style={{ transitionDelay: '.08s' }}>
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">عضو مُقامر</div>
            </div>
            <div className="hof-stat-cell reveal" role="listitem" style={{ transitionDelay: '.16s' }}>
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">إنجاز مُنجز</div>
            </div>
            <div className="hof-stat-cell reveal" role="listitem" style={{ transitionDelay: '.24s' }}>
              <div className="hof-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="hof-stat-lbl">نقاط في هذا الأسبوع</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
