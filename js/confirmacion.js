// 1. Declaramos variables
const menu = document.querySelector(`.header__icon`);
const nav = document.querySelector(`.nav`);
const headerPrincipal = document.querySelector(`.header__principal`);

const compraContenedor = document.querySelector('.confirmacion__div');
const compraTotal = document.querySelector('.confirmacion__total');
const botonVolver = document.querySelector(`.confirmacion__button`)

let compra = JSON.parse(localStorage.getItem('carrito')) || [];



//2. Construimos nuestas funciones


function actualizarCompra() {
    compraContenedor.innerHTML = '';
    let total = 0;

    compra.forEach(item => {
        total += item.price * item.quantity;
        const compraCard = document.createElement('div');
        compraCard.innerHTML = `
            <div class="confirmacion__producto">
                <span class="confirmacion__span">${item.name} </span>
                <span class="confirmacion__span">${item.price}€</span>
                <span class="confirmacion__span confirmacion__span--final">${item.quantity}x</span>
            </div>
        `;
        compraContenedor.appendChild(compraCard);
    });

    compraTotal.textContent = total.toFixed(2) + "€";
}


//3. Ejecutamos el código

menu.addEventListener(`click`, () => {
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none";
        headerPrincipal.style.height = "100%";
    }
});

botonVolver.addEventListener("click", () => {
    window.location.href = "index.html";
})


actualizarCompra();
