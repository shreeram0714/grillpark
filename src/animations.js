// src/animations.js
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-on-scroll, section, .service-card, .menu-item, .review-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  const heroItems = document.querySelectorAll('.hero-content > *');
  heroItems.forEach((el, i) => {
    el.classList.add('fade-in');
    setTimeout(() => el.classList.add('visible'), i * 300);
  });

  if (!document.querySelector('.whatsapp-button')) {
    const wa = document.createElement('a');
    wa.href = 'https://wa.me/919000000000';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.className = 'whatsapp-button';
    wa.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" style="width:28px;height:28px;">
        <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.11.55 4.08 1.52 5.78L2 22l4.26-1.4a9.984 9.984 0 0 0 5.78 1.52c5.56 0 10.04-4.48 10.04-10.04S17.6 2 12.04 2zm0 18c-1.83 0-3.57-.5-5.08-1.44l-.36-.21-3.02.99.99-3.02-.21-.36A8.005 8.005 0 0 1 4 12.04c0-4.42 3.6-8.02 8.04-8.02s8.04 3.6 8.04 8.02-3.6 8.02-8.04 8.02zm4.43-5.97c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12s-.62.79-.76.95c-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3s-.84.82-.84 2.01c0 1.19.86 2.34.98 2.5.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.52.58.2 1.11.17 1.53.1.47-.08 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
      </svg>`;
    document.body.appendChild(wa);
  }
});