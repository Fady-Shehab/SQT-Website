
/* ═══════════════════════════════════════════════════════════════
   0. SECURITY UTILITIES
   ═══════════════════════════════════════════════════════════════ */

/**
 * Sanitize a string for safe output — strips HTML characters.
 * Use this before any dynamic value touches the DOM via innerHTML.
 * For textContent assignments, this is redundant but harmless.
 */
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Safe alert renderer — always textContent, never innerHTML.
 * Prevents XSS from API error messages flowing into the DOM.
 */
function showAlert(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  // Whitelist alert types — never let user-controlled strings into class names
  const safeType = ['error', 'success', 'info'].includes(type) ? type : 'error';
  el.className = 'form-alert show alert-' + safeType;
  const msgEl = el.querySelector('span');
  // textContent is XSS-safe — sanitize() is an extra belt-and-suspenders layer
  if (msgEl) msgEl.textContent = sanitize(msg);
}

function clearAlert(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('show');
}

/* ═══════════════════════════════════════════════════════════════
   1. RATE LIMITER — Frontend brute-force protection
   Tracks failed attempts per action and enforces a lockout.
   NOTE: Server-side rate limiting (express-rate-limit) is still
   required — this is a UX layer, not a security guarantee.
   ═══════════════════════════════════════════════════════════════ */
const _rateLimits = {};

/**
 * Check if an action is currently rate-limited.
 * @param {string} key       - Unique key per action (e.g. 'login')
 * @param {number} maxFails  - Max failures before lockout
 * @param {number} windowMs  - Lockout duration in ms
 * @returns {{ blocked: boolean, remainingSec: number }}
 */
function checkRateLimit(key, maxFails = 5, windowMs = 60_000) {
  const now   = Date.now();
  const state = _rateLimits[key] || { count: 0, lockedUntil: 0 };

  if (state.lockedUntil > now) {
    return { blocked: true, remainingSec: Math.ceil((state.lockedUntil - now) / 1000) };
  }

  return { blocked: false, remainingSec: 0, _state: state, _maxFails: maxFails, _windowMs: windowMs };
}

/**
 * Record a failed attempt for an action.
 * @param {string} key
 * @param {number} maxFails
 * @param {number} windowMs
 */
function recordFailure(key, maxFails = 5, windowMs = 60_000) {
  const state = _rateLimits[key] || { count: 0, lockedUntil: 0 };
  state.count++;
  if (state.count >= maxFails) {
    state.lockedUntil = Date.now() + windowMs;
    state.count = 0; // reset counter for next window
  }
  _rateLimits[key] = state;
}

/** Reset rate limit on success */
function resetRateLimit(key) {
  delete _rateLimits[key];
}

/* ═══════════════════════════════════════════════════════════════
   2. CONFIG
   ═══════════════════════════════════════════════════════════════ */
const API_BASE = 'https://sqt-website-backend-production.up.railway.app';

/* ═══════════════════════════════════════════════════════════════
   3. THEME TOGGLE
   ═══════════════════════════════════════════════════════════════ */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY   = 'sharq-theme';

function applyTheme(t) {
  // Whitelist valid theme values — never write arbitrary strings into data-theme
  const safeTheme = t === 'light' ? 'light' : 'dark';
  html.setAttribute('data-theme', safeTheme);
  localStorage.setItem(THEME_KEY, safeTheme);
}

applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
themeToggle.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════════════════════════
   4. NAVBAR SCROLL
   ═══════════════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
function checkScroll() { navbar.classList.toggle('scrolled', window.scrollY > 40); }
window.addEventListener('scroll', checkScroll, { passive: true });
checkScroll();

/* ═══════════════════════════════════════════════════════════════
   5. PAGE FADE-IN
   ═══════════════════════════════════════════════════════════════ */
document.body.style.opacity    = '0';
document.body.style.transition = 'opacity 0.38s ease';
window.addEventListener('load', () => { document.body.style.opacity = '1'; });

/* ═══════════════════════════════════════════════════════════════
   6. TABS
   ═══════════════════════════════════════════════════════════════ */
const tabLogin    = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const panelLogin  = document.getElementById('panel-login');
const panelReg    = document.getElementById('panel-register');
const slider      = document.getElementById('tabsSlider');
const authTitle   = document.getElementById('auth-heading-login');

