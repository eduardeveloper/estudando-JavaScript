var pessoa = {
  nome: 'Eduardo',
  idade: 28,
}

console.log(pessoa); 

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.perimetro(4));