const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item){

    item.addEventListener("click", function(e){
        const currentItem = document.querySelector(".active");

        currentItem.classList.remove("active");

        e.target.classList.add("active")
    });
});

// Obtener el botón y el cuerpo del documento
const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
const cuerpo = document.body;
const header = document.querySelector('header');
const article = document.querySelector('#dos');
const footer = document.querySelector('footer');

// Agregar un evento de clic al botón
modoOscuroBtn.addEventListener('click', function() {
  // Alternar la clase 'dark-mode' en el cuerpo del documento
  cuerpo.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  article.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
});