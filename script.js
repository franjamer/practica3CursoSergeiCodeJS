import { barcelona,roma,paris,Londres } from './ciudades.js';

// obtener los Elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')
//Agregar un evento click a cada iterable.
enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function () {
        //Remover la clase "active" de todos los enlaces.
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });

        //Agregar la clase "active" al enlace actual
        this.classList.add('active')
        
        //Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)     

        //Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.texto
        precioElemento.innerHTML = contenido.precio
    })
})

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'París' : paris,
    'Londres' : Londres  
    };
    return contenido[enlace];    
}


