# E-commerce de Videojuegos

Este proyecto es un ecommerce de videojuegos desarrollado con **React**, **Vite**, **Tailwind CSS**, **React Router**, y **Firebase**. Los usuarios pueden visualizar productos, agregarlos al carrito, filtrarlos por categorías y completar el proceso de compra con un formulario.

## Tecnologías Utilizadas

### React

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50" height="50">

**React** es una biblioteca de JavaScript para construir interfaces de usuario. Se utilizó para construir la lógica de los componentes y la estructura de la aplicación.

### Vite

<img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="50" height="50">

**Vite** es un build tool para proyectos modernos de JavaScript. Vite se encargó de la configuración y optimización del bundle para mejorar la velocidad de desarrollo.

### Tailwind CSS

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width="50" height="50">

**Tailwind CSS** es un framework de CSS de utilidad que se utilizó para diseñar de forma rápida y responsiva la interfaz de usuario.

### React Router

<img src="https://reactrouter.com/favicon.ico" alt="React Router Logo" width="50" height="50">

**React Router** es una librería que permite la navegación entre páginas o vistas dentro de una aplicación de una sola página (SPA). En este proyecto se utilizó para navegar entre las distintas secciones del ecommerce como la lista de productos, el carrito de compras y el formulario de checkout.

### Firebase

<img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase Logo" width="100" height="100">

**Firebase** es una plataforma de Google que ofrece una base de datos en tiempo real y otras herramientas útiles para el desarrollo de aplicaciones. En este proyecto se usó **Firebase Firestore** para almacenar los productos y **Firebase Authentication** para manejar los usuarios y la autenticación si es necesario.

## Funcionalidades

### 1. Visualizar Productos

Los productos disponibles en la tienda se pueden visualizar en una lista. El usuario puede navegar por la tienda y ver los productos disponibles.

- **Página principal** con una lista de productos.
- Cada producto muestra una imagen, nombre y precio.

### 2. Detalles del Producto y Agregar al Carrito

El usuario puede hacer clic en cualquier producto para ver más detalles, como una descripción y más información. Desde esta vista, también puede agregar el producto al carrito.

- **Vista detallada** con la descripción del producto.
- **Botón de agregar al carrito** para seleccionar la cantidad deseada.

### 3. Filtrar Productos por Categoría

Los productos pueden ser filtrados por categorías. Esto permite a los usuarios navegar de manera más eficiente según el tipo de videojuego que buscan.

- **Filtros de categoría** para organizar los productos en grupos (por ejemplo, "Aventura", "Acción", "Deportes").

### 4. Ver y Eliminar Productos del Carrito

El carrito de compras muestra todos los productos que el usuario ha seleccionado. El usuario puede ver el detalle de cada producto agregado, la cantidad y el precio total. También tiene la opción de eliminar productos si lo desea.

- **Página de carrito** donde se muestran los productos seleccionados.
- **Eliminar productos** del carrito con un botón.
- **Visualización de total** de la compra.

### 5. Finalizar la Compra

Una vez que el usuario está listo para realizar la compra, puede completar un formulario de checkout con su nombre, dirección de correo electrónico, teléfono y cualquier mensaje adicional. Al enviar el formulario, se crea una orden en Firebase.

- **Formulario de checkout** con campos para nombre, apellido, correo electrónico, teléfono y mensaje.
- Al finalizar la compra, se crea una colección de **"orders"** en Firebase con la información del pedido, productos seleccionados y total.

## Base de Datos en Firebase

Los productos y las órdenes se almacenan en **Firebase Firestore**:

### Productos en Firestore
Los productos están almacenados en una colección de **"products"** en Firestore. Cada documento contiene la siguiente información sobre los productos:

- `name`: Nombre del producto.
- `category`: Categoría a la que pertenece (por ejemplo, "Acción", "Aventura").
- `price`: Precio del producto.
- `imageUrl`: URL de la imagen del producto.
- `description`: Descripción detallada del producto.

### Órdenes de Compra

Cuando un usuario finaliza su compra, se crea una nueva colección de **"orders"** en Firestore con la información de la compra:

- **buyer**: Información del comprador (nombre, apellido, correo electrónico, teléfono).
- **items**: Lista de productos comprados, con el nombre, cantidad y precio.
- **total**: Total de la compra.
- **time**: Marca de tiempo que indica cuándo se realizó la compra.

#### Ejemplo de una orden en Firestore:

```json
{
  "buyer": {
    "name": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890"
  },
  "items": [
    {
      "name": "Super Mario Bros",
      "category": "Aventura",
      "price": 59.99,
      "quantity": 1
    },
    {
      "name": "FIFA 23",
      "category": "Deportes",
      "price": 49.99,
      "quantity": 1
    }
  ],
  "total": 109.98,
  "time": "2025-01-12T10:30:00Z"
}
