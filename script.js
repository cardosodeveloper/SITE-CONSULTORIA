// Animação simples ao aparecer na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .step").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);

});

// =============================
// Smooth Scroll com offset
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

  });
});
