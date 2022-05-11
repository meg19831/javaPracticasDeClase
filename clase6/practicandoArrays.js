//practicando arrays

const productos = ["bota","zapatilla", "borcego", "zapatilla con bordado"];
console.log(productos)
console.log(productos [2]);

//recorrido del array con un FOR

/* for (let i = 0; i<4; i++){
    console.log(productos[i]);
} */

/* si yo no se cuantos elementos tiene mi objeto, para recorrerlo con un for de una manera más dinamica uso el metodo
.length (me dira la cantidad de elementos que tiene mi objeto) */

for (let i = 0; i < productos.length; i++ ){
    console.log(productos[i]);
}

//agregando elementos

/* productos.push ("borcego con cordones");
console.log(productos); */

// ejemplo con un prompt utilizando push (agregando elementos al final)

/* let agregarProducto = prompt ("ingrese el producto a listar");
productos.push (agregarProducto); */

//agregando elementos al principio, utilizamod UNSHIFT

productos.unshift ("sandalia");
console.log(productos);

//POP para eliminar elemento final y SHIFT para eliminar el primer elemento

productos.pop();
console.log(productos);

productos.shift ();
console.log(productos);

//join sirve para separar todos los elementos del arreglo separados por un string definido en los parametros ("")

console.log(productos.join ("*"));

// CONCAT sirve para unir dos arreglos en uno solo

const coloresDeProductos = ["rojo", "blanco", "negro", "con bordado "];
const productoFinal = productos.concat (coloresDeProductos);
console.log(productoFinal);

//slice hace copia del array desde donde quiero, desde el principio al fin, pero sin incluir al final 
const copiarColores = coloresDeProductos.slice (1, 3);
console.log(copiarColores);


//indexOf sirve para devolver la posicion de un elemento de un arreglo, si no está arroja -1
console.log(coloresDeProductos.indexOf("analia"));

//includes busca un elemento de un arreglo pero arroja true o false

console.log(coloresDeProductos.includes ("rojo"));
console.log(coloresDeProductos.includes ("naranja"));

//reverse invierte el orden de los elementos. Este metodo es DESTRUCTIVO!!!
coloresDeProductos.reverse();
console.log(coloresDeProductos);

//ejemplo de la diapositiva de la clase

//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
/* do{ */
   /* let entrada = prompt("Ingresar nombre"); */
  /*  listaNombres.push(entrada.toUpperCase()); */
/*    console.log(listaNombres.length);
}while(listaNombres.length != cantidad) */
//Concatenamos un nuevo array de dos elementos
/* const nuevaLista = listaNombres.concat(["ANA","EMA"]); */
//Salida con salto de línea usando join
/* alert(nuevaLista.join("\n")); */

//ejemplo aplicado para eliminar cualquier elemento (sacado de la clase 6)

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro') */

//ejemplo de ARREGLO con objetos

const producto = [
    {producto: "bota", numero : 36, color : "blanco"},
    {producto : "zapatilla", numero : 38, color : "negro"},
    {producto :"borcego", numero : 40, color : "marron"},
];

console.log(producto [1].color);

