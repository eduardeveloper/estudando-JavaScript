console.log(Number.isNaN(0));
console.log(Number.isInteger(10.123));

console.log(parseFloat('  32423.432'));
console.log(parseFloat('23.54 reais'));
console.log(parseInt('100.32 reais', 10));
console.log(parseInt(23.49, 10));

const preco = 2.99;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor);
console.log(Math.PI); 

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

console.log(aleatorio);



