import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function ProjectsSection() {
  return (
    <div id="projects" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <select id="projectsFilter" className="select-input">
            <option value="all">{t('projectsFilterAll')}</option>
            <option value="active">{t('projectsFilterActive')}</option>
            <option value="completed">{t('projectsFilterCompleted')}</option>
          </select>
        </div>
        <button className="btn btn-gold" id="addProjectBtn">
          <Icon name="plus" size={16} />
          {t('projectsNewProject')}
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t('projectsTableProject')}</th>
              <th>{t('projectsTableTeam')}</th>
              <th>{t('projectsTableProgress')}</th>
              <th>{t('projectsTableStatus')}</th>
              <th>{t('projectsTableActions')}</th>
            </tr>
          </thead>
          <tbody id="projectsTableBody">
            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>{t('projectsLoading')}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
