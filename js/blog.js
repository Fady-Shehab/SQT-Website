/* ═══════════════════════════════════════════════════════════════
   0. SECURITY UTILITIES
   Rule: ZERO API data passes through innerHTML or inline event
   handler strings in this file. Everything goes through
   textContent / setAttribute / addEventListener.
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

/** Whitelist a category string against known categories; falls back to a capped generic string. */
function safeCategory(cat) {
  if (typeof cat !== 'string') return '';
  return cat.slice(0, 40);
}

/** Build a small inline SVG icon from static (non-user) markup. */
function makeIcon(svgMarkup) {
  const ns  = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('width', '14');
  svg.setAttribute('height', '14');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2.5');
  svg.innerHTML = svgMarkup; // static string — not user data
  return svg;
}

/** Validates Content-Type before parsing JSON. */
async function safeFetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  const contentType = res.headers.get('Content-Type') || '';
  if (!contentType.includes('application/json')) return null;
  try { return await res.json(); } catch { return null; }
}

/* ═══════════════════════════════════════════════════════════════
   1. CONFIG
   ═══════════════════════════════════════════════════════════════ */
const API_BASE = 'https://sqt-website-backend-production.up.railway.app/api';

// Maps a post category to a badge color class — static lookup, no user data
const CATEGORY_BADGE = {
  'برمجة':         'badge-gold',
  'تصميم':         'badge-purple',
  'ذكاء اصطناعي':  'badge-green',
  'أمن سيبراني':   'badge-blue',
  'تجارب':         'badge-silver'
};
function badgeClassFor(category) {
  return CATEGORY_BADGE[category] || 'badge-silver';
}

/* ═══════════════════════════════════════════════════════════════
   2. THEME TOGGLE
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
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ═══════════════════════════════════════════════════════════════
   5. ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════════════ */
function runCounter(el) {
  const raw    = parseInt(el.dataset.target, 10);
  const target = (!isNaN(raw) && raw >= 0 && raw < 1_000_000_000) ? raw : 0; // clamp
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
const statsEl = document.getElementById('blog-stats');

function startBlogStatsCounters(stats) {
  if (!statsEl) return;
  const counters = statsEl.querySelectorAll('.counter');
  const values = [stats.totalPosts, stats.authorCount, stats.categoryCount, stats.tagCount];
  counters.forEach((el, i) => {
    const v = parseInt(values[i], 10);
    el.dataset.target = (!isNaN(v) && v >= 0) ? String(v) : '0';
  });
  counterObs.observe(statsEl);
}

/* ═══════════════════════════════════════════════════════════════
   6. SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const targetSelector = this.getAttribute('href'); // static HTML attribute — safe
    let t = null;
    try { t = document.querySelector(targetSelector); } catch { /* ignore invalid selector */ }
    if (t) {
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════════════════════════
   7. CATEGORY FILTER
   ═══════════════════════════════════════════════════════════════ */
let cards      = [];
const featured = document.getElementById('featuredCard');
const pills    = document.querySelectorAll('#catPills .cat-pill');
const noRes    = document.getElementById('noResults');
const countEl  = document.getElementById('postCount');
const ARABIC_NUMS = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];

function toArabicNum(n) {
  return String(n).replace(/\d/g, d => ARABIC_NUMS[d]);
}

function updateCount(n) {
  setText(countEl, toArabicNum(n) + ' مقال' + (n === 1 ? '' : 'ات'));
}

let activeCat = 'all';

