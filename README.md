> [!NOTE]
> Login system works with any user from [dummyjson/users](https://dummyjson.com/docs/users#users-all)

> [!WARNING]
> You must have installed [Node](https://nodejs.org/en) and [Vite](https://es.vitejs.dev/)

### Done
✔️ Nueva Página "Resumen" donde se vean los productos agregados al carrito.

✔️ Se debe poder visualisar la cantidad a pagar total.

✔️ Solo usar useReducer, useContext y Provider. Prohibido librerías de terceros para manejo de estados.

✔️ Se pueden agregar, reducir o eliminar productos del carrito.

✔️ Modificar los productos del carrito debe cambiar también la cantidad total a pagar. Y el número de productos del carrito.

### Pending

🕒 Eliminar un producto debe quitar el producto de la lista, el contador del carrito y el monto total a pagar.

🕒 Debajo del resumen, se tendrá un formulario para el envío de productos.

🕒 Todos los campos son obligatorios y en caso de error se muestra el mensaje "Debe ingresar un valor válido"

🕒 El campo "Distrito" será desplegable que carga el contenido con un custom hook que lee un archivo javascript.

🕒 Si el formulario está correcto y se da click en "comprar", se muestra una alerta personalizada donde el pedido se registró con éxito.

🕒 Una vez dado en "aceptar" en la alerta personalizzada, todo lo carrito se limpia y se le redirige a la página de Productos del Market.

