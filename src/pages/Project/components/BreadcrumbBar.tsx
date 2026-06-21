import { t } from "@/utils/strings";
import { Link } from 'react-router-dom';
import { Icon } from "@/components";

export default function BreadcrumbBar() {
  return (
    <div id="crumb-bar">
      <div className="container">
        <nav className="breadcrumb" aria-label={t('breadcrumbBarLabel')}>
          <Link to="/">{t('breadcrumbBarHome')}</Link>
          <Icon name="chevron-left" />
          <Link to="/projects">{t('breadcrumbBarProjects')}</Link>
          <Icon name="chevron-left" />
          <span className="current" id="crumbTitle">{t('breadcrumbBarLoading')}</span>
        </nav>
      </div>
    </div>
  );
}
