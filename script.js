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

document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      const startPosition = window.pageYOffset;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      const distance = targetPosition - startPosition;
      const duration = 900; // quanto maior, mais suave
      let start = null;

      function easeInOutCubic(t) {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(
          0,
          startPosition + distance * easedProgress
        );

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);

    });
  });

});
