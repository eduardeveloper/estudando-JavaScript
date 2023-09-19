// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro(lados) {
  return lados + lados + lados + lados;
}
// lembrando: perímetro é a soma dos quatro lados do quadrado
// Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par
function ePar(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(algo) {
  return typeof algo;
}
// addEventListener é uma função nativa do JavaScript

addEventListener('scroll', function(){
  console.log('Eduardo')
});

// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));