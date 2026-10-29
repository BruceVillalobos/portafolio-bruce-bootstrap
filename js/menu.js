/* Filtro por categoría del menú digital */
(function () {
  'use strict';

  const botones = document.querySelectorAll('button[data-filtro]');
  const secciones = document.querySelectorAll('section[data-categoria]');
  const estado = document.getElementById('estado-filtro');

  function filtrar(valor) {
    secciones.forEach((seccion) => {
      seccion.hidden = valor !== 'todos' && seccion.dataset.categoria !== valor;
    });

    botones.forEach((boton) => {
      const activo = boton.dataset.filtro === valor;
      boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
      boton.classList.toggle('btn-primary', activo);
      boton.classList.toggle('btn-outline-primary', !activo);
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
