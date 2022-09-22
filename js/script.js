

let gastoTotal = 0;
let precioProducto = 0;
let contador = 1;

alert("vamos a sumar el total de productos comprados en la tienda");

function ingresarPrecio(){
 precioProducto = Number( prompt("ingrese el precio del producto #" + contador +  ":" ));


   while (precioProducto > 0) {
       gastoTotal = calcularTotal(precioProducto);
       contador++;
       precioProducto = Number( prompt("ingrese el precio del producto #" + contador +  ":" ));
   }

   if (precioProducto <= 0 || isNaN(precioProducto)){
       alert("ha introducido un valor menor o igual a cero");


   }
 
}

function calcularTotal(precioProducto) {
   return gastoTotal + precioProducto;
   
}

function mostrarTotal() {

   alert("cantidad de productos:" + contador);
   alert("el precio total es $" + gastoTotal);
   
}

ingresarPrecio();
mostrarTotal();

 const productos = ["PLATOS", "VASOS", "CUBIERTOS", "BOLSAS", "PAPEL"];
 productos.unshift ("arranque");

 alert("productos de la pagina :" );
 alert(productos); 
 

 
  
 const lista = [
   {nombre: "PLATOS", precio: 1000},
   {nombre: "VASOS", precio: 1200},
   {nombre: "CUBIERTOS", precio:900},
   {nombre: "BOLSAS", precio:500},
   {nombre: "PAPEL", precio:1245},
 ];
 
   
 
 let nombre =prompt("ingrese el producto que quieras consultar");
 
 while (nombre != "ESC") {
   

   let encontrado = lista.find(lista => lista.nombre == nombre);
 let mensaje = `
 nombre: ${encontrado.nombre}
 $${encontrado.precio}`;

 alert(mensaje);
nombre =prompt("ingrese otro producto que quieras consultar");

   
 }

 
 

  

