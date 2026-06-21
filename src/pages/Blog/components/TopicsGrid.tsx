import { Icon } from "@/components";

export default function TopicsGrid() {
  return (
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
              <Icon name="code-brackets" />
            </div>
            <div className="topic-name">برمجة</div>
            <div className="topic-count">٠ مقال</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.10s' }} data-filter="تصميم" aria-label="تصفية مقالات التصميم">
            <div className="topic-icon purple">
              <Icon name="layers" />
            </div>
            <div className="topic-name">تصميم</div>
            <div className="topic-count">٠ مقال</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.15s' }} data-filter="ذكاء اصطناعي" aria-label="تصفية مقالات الذكاء الاصطناعي">
            <div className="topic-icon green">
              <Icon name="cpu" />
            </div>
            <div className="topic-name">ذكاء اصطناعي</div>
            <div className="topic-count">٠ مقال</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.20s' }} data-filter="أمن سيبراني" aria-label="تصفية مقالات الأمن السيبراني">
            <div className="topic-icon gold">
              <Icon name="shield" />
            </div>
            <div className="topic-name">أمن سيبراني</div>
            <div className="topic-count">٠ مقال</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.25s' }} data-filter="تجارب" aria-label="تصفية مقالات التجارب">
            <div className="topic-icon blue">
              <Icon name="beaker" />
            </div>
            <div className="topic-name">تجارب</div>
            <div className="topic-count">٠ مقال</div>
          </button>

          <button className="topic-card reveal" role="listitem" style={{ transitionDelay: '.30s' }} data-filter="all" aria-label="عرض جميع المقالات">
            <div className="topic-icon green">
              <Icon name="grid" />
            </div>
            <div className="topic-name">عرض الكل</div>
            <div className="topic-count">٠ مقال</div>
          </button>
        </div>
      </div>
    </section>
  );
}
