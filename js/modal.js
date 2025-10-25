// Get the modal
var modal = document.getElementById("miModal");
var contenidoModal = document.getElementById("contenidoModal");

// Get the button that opens the modal
var btn = document.getElementById("botonFondo");

// Get the <span> element that closes the modal
var btnClose = document.getElementById("close");

var flex = document.getElementById("flex");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  contenidoModal.classList.remove('modal-close');
  contenidoModal.classList.add('modal-open');
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
  contenidoModal.classList.remove('modal-open');
  contenidoModal.classList.add('modal-close');

 contenidoModal.addEventListener('animationend', function handler() {
    modal.style.display = 'none';
    contenidoModal.removeEventListener('animationend', handler);
  });
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == flex) {
    
contenidoModal.classList.remove('modal-open');
  contenidoModal.classList.add('modal-close');

 contenidoModal.addEventListener('animationend', function handler() {
    modal.style.display = 'none';
    contenidoModal.removeEventListener('animationend', handler);
    });
  }
}


btnModalAceptar.onclick = function() {
  const background = document.getElementById("background");
  //const nombreImagen = 'fondo' + background.value + '.png';
  //console.log(background.value);
  /*document.body.style.background="url('../clock/img/"+ nombreImagen + "')";
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundSize='cover';*/


  /*document.body.classList.remove('backgroud-default');
  document.body.classList.add('backgroud-fondo1');*/
  const nombreClase = background.value;
  const claseGuardada = localStorage.getItem('background-class');

  console.log(claseGuardada);
  document.body.classList.remove(claseGuardada);
  document.body.classList.add('background-'+nombreClase)
  localStorage.setItem('background-class','background-'+nombreClase);
  

}



