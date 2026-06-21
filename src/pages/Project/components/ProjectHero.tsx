import { Icon } from "@/components";

export default function ProjectHero() {
  return (
    <section id="proj-hero" aria-labelledby="proj-title">
      <div className="hero-gems" aria-hidden="true">
        <div className="gem gem-1"></div><div className="gem gem-2"></div>
      </div>

      <div className="container">
        <div className="ph-grid">

          <div className="reveal" id="phText">
            <div className="ph-status-row" id="statusRow">
              <span className="badge badge-green skeleton" style={{ width:'60px', height:'22px', color:'transparent' }}>نشط</span>
              <span className="badge badge-silver skeleton" style={{ width:'90px', height:'22px', color:'transparent' }}>القسم</span>
            </div>

            <h1 id="proj-title" className="ph-title">
              <span className="skeleton" style={{ display:'inline-block', width:'80%', height:'1.2em', borderRadius:'6px' }}>‌</span>
            </h1>

            <p className="ph-desc" id="phDesc">
              <span className="skeleton" style={{ display:'block', width:'100%', height:'1.2em', borderRadius:'6px', marginBottom:'8px' }}>‌</span>
              <span className="skeleton" style={{ display:'block', width:'90%', height:'1.2em', borderRadius:'6px' }}>‌</span>
            </p>

            <div className="ph-tags" id="phTags" aria-label="التقنيات المستخدمة"></div>

            <div className="ph-actions" id="phActions"></div>
          </div>

          <div className="reveal" style={{ transitionDelay:'.1s' }}>
            <div className="ph-cover">
              <img id="coverImg" src="" alt="" width="700" height="438" loading="eager"
                style={{ display:'none' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
              <div className="ph-cover-ph" id="coverPh">
                <Icon name="monitor" />
                <span id="coverPhText">project-cover.jpg</span>
              </div>
            </div>

            <div className="meta-card" id="metaCard">
              <div className="meta-row">
                <div className="meta-label">
                  <Icon name="clock" />
                  تاريخ البدء
                </div>
                <div className="meta-value" id="metaDate">–</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">
                  <Icon name="activity" />
                  مدة التطوير
                </div>
                <div className="meta-value" id="metaDuration">–</div>
              </div>
              <div className="meta-row">
                <div className="meta-label">
                  <Icon name="tag" />
                  القسم المسؤول
                </div>
                <div className="meta-value" id="metaSection">–</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
