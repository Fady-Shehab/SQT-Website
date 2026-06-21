import { t } from "@/utils/strings";
import { Link } from 'react-router-dom';
import { Icon } from "@/components";

export default function ProjectBody() {
  return (
    <>
      <section id="proj-body" className="section-pad">
        <div className="container">
          <div className="body-grid">

            <article className="prose reveal" id="proseContent" aria-label={t('projectBodyDetailsAria')}>
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
                  {t('projectBodyTeam')}
                </div>
                <div className="team-list" id="teamList">
                  <div className="team-member">
                    <div className="member-avatar">أ</div>
                    <div className="member-info">
                      <div className="member-name">{t('projectBodyMember1Name')}</div>
                      <div className="member-role">{t('projectBodyMember1Role')}</div>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">م</div>
                    <div className="member-info">
                      <div className="member-name">{t('projectBodyMember2Name')}</div>
                      <div className="member-role">{t('projectBodyMember2Role')}</div>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="member-avatar">س</div>
                    <div className="member-info">
                      <div className="member-name">{t('projectBodyMember3Name')}</div>
                      <div className="member-role">{t('projectBodyMember3Role')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="side-card reveal" style={{ transitionDelay:'.1s' }}>
                <div className="side-title">
                  <Icon name="link" />
                  {t('projectBodyLinks')}
                </div>
                <div className="links-list" id="linksList">
                  <a href="#" className="ext-link" id="githubLink">
                    <span className="ext-link-left">
                      <Icon name="github" />
                      {t('projectBodySourceCode')}
                    </span>
                    <Icon name="arrow-left" className="arrow-icon" />
                  </a>
                  <a href="#" className="ext-link" id="demoLink">
                    <span className="ext-link-left">
                      <Icon name="play" />
                      {t('projectBodyLivePreview')}
                    </span>
                    <Icon name="arrow-left" className="arrow-icon" />
                  </a>
                </div>
              </div>

              <div className="side-card reveal" style={{ transitionDelay:'.15s' }}>
                <div className="side-title">
                  <Icon name="share" />
                  {t('projectBodyShare')}
                </div>
                <div className="share-row">
                  <button className="share-btn" id="shareTwitter" aria-label={t('shareTwitterAria')}>
                    <Icon name="twitter" />
                  </button>
                  <button className="share-btn" id="shareTelegram" aria-label={t('shareTelegramAria')}>
                    <Icon name="telegram" />
                  </button>
                  <button className="share-btn" id="shareCopy" aria-label={t('shareCopyLinkAria')}>
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
            <div className="stb-eye">{t('relatedEye')}</div>
            <h2 id="related-title" className="stb-h" dangerouslySetInnerHTML={{ __html: t('relatedTitle') }} />
            <div className="gold-rule"><div className="gold-rule-diamond"></div></div>
          </div>

          <div className="related-grid" id="relatedGrid" role="list" aria-label={t('relatedGridAria')}>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.05s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-2.jpg" alt={t('relatedImgAlt')} width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
<Icon name="globe" />
                </div>
                <div className="proj-status-overlay"><span className="badge badge-gold">{t('relatedBadgeCompleted')}</span></div>
              </div>
              <div className="proj-body">
                {/* eslint-disable-next-line sqt/no-inline-strings */}
                <div className="proj-tags"><span className="proj-tag">React</span><span className="proj-tag">Node.js</span></div>
                <h3 className="proj-title">{t('relatedProject2Name')}</h3>
                <p className="proj-desc">{t('relatedProjectDesc')}</p>
                <Link to="/project/2" className="btn-text" style={{ fontSize:'.82rem' }}>
                  {t('relatedViewLink')}
                  <Icon name="arrow-left" size={14} />
                </Link>
              </div>
            </article>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.1s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-3.jpg" alt={t('relatedImgAlt')} width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
                  <Icon name="smartphone" />
                </div>
                <div className="proj-status-overlay"><span className="badge badge-silver">{t('relatedBadgeInProgress')}</span></div>
              </div>
              <div className="proj-body">
                {/* eslint-disable-next-line sqt/no-inline-strings */}
                <div className="proj-tags"><span className="proj-tag">Flutter</span><span className="proj-tag">Firebase</span></div>
                <h3 className="proj-title">{t('relatedProject3Name')}</h3>
                <p className="proj-desc">{t('relatedProjectDesc')}</p>
                <Link to="/project/3" className="btn-text" style={{ fontSize:'.82rem' }}>
                  {t('relatedViewLink')}
                  <Icon name="arrow-left" size={14} />
                </Link>
              </div>
            </article>

            <article className="proj-card reveal" role="listitem" style={{ transitionDelay:'.15s' }} tabIndex={0}>
              <div className="proj-img">
                <img src="/img/project-5.jpg" alt={t('relatedImgAlt')} width="400" height="225" loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; }} />
                <div className="proj-img-ph" style={{ display:'none' }} aria-hidden="true">
                  <Icon name="hexagon" />
                </div>
                <div className="proj-status-overlay"><span className="badge badge-green">{t('relatedBadgeActive')}</span></div>
              </div>
              <div className="proj-body">
                {/* eslint-disable-next-line sqt/no-inline-strings */}
                <div className="proj-tags"><span className="proj-tag">AI</span><span className="proj-tag">Python</span></div>
                <h3 className="proj-title">{t('relatedProject5Name')}</h3>
                <p className="proj-desc">{t('relatedProjectDesc')}</p>
                <Link to="/project/5" className="btn-text" style={{ fontSize:'.82rem' }}>
                  {t('relatedViewLink')}
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
