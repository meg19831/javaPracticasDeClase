// Este es el futuro desarrollo de un e-commerce de zapatos para dama 
class Cliente {
    constructor (nombre, correoElectronico, telefono){
        this.nombre =  nombre;
        this.correoElectronico = correoElectronico;
        this.telefono = telefono;
    }
    comprar (producto){
       return calcularPrecioProducto (producto);
    }
    pagar ( precio){
        alert (`pagaste ${precio}`);
    }
}

    let nombre = prompt ("ingresar nombre");
    alert ("¡Bienvenido/a a la tienda de FootShow:" + " " + nombre + "!");
    let correoElectronico = prompt ("Ingresa un correo electronico" );
    let telefono = prompt ("Ingresa un teléfono celular" );


const usuario  = new Cliente (nombre,telefono, correoElectronico );

alert (usuario.nombre);
alert (usuario.telefono);
alert (usuario.correoElectronico);

let precio;  
 
function calcularPrecioProducto ( producto){
        switch (producto) {
        case "bota":
            
            return  3500;
        case "borcego":
            
            return 4200;
        case "zapatilla":
            
            return 5100;
        default: 
        return "por ahora estos productos estan disponibles";
        }
}
/* 
let total = 0;
let orden;
const producto = prompt ( "ingrese el producto a cotizar. Productos disponibles:Bota, Borcego y Zapatilla");
total = usuario.comprar(producto);
alert (total);
orden = prompt ("¿quiere agregar otro articulo? escriba SI para sumar otro, o NO para finalizar.");

if (orden === "SI" || orden === "si"){
    producto =prompt ("ingrese el producto a cotizar: Bota, Borcego o Zapatilla ");
    total = total + usuario.comprar(producto);
}
alert (" el total de su compra fue:" + total);
usuario.pagar (total);

salir (usuario);

function salir(usuario){
    let saludo = `Gracias por su compra  ${usuario.nombre}`;
    
    alert (saludo);
} */

const productos = '1 - Bota\n2 - Borcego\n3 - Zapatilla';
let listaProductos = '';
let total = 0;

function mostrarMenu() {
    let opcion;

    do {
        opcion = prompt('Ingrese una opción:\n1 - Ver productos\n2 - Comprar\n3 - Finalizar');
        switch (opcion) {
            case '1':
                verProductos();                
                break;
            case '2':
                comprar();
                break;
            case '3':
                finalizarCompra();
                break;
            default:
                alert('Opción incorrecta');
                break;
        }
    } while(opcion != 3);
}

function verProductos() {
    alert('Los productos disponibles son:\n' + productos);
}

function comprar() {
    const productoElegido = prompt('¿Qué producto desea comprar? (Ingrese el número)\n' + productos);
    switch (productoElegido) {
        case '1':
            listaProductos = listaProductos + 'Bota\n'
            total = total + 3500;
            break;
        case '2':
            listaProductos = listaProductos + 'Borcego\n'
            total = total + 4200;
            break;
        case '3':
            listaProductos = listaProductos + 'Zapatilla\n'
            total = total + 5100;
            break;
    }
    alert('Producto agregado');
}

function finalizarCompra() {
    if (total == 0) {
        alert('Gracias por su visita')
    } else {
        alert('Los productos comprados son:\n' + listaProductos + "Total: $" + total);
    }
}

mostrarMenu();
