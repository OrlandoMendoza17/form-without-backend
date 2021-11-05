const myEmail = "ommv.17@gmail.com";
const mailto_URL = `mailto:${myEmail}`;

const $form = document.getElementById("Formulario");
const $trucazo = document.getElementById("trucazo");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData($form)
  
  debugger
  
  const nombre = `Nombre: ${form.get("nombre")} ${form.get("apellido")}\n`
  const correo = `Correo: ${form.get("correo")}\n`
  const edad = `Edad: ${form.get("edad")}\n`
  const carrera = `Carrera: ${form.get("carrera")}\n`
  const gustos = `Gustos: ${form.get("gustos")}\n`
  
  const subject = `Envío de Formuario de ${nombre}`
  const body = `${nombre}${edad}${correo}${carrera}${gustos}`
  
  $trucazo.setAttribute("href", `${mailto_URL}?subject=${subject}&body=${nombre}`)
  
  $trucazo.click();
})