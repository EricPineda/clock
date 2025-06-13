if (localStorage.getItem('background-class') === 'background-default'){
    document.body.classList.add('background-default');
}else if (localStorage.getItem('background-class') === 'background-fondo1'){
    document.body.classList.add('background-fondo1');
}else if (localStorage.getItem('background-class') === 'background-fondo2'){
    document.body.classList.add('background-fondo2');
}else if (localStorage.getItem('background-class') === 'background-fondo3'){
    document.body.classList.add('background-fondo3');
}else if (localStorage.getItem('background-class') === 'background-fondo4'){
    document.body.classList.add('background-fondo4');
}else if (localStorage.getItem('background-class') === 'background-fondo5'){
    document.body.classList.add('background-fondo5');
}else if (localStorage.getItem('background-class') === 'background-fondo6'){
    document.body.classList.add('background-fondo6');
}else if (localStorage.getItem('background-class') === 'background-fondo7'){
    document.body.classList.add('background-fondo7');
}else if (localStorage.getItem('background-class') === 'background-fondo8'){
    document.body.classList.add('background-fondo8');
}else if (localStorage.getItem('background-class') === 'background-fondo9'){
    document.body.classList.add('background-fondo9');
}else if (localStorage.getItem('background-class') === 'background-fondo10'){
    document.body.classList.add('background-fondo10');
}else if (localStorage.getItem('background-class') === null ){
    document.body.classList.add('background-default');
    localStorage.setItem('background-class','background-default');
}else{
   document.body.classList.add('background-default');
   localStorage.setItem('background-class','background-default');
}

