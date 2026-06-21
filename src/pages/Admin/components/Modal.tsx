import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function Modal() {
  return (
    <div id="modal" className="modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div className="modal-overlay" id="modalOverlay" aria-hidden="true"></div>
      <div className="modal-card">
        <div className="modal-header">
          <h2 className="modal-title" id="modalTitle">{t('modalTitle')}</h2>
          <button className="modal-close" id="modalCloseBtn" aria-label={t('modalCloseAria')}>
            <Icon name="close" size={24} />
          </button>
        </div>
        <div className="modal-body" id="modalBody"></div>
      </div>
    </div>
  );
}
