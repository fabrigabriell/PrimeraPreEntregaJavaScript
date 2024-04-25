console.table(stock);
let carrito = [];
let totalPrecio = 0;

const fecha = document.getElementsByTagName('h3');

console.log(fecha[0]); 

fecha[0].innerText = new Date().toLocaleDateString();

// Cantidad de productos en stock
const productosDisp = document.getElementById('cantidadProductosTotales');

console.log(productosDisp[0]);

productosDisp.value = stock.length;

//Cards de productos

const cardsProd = document.getElementById('cards');
const elCarrito = document.getElementById('famosoCarrito');

cardsProd.className = 'row container gap-3 mx-auto justify-content-center '

function catalogo(listaStock){

    for (const prod of listaStock){

    cardsProd.innerHTML += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${prod.img} alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${prod.botines}</h5>
    <p class="card-text">Precio: $ ${prod.precio}</p>
    <button class="btn btn-primary carrito" id=${prod.id}>Agregar al Carrito</button>
</div>
</div>`
}

const buttons = document.getElementsByClassName('carrito');
for(const button of buttons){
    button.addEventListener('click',()=>{
        console.log('Seleccionaste el: '+button.id);

        const añadirCarrito = listaStock.find(prod => prod.id == button.id)
        console.log(añadirCarrito);

        añadirAlCarrito(añadirCarrito);
    })
}
}
catalogo(stock);

function añadirAlCarrito(stock){
    carrito.push(stock);
    console.table(carrito);
    elCarrito.innerHTML+=`
    <tr>
        <td>${stock.botines}</td>
        <td>${stock.precio}</td>
        <td>${stock.stock}</td>
    </tr>
    `
    let totalPrice = 0;
    for (const item of carrito) {
        totalPrice += item.precio;
    }

    const sumaTotal = document.getElementById('cart-total');
    sumaTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

function estaModoOscuroActivado() {
    return localStorage.getItem('darkMode') === 'true';
}

const interruptorModoOscuro = document.getElementById('darkModeToggle');

interruptorModoOscuro.addEventListener('change', () => {
    const estaModoOscuro = interruptorModoOscuro.checked;
    localStorage.setItem('darkMode', estaModoOscuro.toString());
    aplicarModoOscuro(estaModoOscuro);
});

function aplicarModoOscuro(estaModoOscuro) {
    const cuerpoPagina = document.body;
    if (estaModoOscuro) {
        cuerpoPagina.classList.add('dark-mode');
    } else {
        cuerpoPagina.classList.remove('dark-mode');
    }
}

window.addEventListener('load', () => {
    const estaModoOscuro = estaModoOscuroActivado();
    interruptorModoOscuro.checked = estaModoOscuro;
    aplicarModoOscuro(estaModoOscuro);
});

function getUserName() {
    return localStorage.getItem('userName');
  }
  
  function greetUser() {
    const userName = getUserName();
    if (userName) {
      alert(`¡Hola, ${userName}!`);
    } else {
      const newUserName = prompt('Bienvenido a KickOffZone ¿Cual es tu nombre?');
      if (newUserName) {
        localStorage.setItem('userName', newUserName);
        alert(`Hola, ${newUserName}! espero disfrutes mucho de nuestros productos!`);
      }
    }
  }
 
  window.addEventListener('load', () => {
    greetUser();
  });
  
