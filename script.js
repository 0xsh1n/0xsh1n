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

  sr.reveal(".prje", { delay: 200 });
  sr.reveal(".prj", { delay: 300 });
  sr.reveal(".prjs", { interval: 400 });
}

document.addEventListener("DOMContentLoaded", function () {
  initScrollReveal();

  const typingElement = document.querySelector('.typing-animation');
  typeWrite(typingElement);
});

function hoverChangeDescription(targetElement) {
    const changeDescription = document.querySelector(".default-text");

    targetElement.addEventListener("mouseover", () => {
        const newText = targetElement.getAttribute('changeText');
        changeText(newText);
    });

    targetElement.addEventListener("mouseout", () => {
        resetText();
    });

    function changeText(newText) {
        changeDescription.innerHTML = newText;
    }

    function resetText() {
        changeDescription.innerHTML = "languages / tools";
    }
}


const imgElements = document.querySelectorAll('.imgsize');
imgElements.forEach((img) => {
    hoverChangeDescription(img);
});