function filterCards(cat) {
  // Only accept category strings that actually exist on rendered cards,
  // or the literal 'all' sentinel — never trust an arbitrary value blindly
  activeCat = typeof cat === 'string' ? cat : 'all';
  let visible = 0;

  cards.forEach(card => {
    const cardCat = card.dataset.cat || '';
    const show = activeCat === 'all' || cardCat === activeCat;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  if (featured && featured.style.display !== 'none') {
    const fcCat = featured.dataset.cat || '';
    const showFeatured = (activeCat === 'all' || fcCat === activeCat);
    featured.style.display = showFeatured ? '' : 'none';
  }

  noRes.classList.toggle('visible', visible === 0);
  updateCount(visible);

  pills.forEach(p => p.classList.toggle('active', p.dataset.cat === activeCat));

  cards.forEach(card => {
    if (card.style.display !== 'none') {
      card.classList.remove('visible');
      revealObs.observe(card);
    }
  });
}

pills.forEach(pill => {
  pill.addEventListener('click', () => filterCards(pill.dataset.cat));
});

/* ═══════════════════════════════════════════════════════════════
   8. TOPIC CARD FILTER
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.topic-card').forEach(tc => {
  tc.addEventListener('click', () => {
    filterCards(tc.dataset.filter);
    const gridEl = document.getElementById('blog-grid');
    if (gridEl) window.scrollTo({ top: gridEl.getBoundingClientRect().top + scrollY - 100, behavior: 'smooth' });
  });
});

/* ═══════════════════════════════════════════════════════════════
   9. SEARCH
   ═══════════════════════════════════════════════════════════════ */
const searchInput = document.getElementById('blogSearch');

searchInput.addEventListener('input', function () {
  // Cap query length — defensive against pathological input
  const q = this.value.trim().toLowerCase().slice(0, 200);
  let visible = 0;

  cards.forEach(card => {
    if (card.style.display === 'none' && activeCat !== 'all') return;
    // textContent reads back what we rendered as text — always safe to read
    const title   = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
    const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';
    const catCond = activeCat === 'all' || (card.dataset.cat || '') === activeCat;
    const show = catCond && (q === '' || title.includes(q) || excerpt.includes(q));
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  noRes.classList.toggle('visible', visible === 0);
  updateCount(visible);
});

/* ═══════════════════════════════════════════════════════════════
   10. LOAD MORE
   ═══════════════════════════════════════════════════════════════ */
const loadMoreWrap = document.getElementById('loadMore')?.closest('.load-more-wrap');

/* ═══════════════════════════════════════════════════════════════
   11. NEWSLETTER FORM
   ═══════════════════════════════════════════════════════════════ */
function isValidEmail(email) {
  return typeof email === 'string' &&
    email.length <= 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

document.getElementById('nlSubmit').addEventListener('click', function () {
  const emailInput = document.getElementById('nlEmail');
  const email = emailInput.value.trim().slice(0, 320);
  const fb    = document.getElementById('nlFeedback');

  if (!isValidEmail(email)) {
    setText(fb, 'يرجى إدخال بريد إلكتروني صحيح.');
    fb.style.color = '#F87171';
    return;
  }

  // NOTE: this currently only shows a success message client-side —
  // wire it up to a real /api/newsletter endpoint when ready, and
  // apply the same rate-limiting pattern used on the auth forms.
  setText(fb, 'تم الاشتراك بنجاح! شكراً لك.');
  fb.style.color = '#4ADE80';
  emailInput.value = '';
  setTimeout(() => { setText(fb, 'يمكنك إلغاء الاشتراك في أي وقت.'); fb.style.color = ''; }, 4000);
});

/* ═══════════════════════════════════════════════════════════════
   12. PAGE FADE-IN
   ═══════════════════════════════════════════════════════════════ */
document.body.style.opacity    = '0';
document.body.style.transition = 'opacity 0.38s ease';
window.addEventListener('load', () => { document.body.style.opacity = '1'; });

/* ═══════════════════════════════════════════════════════════════
   13. DATE FORMATTING
   ═══════════════════════════════════════════════════════════════ */
function formatArabicDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return ''; // never echo back a raw malformed string
  return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
}

/* ═══════════════════════════════════════════════════════════════
   14. BUILD A POST CARD — entirely via DOM APIs.
       This replaces makePostCardHtml(); the old version concatenated
       post.image into an inline onerror="..." string, which let a
       crafted image URL break out of the attribute and inject script.
       No part of this function uses innerHTML or inline event attrs.
   ═══════════════════════════════════════════════════════════════ */
function buildPostCard(post, delayIndex) {
  const title    = typeof post.title === 'string' ? post.title.slice(0, 200) : '';
  const excerpt  = typeof post.excerpt === 'string' ? post.excerpt.slice(0, 400) : '';
  const author   = typeof post.author === 'string' ? post.author.slice(0, 100) : '';
  const category = safeCategory(post.category);
  const cover    = safeUrl(post.image);
  const id       = safeIdParam(post.id);
  const tags     = Array.isArray(post.tags) ? post.tags.slice(0, 2) : [];
  const readTime = Number.isFinite(post.readTime) ? Math.max(0, Math.round(post.readTime)) : 0;
  const delay    = (delayIndex * 0.05).toFixed(2);

  const article = document.createElement('article');
  article.className = 'blog-card reveal';
  setAttr(article, 'role', 'listitem');
  article.tabIndex = 0;
  article.dataset.cat = category; // dataset assignment is not HTML — safe
  article.style.transitionDelay = `${delay}s`;
  setAttr(article, 'aria-label', 'اقرأ المقال');
  if (id) article.dataset.id = id;

  /* ── Cover image ── */
  const coverWrap = document.createElement('div');
  coverWrap.className = 'blog-cover';

  const img = document.createElement('img');
  setAttr(img, 'src', cover); // empty string if invalid — browser shows nothing, no crash
  setAttr(img, 'alt', 'غلاف المقال');
  img.loading = 'lazy';
  coverWrap.appendChild(img);

  // Build the placeholder up front but keep it hidden — swap on error
  // via addEventListener, never via innerHTML rewrite.
  const ph = document.createElement('div');
  ph.className = 'blog-cover-ph';
  ph.style.display = 'none';
  const phIcon = document.createElement('div');
  phIcon.className = 'blog-cover-ph-icon';
  const phLabel = document.createElement('p');
  phLabel.className = 'blog-cover-ph-label';
  setText(phLabel, 'صورة غير متاحة'); // generic label — never echoes the broken URL
  ph.appendChild(phIcon);
  ph.appendChild(phLabel);
  coverWrap.appendChild(ph);

  if (!cover) {
    img.style.display = 'none';
    ph.style.display = 'flex';
  } else {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      ph.style.display  = 'flex';
    });
  }

  const catBar = document.createElement('div');
  catBar.className = 'blog-cat-bar';
  const catBadge = document.createElement('span');
  catBadge.className = `badge ${badgeClassFor(category)}`;
  setText(catBadge, category || 'عام');
  catBar.appendChild(catBadge);
  coverWrap.appendChild(catBar);

  /* ── Body ── */
  const body = document.createElement('div');
  body.className = 'blog-body';

  const meta = document.createElement('div');
  meta.className = 'blog-meta';

  const authorMini = document.createElement('div');
  authorMini.className = 'blog-author-mini';
  const authorAv = document.createElement('div');
  authorAv.className = 'blog-author-av';
  setAttr(authorAv, 'aria-hidden', 'true');
  setText(authorAv, (author || '?').trim().charAt(0).toUpperCase());
  const authorName = document.createElement('span');
  authorName.className = 'blog-author-mini-name';
  setText(authorName, author);
  authorMini.appendChild(authorAv);
  authorMini.appendChild(authorName);

  const dot1 = document.createElement('span');
  dot1.className = 'blog-dot';
  setAttr(dot1, 'aria-hidden', 'true');

  const dateEl = document.createElement('time');
  dateEl.className = 'blog-date';
  const safeDate = (typeof post.date === 'string') ? post.date.slice(0, 40) : '';
  setAttr(dateEl, 'datetime', safeDate);
  setText(dateEl, formatArabicDate(post.date));

  const dot2 = document.createElement('span');
  dot2.className = 'blog-dot';
  setAttr(dot2, 'aria-hidden', 'true');

  const rtSpan = document.createElement('span');
  rtSpan.className = 'blog-rt';
  setText(rtSpan, toArabicNum(readTime) + ' دقائق');

  meta.appendChild(authorMini);
  meta.appendChild(dot1);
  meta.appendChild(dateEl);
  meta.appendChild(dot2);
  meta.appendChild(rtSpan);

  const h3 = document.createElement('h3');
  h3.className = 'blog-title';
  setText(h3, title);

  const pExcerpt = document.createElement('p');
  pExcerpt.className = 'blog-excerpt';
  setText(pExcerpt, excerpt);

  const foot = document.createElement('div');
  foot.className = 'blog-card-foot';

  const tagsWrap = document.createElement('div');
  tagsWrap.className = 'blog-tags';
  tags.forEach((t, i) => {
    const span = document.createElement('span');
    span.className = `badge ${i === 0 ? 'badge-silver' : 'badge-blue'}`;
    setText(span, typeof t === 'string' ? t.slice(0, 30) : '');
    tagsWrap.appendChild(span);
  });

  const link = document.createElement('a');
  setAttr(link, 'href', id ? `post.html?id=${id}` : 'post.html');
  link.className = 'btn-text';
  setAttr(link, 'aria-label', 'اقرأ المقال');
  link.appendChild(document.createTextNode('اقرأ المقال'));
  link.appendChild(makeIcon('<polyline points="15 18 9 12 15 6"/>'));

  foot.appendChild(tagsWrap);
  foot.appendChild(link);

  body.appendChild(meta);
  body.appendChild(h3);
  body.appendChild(pExcerpt);
  body.appendChild(foot);

  article.appendChild(coverWrap);
  article.appendChild(body);

  return article;
}

/* ═══════════════════════════════════════════════════════════════
   15. RENDER GRID
   ═══════════════════════════════════════════════════════════════ */
function renderGrid(posts) {
  const grid = document.getElementById('postsGrid');
  grid.replaceChildren(); // safe clear — no innerHTML

  cards = posts.map((p, i) => {
    const card = buildPostCard(p, i);
    grid.appendChild(card);
    return card;
  });

  cards.forEach(c => {
    revealObs.observe(c);
    c.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.querySelector('a')?.click(); }
    });
  });

  updateCount(cards.length);
}

