export default function Seasons() {
  return (
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
  );
}
