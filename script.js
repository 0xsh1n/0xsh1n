

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 40 * i);
  });
}

function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });

  sr.reveal(".prj");
}

document.addEventListener("DOMContentLoaded", function () {
  initScrollReveal();

  const typingElement = document.querySelector('.typing-animation');
  typeWrite(typingElement);
});

