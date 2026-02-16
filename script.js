/* =========================
   ЛЕНИВАЯ ПОДГРУЗКА КАРТИНОК
========================= */
function loadImages(container) {
  if (!container) return;

  const imgs = container.querySelectorAll('img[data-src]');

  imgs.forEach(img => {
    const src = img.dataset.src;

    if (!img.getAttribute('src')) {
      const temp = new Image();
      temp.onload = () => {
        img.src = src;
        img.classList.add('loaded');
      };
      temp.src = src;
    }
  });
}


/* =========================
   ВНУТРЕННИЕ КНОПКИ УСЛУГ
========================= */
const buttons = document.querySelectorAll('.btn-class');
const blocks = document.querySelectorAll('.service-block');
const prices = document.querySelectorAll('.price-block');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    let activeBlock = null;

    blocks.forEach(block => {
      const isActive = block.id === target;
      block.classList.toggle('active', isActive);
      if (isActive) activeBlock = block;
    });

    prices.forEach(price => {
      price.classList.toggle('active', price.dataset.price === target);
    });

    // 🔥 грузим картинки в активном блоке
    loadImages(activeBlock);
  });
});

/* =========================
   ВЕРХНЕЕ МЕНЮ (ТАБЫ)
========================= */
const topBtns = document.querySelectorAll('.navbar .btn');
const tabs = document.querySelectorAll('.tab-block');

topBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    topBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;
    let activeTab = null;

    tabs.forEach(tab => {
      const isActive = tab.id === target;
      tab.classList.toggle('active', isActive);
      if (isActive) activeTab = tab;
    });

    // 🔥 грузим картинки во всей вкладке
    loadImages(activeTab);

    if (activeTab) {
  requestAnimationFrame(() => {
    loadImages(activeTab);
  });
  activeTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =========================
   МОБИЛЬНАЯ ВЫСОТА
========================= */
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setVh);
setVh();

/* =========================
   SEO ТЕКСТ
========================= */
const seoBtn = document.querySelector('.seo-toggle');
if (seoBtn) {
  seoBtn.addEventListener('click', () => {
    document.querySelector('.seo-text').classList.toggle('hidden');
  });
}
