import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <main id="main-content">
      <section id="profile-hero" aria-labelledby="profile-h">
        <div className="eg-pattern" aria-hidden="true"></div>
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div><div className="gem gem-2"></div><div className="gem gem-3"></div>
        </div>

        <div className="container">
          <div className="profile-header">
            <div className="profile-avatar">
              <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>

            <div className="profile-info">
              <h1 id="profile-h">محمد أحمد</h1>
              <div className="profile-role">Programming</div>
              <div className="profile-tagline">بناء أشياء مفيدة بخط أنظف</div>
              <div className="profile-socials">
                <a href="#" aria-label="X">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.253 5.622z"/></svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <div className="profile-stats">
              <div className="profile-stat">
                <div className="stat-value">1,280</div>
                <div className="stat-label">نقطة</div>
              </div>
              <div className="profile-stat">
                <div className="stat-value">12</div>
                <div className="stat-label">مهمة مكتملة</div>
              </div>
              <div className="profile-stat">
                <div className="stat-value">4</div>
                <div className="stat-label">شارة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profile-body">
        <div className="container">
          <div className="profile-grid">
            <aside className="profile-side">
              <div className="profile-card">
                <h3>الشارات التي كسبتها</h3>
                <div className="profile-badges">
                  <div className="mini-badge" title="نجم الشهر">
                    <div className="mini-badge-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                    <div className="mini-badge-label">نجم الشهر</div>
                  </div>
                  <div className="mini-badge" title="سريع الخطى">
                    <div className="mini-badge-icon" style={{ background:'linear-gradient(135deg,#dbeafe,#bfdbfe)' }}><svg viewBox="0 0 24 24" style={{ color:'#1d4ed8' }}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                    <div className="mini-badge-label">سريع الخطى</div>
                  </div>
                  <div className="mini-badge" title="رفيق الفريق">
                    <div className="mini-badge-icon" style={{ background:'linear-gradient(135deg,#dcfce7,#86efac)' }}><svg viewBox="0 0 24 24" style={{ color:'#166534' }}><path d="M17 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                    <div className="mini-badge-label">رفيق الفريق</div>
                  </div>
                </div>
              </div>

              <div className="profile-card">
                <h3>نقاطك حسب النشاط</h3>
                <div className="profile-chart">
                  <div className="chart-bar">
                    <div className="chart-bar-inner" style={{ width:'70%' }}></div>
                    <div className="chart-label">مهام مكتملة</div>
                  </div>
                  <div className="chart-bar">
                    <div className="chart-bar-inner" style={{ width:'60%', background:'linear-gradient(90deg,var(--emerald),var(--emerald-soft))' }}></div>
                    <div className="chart-label">مبادرات</div>
                  </div>
                  <div className="chart-bar">
                    <div className="chart-bar-inner" style={{ width:'40%', background:'linear-gradient(90deg,#60a5fa,#dbeafe)' }}></div>
                    <div className="chart-label">مساعدة</div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="profile-main">
              <div className="profile-card">
                <div className="card-header">
                  <h3>آخر النشاط</h3>
                </div>
                <div className="activity-list">
                  <div className="activity-row">
                    <div className="activity-icon" style={{ background:'linear-gradient(135deg,var(--gold-dim),var(--emerald-soft))' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color:'var(--gold)' }}><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div className="activity-text">
                      <strong>أكملت مهمة "تطوير واجهة نقاط"</strong>
                      <div>قبل ٣ أيام · +120 نقطة</div>
                    </div>
                  </div>
                  <div className="activity-row">
                    <div className="activity-icon" style={{ background:'linear-gradient(135deg,#fef3c7,#fcd34d)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color:'#92400e' }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div className="activity-text">
                      <strong>حصلت على شارة "نجم الشهر"</strong>
                      <div>قبل أسبوع</div>
                    </div>
                  </div>
                  <div className="activity-row">
                    <div className="activity-icon" style={{ background:'linear-gradient(135deg,#dcfce7,#86efac)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color:'#166534' }}><path d="M17 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div className="activity-text">
                      <strong>ساعدت سارة في مشروع الـ AI</strong>
                      <div>قبل أسبوعين · +50 نقطة</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-card">
                <div className="card-header">
                  <h3>المشاريع التي شاركت فيها</h3>
                </div>
                <div className="mini-projects">
                  <Link to="/project/1" className="mini-proj">
                    <div className="mini-proj-icon" style={{ background:'linear-gradient(135deg,var(--gold-dim),var(--emerald-soft))' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color:'var(--gold)' }}><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                    </div>
                    <div className="mini-proj-info">
                      <div className="mini-proj-title">منصة إدارة شرق</div>
                      <div className="mini-proj-role">Lead Dev</div>
                    </div>
                  </Link>
                  <Link to="/project/3" className="mini-proj">
                    <div className="mini-proj-icon" style={{ background:'linear-gradient(135deg,#fef3c7,#e0f2fe)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color:'var(--gold)' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/></svg>
                    </div>
                    <div className="mini-proj-info">
                      <div className="mini-proj-title">تطبيق نقاط الفريق</div>
                      <div className="mini-proj-role">Dev</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}