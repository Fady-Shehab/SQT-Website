import { t } from "@/utils/strings";
import { Icon } from "@/components";

export default function FilterBar() {
  return (
    <div id="filter-bar" role="search" aria-label={t('filterBarLabel')}>
      <div className="container">
        <div className="filter-inner">
          <div className="filter-chips" role="group" aria-label={t('filterByStatus')}>
            <button className="chip active" data-filter="all">{t('filterAll')}</button>
            <button className="chip" data-filter="active">{t('filterActive')}</button>
            <button className="chip" data-filter="completed">{t('filterCompleted')}</button>
            <button className="chip" data-filter="in-progress">{t('filterInProgress')}</button>
          </div>
          <div className="filter-search">
            <Icon name="search" />
            <input
              type="search"
              className="search-input"
              id="searchInput"
              placeholder={t('filterSearchPlaceholder')}
              aria-label={t('filterSearchAria')}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
