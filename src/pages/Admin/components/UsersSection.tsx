import { Icon } from "@/components";

export default function UsersSection() {
  return (
    <div id="users" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <div className="search-wrapper">
            <Icon name="search" size={18} />
            <input type="text" id="userSearch" className="search-input" placeholder="البحث عن عضو..." />
          </div>
          <select id="userFilter" className="select-input">
            <option value="all">الحالة: الكل</option>
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
            <option value="admin">مدير</option>
          </select>
        </div>
        <button className="btn btn-gold" id="addUserBtn">
          <Icon name="plus" size={16} />
          إضافة عضو
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>العضو</th>
              <th>البريد</th>
              <th>التحصيل</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody id="usersTableBody">
            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>جارِ التحميل...</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
