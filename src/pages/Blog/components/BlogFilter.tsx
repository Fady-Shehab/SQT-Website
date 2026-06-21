import { Icon } from "@/components";

export default function BlogFilter() {
  return (
    <>
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

      <div id="blog-filter" role="search" aria-label="تصفية المقالات">
        <div className="container">
          <div className="filter-wrap">
            <div className="blog-search-wrap">
              <span className="blog-search-icon" aria-hidden="true">
                <Icon name="search" />
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
    </>
  );
}
