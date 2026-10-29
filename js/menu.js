/* Filtro por categoría del menú digital, con animación al interactuar */
(function () {
  'use strict';

  const botones = document.querySelectorAll('button[data-filtro]');
  const secciones = document.querySelectorAll('section[data-categoria]');
  const estado = document.getElementById('estado-filtro');

  function animar(elemento, clase) {
    elemento.classList.remove(clase);
    void elemento.offsetWidth;            /* reinicia la animación */
    elemento.classList.add(clase);
    elemento.addEventListener('animationend', () => elemento.classList.remove(clase), { once: true });
  }

  function filtrar(valor) {
    secciones.forEach((seccion) => {
      const oculta = valor !== 'todos' && seccion.dataset.categoria !== valor;
      seccion.hidden = oculta;
      if (!oculta) animar(seccion.querySelector('.row'), 'entra');
    });

    botones.forEach((boton) => {
      const activo = boton.dataset.filtro === valor;
      boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
      boton.classList.toggle('btn-primary', activo);
      boton.classList.toggle('btn-outline-primary', !activo);
      if (activo) animar(boton, 'rebote');
    });

    if (estado) {
      const nombre = document.querySelector('button[data-filtro="' + valor + '"]').textContent;
      estado.textContent = 'Mostrando: ' + nombre;
    }
  }

  botones.forEach((boton) => {
    boton.addEventListener('click', () => filtrar(boton.dataset.filtro));
  });
})();
