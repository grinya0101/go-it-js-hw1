const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients')

 const ingredientsEL = optoin => {
  return ingredients.map(optoin => { 
    const liEl = document.createElement('li')
    liEl.classList.add('item')
    liEl.textContent = optoin
    return liEl
  })
}
 

const elements = ingredientsEL(ingredients)
console.log(elements[1]);

ulEl.append(...elements)



















// const ulEl = document.querySelector('#ingredients')

// const makeIngredients = options => {
// return options.map(option => {
// const liEl = document.createElement('li')
// liEl.textContent = option
// liEl.classList.add('item')
// return liEl
// })
// }

// const elements = makeIngredients(ingredients)

// ulEl.append(...elements)

