import { Link } from 'react-router-dom';
import { Icon } from "@/components";

export default function BreadcrumbBar() {
  return (
    <div id="crumb-bar">
      <div className="container">
        <nav className="breadcrumb" aria-label="مسار التنقل">
          <Link to="/">الرئيسية</Link>
          <Icon name="chevron-left" />
          <Link to="/projects">المشاريع</Link>
          <Icon name="chevron-left" />
          <span className="current" id="crumbTitle">جارٍ التحميل...</span>
        </nav>
      </div>
    </div>
  );
}
