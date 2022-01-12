function changeColorInputOnClick() {
  const inputs = document.querySelectorAll('input');

  function changeColor(event) {
    const label = event.target.previousElementSibling;

    if (label.getAttribute('class') === 'on') {
      label.classList.remove('on');
    } else {
      label.classList.add('on');
    }
  }

  inputs.forEach(input => {
    ['focus', 'blur'].forEach(evento =>  {
      input.addEventListener(evento, changeColor)
    });
  });
}

changeColorInputOnClick();