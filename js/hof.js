

/* ═══════════════════════════════════════════════════════════════
   0. SECURITY UTILITIES
   Rule: ZERO API data passes through innerHTML or inline event
   handler attribute strings in this file. Everything is built
   with createElement / textContent / setAttribute / addEventListener.
   ═══════════════════════════════════════════════════════════════ */

function setText(el, value) {
  if (el) el.textContent = (typeof value === 'string') ? value : String(value ?? '');
}

function setAttr(el, attr, value) {
  if (el) el.setAttribute(attr, (typeof value === 'string') ? value : String(value ?? ''));
}

/** Only allow http/https URLs — rejects javascript: and other dangerous schemes. */
function safeUrl(url) {
  if (!url || typeof url !== 'string') return '';
  try {
    const u = new URL(url, window.location.origin);
    return (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : '';
  } catch {
    return '';
  }
}

/** Validate an ID before placing it in a URL query string. */
function safeIdParam(id) {
  if (id === undefined || id === null) return '';
  const str = String(id);
  return /^[a-zA-Z0-9]{1,64}$/.test(str) ? str : '';
}

/** Clamp a numeric value into a safe, finite, non-negative range. */
function safeNumber(n, max = 1_000_000_000) {
  const v = Number(n);
  return (Number.isFinite(v) && v >= 0 && v <= max) ? v : 0;
}

/** Clamp a percentage value to [0, 100] for safe use in a width style. */
function safePercent(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return 0;
  return Math.min(100, Math.max(0, v));
}

/** Validate Content-Type before parsing JSON. */
async function safeFetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  const contentType = res.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) return null;
  try { return await res.json(); } catch { return null; }
}

/**
 * Build an avatar element (img or initial-letter fallback) safely.
 * Never uses innerHTML or inline onerror — uses addEventListener instead,
 * so a crafted avatar_url can't break out of an attribute string.
 * @param {string} avatarUrl - already-resolved, possibly empty
 * @param {string} name
 * @returns {HTMLElement} a <img> or <span> ready to insert
 */
function buildAvatarEl(avatarUrl, name) {
  const initial = (typeof name === 'string' && name.trim()) ? name.trim().charAt(0).toUpperCase() : '?';
  const url = safeUrl(avatarUrl);

  if (!url) {
    const span = document.createElement('span');
    setText(span, initial);
    return span;
  }

  const img = document.createElement('img');
  setAttr(img, 'src', url);
  setAttr(img, 'alt', typeof name === 'string' ? name.slice(0, 100) : '');
  img.addEventListener('error', () => {
    const span = document.createElement('span');
    setText(span, initial);
    img.replaceWith(span);
  });
  return img;
}

/* ═══════════════════════════════════════════════════════════════
   1. THEME TOGGLE
   ═══════════════════════════════════════════════════════════════ */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY   = 'sharq-theme';
function applyTheme(t) {
  const safeTheme = t === 'light' ? 'light' : 'dark'; // whitelist
  html.setAttribute('data-theme', safeTheme);
  localStorage.setItem(THEME_KEY, safeTheme);
}
applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
themeToggle.addEventListener('click', () => applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

/* ═══════════════════════════════════════════════════════════════
   2. NAVBAR SCROLL
   ═══════════════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
navbar.classList.toggle('scrolled', window.scrollY > 40);

/* ═══════════════════════════════════════════════════════════════
   3. SCROLL REVEAL
   ═══════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } }),
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ═══════════════════════════════════════════════════════════════
   4. ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════════════ */
function runCounter(el) {
  const raw    = parseInt(el.dataset.target, 10);
  const target = safeNumber(raw); // clamp + validate
  const dur    = 1800;
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
    if (e.isIntersecting) { e.target.querySelectorAll('.counter').forEach(runCounter); counterObs.unobserve(e.target); }
  }), { threshold: 0.25 }
);
['hof-stats', 'podium'].forEach(id => { const el = document.getElementById(id); if (el) counterObs.observe(el); });

/* ═══════════════════════════════════════════════════════════════
   5. PROGRESS BARS ANIMATION
   ═══════════════════════════════════════════════════════════════ */
const barObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.pod-bar-fill, .lb-prog-fill').forEach(bar => {
        const w = bar.style.width; bar.style.width = '0';
        requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = w; }));
      });
      barObs.unobserve(e.target);
    }
  }), { threshold: 0.2 }
);
document.querySelectorAll('.pod-card, .lb-table-wrap').forEach(el => barObs.observe(el));

