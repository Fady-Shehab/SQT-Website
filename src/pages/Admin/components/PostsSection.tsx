import { Icon } from "@/components";

export default function PostsSection() {
  return (
    <div id="posts" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <select id="postsFilter" className="select-input">
            <option value="all">الكل</option>
            <option value="published">منشور</option>
            <option value="draft">مسودة</option>
          </select>
        </div>
        <button className="btn btn-gold" id="addPostBtn">
          <Icon name="plus" size={16} />
          مقال جديد
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>العنوان</th>
              <th>الكاتب</th>
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody id="postsTableBody">
            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>جارِ التحميل...</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
