(function () {
  'use strict';

  const root = document.documentElement;
  const KEYS = { tema: 'tema', tam: 'tam' };
  const TEMAS = ['light', 'dark'];
  const TAMANOS = ['peq', 'normal', 'grande'];

  const mqOscuro = window.matchMedia('(prefers-color-scheme: dark)');

  function leer(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function detectarTema() {
    const guardado = leer(KEYS.tema);
    if (TEMAS.includes(guardado)) return guardado;
    return mqOscuro.matches ? 'dark' : 'light';
  }

  function detectarTamano() {
    const guardado = leer(KEYS.tam);
    if (TAMANOS.includes(guardado)) return guardado;
    return 'normal';
  }

  root.setAttribute('data-bs-theme', detectarTema());
  root.setAttribute('data-tam', detectarTamano());
  root.classList.add('js');

  mqOscuro.addEventListener('change', (event) => {
    if (!leer(KEYS.tema)) {
      root.setAttribute('data-bs-theme', event.matches ? 'dark' : 'light');
    }
  });

  window.addEventListener('storage', (event) => {
    if (!event.key) return;

    if (event.key === KEYS.tema) {
      root.setAttribute('data-bs-theme', TEMAS.includes(event.newValue) ? event.newValue : detectarTema());
    }

    if (event.key === KEYS.tam) {
      root.setAttribute('data-tam', TAMANOS.includes(event.newValue) ? event.newValue : detectarTamano());
    }
  });
})();