/* ═══════════════════════════════════════════════════════════════
   6. SORT SELECT
   ═══════════════════════════════════════════════════════════════ */
document.getElementById('sortSelect').addEventListener('change', function () {
  // Whitelist sort values — never trust the select's value blindly downstream
  const allowed = ['points', 'name', 'dept'];
  const val = allowed.includes(this.value) ? this.value : 'points';

  const rows = Array.from(document.querySelectorAll('#lbBody tr.lb-row'));
  rows.sort((a, b) => {
    if (val === 'points') return safeNumber(b.dataset.points) - safeNumber(a.dataset.points);
    if (val === 'name')   return (a.dataset.name || '').localeCompare(b.dataset.name || '', 'ar');
    if (val === 'dept')   return (a.dataset.dept || '').localeCompare(b.dataset.dept || '', 'ar');
    return 0;
  });
  const tbody = document.getElementById('lbBody');
  rows.forEach(r => tbody.appendChild(r));
  updateRankNumbers();
});

/* ═══════════════════════════════════════════════════════════════
   7. RANK BADGE BUILDER — shared by leaderboard + rank renumbering.
      Replaces string-template innerHTML with DOM construction.
   ═══════════════════════════════════════════════════════════════ */
function buildRankBadge(rank) {
  const n = Math.max(1, Math.round(safeNumber(rank, 100000)));
  const span = document.createElement('span');

  if (n <= 3) {
    const cls   = ['r1', 'r2', 'r3'][n - 1];
    const label = ['الأول', 'الثاني', 'الثالث'][n - 1];
    span.className = `lb-rank-badge ${cls}`;
    setAttr(span, 'aria-label', `المركز ${label}`);
    setText(span, n.toLocaleString('ar-EG'));
  } else {
    span.className = 'lb-rank-num';
    setText(span, n.toLocaleString('ar-EG'));
  }
  return span;
}

function updateRankNumbers() {
  const rows = document.querySelectorAll('#lbBody tr.lb-row');
  rows.forEach((row, i) => {
    const rankCell = row.querySelector('.lb-rank');
    if (!rankCell) return;
    rankCell.replaceChildren(buildRankBadge(i + 1));
  });
}

/* ═══════════════════════════════════════════════════════════════
   8. SEARCH
   ═══════════════════════════════════════════════════════════════ */
document.getElementById('lbSearch').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase().slice(0, 200); // cap length
  const rows = document.querySelectorAll('#lbBody tr.lb-row');
  let visible = 0;
  rows.forEach(row => {
    const name = (row.dataset.name || '').toLowerCase();
    const dept = (row.dataset.dept || '').toLowerCase();
    const show = q === '' || name.includes(q) || dept.includes(q);
    row.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  document.getElementById('lbEmpty').classList.toggle('visible', visible === 0);
  setText(document.getElementById('lbCount'), visible.toLocaleString('ar-EG') + ' عضو');
});

/* ═══════════════════════════════════════════════════════════════
   9. SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const targetSelector = this.getAttribute('href'); // static HTML attribute — safe
    let t = null;
    try { t = document.querySelector(targetSelector); } catch { /* ignore invalid selector */ }
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }
  });
});

/* ═══════════════════════════════════════════════════════════════
   10. CARD KEYBOARD SUPPORT
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.pod-card[tabindex]').forEach(c => {
  c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.querySelector('a')?.click(); } });
});

/* ═══════════════════════════════════════════════════════════════
   11. PAGE FADE-IN
   ═══════════════════════════════════════════════════════════════ */
document.body.style.opacity    = '0';
document.body.style.transition = 'opacity 0.38s ease';
window.addEventListener('load', () => { document.body.style.opacity = '1'; });

/* ═══════════════════════════════════════════════════════════════
   12. API CONFIG
   ═══════════════════════════════════════════════════════════════ */
const API_BASE    = 'https://sqt-website-backend-production.up.railway.app/api';
const SERVER_BASE = API_BASE.replace(/\/api\/?$/, '');

/**
 * Build an avatar URL from a backend-relative path or absolute URL,
 * then validate it through safeUrl(). Always returns '' for anything
 * unsafe (javascript:, data:, malformed, etc).
 */
