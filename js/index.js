<!-- ═══════════════════════════════════════
     JAVASCRIPT
═══════════════════════════════════════ -->
<script>
'use strict';

/* ═══════════════════════════════════════════════════════════════
   0. SECURITY UTILITIES
   Rule: ZERO API data passes through innerHTML in this file.
   Every dynamic value is set via textContent / setAttribute /
   createElement so the browser can never interpret it as markup.
   ═══════════════════════════════════════════════════════════════ */

/** Set text content safely — XSS-safe by construction. */
function setText(el, value) {
  if (el) el.textContent = (typeof value === 'string') ? value : String(value ?? '');
}

/** Set an attribute safely. */
function setAttr(el, attr, value) {
  if (el) el.setAttribute(attr, (typeof value === 'string') ? value : String(value ?? ''));
}

/**
 * Validate a URL — only allow http/https, reject javascript: and other
 * dangerous schemes that could execute when used as an img/link src.
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

/** Validate a Mongo-style or numeric ID before placing it in a URL. */
function safeIdParam(id) {
  if (id === undefined || id === null) return '';
  const str = String(id);
  // Allow only alphanumerics — matches Mongo ObjectId and numeric IDs
  return /^[a-zA-Z0-9]{1,64}$/.test(str) ? str : '';
}

/** Create an inline SVG icon from static (non-user) markup. */
function makeIcon(svgMarkup, viewBox = '0 0 24 24') {
  const ns  = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', viewBox);
  svg.innerHTML = svgMarkup; // static string written by us — not user data
  return svg;
}

/* ═══════════════════════════════════════════════════════════════
   1. API CONFIG
   ═══════════════════════════════════════════════════════════════ */
const API_BASE    = 'https://sqt-website-backend-production.up.railway.app/api';
// Backend returns relative paths for images (e.g. "img/project-sqt.jpg").
// These must resolve against the BACKEND origin, not the frontend's —
// otherwise the browser requests them from the wrong host and 404s.
const SERVER_BASE = API_BASE.replace(/\/api\/?$/, '');

/**
 * Resolve an image path returned by the API into a full, validated URL.
 *
 * Convention:
 *   - "uploads/..."   → backend-hosted image (newly uploaded via admin) →
 *                        resolve against the Railway backend origin.
 *   - "img/..." or any other relative path → frontend repo asset
 *                        (e.g. seed/demo content checked into git) →
 *                        resolve against the frontend's own origin.
 *   - "http(s)://..." → already absolute → used as-is (still validated).
 */
function resolveImageUrl(path) {
  if (!path || typeof path !== 'string') return '';

  if (path.startsWith('http')) {
    return safeUrl(path);
  }

  const trimmed = path.replace(/^\/+/, ''); // strip any leading slashes

  if (trimmed.startsWith('uploads/')) {
    // Backend-hosted upload
    return safeUrl(`${SERVER_BASE}/${trimmed}`);
  }

  // Frontend repo asset (e.g. "img/project-sqt.jpg") — resolve relative
  // to the page itself, NOT the backend.
  return safeUrl(new URL(trimmed, window.location.href).href);
}

/* ═══════════════════════════════════════════════════════════════
   2. THEME TOGGLE
   ═══════════════════════════════════════════════════════════════ */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY   = 'sharq-theme';

function applyTheme(t) {
  // Whitelist — never write an arbitrary string into data-theme
  const safeTheme = t === 'light' ? 'light' : 'dark';
  html.setAttribute('data-theme', safeTheme);
  localStorage.setItem(THEME_KEY, safeTheme);
}
applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
themeToggle.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════════════════════════════
   3. NAVBAR SCROLL
   ═══════════════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
navbar.classList.toggle('scrolled', window.scrollY > 40);

/* ═══════════════════════════════════════════════════════════════
   4. SCROLL REVEAL
   ═══════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  }),
  { threshold: 0.10, rootMargin: '0px 0px -36px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ═══════════════════════════════════════════════════════════════
   5. ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════════════ */
function runCounter(el) {
  // Clamp + validate — a malicious API response shouldn't be able to
  // pass a huge number or NaN that breaks the animation loop.
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
['stats', 'hof'].forEach(id => {
  const el = document.getElementById(id);
  if (el) counterObs.observe(el);
});

/* ═══════════════════════════════════════════════════════════════
   6. SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    // href is a static attribute written in the HTML — safe to use as selector
    const targetSelector = this.getAttribute('href');
    let t = null;
    try { t = document.querySelector(targetSelector); } catch { /* invalid selector — ignore */ }
    if (t) {
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════════════════════════
   7. CARD KEYBOARD SUPPORT
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.proj-card[tabindex], .blog-card[tabindex]').forEach(c => {
  c.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.querySelector('a')?.click(); }
  });
});

