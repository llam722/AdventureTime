
// PLACE POKEMON ON PAGE:



// select element by image tag
const imgArr = document.getElementsByTagName('img')

// create random number
let randomNum = Math.floor(Math.random() * (imgArr.length));

// create pokemon next to image selected by random number
const selectedImg = imgArr[randomNum];
new createPokemon(selectedImg);


// Add board ontop of existing page -> add to DOM
// Add polemon image (maybe a buttom) with event listener
// When clicked, catch pokemon








class Cursor {
  constructor(el){
  this.style.cursor = 'crosshair'

  }
}

const newCursor = new Cursor();