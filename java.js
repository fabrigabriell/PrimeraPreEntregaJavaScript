let bienvenida = prompt("¡Bienvenido a Kick Off Zone! Aqui encontraras los mejores botines del mercado al mejor precio\n Nos permites tu nombre?");

alert("Mucho gusto " + bienvenida + " estamos encantados de que nos visites a nuestra tienda online!");

let productos = parseInt(prompt("En nuestra tienda hay una gran variedad de botines de las mejores marcas, ¿Que es lo que deseas buscar?\nGama Alta:\n1- BOTINES X CRAZYFAST MESSI ELITE TERRENO FIRME, Precio: $369.999\n2- PREDATOR ACCURACY+ FG, Precio: $449.999 \n3- BOTINES COPA PURE+ TERRENO FIRME, Precio: $314.999\nGama Media:\n4- BOTINES PREDATOR ACCURACY.2 TERRENO FIRME, Precio: $183.999 \n5- BOTINES COPA PURE.3 TERRENO FIRME, Precio: $143.999 \n6- BOTINES COPA PURE II.2 TERRENO FIRME, Precio: $229.999 \nGama Baja\n7- BOTINES COPA SENSE.3 TERRENO FIRME, Precio: $51.999 \n-8 BOTINES PREDATOR ACCURACY.4 MULTITERRENO, Precio: $73.999 \n9- BOTINES X SPEEDPORTAL.3 TERRENO FIRME, Precio: $39.999 \n0- Para salir de la interfas"));

let precio = 0;
const iva = 0.21;
const impPais = 0.08;
const credito = 0.30;
const descEfecTransf = 0.15;



while (productos != 0) {
    switch (productos) {
        case 1:
            precio += 369999
            alert("Agregaste BOTINES X CRAZYFAST MESSI ELITE TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        case 2:
            precio += 449999
            alert("Agregaste PREDATOR ACCURACY+ FG a tu carrito, tienes sumado en total $" + precio);
            break;
        case 3:
            precio += 314999
            alert("Agregaste BOTINES COPA PURE+ TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        case 4:
            precio += 183999
            alert("Agregaste BOTINES PREDATOR ACCURACY.2 TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        case 5:
            precio += 143999
            alert("Agregaste BOTINES COPA PURE.3 TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        case 6:
            precio += 229999
            alert("Agregaste BOTINES COPA PURE II.2 TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        case 7:
            precio += 51999
            alert("Agregaste BOTINES COPA SENSE.3 TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        case 8:
            precio += 73999
            alert("Agregaste BOTINES PREDATOR ACCURACY.4 MULTITERRENO a tu carrito, tienes sumado en total $" + precio);
            break;
        case 9:
            precio += 39999
            alert("Agregaste BOTINES X SPEEDPORTAL.3 TERRENO FIRME a tu carrito, tienes sumado en total $" + precio);
            break;
        default:
            alert("Codigo Invalido Intentelo Nuevamente")
            break;
    }

    productos = parseInt(prompt("En nuestra tienda hay una gran variedad de botines de las mejores marcas, ¿Que es lo que deseas buscar?\nGama Alta:\n1- BOTINES X CRAZYFAST MESSI ELITE TERRENO FIRME, Precio: $369.999\n2- PREDATOR ACCURACY+ FG, Precio: $449.999 \n3- BOTINES COPA PURE+ TERRENO FIRME, Precio: $314.999\nGama Media:\n4- BOTINES PREDATOR ACCURACY.2 TERRENO FIRME, Precio: $183.999 \n5- BOTINES COPA PURE.3 TERRENO FIRME, Precio: $143.999 \n6- BOTINES COPA PURE II.2 TERRENO FIRME, Precio: $229.999 \nGama Baja\n7- BOTINES COPA SENSE.3 TERRENO FIRME, Precio: $51.999 \n-8 BOTINES PREDATOR ACCURACY.4 MULTITERRENO, Precio: $73.999 \n9- BOTINES X SPEEDPORTAL.3 TERRENO FIRME, Precio: $39.999 \n0- Para salir de la interfas"));

}
if (precio != 0) {
    let pago = parseInt(prompt("¿Como desea abonar su compra?\n1- Efectivo/Transferencia\n2- Tarjeta de Debito\n3- Tarjeta de Credito\n0- Para cancelar operacion"));
        if (pago == 1) {
            alert("El total de tu compra es $" + impuDesc(iva + impPais, descEfecTransf));
        } else if (pago == 2) {
            alert("El total de tu compra es $" + impuDesc(iva + impPais, 0));
        } else if (pago == 3) {
            alert("El total de tu compra es $" + impuDesc(iva + impPais + credito, 0));
        } else {
            alert("Por favor seleccione un metodo de pago por favor")
        }
}
function impuDesc(impuestos, descuentos) {
    let totalImpuestos = precio * (1 + impuestos);
    let totalImpuDesc;
    if (descuentos != 0) {
        totalImpuDesc = totalImpuestos * (1 - descuentos)
    } else {
        totalImpuDesc = totalImpuestos;
    } return totalImpuDesc;
}