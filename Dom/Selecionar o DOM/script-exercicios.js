// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);


// Retorne no console apenas as imagens que começaram com a palavra imagem
const comecaComImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(comecaComImg);


// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);


// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2animais = animais.querySelector('h2');
console.log(animais);
console.log(h2animais);


// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);