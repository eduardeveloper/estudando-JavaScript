var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
  console.log('É verdadeiro');
} else if(possuiDoutorado) {
  console.log('Possui doutorado');
} else {
  console.log('Não possui nada');
}

var nome = 'Eduardo'; 

if (nome) {
  console.log(nome)
} else {
  console.log('Nome nao existe');
}

if(!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log('Nao possui graduacao');
}

var x = 10;

console.log(x !== 11);

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5)
if(condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);


var corFavorita = '';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para cima');
    break;
  case 'Amarelo':
    console.log('Olhe para a direita');
    break
  case 'Verde':
    console.log('Olhe para a esquerda');
    break
  default:
    console.log('Feche os olhos.')
}