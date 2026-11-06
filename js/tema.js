// Tema y tamaño de letra guardados en el navegador
var root = document.documentElement;

var temaGuardado = localStorage.getItem('tema');
if (temaGuardado === 'dark' || temaGuardado === 'light') {
  root.setAttribute('data-bs-theme', temaGuardado);
} else {
  root.setAttribute('data-bs-theme', 'light');
}

var tamGuardado = localStorage.getItem('tam');
if (tamGuardado === 'peq' || tamGuardado === 'normal' || tamGuardado === 'grande') {
  root.setAttribute('data-tam', tamGuardado);
} else {
  root.setAttribute('data-tam', 'normal');
}

root.classList.add('js');