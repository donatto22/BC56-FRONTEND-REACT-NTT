> [!NOTE]
> Login system works with any user from [dummyjson/users](https://dummyjson.com/docs/users#users-all)

> [!WARNING]
> You must have installed [Node](https://nodejs.org/en) and [Vite](https://es.vitejs.dev/)

### Done
✔️ Se deberá usar React Router para el manejo de rutas

✔️ No usar Redux

✔️ Si se presiona F5 se debe mantener la información de la sesión. (Guardar el token en session storage)

✔️ En el menú debe existir un link que tenga por texto "Cerrar sesión" que además redirecciona al login.

✔️ Para los mensajes de alerta personalizado se puede usar Sweet Alert o cualquier otra librería.

✔️ Se debe controlar los errores y mostrar un mensaje de error personalizado al usuario en el momento de la autenticación para indicar lo que ocurrió.

✔️ EL login deberá tener la función de "Olvidé contraseña", el cual abrirá una ventana modal que permita colocar el correo electrónico. Se debe validar que sea un correo válido. Se debe mostrar otro modal que indica "Se envió la información al correo ingresado"

✔️ Se debe crear un hook para el paginado del contenido.

✔️ Crear un HOC que permita visualizar la página solo si se ha iniciado sesión, de lo contrario se redirecciona.

### Pending
⏱ En el menu debe estar "Bienvenido + nombre" y mantenerse en todas las pantallas

⏱ Se deben agregar las pruebas unitarias a las nuevas funcionalidades agregadas.