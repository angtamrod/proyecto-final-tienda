//1. Declaramos variables
const menu = document.querySelector(`.header__icon`);
const nav = document.querySelector(`.nav`);
const headerPrincipal = document.querySelector(`.header__principal`);
const botonPago = document.querySelector(`.producto__button--pago`)
const boton = document.querySelector('.producto__button--carrito');
const planta = document.querySelector('.producto');

//2. Ejecutamos funciones
menu.addEventListener(`click`, () => {
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none";
        headerPrincipal.style.height = "100%";
    }
});

botonPago.addEventListener("click", () => {
    window.location.href = "pago.html";
})

    boton.addEventListener('click', () => {
        const id = planta.getAttribute('data-id');
        const name = planta.getAttribute('data-name');
        const price = parseFloat(planta.getAttribute('data-price'));
        const img = planta.getAttribute('data-img');

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        const plantasIndex = carrito.findIndex(item => item.id === id);

        if (plantasIndex >= 0) {
            carrito[plantasIndex].quantity += 1;
        } else {
            carrito.push({ id, name, price, img, quantity: 1 });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto añadido al carrito');
    });