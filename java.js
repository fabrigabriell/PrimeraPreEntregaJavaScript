console.table("stock.json");
let carrito = [];
let totalPrecio = 0;

const fecha = document.getElementsByTagName('h3');

console.log(fecha[0]); 

fecha[0].innerText = new Date().toLocaleDateString();

// Cantidad de productos en stock
const productosDisp = document.getElementById('cantidadProductosTotales');

console.log(productosDisp[0]);

productosDisp.value = "stock.json".length;

//Cards de productos

const cardsProd = document.getElementById('cards');
const elCarrito = document.getElementById('famosoCarrito');

// Barra para buscar
// Función para filtrar productos según el término de búsqueda
function filtrarProductosPorNombre(termino) {
  const productos = document.querySelectorAll('.card');
  productos.forEach(producto => {
    const nombreBotines = producto.querySelector('.card-title').textContent.toLowerCase();
    if (nombreBotines.includes(termino.toLowerCase())) {
      producto.style.display = 'block'; // Mostrar el producto si coincide con el término de búsqueda
    } else {
      producto.style.display = 'none'; // Ocultar el producto si no coincide con el término de búsqueda
    }
  });
}

// Obtener el campo de búsqueda
const inputBusqueda = document.getElementById('input-busqueda');

// Agregar un event listener para escuchar los cambios en el campo de búsqueda
inputBusqueda.addEventListener('input', () => {
  const terminoBusqueda = inputBusqueda.value.trim(); // Obtener el valor del campo de búsqueda
  filtrarProductosPorNombre(terminoBusqueda); // Filtrar productos según el término de búsqueda
});


//Barra para buscar

async function cargarProductosDesdeJSON() {
  try {
    const response = await fetch('stock.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    return [];
  }
}

async function mostrarProductosComoTarjetas() {
  try {
    const listaProductos = await cargarProductosDesdeJSON();
    const cardsContainer = document.getElementById('cards');

    listaProductos.forEach(producto => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.width = '18rem';

      card.innerHTML = `
        <img class="card-img-top" src="${producto.img}" alt="${producto.botines}">
        <div class="card-body">
          <h5 class="card-title">${producto.botines}</h5>
          <p class="card-text">Precio: $${producto.precio}</p>
          <button class="btn btn-primary carrito" id="${producto.id}">Agregar al Carrito</button>
        </div>
      `;
      cardsContainer.appendChild(card);
    });

    const buttons = document.getElementsByClassName('carrito');
    for (const button of buttons) {
      button.addEventListener('click', () => {
        console.log('Seleccionaste el: ' + button.id);
        const productoSeleccionado = listaProductos.find(producto => producto.id == button.id);
        añadirAlCarrito(productoSeleccionado);
        Swal.fire({
          title: '¡Felicidades!',
          text: `Agregaste ${productoSeleccionado.botines} a tu carrito`,
          icon: 'success'
        });
      });
    }
  } catch (error) {
    console.error('Error al mostrar productos como tarjetas:', error);
  }
}

mostrarProductosComoTarjetas();

cardsProd.className = 'row container gap-3 mx-auto justify-content-center '


function añadirAlCarrito(stock) {
  carrito.push(stock);
  console.table(carrito);

  elCarrito.innerHTML += `
    <tr>
      <td>${stock.botines}</td>
      <td>${stock.precio}</td>
      <td>${stock.stock}</td>
    </tr>
  `;

  let totalPrice = 0;
  for (const item of carrito) {
    totalPrice += item.precio;
  }

  const sumaTotal = document.getElementById('cart-total');
  sumaTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

//DarkMode

const interruptorModoOscuro = document.getElementById('darkModeToggle');

interruptorModoOscuro.addEventListener('change', () => {
    const estaModoOscuro = interruptorModoOscuro.checked;
    guardarEstadoModoOscuro(estaModoOscuro);
    aplicarModoOscuro(estaModoOscuro);
});

function estaModoOscuroActivado() {
    return localStorage.getItem('darkMode') === 'true';
}

function guardarEstadoModoOscuro(estaModoOscuro) {
    localStorage.setItem('darkMode', estaModoOscuro.toString());
}

function aplicarModoOscuro(estaModoOscuro) {
    const cuerpoPagina = document.body;
    if (estaModoOscuro) {
        cuerpoPagina.classList.add('dark-mode');
    } else {
        cuerpoPagina.classList.remove('dark-mode');
    }
}

// Aplicar el modo oscuro al cargar la página, si está activado
window.addEventListener('load', () => {
    const estaModoOscuro = estaModoOscuroActivado();
    interruptorModoOscuro.checked = estaModoOscuro;
    aplicarModoOscuro(estaModoOscuro);
});


//Dark mode
async function greetUser() {
    const storedName = localStorage.getItem('userName');
  
    if (!storedName) {
      const { value: userName } = await Swal.fire({
        title: "Ingresa tu nombre",
        input: "text",
        inputLabel: "Tu nombre",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Debes ingresar tu nombre";
          }
        }
      });
  
      if (userName) {
        localStorage.setItem('userName', userName);
        Swal.fire({
          title: `¡Bienvenido ${userName} a KickOffZone!`,
          icon: 'success'
        });
      }
    } else {
      Swal.fire({
        title: `Hola de nuevo ${storedName}!`,
        icon: 'success'
      });
    }
  }
  
  greetUser();

  const botonComprar = document.getElementById("checkout-btn");
  const botonVaciar = document.getElementById('empty-cart-btn');

  botonComprar.onclick=() =>{
    Toastify({
      text:'Muchisimas gracias por comprar en KickOffZone, tu pedido estara listo en 24hrs habiles',
      duration: 5000,
      gravity:'bottom',
      position:'center',
      close: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"},
    }).showToast();

    vaciarCarrito();
  }

  function vaciarCarrito(){
    carrito=[];
    elCarrito.innerHTML='';
    document.getElementById('cart-total').innerText = '$';
  }

botonVaciar.onclick=()=>{
  vaciarCarrito();
}

window.addEventListener('load', async () => {
  await actualizarVisualizacionStock();
  const estaModoOscuro = estaModoOscuroActivado();
  interruptorModoOscuro.checked = estaModoOscuro;
  aplicarModoOscuro(estaModoOscuro);
});
