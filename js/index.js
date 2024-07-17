
// 1. DECLARAMOS VARIABLES
const menu = document.querySelector(`.header__icon`);
const nav = document.querySelector(`.nav`);
const headerPrincipal = document.querySelector(`.header__principal`);
const imagenes = [
    'url(/imgs/photos/bg_imgs/foto_jardin.jpg)',
    'url(/imgs/photos/bg_imgs/foto_jardineros.jpg)',
    'url(/imgs/photos/bg_imgs/foto_invernadero.jpg)' 
];
const cajaPresentacion = document.querySelector(`.presentacion`);
const plantas = document.querySelectorAll('.tarjeta');
const contenedorComentarios = document.querySelector(".comentarios__contenedor");
const listaComentarios = document.querySelectorAll(".comentarios__fotos");
const botonAnterior = document.querySelector("#botonAnterior");
const botonSiguiente = document.querySelector("#botonSiguiente");

const totalComentarios = listaComentarios.length;    

let fotosIndex = 0;
let comentariosIndex = 0;



// 2. DECLARAMOS FUNCIONES

menu.addEventListener(`click`, () => {
    if(nav.style.display === "none"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none";
        headerPrincipal.style.height = "100%";
    }
});

function cambiarFondo(){
    cajaPresentacion.style.backgroundImage = imagenes[fotosIndex];
    fotosIndex = (fotosIndex + 1) % imagenes.length;
}


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


    
    
    function imagenSiguiente() {
        listaComentarios[comentariosIndex].style.display = 'none';
        comentariosIndex++;
        if (comentariosIndex >= totalComentarios) {
            comentariosIndex = 0;
        }
        listaComentarios[comentariosIndex].style.display = 'block';
    }
    
    function imagenAnterior() {
        listaComentarios[comentariosIndex].style.display = 'none';
        comentariosIndex--;
        if (comentariosIndex < 0) {
            comentariosIndex = totalComentarios - 1;
        }
        listaComentarios[comentariosIndex].style.display = 'block';
    }
    
    function actualizarslider() {
        listaComentarios.forEach((img, index) => {
            img.style.display = index === imgIndex ? 'block' : 'none';
        });
    }

    //3. EJECUTAMOS FUNCIONES
    setInterval(cambiarFondo, 5000);
    botonSiguiente.addEventListener("click", imagenSiguiente);
    botonAnterior.addEventListener("click", imagenAnterior);
    
    actualizarslider();

    