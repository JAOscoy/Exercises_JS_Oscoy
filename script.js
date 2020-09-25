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
*/
function fortuna() {
  let x = 0;

  return function () {
    x++;
    return x;
  };
}

const f = fortuna(); // <---- Ya no debería existir x
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());

