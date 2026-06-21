import { Icon } from "@/components";

export default function DashboardSection() {
  return (
    <div id="dashboard" className="content-section active">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon blue">
              <Icon name="users" />
            </div>
            <span className="stat-trend">+12% هذا الشهر</span>
          </div>
          <div className="stat-value" id="dashUsers">0</div>
          <div className="stat-label">إجمالي الأعضاء</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon green">
              <Icon name="folder" />
            </div>
            <span className="stat-trend">+5 نشط</span>
          </div>
          <div className="stat-value" id="dashProjects">0</div>
          <div className="stat-label">المشاريع</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon purple">
              <Icon name="file-text" />
            </div>
            <span className="stat-trend">+3 جديد</span>
          </div>
          <div className="stat-value" id="dashPosts">0</div>
          <div className="stat-label">المقالات</div>
        </div>
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon gold">
              <Icon name="star" />
            </div>
            <span className="stat-trend">أعلى: 1500</span>
          </div>
          <div className="stat-value" id="dashPoints">0</div>
          <div className="stat-label">نقاط التميز</div>
        </div>
      </div>
      <div className="grid-two-cols">
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">آخر الأنشطة</h2>
          </div>
          <ul className="activity-list" id="activityList">
            <li className="activity-item">جارِ التحميل...</li>
          </ul>
        </div>
        <div className="content-card">
          <div className="card-header">
            <h2 className="card-title">أفضل الأعضاء</h2>
          </div>
          <ul className="mini-list" id="topUsers">
            <li>جارِ التحميل...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
