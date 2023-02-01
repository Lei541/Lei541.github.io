function validateForm() {
  let x = document.forms["formulario"]["fmail"].value;
  if (x == "") {
    alert("Debe completar un email válido");
    return false;
  } else{
    alert("Su mensaje ha sido enviado con éxito.");
  }
}
