const backgrounds = [
    "Atardecer cósmico", 
    "Bosque de neón", 
    "Océano turquesa", 
    "Pastel decorado",
    "Pasión intensa", 
    "Lavanda galáctica",
    "Seda lapislazuli",
    "Menta suave",
    "Ocaso tropical",
    "Frescura de caramelo",
    "Esencia otoñal"
];


if (localStorage.getItem('background-class') === 'background-default'){
    document.body.classList.add('background-default');
    cargarPreviewFormulario(backgrounds[9],"fondo10");
}else if (localStorage.getItem('background-class') === 'background-fondo1'){
    document.body.classList.add('background-fondo1');
    cargarPreviewFormulario(backgrounds[0],"fondo1");
}else if (localStorage.getItem('background-class') === 'background-fondo2'){
    document.body.classList.add('background-fondo2');
    cargarPreviewFormulario(backgrounds[1],"fondo2");
}else if (localStorage.getItem('background-class') === 'background-fondo3'){
    document.body.classList.add('background-fondo3');
    cargarPreviewFormulario(backgrounds[2],"fondo3");
}else if (localStorage.getItem('background-class') === 'background-fondo4'){
    document.body.classList.add('background-fondo4');
    cargarPreviewFormulario(backgrounds[3],"fondo4");
}else if (localStorage.getItem('background-class') === 'background-fondo5'){
    document.body.classList.add('background-fondo5');
    cargarPreviewFormulario(backgrounds[4],"fondo5");
}else if (localStorage.getItem('background-class') === 'background-fondo6'){
    document.body.classList.add('background-fondo6');
    cargarPreviewFormulario(backgrounds[5],"fondo6");
}else if (localStorage.getItem('background-class') === 'background-fondo7'){
    document.body.classList.add('background-fondo7');
    cargarPreviewFormulario(backgrounds[6],"fondo7");
}else if (localStorage.getItem('background-class') === 'background-fondo8'){
    document.body.classList.add('background-fondo8');
    cargarPreviewFormulario(backgrounds[7],"fondo8");
}else if (localStorage.getItem('background-class') === 'background-fondo9'){
    document.body.classList.add('background-fondo9');
    cargarPreviewFormulario(backgrounds[8],"fondo9");
}else if (localStorage.getItem('background-class') === 'background-fondo10'){
    document.body.classList.add('background-fondo10');
    cargarPreviewFormulario(backgrounds[9],"fondo10");
}else if (localStorage.getItem('background-class') === 'background-fondo11'){
    document.body.classList.add('background-fondo11');
    cargarPreviewFormulario(backgrounds[10],"fondo11");
}else if (localStorage.getItem('background-class') === null ){
    document.body.classList.add('background-default');
    localStorage.setItem('background-class','background-default');
    cargarPreviewFormulario(backgrounds[9],"fondo10");
}else{
   document.body.classList.add('background-default');
   localStorage.setItem('background-class','background-default');
   cargarPreviewFormulario(backgrounds[9],"fondo10");
}

function cargarPreviewFormulario (titulo,fondo){
   const fondoTitulo = document.getElementById("fondoTitulo");
   const imgPreview = document.getElementById("imgPreview");
   const nombreImagen = fondo + '.png';
   const background = document.getElementById("background");

   imgPreview.setAttribute("src","img/"+nombreImagen);
   fondoTitulo.textContent = titulo;
   background.value = fondo;

/*document.querySelectorAll('.dropdown .dropdown-menu li').forEach(item => {
  if(item.id === fondo){
  }
});*/


  }