const botonCargar = document.querySelector("#cargar-contactos");

botonCargar.addEventListener("click", async () => {
  console.log("Cargando Contactos ...");

  datos = await getContactos()
  console.log(datos)

  datos.forEach((contacto) => {
          adicionarContacto(contacto);
         });
 
 
});
const getContactos = async ()=>{
  const url = "https://raw.githubusercontent.com/Jackie0513/contactos_sample/main/contactos.json"

  const resp = await fetch (url);
  const data = await resp.json();

  return data;
}

