
/////////////////////////////// Colour toggle /////////////////////////////

let toggle = document.getElementById("drip");
let colours = ['theme1', 'theme2', 'theme3', 'theme4'];

toggle.addEventListener("click", colourToggle);
// window.onload = colourToggle();

function colourToggle(e){

  // find random theme //
  let num = Math.floor(Math.random() * colours.length);
  let theme = colours[num];

  // apply theme to body //
  document.body.classList.remove('theme1', 'theme2', 'theme3', 'theme4');
  document.body.classList.add(theme);

  // document.documentElement.style.setProperty('---background', theme);
  // document.documentElement.style.setProperty('---text', theme);
  // document.documentElement.style.setProperty('---green', theme);
}


/////////////////////////////// Cursor /////////////////////////////

let cursor = document.getElementsByClassName("cursor")

console.log(cursorPosition)

addEventListener("mousemove", cursorPosition)

function cursorPosition (e) {
  console.log(e);

}