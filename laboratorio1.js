/* 

I.

A. ¿Cual es la ventaja de que JS sea un lenguaje compilado-interpretado?

Respuesta =



*/

let combinacion = function(a, b, c) {
    let array = [a, b, c];
    let valor = array.sort(function(a, b){
        return b - a;
    });
    let cadena = parseInt(valor);
    console.log('La formación más grande que se puede formar es', cadena);
    };



