//practicando objetos

/* const zapatos = {
    modelo: "bota",
    numero: "35",
    color: "marron",
} */
//obteniendo valores de los objetos
/* 
console.log(zapatos.color); */

//tambien se puede obtener valores de los objetos utilizando los [] y llamando a los valores como strin " "
/* se utiliza esta forma para poder llamar a variables */

/* let variable = "modelo"; */

/* console.log( zapatos ["modelo"]);
console.log(zapatos ["numero"]);
console.log(zapatos ["color"]);
console.log(zapatos[variable]); */

//para cambiar valores a las propiedades o agregar nuevos valores se realiza asi.

/* zapatos ["modelo"]= "zapatilla";
zapatos.numero = 39 ;

console.log(zapatos); */

//constructores

/* function Zapatos(modelo, numero, color) {
    this.modelo = modelo;
    this.numero = numero;
    this.color = color;
    
} */

/* let modelo = prompt ("ingrese el articulo que quiere comprar");
let numero = prompt ("ingrese el número del calzado que necesita");
let color = prompt ("ingrese el color"); */


/* const zapato1 = new Zapatos ("bota", 35, "marron");
const zapato2 = new Zapatos ("zapatilla", 40, "blanca");

console.log(zapato1.color);
console.log(zapato2.numero); */



//operador in 

/* function Zapatos(modelo, numero, color) {
    this.modelo = modelo;
    this.numero = numero;
    this.color = color;
    
}

const zapato3 = new Zapatos ("borcego", 37, "negro"); */

//utilizando operador in... ( devuelve true o false dependiendo si la propiedad especificada existe o no en el objeto)

/* console.log("color" in zapato3);
console.log( "talle" in zapato3);
console.log( "color" in zapato2); */


//utilizando operador for...in (sirve para recorrer todas las propiedades de los objetos)

/* for ( const producto in zapato3){
    console.log( zapato3 [producto]);
} */

// utilizando CLASS


class Zapato{
    constructor (modelo, numero, color, precio){
        this.modelo = modelo;
        this.numero = numero;
        this.color = color; 
        this.precio = parseFloat (precio);
        this.vendido = false;
    } 

    vender (){
        this.vendido = true;
    }
}

const zapato4 = new Zapato ( "zapatilla plataforma", 36, "fucsia", 4500);

console.log(zapato4);

/* el zapato4 estaba sin vender (false), y cuando ingreso el metodo vender, pasa de false a true */
console.log(zapato4.vendido); 
zapato4.vender();
console.log(zapato4.vendido);