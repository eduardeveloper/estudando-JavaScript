// transforme o objeto abaixo em uma Constructor Function
/* const Pessoas = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + 'andou');
  }
} */

function pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + 'andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Brunno - 15 anos
const Maria = new pessoa('Maria', '20 anos');
const João = new pessoa('João', '25 anos');
const Bruno = new pessoa('Bruno', '15 anos');


// Crie uam Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e método:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom(seletor) { 
  const elementsList = document.querySelectorAll(seletor);
  this.elements = elementsList;
  this.addClass = function(classe) {
    elementsList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe) {
    elementsList.forEach((element) => {
      element.classList.remove(classe);
    })
  }
  
}

const listaItens = new Dom('li');
const ul = new Dom('ul');
const li = new Dom('li');

li.removeClass('ativo');