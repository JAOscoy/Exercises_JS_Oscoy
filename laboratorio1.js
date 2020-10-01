/* 

I.

A. ¿Cual es la ventaja de que JS sea un lenguaje compilado-interpretado?
B. Diferencia entre null y undefined
C. type coercion
D. Que representan los valores NaN e infinity

I. Preguntas

!!true || (!null != !1); 
El resultado es true ya que ambas exresiones 
arrojan true como resultado.
La primera al llevar !! devuelve el resultado original
La segunda porque !null (que arroja true) es diferente 
a !1 que arroja falso

NaN && undefined == null

el resultado es NaN
como undefined es igual a null, el resultado true,
se compara con la expresion NaN && true 
y el resultado arroja solo NaN 

10 === 010
El resultado es false ya que ambos valores
no son EXACTAMENTE IGUALES como exige el 
comparador ===

II. Problemas

/* ¡PROBLEMA A. Combinación más grande! */

let combinacion = function(a, b, c) {
    let cadena;
    /* comparar si es un digito entre 0 y 9*/
    if (a < 0 || a > 9 || b < 0 || b > 9 || c < 0 || c > 9){
        return "ERROR! El numero debe ser un digito entre 0 a 9";
    } else {
    /* Crear un array y ordenarlo en forma descendente*/
    let array = [a, b, c];
    let valor = array.sort(function(a, b){
        return b-a;
    })
    /*convetir el array a string*/
    cadena = valor.toString();
    /*remover del string las comas*/
    cadena = cadena.replace(/,/g ,"");
    /*convierte a numero los primeros digitos encontrados en el string*/
    cadena = parseInt(cadena);
    };

    return "El numero mas grande es " + cadena
};


/* ¡PROBLEMA B ¿Es un numero primo?! */

let numeroPrimo = function(num) {
    /*‚¿el valor es un numero?*/
    if (isNaN(num)){
        return "El valor introducido es incorrecto";
    /*‚Si lo es compara residuos*/
        } else {
        if (num % 2 !== 0){
        return "El numero " + num + " es un numero primo";
        } else if (num % 2 === 0) {
        return "El numero " + num + " no es un numero primo";
        }}
}

/* ¡PROBLEMA C FizzBuzz con SWITCH CASE! */

for(let n = 0; n < 101; n++){
    switch (true){
        case n%3 !== 0 && n%5 !== 0 || n === 0:
        console.log(n)
        break;
    case n%3 === 0 && n%5 === 0:
        console.log("FizzBuzz")
        break;
    case n%3 === 0 && n%5 !== 0:
        console.log("Fizz")
        break;
    case n%3 !== 0 && n%5 === 0:
        console.log("Buzz")
        break;
    }}


