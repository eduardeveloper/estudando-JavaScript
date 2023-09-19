
// var ultimoItem = videoGames.pop();

// for (var numero = 1; numero <=10; numero++) {
//   console.log(numero);
// }

// var i = 0;
// while ( i <= 99) {
//   i = i + 3;
//   console.log(i);
// }

// var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];



// Crie uma array com os anos que o Brasil ganhou a copa

var anoTitulos = ['1959', '1962', '1970', '1994', '2002']
// 1959, 1962, 1970, 1994, 2002

// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
// Interaja com a array utilizando um loop, para mostrar
for (var i = 0; i < anoTitulos.length; i++) {
  console.log(`O Brasil ganhou a copa de ${anoTitulos[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if(frutas[i] === 'Pera') {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas];
console.log(ultimaFruta);

var idade = 19;
var possuiDiabetes = true; 

var podeBeber;
podeBeber = (idade >= 18 && possuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

var possuiFaculdade = false;

if(possuiFaculdade)
  console.log('Sim possui faculdade');
else
  console.log('Não possui faculdade');



  // Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var adiciona = 500;
console.log(scroll += adiciona);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Pode dar credito' : 'Não pode dar credito';
console.log(darCredito);


