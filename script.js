// scroll qilganda elementlar asta-sekin paydo bo'lishi uchun
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll(
        '.skill-card, .feature-card, .step-card, .tier-card, .vision__quote, .founder__grid, .pdf-card'
    );

    elements.forEach(function (el) {
        el.classList.add('animate-on-scroll');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(function (el) {
        observer.observe(el);
    });
});
