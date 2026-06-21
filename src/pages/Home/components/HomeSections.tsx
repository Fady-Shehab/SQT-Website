import { SectionHeader, Button, Reveal } from "@/components";

export default function HomeSections() {
  return (
    <>
      <section id="projects" className="section-pad" aria-labelledby="proj-h2">
        <div className="container">
          <SectionHeader
            eye="ما نبنيه"
            title={<>مشاريع <em>مميزة</em></>}
            subtitle="أبرز المشاريع التي يبنيها فريقنا بأعلى معايير الجودة والاحترافية"
          />

          <div className="proj-grid" id="indexProjGrid" role="list"></div>

          <Reveal className="sec-cta">
            <Button as="a" href="/projects" variant="secondary">عرض كل المشاريع</Button>
          </Reveal>
        </div>
      </section>

      <section id="blog" className="section-pad" aria-labelledby="blog-h2">
        <div className="container">
          <SectionHeader
            eye="المدونة"
            title={<>أحدث <em>المقالات</em></>}
            subtitle="أفكار واضحة، تجارب حقيقية، ومشاركات من داخل الفريق"
          />

          <div className="blog-grid" id="indexBlogGrid" role="list"></div>

          <Reveal className="sec-cta">
            <Button as="a" href="/blog" variant="secondary">كل المقالات</Button>
          </Reveal>
        </div>
      </section>

      <section id="hof" className="section-pad" aria-labelledby="hof-h2">
        <div className="container">
          <SectionHeader
            eye="التميز يُكرَّم"
            title={<>نجوم <em>الموسم</em></>}
            subtitle="أبطال الموسم الحالي الذين تألقوا وقادوا الفريق نحو القمة"
          />

          <div
            className="podium-row"
            id="indexPodiumRow"
            role="list"
            aria-label="أفضل أعضاء الموسم"
          >
            <article className="pod-card r2 reveal" role="listitem" style={{ transitionDelay: ".1s", display: "none" }} aria-label="المركز الثاني">
              <div className="pod-rank" aria-label="المركز الثاني">٢</div>
              <div className="pod-avatar" aria-label="صورة العضو"></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">0</span>
                <span className="pod-pts-l">نقطة</span>
              </div>
            </article>
            <article className="pod-card r1 reveal" role="listitem" style={{ transitionDelay: ".05s", display: "none" }} aria-label="بطل الموسم — المركز الأول">
              <div className="pod-rank" aria-label="المركز الأول">١</div>
              <span className="pod-crown" aria-hidden="true"></span>
              <div className="pod-avatar" aria-label="صورة بطل الموسم"></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">0</span>
                <span className="pod-pts-l">نقطة</span>
              </div>
            </article>
            <article className="pod-card r3 reveal" role="listitem" style={{ transitionDelay: ".15s", display: "none" }} aria-label="المركز الثالث">
              <div className="pod-rank" aria-label="المركز الثالث">٣</div>
              <div className="pod-avatar" aria-label="صورة العضو"></div>
              <div className="pod-name"></div>
              <div className="pod-role"></div>
              <div className="pod-pts">
                <span className="pod-pts-n counter" data-target="0">0</span>
                <span className="pod-pts-l">نقطة</span>
              </div>
            </article>
          </div>

          <Reveal className="sec-cta">
            <Button as="a" href="/hall-of-fame" variant="primary">قاعة المجد الكاملة</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
