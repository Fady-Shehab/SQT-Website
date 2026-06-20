import { Link } from 'react-router-dom';

export default function ProjectPage() {
  return (
    <>
      {/* ═══════════ BREADCRUMB ═══════════ */}
      <div id="crumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="مسار التنقل">
            <Link to="/">الرئيسية</Link>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            <Link to="/projects">المشاريع</Link>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            <span className="current" id="crumbTitle">جارٍ التحميل...</span>
          </nav>
        </div>
      </div>


      {/* ═══════════ PROJECT HERO ═══════════ */}
      <section id="proj-hero" aria-labelledby="proj-title">
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div><div className="gem gem-2"></div>
        </div>

        <div className="container">
          <div className="ph-grid">

            {/* Text */}
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

            {/* Cover */}
            <div className="reveal" style={{ transitionDelay:'.1s' }}>
              <div className="ph-cover">
                <img id="coverImg" src="" alt="" width="700" height="438" loading="eager"
                  style={{ display:'none' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="ph-cover-ph" id="coverPh">
                  <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <span id="coverPhText">project-cover.jpg</span>
                </div>
              </div>

              {/* Meta card */}
              <div className="meta-card" id="metaCard">
                <div className="meta-row">
                  <div className="meta-label">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    تاريخ البدء
                  </div>
                  <div className="meta-value" id="metaDate">–</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">
                    <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    مدة التطوير
                  </div>
                  <div className="meta-value" id="metaDuration">–</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">
                    <svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                    القسم المسؤول
                  </div>
                  <div className="meta-value" id="metaSection">–</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════ PROJECT BODY ═══════════ */}
      <section id="proj-body" className="section-pad">
        <div className="container">
          <div className="body-grid">

            {/* Main Prose */}
            <article className="prose reveal" id="proseContent" aria-label="تفاصيل المشروع">
              {/* Loading skeletons */}
              <div id="proseSkeleton">
                <span className="skeleton" style={{ display:'block', width:'40%', height:'1.4em', borderRadius:'6px', marginBottom:'18px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'100%', height:'1em', borderRadius:'6px', marginBottom:'10px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'96%', height:'1em', borderRadius:'6px', marginBottom:'10px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'88%', height:'1em', borderRadius:'6px', marginBottom:'24px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'35%', height:'1.4em', borderRadius:'6px', marginBottom:'18px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'100%', height:'1em', borderRadius:'6px', marginBottom:'10px' }}>‌</span>
                <span className="skeleton" style={{ display:'block', width:'92%', height:'1em', borderRadius:'6px' }}>‌</span>
              </div>
              {/* Real content injected here by JS */}
              <div id="proseReal" style={{ display:'none' }}></div>
            </article>

            {/* Sidebar */}
            <aside className="sidebar">

              {/* Team */}
              <div className="side-card reveal" style={{ transitionDelay:'.05s' }}>
                <div className="side-title">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  فريق العمل
                </div>
                <div className="team-list" id="teamList">
                  {/* Default placeholders, replaced by API */}
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

              {/* Links */}
              <div className="side-card reveal" style={{ transitionDelay:'.1s' }}>
                <div className="side-title">
                  <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  روابط المشروع
                </div>
                <div className="links-list" id="linksList">
                  <a href="#" className="ext-link" id="githubLink">
                    <span className="ext-link-left">
                      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      الكود المصدري
                    </span>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                  </a>
                  <a href="#" className="ext-link" id="demoLink">
                    <span className="ext-link-left">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                      معاينة مباشرة
                    </span>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                  </a>
                </div>
              </div>

              {/* Share */}
              <div className="side-card reveal" style={{ transitionDelay:'.15s' }}>
                <div className="side-title">
                  <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  شارك المشروع
                </div>
                <div className="share-row">
                  <button className="share-btn" id="shareTwitter" aria-label="مشاركة على تويتر">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button className="share-btn" id="shareTelegram" aria-label="مشاركة على تيليجرام">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </button>
                  <button className="share-btn" id="shareCopy" aria-label="نسخ الرابط">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  </button>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>


      {/* ═══════════ RELATED PROJECTS ═══════════ */}
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
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div className="proj-status-overlay"><span className="badge badge-gold">مكتمل</span></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags"><span className="proj-tag">React</span><span className="proj-tag">Node.js</span></div>
                <h3 className="proj-title">اسم المشروع الثاني</h3>
                <p className="proj-desc">وصف مختصر يوضح هدف المشروع والقيمة التي يضيفها للمستخدمين والفريق.</p>
                <Link to="/project/2" className="btn-text" style={{ fontSize:'.82rem' }}>
                  عرض
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                </Link>
              </div>
            </article>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.1s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-3.jpg" alt="صورة مشروع ذو صلة" width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <div className="proj-status-overlay"><span className="badge badge-silver">قيد التطوير</span></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags"><span className="proj-tag">Flutter</span><span className="proj-tag">Firebase</span></div>
                <h3 className="proj-title">اسم المشروع الثالث</h3>
                <p className="proj-desc">وصف مختصر يوضح هدف المشروع والقيمة التي يضيفها للمستخدمين والفريق.</p>
                <Link to="/project/3" className="btn-text" style={{ fontSize:'.82rem' }}>
                  عرض
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                </Link>
              </div>
            </article>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.15s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-5.jpg" alt="صورة مشروع ذو صلة" width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div className="proj-status-overlay"><span className="badge badge-green">نشط</span></div>
              </div>
              <div className="proj-body">
                <div className="proj-tags"><span className="proj-tag">AI</span><span className="proj-tag">Python</span></div>
                <h3 className="proj-title">اسم المشروع الخامس</h3>
                <p className="proj-desc">وصف مختصر يوضح هدف المشروع والقيمة التي يضيفها للمستخدمين والفريق.</p>
                <Link to="/project/5" className="btn-text" style={{ fontSize:'.82rem' }}>
                  عرض
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                </Link>
              </div>
            </article>

          </div>

        </div>
      </section>
    </>
  );
}