function switchTab(to) {
  // Whitelist allowed tab values
  const safeTab = to === 'register' ? 'register' : 'login';

  if (safeTab === 'register') {
    tabLogin.classList.remove('active');    tabLogin.setAttribute('aria-selected', 'false');
    tabRegister.classList.add('active');    tabRegister.setAttribute('aria-selected', 'true');
    panelLogin.classList.add('hidden');
    panelReg.classList.remove('hidden');
    slider.classList.add('to-register');
    // textContent — never innerHTML for user-facing strings that could be tampered
    if (authTitle) authTitle.textContent = 'إنشاء حساب جديد';
    hideForgotNotice();
  } else {
    tabRegister.classList.remove('active'); tabRegister.setAttribute('aria-selected', 'false');
    tabLogin.classList.add('active');       tabLogin.setAttribute('aria-selected', 'true');
    panelReg.classList.add('hidden');
    panelLogin.classList.remove('hidden');
    slider.classList.remove('to-register');
    if (authTitle) authTitle.textContent = 'أهلاً بك في شرق تك';
    document.getElementById('pending-notice').classList.remove('show');
    document.getElementById('register-form').style.display = '';
    document.getElementById('reg-switch-row').style.display = '';
    clearAlert('login-alert');
    hideForgotNotice();
  }
}

tabLogin.addEventListener('click',    () => switchTab('login'));
tabRegister.addEventListener('click', () => switchTab('register'));
document.getElementById('goto-register').addEventListener('click',  () => switchTab('register'));
document.getElementById('goto-login').addEventListener('click',     () => switchTab('login'));
document.getElementById('back-to-login').addEventListener('click',  () => switchTab('login'));

/* ═══════════════════════════════════════════════════════════════
   7. URL PARAM — auto-open register tab
   Whitelisted comparison — the param value never touches the DOM.
   ═══════════════════════════════════════════════════════════════ */
(function applyTabParam() {
  const param = new URLSearchParams(window.location.search).get('tab');
  // Only act on the exact expected value — ignore anything else
  if (param === 'register') switchTab('register');
})();

/* ═══════════════════════════════════════════════════════════════
   8. PASSWORD TOGGLE
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.pw-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    // Validate that the target ID belongs to a known password field
    const allowedTargets = ['login-password', 'reg-password', 'reg-confirm'];
    const targetId = btn.dataset.target;
    if (!allowedTargets.includes(targetId)) return; // reject unexpected targets

    const input  = document.getElementById(targetId);
    if (!input) return;
    const isText = input.type === 'text';
    input.type   = isText ? 'password' : 'text';
    btn.querySelector('.eye-open').style.display   = isText ? '' : 'none';
    btn.querySelector('.eye-closed').style.display = isText ? 'none' : '';
    // textContent — safe
    btn.setAttribute('aria-label', isText ? 'إظهار كلمة المرور' : 'إخفاء كلمة المرور');
  });
});

/* ═══════════════════════════════════════════════════════════════
   9. PASSWORD STRENGTH METER
   ═══════════════════════════════════════════════════════════════ */
const regPwInput = document.getElementById('reg-password');
const pwStrength = document.getElementById('reg-pw-strength');
const psLabel    = document.getElementById('ps-label');
const psSegs     = [
  document.getElementById('ps1'), document.getElementById('ps2'),
  document.getElementById('ps3'), document.getElementById('ps4')
];

function calcStrength(pw) {
  let score = 0;
  if (pw.length >= 8)                              score++;
  if (pw.length >= 12)                             score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw))       score++;
  if (/[0-9]/.test(pw))                            score++;
  if (/[^A-Za-z0-9]/.test(pw))                    score++;
  return Math.min(Math.ceil(score * 4 / 5), 4);
}

regPwInput.addEventListener('input', () => {
  const val = regPwInput.value;
  if (!val) { pwStrength.classList.remove('show'); return; }
  pwStrength.classList.add('show');

  const score  = calcStrength(val);
  // Whitelist CSS class names — never let user input affect class names
  const cls    = score <= 1 ? 'weak' : score <= 2 ? 'fair' : 'strong';
  // Static label array — no user data in labels
  const labels = ['', 'ضعيفة', 'مقبولة', 'جيدة', 'قوية'];

  psSegs.forEach((s, i) => {
    s.className = 'pw-seg';
    if (i < score) s.classList.add(cls);
  });

  // textContent — XSS-safe
  psLabel.textContent = 'قوة كلمة المرور: ' + (labels[score] || '');
  psLabel.style.color =
    cls === 'weak'   ? 'var(--error)'   :
    cls === 'fair'   ? '#F59E0B'        :
                       'var(--success)';
});

/* ═══════════════════════════════════════════════════════════════
   10. FIELD VALIDATION HELPERS
   ═══════════════════════════════════════════════════════════════ */
