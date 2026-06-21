import { Icon } from "@/components";

export default function ProjectsSection() {
  return (
    <div id="projects" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <select id="projectsFilter" className="select-input">
            <option value="all">الكل</option>
            <option value="active">نشط</option>
            <option value="completed">مكتمل</option>
          </select>
        </div>
        <button className="btn btn-gold" id="addProjectBtn">
          <Icon name="plus" size={16} />
          مشروع جديد
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>المشروع</th>
              <th>الفريق</th>
              <th>التقدم</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody id="projectsTableBody">
            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>جارِ التحميل...</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