/* ═══════════════════════════════════════════════════════════════
   16. RENDER FEATURED POST
   ═══════════════════════════════════════════════════════════════ */
function renderFeatured(post) {
  if (!post) {
    featured.style.display = 'none';
    return;
  }

  const title    = typeof post.title === 'string' ? post.title.slice(0, 200) : '';
  const excerpt  = typeof post.excerpt === 'string' ? post.excerpt.slice(0, 400) : '';
  const author   = typeof post.author === 'string' ? post.author.slice(0, 100) : '';
  const category = safeCategory(post.category);
  const cover    = safeUrl(post.image);
  const id       = safeIdParam(post.id);
  const readTime = Number.isFinite(post.readTime) ? Math.max(0, Math.round(post.readTime)) : 0;
  const tags     = Array.isArray(post.tags) ? post.tags : [];

  featured.style.display = '';
  featured.dataset.cat = category;

  const img   = document.getElementById('featuredImg');
  const imgPh = document.getElementById('featuredImgPh');

  if (cover) {
    setAttr(img, 'src', cover);
    setAttr(img, 'alt', title);
    img.style.display = 'block';
    imgPh.style.display = 'none';
    // addEventListener — never inline onerror
    img.onerror = null; // clear any previous handler before re-binding
    img.addEventListener('error', () => {
      img.style.display = 'none';
      imgPh.style.display = 'flex';
    }, { once: true });
  } else {
    img.removeAttribute('src');
    img.style.display = 'none';
    imgPh.style.display = 'flex';
  }

  setText(document.getElementById('featuredAuthorThumb'), (author || '?').trim().charAt(0).toUpperCase());
  setText(document.getElementById('featuredAuthorName'),  author);

  const dateEl = document.getElementById('featuredDate');
  const safeDate = (typeof post.date === 'string') ? post.date.slice(0, 40) : '';
  setAttr(dateEl, 'datetime', safeDate);
  setText(dateEl, formatArabicDate(post.date));

  setText(document.getElementById('featuredReadTime'), `${toArabicNum(readTime)} دقائق قراءة`);
  setText(document.getElementById('featuredTitle'),   title);
  setText(document.getElementById('featuredExcerpt'), excerpt);

  /* ── Tags — built via DOM, not innerHTML ── */
  const tagsContainer = document.getElementById('featuredTags');
  tagsContainer.replaceChildren();
  tags.forEach((t, i) => {
    const span = document.createElement('span');
    const cls = i === 0 ? badgeClassFor(category) : (i === 1 ? 'badge-blue' : 'badge-silver');
    span.className = `badge ${cls}`;
    setText(span, typeof t === 'string' ? t.slice(0, 30) : '');
    tagsContainer.appendChild(span);
  });

  setAttr(document.getElementById('featuredLink'), 'href', id ? `post.html?id=${id}` : 'post.html');

  featured.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); document.getElementById('featuredLink').click(); }
  });

  revealObs.observe(featured);
}

