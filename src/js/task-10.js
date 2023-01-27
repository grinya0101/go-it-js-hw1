const divEl = document.querySelector('#controls')
const BoxdivEl = document.querySelector('#boxes')



const createEL = addEventListener('click', createBoxes)

function createBoxes(amount) {
  console.log(amount);
  return amount.map(optoin => { 
    const liEl = document.createElement('div')
    
    
  })
  
}







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



