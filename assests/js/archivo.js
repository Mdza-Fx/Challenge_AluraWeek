// Obtener los elementos relevantes del DOM
const imagenDrop = document.querySelector('.imagen-drop');
const imagenDropTexto = document.querySelector('.imagen-drop-texto');
const imagenDropImg = document.querySelector('.imagen-drop-img');
const imagenDropImgMobile = document.querySelector('.imagen-drop-img__pantalla-mobile');
const agregarImagenBoton = document.querySelector('.agregar__imagen__boton');

// Agregar eventos de arrastrar y soltar
imagenDrop.addEventListener('dragover', (e) => {
  e.preventDefault();
});

imagenDrop.addEventListener('dragenter', () => {
  imagenDrop.classList.add('active');
  imagenDropTexto.textContent = 'Suelta la imagen aquí';
});

imagenDrop.addEventListener('dragleave', () => {
  imagenDrop.classList.remove('active');
  imagenDropTexto.textContent = 'Arrastra para agregar una imagen para el producto';
});

imagenDrop.addEventListener('drop', (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  mostrarImagen(file);
});

// Agregar evento al seleccionar una imagen desde el dispositivo
agregarImagenBoton.addEventListener('change', (e) => {
  const file = e.target.files[0];
  mostrarImagen(file);
});

// Función para mostrar la imagen seleccionada
function mostrarImagen(file) {
  const reader = new FileReader();
  reader.onload = function () {
    const url = reader.result;
    imagenDropImg.src = url;
    imagenDropImgMobile.src = url;
  };
  reader.readAsDataURL(file);
}
