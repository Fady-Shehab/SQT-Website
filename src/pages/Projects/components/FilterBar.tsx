import { Icon } from "@/components";

export default function FilterBar() {
  return (
    <div id="filter-bar" role="search" aria-label="تصفية المشاريع">
      <div className="container">
        <div className="filter-inner">
          <div className="filter-chips" role="group" aria-label="تصفية حسب الحالة">
            <button className="chip active" data-filter="all">الكل</button>
            <button className="chip" data-filter="active">نشط</button>
            <button className="chip" data-filter="completed">مكتمل</button>
            <button className="chip" data-filter="in-progress">قيد التطوير</button>
          </div>
          <div className="filter-search">
            <Icon name="search" />
            <input
              type="search"
              className="search-input"
              id="searchInput"
              placeholder="ابحث عن مشروع..."
              aria-label="البحث في المشاريع"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
