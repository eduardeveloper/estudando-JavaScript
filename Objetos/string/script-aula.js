// const comida = "Pizzza";
// const agua = new String('Agua');

// console.log(comida.length);

// const frase = 'A melhor comida';

// console.log(frase[frase.length])
// console.log(frase.charAt(frase.length))

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, '!!', 'Oi hasuahs');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';


console.log(listaFrutas.includes(fruta));

console.log(fruta.startsWith('Ba'));

const transacao1 = 'Depósito do Cliente';
const transacao2 = 'Depósito do Fornecedor';
const transacao3 = 'Taxa de Camisas';

console.log(transacao1.slice(3,7));

console.log(transacao1.indexOf('l'));

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino'; 
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase() === 'FEMININO');