/* ═══════════════════════════════════════════════════════════════
   8. PAGE FADE-IN
   ═══════════════════════════════════════════════════════════════ */
document.body.style.opacity    = '0';
document.body.style.transition = 'opacity 0.38s ease';
window.addEventListener('load', () => { document.body.style.opacity = '1'; });

/* ═══════════════════════════════════════════════════════════════
   9. STATUS HELPERS — static maps, no user data involved
   ═══════════════════════════════════════════════════════════════ */
const STATUS_CLS = { active: 'badge-green', completed: 'badge-gold', 'in-progress': 'badge-silver' };
const STATUS_LBL = { active: 'نشط', completed: 'مكتمل', 'in-progress': 'قيد التطوير' };

/** Resolve a status badge class safely — always falls back to a known class. */
function statusClass(status) {
  return STATUS_CLS[status] || 'badge-silver';
}
/** Resolve a status label safely — never reflect an arbitrary API string verbatim into UI without limits. */
function statusLabel(status) {
  return STATUS_LBL[status] || (typeof status === 'string' ? status.slice(0, 30) : '');
}

/* ═══════════════════════════════════════════════════════════════
   10. SAFE FETCH WRAPPER
   Validates Content-Type before parsing JSON, avoids throwing
   on unexpected response shapes.
   ═══════════════════════════════════════════════════════════════ */
async function safeFetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  const contentType = res.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

/* ═══════════════════════════════════════════════════════════════
   11. FETCH STATS
   ═══════════════════════════════════════════════════════════════ */
(async function fetchIndexStats() {
  try {
    const [hof, proj] = await Promise.all([
      safeFetchJson(`${API_BASE}/hof/stats`),
      safeFetchJson(`${API_BASE}/projects?status=all&page=1&limit=1`),
    ]);

    const statCells = document.querySelectorAll('#stats .stat-cell');
    const ascCards  = document.querySelectorAll('.about-stat-card .asc-num');

    if (hof) {
      const mc = statCells[0]?.querySelector('.counter');
      if (mc) { mc.dataset.target = String(hof.total_members ?? 0); runCounter(mc); }
      const sc = statCells[3]?.querySelector('.counter');
      if (sc) { sc.dataset.target = String(hof.total_seasons ?? 0); runCounter(sc); }
      // textContent — safe even though these are numbers
      if (ascCards[0]) setText(ascCards[0], String(hof.total_members ?? 0));
      if (ascCards[3]) setText(ascCards[3], String(hof.total_seasons ?? 0));
    }

    if (proj) {
      const total = proj.total || 0;
      const pc = statCells[1]?.querySelector('.counter');
      if (pc) { pc.dataset.target = String(total); runCounter(pc); }
      if (ascCards[1]) setText(ascCards[1], total + '+');
    }
  } catch (err) {
    console.error('[Index stats]', err);
  }
})();

/* ═══════════════════════════════════════════════════════════════
   12. BUILD A PROJECT CARD — fully via DOM APIs, zero innerHTML
       for any field that originates from the API.
   ═══════════════════════════════════════════════════════════════ */
