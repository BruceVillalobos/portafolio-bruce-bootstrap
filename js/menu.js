// Filtro por categoría del menú
var botones = document.querySelectorAll('button[data-filtro]');
var secciones = document.querySelectorAll('section[data-categoria]');
var estado = document.getElementById('estado-filtro');

function filtrar(valor) {
  // Mostrar u ocultar secciones
  secciones.forEach(function (seccion) {
    if (valor === 'todos' || seccion.dataset.categoria === valor) {
      seccion.hidden = false;
    } else {
      seccion.hidden = true;
    }
  });

  // Marcar botón activo
  botones.forEach(function (boton) {
    if (boton.dataset.filtro === valor) {
      boton.setAttribute('aria-pressed', 'true');
      boton.classList.add('btn-primary');
      boton.classList.remove('btn-outline-primary');
    } else {
      boton.setAttribute('aria-pressed', 'false');
      boton.classList.remove('btn-primary');
      boton.classList.add('btn-outline-primary');
    }
  });

  // Texto de estado
  if (estado) {
    var botonActivo = document.querySelector('button[data-filtro="' + valor + '"]');
    if (botonActivo) {
      estado.textContent = 'Mostrando: ' + botonActivo.textContent;
    }
  }
}

botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    filtrar(boton.dataset.filtro);
  });
});