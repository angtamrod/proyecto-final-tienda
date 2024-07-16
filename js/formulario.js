//1. declaramos variables

const menu = document.querySelector(`.header__icon`);
const nav = document.querySelector(`.nav`);
const headerPrincipal = document.querySelector(`.header__principal`);
const formulario = document.querySelector(`pago__form`);

//2. Ejecutamos funciones
menu.addEventListener(`click`, () => {
  if(nav.style.display === "none"){
      nav.style.display = "block"
  }else{
      nav.style.display = "none";
      headerPrincipal.style.height = "100%";
  }
});
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 
    window.location.href = "confirmacion.html";
  });