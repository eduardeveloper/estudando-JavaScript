const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item, index, array) {
  // console.log(item, index, array);
});



const imgs = document.querySelectorAll('img');

let i = 0
imgs.forEach((item, index) => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));