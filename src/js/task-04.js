const btnElDecrement = document.querySelector('[data-action="decrement"]')

const btnElIncrement = document.querySelector('[data-action="increment"]')
const spanEl = document.querySelector('#value')


let counterValue = 0

btnElDecrement.addEventListener('click', onDecrementClick)

function onDecrementClick() {
   spanEl.textContent = counterValue -= 1
}


btnElIncrement.addEventListener('click', onIncrementClick)

function onIncrementClick() {
 spanEl.textContent = counterValue += 1
}

