'use strict';

const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

// *? Funcionalidad de las thumbnails
thumbs.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){  //*! tagName es una propiedad que me dice cual es la etiqueta

        // ** Estamos obteniendo el src y almacenandolo en imagenSrc
        const imagenSrc = e.target.src;

        // ** Obtenemos la posicion del ultimo /
        const lastIndex = imagenSrc.lastIndexOf('/'); //*! el lastIndexOf devuelve la posición (índice) en la que se encuentra el valor de búsqueda dentro de la cadena que realiza la llamada.

        // ** Cortamos la cadena de texto para obtener solamente una parte
        const nombreImagen = imagenSrc.substring(lastIndex + 1); //*!  se utiliza para extraer una subcadena de una cadena de texto

        // ** Cambiamos la ruta de la imagen del producto
        productoImagen.src = `../img/tennis/${nombreImagen}`;
    }
});