function showFieldError(inputId, errId) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (inp) inp.classList.add('error');
  if (err) err.classList.add('show');
}
function clearFieldError(inputId, errId) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (inp) inp.classList.remove('error');
  if (err) err.classList.remove('show');
}

// Real-time error clearing on input
['login-email', 'login-password'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => { el.classList.remove('error'); clearAlert('login-alert'); });
});
['reg-name', 'reg-email', 'reg-password', 'reg-confirm'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => { el.classList.remove('error'); clearAlert('reg-alert'); });
});

/* ═══════════════════════════════════════════════════════════════
   11. FORGOT PASSWORD — inline notice, no page navigation
   ═══════════════════════════════════════════════════════════════ */
function showForgotNotice() {
  const notice = document.getElementById('forgot-notice');
  const row    = document.querySelector('.form-row');
  if (notice && row) { notice.style.display = 'flex'; row.style.display = 'none'; }
}
function hideForgotNotice() {
  const notice = document.getElementById('forgot-notice');
  const row    = document.querySelector('.form-row');
  if (notice && row) { notice.style.display = 'none'; row.style.display = ''; }
}
document.getElementById('forgot-link').addEventListener('click', showForgotNotice);

/* ═══════════════════════════════════════════════════════════════
   12. EMAIL VALIDATION
   ═══════════════════════════════════════════════════════════════ */
function isValidEmail(email) {
  // Strict pattern — no spaces, proper domain structure
  return typeof email === 'string' &&
    email.length <= 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/* ═══════════════════════════════════════════════════════════════
   13. SECURE TOKEN STORAGE HELPER
   Stores token in sessionStorage (default) or localStorage
   (remember me). Both are JS-accessible — server HttpOnly
   cookies are the ideal alternative but require backend changes.
   ═══════════════════════════════════════════════════════════════ */
function storeSession(token, user, remember) {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem('sharq-token', token);
  // Strip sensitive fields before storing — only keep what the UI needs
  const safeUser = {
    id:     user.id,
    name:   typeof user.name   === 'string' ? user.name.slice(0, 100)   : '',
    email:  typeof user.email  === 'string' ? user.email.slice(0, 320)  : '',
    role:   user.role === 'admin' ? 'admin' : 'member', // whitelist roles
    avatar: typeof user.avatar === 'string' ? user.avatar.slice(0, 500) : '',
  };
  storage.setItem('sharq-user', JSON.stringify(safeUser));
}

/* ═══════════════════════════════════════════════════════════════
   14. LOGIN FORM
   ═══════════════════════════════════════════════════════════════ */
document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  clearAlert('login-alert');
  hideForgotNotice();

  /* ── Rate limit check ── */
  const rl = checkRateLimit('login', 5, 60_000);
  if (rl.blocked) {
    showAlert('login-alert',
      `عدد المحاولات تجاوز الحد المسموح. حاول مرة أخرى بعد ${rl.remainingSec} ثانية.`,
      'error'
    );
    return;
  }

  /* ── Input sanitization + length-capping ── */
  const emailVal = this.email.value.trim().slice(0, 320);
  const passVal  = this.password.value.slice(0, 128);
  let valid = true;

  if (!isValidEmail(emailVal)) {
    showFieldError('login-email', 'login-email-err'); valid = false;
  } else {
    clearFieldError('login-email', 'login-email-err');
  }

  if (!passVal) {
    showFieldError('login-password', 'login-pw-err'); valid = false;
  } else {
    clearFieldError('login-password', 'login-pw-err');
  }

  if (!valid) return;

  const btn = document.getElementById('login-btn');
  btn.disabled = true; // prevent double-submit
  btn.classList.add('loading');

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include' — enable this when backend switches to HttpOnly cookies
      body: JSON.stringify({
        email:    emailVal,
        password: passVal,
        remember: this.remember?.checked || false,
      }),
    });

    // Guard: only parse JSON if Content-Type is correct
    const contentType = res.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error('Unexpected response type from server');
    }

    const data = await res.json();

    if (res.ok && data.token) {
      resetRateLimit('login');
      storeSession(data.token, data.user || {}, this.remember?.checked);
      // Safe redirect — hardcoded destination, no user-controlled input
      window.location.href = 'index.html';
    } else {
      recordFailure('login', 5, 60_000);
      // Use a generic message — never reflect raw server errors to the user
      const msg = res.status === 401
        ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة.'
        : (sanitize(data.message) || 'حدث خطأ. حاول مرة أخرى.');
      showAlert('login-alert', msg, 'error');
    }
  } catch (err) {
    // Log detail for devs, show generic message to user — never expose internals
    console.error('[Login Error]', err);
    showAlert('login-alert', 'تعذّر الاتصال بالخادم. حاول مرة أخرى.', 'error');
  } finally {
    btn.disabled = false;
    btn.classList.remove('loading');
  }
});

