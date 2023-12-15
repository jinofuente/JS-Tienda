const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarAlCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];

const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    console.log(carrito);
}


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