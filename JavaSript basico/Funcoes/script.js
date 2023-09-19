function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(9));

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(65, 1.76));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if ( cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

addEventListener('click', function(){
  console.log('oi');
})


function terceiraIdade(idade) {
  if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(59))

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises);