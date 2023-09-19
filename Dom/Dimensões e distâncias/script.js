// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg =  document.querySelector('img');
const distancia = primeiraImg.offsetTop;
console.log(distancia);

// Retorne a soma da largura de todas as imagens

function somaImagens () {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function() {  /* FAZ CARREGAR PRIMEIRO */
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth > 48 && linkHeight > 48) {
    console.log('Padrao');
  } else {
    console.log('Fora do padrao');
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)');

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}