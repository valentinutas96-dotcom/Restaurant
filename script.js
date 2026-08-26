/* ═══════════════════════════════════════════
   FAMILY RESTAURANT KASHER — JavaScript
═══════════════════════════════════════════ */

// ── Menu Data ──────────────────────────────
let menuData = {
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
    const visual = item.image
      ? `<img class="menu__card-photo" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy" />`
      : `<span class="menu__card-emoji">${escapeHTML(item.emoji || '🍽️')}</span>`;
    card.innerHTML = `
      <div class="menu__card-img">
        ${visual}
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



// ── Easy visual editor content ─────────────
function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function setPhoneLinks(phone1, phone2) {
  const links = [...document.querySelectorAll('a[href^="tel:"]')];
  const phoneHref = phone => `tel:${String(phone || '').replace(/[^+\\d]/g, '')}`;

  if (phone1) {
    [links[0], links[2]].forEach((link, index) => {
      if (!link) return;
      link.href = phoneHref(phone1);
      link.textContent = index === 0 ? `📞 ${phone1} (резервации)` : phone1;
    });
  }

  if (phone2) {
    [links[1], links[3]].forEach((link, index) => {
      if (!link) return;
      link.href = phoneHref(phone2);
      link.textContent = index === 0 ? `📞 ${phone2}` : phone2;
    });
  }
}

function setSocialLinks(selector, url) {
  if (!url) return;
  document.querySelectorAll(selector).forEach(link => {
    link.href = url;
  });
}

function renderEditableGallery(items = []) {
  const gallery = document.querySelector('.gallery__masonry');
  if (!gallery || !items.length) return;

  gallery.innerHTML = '';
  items.slice(0, 12).forEach((item, index) => {
    const tile = document.createElement('div');
    tile.className = 'gallery__item';
    if (index === 0 || index === 4) tile.classList.add('gallery__item--tall');
    if (index === 3) tile.classList.add('gallery__item--wide');

    if (item.image) {
      const image = document.createElement('img');
      image.className = 'gallery__photo';
      image.src = item.image;
      image.alt = item.caption || 'Family Restaurant Kasher';
      image.loading = 'lazy';

      const caption = document.createElement('span');
      caption.className = 'gallery__caption';
      caption.textContent = item.caption || '';

      tile.append(image, caption);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'gallery__placeholder';
      placeholder.innerHTML = `📷<span>${escapeHTML(item.caption || 'Нова снимка')}</span>`;
      tile.appendChild(placeholder);
    }

    gallery.appendChild(tile);
  });
}

function applyEditableSiteContent(site) {
  if (!site) return;

  const hero = site.hero || {};
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    heroTitle.innerHTML = `${escapeHTML(hero.title || 'Family Restaurant')}<br><em>${escapeHTML(hero.highlight || 'Kasher')}</em>`;
  }
  setText('.hero__eyebrow', hero.eyebrow ? `— ${hero.eyebrow} —` : '');
  setText('.hero__subtitle', hero.subtitle);
  setText('.hero__family-note', hero.note);

  if (hero.image) {
    const heroBackground = document.querySelector('.hero__bg');
    if (heroBackground) {
      heroBackground.style.backgroundImage =
        `linear-gradient(to bottom, rgba(35,7,12,.25), rgba(35,7,12,.82)), url("${hero.image}")`;
      heroBackground.style.backgroundSize = 'cover';
      heroBackground.style.backgroundPosition = 'center';
    }
  }

  const about = site.about || {};
  const aboutTitle = document.querySelector('.about .section__title');
  if (aboutTitle) {
    aboutTitle.innerHTML = `${escapeHTML(about.title || '')}<br><em>${escapeHTML(about.highlight || '')}</em>`;
  }
  setText('.about__lead', about.lead);
  setText('.about__body', about.text);

  if (about.image) {
    const aboutPlaceholder = document.querySelector('.about__img-placeholder');
    if (aboutPlaceholder) {
      aboutPlaceholder.innerHTML = '';
      const image = document.createElement('img');
      image.className = 'about__real-photo';
      image.src = about.image;
      image.alt = 'Family Restaurant Kasher';
      image.loading = 'lazy';
      aboutPlaceholder.appendChild(image);
    }
  }

  renderEditableGallery(site.gallery);

  const contact = site.contact || {};
  setText('.contact__item:first-child div > span:first-of-type', contact.address);
  setPhoneLinks(contact.phone1, contact.phone2);
  setSocialLinks('a[href*="facebook.com"]', contact.facebook);
  setSocialLinks('a[href*="tiktok.com"]', contact.tiktok);
}

function applyEditableMenu(items) {
  if (!Array.isArray(items) || !items.length) return;

  const grouped = {
    starters: [],
    mains: [],
    grill: [],
    soups: [],
    desserts: [],
    drinks: []
  };

  items.forEach(item => {
    if (!grouped[item.category]) return;
    grouped[item.category].push({
      name: item.name || '',
      desc: item.description || '',
      price: item.price || '',
      emoji: item.emoji || '🍽️',
      image: item.image || ''
    });
  });

  menuData = grouped;
  const activeTab = document.querySelector('.menu__tab--active');
  renderMenu(activeTab?.dataset.cat || 'starters');
}

async function loadEditableContent() {
  try {
    const [siteResponse, menuResponse] = await Promise.all([
      fetch('content/site.json', { cache: 'no-store' }),
      fetch('content/menu.json', { cache: 'no-store' })
    ]);

    if (siteResponse.ok) applyEditableSiteContent(await siteResponse.json());
    if (menuResponse.ok) applyEditableMenu(await menuResponse.json());
  } catch (error) {
    console.warn('Редакторът временно не успя да зареди новото съдържание.', error);
  }
}

// ── Init ───────────────────────────────────
renderMenu('starters');
addRevealToSections();
loadEditableContent();
