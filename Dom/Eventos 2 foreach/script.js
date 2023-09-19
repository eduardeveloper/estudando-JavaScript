const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

const animaisListas = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

animaisListas.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  // console.log(event);
  console.log(this.getAttribute('href'));
  console.log(event.currentTarget);
}

// linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}


// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent); /* QUANDO O MOUSE PASSA 1X POR CIMA */
// h1.addEventListener('mousemove', handleEvent);  /* CADA MACROMOVIMENTO DO MOUSE CONTA */

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('azul');
  }
  console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);

