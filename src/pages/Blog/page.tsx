
export default function BlogPage() {
  return (
    <main id="main-content">
      {/* BLOG HERO */}
      <section id="blog-hero" aria-labelledby="blog-h1">
        <div className="eg-pattern" aria-hidden="true"></div>
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div>
          <div className="gem gem-2"></div>
          <div className="gem gem-3"></div>
          <div className="gem gem-4"></div>
        </div>

        <div className="container">
          <div className="blog-hero-inner">
            <div className="blog-hero-pill" aria-hidden="true">
              <span className="blog-hero-pill-dot"></span>
              المدونة التقنية لشرق تك
            </div>

            <h1 id="blog-h1" className="blog-hero-title">
              أفكار، تجارب،<br /><em>وقصص</em> من الميدان
            </h1>

            <p className="blog-hero-sub">
              نكتب عما نبنيه ونتعلمه — مقالات تقنية صادقة من قلب فريق شرق تك
              في الإسكندرية، لكل مهتم بالتكنولوجيا والإبداع.
            </p>

            <div className="blog-hero-ornament" aria-hidden="true">
              <div className="blog-hero-orn-diamond"></div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG STATS BAR */}
      <section id="blog-stats" aria-label="إحصائيات المدونة">
        <div className="container">
          <div className="blog-stats-row" role="list">
            <div className="blog-stat-cell reveal" role="listitem">
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>+
              </div>
              <div className="blog-stat-lbl">مقال منشور</div>
            </div>
            <div className="blog-stat-cell reveal" role="listitem" style={{ transitionDelay: '.08s' }}>
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="blog-stat-lbl">كاتب من الفريق</div>
            </div>
            <div className="blog-stat-cell reveal" role="listitem" style={{ transitionDelay: '.16s' }}>
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>
              </div>
              <div className="blog-stat-lbl">تخصص ومجال</div>
            </div>
            <div className="blog-stat-cell reveal" role="listitem" style={{ transitionDelay: '.24s' }}>
              <div className="blog-stat-num">
                <span className="counter" data-target="0">0</span>+
              </div>
              <div className="blog-stat-lbl">وسم مختلف</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + SEARCH */}
      <div id="blog-filter" role="search" aria-label="تصفية المقالات">
        <div className="container">
          <div className="filter-wrap">
            <div className="blog-search-wrap">
              <span className="blog-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="search" id="blogSearch"
                className="blog-search-input"
                placeholder="ابحث في المقالات…"
                aria-label="البحث في المقالات"
                autoComplete="off"
              />
            </div>
            <div className="cat-pills" role="group" aria-label="تصفية بالتصنيف" id="catPills">
              <button className="cat-pill active" data-cat="all">الكل</button>
              <button className="cat-pill" data-cat="برمجة">برمجة</button>
              <button className="cat-pill" data-cat="تصميم">تصميم</button>
              <button className="cat-pill" data-cat="ذكاء اصطناعي">ذكاء اصطناعي</button>
              <button className="cat-pill" data-cat="أمن سيبراني">أمن سيبراني</button>
              <button className="cat-pill" data-cat="تجارب">تجارب</button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED POST */}
      <section id="blog-featured" aria-labelledby="featured-h2">
        <div className="container">
          <div className="stb reveal" style={{ marginBottom: '32px' }}>
            <div className="stb-eye">أبرز المقالات</div>
            <h2 id="featured-h2" className="stb-h">المقال <em>المميز</em></h2>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <article className="featured-card reveal" id="featuredCard" tabIndex={0} data-cat="" aria-label="اقرأ المقال المميز" style={{ display: 'none' }}>
            <div className="featured-img">
              <img
                id="featuredImg"
                alt="غلاف المقال المميز"
                loading="lazy"
                style={{ display: 'none' }}
              />
              <div className="featured-img-ph" id="featuredImgPh">
                <div className="featured-img-ph-icon"></div>
                <p className="featured-img-ph-text" id="featuredImgPhText">blog-featured.jpg</p>
              </div>
              <div className="featured-ribbon" aria-label="مقال مميز">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                مميز
              </div>
            </div>
            <div className="featured-body">
              <div className="featured-meta">
                <div className="featured-author-thumb" id="featuredAuthorThumb" aria-hidden="true"></div>
                <span className="featured-author-name" id="featuredAuthorName">اسم الكاتب</span>
                <span className="meta-dot" aria-hidden="true"></span>
                <time className="featured-date" id="featuredDate" dateTime="">—</time>
                <span className="meta-dot" aria-hidden="true"></span>
                <span className="featured-read-time" id="featuredReadTime">—</span>
              </div>
              <h3 className="featured-title" id="featuredTitle"></h3>
              <p className="featured-excerpt" id="featuredExcerpt"></p>
              <div className="featured-tags" id="featuredTags" aria-label="تصنيفات المقال"></div>
              <div className="featured-footer">
                <a href="/post/featured" className="btn btn-gold" id="featuredLink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 14 8 20 8"></polyline></svg>
                  اقرأ المقال
                </a>
                <a href="#" className="btn-text" aria-label="شارك المقال" onClick={(e) => e.preventDefault()}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                  مشاركة
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BLOG GRID */}
      <section id="blog-grid" aria-labelledby="grid-h2">
        <div className="container">
          <div className="blog-section-head">
            <h2 id="grid-h2" className="blog-section-title">
              جميع المقالات
            </h2>
            <span className="post-count" id="postCount" aria-live="polite">٩ مقالات</span>
          </div>

          <div className="posts-grid" id="postsGrid" role="list">
            <p id="postsStatus" style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>
              جارِ تحميل المقالات...
            </p>
          </div>

          {/* No Results */}
          <div className="no-results" id="noResults" role="status" aria-live="polite" style={{ display: 'none' }}>
            <div className="no-results-icon"></div>
            <p className="no-results-text">لا توجد مقالات تطابق بحثك أو التصنيف المختار.</p>
          </div>

          {/* Load More */}
          <div className="load-more-wrap reveal">
            <button className="btn-load-more" id="loadMore" aria-label="تحميل المزيد من المقالات">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              تحميل المزيد
            </button>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section id="blog-topics" aria-labelledby="topics-h2">
        <div className="container">
          <div className="stb reveal" style={{ marginBottom: '36px' }}>
            <div className="stb-eye">استكشف</div>
            <h2 id="topics-h2" className="stb-h">تصفح حسب <em>التخصص</em></h2>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="topics-grid" role="list">
            <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.05s' }} data-filter="برمجة" aria-label="تصفية مقالات البرمجة">
              <div className="topic-icon gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="topic-name">برمجة</div>
              <div className="topic-count">٠ مقال</div>
            </button>

            <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.10s' }} data-filter="تصميم" aria-label="تصفية مقالات التصميم">
              <div className="topic-icon purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="topic-name">تصميم</div>
              <div className="topic-count">٠ مقال</div>
            </button>

            <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.15s' }} data-filter="ذكاء اصطناعي" aria-label="تصفية مقالات الذكاء الاصطناعي">
              <div className="topic-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="5" width="14" height="14" rx="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="2" x2="9" y2="5"></line>
                  <line x1="15" y1="2" x2="15" y2="5"></line>
                  <line x1="9" y1="19" x2="9" y2="22"></line>
                  <line x1="15" y1="19" x2="15" y2="22"></line>
                  <line x1="2" y1="9" x2="5" y2="9"></line>
                  <line x1="2" y1="15" x2="5" y2="15"></line>
                  <line x1="19" y1="9" x2="22" y2="9"></line>
                  <line x1="19" y1="15" x2="22" y2="15"></line>
                </svg>
              </div>
              <div className="topic-name">ذكاء اصطناعي</div>
              <div className="topic-count">٠ مقال</div>
            </button>

            <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.20s' }} data-filter="أمن سيبراني" aria-label="تصفية مقالات الأمن السيبراني">
              <div className="topic-icon gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="topic-name">أمن سيبراني</div>
              <div className="topic-count">٠ مقال</div>
            </button>

            <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.25s' }} data-filter="تجارب" aria-label="تصفية مقالات التجارب">
              <div className="topic-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21h6"></path>
                  <path d="M9 17h6"></path>
                  <path d="M12 3a6 6 0 0 1 4 10.47V17H8v-3.53A6 6 0 0 1 12 3z"></path>
                </svg>
              </div>
              <div className="topic-name">تجارب</div>
              <div className="topic-count">٠ مقال</div>
            </button>

            <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.30s' }} data-filter="all" aria-label="عرض جميع المقالات">
              <div className="topic-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <div className="topic-name">عرض الكل</div>
              <div className="topic-count">٠ مقال</div>
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="blog-newsletter" className="section-pad" aria-labelledby="nl-h2">
        <div className="container">
          <div className="nl-inner reveal">
            <div className="nl-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2 id="nl-h2" className="nl-title">
              لا تفوّت أي <em>مقال جديد</em>
            </h2>
            <p className="nl-sub">
              اشترك في نشرتنا البريدية وصلك أحدث مقالات شرق تك التقنية مباشرة إلى بريدك —
              بدون رسائل مزعجة، فقط محتوى قيّم.
            </p>
            <div className="nl-form" role="form" aria-label="نموذج الاشتراك في النشرة البريدية">
              <input
                type="email" id="nlEmail"
                className="nl-input"
                placeholder="بريدك الإلكتروني"
                aria-label="أدخل بريدك الإلكتروني"
                autoComplete="email"
              />
              <button className="btn btn-gold" id="nlSubmit" aria-label="اشتراك في النشرة البريدية" style={{ justifyContent: 'center' }}>
                اشتراك
              </button>
            </div>
            <p className="nl-note" aria-live="polite" id="nlFeedback">
              يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
