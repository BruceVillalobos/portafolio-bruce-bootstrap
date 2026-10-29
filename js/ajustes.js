(function () {
  'use strict';

  const root = document.documentElement;
  const KEYS = { tema: 'tema', tam: 'tam' };

  const botonOscuro = document.getElementById('ajuste-oscuro');
  const botonesTam = document.querySelectorAll('button[data-tam]');
  const elementosReveal = document.querySelectorAll('.reveal');

  let observador = null;

  function guardar(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {}
  }

  function marcarBotonTam() {
    const actual = root.getAttribute('data-tam');
    botonesTam.forEach((boton) => {
      const activo = boton.getAttribute('data-tam') === actual;
      boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
      boton.classList.toggle('active', activo);
    });
  }

  function aplicarTamano(valor) {
    if (!['peq', 'normal', 'grande'].includes(valor)) return;
    root.setAttribute('data-tam', valor);
    guardar(KEYS.tam, valor);
    marcarBotonTam();
  }

  function aplicarTema(valor) {
    root.setAttribute('data-bs-theme', valor);
    guardar(KEYS.tema, valor);
  }

  function observar() {
    if (!('IntersectionObserver' in window)) {
      elementosReveal.forEach((el) => el.classList.add('visible'));
      return;
    }

    if (observador) observador.disconnect();

    observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elementosReveal.forEach((el) => {
      if (!el.classList.contains('visible')) observador.observe(el);
    });
  }

  function init() {
    if (botonOscuro) {
      botonOscuro.checked = root.getAttribute('data-bs-theme') === 'dark';
      botonOscuro.addEventListener('change', (event) => {
        aplicarTema(event.target.checked ? 'dark' : 'light');
      });
    }

    botonesTam.forEach((boton) => {
      boton.addEventListener('click', () => aplicarTamano(boton.getAttribute('data-tam')));
    });

    marcarBotonTam();
    observar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();