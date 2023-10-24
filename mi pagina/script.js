// Este archivo puede contener interacciones dinámicas si lo necesitas.
// Por ejemplo, puedes agregar funciones para mostrar o esconder elementos en la página.

// Ejemplo de una función que muestra un mensaje cuando se hace clic en un enlace:
document.querySelector('nav a').addEventListener('click', function() {
    alert('Haz hecho clic en un enlace.');
});

// Obtenemos los elementos de los botones y la sección de contenido
const btnInicio = document.getElementById('btn-inicio');
const btnModelos = document.getElementById('btn-modelos');
const btnGaleria = document.getElementById('btn-galeria');
const contenido = document.querySelector('.contenido');

// Funciones para cargar el contenido de las páginas
function cargarPagina(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            contenido.innerHTML = data;
        });
}

btnInicio.addEventListener('click', function (e) {
    e.preventDefault();
    cargarPagina('inicio.html');
});

btnModelos.addEventListener('click', function (e) {
    e.preventDefault();
    cargarPagina('modelos.html');
});

btnGaleria.addEventListener('click', function (e) {
    e.preventDefault();
    cargarPagina('galeria.html');
});

// Cambiar el color de fondo de los botones al pasar el ratón
const botones = [btnInicio, btnModelos, btnGaleria];

botones.forEach(boton => {
    boton.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#555';
    });

    boton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#333';
    });
});
