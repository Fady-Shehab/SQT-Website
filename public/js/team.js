
/* ─── 0. CONFIG ───────────────────────────── */
// TODO: replace with your deployed backend URL, e.g. 'https://sqt-backend.onrender.com/api'
const API_BASE   = 'https://sqt-website-backend-production.up.railway.app/api';
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

/* ═══════════════════════════════════════════════════════════════
   0.5 SECURITY UTILITIES
   Rule: ZERO API data passes through innerHTML in this file.
   Every dynamic value is set via textContent / setAttribute /
   createElement so the browser can never interpret it as markup.
   ═══════════════════════════════════════════════════════════════ */

/** Set text content safely — XSS-safe by construction. */
function setText(el, value) {
  if (el) el.textContent = (typeof value === 'string') ? value : String(value ?? '');
}

/** Set an attribute safely — setAttribute() escapes correctly in any context. */
function setAttr(el, attr, value) {
  if (el) el.setAttribute(attr, (typeof value === 'string') ? value : String(value ?? ''));
}

/**
 * Validate a URL — only allow http/https, reject javascript: and other
 * dangerous schemes that could execute when used as an img/link src/href.
 */
function safeUrl(url) {
  if (!url || typeof url !== 'string') return '';
  try {
    const u = new URL(url, window.location.origin);
    return (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : '';
  } catch {
    return '';
  }
}

/* ─── 1. THEME TOGGLE ─────────────────────── */
if (!document.documentElement.hasAttribute('data-sqt-global')) {
  document.documentElement.setAttribute('data-sqt-global', '');
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('sharq-theme', t);
  }

  themeToggle.addEventListener('click', () => {
    const ct = html.getAttribute('data-theme') || 'dark';
    applyTheme(ct === 'dark' ? 'light' : 'dark');
  });

  (function() {
    const st = localStorage.getItem('sharq-theme') || 'dark';
    applyTheme(st);
  })();
}

/* ─── 2. NAVBAR SCROLL ────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar && !navbar.hasAttribute('data-sqt-scroll')) {
  navbar.setAttribute('data-sqt-scroll', '');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}

/* ─── 3. SCROLL REVEAL ────────────────────── */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  }),
  { threshold: 0.10, rootMargin: '0px 0px -36px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ─── 4. ANIMATED COUNTERS ───────────────────── */
function runCounter(el) {
  const raw    = parseInt(el.dataset.target, 10);
  const target = (!isNaN(raw) && raw >= 0 && raw < 1_000_000_000) ? raw : 0;
  const dur    = 1600;
  const start  = performance.now();
  const ease   = t => 1 - Math.pow(1 - t, 4);

  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    setText(el, Math.round(ease(p) * target).toLocaleString('ar-EG'));
    if (p < 1) requestAnimationFrame(tick);
    else setText(el, target.toLocaleString('ar-EG'));
  })(start);
}

const counterObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.counter').forEach(runCounter);
      counterObs.unobserve(e.target);
    }
  }),
  { threshold: 0.25 }
);

// Called once the real numbers arrive from /api/team
function startStatsCounters(stats) {
  const statsEl = document.getElementById('team-stats');
  if (!statsEl) return;

  const map = {
    members:  stats.members,
    projects: stats.completedProjects,
    posts:    stats.totalPosts,
    sections: stats.sections
  };

  statsEl.querySelectorAll('.counter').forEach(counter => {
    const key = counter.dataset.stat;
    if (map[key] !== undefined) {
      counter.dataset.target = map[key];
    }
  });

  counterObs.observe(statsEl);
}

/* ─── 4.5 TEAM MEMBERS ────────────────────── */

