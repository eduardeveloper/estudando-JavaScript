//Verifique se sua idade é maior do que de algum parente (COMPARE)
var minhaIdade = 31;
var idadePrimo = 22;

if(minhaIdade > idadePrimo) {
  console.log('É maior');
} else if(minhaIdade === idadePrimo) {
  console.log('É igual');
} else {
  console.log('É menor');
}
//Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

//valor da expressao
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);


// Verifique se as seguintes variáveis são truthy ou falsy (verdadeiro ou falso)
var nome = 'Eduardo';
var idade = 31;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// compare o total de habitantes do Brasil com China (valor em numeros)

var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes do que a China');
} else {
  console.log('Brasil tem menos habitantes do que o Brasil');
}



//o que ira aparecer no console?

if(('gato' === 'Gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// o que ira aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
