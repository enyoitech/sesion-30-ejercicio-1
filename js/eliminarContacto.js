const tabla = document.querySelector("#tabla-contactos");

tabla.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});


