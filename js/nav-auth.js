(function () {
  'use strict';

  const API_BASE = 'https://sqt-website-backend-production.up.railway.app';

  /* ═══════════════════════════════════════════════════════════
     0. SECURITY UTILITIES
     All DOM output MUST go through these helpers — never use
     innerHTML with dynamic data, never trust user/API values.
  ═══════════════════════════════════════════════════════════ */

  /**
   * Safely set text content on an element — XSS-safe by design.
   * @param {HTMLElement} el
   * @param {string} text
   */
  function setText(el, text) {
    el.textContent = (typeof text === 'string') ? text : String(text ?? '');
  }

  /**
   * Safely set an attribute — prevents attribute-injection XSS.
   * @param {HTMLElement} el
   * @param {string} attr
   * @param {string} value
   */
  function setAttr(el, attr, value) {
    el.setAttribute(attr, (typeof value === 'string') ? value : String(value ?? ''));
  }

  /**
   * Validate and sanitize a URL — only allows http/https.
   * Prevents javascript: protocol and other dangerous schemes.
   * @param {string} url
   * @returns {string} safe URL or empty string
   */
  function safeUrl(url) {
    if (!url || typeof url !== 'string') return '';
    try {
      const u = new URL(url);
      if (u.protocol !== 'https:' && u.protocol !== 'http:') return '';
      return url;
    } catch {
      return '';
    }
  }

  /**
   * Sanitize a numeric ID — prevents path traversal / injection.
   * @param {*} id
   * @returns {number|null}
   */
  function safeId(id) {
    const n = parseInt(id, 10);
    return (!isNaN(n) && n > 0) ? n : null;
  }

  /**
   * Create an SVG element safely without innerHTML.
   * @param {string} path  - SVG path/shape markup (trusted static string only)
   * @returns {SVGElement}
   */
  function makeSvg(pathMarkup) {
    // pathMarkup is always a static string written by us — not user data.
    const ns  = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', '15');
    svg.setAttribute('height', '15');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.style.flexShrink = '0';
    // Static markup — no user data passes through here
    svg.innerHTML = pathMarkup;
    return svg;
  }

  /* ═══════════════════════════════════════════════════════════
     1. READ AUTH DATA
  ═══════════════════════════════════════════════════════════ */
  const token = localStorage.getItem('sharq-token') || sessionStorage.getItem('sharq-token');

  let user = null;
  try {
    const raw = localStorage.getItem('sharq-user') || sessionStorage.getItem('sharq-user');
    if (raw) user = JSON.parse(raw);
  } catch {
    user = null;
  }

  // Not logged in — leave page as-is
  if (!token || !user) return;

  /* ═══════════════════════════════════════════════════════════
     2. CLIENT-SIDE JWT EXPIRY CHECK (UX only — NOT a security
        gate. Real auth verification happens server-side.)
  ═══════════════════════════════════════════════════════════ */
  function clearSession() {
    ['sharq-token', 'sharq-user'].forEach(k => {
      localStorage.removeItem(k);
      sessionStorage.removeItem(k);
    });
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error('malformed');
    const payload = JSON.parse(atob(parts[1]));
    // Expired — clear and bail (server will also reject, this is just UX)
    if (typeof payload.exp === 'number' && payload.exp * 1000 < Date.now()) {
      clearSession();
      return;
    }
  } catch {
    // Malformed token — clear storage
    clearSession();
    return;
  }

  /* ═══════════════════════════════════════════════════════════
     3. REDIRECT LOGGED-IN USER AWAY FROM auth.html
  ═══════════════════════════════════════════════════════════ */
  if (window.location.pathname.endsWith('auth.html')) {
    const uid = safeId(user.id);
    if (uid !== null) {
      // replace() keeps browser history clean
      window.location.replace(`profile.html?id=${uid}`);
    }
    return;
  }

  /* ═══════════════════════════════════════════════════════════
     4. BUILD SECURE NAVBAR UI
     Rule: ZERO dynamic data via innerHTML.
           Every user-supplied value uses textContent / setAttr.
  ═══════════════════════════════════════════════════════════ */
  function init() {
    const navAuth = document.querySelector('.nav-auth');
    if (!navAuth) return;

    const uid        = safeId(user.id);
    const profileUrl = uid !== null ? `profile.html?id=${uid}` : 'profile.html';
    const userName   = (typeof user.name === 'string' && user.name.trim()) ? user.name.trim() : '?';
    const initial    = userName.charAt(0).toUpperCase();
    const isAdmin    = user.role === 'admin'; // binary check — no injection risk

    /* ── Resolve avatar URL safely ──────────────────────── */
    let avatarSrc = '';
    if (user.avatar && typeof user.avatar === 'string') {
      const raw = user.avatar.startsWith('http')
        ? user.avatar
        : `${API_BASE}${user.avatar}`;
      avatarSrc = safeUrl(raw); // rejects javascript: and other bad schemes
    }

    /* ── Inject animation keyframe once (static CSS only) ── */
    if (!document.getElementById('sqt-nav-style')) {
      const style = document.createElement('style');
      style.id = 'sqt-nav-style';
      // No user data here — purely static CSS
      style.textContent = `
        @keyframes sqtMenuIn {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        .sqt-menu-item:hover {
          background: var(--bg-subtle, #1a2744) !important;
          color: var(--text-primary, #EEF2F7) !important;
        }
        #sqt-logout-btn:hover {
          background: var(--error-bg, rgba(239,68,68,0.08)) !important;
          color: var(--error-text, #FCA5A5) !important;
        }
      `;
      document.head.appendChild(style);
    }

    /* ══════════════════════════════════════════════════════
       BUILD DOM ENTIRELY WITH createElement — no innerHTML
       for any element that receives user / API data.
    ══════════════════════════════════════════════════════ */

    /* ── Wrapper ────────────────────────────────────────── */
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;display:flex;align-items:center';

    /* ── Avatar button ──────────────────────────────────── */
    const btn = document.createElement('button');
    btn.id = 'sqt-nav-btn';
    setAttr(btn, 'aria-label', 'قائمة المستخدم');
    setAttr(btn, 'aria-haspopup', 'true');
    setAttr(btn, 'aria-expanded', 'false');
    btn.style.cssText = `
      width:40px;height:40px;border-radius:50%;padding:0;
      border:2px solid rgba(201,168,76,0.45);
      background:var(--bg-subtle,#1a2744);
      cursor:pointer;overflow:hidden;
      display:flex;align-items:center;justify-content:center;
      transition:border-color 0.2s ease,box-shadow 0.2s ease;
      flex-shrink:0;
    `;

    /* ── Initials span (always created; hidden if avatar loads) */
    const initialsSpan = document.createElement('span');
    initialsSpan.id = 'sqt-nav-initials';
    initialsSpan.style.cssText = `
      display:${avatarSrc ? 'none' : 'flex'};
      font-size:1rem;font-weight:900;
      color:var(--text-primary,#EEF2F7);
      width:100%;height:100%;
      align-items:center;justify-content:center;
    `;
    setText(initialsSpan, initial); // ← textContent: XSS-safe

    btn.appendChild(initialsSpan);

    /* ── Avatar <img> (only if URL passed safeUrl()) ─────── */
    if (avatarSrc) {
      const img = document.createElement('img');
      img.id = 'sqt-nav-avatar-img';
      setAttr(img, 'src', avatarSrc);      // ← validated URL
      setAttr(img, 'alt', userName);       // ← setAttr: escaped
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block';

      // Use addEventListener — NOT inline onerror — avoids CSP violations
      img.addEventListener('error', () => {
        img.style.display       = 'none';
        initialsSpan.style.display = 'flex';
      });

      btn.insertBefore(img, initialsSpan);
    }

    /* ── Dropdown menu ──────────────────────────────────── */
    const menu = document.createElement('div');
    menu.id = 'sqt-nav-menu';
    setAttr(menu, 'role', 'menu');
    setAttr(menu, 'aria-label', 'قائمة المستخدم');
    menu.style.cssText = `
      display:none;position:absolute;
      top:calc(100% + 12px);right:-75px;
      min-width:190px;
      background:var(--bg-card,#131F35);
      border:1px solid var(--border-mid,rgba(255,255,255,0.09));
      border-radius:14px;padding:8px;
      box-shadow:0 16px 48px rgba(0,0,0,0.55);
      z-index:9999;animation:sqtMenuIn 0.18s ease;
    `;

    /* ── User info header ───────────────────────────────── */
    const header = document.createElement('div');
    header.style.cssText = `
      padding:10px 12px;
      border-bottom:1px solid var(--border-subtle,rgba(255,255,255,0.05));
      margin-bottom:6px;
    `;

    const nameDiv = document.createElement('div');
    nameDiv.style.cssText = `
      font-size:0.85rem;font-weight:800;
      color:var(--text-primary,#EEF2F7);
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    `;
    setText(nameDiv, userName); // ← textContent: XSS-safe ✅

    const roleDiv = document.createElement('div');
    roleDiv.style.cssText = 'font-size:0.72rem;margin-top:3px;color:var(--gold,#C9A84C);';
    setText(roleDiv, isAdmin ? 'مشرف' : 'عضو'); // ← binary — safe ✅

    header.appendChild(nameDiv);
    header.appendChild(roleDiv);
    menu.appendChild(header);

    /* ── Profile link ───────────────────────────────────── */
    const profileLink = document.createElement('a');
    setAttr(profileLink, 'href', profileUrl); // ← safeId-validated
    setAttr(profileLink, 'role', 'menuitem');
    profileLink.className = 'sqt-menu-item';
    profileLink.style.cssText = `
      display:flex;align-items:center;gap:9px;
      padding:9px 12px;border-radius:9px;
      font-size:0.83rem;font-weight:600;
      color:var(--text-secondary,#94A3B8);
      text-decoration:none;
      transition:background 0.15s ease,color 0.15s ease;
    `;

    profileLink.appendChild(makeSvg(
      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
    ));

    const profileLabel = document.createElement('span');
    setText(profileLabel, 'ملفي الشخصي');
    profileLink.appendChild(profileLabel);
    menu.appendChild(profileLink);

    /* ── Logout button ──────────────────────────────────── */
    const logoutBtn = document.createElement('button');
    logoutBtn.id = 'sqt-logout-btn';
    setAttr(logoutBtn, 'role', 'menuitem');
    logoutBtn.className = 'sqt-menu-item';
    logoutBtn.style.cssText = `
      width:100%;display:flex;align-items:center;gap:9px;
      padding:9px 12px;border-radius:9px;
      font-size:0.83rem;font-weight:600;
      color:var(--error-text,#FCA5A5);
      background:none;border:none;cursor:pointer;
      font-family:inherit;direction:rtl;text-align:right;
      transition:background 0.15s ease;
    `;

    logoutBtn.appendChild(makeSvg(
      '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>' +
      '<polyline points="16 17 21 12 16 7"/>' +
      '<line x1="21" y1="12" x2="9" y2="12"/>'
    ));

    const logoutLabel = document.createElement('span');
    setText(logoutLabel, 'تسجيل الخروج');
    logoutBtn.appendChild(logoutLabel);
    menu.appendChild(logoutBtn);

    /* ── Assemble ───────────────────────────────────────── */
    wrapper.appendChild(btn);
    wrapper.appendChild(menu);

    /* ═══════════════════════════════════════════════════════
       5. EVENT LISTENERS
    ═══════════════════════════════════════════════════════ */

    /* ── Toggle dropdown ────────────────────────────────── */
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
      setAttr(btn, 'aria-expanded', String(!isOpen));
    });

    /* ── Close on outside click ─────────────────────────── */
    document.addEventListener('click', () => {
      menu.style.display = 'none';
      setAttr(btn, 'aria-expanded', 'false');
    });

    /* ── Close on Escape ────────────────────────────────── */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.style.display = 'none';
        setAttr(btn, 'aria-expanded', 'false');
        btn.focus();
      }
    });

    /* ── Avatar button hover ────────────────────────────── */
    btn.addEventListener('mouseenter', () => {
      btn.style.borderColor = 'rgba(201,168,76,0.8)';
      btn.style.boxShadow   = '0 0 0 3px rgba(201,168,76,0.12)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.borderColor = 'rgba(201,168,76,0.45)';
      btn.style.boxShadow   = '';
    });

    /* ── Logout ─────────────────────────────────────────── */
    logoutBtn.addEventListener('click', () => {
      clearSession();
      window.location.href = 'auth.html';
    });

    /* ── Inject into page ───────────────────────────────── */
    navAuth.replaceWith(wrapper);
  }

  /* ═══════════════════════════════════════════════════════════
     6. RUN AFTER DOM IS READY
  ═══════════════════════════════════════════════════════════ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
