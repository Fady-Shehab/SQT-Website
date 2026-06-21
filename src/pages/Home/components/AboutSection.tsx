import { SectionHeader, Button, Reveal, Icon } from "@/components";

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-h2">
      <div className="alex-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <SectionHeader
              eye="من نحن"
              title={<>فريق يصنع <em>الفارق</em></>}
            />

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
                  <Icon name="users" />
                </div>
                أعضاء متخصصون في أقسام متنوعة
              </li>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="activity" />
                </div>
                مشاريع حقيقية بتأثير ملموس وقابل للقياس
              </li>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="award" />
                </div>
                نظام نقاط وشارات لتكريم التميز والإنجاز
              </li>
              <li className="about-item">
                <div className="about-item-icon" aria-hidden="true">
                  <Icon name="star" />
                </div>
                ثقافة التعلم المستمر والتطوير المشترك
              </li>
            </ul>

            <Button as="a" href="/team" variant="text" endIcon={
              <Icon name="arrow-left" size={16} />
            }>
              تعرف على الفريق
            </Button>
          </div>

          <Reveal delay={0.15} className="about-visual" as="div" aria-label="إحصائيات الفريق">
            <div className="about-cards-grid">
              <div className="about-stat-card c-gold">
                <div className="asc-icon gold" aria-hidden="true">
                  <Icon name="users" />
                </div>
                <div className="asc-num">26</div>
                <div className="asc-lbl">عضو نشط</div>
              </div>
              <div className="about-stat-card c-green">
                <div className="asc-icon green" aria-hidden="true">
                  <Icon name="monitor" />
                </div>
                <div className="asc-num">15+</div>
                <div className="asc-lbl">مشروع مُنجز</div>
              </div>
              <div className="about-stat-card c-gold">
                <div className="asc-icon gold" aria-hidden="true">
                  <Icon name="star" />
                </div>
                <div className="asc-num">30+</div>
                <div className="asc-lbl">إنجاز مُحقق</div>
              </div>
              <div className="about-stat-card c-green">
                <div className="asc-icon green" aria-hidden="true">
                  <Icon name="award" />
                </div>
                <div className="asc-num">3</div>
                <div className="asc-lbl">مواسم مجد</div>
              </div>
            </div>
            <div className="about-wide-card">
              <div className="awc-icon" aria-hidden="true">
                <Icon name="map-pin" />
              </div>
              <div className="awc-text">
                <div className="awc-title">الإسكندرية، مصر</div>
                <div className="awc-sub">نعمل من قلب المدينة الساحلية العريقة</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
