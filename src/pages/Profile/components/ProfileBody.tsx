import { Link } from 'react-router-dom';
import { Icon } from "@/components";

export default function ProfileBody() {
  return (
    <section id="profile-body">
      <div className="container">
        <div className="profile-grid">
          <aside className="profile-side">
            <div className="profile-card">
              <h3>الشارات التي كسبتها</h3>
              <div className="profile-badges">
                <div className="mini-badge" title="نجم الشهر">
                  <div className="mini-badge-icon"><Icon name="star" /></div>
                  <div className="mini-badge-label">نجم الشهر</div>
                </div>
                <div className="mini-badge" title="سريع الخطى">
                  <div className="mini-badge-icon" style={{ background:'linear-gradient(135deg,#dbeafe,#bfdbfe)' }}><Icon name="code-brackets" /></div>
                  <div className="mini-badge-label">سريع الخطى</div>
                </div>
                <div className="mini-badge" title="رفيق الفريق">
                  <div className="mini-badge-icon" style={{ background:'linear-gradient(135deg,#dcfce7,#86efac)' }}><Icon name="users" /></div>
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
                    <Icon name="check" />
                  </div>
                  <div className="activity-text">
                    <strong>أكملت مهمة "تطوير واجهة نقاط"</strong>
                    <div>قبل ٣ أيام · +120 نقطة</div>
                  </div>
                </div>
                <div className="activity-row">
                  <div className="activity-icon" style={{ background:'linear-gradient(135deg,#fef3c7,#fcd34d)' }}>
                    <Icon name="star" />
                  </div>
                  <div className="activity-text">
                    <strong>حصلت على شارة "نجم الشهر"</strong>
                    <div>قبل أسبوع</div>
                  </div>
                </div>
                <div className="activity-row">
                  <div className="activity-icon" style={{ background:'linear-gradient(135deg,#dcfce7,#86efac)' }}>
                    <Icon name="users" />
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
                    <Icon name="monitor" />
                  </div>
                  <div className="mini-proj-info">
                    <div className="mini-proj-title">منصة إدارة شرق</div>
                    <div className="mini-proj-role">Lead Dev</div>
                  </div>
                </Link>
                <Link to="/project/3" className="mini-proj">
                  <div className="mini-proj-icon" style={{ background:'linear-gradient(135deg,#fef3c7,#e0f2fe)' }}>
                    <Icon name="file" />
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
  );
}
