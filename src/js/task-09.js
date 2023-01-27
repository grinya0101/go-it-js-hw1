const buttonEl = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')
const bodyEl = document.querySelector('body')


buttonEl.addEventListener('click', onFormSubmit)


function onFormSubmit(event) {
  // event.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor()
  spanEL.textContent = bodyEl.style.backgroundColor
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




