import { Link } from 'react-router-dom';
import { Icon } from "@/components";

export default function ProjectBody() {
  return (
    <>
      <section id="proj-body" className="section-pad">
        <div className="container">
          <div className="body-grid">

            <article className="prose reveal" id="proseContent" aria-label="تفاصيل المشروع">
              <div id="proseSkeleton">
                <span className="skeleton" style={{ display:'block', width:'40%', height:'1.4em', borderRadius:'6px', marginBottom:'18px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'100%', height:'1em', borderRadius:'6px', marginBottom:'10px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'96%', height:'1em', borderRadius:'6px', marginBottom:'10px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'88%', height:'1em', borderRadius:'6px', marginBottom:'24px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'35%', height:'1.4em', borderRadius:'6px', marginBottom:'18px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'100%', height:'1em', borderRadius:'6px', marginBottom:'10px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'92%', height:'1em', borderRadius:'6px' }}>‌</span>
              </div>
              <div id="proseReal" style={{ display:'none' }}></div>
            </article>

            <aside className="sidebar">

              <div className="side-card reveal" style={{ transitionDelay:'.05s' }}>
                <div className="side-title">
<Icon name="users" />
                  فريق العمل
                </div>
                <div className="team-list" id="teamList">
                  <div className="team-member">
                    <div className="member-avatar">أ</div>
                    <div className="member-info">
                      <div className="member-name">اسم العضو الأول</div>
                      <div className="member-role">قائد المشروع</div>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">م</div>
                    <div className="member-info">
                      <div className="member-name">اسم العضو الثاني</div>
                      <div className="member-role">مطوّر Backend</div>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">س</div>
                    <div className="member-info">
                      <div className="member-name">اسم العضو الثالث</div>
                      <div className="member-role">مصمم UI/UX</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="side-card reveal" style={{ transitionDelay:'.1s' }}>
                <div className="side-title">
                  <Icon name="link" />
                  روابط المشروع
                </div>
                <div className="links-list" id="linksList">
                  <a href="#" className="ext-link" id="githubLink">
                    <span className="ext-link-left">
                      <Icon name="github" />
                      الكود المصدري
                    </span>
                    <Icon name="arrow-left" className="arrow-icon" />
                  </a>
                  <a href="#" className="ext-link" id="demoLink">
                    <span className="ext-link-left">
                      <Icon name="play" />
                      معاينة مباشرة
                    </span>
                    <Icon name="arrow-left" className="arrow-icon" />
                  </a>
                </div>
              </div>

              <div className="side-card reveal" style={{ transitionDelay:'.15s' }}>
                <div className="side-title">
                  <Icon name="share" />
                  شارك المشروع
                </div>
                <div className="share-row">
                  <button className="share-btn" id="shareTwitter" aria-label="مشاركة على تويتر">
                    <Icon name="twitter" />
                  </button>
                  <button className="share-btn" id="shareTelegram" aria-label="مشاركة على تيليجرام">
                    <Icon name="telegram" />
                  </button>
                  <button className="share-btn" id="shareCopy" aria-label="نسخ الرابط">
                    <Icon name="copy" />
                  </button>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      <section id="related" className="section-pad" aria-labelledby="related-title">
        <div className="container">

          <div className="stb reveal">
            <div className="stb-eye">قد يهمك أيضاً</div>
            <h2 id="related-title" className="stb-h">مشاريع <em>ذات صلة</em></h2>
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="related-grid" id="relatedGrid" role="list" aria-label="مشاريع ذات صلة">

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.05s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-2.jpg" alt="صورة مشروع ذو صلة" width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
<Icon name="globe" />
                </div>
                <div className="proj-status-overlay"><span className="badge badge-gold">مكتمل</span></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags"><span className="proj-tag">React</span><span className="proj-tag">Node.js</span></div>
                <h3 className="proj-title">اسم المشروع الثاني</h3>
                <p className="proj-desc">وصف مختصر يوضح هدف المشروع والقيمة التي يضيفها للمستخدمين والفريق.</p>
                <Link to="/project/2" className="btn-text" style={{ fontSize:'.82rem' }}>
                  عرض
                  <Icon name="arrow-left" size={14} />
                </Link>
              </div>
            </article>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.1s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-3.jpg" alt="صورة مشروع ذو صلة" width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
                  <Icon name="smartphone" />
                </div>
                <div className="proj-status-overlay"><span className="badge badge-silver">قيد التطوير</span></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags"><span className="proj-tag">Flutter</span><span className="proj-tag">Firebase</span></div>
                <h3 className="proj-title">اسم المشروع الثالث</h3>
                <p className="proj-desc">وصف مختصر يوضح هدف المشروع والقيمة التي يضيفها للمستخدمين والفريق.</p>
                <Link to="/project/3" className="btn-text" style={{ fontSize:'.82rem' }}>
                  عرض
                  <Icon name="arrow-left" size={14} />
                </Link>
              </div>
            </article>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.15s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-5.jpg" alt="صورة مشروع ذو صلة" width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
                  <Icon name="hexagon" />
                </div>
                <div className="proj-status-overlay"><span className="badge badge-green">نشط</span></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags"><span className="proj-tag">AI</span><span className="proj-tag">Python</span></div>
                <h3 className="proj-title">اسم المشروع الخامس</h3>
                <p className="proj-desc">وصف مختصر يوضح هدف المشروع والقيمة التي يضيفها للمستخدمين والفريق.</p>
                <Link to="/project/5" className="btn-text" style={{ fontSize:'.82rem' }}>
                  عرض
                  <Icon name="arrow-left" size={14} />
                </Link>
              </div>
            </article>

          </div>

        </div>
      </section>
    </>
  );
}
