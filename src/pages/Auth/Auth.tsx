import { t } from "@/utils/strings";
import { Icon } from "@/components";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function AuthPage() {
  return (
    <main id="auth-main">
      <section className="auth-section" aria-labelledby="auth-title">
        <a href="/" className="auth-logo" aria-label={t('authBackToHome')}>
          <div className="logo-gem" aria-hidden="true"></div>
          <span className="logo-text">{t('authLogoText')}</span>
        </a>

        <div className="auth-card reveal">
          <div className="auth-headers">
            <h1 id="auth-title" className="auth-title">
              <span id="authTitle">{t('authLoginTitle')}</span>
            </h1>
            <p className="auth-subtitle" id="authSubtitle">
              {t('authLoginSubtitle')}
            </p>
          </div>

          <div className="form-tabs" role="tablist" aria-label={t('authFormTabsAria')}>
            <button className="form-tab active" id="tab-login" role="tab" aria-selected="true" aria-controls="form-login" data-tab="login">
              {t('authTabLogin')}
            </button>
            <button className="form-tab" id="tab-register" role="tab" aria-selected="false" aria-controls="form-register" data-tab="register">
              {t('authTabRegister')}
            </button>
          </div>

          <LoginForm />
          <RegisterForm />
        </div>

        <div className="auth-back">
          <a href="/" className="link-with-arrow">
<Icon name="corner-up-left" />
            {t('authBackToSite')}
          </a>
        </div>
      </section>
    </main>
  );
}
