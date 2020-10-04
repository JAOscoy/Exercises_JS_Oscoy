

/* I. ¿Es una cadena vacia?*/

function isEmpty(text) {
    if (text === ""){
        return true;
    } else {
        return false;
    }
}

/* II. ¿El n-ésimo número estrella?*/

function starNumber(level) {
    return (6 * level * (level - 1) + 1);
 }

/* III. Minimo y máximo de un arreglo*/

function minMax(a) {
    /* añadir ... al parametro a hace que Math
    se aplique todos los elementos del array */
    let r = {
        "Max": Math.max(...a),
        "Min": Math.min(...a)
    };
    return r;
}
/* IV. Combinación más grande */


function largestSwap(mew){
    /*Despues de comparar si es un valor valido,
    al argumento se le aplican los metodos para
    convetir a string
    crear un array por caracter
    convertir a numero cada elemento del array */
    if (mew >= 10 && mew <= 99 && Number.isInteger(mew) == true ) {
       let output = mew.toString().split('').map(Number);
        /*Crear una copia sin mutación 
           del array original ordenado de mayor a menor*/
       let valor = output.slice().sort(function (a, b){
               return b-a;});
        /*Comparaciòn de los dos arrays*/
        if (valor > output) {
            return false
        } else if (output >= valor) {
            return true
        }  
      /* Si no es un numero entre 10 y 99*/
        } else {
        return "Valor invalido. Introduzca un numero del 10 al 99";
        }}

/* V. Vocales del texto */

function getVowels(anything) {
    /*Crear string de todos los caracteres del argumento
    Arreglo vacio y parametros*/
        let text = anything.toString(10).split('');
        let Vowels = [];
        let igual = "";
    /* empujar cada elemento del arreglo que sea vocal y que no este repetido*/
        for(let o = 0; o < text.length ; o++){
            if (text[o].match(/[AEIOU]/gi) && igual != text[o]){
            Vowels.push(text[o]);
            Vowels.sort(function(a, b){
                return 0.5 - Math.random();
            })
            igual = text[o]  
        }}
        return Vowels;
    }

/* VI. ¿Es un subconjunto? */

function isSubset(set, subset) {
    let exito = true;
    for(let i = 0; i < subset.length; i++){
        if(set.includes(subset[i]) || subset.isEmpty) {
            exito = true
        } else {
            exito = false
    }
}
return exito;
}
    