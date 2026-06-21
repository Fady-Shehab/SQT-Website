import { Link } from 'react-router-dom';
import { Icon } from "@/components";
import { t } from "@/utils/strings";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <p className="footer-brand-tagline">
              {t('footerTagline')}
            </p>
            <div className="social-row" aria-label={t('footerSocialLabel')}>
              {/* X / Twitter */}
              <a href="#" className="social-a" aria-label={t('footerTwitter')}>
                <Icon name="twitter" />
              </a>

              {/* Telegram */}
              <a href="#" className="social-a" aria-label={t('footerTelegram')}>
                <Icon name="telegram" />
              </a>

              {/* YouTube */}
              <a href="#" className="social-a" aria-label={t('footerYoutube')}>
                <Icon name="youtube" />
              </a>

              {/* GitHub */}
              <a href="#" className="social-a" aria-label={t('footerGithub')}>
                <Icon name="github" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label={t('footerQuickLinks')}>
            <div className="foot-col-h">{t('footerQuickLinks')}</div>
            <ul className="foot-links">
              <li><Link to="/" className="foot-link">{t('navHome')}</Link></li>
              <li><Link to="/team" className="foot-link">{t('navTeam')}</Link></li>
              <li><Link to="/projects" className="foot-link">{t('navProjects')}</Link></li>
              <li><Link to="/blog" className="foot-link">{t('navBlog')}</Link></li>
              <li><Link to="/hall-of-fame" className="foot-link">{t('navHallOfFame')}</Link></li>
            </ul>
          </nav>

          {/* Other */}
          <nav aria-label={t('footerOtherLinks')}>
            <div className="foot-col-h">{t('footerOther')}</div>
            <ul className="foot-links">
              <li><Link to="/auth" className="foot-link">{t('navLogin')}</Link></li>
              <li><a href="#" className="foot-link">{t('footerContactUs')}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="foot-copy">{t('footerCopyRight')}</p>
        </div>
      </div>
      <div className="footer-stripe" aria-hidden="true"></div>
    </footer>
  );
}
