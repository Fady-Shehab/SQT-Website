import { Link } from 'react-router-dom';

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
          <h1>الصفحة غير موجودة</h1>
          <p>ربما أُزيلت الصفحة، أو أن الرابط غير صحيح.</p>
          <Link to="/" className="btn btn-gold" style={{ marginTop:'1.5rem' }}>العودة للرئيسية</Link>
        </div>
      </section>
    </main>
  );
}