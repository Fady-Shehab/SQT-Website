import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function PostsSection() {
  return (
    <div id="posts" className="content-section">
      <div className="section-toolbar">
        <div className="toolbar-left">
          <select id="postsFilter" className="select-input">
            <option value="all">{t('postsFilterAll')}</option>
            <option value="published">{t('postsFilterPublished')}</option>
            <option value="draft">{t('postsFilterDraft')}</option>
          </select>
        </div>
        <button className="btn btn-gold" id="addPostBtn">
          <Icon name="plus" size={16} />
          {t('postsNewPost')}
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t('postsTableTitle')}</th>
              <th>{t('postsTableAuthor')}</th>
              <th>{t('postsTableDate')}</th>
              <th>{t('postsTableStatus')}</th>
              <th>{t('postsTableActions')}</th>
            </tr>
          </thead>
          <tbody id="postsTableBody">
            <tr><td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>{t('postsLoading')}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
