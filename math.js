let resolverEl = document.querySelector('#resolver');
let aEl = document.querySelector('#coeficiente-a');
let bEl = document.querySelector('#coeficiente-b');
let cEl = document.querySelector('#coeficiente-c');
let deltaEl = document.querySelector('#resultado-delta');
let x1El = document.querySelector('#resultado-x1');
let x2El = document.querySelector('#resultado-x2');
let numeroDeRaizesEl = document.querySelector('#resultado-numero-de-raizes');
let viradaParaEl = document.querySelector('#resultado-virada-para');
let verticeEl = document.querySelector('#resultado-vertice');

resolverEl.addEventListener('click', resolver);

function resolver() {
  const a = aEl.value;
  const b = bEl.value;
  const c = cEl.value;

  if (a == 0) {
    window.alert('Como a = 0, não é uma equação de 2º grau.');
    return;
  }

  const delta = b ** 2 - 4 * a * c;

  deltaEl.value = delta;

  let x1 = null;
  let x2 = null;
  let numeroDeRaizes = null;

  if (delta >= 0) {
    x1 = (-b - Math.sqrt(delta)) / (2*a);
    x2 = (-b + Math.sqrt(delta)) / (2*a);
    numeroDeRaizes = delta === 0 ? 1 : 2;

  } else {
    numeroDeRaizes = 0;
  }

  let viradaPara = a > 0 ? 'baixo' : 'cima';

  let xVertice = -b / (2*a);
  let yVertice = -delta / (4*a);

  x1El.value = x1;
  x2El.value = x2;
  numeroDeRaizesEl.value = numeroDeRaizes;
  viradaParaEl.value = viradaPara;
  verticeEl.value = '(' + xVertice + ', ' + yVertice + ')';
}