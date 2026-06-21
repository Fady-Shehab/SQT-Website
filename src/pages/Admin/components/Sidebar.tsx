import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar" aria-label={t('sidebarNavAria')}>
      <a href="/" className="sidebar-brand" aria-label={t('sidebarBrandAria')}>
        <div className="logo-gem" aria-hidden="true"></div>
        <span className="brand-text">{t('sidebarBrandText')}</span>
      </a>
      <nav className="sidebar-nav">
        <button className="nav-item active" data-section="dashboard" aria-current="page">
          <Icon name="grid" size={20} />
          {t('sidebarDashboard')}
        </button>
        <button className="nav-item" data-section="users">
          <Icon name="users" size={20} />
          {t('sidebarUsers')}
        </button>
        <button className="nav-item" data-section="projects">
          <Icon name="folder" size={20} />
          {t('sidebarProjects')}
        </button>
        <button className="nav-item" data-section="posts">
          <Icon name="file-text" size={20} />
          {t('sidebarPosts')}
        </button>
        <button className="nav-item" data-section="hof">
          <Icon name="star" size={20} />
          {t('sidebarHof')}
        </button>
        <button className="nav-item" data-section="settings">
          <Icon name="settings" size={20} />
          {t('sidebarSettings')}
        </button>
      </nav>
      <div className="sidebar-footer">
        <a href="/" className="sidebar-link">
          <Icon name="log-out" size={16} />
          {t('sidebarViewSite')}
        </a>
        <button className="sidebar-link" id="logoutBtn">
          <Icon name="log-out" size={16} />
          {t('sidebarLogout')}
        </button>
      </div>
    </aside>
  );
}
