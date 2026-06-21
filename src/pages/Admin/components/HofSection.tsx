import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function HofSection() {
  return (
    <div id="hof" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <select id="hofSeason" className="select-input">
            <option value="all-time">{t('hofSectionAllTime')}</option>
            <option value="this-month">{t('hofSectionThisMonth')}</option>
          </select>
        </div>
        <button className="btn btn-outline" id="syncHofBtn">
          <Icon name="refresh" size={16} />
          {t('hofSectionSync')}
        </button>
      </div>
      <div className="grid-two-cols">
        <div className="content-card">
          <h2 className="card-title">{t('hofSectionAddPoints')}</h2>
          <form id="addPointsForm">
            <div className="form-row">
              <div className="form-field half">
                <label className="field-label">{t('hofSectionMember')}</label>
                <select id="pointUserId" className="select-input" required>
                  <option value="">{t('hofSectionSelect')}</option>
                </select>
              </div>
              <div className="form-field half">
                <label className="field-label">{t('hofSectionPoints')}</label>
                <input type="number" id="pointAmount" className="field-input" placeholder={t('hofSectionPointsPlaceholder')} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field full">
                <label className="field-label">{t('hofSectionReason')}</label>
                <input type="text" id="pointReason" className="field-input" placeholder={t('hofSectionReasonPlaceholder')} />
              </div>
            </div>
            <button type="submit" className="btn btn-gold">{t('hofSectionAdd')}</button>
          </form>
        </div>
        <div className="content-card">
          <h2 className="card-title">{t('hofSectionRecent')}</h2>
          <ul className="mini-list" id="recentPoints">
            <li>{t('hofSectionLoading')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
