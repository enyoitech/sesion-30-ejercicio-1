const campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", () => {
  const contactosAll = document.querySelectorAll(".contacto");

  if (campoFiltro.value.length > 0) {
    for (let i = 0; i < contactosAll.length; i++) {
      const contacto = contactosAll[i];
      const tdNombre = contacto.querySelector(".info-nombre");
      const nombre = tdNombre.textContent;

      const expresion = new RegExp(campoFiltro.value,"i");

      if (!expresion.test(nombre)) {
        contacto.classList.add("invisible");
      } else {
        contacto.classList.remove("invisible");
      }
    }
  } else {
    for (let i = 0; i < contactosAll.length; i++) {
      const contacto = contactosAll[i];
      contacto.classList.remove("invisible");
      
    }
  }
});
