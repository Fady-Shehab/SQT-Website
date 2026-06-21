import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function DashboardSection() {
  return (
    <div id="dashboard" className="content-section active">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon blue">
              <Icon name="users" />
            </div>
            <span className="stat-trend">{t('dashTrendThisMonth')}</span>
          </div>
          <div className="stat-value" id="dashUsers">0</div>
          <div className="stat-label">{t('dashTotalMembers')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon green">
              <Icon name="folder" />
            </div>
            <span className="stat-trend">{t('dashTrendActive')}</span>
          </div>
          <div className="stat-value" id="dashProjects">0</div>
          <div className="stat-label">{t('dashProjects')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon purple">
              <Icon name="file-text" />
            </div>
            <span className="stat-trend">{t('dashTrendNew')}</span>
          </div>
          <div className="stat-value" id="dashPosts">0</div>
          <div className="stat-label">{t('dashPosts')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon gold">
              <Icon name="star" />
            </div>
            <span className="stat-trend">{t('dashTrendHighest')}</span>
          </div>
          <div className="stat-value" id="dashPoints">0</div>
          <div className="stat-label">{t('dashPoints')}</div>
        </div>
      </div>
      <div className="grid-two-cols">
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">{t('dashRecentActivity')}</h2>
          </div>
          <ul className="activity-list" id="activityList">
            <li className="activity-item">{t('dashLoading')}</li>
          </ul>
        </div>
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">{t('dashTopMembers')}</h2>
          </div>
          <ul className="mini-list" id="topUsers">
            <li>{t('dashLoading')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
