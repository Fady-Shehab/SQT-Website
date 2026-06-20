
export default function AuthPage() {
  return (
    <main id="auth-main">
      <section className="auth-section" aria-labelledby="auth-title">
        <a href="/" className="auth-logo" aria-label="العودة إلى الصفحة الرئيسية">
          <div className="logo-gem" aria-hidden="true"></div>
          <span className="logo-text">شرق تك</span>
        </a>

        <div className="auth-card reveal">
          <div className="auth-headers">
            <h1 id="auth-title" className="auth-title">
              <span id="authTitle">تسجيل الدخول</span>
            </h1>
            <p className="auth-subtitle" id="authSubtitle">
              أدخل بياناتك للوصول إلى حسابك في شرق تك.
            </p>
          </div>

          <div className="form-tabs" role="tablist" aria-label="نموذج الدخول أو التسجيل">
            <button
              className="form-tab active"
              id="tab-login"
              role="tab"
              aria-selected="true"
              aria-controls="form-login"
              data-tab="login"
            >
              دخول
            </button>
            <button
              className="form-tab"
              id="tab-register"
              role="tab"
              aria-selected="false"
              aria-controls="form-register"
              data-tab="register"
            >
              حساب جديد
            </button>
          </div>

          {/* Login Form */}
          <form id="form-login" className="auth-form active" aria-label="نموذج تسجيل الدخول">
            <div className="form-row">
              <div className="form-field full">
                <label className="field-label" htmlFor="loginEmail">البريد الإلكتروني</label>
                <div className="field-wrapper">
                  <span className="field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <input
                    type="email" id="loginEmail" name="email"
                    className="field-input"
                    placeholder="أدخل بريدك الإلكتروني"
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
                  <label className="field-label" htmlFor="loginPassword">كلمة المرور</label>
                  <a href="#!" id="toForgot" className="forgot-link" onClick={(e) => e.preventDefault()}>نسيت؟</a>
                </div>
                <div className="field-wrapper">
                  <span className="field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </span>
                  <input
                    type="password" id="loginPassword" name="password"
                    className="field-input"
                    placeholder="أدخل كلمة المرور"
                    autoComplete="current-password"
                    required
                  />
                  <button type="button" className="toggle-password" aria-label="إظهار/إخفاء كلمة المرور" data-target="loginPassword">
                    <svg viewBox="0 0 24 24" className="eye-on"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <svg viewBox="0 0 24 24" className="eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
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
                  <span className="checkbox-label">تذكرني على هذا الجهاز</span>
                </label>
              </div>
            </div>

            <div className="form-status" id="loginStatus" role="status" aria-live="polite"></div>

            <button type="submit" className="btn btn-gold submit-btn" id="btn-login">
              <span className="btn-text">تسجيل الدخول</span>
              <div className="loader" aria-hidden="true" style={{ display: 'none' }}></div>
            </button>
          </form>

          {/* Register Form */}
          <form id="form-register" className="auth-form" aria-label="نموذج إنشاء حساب جديد">
            <div className="form-row">
              <div className="form-field half">
                <label className="field-label" htmlFor="regFirstName">الاسم الأول</label>
                <div className="field-wrapper">
                  <span className="field-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
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
                    <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
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
                    <svg viewBox="0 0 24 24" className="eye-on"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <svg viewBox="0 0 24 24" className="eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
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
                    <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </span>
                  <input
                    type="password" id="regPasswordConfirm" name="passwordConfirm"
                    className="field-input"
                    placeholder="أعد كتابة كلمة المرور"
                    autoComplete="new-password"
                    required
                  />
                  <button type="button" className="toggle-password" aria-label="إظهار/إخفاء كلمة المرور" data-target="regPasswordConfirm">
                    <svg viewBox="0 0 24 24" className="eye-on"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <svg viewBox="0 0 24 24" className="eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
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
        </div>

        <div className="auth-back">
          <a href="/" className="link-with-arrow">
            <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"></polyline><line x1="21" y1="5" x2="3" y2="5"></line><line x1="7" y1="19" x2="3" y2="19"></line><line x1="21" y1="19" x2="11" y2="19"></line><polyline points="14 15 18 19 14 23"></polyline></svg>
            العودة إلى الموقع
          </a>
        </div>
      </section>
    </main>
  );
}
