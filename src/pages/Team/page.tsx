
export default function TeamPage() {
  return (
    <main id="main-content">
      {/* HERO */}
      <section id="team-hero" aria-labelledby="team-hero-h1">
        <div className="team-hero-content">
          <h1 id="team-hero-h1" className="team-hero-title">فريق <em>شرق تك</em></h1>
          <p className="team-hero-sub">
            مجموعة من الموهوبين والمبدعين الذين يعملون بشغف لبناء حلول تقنية مبتكرة من قلب الإسكندرية
          </p>
        </div>
      </section>

      {/* TEAM MEMBERS GRID */}
      <section id="team-members" className="section-pad" aria-labelledby="members-h2">
        <div className="container" style={{ padding: '56px 0px 56px 0px' }}>
          <div className="stb">
            <div className="stb-eye">فريقنا</div>
            <h2 id="members-h2" className="stb-h">الموهوبين <em>الذين يصنعون الفرق</em></h2>
            <p className="stb-sub">كل عضو في الفريق يحمل خبرة فريدة وشغف عميق بالتكنولوجيا والإبداع</p>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="members-grid" role="list" id="members-grid">
            <p id="members-status" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              جارِ تحميل أعضاء الفريق...
            </p>
          </div>
        </div>
      </section>

      {/* TEAM CULTURE/VALUES */}
      <section id="team-culture" className="section-pad" aria-labelledby="culture-h2">
        <div className="container">
          <div className="stb">
            <div className="stb-eye">قيمنا</div>
            <h2 id="culture-h2" className="stb-h">الثقافة <em>التي نبنيها</em></h2>
            <p className="stb-sub">مبادئ أساسية توجه كل ما نفعله وتشكل هويتنا كفريق</p>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="culture-grid" role="list">
            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.05s' }}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z"></path>
                  <line x1="9" y1="21" x2="15" y2="21"></line>
                  <line x1="10" y1="17" x2="10" y2="21"></line>
                  <line x1="14" y1="17" x2="14" y2="21"></line>
                </svg>
              </div>
              <h3 className="value-title">الابتكار</h3>
              <p className="value-desc">نسعى دائماً لتجاوز الحدود والبحث عن حلول جديدة وإبداعية لكل تحدي.</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.1s' }}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="value-title">التعاون</h3>
              <p className="value-desc">نعمل كفريق واحد موحد، نشارك المعرفة والخبرة لتحقيق أهداف مشتركة.</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.15s' }}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3 className="value-title">التطور المستمر</h3>
              <p className="value-desc">نستثمر في تعليمنا وتطورنا، لنبقى في طليعة التكنولوجيا والممارسات الحديثة.</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.2s' }}>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="value-title">الجودة</h3>
              <p className="value-desc">نلتزم بأعلى معايير الجودة في كل منتج وخدمة نقدمها للعملاء.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TEAM STATS */}
      <section id="team-stats" aria-labelledby="stats-h2">
        <div className="container">
          <h2 id="stats-h2" className="sr-only">إحصائيات الفريق</h2>

          <div className="stats-row" role="list">
            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.05s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="members" data-target="0">0</span>
              </div>
              <div className="stat-lbl">عضو في الفريق</div>
            </div>

            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.1s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="projects" data-target="0">0</span>
              </div>
              <div className="stat-lbl">مشروع مكتمل</div>
            </div>

            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.15s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="posts" data-target="0">0</span>
              </div>
              <div className="stat-lbl">مقال منشور</div>
            </div>

            <div className="stat-cell reveal" role="listitem" style={{ transitionDelay: '.2s' }}>
              <div className="stat-num">
                <span className="counter" data-stat="sections" data-target="0">0</span>
              </div>
              <div className="stat-lbl">قسم متخصص</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
