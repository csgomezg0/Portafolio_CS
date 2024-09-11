function redirigirA(url) {
    window.location.href = url;
}

function ImagenFunc(IdImage,rutaImage){
    // Seleccionar el elemento de la imagen en el HTML
    const imagen = document.getElementById(IdImage);
    // Asignar la URL de la imagen que se sirve desde el servidor
    imagen.src =rutaImage;
}
