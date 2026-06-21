import { Icon } from "@/components";

export default function RegisterForm() {
  return (
    <form id="form-register" className="auth-form" aria-label="نموذج إنشاء حساب جديد">
      <div className="form-row">
        <div className="form-field half">
          <label className="field-label" htmlFor="regFirstName">الاسم الأول</label>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="user" />
            </span>
            <input
              type="text" id="regFirstName" name="firstName"
              className="field-input"
              placeholder="الاسم"
              autoComplete="given-name"
              required
            />
          </div>
          <span className="field-error" id="regFirstNameError" role="alert"></span>
        </div>
        <div className="form-field half">
          <label className="field-label" htmlFor="regLastName">اسم العائلة</label>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="user" />
            </span>
            <input
              type="text" id="regLastName" name="lastName"
              className="field-input"
              placeholder="العائلة"
              autoComplete="family-name"
              required
            />
          </div>
          <span className="field-error" id="regLastNameError" role="alert"></span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field full">
          <label className="field-label" htmlFor="regEmail">البريد الإلكتروني</label>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="mail" />
            </span>
            <input
              type="email" id="regEmail" name="email"
              className="field-input"
              placeholder="أدخل بريدك الإلكتروني"
              autoComplete="email"
              required
            />
          </div>
          <span className="field-error" id="regEmailError" role="alert"></span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field full">
          <label className="field-label" htmlFor="regPassword">كلمة المرور</label>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="lock" />
            </span>
            <input
              type="password" id="regPassword" name="password"
              className="field-input"
              placeholder="كلمة مرور قوية (8 أحرف على الأقل)"
              autoComplete="new-password"
              required
              minLength={8}
            />
            <button type="button" className="toggle-password" aria-label="إظهار/إخفاء كلمة المرور" data-target="regPassword">
<Icon name="eye-on" className="eye-on" />
<Icon name="eye-off" className="eye-off" />
            </button>
          </div>
          <span className="field-error" id="regPasswordError" role="alert"></span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field full">
          <label className="field-label" htmlFor="regPasswordConfirm">تأكيد كلمة المرور</label>
          <div className="field-wrapper">
            <span className="field-icon" aria-hidden="true">
<Icon name="lock" />
            </span>
            <input
              type="password" id="regPasswordConfirm" name="passwordConfirm"
              className="field-input"
              placeholder="أعد كتابة كلمة المرور"
              autoComplete="new-password"
              required
            />
            <button type="button" className="toggle-password" aria-label="إظهار/إخفاء كلمة المرور" data-target="regPasswordConfirm">
<Icon name="eye-on" className="eye-on" />
<Icon name="eye-off" className="eye-off" />
            </button>
          </div>
          <span className="field-error" id="regPasswordConfirmError" role="alert"></span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-field full">
          <label className="checkbox-wrapper">
            <input type="checkbox" id="regTerms" name="terms" className="checkbox-input" required />
            <span className="checkbox-box" aria-hidden="true"></span>
            <span className="checkbox-label">أوافق على <a href="#!" onClick={(e) => e.preventDefault()}>الشروط والأحكام</a></span>
          </label>
        </div>
      </div>

      <div className="form-status" id="registerStatus" role="status" aria-live="polite"></div>

      <button type="submit" className="btn btn-gold submit-btn" id="btn-register">
        <span className="btn-text">إنشاء حساب</span>
        <div className="loader" aria-hidden="true" style={{ display: 'none' }}></div>
      </button>
    </form>
  );
}
