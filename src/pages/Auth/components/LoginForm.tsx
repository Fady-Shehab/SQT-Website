import { t } from "@/utils/strings";
import { Icon } from "@/components";

export default function LoginForm() {
  return (
    <form id="form-login" className="auth-form active" aria-label={t('loginFormAria')}>
      <div className="form-row">
        <div className="form-field full">
          <label className="field-label" htmlFor="loginEmail">{t('loginEmailLabel')}</label>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="mail" />
            </span>
            <input
              type="email" id="loginEmail" name="email"
              className="field-input"
              placeholder={t('loginEmailPlaceholder')}
              autoComplete="email"
              required
            />
          </div>
          <span className="field-error" id="loginEmailError" role="alert"></span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field full">
          <div className="field-header">
            <label className="field-label" htmlFor="loginPassword">{t('loginPasswordLabel')}</label>
            <a href="#!" id="toForgot" className="forgot-link" onClick={(e) => e.preventDefault()}>{t('loginForgotLink')}</a>
          </div>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="lock" />
            </span>
            <input
              type="password" id="loginPassword" name="password"
              className="field-input"
              placeholder={t('loginPasswordPlaceholder')}
              autoComplete="current-password"
              required
            />
            <button type="button" className="toggle-password" aria-label={t('loginTogglePasswordAria')} data-target="loginPassword">
<Icon name="eye-on" className="eye-on" />
<Icon name="eye-off" className="eye-off" />
            </button>
          </div>
          <span className="field-error" id="loginPasswordError" role="alert"></span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field full">
          <label className="checkbox-wrapper">
            <input type="checkbox" id="loginRemember" name="remember" className="checkbox-input" />
            <span className="checkbox-box" aria-hidden="true"></span>
            <span className="checkbox-label">{t('loginRememberLabel')}</span>
          </label>
        </div>
      </div>

      <div className="form-status" id="loginStatus" role="status" aria-live="polite"></div>

      <button type="submit" className="btn btn-gold submit-btn" id="btn-login">
        <span className="btn-text">{t('loginSubmitBtn')}</span>
        <div className="loader" aria-hidden="true" style={{ display: 'none' }}></div>
      </button>
    </form>
  );
}
