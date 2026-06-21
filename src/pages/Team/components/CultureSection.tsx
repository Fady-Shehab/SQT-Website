import { Icon } from "@/components";

export default function CultureSection() {
  return (
    <>
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
                <Icon name="lightbulb" size={28} />
              </div>
              <h3 className="value-title">الابتكار</h3>
              <p className="value-desc">نسعى دائماً لتجاوز الحدود والبحث عن حلول جديدة وإبداعية لكل تحدي.</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.1s' }}>
              <div className="value-icon">
                <Icon name="users" size={28} />
              </div>
              <h3 className="value-title">التعاون</h3>
              <p className="value-desc">نعمل كفريق واحد موحد، نشارك المعرفة والخبرة لتحقيق أهداف مشتركة.</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.15s' }}>
              <div className="value-icon">
                <Icon name="trending-up" size={28} />
              </div>
              <h3 className="value-title">التطور المستمر</h3>
              <p className="value-desc">نستثمر في تعليمنا وتطورنا، لنبقى في طليعة التكنولوجيا والممارسات الحديثة.</p>
            </article>

            <article className="value-card reveal" role="listitem" style={{ transitionDelay: '.2s' }}>
              <div className="value-icon">
                <Icon name="star" size={28} />
              </div>
              <h3 className="value-title">الجودة</h3>
              <p className="value-desc">نلتزم بأعلى معايير الجودة في كل منتج وخدمة نقدمها للعملاء.</p>
            </article>
          </div>
        </div>
      </section>

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
    </>
  );
}
