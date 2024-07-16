
    document.addEventListener('DOMContentLoaded', function() {

        let bodyId = document.body.id;
    
        switch (bodyId) {
            // Código para index.html
            case 'index': 
                console.log('Esta es la página de inicio');
                iniHome();
                break;
            // Código para articulos.html
            case 'articulos': 
                console.log('Esta es la galería');
                iniArticulos();
                break;
            // Código para contacto.html
            case 'contacto': 
                console.log('Esta es la página de contacto');
                iniContacto();
                break;
            // Código para sobre-mi.html
            case 'sobreMi': 
                console.log('Esta es la página de contacto');
                iniSobreMi();
                break;
            // Código para productos.html
            case 'catalogo': 
                console.log('Esta es la página de contacto');
                iniCatalogo();
                break;

            // Código para productos.html
            case 'carrito': 
                console.log('Esta es la página de contacto');
                iniCarrito();
                break;

            // Código para producto.html
            case 'producto': 
                console.log('Esta es la página de contacto');
                iniProducto();
                break;
            
            default:
                console.log('404 Página no encontrada');
        }
    
    });
    
    
    // -------------------------------------------------------
    // Código index.html
    // -------------------------------------------------------
    function iniHome() {
        
    
    }
    
    // -------------------------------------------------------
    // Código articulos.html
    // -------------------------------------------------------

    
    async function iniArticulos() {
    /* Ejemplo del profe
        // Parte 1: Variables y Datos
        let galeriaContainer = document.getElementById('galeria-container');
        let listaGaleria = [];
    
    
        // Parte 2: Funciones    
        async function loadData() {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const galeriaData = await response.json();
                return galeriaData;
                //processData(data);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
                return [];
            }
        }
    
        function imprimirGaleria() {
    
            if(listaGaleria.length == 0) {
                galeriaContainer.innerHTML = "<p>Se encontraron <b>0 resultados</b></p>";
                return;
            }
    
            // Procesa los datos y actualiza el DOM
            console.log("Imprimiendo: ",listaGaleria);
            // Por ejemplo, actualizar algún elemento del DOM
            galeriaContainer.innerHTML = listaGaleria.map( item => {
                return `<div class="userCard">
                        <h3>${item.name}</h3>
                        <a href="${item.website}" target="_blank">${item.website}</a>
                    </div>`;
            }).join("");
        }
    
        // Parte 3: Código específico para la galería
        listaGaleria = await loadData();
        imprimirGaleria();
        */
    }
    
    // -------------------------------------------------------
    // Código para contacto.html
    // -------------------------------------------------------
    function iniContacto() {
    }

    // -------------------------------------------------------
    // Código para catalogo.html
    // -------------------------------------------------------
    function iniCatalogo() {
    }

    // -------------------------------------------------------
    // Código para sobre-mi.html
    // -------------------------------------------------------
    function iniSobreMi() {
    }


    // -------------------------------------------------------
    // Código para carrito.html
    // -------------------------------------------------------
    function iniCarrito() {
    }


    // -------------------------------------------------------
    // Código para producto.html
    // -------------------------------------------------------
    function iniProducto() {
    }