function buildImgSrc(avatarPath) {
  if (!avatarPath || typeof avatarPath !== 'string') return '';
  const resolved = avatarPath.startsWith('http') ? avatarPath : SERVER_BASE + avatarPath;
  return safeUrl(resolved);
}

/* ═══════════════════════════════════════════════════════════════
   13. fetchStats
   ═══════════════════════════════════════════════════════════════ */
async function fetchStats() {
  try {
    const data = await safeFetchJson(`${API_BASE}/hof/stats`);
    if (!data) return;
    document.querySelectorAll('.counter[data-api-key]').forEach(el => {
      const key = el.dataset.apiKey;
      if (data[key] !== undefined) {
        el.dataset.target = String(safeNumber(data[key]));
        runCounter(el);
      }
    });
  } catch (err) { console.error('[HOF stats]', err); }
}

/* ═══════════════════════════════════════════════════════════════
   14. SEASON PILL CLICK HANDLER — shared logic
   ═══════════════════════════════════════════════════════════════ */
function activateSeasonPill(pill) {
  document.querySelectorAll('.season-pill').forEach(p => {
    p.classList.remove('active');
    setAttr(p, 'aria-pressed', 'false');
  });
  pill.classList.add('active');
  setAttr(pill, 'aria-pressed', 'true');
  const seasonNum = pill.dataset.season;
  fetchPodium(seasonNum);
  fetchLeaderboard(seasonNum, document.getElementById('sortSelect').value);
}

/* ═══════════════════════════════════════════════════════════════
   15. fetchSeasonPills — built entirely via createElement
   ═══════════════════════════════════════════════════════════════ */
async function fetchSeasonPills() {
  try {
    const seasons = await safeFetchJson(`${API_BASE}/hof/seasons`);
    if (!Array.isArray(seasons) || seasons.length === 0) return 1;

    const container = document.getElementById('seasonPills');
    container.replaceChildren(); // safe clear — no innerHTML

    seasons.forEach((s, i) => {
      const isActive = !!s.is_active || i === 0;
      const btn = document.createElement('button');
      btn.className = 'season-pill' + (isActive ? ' active' : '');
      // Validate season id is alphanumeric before storing/using it
      const seasonId = safeIdParam(s.id) || String(parseInt(s.id, 10) || '');
      btn.dataset.season = seasonId;
      setAttr(btn, 'aria-pressed', String(isActive));
      setText(btn, typeof s.label === 'string' ? s.label.slice(0, 60) : '');
      btn.addEventListener('click', function () { activateSeasonPill(this); });
      container.appendChild(btn);
    });

    const active = seasons.find(s => s.is_active) || seasons[0];
    return safeIdParam(active.id) || 1;
  } catch (err) {
    console.error('[HOF seasons]', err);
    return 1;
  }
}

/* ═══════════════════════════════════════════════════════════════
   16. fetchPodium — replaces card.innerHTML with DOM construction.
       Old code used onerror="this.parentElement.textContent='${initial}'"
       which let a crafted avatar_url break out of the attribute.
   ═══════════════════════════════════════════════════════════════ */
