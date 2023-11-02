
document.addEventListener("DOMContentLoaded", function () {
    // Variables para almacenar elementos HTML
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    const currentImage = document.getElementById("currentImage");
    const imageName = document.getElementById("imageName");
    const imageDescription = document.getElementById("imageDescription");
    const nextImagePreview = document.getElementById("nextImagePreview");
    const downloadButton = document.getElementById("downloadButton");
  
    // Función para calcular la imagen siguiente
    function calculateNextImagePreview() {
      if (currentIndex < images.length - 1) {
        nextImagePreview.src = images[currentIndex + 1].url;
      } else {
        nextImagePreview.src = ""; // No hay siguiente imagen en el último elemento
      }
    }
  
    // Función para mostrar la imagen anterior
    function previousImage() {
      if (currentIndex > 0) {
        currentIndex--;
        currentImage.src = images[currentIndex].url;
        imageName.innerText = images[currentIndex].name;
        imageDescription.innerText = images[currentIndex].description;
        saveImageData();
        calculateNextImagePreview();
      }
    }
  
    // Función para mostrar la imagen siguiente
    function nextImage() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        currentImage.src = images[currentIndex].url;
        imageName.innerText = images[currentIndex].name;
        imageDescription.innerText = images[currentIndex].description;
        saveImageData();
        calculateNextImagePreview();
      }
    }
  
    // Función para guardar los datos de la imagen actual en el almacenamiento local
    function saveImageData() {
      localStorage.setItem("imageData", JSON.stringify(currentImage));
    }
  
    // Función para descargar el archivo APK
    function downloadApk() {
      const apkFileURL =
        "https://drive.google.com/file/d/1LI6v5aQqfW0yMe3koSFBSBSYd8Q0SllS/view?usp=sharing";
      window.open(apkFileURL);
    }
  
    // Configuración inicial
    let currentIndex = 0;
    const storedImageData = localStorage.getItem("imageData");
    if (storedImageData) {
      currentImage.src = JSON.parse(storedImageData).url;
    } else {
      currentImage.src = images[currentIndex].url;
    }
    imageName.innerText = images[currentIndex].name;
    imageDescription.innerText = images[currentIndex].description;
  
    // Asocia las funciones JavaScript a los eventos de clic
    previousButton.addEventListener("click", previousImage);
    nextButton.addEventListener("click", nextImage);
    downloadButton.addEventListener("click", downloadApk);
    loadImages();
  });
  const images = [
    {
      id: 1,
      url: "img/inicio.jpg",
      name: "Inicio",
      description:
        "Pantalla que muestra un menú de botones en la parte superior y una lista de productos en la parte inferior, junto con un menú de navegación.",
    },
    {
      id: 2,
      url: "img/carrito.jpg",
      name: "Carrito de Compras",
      description:
        "En esta pantalla, se visualiza el carrito de compras, que puede estar vacío si aún no has agregado productos. Para agregar productos, es necesario iniciar sesión.",
    },
    {
      id: 3,
      url: "img/login.jpg",
      name: "Inicio de Sesión",
      description:
        "Pantalla donde puedes iniciar sesión en tu cuenta, recuperar una cuenta existente o crear una nueva cuenta.",
    },
    {
      id: 4,
      url: "img/registrarusu.jpg",
      name: "Crear Cuenta",
      description:
        "Esta pantalla te permite crear una nueva cuenta proporcionando información como nombre completo, correo electrónico, teléfono y contraseña.",
    },
    {
      id: 5,
      url: "img/recuperarusu.jpg",
      name: "Recuperar Cuenta",
      description:
        "Aquí puedes recuperar tu cuenta ingresando tu nombre completo, correo electrónico y teléfono.",
    },
    {
      id: 6,
      url: "img/usuario.jpg",
      name: "Vista de Usuario",
      description:
        "Muestra los detalles de tu cuenta de usuario y una lista de tus compras anteriores.",
    },
    {
      id: 7,
      url: "img/lateralusuario.jpg",
      name: "Menú Lateral de Usuario",
      description:
        "Este menú lateral ofrece varias opciones de navegación para acceder a diferentes funciones.",
    },
    {
      id: 8,
      url: "img/comprasusu.jpg",
      name: "Compras del Usuario",
      description:
        "Aquí puedes ver un registro de las compras realizadas por el cliente.",
    },
    {
      id: 9,
      url: "img/editarusu.jpg",
      name: "Editar Cuenta",
      description:
        "En esta pantalla, puedes modificar la información de tu cuenta de usuario.",
    },
    {
      id: 10,
      url: "img/tiendalogin.jpg",
      name: "Inicio de Sesión en la Tienda",
      description:
        "Permite el acceso a la tienda y ofrece opciones para crear una tienda o recuperar una tienda existente.",
    },
    {
      id: 11,
      url: "img/creartienda.jpg",
      name: "Crear Tienda",
      description:
        "Esta pantalla te permite crear una nueva tienda, ingresando información como el nombre de la tienda y una imagen representativa.",
    },
    {
      id: 12,
      url: "img/recuperartienda.jpg",
      name: "Recuperar Tienda",
      description:
        "Aquí puedes recuperar una tienda existente al completar un formulario.",
    },
    {
      id: 13,
      url: "img/tienda.jpg",
      name: "Vista de Tienda",
      description:
        "Muestra los detalles de la tienda y los productos disponibles. Puedes eliminar un producto deslizándolo hacia la izquierda.",
    },
    {
      id: 14,
      url: "img/lateraltienda.jpg",
      name: "Menú Lateral de la Tienda",
      description:
        "Este menú proporciona opciones de navegación para acceder a diferentes funciones de la tienda.",
    },
    {
      id: 15,
      url: "img/agregarprd.jpg",
      name: "Registrar Producto",
      description:
        "En esta pantalla, puedes agregar nuevos productos a la tienda, proporcionando información como el nombre, la categoría y la imagen del producto, entre otros detalles.",
    },
    {
      id: 16,
      url: "img/ventas.jpg",
      name: "Ventas Realizadas",
      description:
        "Muestra un registro de las ventas realizadas, es decir, los productos vendidos por la tienda.",
    },
    {
      id: 17,
      url: "img/editartienda.jpg",
      name: "Editar Tienda",
      description:
        "Permite editar la información de la tienda, aunque en este momento solo se permite editar el número de contacto.",
    },
    {
      id: 18,
      url: "img/editarprd.jpg",
      name: "Editar Producto",
      description:
        "Esta pantalla te permite modificar detalles de un producto, como la cantidad, el precio y el nombre del producto.",
    },
    {
      id: 19,
      url: "img/productos1.jpg",
      name: "Vista de Productos",
      description:
        "Aquí se muestran los productos disponibles. Puedes agregar productos al carrito deslizándolos hacia la izquierda, pero primero debes iniciar sesión.",
    },
    {
      id: 20,
      url: "img/detalleproductos.jpg",
      name: "Detalle de Producto",
      description: "Muestra información detallada sobre un producto específico.",
    },
    {
      id: 21,
      url: "img/carritoconprd.jpg",
      name: "Carrito de Compras con Productos",
      description:
        "En esta pantalla, puedes ver un carrito de compras que contiene productos seleccionados.",
    },
  ];
  
  let currentImage = null;
  let currentIndex = 0;
  let nextImagePreview = null;