// Botones de tema oscuro y tamaño de letra
var root = document.documentElement;
var botonOscuro = document.getElementById('ajuste-oscuro');
var botonesTam = document.querySelectorAll('button[data-tam]');

// Marca visualmente el botón de tamaño activo
function marcarBotonTam() {
  var actual = root.getAttribute('data-tam');
  botonesTam.forEach(function (boton) {
    if (boton.getAttribute('data-tam') === actual) {
      boton.setAttribute('aria-pressed', 'true');
      boton.classList.add('active');
    } else {
      boton.setAttribute('aria-pressed', 'false');
      boton.classList.remove('active');
    }
  });
}

// Cambiar tamaño
botonesTam.forEach(function (boton) {
  boton.addEventListener('click', function () {
    var valor = boton.getAttribute('data-tam');
    root.setAttribute('data-tam', valor);
    localStorage.setItem('tam', valor);
    marcarBotonTam();
  });
});

// Cambiar tema oscuro
if (botonOscuro) {
  if (root.getAttribute('data-bs-theme') === 'dark') {
    botonOscuro.checked = true;
  }
  botonOscuro.addEventListener('change', function () {
    if (botonOscuro.checked) {
      root.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('tema', 'dark');
    } else {
      root.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('tema', 'light');
    }
  });
}

// Animación de aparición al hacer scroll
var elementosReveal = document.querySelectorAll('.reveal');

function mostrarAlScroll() {
  elementosReveal.forEach(function (el) {
    var posicion = el.getBoundingClientRect().top;
    if (posicion < window.innerHeight - 40) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarAlScroll);
mostrarAlScroll();

marcarBotonTam();