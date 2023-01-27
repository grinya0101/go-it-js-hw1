const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange)

function onInputChange(evetn) {
    console.log(evetn.currentTarget);
    spanEl.textContent = evetn.currentTarget.value
}
