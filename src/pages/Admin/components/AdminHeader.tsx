import { Icon } from "@/components";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 id="section-title" className="section-title">لوحة التحكم</h1>
        <p id="section-subtitle" className="section-subtitle">نظرة سريعة على أداء الفريق.</p>
      </div>
      <div className="header-right">
        <div className="search-wrapper">
          <Icon name="search" size={18} />
          <input type="text" id="globalSearch" className="search-input" placeholder="البحث السريع..." />
        </div>
        <div className="header-user">
          <div className="user-avatar" id="userAvatar" aria-hidden="true"></div>
          <div className="user-info">
            <span className="user-name" id="userName">مستخدم</span>
            <span className="user-role" id="userRole">مدير</span>
          </div>
        </div>
      </div>
    </header>
  );
}