function buildProjectCard(p, index) {
  const title    = typeof p.title === 'string' ? p.title.slice(0, 200) : '';
  const desc     = typeof p.short_desc === 'string' ? p.short_desc.slice(0, 400) : '';
  const tags     = Array.isArray(p.tech) ? p.tech.slice(0, 2) : [];
  const cover    = resolveImageUrl(p.cover);
  const id       = safeIdParam(p.id || p._id);
  const delay    = (index * 0.05).toFixed(2);

  const article = document.createElement('article');
  article.className = 'proj-card reveal';
  setAttr(article, 'role', 'listitem');
  article.style.transitionDelay = `${delay}s`;
  article.tabIndex = 0;
  setAttr(article, 'aria-label', `مشروع: ${title}`); // setAttribute escapes automatically

  /* ── Image area ── */
  const imgWrap = document.createElement('div');
  imgWrap.className = 'proj-img';

  if (cover) {
    const img = document.createElement('img');
    setAttr(img, 'src', cover);                 // ← validated URL only
    setAttr(img, 'alt', `صورة ${title}`);
    img.width = 400; img.height = 225;
    img.loading = 'lazy';
    imgWrap.appendChild(img);

    const ph = document.createElement('div');
    ph.className = 'proj-img-ph';
    ph.style.display = 'none';
    setAttr(ph, 'aria-hidden', 'true');
    ph.appendChild(makeIcon(
      '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
    ));
    imgWrap.appendChild(ph);

    // addEventListener instead of inline onerror — CSP-safe
    img.addEventListener('error', () => {
      img.style.display = 'none';
      ph.style.display  = 'flex';
    });
  } else {
    const ph = document.createElement('div');
    ph.className = 'proj-img-ph';
    setAttr(ph, 'aria-hidden', 'true');
    ph.appendChild(makeIcon(
      '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
    ));
    imgWrap.appendChild(ph);
  }

  /* ── Body ── */
  const body = document.createElement('div');
  body.className = 'proj-body';

  const tagsWrap = document.createElement('div');
  tagsWrap.className = 'proj-tags';
  tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'proj-tag';
    setText(span, typeof t === 'string' ? t.slice(0, 30) : ''); // ← textContent
    tagsWrap.appendChild(span);
  });

  const h3 = document.createElement('h3');
  h3.className = 'proj-title';
  setText(h3, title); // ← textContent

  const pDesc = document.createElement('p');
  pDesc.className = 'proj-desc';
  setText(pDesc, desc); // ← textContent

  const foot = document.createElement('div');
  foot.className = 'proj-foot';

  const badge = document.createElement('span');
  badge.className = `badge ${statusClass(p.status)}`;
  setText(badge, statusLabel(p.status));

  const link = document.createElement('a');
  // id is alphanumeric-validated; falls back to no query param if invalid
  setAttr(link, 'href', id ? `project.html?id=${id}` : 'project.html');
  link.className = 'btn-text';
  link.style.fontSize = '.82rem';
  const linkText = document.createTextNode('عرض ');
  link.appendChild(linkText);
  link.appendChild(makeIcon(
    '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'
  ));
  link.querySelector('svg').setAttribute('width', '14');
  link.querySelector('svg').setAttribute('height', '14');
  link.querySelector('svg').setAttribute('fill', 'none');
  link.querySelector('svg').setAttribute('stroke', 'currentColor');
  link.querySelector('svg').setAttribute('stroke-width', '2.5');

  foot.appendChild(badge);
  foot.appendChild(link);

  body.appendChild(tagsWrap);
  body.appendChild(h3);
  body.appendChild(pDesc);
  body.appendChild(foot);

  article.appendChild(imgWrap);
  article.appendChild(body);

  return article;
}

/* ═══════════════════════════════════════════════════════════════
   13. FETCH LATEST PROJECTS
   ═══════════════════════════════════════════════════════════════ */
(async function fetchIndexProjects() {
  const grid = document.getElementById('indexProjGrid');
  if (!grid) return;
  try {
    const result = await safeFetchJson(`${API_BASE}/projects?page=1&limit=3`);
    if (!result || !Array.isArray(result.data)) return;

    // Clear existing content safely
    grid.replaceChildren();

    result.data.forEach((p, i) => {
      const card = buildProjectCard(p, i);
      grid.appendChild(card);
      revealObs.observe(card);
    });
  } catch (err) {
    console.error('[Index projects]', err);
  }
})();

/* ═══════════════════════════════════════════════════════════════
   14. BUILD A BLOG CARD — fully via DOM APIs
   ═══════════════════════════════════════════════════════════════ */