async function fetchPodium(seasonNum) {
  document.getElementById('podiumSkeleton').style.display = 'flex';
  document.getElementById('podiumRow').style.display      = 'none';

  // Hide all pod cards immediately — avoids placeholder flashes when
  // fewer than 3 members exist
  document.querySelectorAll('.pod-card').forEach(c => { c.style.display = 'none'; });

  try {
    const safeSeason = safeIdParam(seasonNum) || '1';
    const data = await safeFetchJson(`${API_BASE}/hof/season/${safeSeason}/top3`);
    if (!Array.isArray(data)) return;

    data.forEach(member => {
      // Validate rank before using it in a CSS selector — prevents
      // selector-syntax injection from a malformed API response
      const rank = parseInt(member.rank, 10);
      if (![1, 2, 3].includes(rank)) return;

      const card = document.querySelector(`.pod-card.r${rank}`);
      if (!card) return;

      const memberId = safeIdParam(member.member_id);
      const name     = typeof member.name === 'string' ? member.name.slice(0, 100) : '';
      const role     = typeof member.role === 'string' ? member.role.slice(0, 60) : '';
      const dept     = typeof member.dept === 'string' ? member.dept.slice(0, 60) : '';

      // Clone to strip any stale listeners, mirroring original behavior,
      // but without ever touching innerHTML for dynamic content
      const fresh = card.cloneNode(true);
      card.parentNode.replaceChild(fresh, card);
      fresh.style.display = '';

      if (memberId) {
        fresh.dataset.memberId = memberId;
        fresh.style.cursor = 'pointer';
        fresh.addEventListener('click', () => {
          window.location.href = `profile.html?id=${memberId}`;
        });
      }

      setText(fresh.querySelector('[data-field="name"]'), name);
      setText(fresh.querySelector('[data-field="role"]'), role);
      const deptEl = fresh.querySelector('[data-field="dept"]');
      if (deptEl) setText(deptEl, dept);

      const ptsEl = fresh.querySelector('[data-field="points"]');
      if (ptsEl) {
        ptsEl.dataset.target = String(safeNumber(member.points));
        runCounter(ptsEl);
      }

      /* ── Avatar — built safely, no innerHTML, no inline onerror ── */
      const av = fresh.querySelector('.pod-avatar');
      if (av) {
        av.replaceChildren(buildAvatarEl(buildImgSrc(member.avatar_url), name));
      }

      /* ── Progress bars — clamp percentages ── */
      if (member.bars && typeof member.bars === 'object') {
        const fills = fresh.querySelectorAll('.pod-bar-fill');
        if (fills[0]) fills[0].style.width = safePercent(member.bars.projects) + '%';
        if (fills[1]) fills[1].style.width = safePercent(member.bars.commits)  + '%';
        if (fills[2]) fills[2].style.width = safePercent(member.bars.reviews)  + '%';
      }
    });
  } catch (err) {
    console.error('[HOF podium]', err);
  } finally {
    document.getElementById('podiumSkeleton').style.display = 'none';
    document.getElementById('podiumRow').style.display      = '';
  }
}

/* ═══════════════════════════════════════════════════════════════
   17. BUILD A LEADERBOARD ROW — replaces tr.innerHTML.
       This is the biggest single fix: the old version concatenated
       seven untrusted fields (name, dept, role, points, progress_pct,
       trend, badges) directly into one innerHTML string, including
       another onerror breakout vector for the avatar.
   ═══════════════════════════════════════════════════════════════ */
