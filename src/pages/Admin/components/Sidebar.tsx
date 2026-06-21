import { Icon } from "@/components";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar" aria-label="التنقل الرئيسي">
      <a href="/" className="sidebar-brand" aria-label="العودة إلى الموقع">
        <div className="logo-gem" aria-hidden="true"></div>
        <span className="brand-text">شرق تك</span>
      </a>
      <nav className="sidebar-nav">
        <button className="nav-item active" data-section="dashboard" aria-current="page">
          <Icon name="grid" size={20} />
          لوحة التحكم
        </button>
        <button className="nav-item" data-section="users">
          <Icon name="users" size={20} />
          إدارة الأعضاء
        </button>
        <button className="nav-item" data-section="projects">
          <Icon name="folder" size={20} />
          المشاريع
        </button>
        <button className="nav-item" data-section="posts">
          <Icon name="file-text" size={20} />
          المقالات
        </button>
        <button className="nav-item" data-section="hof">
          <Icon name="star" size={20} />
          قاعة المجد
        </button>
        <button className="nav-item" data-section="settings">
          <Icon name="settings" size={20} />
          الإعدادات
        </button>
      </nav>
      <div className="sidebar-footer">
        <a href="/" className="sidebar-link">
          <Icon name="log-out" size={16} />
          عرض الموقع
        </a>
        <button className="sidebar-link" id="logoutBtn">
          <Icon name="log-out" size={16} />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
