const $form = document.getElementById("Formulario");
const $resetBtn = document.getElementById("resetBtn");

const $alertModal = document.getElementById("alertModal");
const $hideBtn = document.getElementById("hideBtn");

const $modalTitle = $alertModal.querySelector("h3")
const $modalInfo = $alertModal.querySelector("p")

const modalState = (title, message, success) =>{
  $modalTitle.innerText = title
  $modalInfo.innerText = message
  
  if(success)
    $hideBtn.classList.remove("danger")
  else
    $hideBtn.classList.add("danger")
}

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData($form)

  if(form.get("edad") >= 0){
    // const response = await fetch('https://formspree.io/f/mbjqvpgb', {
    //   method: $form.method,
    //   body: form,
    //   headers: {
    //     "Accept": "application/json"
    //   }
    // })
  
    $alertModal.classList.toggle("d-none")
  
    if (true)
    // if (response.ok)
      modalState("¡Gracias!", "El formulario ha sido enviado con éxito.", true)
    else
      modalState("¡Lo sentimos!", "Ha habido un problema con el envío del formulario.", false)
      
  }else{
    alert("El valor de la edad no puede ser negativo.")
  }
  
})

$hideBtn.addEventListener("click", () => {
  $alertModal.classList.toggle("d-none")
  $resetBtn.click()
})