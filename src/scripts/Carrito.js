document.addEventListener('DOMContentLoaded', () => {
  const carritoButton = document.getElementById('carritoButton');
  const carritoDesplegable = document.getElementById('carritoDesplegable');
  const cerrarCarrito = document.getElementById('cerrarCarrito');

  if (carritoButton && carritoDesplegable && cerrarCarrito) {
    // Abrir carrito
    carritoButton.addEventListener('click', (e) => {
      console.log("Carrito abierto");
      carritoDesplegable.classList.add('show');
    });

    // Cerrar carrito
    cerrarCarrito.addEventListener('click', (e) => {
      console.log("Carrito cerrado");
      carritoDesplegable.classList.remove('show');
    });

    // Cerrar carrito si se hace clic fuera de él
    window.addEventListener('click', (e) => {
      if (!carritoDesplegable.contains(e.target) && e.target !== carritoButton) {
        carritoDesplegable.classList.remove('show');
      }
    });

    // Evitar propagación dentro del carrito
    carritoDesplegable.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  } else {
    console.warn("Algunos elementos no están presentes en el DOM.");
  }
});
