var botonAdicionar = document.querySelector("#adicionar-contacto");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adicionar");
  const contacto = capturarDatoscontactos(form);
  
 

  let errores = validarcontacto(contacto);

  if (errores.length > 0) {
    exhibirMensajesErr(errores);
    return;
  }
  
  adicionarContacto(contacto);
  document.querySelector("#mensajes-errores").innerHTML = "";

  form.reset();
});

const adicionarContacto = (contacto)=>{
  const contactoTr = crearTr(contacto);
  const tabla = document.querySelector("#tabla-contactos");
  tabla.appendChild(contactoTr);
}


const capturarDatoscontactos = (form) => ({
  nombre: form.nombre.value,
  telefono: form.telefono.value,
  email: form.email.value,
});

const crearTr = (contacto) => {
  const contactoTr = document.createElement("tr");
  contactoTr.classList.add("contacto");

  contactoTr.appendChild(crearTd(contacto.nombre, "info-nombre"));
  contactoTr.appendChild(crearTd(contacto.telefono, "info-telefono"));
  contactoTr.appendChild(crearTd(contacto.email, "info-email"));

  return contactoTr;
};

const crearTd = (dato, clase) => {
  const td = document.createElement("td");
  td.textContent = dato;
  td.classList.add(clase);

  return td;
};
const validarcontacto = (contacto) => {
  const errores = [];
  if (contacto.nombre.length == 0) {
    errores.push("El nombre no puede estar vacio");
  }
  if (contacto.telefono.length == 0) {
    errores.push("El telefono no puede estar vacio");
  }
  if (contacto.email.length == 0) {
    errores.push("La email no puede estar vacia");
  }

  return errores;
};

const exhibirMensajesErr = (errores) => {
  const ul = document.querySelector("#mensajes-errores");
  ul.innerHTML = "";

  errores.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
};
