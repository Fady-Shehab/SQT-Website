export default function HofHero() {
  return (
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
  );
}
