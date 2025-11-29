const botonesMenu = document.querySelectorAll('.contenedorBotones .boton');

botonesMenu.forEach(boton => {
  boton.addEventListener('mouseenter', () => {
    //console.log("reanudar");
    boton.style.animationPlayState = 'running'; //reanuda animación
  });

  boton.addEventListener('mouseleave', () => {
    //console.log("pausar");
    boton.style.animationPlayState = 'paused'; //pausa animación
  });
});



  document.getElementById("btnRecarga").addEventListener('mouseenter', () => {
    document.getElementById("btnRecarga").style.animationPlayState = 'running'; //reanuda animación
  });

  document.getElementById("btnRecarga").addEventListener('mouseleave', () => {
    document.getElementById("btnRecarga").style.animationPlayState = 'paused'; //pausa animación
  });



 // Delegación: el listener está en el contenedor, no en cada botón
/* document.getElementById("asideBar").addEventListener('mouseenter', (e) => {
  if (e.target.classList.contains('btnRecarga')) {
    e.target.style.animationPlayState = 'running';

  }
}, true); // el true asegura que capte el "mouseenter" de hijos

document.getElementById("asideBar").addEventListener('mouseleave', (e) => {
  if (e.target.classList.contains('btnRecarga')) {
    e.target.style.animationPlayState = 'paused';

  }
}, true);
*/