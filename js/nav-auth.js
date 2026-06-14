(function () {
  'use strict';

  const API_BASE = 'https://sqt-website-backend-production.up.railway.app/api';

  /* ─── Read auth data from storage ───────────────────────── */
  const token = localStorage.getItem('sharq-token') || sessionStorage.getItem('sharq-token');
  const user  = JSON.parse(
    localStorage.getItem('sharq-user') || sessionStorage.getItem('sharq-user') || 'null'
  );

  // Not logged in — leave the login button as is
  if (!token || !user) return;

  // Client-side JWT expiry check — avoids showing avatar for expired sessions
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp * 1000 < Date.now()) {
      // Token expired — clear storage and leave login button
      ['sharq-token', 'sharq-user'].forEach(k => {
        localStorage.removeItem(k);
        sessionStorage.removeItem(k);
      });
      return;
    }
  } catch {
    return;
  }

  /* ─── Redirect if already logged in and visiting auth.html ─ */
  // replace() so auth.html doesn't stay in browser history (back button won't return to it)
  if (window.location.pathname.endsWith('auth.html')) {
    window.location.replace(`profile.html?id=${user.id}`);
    return;
  }

  /* ─── Wait for DOM to be ready ──────────────────────────── */
  function init() {
    const navAuth = document.querySelector('.nav-auth');
    if (!navAuth) return;

    const profileUrl = `profile.html?id=${user.id}`;
    const initial    = (user.name || '?').trim().charAt(0).toUpperCase();
    const avatarSrc  = user.avatar
      ? (user.avatar.startsWith('http') ? user.avatar : `${API_BASE}${user.avatar}`)
      : '';

    /* ─── Build avatar button + dropdown ──────────────────── */
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;display:flex;align-items:center';

    wrapper.innerHTML = `
      <button id="sqt-nav-btn"
        aria-label="قائمة المستخدم"
        aria-haspopup="true"
        aria-expanded="false"
        style="
          width: 40px; height: 40px; border-radius: 50%; padding: 0;
          border: 2px solid rgba(201,168,76,0.45);
          background: var(--bg-subtle, #1a2744);
          cursor: pointer; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0;
        ">
        ${avatarSrc
          ? `<img
               src="${avatarSrc}"
               alt="${user.name}"
               id="sqt-nav-avatar-img"
               style="width:100%;height:100%;object-fit:cover;display:block"
               onerror="
                 this.style.display='none';
                 document.getElementById('sqt-nav-initials').style.display='flex';
               " />
             <span id="sqt-nav-initials"
               style="display:none;font-size:1rem;font-weight:900;
                      color:var(--text-primary,#EEF2F7);
                      width:100%;height:100%;
                      align-items:center;justify-content:center;">
               ${initial}
             </span>`
          : `<span id="sqt-nav-initials"
               style="display:flex;font-size:1rem;font-weight:900;
                      color:var(--text-primary,#EEF2F7);
                      width:100%;height:100%;
                      align-items:center;justify-content:center;">
               ${initial}
             </span>`
        }
      </button>

      <div id="sqt-nav-menu"
        role="menu"
        aria-label="قائمة المستخدم"
        style="
          display: none;
          position: absolute;
          top: calc(100% + 12px);
          right: -75px;
          min-width: 190px;
          background: var(--bg-card, #131F35);
          border: 1px solid var(--border-mid, rgba(255,255,255,0.09));
          border-radius: 14px;
          padding: 8px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.55);
          z-index: 9999;
          animation: sqtMenuIn 0.18s ease;
          @media (max-width: 768px) {
            right: -140px;

          }

        ">

        <!-- User info header -->
        <div style="
          padding: 10px 12px 10px;
          border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.05));
          margin-bottom: 6px;
        ">
          <div style="
            font-size: 0.85rem; font-weight: 800;
            color: var(--text-primary, #EEF2F7);
            white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          ">${user.name}</div>
          <div style="
            font-size: 0.72rem; margin-top: 3px;
            color: var(--gold, #C9A84C);
          ">${user.role === 'admin' ? 'مشرف' : 'عضو'}</div>
        </div>

        <!-- My Profile link -->
        <a href="${profileUrl}"
          role="menuitem"
          class="sqt-menu-item"
          style="
            display: flex; align-items: center; gap: 9px;
            padding: 9px 12px; border-radius: 9px;
            font-size: 0.83rem; font-weight: 600;
            color: var(--text-secondary, #94A3B8);
            text-decoration: none;
            transition: background 0.15s ease, color 0.15s ease;
          ">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" style="flex-shrink:0">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          ملفي الشخصي
        </a>

        <!-- Logout button -->
        <button id="sqt-logout-btn"
          role="menuitem"
          class="sqt-menu-item"
          style="
            width: 100%; display: flex; align-items: center; gap: 9px;
            padding: 9px 12px; border-radius: 9px;
            font-size: 0.83rem; font-weight: 600;
            color: var(--error-text, #FCA5A5);
            background: none; border: none; cursor: pointer;
            font-family: inherit; direction: rtl; text-align: right;
            transition: background 0.15s ease;
          ">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" style="flex-shrink:0">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          تسجيل الخروج
        </button>

      </div>
    `;

    /* ─── Inject dropdown animation keyframe once ──────────── */
    if (!document.getElementById('sqt-nav-style')) {
      const style = document.createElement('style');
      style.id = 'sqt-nav-style';
      style.textContent = `
        @keyframes sqtMenuIn {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)  scale(1);    }
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

    // Replace the login button
    navAuth.replaceWith(wrapper);

    /* ─── Toggle dropdown ──────────────────────────────────── */
    const btn  = document.getElementById('sqt-nav-btn');
    const menu = document.getElementById('sqt-nav-menu');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
      menu.style.display = 'none';
      btn.setAttribute('aria-expanded', 'false');
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });

    /* ─── Avatar button hover effect ──────────────────────── */
    btn.addEventListener('mouseenter', () => {
      btn.style.borderColor = 'rgba(201,168,76,0.8)';
      btn.style.boxShadow   = '0 0 0 3px rgba(201,168,76,0.12)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.borderColor = 'rgba(201,168,76,0.45)';
      btn.style.boxShadow   = '';
    });

    /* ─── Logout ───────────────────────────────────────────── */
    document.getElementById('sqt-logout-btn').addEventListener('click', () => {
      ['sharq-token', 'sharq-user'].forEach(k => {
        localStorage.removeItem(k);
        sessionStorage.removeItem(k);
      });
      window.location.href = 'auth.html';
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
