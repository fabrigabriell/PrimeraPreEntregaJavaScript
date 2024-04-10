let opciones = parseInt(prompt("Bienvenido a KickOffZone la mejor tienda de Futbol del mercado, ingrese como desea buscar sus botines\n1-Buscar por Marca\n2-Buscar por nombre\n3-Cuantos modelos hay disponibles\n0-Para cancelar operacion"))

while(opciones != 0){
    switch(opciones){
        case 1:
            let marcas = parseInt(prompt("¿Que marca desea buscar?\n1-Adidas\n2-Nike\n3-Puma\nIngrese el numero de la opcion que desee"));

            filtrarMarca(marcas);
            break;
        case 2:
            let botines = prompt("Ingrese el Nombre del botin que desea buscar y este disponible");

            if (botines != ""){
                buscador(botines);
            } else{
                alert("Por Favor ingresa el nombre de algun botin disponible")
            }
            break;
        case 3:
            contadorStock();
            break;
        default:
            alert("Por Favor ingrese una opcion valida");
    }
    opciones = parseInt(prompt("Bienvenido a KickOffZone la mejor tienda de Futbol del mercado, ingrese como desea buscar sus botines\n1-Buscar por Marca\n2-Buscar por nombre\n3-Cuantos modelos hay disponibles\n0-Para cancelar operacion"))
}

function filtrarMarca(marcaSaleccionada){
    let filtros=[];
    if (marcaSaleccionada == 1){
        filtros = stock.filter(marca => marca.marca.toLowerCase() == "adidas");
    }else if(marcaSaleccionada == 2){
        filtros = stock.filter(marca => marca.marca.toLowerCase() == "nike");
    }else if(marcaSaleccionada == 3){
        filtros = stock.filter(marca => marca.marca.toLowerCase() == "puma");
    }else {
        alert("Por Favor ingrese uno de los codigos que se encuentra en pantalla");
    }console.table(filtros)
}

function buscador(nombre){
    let botinBuscado = stock.find(marca => marca.botines.toLowerCase().includes(nombre.toLowerCase()));

    if (botinBuscado != undefined){
    console.log("El botin que se encontro es el:\nID:"+botinBuscado.id+"\nNombre:"+botinBuscado.botines+"\nMarca:"+botinBuscado.marca+"\nPrecio:"+botinBuscado.precio+"\nStock Disponible: "+botinBuscado.stock);
} else {
    console.log("El botin que ingresaste no fue enconrado");
}
}

function contadorStock(){
    console.log("Tenemos " +stock.length+" modelos mas que puedes ver!");
}