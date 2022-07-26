

let botaoResolveEl = document.querySelector('#botao-resolve');
let variavela = document.querySelector('#coeficiente-a');
let variavelb = document.querySelector('#coeficiente-b');
let variavelc = document.querySelector('#coeficiente-c');
let resultadoDelta = document.querySelector('#resultado-delta');
let resultadoX1 = document.querySelector('#resultado-x1');
let resultadoX2 = document.querySelector('#resultado-x2');

botaoResolveEl.addEventListener('click',calculo_matematico);

function calculo_matematico(){
    if (variavela.value == 0)
        return(alert('ei a = 0 okay?'));

    resultadoDelta.value = (variavelb.value ** 2) - (4 * variavela.value * variavelc.value);
    if (resultadoDelta.value< 0)
    {
        resultadoX1.value = '';
        resultadoX2.value = '';
    }
    else 
    {    
        resultadoX1.value = (Math.sqrt(resultadoDelta.value) - variavelb.value) / (variavela.value * 2);
        resultadoX2.value = (0 - Math.sqrt(resultadoDelta.value) - variavelb.value) / (variavela.value * 2);
    }
}
