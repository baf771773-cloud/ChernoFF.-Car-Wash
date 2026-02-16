document.addEventListener('DOMContentLoaded', () => {
  const panel = document.querySelector('.info-panel');
  const overlay = document.querySelector('.info-overlay');
  const close = document.querySelector('.info-close');
  const btn = document.querySelector('.info-btn');

  if (!panel || !overlay || !close || !btn) return;

  function openInfo() {
    panel.classList.add('active');
    overlay.classList.add('active');
  }

  function closeInfo() {
    panel.classList.remove('active');
    overlay.classList.remove('active');
    // больше не ставим localStorage!
  }

  // Автоматически через 10 секунд показываем окно
  setTimeout(openInfo, 10000);

  // Кнопка i тоже открывает
  btn.addEventListener('click', openInfo);

  // Крестик закрывает
  close.addEventListener('click', closeInfo);

  // Клик по затемнению закрывает
  overlay.addEventListener('click', closeInfo);
});


