/* 

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
 

  */



  
let productos = [
   {id: 1, nombre: "PLATOS",cantidad: "x 500", precio: 1000},
   {id: 2, nombre: "VASOS",cantidad: "x 100", precio: 1200},
   {id: 3, nombre: "CUBIERTOS",cantidad: "x 300", precio:900},
   {id: 4, nombre: "BOLSAS",cantidad: "x 800", precio:500},
   {id: 5, nombre: "PAPEL",cantidad: "x 1100", precio:1245},
 ];

 let contenedor = document.getElementById("contenedor");

 let formulario = document.getElementById("formulario");
 formulario.addEventListener("submit", (e) => {
  e.preventDefault();

    contenedor.innerHTML = "";
  let inputs = e.target.children;
  
 

let producto = productos.find(item => item.nombre === inputs[0].value);
let div = document.createElement("div");
div.innerHTML = `
<h3>ID: ${producto.id}</h3>
<p>PRODUCTO: ${producto.nombre}</p>
<p>CANTIDAD: ${producto.cantidad}</p>
<b>$ ${producto.precio}</b>
`;


contenedor.append(div);

 });
 
/* 
 let nombre =prompt("ingrese el producto que quieras consultar");
 
 while (nombre != "ESC") {
   

   let encontrado = lista.find(lista => lista.nombre == nombre);
 let mensaje = `
 nombre: ${encontrado.nombre}
 $${encontrado.precio}`;

 alert(mensaje);
nombre =prompt("ingrese otro producto que quieras consultar");

   
 } */

 
 
  
 
