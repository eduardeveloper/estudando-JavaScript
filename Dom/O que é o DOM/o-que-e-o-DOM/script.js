const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-DOM/index.html') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');


// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);
// Seleciona o primeiro elemento da página que
// possua a classe ativo

const possuiAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 

const windowWith = window.innerWidth;
console.log(windowWith);