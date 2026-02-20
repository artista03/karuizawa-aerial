/* ========================================
   AERIAL WORKS - main.js
======================================== */

// ── カスタムカーソル ──────────────────────────
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
});

// ── パララックス（ヒーロー背景） ───────────────
const heroBg = document.querySelector('.hero__bg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroBg) heroBg.style.transform = `scale(1) translateY(${y * 0.3}px)`;
}, { passive: true });

// ── Nav: スクロールで背景追加 ──────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── ハンバーガーメニュー ──────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── パーティクル（星屑） ──────────────────────
(function initParticles() {
  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');
  const container = document.getElementById('particles');
  container.appendChild(canvas);

  function resize() {
    canvas.width  = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const count = 120;
  const particles = Array.from({ length: count }, () => ({
    x:     Math.random(),
    y:     Math.random(),
    r:     Math.random() * 1.4 + 0.3,
    speed: Math.random() * 0.00008 + 0.00003,
    alpha: Math.random() * 0.5 + 0.2,
    phase: Math.random() * Math.PI * 2,
  }));

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 1;
    particles.forEach(p => {
      const x = (p.x + p.speed * t) % 1;
      const y = p.y;
      const flicker = p.alpha * (0.6 + 0.4 * Math.sin(p.phase + t * 0.05));
      ctx.beginPath();
      ctx.arc(x * canvas.width, y * canvas.height, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 230, 255, ${flicker})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── IntersectionObserver（スクロールアニメ） ──
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

const animObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .process-step, .pricing__consult-item').forEach((el, i) => {
  el.setAttribute('data-animate', '');
  el.style.transitionDelay = `${i * 0.06}s`;
  animObserver.observe(el);
});

// ── ポートフォリオフィルター ─────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.opacity = show ? '1' : '0';
      item.style.pointerEvents = show ? 'auto' : 'none';
      item.style.transform = show ? 'scale(1)' : 'scale(0.95)';
      item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
  });
});

// ── お問い合わせフォーム ──────────────────────
const form = document.getElementById('contactForm');
form.addEventListener('submit', async e => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '送信中...';
  btn.disabled = true;

  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    btn.textContent = '送信しました ✓';
    btn.style.background = '#1a8a1a';
    form.reset();
    setTimeout(() => {
      btn.textContent = '送信する';
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  } else {
    btn.textContent = '送信に失敗しました。再度お試しください。';
    btn.disabled = false;
  }
});

// ── スムーズスクロール（ナビリンク） ─────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });
  });
});
