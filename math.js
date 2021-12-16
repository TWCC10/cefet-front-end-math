let resolverEl = document.querySelector('#resolver');
let aEl = document.querySelector('#coeficiente-a');
let bEl = document.querySelector('#coeficiente-b');
let cEl = document.querySelector('#coeficiente-c');
let deltaEl = document.querySelector('#resultado-delta');

resolverEl.addEventListener('click', resolver);

function resolver() {
  const a = aEl.value;
  const b = bEl.value;
  const c = cEl.value;
  const delta = b ** 2 - 4 * a * c;

  deltaEl.value = delta;
}