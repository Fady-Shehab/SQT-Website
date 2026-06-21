import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function UsersSection() {
  return (
    <div id="users" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <div className="search-wrapper">
            <Icon name="search" size={18} />
            <input type="text" id="userSearch" className="search-input" placeholder={t('usersSearchPlaceholder')} />
          </div>
          <select id="userFilter" className="select-input">
            <option value="all">{t('usersFilterAll')}</option>
            <option value="active">{t('usersFilterActive')}</option>
            <option value="inactive">{t('usersFilterInactive')}</option>
            <option value="admin">{t('usersFilterAdmin')}</option>
          </select>
        </div>
        <button className="btn btn-gold" id="addUserBtn">
          <Icon name="plus" size={16} />
          {t('usersAddMember')}
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t('usersTableMember')}</th>
              <th>{t('usersTableEmail')}</th>
              <th>{t('usersTablePoints')}</th>
              <th>{t('usersTableStatus')}</th>
              <th>{t('usersTableActions')}</th>
            </tr>
          </thead>
          <tbody id="usersTableBody">
            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>{t('usersLoading')}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
