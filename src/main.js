// PLACE POKEMON ON PAGE:

// select element by image tag
const imgArr = document.getElementsByTagName("img");

// create random number
let randomNum = Math.floor(Math.random() * imgArr.length);

// create pokemon next to image selected by random number
const selectedImg = imgArr[randomNum];
console.log("about to create a pokemon");
new CreatePokemon(selectedImg);

// Add board ontop of existing page -> add to DOM
// Add polemon image (maybe a buttom) with event listener
// When clicked, catch pokemon

// document.body.style.cursor = "src/assets/cursor/pokemon.png";

$("html").css("cursor: url('src/assets/cursor/pokemon.png'), auto");
// let elementToChange = document.getElementsByTagName("body")[0];
// elementToChange.style.cursor = "url('src/assets/cursor/pokemon.png'), auto";
// class Cursor {
//   constructor(el) {
//     this.style.cursor = "crosshair";
//   }
// }

// const newCursor = new Cursor();
// (document.getElementById("demo").style.cursor = url(
//   "src/assets/cursor/pokemon.png"
// )),
//   auto;
