 

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
 