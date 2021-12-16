let resolverEl = document.querySelector('#resolver');
let aEl = document.querySelector('#coeficiente-a');
let bEl = document.querySelector('#coeficiente-b');
let cEl = document.querySelector('#coeficiente-c');
let deltaEl = document.querySelector('#resultado-delta');
let x1El = document.querySelector('#resultado-x1')
let x2El = document.querySelector('#resultado-x2')

resolverEl.addEventListener('click', resolver);

function resolver() {
  const a = aEl.value;
  const b = bEl.value;
  const c = cEl.value;
  const delta = b ** 2 - 4 * a * c;

  deltaEl.value = delta;

  let x1 = null;
  let x2 = null;
  if (delta >= 0) {
    x1 = (-b - Math.sqrt(delta)) / (2*a);
    x2 = (-b + Math.sqrt(delta)) / (2*a);
  }

  x1El.value = x1;
  x2El.value = x2;
}