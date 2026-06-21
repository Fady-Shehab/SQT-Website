import { Icon } from "@/components";

export default function HofSection() {
  return (
    <div id="hof" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <select id="hofSeason" className="select-input">
            <option value="all-time">لكل الوقت</option>
            <option value="this-month">هذا الشهر</option>
          </select>
        </div>
        <button className="btn btn-outline" id="syncHofBtn">
          <Icon name="refresh" size={16} />
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
  );
}
