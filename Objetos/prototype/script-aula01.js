function Pessoa(nome, idade) {
  this.nome  = nome;
  this.idade = idade;
  this.abracar =  function() {
    return  ' abraçou';
  }
  this.andar = function () {
    return ' andou';
  }
}

var obj = {
  nome: 'Eduardo',
  idade: 32,
}

obj.teste = 'Isso';

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}

const eduardo = new Pessoa('Eduardo', 32);

console.log(Pessoa.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

// Transforme em um array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Fiat',
  preco: 2000,
  andar() {
    return true;
  }
}
