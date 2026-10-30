/* Validación con Bootstrap y envío por correo (sin servicios externos) */
(function () {
  'use strict';

  const formulario = document.querySelector('form[data-correo]');
  if (!formulario) return;

  const ctaBanner = document.getElementById('cta-banner-envio');

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated');
      const primerError = formulario.querySelector(':invalid');
      if (primerError) primerError.focus();
      return;
    }

    formulario.classList.remove('was-validated');

    let cuerpo = '';
    formulario.querySelectorAll('.form-control').forEach((campo) => {
      const etiqueta = formulario.querySelector('label[for="' + campo.id + '"]');
      cuerpo += (etiqueta ? etiqueta.textContent : campo.name) + ': ' + campo.value + '\n';
    });

    const campoAsunto = document.getElementById('asunto');
    const asunto = campoAsunto ? campoAsunto.value : formulario.dataset.asunto;

    if (ctaBanner) {
      ctaBanner.classList.remove('d-none');
      ctaBanner.classList.add('enter');
      ctaBanner.focus();
    }

    window.location.href = 'mailto:' + formulario.dataset.correo +
      '?subject=' + encodeURIComponent(asunto) +
      '&body=' + encodeURIComponent(cuerpo);
  });
})();