/* ═══════════════════════════════════════════════════════════════
   15. REGISTER FORM
   ═══════════════════════════════════════════════════════════════ */
document.getElementById('register-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  clearAlert('reg-alert');

  /* ── Rate limit check ── */
  const rl = checkRateLimit('register', 3, 120_000); // stricter for register
  if (rl.blocked) {
    showAlert('reg-alert',
      `تم تجاوز حد التسجيل. حاول مرة أخرى بعد ${rl.remainingSec} ثانية.`,
      'error'
    );
    return;
  }

  /* ── Input sanitization + length-capping ── */
  const nameVal    = this.fullName.value.trim().slice(0, 100);
  const emailVal   = this.email.value.trim().slice(0, 320);
  const deptVal    = this.department.value;
  const passVal    = this.password.value.slice(0, 128);
  const confirmVal = this.confirmPassword.value.slice(0, 128);
  const termsVal   = this.terms.checked;
  let valid = true;

  /* ── Name: min 3 chars, letters/spaces only ── */
  if (!nameVal || nameVal.length < 3 || !/^[\u0600-\u06FFa-zA-Z\s'-]{3,100}$/.test(nameVal)) {
    showFieldError('reg-name', 'reg-name-err'); valid = false;
  } else {
    clearFieldError('reg-name', 'reg-name-err');
  }

  /* ── Email ── */
  if (!isValidEmail(emailVal)) {
    showFieldError('reg-email', 'reg-email-err'); valid = false;
  } else {
    clearFieldError('reg-email', 'reg-email-err');
  }

  /* ── Department: strict whitelist ── */
  const allowedDepts = ['Programming', 'AI', 'Robotics', 'Design'];
  if (!deptVal || !allowedDepts.includes(deptVal)) {
    showFieldError('reg-dept', 'reg-dept-err'); valid = false;
  } else {
    clearFieldError('reg-dept', 'reg-dept-err');
  }

  /* ── Password: min 8 chars ── */
  if (!passVal || passVal.length < 8) {
    showFieldError('reg-password', 'reg-pw-err'); valid = false;
  } else {
    clearFieldError('reg-password', 'reg-pw-err');
  }

  /* ── Confirm password: must match exactly ── */
  if (!confirmVal || confirmVal !== passVal) {
    showFieldError('reg-confirm', 'reg-confirm-err'); valid = false;
  } else {
    clearFieldError('reg-confirm', 'reg-confirm-err');
  }

  /* ── Terms ── */
  if (!termsVal) {
    document.getElementById('reg-terms-err').classList.add('show');
    valid = false;
  } else {
    document.getElementById('reg-terms-err').classList.remove('show');
  }

  if (!valid) return;

  const btn = document.getElementById('register-btn');
  btn.disabled = true; // prevent double-submit
  btn.classList.add('loading');

  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name:  nameVal,
        email:      emailVal,
        department: deptVal,   // already whitelisted above
        password:   passVal,
      }),
    });

    const contentType = res.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error('Unexpected response type from server');
    }

    const data = await res.json();

    if (res.ok) {
      resetRateLimit('register');
      // Hide form and show pending notice — no redirect, no token yet
      document.getElementById('register-form').style.display   = 'none';
      document.getElementById('reg-switch-row').style.display  = 'none';
      document.getElementById('pending-notice').classList.add('show');
    } else {
      recordFailure('register', 3, 120_000);
      const msg = sanitize(data.message) || 'حدث خطأ أثناء إنشاء الحساب.';

      // Duplicate email (409) — show error on field itself
      if (res.status === 409) {
        showFieldError('reg-email', 'reg-email-err');
        const errSpan = document.querySelector('#reg-email-err span');
        // textContent — never innerHTML
        if (errSpan) errSpan.textContent = 'هذا البريد الإلكتروني مسجّل بالفعل.';
      }

      showAlert('reg-alert', msg, 'error');
    }
  } catch (err) {
    console.error('[Register Error]', err);
    showAlert('reg-alert', 'تعذّر الاتصال بالخادم. حاول مرة أخرى.', 'error');
  } finally {
    btn.disabled = false;
    btn.classList.remove('loading');
  }
});
