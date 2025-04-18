// Se llama la funcion una vez se haya cargado el DOM
document.addEventListener('DOMContentLoaded', () => aparicionScroll());

function aparicionScroll () { // Se ejecuta la funcion una vez carguen los elementos
    const fadeElements = document.querySelectorAll('.fade-scroll');
    // Selecciona todos los elementos que tengan la etiqueta 

    const observer = new IntersectionObserver((entries) => {
        // se crea un observador, una nueva funcion de js que detecta si un elemento es visible en la pantalla
      entries.forEach(entry => {
        // Por cada elemento (entry) que está siendo observado:
        // Verifica si está intersectando, o sea si está entrando en la vista del usuario.
        if (entry.isIntersecting) { // Si sí lo está (entry.isIntersecting === true), entonces:
          entry.target.classList.add('show');
          // Le agrega la clase .show, que es la que define la animación en CSS
        }
      });
    }, {
      threshold: 0.5 // Paramentro de config. del isIntersecting (cuando el 50% del elemento esté visible, se considera que ya entro en la pantalla)
    });

    fadeElements.forEach(el => observer.observe(el));
    // Y se le dice al observer que empiece a observar cada uno de los elementos con la clase .fade-scroll.
  };
  

  // Puden utlizar esta opcion pero para mi es mas legible y mantenible como esta arriba cambiando el principio de la funcion

//   // Se asegura de que el se haya cargdo los elementos en DOM antes de ejecutar la funcion
//   document.addEventListener("DOMContentLoaded", function () { // Se ejecuta la funcion una vez carguen los elementos
//     const fadeElements = document.querySelectorAll(".fade-scroll");
//     // Selecciona todos los elementos que tengan la etiqueta 

//     const observer = new IntersectionObserver((entries) => {
//         // se crea un observador, una nueva funcion de js que detecta si un elemento es visible en la pantalla
//       entries.forEach(entry => {
//         // Por cada elemento (entry) que está siendo observado:
//         // Verifica si está intersectando, o sea si está entrando en la vista del usuario.
//         if (entry.isIntersecting) { // Si sí lo está (entry.isIntersecting === true), entonces:
//           entry.target.classList.add("show");
//           // Le agrega la clase .show, que es la que define la animación en CSS
//         }
//       });
//     }, {
//       threshold: 0.5 // Paramentro de config. del isIntersecting (cuando el 50% del elemento esté visible, se considera que ya entro en la pantalla)
//     });

//     fadeElements.forEach(el => observer.observe(el));
//     // Y se le dice al observer que empiece a observar cada uno de los elementos con la clase .fade-scroll.
//   });