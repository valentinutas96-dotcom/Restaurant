/* ═══════════════════════════════════════════
   ВЕСЕЛО СЕЛО — JavaScript
═══════════════════════════════════════════ */

// ── Menu Data ──────────────────────────────
const menuData = {
  starters: [
    { name: 'Шопска салата', desc: 'Домати, краставици, чушки, лук и ренде бяло сирене', price: '8.90 лв', emoji: '🥗', tags: ['вегетарианско'] },
    { name: 'Кьопоолу', desc: 'Печени патладжани и чушки с чесън, домати и магданоз', price: '7.50 лв', emoji: '🫙', tags: ['вегетарианско', 'домашно'] },
    { name: 'Мезе плато', desc: 'Суджук, луканка, сирене, лютеница и домашен хляб', price: '18.90 лв', emoji: '🧀', badge: 'Любимо' },
    { name: 'Тиквичков хайвер', desc: 'Печени тиквички с чесън и зехтин, поднесени с пита', price: '6.90 лв', emoji: '🥒', tags: ['вегетарианско'] },
  ],
  mains: [
    { name: 'Каварма', desc: 'Телешко месо с гъби, чушки и домати в глинена гювечка', price: '22.90 лв', emoji: '🍲', badge: 'Хит', tags: ['традиционно'] },
    { name: 'Пълнени чушки', desc: 'Чушки с кайма, ориз и подправки, поднесени с кисело мляко', price: '16.90 лв', emoji: '🫑', tags: ['домашно'] },
    { name: 'Баница с месо', desc: 'Хрупкава домашна баница с телешка кайма и яйца', price: '14.90 лв', emoji: '🥧', tags: ['домашно'] },
    { name: 'Мусака', desc: 'Класическа балканска мусака с кайма и бешамел сос', price: '17.50 лв', emoji: '🍽️', tags: ['традиционно'] },
  ],
  grill: [
    { name: 'Кебапчета', desc: '6 бр. домашни кебапчета на дървена скара с лютеница', price: '15.90 лв', emoji: '🍖', badge: 'Топ продукт' },
    { name: 'Смесена скара', desc: 'Кебапчета, кюфтета, пиле и свинско от скарата, гарнитура', price: '28.90 лв', emoji: '🔥', tags: ['за двама'] },
    { name: 'Агнешки котлети', desc: 'Агнешко от местна ферма, мащерка и розмарин', price: '32.90 лв', emoji: '🥩', badge: 'Специалитет' },
    { name: 'Пиле на въглен', desc: 'Цяло пиле, мариновано 24 часа, с гарнитура и салата', price: '24.90 лв', emoji: '🍗', tags: ['традиционно'] },
  ],
  soups: [
    { name: 'Чорба от дроб', desc: 'Традиционна агнешка дробова чорба с подправки', price: '8.90 лв', emoji: '🥣', tags: ['традиционно'] },
    { name: 'Боб чорба', desc: 'Домашна боб чорба с морков, лук и кимион', price: '7.50 лв', emoji: '🫘', tags: ['вегетарианско'] },
    { name: 'Пилешка супа', desc: 'Бистра пилешка супа с домашни юфки и зеленчуци', price: '9.90 лв', emoji: '🍜', tags: ['домашно'] },
  ],
  desserts: [
    { name: 'Баклава', desc: 'Домашна баклава с орехи, мед и канела', price: '7.90 лв', emoji: '🍯', badge: 'Домашно' },
    { name: 'Тиквеник', desc: 'Хрупкав сладкиш с тиква, орехи и захар', price: '6.50 лв', emoji: '🥮', tags: ['традиционно'] },
    { name: 'Локум с мляко', desc: 'Кремообразен десерт с ванилия и пудра захар', price: '8.90 лв', emoji: '🍮', tags: ['вегетарианско'] },
  ],
  drinks: [
    { name: 'Домашна ракия', desc: 'Сливова ракия от собствена дестилерия, 50 мл', price: '4.90 лв', emoji: '🥃', badge: 'Домашно' },
    { name: 'Червено вино', desc: 'Каберне Совиньон, Долина Тракия, бутилка 750 мл', price: '28.90 лв', emoji: '🍷', tags: ['местно'] },
    { name: 'Бира Загорка', desc: 'Студена бира в бутилка или чаша наливна', price: '4.50 лв', emoji: '🍺' },
    { name: 'Айрян', desc: 'Домашен айрян, разбит с пресна мента', price: '3.90 лв', emoji: '🥛', tags: ['вегетарианско'] },
  ],
};

// ── Render Menu ────────────────────────────
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category] || [];
  grid.innerHTML = '';

  items.forEach((item, i) => {
    const tags = item.tags
      ? item.tags.map(t => `<span class="menu__tag">${t}</span>`).join('')
      : '';
    const badge = item.badge
      ? `<div class="menu__card-badge">${item.badge}</div>`
      : '';

    const card = document.createElement('div');
    card.className = 'menu__card reveal';
    card.style.transitionDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="menu__card-img">
        ${item.emoji}
        ${badge}
      </div>
      <div class="menu__card-body">
        <div class="menu__card-name">${item.name}</div>
        <div class="menu__card-desc">${item.desc}</div>
        <div class="menu__card-footer">
          <span class="menu__card-price">${item.price}</span>
          <div class="menu__card-tags">${tags}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Trigger animations
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  });
}

// ── Tab Switching ──────────────────────────
document.querySelectorAll('.menu__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu__tab').forEach(t => t.classList.remove('menu__tab--active'));
    tab.classList.add('menu__tab--active');
    renderMenu(tab.dataset.cat);
  });
});

// ── Nav Scroll & Burger ────────────────────
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ── Scroll Reveal ──────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Also add reveal class to key elements
function addRevealToSections() {
  const targets = [
    '.about__visual', '.about__text',
    '.events__card',
    '.contact__info', '.contact__map',
    '.features-strip__item',
  ];
  targets.forEach((selector, i) => {
    document.querySelectorAll(selector).forEach((el, j) => {
      el.classList.add('reveal');
      el.classList.add(`reveal-delay-${j + 1}`);
      observer.observe(el);
    });
  });
}

// ── Booking Form ───────────────────────────
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');

// Set min date to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}

bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = bookingForm.querySelector('button[type="submit"]');
  btn.textContent = 'Изпращане...';
  btn.disabled = true;

  // Simulate submission
  setTimeout(() => {
    bookingForm.style.display = 'none';
    bookingSuccess.style.display = 'block';
  }, 1200);
});

// ── Active Nav Link on Scroll ─────────────
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinksAll.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--gold-light)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── Init ───────────────────────────────────
renderMenu('starters');
addRevealToSections();