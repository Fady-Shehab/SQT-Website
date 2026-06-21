import { Link } from 'react-router-dom';
import { Icon } from "@/components";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <p className="footer-brand-tagline">
              فريق التكنولوجيا لإدارة شرق — نبني حلولاً تقنية من قلب الإسكندرية،
              بعقول مصرية تُؤمن بأن الإبداع لا حدود له.
            </p>
            <div className="social-row" aria-label="وسائل التواصل الاجتماعي">
              {/* X / Twitter */}
              <a href="#" className="social-a" aria-label="تويتر X">
                <Icon name="twitter" />
              </a>

              {/* Telegram */}
              <a href="#" className="social-a" aria-label="تيليغرام">
                <Icon name="telegram" />
              </a>

              {/* YouTube */}
              <a href="#" className="social-a" aria-label="يوتيوب">
                <Icon name="youtube" />
              </a>

              {/* GitHub */}
              <a href="#" className="social-a" aria-label="جيت هاب">
                <Icon name="github" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="روابط سريعة">
            <div className="foot-col-h">روابط سريعة</div>
            <ul className="foot-links">
              <li><Link to="/" className="foot-link">الرئيسية</Link></li>
              <li><Link to="/team" className="foot-link">الفريق</Link></li>
              <li><Link to="/projects" className="foot-link">المشاريع</Link></li>
              <li><Link to="/blog" className="foot-link">المدونة</Link></li>
              <li><Link to="/hall-of-fame" className="foot-link">قاعة المجد</Link></li>
            </ul>
          </nav>

          {/* Other */}
          <nav aria-label="روابط أخرى">
            <div className="foot-col-h">أخرى</div>
            <ul className="foot-links">
              <li><Link to="/auth" className="foot-link">تسجيل الدخول</Link></li>
              <li><a href="#" className="foot-link">تواصل معنا</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="foot-copy">© 2026 شرق تك — جميع الحقوق محفوظة</p>
        </div>
      </div>
      <div className="footer-stripe" aria-hidden="true"></div>
    </footer>
  );
}
