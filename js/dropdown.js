// Dropdown toggle
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    this.setAttribute('tabindex', 1);
    this.focus();
    this.classList.toggle('active');

    const menu = this.querySelector('.dropdown-menu');
    if (menu) {
      if (menu.style.display === 'block') {
        slideUp(menu, 300);
      } else {
        slideDown(menu, 300);
      }
    }
  });

  // Cerrar al perder el foco
  dropdown.addEventListener('blur', function () {
    this.classList.remove('active');
    const menu = this.querySelector('.dropdown-menu');
    if (menu) slideUp(menu, 300);
  });
});

// Cambiar el texto del dropdown
document.querySelectorAll('.dropdown .dropdown-menu li').forEach(item => {
  item.addEventListener('click', function () {
    const dropdown = this.closest('.dropdown');
    const span = dropdown.querySelector('span');
    const input = dropdown.querySelector('input');

    const imgPreview = document.getElementById("imgPreview");
    const nombreImagen = this.getAttribute('id') + '.png';
    imgPreview.setAttribute("src","../clock/img/"+nombreImagen);



    if (span) span.textContent = this.textContent;
    if (input) input.value = this.getAttribute('id');
  });
});


function slideUp(element, duration = 300) {
  element.style.height = element.offsetHeight + 'px';
  element.offsetHeight; // Forzar reflow
  element.style.transition = `height ${duration}ms, opacity ${duration}ms`;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.opacity = 0;

  setTimeout(() => {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('opacity');
    element.style.removeProperty('transition');
    element.style.removeProperty('overflow');
  }, duration);
}

function slideDown(element, duration = 300) {
  element.style.removeProperty('display');
  let display = window.getComputedStyle(element).display;
  if (display === 'none') display = 'block';
  element.style.display = display;

  const height = element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.opacity = 0;
  element.offsetHeight; // Forzar reflow
  element.style.transition = `height ${duration}ms, opacity ${duration}ms`;
  element.style.height = height + 'px';
  element.style.opacity = 1;

  setTimeout(() => {
    element.style.removeProperty('height');
    element.style.removeProperty('opacity');
    element.style.removeProperty('transition');
    element.style.removeProperty('overflow');
  }, duration);
}

/*document.querySelectorAll('.dropdown-menu li').forEach(item => {
  item.addEventListener('click', function () {
    // Buscar el input dentro del dropdown padre
    const dropdown = this.closest('.dropdown');
    const input = dropdown.querySelector('input');
    const inputValue = input ? input.value : '';
    
    // Crear el mensaje HTML
    const msg = `<span class="msg">Hidden input value: <strong>${inputValue}</strong></span>`;

    // Insertarlo en el elemento con clase .msg
    const msgElement = document.querySelector('.msg');
    if (msgElement) {
      msgElement.innerHTML = msg;
    }
  });
});*/