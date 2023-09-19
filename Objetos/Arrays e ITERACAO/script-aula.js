// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// const li = document.querySelectorAll('li');

// li.forEach((item, index) => item.classList.add('ativa' + index));


// const carros = ['Ford', 'Fiat', 'Honda'];


// const novoArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// })

// const numeros = [2, 4, 5, 6, 78];

// const numerosx2 = numeros.map(n => n * 2); 

// console.log(novoArray);
// console.log(carros);
// console.log(numerosx2);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);

// const nomeAulas = (aula) => aula.nome;
// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas);
// console.log(tempoAulas);

// const aulas = [10, 25, 30];


// // SOMA TODOS OS VALORES |*********************************************
// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// },0)

// console.log(reduceAulas)


// const numeros = [10, 25, 30, 3, 54, 33, 22];
// // RETORNA O MAIOR NUMERO DO ARRAY **********************************
// const maiorNumero = numeros.reduce((anterior, atual) => {
//   console.log(anterior, atual)
//   if(anterior > atual)
//   return anterior
//   else
//   return atual
// }, 0)

// console.log(maiorNumero);


const frutas = ['Banana', '', 'Pêra', 'Uvas'];

const temUva = frutas.some((item) => {
  return item === 'Uvas';
})

console.log(temUva)

const indexFruta = frutas.findIndex((fruta) => {
  return fruta === 'Pêra';
})
console.log(indexFruta);


const every = frutas.every((fruta) => {
  console.log(fruta);
  return fruta;
})

console.log(every)

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every(n => n > 3);

console.log(maiorQue3)

const buscaMaior30 = numeros.filter(x => x > 30);
console.log(buscaMaior30);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15;
})

console.log(maiores15);
