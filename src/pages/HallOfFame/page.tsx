
export default function HallOfFamePage() {
  return (
    <main id="main-content">
      {/* HERO */}
      <section id="hof-hero" aria-labelledby="hof-h1">
        <div className="hof-pattern" aria-hidden="true"></div>
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div>
          <div className="gem gem-2"></div>
          <div className="gem gem-3"></div>
          <div className="gem gem-4"></div>
        </div>

        <div className="container hof-hero-container">
          <div className="hof-hero-content">
            <div className="hof-hero-tag">نظام التميز في شرق تك</div>
            <h1 id="hof-h1" className="hof-hero-title">
              قاعة <em>المجد</em>
            </h1>
            <p className="hof-hero-sub">
              هنا نتأمل الجهد وتكافئ التميز — أعضاء الفريق الذين وصلوا لأعلى
              المراتب عبر نقاط التميز المتراكمة.
            </p>
            <div className="hof-hero-ornament" aria-hidden="true">
              <div className="hof-hero-orn-diamond"></div>
            </div>
          </div>

          <div className="hof-hero-podium reveal" id="heroPodium">
            <p id="heroPodiumStatus" style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              جارِ تحميل النخبة...
            </p>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section id="hof-seasons" aria-labelledby="seasons-h2">
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">الأنماط</div>
            <h2 id="seasons-h2" className="stb-h">تصفح حسب <em>الأنماط</em></h2>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="seasons-nav" role="tablist" aria-label="الأنماط">
            <button className="season-tab active" role="tab" aria-selected="true" data-season="all" id="tab-all">
              الكل
            </button>
            <button className="season-tab" role="tab" aria-selected="false" data-season="daily" id="tab-daily">
              اليومي
            </button>
            <button className="season-tab" role="tab" aria-selected="false" data-season="weekly" id="tab-weekly">
              الأسبوعي
            </button>
            <button className="season-tab" role="tab" aria-selected="false" data-season="monthly" id="tab-monthly">
              الشهري
            </button>
            <button className="season-tab" role="tab" aria-selected="false" data-season="all-time" id="tab-all-time">
              لكل الوقت
            </button>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
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

          {/* Load More */}
          <div className="load-more-wrap reveal">
            <button className="btn btn-outline" id="lbLoadMore" aria-label="تحميل المزيد من أعضاء الفريق" style={{ marginTop: '16px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              تحميل المزيد
            </button>
          </div>
        </div>
      </section>

      {/* HALL OF LEGENDS (All-Time Top) */}
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

      {/* STATS */}
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
    </main>
  );
}
