export default function SettingsSection() {
  return (
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
  );
}