function buildLeaderboardRow(m) {
  const memberId = safeIdParam(m.member_id);
  const name     = typeof m.name === 'string' ? m.name.slice(0, 100) : '';
  const role     = typeof m.role === 'string' ? m.role.slice(0, 60) : '';
  const dept     = typeof m.dept === 'string' ? m.dept.slice(0, 60) : '';
  const rank     = Math.max(1, Math.round(safeNumber(m.rank, 100000)));
  const points   = safeNumber(m.points);
  const progress = safePercent(m.progress_pct);
  const trend    = Number.isFinite(m.trend) ? m.trend : 0;
  const badges   = Array.isArray(m.badges) ? m.badges.slice(0, 10) : [];

  const tr = document.createElement('tr');
  tr.className = 'lb-row' + (rank <= 3 ? ' top3' : '');
  if (memberId) {
    tr.dataset.memberId = memberId;
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', () => { window.location.href = `profile.html?id=${memberId}`; });
  }
  tr.dataset.name   = name;
  tr.dataset.dept   = dept;
  tr.dataset.points = String(points);

  /* ── Rank cell ── */
  const tdRank = document.createElement('td');
  tdRank.className = 'lb-rank';
  tdRank.appendChild(buildRankBadge(rank));

  /* ── Member cell (avatar + name + role) ── */
  const tdMember = document.createElement('td');
  const memberWrap = document.createElement('div');
  memberWrap.className = 'lb-member';

  const avatarWrap = document.createElement('div');
  avatarWrap.className = 'lb-avatar' + (rank === 1 ? ' gold-border' : '');
  avatarWrap.appendChild(buildAvatarEl(buildImgSrc(m.avatar_url), name));

  const infoWrap = document.createElement('div');
  infoWrap.className = 'lb-member-info';
  const nameDiv = document.createElement('div');
  nameDiv.className = 'lb-name';
  setText(nameDiv, name);
  const roleDiv = document.createElement('div');
  roleDiv.className = 'lb-dept';
  setText(roleDiv, role);
  infoWrap.appendChild(nameDiv);
  infoWrap.appendChild(roleDiv);

  memberWrap.appendChild(avatarWrap);
  memberWrap.appendChild(infoWrap);
  tdMember.appendChild(memberWrap);

  /* ── Department cell ── */
  const tdDept = document.createElement('td');
  const deptBadge = document.createElement('span');
  deptBadge.className = 'badge badge-silver';
  setText(deptBadge, dept);
  tdDept.appendChild(deptBadge);

  /* ── Points cell ── */
  const tdPoints = document.createElement('td');
  tdPoints.className = 'lb-pts';
  setText(tdPoints, points.toLocaleString('ar-EG') + ' نقطة');

  /* ── Progress cell ── */
  const tdProg = document.createElement('td');
  tdProg.className = 'lb-prog';
  const progBg = document.createElement('div');
  progBg.className = 'lb-prog-bg';
  const progFill = document.createElement('div');
  progFill.className = 'lb-prog-fill';
  progFill.style.width = progress + '%';
  progBg.appendChild(progFill);
  tdProg.appendChild(progBg);

  /* ── Trend cell ── */
  const tdTrend = document.createElement('td');
  tdTrend.className = 'lb-trend';
  const trendClass = trend > 0 ? 'trend-up' : trend < 0 ? 'trend-down' : 'trend-same';
  const trendSym   = trend > 0 ? '▲' : trend < 0 ? '▼' : '—';
  const trendAbs   = trend !== 0 ? Math.abs(trend).toLocaleString('ar-EG') : '';
  const trendSpan = document.createElement('span');
  trendSpan.className = trendClass;
  setText(trendSpan, `${trendSym} ${trendAbs}`.trim());
  tdTrend.appendChild(trendSpan);

  /* ── Badges cell ── */
  const tdBadges = document.createElement('td');
  tdBadges.className = 'lb-badges';
  badges.forEach(b => {
    const span = document.createElement('span');
    span.className = 'badge badge-gold';
    setAttr(span, 'title', typeof b.name === 'string' ? b.name.slice(0, 60) : '');
    setText(span, typeof b.icon === 'string' && b.icon ? b.icon.slice(0, 8) : '⭐');
    tdBadges.appendChild(span);
  });

  tr.appendChild(tdRank);
  tr.appendChild(tdMember);
  tr.appendChild(tdDept);
  tr.appendChild(tdPoints);
  tr.appendChild(tdProg);
  tr.appendChild(tdTrend);
  tr.appendChild(tdBadges);

  return tr;
}

/* ═══════════════════════════════════════════════════════════════
   18. fetchLeaderboard
   ═══════════════════════════════════════════════════════════════ */
async function fetchLeaderboard(seasonNum, sort = 'points', search = '') {
  const skeleton = document.getElementById('lbSkeleton');
  const table    = document.getElementById('lbTable');
  skeleton.style.display = 'block';
  table.style.display    = 'none';

  try {
    const safeSeason = safeIdParam(seasonNum) || '1';
    const allowedSort = ['points', 'name', 'dept'];
    const safeSort = allowedSort.includes(sort) ? sort : 'points';
    const url = `${API_BASE}/hof/season/${safeSeason}/leaderboard?sort=${safeSort}&search=${encodeURIComponent(search)}`;

    const data = await safeFetchJson(url);
    if (!Array.isArray(data)) return;

    const tbody = document.getElementById('lbBody');
    tbody.replaceChildren(); // safe clear — no innerHTML

    data.forEach(m => {
      tbody.appendChild(buildLeaderboardRow(m));
    });

    setText(document.getElementById('lbCount'), data.length.toLocaleString('ar-EG') + ' عضو');

    requestAnimationFrame(() => requestAnimationFrame(() => {
      tbody.querySelectorAll('.lb-prog-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0';
        requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = w; }));
      });
    }));
  } catch (err) {
    console.error('[HOF leaderboard]', err);
  } finally {
    skeleton.style.display = 'none';
    table.style.display    = '';
  }
}

/* ═══════════════════════════════════════════════════════════════
   19. BUILD A TIMELINE ITEM — replaces the large item.innerHTML
       template, including the nested winners list and its own
       onerror breakout vector.
   ═══════════════════════════════════════════════════════════════ */
