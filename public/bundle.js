'use strict';

const producto$1 = document.getElementById('producto');
const productoImagen = producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

// *? Color
const color = producto$1.querySelector('#propiedad-color');

// *? Cantidad
const btnDisminuirCant = producto$1.querySelector('#disminuir-cantidad');
const btnAumentarCant = producto$1.querySelector('#incrementar-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');

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

// *? Cambiamos la imagen del producto dependiendo de la propiedad que seleccionen
color.addEventListener('click', (e)=>{
    if(e.target.tagName === 'INPUT'){
        productoImagen.src = `../img/tennis/${e.target.value}.jpg`;
    }
});

// *? Cambiamos la cantidad a agregar al carrito
btnAumentarCant.addEventListener('click', (e)=>{
   inputCantidad.value = parseInt(inputCantidad.value) + 1 ;
});
btnDisminuirCant.addEventListener('click', (e)=>{
    if (parseInt(inputCantidad.value) > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1 ;
    } 
});

const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarAlCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];

const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    //console.log(carrito);
    carrito.forEach((productoCarrito) => {

        let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
        if(productoCarrito.color === "rojo"){
            thumbSrc = '../img/thumbs/rojo.jpg';
        }else if(productoCarrito.color === "amarillo"){
            thumbSrc = '../img/thumbs/amarillo.jpg';
        }        
        //creamos una plantilla del codigo HTML
        const plantillaProducto = `
                <div class="carrito__producto-info">
                <img src="${thumbSrc}" alt="" class="carrito__thumb" />
                <div>
                <p class="carrito__producto-nombre">
                    <span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
                </p>
                <p class="carrito__producto-propiedades">
                    Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
                </p>
                </div>
                </div>
                <div class="carrito__producto-contenedor-precio">
                <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                    />
                </svg>
                </button>
                <p class="carrito__producto-precio">$500.00</p>
                </div>
            `;
        
        const itemCarrito = document.createElement("div");  //creamos el DIV
        itemCarrito.classList.add("carrito__producto"); //le agregamos la clase de carrito__producto
        itemCarrito.innerHTML = plantillaProducto; //agrega la plantilla a itemCarrito
        ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito); //agregamos el producto a la ventana del carrito
    });
};


// Abrir Carrito
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e)=>{
        renderCarrito();
    });
});

//cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) =>{
        ventanaCarrito.classList.remove('carrito--active');
    });
});

// Agregar al carrito
btnAgregarAlCarrito.addEventListener('click', (e) => {
	// Obtenemos los datos del producto, en este caso los obtengo desde la pagina del producto.
	// pero tambien se puede hacer una peticion al servidor para validar los datos.
	const id = producto.dataset.productoId;
	const nombre = producto.querySelector('.producto__nombre').innerText;
	const cantidad = parseInt(producto.querySelector('#cantidad').value);
	const color = producto.querySelector('#propiedad-color input:checked').value;
	const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

            
			carrito.push({
				id: id,
				nombre: nombre,
				cantidad: cantidad,
				color: color,
				tamaño: tamaño,
	});
});
