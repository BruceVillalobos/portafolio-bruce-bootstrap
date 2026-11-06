// Validación y envío del formulario por correo
var formulario = document.querySelector('form[data-correo]');
var ctaBanner = document.getElementById('cta-banner-envio');

if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar campos obligatorios
    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated');
      var primerError = formulario.querySelector(':invalid');
      if (primerError) {
        primerError.focus();
      }
      return;
    }

    formulario.classList.remove('was-validated');

    // Armar el cuerpo del correo
    var cuerpo = '';
    var campos = formulario.querySelectorAll('.form-control');
    campos.forEach(function (campo) {
      var etiqueta = formulario.querySelector('label[for="' + campo.id + '"]');
      var nombre = campo.name;
      if (etiqueta) {
        nombre = etiqueta.textContent;
      }
      cuerpo = cuerpo + nombre + ': ' + campo.value + '\n';
    });

    // Asunto
    var campoAsunto = document.getElementById('asunto');
    var asunto = formulario.dataset.asunto;
    if (campoAsunto) {
      asunto = campoAsunto.value;
    }

    // Mostrar banner de confirmación
    if (ctaBanner) {
      ctaBanner.classList.remove('d-none');
      ctaBanner.focus();
    }

    // Abrir el correo
    window.location.href = 'mailto:' + formulario.dataset.correo +
      '?subject=' + encodeURIComponent(asunto) +
      '&body=' + encodeURIComponent(cuerpo);
  });
}