function buildBlogCard(p, index) {
  const title   = typeof p.title === 'string' ? p.title.slice(0, 200) : '';
  const excerpt = typeof p.excerpt === 'string' ? p.excerpt.slice(0, 400) : '';
  const category = typeof p.category === 'string' ? p.category.slice(0, 40) : 'مقال';
  const cover   = resolveImageUrl(p.image);
  const id      = safeIdParam(p.id || p._id);
  const delay   = (index * 0.05).toFixed(2);

  // Validate date before formatting — invalid dates fall back to empty string
  let dateStr = '';
  if (p.date) {
    const d = new Date(p.date);
    if (!isNaN(d.getTime())) {
      dateStr = d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }

  const article = document.createElement('article');
  article.className = 'blog-card reveal';
  setAttr(article, 'role', 'listitem');
  article.style.transitionDelay = `${delay}s`;
  article.tabIndex = 0;

  /* ── Cover ── */
  const coverWrap = document.createElement('div');
  coverWrap.className = 'blog-cover';

  if (cover) {
    const img = document.createElement('img');
    setAttr(img, 'src', cover);
    setAttr(img, 'alt', `صورة ${title}`);
    img.width = 400; img.height = 225;
    img.loading = 'lazy';
    coverWrap.appendChild(img);

    const ph = document.createElement('div');
    ph.className = 'blog-cover-ph';
    ph.style.display = 'none';
    setAttr(ph, 'aria-hidden', 'true');
    ph.appendChild(makeIcon(
      '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>'
    ));
    coverWrap.appendChild(ph);

    img.addEventListener('error', () => {
      img.style.display = 'none';
      ph.style.display  = 'flex';
    });
  } else {
    const ph = document.createElement('div');
    ph.className = 'blog-cover-ph';
    setAttr(ph, 'aria-hidden', 'true');
    ph.appendChild(makeIcon(
      '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>'
    ));
    coverWrap.appendChild(ph);
  }

  /* ── Body ── */
  const body = document.createElement('div');
  body.className = 'blog-body';

  const meta = document.createElement('div');
  meta.className = 'blog-meta';

  const catBadge = document.createElement('span');
  catBadge.className = 'badge badge-gold';
  catBadge.style.fontSize = '.64rem';
  setText(catBadge, category);

  const dot = document.createElement('span');
  dot.className = 'blog-dot';
  setAttr(dot, 'aria-hidden', 'true');

  const dateSpan = document.createElement('span');
  dateSpan.className = 'blog-date';
  setText(dateSpan, dateStr);

  meta.appendChild(catBadge);
  meta.appendChild(dot);
  meta.appendChild(dateSpan);

  const h3 = document.createElement('h3');
  h3.className = 'blog-title';
  setText(h3, title);

  const pExcerpt = document.createElement('p');
  pExcerpt.className = 'blog-excerpt';
  setText(pExcerpt, excerpt);

  const link = document.createElement('a');
  setAttr(link, 'href', id ? `post.html?id=${id}` : 'post.html');
  link.className = 'btn-text';
  link.style.fontSize = '.82rem';
  link.appendChild(document.createTextNode('اقرأ المقال '));
  const icon = makeIcon('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>');
  icon.setAttribute('width', '14');
  icon.setAttribute('height', '14');
  icon.setAttribute('fill', 'none');
  icon.setAttribute('stroke', 'currentColor');
  icon.setAttribute('stroke-width', '2.5');
  link.appendChild(icon);

  body.appendChild(meta);
  body.appendChild(h3);
  body.appendChild(pExcerpt);
  body.appendChild(link);

  article.appendChild(coverWrap);
  article.appendChild(body);

  return article;
}

/* ═══════════════════════════════════════════════════════════════
   15. FETCH LATEST BLOG POSTS
   ═══════════════════════════════════════════════════════════════ */
(async function fetchIndexBlog() {
  const grid = document.getElementById('indexBlogGrid');
  if (!grid) return;
  try {
    const result = await safeFetchJson(`${API_BASE}/posts?page=1&limit=3`);
    if (!result || !Array.isArray(result.data)) return;

    grid.replaceChildren();

    result.data.forEach((p, i) => {
      const card = buildBlogCard(p, i);
      grid.appendChild(card);
      revealObs.observe(card);
    });
  } catch (err) {
    console.error('[Index blog]', err);
  }
})();

/* ═══════════════════════════════════════════════════════════════
   16. FETCH HOF PODIUM PREVIEW
   ═══════════════════════════════════════════════════════════════ */
(async function fetchIndexPodium() {
  try {
    const data = await safeFetchJson(`${API_BASE}/hof/season/1/top3`);
    if (!Array.isArray(data)) return;

    data.forEach(member => {
      // Validate rank before using it in a CSS selector — prevents
      // a malicious/malformed API response from injecting selector syntax.
      const rank = parseInt(member.rank, 10);
      if (![1, 2, 3].includes(rank)) return;

      const card = document.querySelector(`#indexPodiumRow .pod-card.r${rank}`);
      if (!card) return;

      const name = typeof member.name === 'string' ? member.name.slice(0, 100) : '';
      const role = typeof member.role === 'string' ? member.role.slice(0, 60) : '';
      const dept = typeof member.dept === 'string' ? member.dept.slice(0, 60) : '';
      const memberId = safeIdParam(member.member_id);

      setText(card.querySelector('.pod-name'), name);
      setText(card.querySelector('.pod-role'), `${role} — ${dept}`);
      setText(card.querySelector('.pod-avatar'), name.charAt(0).toUpperCase() || '?');

      const ptsEl = card.querySelector('.pod-pts-n');
      const pts   = parseInt(member.points, 10);
      ptsEl.dataset.target = (!isNaN(pts) && pts >= 0) ? String(pts) : '0';
      runCounter(ptsEl);

      card.style.display = '';
      card.style.cursor  = 'pointer';

      // Only attach navigation if we have a valid, sanitized member ID
      if (memberId) {
        card.addEventListener('click', () => {
          window.location.href = `profile.html?id=${memberId}`;
        });
      }

      revealObs.observe(card);
    });
  } catch (err) {
    console.error('[Index podium]', err);
  }
})();
</script>