function buildTimelineWinner(w) {
  const name = typeof w.name === 'string' ? w.name.slice(0, 100) : '';
  const points = safeNumber(w.points);

  const wrap = document.createElement('div');
  wrap.className = 'tl-winner';
  setAttr(wrap, 'role', 'listitem');

  const avWrap = document.createElement('div');
  avWrap.className = 'tl-winner-av';
  avWrap.appendChild(buildAvatarEl(buildImgSrc(w.avatar_url), name));

  const infoWrap = document.createElement('div');
  infoWrap.className = 'tl-winner-info';
  const nameDiv = document.createElement('div');
  nameDiv.className = 'tl-winner-name';
  setText(nameDiv, name);
  const ptsDiv = document.createElement('div');
  ptsDiv.className = 'tl-winner-pts';
  setText(ptsDiv, points.toLocaleString('ar-EG') + ' نقطة');
  infoWrap.appendChild(nameDiv);
  infoWrap.appendChild(ptsDiv);

  wrap.appendChild(avWrap);
  wrap.appendChild(infoWrap);
  return wrap;
}

function buildTimelineItem(s, index, dotColors) {
  const label = typeof s.label === 'string' ? s.label.slice(0, 60) : '';
  const year  = typeof s.year === 'string' || typeof s.year === 'number' ? String(s.year).slice(0, 10) : '';
  const title = typeof s.title === 'string' ? s.title.slice(0, 150) : '';
  const isActive = !!s.is_active;
  const winners = Array.isArray(s.winners) ? s.winners : [];
  const seasonId = safeIdParam(s.id);

  const dotCls = isActive ? 'gold' : dotColors[index % dotColors.length];

  const item = document.createElement('div');
  item.className = 'tl-item reveal';
  setAttr(item, 'role', 'listitem');
  if (seasonId) item.dataset.seasonId = seasonId;
  item.style.transitionDelay = `${index * 0.05}s`;

  const dot = document.createElement('div');
  dot.className = `tl-dot ${dotCls}`;
  setAttr(dot, 'aria-hidden', 'true');

  const card = document.createElement('div');
  card.className = 'tl-card';

  const head = document.createElement('div');
  head.className = 'tl-head';

  const seasonSpan = document.createElement('span');
  seasonSpan.className = 'tl-season';
  setText(seasonSpan, `${label} • ${year}`);

  const titleH3 = document.createElement('h3');
  titleH3.className = 'tl-title';
  setText(titleH3, title);

  const statusBadge = document.createElement('span');
  statusBadge.className = isActive ? 'badge badge-gold' : 'badge badge-silver';
  setText(statusBadge, isActive ? 'الموسم الحالي' : 'منتهي');

  head.appendChild(seasonSpan);
  head.appendChild(titleH3);
  head.appendChild(statusBadge);

  const winnersWrap = document.createElement('div');
  winnersWrap.className = 'tl-winners';
  setAttr(winnersWrap, 'role', 'list');
  setAttr(winnersWrap, 'aria-label', `أبطال ${label}`);

  if (winners.length) {
    winners.forEach(w => winnersWrap.appendChild(buildTimelineWinner(w)));
  } else {
    const emptyMsg = document.createElement('span');
    emptyMsg.style.fontSize = '.8rem';
    emptyMsg.style.color = 'var(--text-muted)';
    setText(emptyMsg, 'لا توجد بيانات بعد');
    winnersWrap.appendChild(emptyMsg);
  }

  card.appendChild(head);
  card.appendChild(winnersWrap);

  item.appendChild(dot);
  item.appendChild(card);

  return item;
}

/* ═══════════════════════════════════════════════════════════════
   20. fetchSeasonHistory
   ═══════════════════════════════════════════════════════════════ */
async function fetchSeasonHistory() {
  try {
    const data = await safeFetchJson(`${API_BASE}/hof/seasons/history`);
    if (!Array.isArray(data) || data.length === 0) return;

    const timeline = document.getElementById('historyTimeline');
    timeline.replaceChildren(); // safe clear — no innerHTML
    const dotColors = ['gold', 'silver', 'green'];

    data.forEach((s, i) => {
      const item = buildTimelineItem(s, i, dotColors);
      timeline.appendChild(item);
    });

    timeline.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  } catch (err) {
    console.error('[HOF history]', err);
  }
}

/* ═══════════════════════════════════════════════════════════════
   21. INITIAL LOAD
   ═══════════════════════════════════════════════════════════════ */
(async () => {
  const seasonNum = await fetchSeasonPills();
  await Promise.all([
    fetchStats(),
    fetchPodium(seasonNum || 1),
    fetchLeaderboard(seasonNum || 1),
    fetchSeasonHistory()
  ]);
})();
