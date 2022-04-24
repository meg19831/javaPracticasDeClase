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
    alert ("Tus datos ingresados son:" + correoElectronico + " "  + telefono );  

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

let total = 0;
let orden;
let producto = prompt ( "ingrese el producto a cotizar. Productos disponibles:Bota, Borcego y Zapatilla");
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
}