// Inline SVG icons reused for each member's social links.
// These are static strings WE wrote — never interpolated with API/user
// data — so assigning them via innerHTML is safe.
const SOCIAL_ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.78.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.5H5.5v8.5h2.77z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.14-9.96-5.08-.42.73-.67 1.57-.67 2.47 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.59v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.39 3.29 4.5 3.33-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.71-7.35 13.71-13.71 0-.21 0-.41-.01-.62.94-.68 1.76-1.53 2.41-2.5z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  dribbble: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c3.614 6.817 6.589 10.228 8.002 11.986m-1.502-5.83c.155 2.08 1.846 4.243 4.574 6.179m5.552-3.062c-1.707.895-4.213.93-6.861.38" stroke="white" stroke-width="1.5" fill="none"/></svg>`,
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`
};

const SOCIAL_LABELS = {
  linkedin:  'LinkedIn',
  twitter:   'Twitter',
  github:    'GitHub',
  dribbble:  'Dribbble',
  portfolio: 'Portfolio'
};

// Fallback Arabic label when roleTag is not set by an admin
const TEAM_ROLE_LABELS = {
  'Member':            'عضو',
  'Section Leader':    'قائد قسم',
  'Team Leader':       'قائد فريق',
  'Senior Supervisor': 'مشرف أول'
};

// Fallback subtitle when jobTitle is not set
const DEPARTMENT_LABELS = {
  'Programming': 'البرمجة',
  'AI':          'الذكاء الاصطناعي',
  'Robotics':    'الروبوتات',
  'Design':      'التصميم'
};

// Ensure social URLs are always absolute so the browser does not
// treat them as relative paths (which would prepend the page's origin).
// e.g. 'github.com/user' → 'https://github.com/user'
// NOTE: this only normalizes the string — safeUrl() below still does the
// real scheme validation, so this alone is never trusted for security.
function ensureAbsolute(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('//')) return 'https:' + url;
  return 'https://' + url;
}

/**
 * Build the member-photo block — real photo if a valid avatar URL is
 * available, with an automatic fallback to the placeholder if the image
 * fails to load (broken link, deleted file, etc). Pure DOM construction.
 */
function appendMemberPhoto(wrap, member) {
  const name = typeof member.name === 'string' ? member.name.trim() : '';

  const rawAvatar = typeof member.avatar === 'string' ? member.avatar : '';
  const avatarUrl = rawAvatar
    ? safeUrl(rawAvatar.startsWith('http') ? rawAvatar : `${API_ORIGIN}${rawAvatar}`)
    : '';

  function buildPlaceholder() {
    const ph = document.createElement('div');
    ph.className = 'member-photo-placeholder';
    const icon = document.createElement('div');
    icon.className = 'member-photo-icon';
    const label = document.createElement('div');
    label.className = 'member-photo-label';
    setText(label, 'صورة العضو');
    ph.appendChild(icon);
    ph.appendChild(label);
    return ph;
  }

  if (avatarUrl) {
    const img = document.createElement('img');
    setAttr(img, 'src', avatarUrl);   // ← validated URL only
    setAttr(img, 'alt', name);        // ← setAttribute escapes correctly
    img.loading = 'lazy';

    const placeholder = buildPlaceholder();
    placeholder.style.display = 'none';

    // Fall back to the placeholder instead of a broken image icon
    img.addEventListener('error', () => {
      img.style.display = 'none';
      placeholder.style.display = '';
    });

    wrap.appendChild(img);
    wrap.appendChild(placeholder);
  } else {
    wrap.appendChild(buildPlaceholder());
  }
}

/** Build the skills tag list. Caps count and length to keep layout sane. */
function appendMemberSkills(container, skills) {
  if (!Array.isArray(skills) || !skills.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'member-skills';

  skills.slice(0, 12).forEach(s => {
    if (typeof s !== 'string' || !s.trim()) return;
    const span = document.createElement('span');
    span.className = 'skill-tag';
    setText(span, s.trim().slice(0, 30)); // ← textContent, safe
    wrap.appendChild(span);
  });

  if (wrap.children.length) container.appendChild(wrap);
}

/**
 * Build the social links row. Every URL goes through safeUrl() — anything
 * that isn't a real http/https URL (javascript:, malformed strings, quote-
 * breakout attempts, etc.) is silently dropped instead of rendered.
 */
function appendMemberSocials(container, socials) {
  if (!socials || typeof socials !== 'object') return;

  const wrap = document.createElement('div');
  wrap.className = 'member-socials';

  Object.keys(SOCIAL_ICONS).forEach(key => {
    if (!socials[key]) return;
    const url = safeUrl(ensureAbsolute(socials[key]));
    if (!url) return; // reject anything that isn't a valid http/https URL

    const a = document.createElement('a');
    setAttr(a, 'href', url);
    a.className = 'member-social';
    setAttr(a, 'target', '_blank');
    setAttr(a, 'rel', 'noopener noreferrer');
    setAttr(a, 'aria-label', SOCIAL_LABELS[key]);
    a.innerHTML = SOCIAL_ICONS[key]; // static, trusted markup — no user data

    wrap.appendChild(a);
  });

  if (wrap.children.length) container.appendChild(wrap);
}

/**
 * Build one member card. All API-derived values are type-checked,
 * length-capped, and inserted via textContent/setAttribute — never
 * innerHTML — so there is no attribute- or tag-breakout path available
 * to a malicious or malformed API response.
 */
function createMemberCard(member, index) {
  const name  = typeof member.name === 'string' ? member.name.slice(0, 100) : '';
  const bio   = typeof member.bio  === 'string' ? member.bio.slice(0, 500)  : '';

  const roleLabel = (typeof member.roleTag === 'string' && member.roleTag.trim())
    ? member.roleTag.slice(0, 60)
    : (TEAM_ROLE_LABELS[member.teamRole] || '');

  const titleLabel = (typeof member.jobTitle === 'string' && member.jobTitle.trim())
    ? member.jobTitle.slice(0, 80)
    : (DEPARTMENT_LABELS[member.department] || '');

  const article = document.createElement('article');
  article.className = 'member-card reveal';
  setAttr(article, 'role', 'listitem');
  article.style.transitionDelay = `${Math.min(index * 0.05, 0.5)}s`;

  const photoWrap = document.createElement('div');
  photoWrap.className = 'member-photo';
  appendMemberPhoto(photoWrap, member);
  article.appendChild(photoWrap);

  const body = document.createElement('div');
  body.className = 'member-body';

  if (roleLabel) {
    const roleDiv = document.createElement('div');
    roleDiv.className = 'member-role';
    setText(roleDiv, roleLabel);
    body.appendChild(roleDiv);
  }

  const h3 = document.createElement('h3');
  h3.className = 'member-name';
  setText(h3, name);
  body.appendChild(h3);

  if (titleLabel) {
    const pTitle = document.createElement('p');
    pTitle.className = 'member-title';
    setText(pTitle, titleLabel);
    body.appendChild(pTitle);
  }

  if (bio) {
    const pBio = document.createElement('p');
    pBio.className = 'member-bio';
    setText(pBio, bio);
    body.appendChild(pBio);
  }

  appendMemberSkills(body, member.skills);
  appendMemberSocials(body, member.socials);

  article.appendChild(body);

  return article;
}

async function loadTeam() {
  const grid   = document.getElementById('members-grid');
  const status = document.getElementById('members-status');

  try {
    const res = await fetch(`${API_BASE}/team`);
    if (!res.ok) throw new Error('Request failed');

    const data = await res.json();
    const members = Array.isArray(data.members) ? data.members : [];

    grid.replaceChildren();

    if (!members.length) {
      const empty = document.createElement('p');
      empty.style.cssText = 'grid-column:1 / -1;text-align:center;color:var(--text-secondary);padding:40px 0';
      setText(empty, 'لا يوجد أعضاء لعرضهم حالياً.');
      grid.appendChild(empty);
    } else {
      members.forEach((member, i) => {
        const card = createMemberCard(member, i);
        grid.appendChild(card);
        revealObs.observe(card);
      });
    }

    if (data.stats) startStatsCounters(data.stats);
  } catch (err) {
    console.error('[loadTeam]', err);
    if (status) {
      setText(status, 'تعذر تحميل أعضاء الفريق حالياً. حاول مرة أخرى لاحقاً.');
    }
  }
}

loadTeam();

/* ─── 5. SMOOTH SCROLL ────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) {
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
    }
  });
});

/* ─── 6. MOBILE NAV ACTIVE LINK ──────────────── */
function updateMobileNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.mob-link').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    if (href === path || (path.includes('team') && href.includes('team'))) {
      link.classList.add('active');
    }
  });
}
updateMobileNav();



