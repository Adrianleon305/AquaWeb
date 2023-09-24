// Obtener todos los elementos de pregunta
const preguntas = document.querySelectorAll('.pregunta');

// Agregar un evento de clic a cada pregunta
preguntas.forEach((pregunta) => {
  pregunta.addEventListener('click', () => {
    // Obtener la respuesta asociada a la pregunta
    const respuesta = pregunta.nextElementSibling;

    // Toggle para mostrar u ocultar la respuesta
    if (respuesta.style.display === 'block') {
      respuesta.style.display = 'none';
    } else {
      respuesta.style.display = 'block';
    }
  });
});





          // Variable para almacenar el título original
    var originalTitle = document.title;

    // Función para cambiar el título cuando el cursor sale de la página
    function changeTitle() {
      document.title = "😖No te vayas 😭";
    }

    // Función para restaurar el título original cuando el cursor entra a la página
    function restoreTitle() {
      document.title = originalTitle;
    }

    // Evento que se activa cuando el cursor sale de la página
    document.body.addEventListener("mouseout", changeTitle);

    // Evento que se activa cuando el cursor entra a la página
    document.body.addEventListener("mouseover", restoreTitle);



    window.addEventListener('scroll', function () {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      document.getElementById('reading-position-indicator').style.width = scrolled + '%';
    });