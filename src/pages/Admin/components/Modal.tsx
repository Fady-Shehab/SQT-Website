import { Icon } from "@/components";

export default function Modal() {
  return (
    <div id="modal" className="modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div className="modal-overlay" id="modalOverlay" aria-hidden="true"></div>
      <div className="modal-card">
        <div className="modal-header">
          <h2 className="modal-title" id="modalTitle">عنوان</h2>
          <button className="modal-close" id="modalCloseBtn" aria-label="إغلاق">
            <Icon name="close" size={24} />
          </button>
        </div>
        <div className="modal-body" id="modalBody"></div>
      </div>
    </div>
  );
}
