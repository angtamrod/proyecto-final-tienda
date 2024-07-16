//1. Declaramos variables
const menu = document.querySelector(`.header__icon`);
const nav = document.querySelector(`.nav`);
const headerPrincipal = document.querySelector(`.header__principal`);
const carritoContenedor = document.querySelector('.carrito__div');
const carritoTotal = document.querySelector('.carrito__total');
const botonVaciar = document.querySelector('.carrito__vaciar');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//2. Construimos nuestras funciones
menu.addEventListener(`click`, () => {
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none";
        headerPrincipal.style.height = "100%";
    }
});


function actualizarCarrito() {
    carritoContenedor.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        total += item.price * item.quantity;
        const carritoCard = document.createElement('div');
        carritoCard.innerHTML = `
            <div class="carrito__producto">
                <img class="carrito__photo" src="${item.img}" alt="">
                <span class="carrito__caja">${item.name} </span>
                <span class="carrito__caja">${item.price}€</span>
                <span class="carrito__caja">${item.quantity}x</span>
            </div>
        `;
        carritoContenedor.appendChild(carritoCard);
    });

    carritoTotal.textContent = total.toFixed(2) + "€";
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

//3. Ejecutamos nuestras funciones
botonVaciar.addEventListener('click', vaciarCarrito);
actualizarCarrito();
