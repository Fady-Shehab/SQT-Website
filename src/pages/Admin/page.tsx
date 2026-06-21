
export default function AdminPage() {
  return (
    <main id="admin-main">
      <aside className="admin-sidebar" aria-label="التنقل الرئيسي">
        <a href="/" className="sidebar-brand" aria-label="العودة إلى الموقع">
          <div className="logo-gem" aria-hidden="true"></div>
          <span className="brand-text">شرق تك</span>
        </a>
        <nav className="sidebar-nav">
          <button className="nav-item active" data-section="dashboard" aria-current="page">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
            لوحة التحكم
          </button>
          <button className="nav-item" data-section="users">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            إدارة الأعضاء
          </button>
          <button className="nav-item" data-section="projects">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            المشاريع
          </button>
          <button className="nav-item" data-section="posts">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            المقالات
          </button>
          <button className="nav-item" data-section="hof">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            قاعة المجد
          </button>
          <button className="nav-item" data-section="settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            الإعدادات
          </button>
        </nav>
        <div className="sidebar-footer">
          <a href="/" className="sidebar-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            عرض الموقع
          </a>
          <button className="sidebar-link" id="logoutBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            تسجيل الخروج
          </button>
        </div>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div className="header-left">
            <h1 id="section-title" className="section-title">لوحة التحكم</h1>
            <p id="section-subtitle" className="section-subtitle">نظرة سريعة على أداء الفريق.</p>
          </div>
          <div className="header-right">
            <div className="search-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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

        {/* Dashboard Section */}
        <div id="dashboard" className="content-section active">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon blue">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span className="stat-trend">+12% هذا الشهر</span>
              </div>
              <div className="stat-value" id="dashUsers">0</div>
              <div className="stat-label">إجمالي الأعضاء</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon green">
                  <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <span className="stat-trend">+5 نشط</span>
              </div>
              <div className="stat-value" id="dashProjects">0</div>
              <div className="stat-label">المشاريع</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon purple">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                </div>
                <span className="stat-trend">+3 جديد</span>
              </div>
              <div className="stat-value" id="dashPosts">0</div>
              <div className="stat-label">المقالات</div>
            </div>
            <div className="stat-card">
              <div className="stat-header">
                <div className="stat-icon gold">
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
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

        {/* Users Section */}
        <div id="users" className="content-section">
          <div className="section-toolbar">
            <div className="toolbar-left">
              <div className="search-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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

        {/* Projects Section */}
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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

        {/* Posts Section */}
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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

        {/* HoF Section */}
        <div id="hof" className="content-section">
          <div className="section-toolbar">
            <div className="toolbar-left">
              <select id="hofSeason" className="select-input">
                <option value="all-time">لكل الوقت</option>
                <option value="this-month">هذا الشهر</option>
              </select>
            </div>
            <button className="btn btn-outline" id="syncHofBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              مزامنة النقاط
            </button>
          </div>
          <div className="grid-two-cols">
            <div className="content-card">
              <h2 className="card-title">إضافة نقاط يدوية</h2>
              <form id="addPointsForm">
                <div className="form-row">
                  <div className="form-field half">
                    <label className="field-label">العضو</label>
                    <select id="pointUserId" className="select-input" required>
                      <option value="">اختر...</option>
                    </select>
                  </div>
                  <div className="form-field half">
                    <label className="field-label">النقاط</label>
                    <input type="number" id="pointAmount" className="field-input" placeholder="مثلاً: 50" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field full">
                    <label className="field-label">السبب</label>
                    <input type="text" id="pointReason" className="field-input" placeholder="لماذا؟" />
                  </div>
                </div>
                <button type="submit" className="btn btn-gold">إضافة</button>
              </form>
            </div>
            <div className="content-card">
              <h2 className="card-title">آخر الإنجازات</h2>
              <ul className="mini-list" id="recentPoints">
                <li>جارِ التحميل...</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div id="settings" className="content-section">
          <div className="content-card">
            <h2 className="card-title">إعدادات الموقع</h2>
            <form id="settingsForm">
              <div className="form-row">
                <div className="form-field half">
                  <label className="field-label">اسم الموقع</label>
                  <input type="text" className="field-input" value="شرق تك" />
                </div>
                <div className="form-field half">
                  <label className="field-label">البريد الرئيسي</label>
                  <input type="email" className="field-input" value="contact@shareqtec.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" className="checkbox-input" checked />
                    <span className="checkbox-box" aria-hidden="true"></span>
                    <span className="checkbox-label">تفعيل التسجيل</span>
                  </label>
                </div>
              </div>
              <button type="button" className="btn btn-gold">حفظ التغييرات</button>
            </form>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="modal" className="modal" role="dialog" aria-modal="true" aria-hidden="true">
        <div className="modal-overlay" id="modalOverlay" aria-hidden="true"></div>
        <div className="modal-card">
          <div className="modal-header">
            <h2 className="modal-title" id="modalTitle">عنوان</h2>
            <button className="modal-close" id="modalCloseBtn" aria-label="إغلاق">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div className="modal-body" id="modalBody"></div>
        </div>
      </div>
    </main>
  );
}
