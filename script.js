function comunicado(valor) {
    document.getElementById('Mensajito').textContent = valor;
}

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
*/
class Carro {
    /*
      El constructor es un método/función especial
      que es ejecutado una única vez
      al utilizar el operador "new".
  
      Por lo general en JS, se utiliza
      para definir los atributos de la clase.
    */
    constructor(velocidad, marca, modelo) {
      console.log("Ejecutando constructor...");
      this.velocidad = velocidad;
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  
  /*
    Para crear un objeto a partir de una clase
    se utiliza el operador "new".
  
    A los objetos creados con el operador new se les llama
    "instancias" de la clase.
  */
  const bmw = new Carro();
  const volkswagen = new Carro();
  let chevrolet = new Carro();
  const chrysler = new Carro (67, "Trololo", "Tsubami");

  
  console.log('bmw', bmw);
  console.log('vo')

  
