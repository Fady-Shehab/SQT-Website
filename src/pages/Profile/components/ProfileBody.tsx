import { Link } from 'react-router-dom';
import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function ProfileBody() {
  return (
    <section id="profile-body">
      <div className="container">
        <div className="profile-grid">
          <aside className="profile-side">
            <div className="profile-card">
              <h3>{t('profileBadgesTitle')}</h3>
              <div className="profile-badges">
                <div className="mini-badge" title={t('profileBadgeStarTitle')}>
                  <div className="mini-badge-icon"><Icon name="star" /></div>
                  <div className="mini-badge-label">{t('profileBadgeStarLabel')}</div>
                </div>
                <div className="mini-badge" title={t('profileBadgeFastTitle')}>
                  <div className="mini-badge-icon" style={{ background:'linear-gradient(135deg,#dbeafe,#bfdbfe)' }}><Icon name="code-brackets" /></div>
                  <div className="mini-badge-label">{t('profileBadgeFastLabel')}</div>
                </div>
                <div className="mini-badge" title={t('profileBadgeTeamTitle')}>
                  <div className="mini-badge-icon" style={{ background:'linear-gradient(135deg,#dcfce7,#86efac)' }}><Icon name="users" /></div>
                  <div className="mini-badge-label">{t('profileBadgeTeamLabel')}</div>
                </div>
              </div>
            </div>

            <div className="profile-card">
              <h3>{t('profileChartTitle')}</h3>
              <div className="profile-chart">
                <div className="chart-bar">
                  <div className="chart-bar-inner" style={{ width:'70%' }}></div>
                  <div className="chart-label">{t('profileChartTasks')}</div>
                </div>
                <div className="chart-bar">
                  <div className="chart-bar-inner" style={{ width:'60%', background:'linear-gradient(90deg,var(--emerald),var(--emerald-soft))' }}></div>
                  <div className="chart-label">{t('profileChartInitiatives')}</div>
                </div>
                <div className="chart-bar">
                  <div className="chart-bar-inner" style={{ width:'40%', background:'linear-gradient(90deg,#60a5fa,#dbeafe)' }}></div>
                  <div className="chart-label">{t('profileChartHelp')}</div>
                </div>
              </div>
            </div>
          </aside>

          <div className="profile-main">
            <div className="profile-card">
              <div className="card-header">
                <h3>{t('profileActivityTitle')}</h3>
              </div>
              <div className="activity-list">
                <div className="activity-row">
                  <div className="activity-icon" style={{ background:'linear-gradient(135deg,var(--gold-dim),var(--emerald-soft))' }}>
                    <Icon name="check" />
                  </div>
                  <div className="activity-text">
                    <strong>{t('profileActivity1Text')}</strong>
                    <div>{t('profileActivity1Meta')}</div>
                  </div>
                </div>
                <div className="activity-row">
                  <div className="activity-icon" style={{ background:'linear-gradient(135deg,#fef3c7,#fcd34d)' }}>
                    <Icon name="star" />
                  </div>
                  <div className="activity-text">
                    <strong>{t('profileActivity2Text')}</strong>
                    <div>{t('profileActivity2Meta')}</div>
                  </div>
                </div>
                <div className="activity-row">
                  <div className="activity-icon" style={{ background:'linear-gradient(135deg,#dcfce7,#86efac)' }}>
                    <Icon name="users" />
                  </div>
                  <div className="activity-text">
                    <strong>{t('profileActivity3Text')}</strong>
                    <div>{t('profileActivity3Meta')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-card">
              <div className="card-header">
                <h3>{t('profileProjectsTitle')}</h3>
              </div>
              <div className="mini-projects">
                <Link to="/project/1" className="mini-proj">
                  <div className="mini-proj-icon" style={{ background:'linear-gradient(135deg,var(--gold-dim),var(--emerald-soft))' }}>
                    <Icon name="monitor" />
                  </div>
                  <div className="mini-proj-info">
                    <div className="mini-proj-title">{t('profileProject1Title')}</div>
                    <div className="mini-proj-role">{t('profileProject1Role')}</div>
                  </div>
                </Link>
                <Link to="/project/3" className="mini-proj">
                  <div className="mini-proj-icon" style={{ background:'linear-gradient(135deg,#fef3c7,#e0f2fe)' }}>
                    <Icon name="file" />
                  </div>
                  <div className="mini-proj-info">
                    <div className="mini-proj-title">{t('profileProject2Title')}</div>
                    <div className="mini-proj-role">{t('profileProject2Role')}</div>
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