/* ═══════════════════════════════════════════════════════════════
   17. LOAD POSTS
   ═══════════════════════════════════════════════════════════════ */
async function loadPosts() {
  const status = document.getElementById('postsStatus');

  try {
    const posts = await safeFetchJson(`${API_BASE}/posts`);

    if (!Array.isArray(posts) || posts.length === 0) {
      document.getElementById('postsGrid').replaceChildren(); // safe clear
      noRes.classList.add('visible');
      updateCount(0);
      featured.style.display = 'none';
      if (loadMoreWrap) loadMoreWrap.style.display = 'none';
      startBlogStatsCounters({ totalPosts: 0, authorCount: 0, categoryCount: 0, tagCount: 0 });
      return;
    }

    const featuredPost = posts.find(p => p.featured) || posts[0];
    const gridPosts = posts.filter(p => p.id !== featuredPost.id);

    renderFeatured(featuredPost);
    renderGrid(gridPosts);

    if (loadMoreWrap) loadMoreWrap.style.display = 'none';

    const authors    = new Set(posts.map(p => p.author).filter(Boolean));
    const categories = new Set(posts.map(p => p.category).filter(Boolean));
    const tags        = new Set(posts.flatMap(p => Array.isArray(p.tags) ? p.tags : []));

    startBlogStatsCounters({
      totalPosts:    posts.length,
      authorCount:   authors.size,
      categoryCount: categories.size,
      tagCount:      tags.size
    });

    updateTopicCounts(posts);
  } catch (err) {
    console.error('[loadPosts]', err);
    if (status) setText(status, 'تعذر تحميل المقالات حالياً. حاول مرة أخرى لاحقاً.');
    featured.style.display = 'none';
    if (loadMoreWrap) loadMoreWrap.style.display = 'none';
    startBlogStatsCounters({ totalPosts: 0, authorCount: 0, categoryCount: 0, tagCount: 0 });
  }
}

/* ═══════════════════════════════════════════════════════════════
   18. UPDATE TOPIC CARD COUNTS
   ═══════════════════════════════════════════════════════════════ */
function updateTopicCounts(posts) {
  const catCounts = {};
  posts.forEach(p => {
    const cat = (typeof p.category === 'string' ? p.category.trim() : '');
    if (cat) catCounts[cat] = (catCounts[cat] || 0) + 1;
  });

  document.querySelectorAll('.topic-card').forEach(tc => {
    const filter  = tc.dataset.filter;
    const countEl = tc.querySelector('.topic-count');
    if (!countEl) return;

    const count = (filter === 'all') ? posts.length : (catCounts[filter] || 0);
    setText(countEl, toArabicNum(count) + (count === 1 ? ' مقال' : ' مقالات'));
  });
}

loadPosts();
