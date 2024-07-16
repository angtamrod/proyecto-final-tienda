//1. Declaramos variables
const menu = document.querySelector(`.header__icon`);
const nav = document.querySelector(`.nav`);
const headerPrincipal = document.querySelector(`.header__principal`);
const plantas = document.querySelectorAll('.tarjeta');

//2. Ejecutamos funciones
menu.addEventListener(`click`, () => {
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none";
        headerPrincipal.style.height = "100%";
    }
});

plantas.forEach(planta => {
    planta.querySelector('.tarjeta__button').addEventListener('click', () => {
        const id = planta.getAttribute('data-id');
        const name = planta.getAttribute('data-name');
        const price = parseFloat(planta.getAttribute('data-price'));
        const img = planta.getAttribute('data-img');

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        const plantasIndex = carrito.findIndex(planta => planta.id === id);

        if (plantasIndex >= 0) {
            carrito[plantasIndex].quantity += 1;
         } else {
            carrito.push({ id, name, price, img, quantity: 1 });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto añadido al carrito');
        });
    });