// Get the modal
var modal = document.getElementById("miModal");

// Get the button that opens the modal
var btn = document.getElementById("botonFondo");

// Get the <span> element that closes the modal
var btnClose = document.getElementById("close");

var flex = document.getElementById("flex");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == flex) {
    modal.style.display = "none";
  }
}


btnModalAceptar.onclick = function() {
  const background = document.getElementById("background");
   const nombreImagen = 'fondo' + background.value + '.png';
  console.log(background.value);
  document.body.style.background="url('../clock/img/"+ nombreImagen + "')";
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundSize='cover';

}


