function comunicado(valor) {
    document.getElementById('Mensajito').textContent = valor;
}
/* 
let pr = 0;

if (pr>44) {
    comunicado("Si");
}
else if (pr<=44 && pr>1) {
    comunicado("No");
}
else if (pr == 0) {
    comunicado("Oh no");
}


let chop = 6

let chap = 5

let porron = (chap > chop) ? comunicado('Oh si'):comunicado('Oh no');

for(let x = 0; x <= 10; x++){
    console.log(x + 10);
}



const Oscoy = {
    primer_nombre: 'Alberto',
    primer_apellido: "Gonzalez",
    colores: {
        color_1: "azul",
        color_2: "verde"
    }
}
/*
  Clase

  Es una plantilla que define a un objeto.

  Se recomienda que el nombre de la clase
  sea con "PascalCase"

class Carro {
    /*
      El constructor es un método/función especial
      que es ejecutado una única vez
      al utilizar el operador "new".
  
      Por lo general en JS, se utiliza
      para definir los atributos de la clase.
   
    constructor(velocidad, marca, modelo) {
      console.log("Ejecutando constructor...");
      this.velocidad = velocidad;
      this.marca = marca;
      this.modelo = modelo;
    }
  } */
  
  /*
    Para crear un objeto a partir de una clase
    se utiliza el operador "new".
  
    A los objetos creados con el operador new se les llama
    "instancias" de la clase.

  const bmw = new Carro();
  const volkswagen = new Carro();
  let chevrolet = new Carro();
  const chrysler = new Carro (67, "Trololo", "Tsubami");

  
  console.log('bmw', bmw);
  console.log('vo')

 
  
  do {
          let resultado = (a==0) ? base: variable;
          a++;
          variable = resultado * base;
          console.log(resultado);
      } while (a < exponente);

     
     let base = 9;
     let exp = 3; 

function exponente(base, exp){
    let variable;
    let a = 0
    while(a < exp) {
        let resultado = (a === 0) ? base : variable;
        variable = resultado * base;
        a++;
        console.log(resultado);
    }
    console.log("Fin")
}

function power(base, exponent) {
  var result = 1;

  for(var i = 0; i < exponent; i++) {
    result *= base; // Same as: result = result * base;
  }

  return result;
}

const array = [1, 2, 3, 4];

function sumar(a) {
    const sum = 0;

}
function factorial(n) {
    let fd;
        for(let i = n-1; i === 1; i--) {
            fd = n * i
            console.log(fd)
        }
    }

function fortuna() {
  let x = 0;

  return function () {
    x++;
    return x;
  };
}

let f = fortuna(); // <---- Ya no debería existir x
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());

*/
/*

let w = function (valor){
    let result = (valor ** 2);
    return result;
}

console.log(w(6));

let get = function(v){

        let key = function() {
        let cod = v ** 4 ;
        return cod;
        }
        let code = Math.sqrt(key());
        return code;
    }
    }
    let woy = function(){
        let bort = key * 2;
        return bort;
    }
}



function incremento(xyz) {
    xyz.age++;
}

let bort = "Pero y si no?"

function cambio(bort){
    bort = "No mms";
}

let borty = {
    age: 27,
    color: "black",
    married: false
}

const bert = ["a", "b", "c", "d", "e"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let square = numeros.forEach(function(item) {
    return item**2;
});


function power(base, exponent) {
    var result = 1;
  
    for(var i = 0; i < exponent; i++) {
      result *= base; // Same as: result = result * base;
    }
  
    return result;
  }

  function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacciSequence(limit) {
    if(limit < 1) return console.log('Limit must be greater than 0');
  
    for(var i = 0; i < limit; i++ ) {
      console.log( fibonacci(i) );
    }
  }

let combinacion = function(a, b, c) {
    let max = (Math.max(a, b, c));
    let min = (Math.min(a, b, c));
    let half = function () {
        if (a < max && a > min) {
            return a;
        } else if (b < max && b > min){
            return b;
        } else if (c < max && c > min) {
            return c;
        }
    }
    console.log('La formación más grande que se puede formar es', max, half, min)
    };

let w = {
    uno: 6, 
    dos: 7, 
    tres: 16
};

let cantantes = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

function pluck (lista, parametro) {
    let listado = [];
    for(let a = 0 ; a < lista.length ; a++) {
        listado.push(lista[a][parametro])
    }
    return listado;
} 
function largestSwap(mew){
    if (mew >= 10 && mew <= 99 && Number.isInteger(mew) == true ) {
        let mow = mew.toString();
        const output = [];
        /*Crear una copia sin mutación 
           del array original ordenada de mayor a menor
           for(let o = 0; o < mow.length ; o++) {
            output.push(+mow.charAt(o));
           };
           /*Crear una copia sin mutación 
           del array original ordenado de mayor a menor
       let valor = output.slice().sort(function a(a, b){
               return b-a;});
        /*Comparaciòn de los dos arrays
        if (valor > output) {
            return false
        } else if (output >= valor) {
            return true
        }  
      /* Si no es un numero entre 10 y 99
        } else {
        return "Valor invalido. Introduzca un numero del 10 al 99";
        }}
        */

let Vec = function(x, y) {
    this.x = x;
    this.y = y;
}
let vector1 = new Vec(3, 4);
let origen = new Vec(0, 0);
let vector3 = new Vec(10, 5);


Vec.prototype.suma = function(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y)
}

function isEmpty(text) {
    if (text === ""){
        return true;
    } else {
        return false;
    }
}

function starNumber(level) {
    return 6 * level * (level - 1) + 1;
 }

 function largestSwap(mew){
     if (mew >= 10 && mew <= 99 && Number.isInteger(mew) == true ) {
         let mow = mew.toString();
         const output = [];
         for(let o = 0; o < mow.length ; o++) {
             output.push(+mow.charAt(o));
            };
        let valor = output.slice().sort(function compareNumbers(a, b){
                return b-a;
            })
         
         if (valor > output) {
             return false
         } else if (output >= valor) {
             return true
         }  
       /* if (valor > output) {
            return false;
         else if (output >= valor) {
        return output;
         }*/} else {
             return "nmmms"
         }}

         function minMax(a) {
            let r = {
                "Max": Math.max(...a),
                "Min": Math.min(...a)
            };
            return r;
        }

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
               let valor = output.slice().sort(function a(a, b){
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
            
                function getVowels(anything) {
                /*Crear string de todos los caracteres del argumento
                Arreglo vacio y parametros*/
                    let text = anything.toString(10).split('');
                    let Vowels = [];
                    let igual = "";
                /* empujar cada caracter que sea vocal y que no este repetido*/
                    for(let o = 0; o < text.length ; o++){
                        if (text[o].match(/[AEIOU]/gi) && igual != text[o]){
                        Vowels.push(text[o]);
                        igual = text[o]  
                    }}
                    return Vowels;
                }
