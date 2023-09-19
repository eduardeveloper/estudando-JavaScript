function Carro(marcaAtribuida, preco) {
  this.marca = marcaAtribuida;
  this.preco = preco;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 100000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2('Mazda', 5000);