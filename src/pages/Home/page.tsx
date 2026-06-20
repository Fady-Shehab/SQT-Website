export default function HomePage() {
  return (
    <main id="main-content">
      {/* HERO */}
      <section id="hero" aria-labelledby="hero-h1">
        <div className="eg-pattern" aria-hidden="true"></div>
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div>
          <div className="gem gem-2"></div>
          <div className="gem gem-3"></div>
          <div className="gem gem-4"></div>
          <div className="gem gem-5"></div>
        </div>

        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true"></span>
            فريق التكنولوجيا لإدارة شرق
          </div>

          <div className="hero-title-wrap" id="hero-h1">
            <span className="hero-label-ar">SHARQ TECH</span>
            <span className="hero-word-sharq" aria-label="شرق">
              شرق
            </span>
            <span className="hero-tech-chip" aria-label="تك">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              تك
            </span>
          </div>

          <div className="hero-ornament-line" aria-hidden="true">
            <div className="hero-orn-diamond"></div>
          </div>

          <p className="hero-tagline">
            من قلب الإسكندرية، نبني حلولاً تقنية أصيلة بأيدٍ مصرية وعقول طموحة
            لا تعرف حدوداً — نُبدع، نُنجز، ونُثبت أن التميز يُصنع هنا.
          </p>

          <div className="hero-actions">
            <a href="/team" className="btn btn-gold">
              تعرف على الفريق
            </a>
            <a href="/projects" className="btn btn-outline">
              استعرض المشاريع
            </a>
          </div>
        </div>

        {/* Alexandria Skyline */}
        <div className="hero-skyline" aria-hidden="true">
          <svg
            viewBox="0 0 1440 180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", display: "block" }}
          >
            <path
              d="
              M0,180 L0,120
              L50,120 L50,95 L65,95 L65,75 L80,75 L80,60 L95,60 L95,45 L110,45 L110,60 L125,60 L125,75 L140,75 L140,95 L160,95 L160,120
              L200,120 L200,90 L215,90 L215,65 L230,65 L230,45 L245,45 L245,30 L260,30 L260,45 L275,45 L275,65 L290,65 L290,90 L310,90 L310,120
              L340,120 L340,105 L355,105 L355,85 L365,85 L365,65 L372,55 L379,65 L379,85 L389,85 L389,105 L405,105 L405,120
              L440,120 L440,95 L455,95 L455,70 L470,70 L470,50 L480,35 L490,50 L490,70 L505,70 L505,95 L520,95 L520,120
              L555,120 L555,105 L570,105 L570,88 L582,88 L582,72 L590,62 L598,72 L598,88 L610,88 L610,105 L625,105 L625,120
              L660,120 L660,100 L672,100 L672,80 L684,80 L684,62 L692,50 L700,38 L708,50 L716,62 L716,80 L728,80 L728,100 L740,100 L740,120
              L775,120 L775,105 L788,105 L788,90 L800,90 L800,105 L812,105 L812,120
              L848,120 L848,95 L862,95 L862,70 L876,70 L876,50 L884,38 L892,50 L892,70 L906,70 L906,95 L920,95 L920,120
              L958,120 L958,108 L972,108 L972,92 L984,92 L984,108 L996,108 L996,120
              L1030,120 L1030,98 L1044,98 L1044,78 L1056,78 L1056,60 L1064,48 L1072,36 L1080,48 L1080,60 L1092,60 L1092,78 L1104,78 L1104,98 L1118,98 L1118,120
              L1155,120 L1155,108 L1168,108 L1168,92 L1180,92 L1180,108 L1192,108 L1192,120
              L1226,120 L1226,96 L1240,96 L1240,75 L1254,75 L1254,56 L1262,44 L1270,32 L1278,44 L1278,56 L1292,56 L1292,75 L1306,75 L1306,96 L1320,96 L1320,120
              L1360,120 L1360,108 L1375,108 L1375,120
              L1440,120 L1440,180 Z
            "
              fill="currentColor"
            />
            {/* Lighthouse of Alexandria — prominent hint */}
            <rect x="696" y="14" width="8" height="24" fill="currentColor" />
            <polygon points="700,8 693,14 707,14" fill="currentColor" />
            <rect
              x="698"
              y="38"
              width="4"
              height="6"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <div className="scroll-cue-arrow">
            <svg viewBox="0 0 14 14">
              <polyline points="2,4 7,9 12,4" />
            </svg>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" aria-label="إحصائيات الفريق">
        <div className="container">
          <div className="stats-row" role="list">
            <div className="stat-cell reveal" role="listitem">
              <div className="stat-num">
                <span className="counter" data-target="26">
                  0
                </span>
                <span className="stat-suf">+</span>
              </div>
              <div className="stat-lbl">عضو في الفريق</div>
            </div>

            <div
              className="stat-cell reveal"
              role="listitem"
              style={{ transitionDelay: ".1s" }}
            >
              <div className="stat-num">
                <span className="counter" data-target="15">
                  0
                </span>
                <span className="stat-suf">+</span>
              </div>
              <div className="stat-lbl">مشروع منجز</div>
            </div>

            <div
              className="stat-cell reveal"
              role="listitem"
              style={{ transitionDelay: ".2s" }}
            >
              <div className="stat-num">
                <span className="counter" data-target="30">
                  0
                </span>
                <span className="stat-suf">+</span>
              </div>
              <div className="stat-lbl">إنجاز مُحقق</div>
            </div>

            <div
              className="stat-cell reveal"
              role="listitem"
              style={{ transitionDelay: ".3s" }}
            >
              <div className="stat-num">
                <span className="counter" data-target="3">
                  0
                </span>
                <span className="stat-suf">×</span>
              </div>
              <div className="stat-lbl">موسم مجد</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad" aria-labelledby="about-h2">
        <div className="alex-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="about-grid">
            {/* Text */}
            <div className="about-text reveal">
              <div className="stb">
                <div className="stb-eye">من نحن</div>
                <h2 id="about-h2" className="stb-h">
                  فريق يصنع <em>الفارق</em>
                </h2>
                <div className="gold-rule">
                  <div className="gold-rule-diamond"></div>
                </div>
              </div>

              <p className="about-p">
                فريق التكنولوجيا لإدارة شرق منظومة من المطورين والمبتكرين الذين
                يؤمنون بأن الكود الجيد يغيّر الواقع. نعمل معاً لبناء حلول تقنية
                تُحدث أثراً حقيقياً في البيئة المحيطة بنا.
              </p>

              <p className="about-p">
                انطلقنا من مدينة الإسكندرية — مدينة المكتبة والحضارة والبحر —
                حاملين روح المكان وطموح الجيل الجديد، نثبت يوماً بعد يوم أن
                الإبداع التقني لا يحتاج إلا لعقول متقدة وإرادة حقيقية.
              </p>

              <ul className="about-list" aria-label="مميزات الفريق">
                <li className="about-item">
                  <div className="about-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  أعضاء متخصصون في أقسام متنوعة
                </li>
                <li className="about-item">
                  <div className="about-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  مشاريع حقيقية بتأثير ملموس وقابل للقياس
                </li>
                <li className="about-item">
                  <div className="about-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  نظام نقاط وشارات لتكريم التميز والإنجاز
                </li>
                <li className="about-item">
                  <div className="about-item-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  ثقافة التعلم المستمر والتطوير المشترك
                </li>
              </ul>

              <a
                href="/team"
                className="btn-text"
                aria-label="تعرف على أعضاء الفريق"
              >
                تعرف على الفريق
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </a>
            </div>

            {/* Visual — stat cards grid instead of team photo */}
            <div
              className="about-visual reveal"
              style={{ transitionDelay: ".15s" }}
              aria-label="إحصائيات الفريق"
            >
              <div className="about-cards-grid">
                <div className="about-stat-card c-gold">
                  <div className="asc-icon gold" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="asc-num">26</div>
                  <div className="asc-lbl">عضو نشط</div>
                </div>

                <div className="about-stat-card c-green">
                  <div className="asc-icon green" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div className="asc-num">15+</div>
                  <div className="asc-lbl">مشروع مُنجز</div>
                </div>

                <div className="about-stat-card c-gold">
                  <div className="asc-icon gold" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="asc-num">30+</div>
                  <div className="asc-lbl">إنجاز مُحقق</div>
                </div>

                <div className="about-stat-card c-green">
                  <div className="asc-icon green" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div className="asc-num">3</div>
                  <div className="asc-lbl">مواسم مجد</div>
                </div>
              </div>

              {/* Wide card */}
              <div className="about-wide-card">
                <div className="awc-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="awc-text">
                  <div className="awc-title">الإسكندرية، مصر</div>
                  <div className="awc-sub">
                    نعمل من قلب المدينة الساحلية العريقة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad" aria-labelledby="proj-h2">
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">ما نبنيه</div>
            <h2 id="proj-h2" className="stb-h">
              مشاريع <em>مميزة</em>
            </h2>
            <div className="gold-rule">
              <div className="gold-rule-diamond"></div>
            </div>
            <p className="stb-sub">
              أبرز المشاريع التي يبنيها فريقنا بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="proj-grid" id="indexProjGrid" role="list"></div>

          <div className="sec-cta reveal">
            <a href="/projects" className="btn btn-outline">
              عرض كل المشاريع
            </a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section-pad" aria-labelledby="blog-h2">
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">المدونة</div>
            <h2 id="blog-h2" className="stb-h">
              أحدث <em>المقالات</em>
            </h2>
            <div className="gold-rule">
              <div className="gold-rule-diamond"></div>
            </div>
            <p className="stb-sub">
              أفكار واضحة، تجارب حقيقية، ومشاركات من داخل الفريق
            </p>
          </div>

          <div className="blog-grid" id="indexBlogGrid" role="list"></div>

          <div className="sec-cta reveal">
            <a href="/blog" className="btn btn-outline">
              كل المقالات
            </a>
          </div>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section id="hof" className="section-pad" aria-labelledby="hof-h2">
        <div className="container">
          <div className="stb reveal">
            <div className="stb-eye">التميز يُكرَّم</div>
            <h2 id="hof-h2" className="stb-h">
              نجوم <em>الموسم</em>
            </h2>
            <div className="gold-rule">
              <div className="gold-rule-diamond"></div>
            </div>
            <p className="stb-sub">
              أبطال الموسم الحالي الذين تألقوا وقادوا الفريق نحو القمة
            </p>
          </div>

          <div
            className="podium-row"
            id="indexPodiumRow"
            role="list"
            aria-label="أفضل أعضاء الموسم"
          >
            <article
              className="pod-card r2 reveal"
              role="listitem"
              style={{ transitionDelay: ".1s", display: "none" }}
              aria-label="المركز الثاني"
            >
              <div className="pod-rank" aria-label="المركز الثاني">
                ٢
              </div>
              <div className="pod-avatar" aria-label="صورة العضو"></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">
                  0
                </span>
                <span className="pod-pts-l">نقطة</span>
              </div>
            </article>

            <article
              className="pod-card r1 reveal"
              role="listitem"
              style={{ transitionDelay: ".05s", display: "none" }}
              aria-label="بطل الموسم — المركز الأول"
            >
              <div className="pod-rank" aria-label="المركز الأول">
                ١
              </div>
              <span className="pod-crown" aria-hidden="true"></span>
              <div className="pod-avatar" aria-label="صورة بطل الموسم"></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">
                  0
                </span>
                <span className="pod-pts-l">نقطة</span>
              </div>
            </article>

            <article
              className="pod-card r3 reveal"
              role="listitem"
              style={{ transitionDelay: ".15s", display: "none" }}
              aria-label="المركز الثالث"
            >
              <div className="pod-rank" aria-label="المركز الثالث">
                ٣
              </div>
              <div className="pod-avatar" aria-label="صورة العضو"></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">
                  0
                </span>
                <span className="pod-pts-l">نقطة</span>
              </div>
            </article>
          </div>

          <div className="sec-cta reveal">
            <a href="/hall-of-fame" className="btn btn-gold">
              قاعة المجد الكاملة
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
