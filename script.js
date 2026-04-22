/* ============================================
   SABOR DA CASA — Interatividade
   ============================================ */

// Ano dinâmico no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal de categorias ao rolar
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('[data-reveal]').forEach((el) => {
    revealObserver.observe(el);
});

// Abas da seção Evento
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach((t) => {
            const active = t === tab;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        panels.forEach((panel) => {
            const active = panel.dataset.panel === target;
            panel.classList.toggle('is-active', active);
            if (active) {
                panel.removeAttribute('hidden');
            } else {
                panel.setAttribute('hidden', '');
            }
        });
    });
});

// Sombra sutil na nav ao rolar (opcional, só visual)
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 80 && current > lastScroll) {
        nav.style.transition = 'opacity 0.4s ease';
    }
    lastScroll = current;
}, { passive: true });
