import { Link } from 'react-router-dom';
import { t } from "@/utils/strings";

export default function NotFoundPage() {
  return (
    <main id="main-content">
      <section id="not-found">
        <div className="eg-pattern" aria-hidden="true"></div>
        <div className="hero-gems" aria-hidden="true">
          <div className="gem gem-1"></div><div className="gem gem-2"></div><div className="gem gem-3"></div>
          <div className="gem gem-4"></div><div className="gem gem-5"></div>
        </div>

        <div className="not-found-wrap">
          <div className="not-found-code">404</div>
          <h1>{t('notFoundTitle')}</h1>
          <p>{t('notFoundDesc')}</p>
          <Link to="/" className="btn btn-gold" style={{ marginTop:'1.5rem' }}>{t('notFoundBackBtn')}</Link>
        </div>
      </section>
    </main>
  );
}