import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 id="section-title" className="section-title">{t('adminHeaderTitle')}</h1>
        <p id="section-subtitle" className="section-subtitle">{t('adminHeaderSubtitle')}</p>
      </div>
      <div className="header-right">
        <div className="search-wrapper">
          <Icon name="search" size={18} />
          <input type="text" id="globalSearch" className="search-input" placeholder={t('adminSearchPlaceholder')} />
        </div>
        <div className="header-user">
          <div className="user-avatar" id="userAvatar" aria-hidden="true"></div>
          <div className="user-info">
            <span className="user-name" id="userName">{t('adminHeaderUserName')}</span>
            <span className="user-role" id="userRole">{t('adminHeaderUserRole')}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
