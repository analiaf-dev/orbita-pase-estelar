// Obtenemos los elementos de la interfaz por su ID
const botonAbrir = document.getElementById('boton-abrir-pase');
const fondoModal = document.getElementById('fondo-modal');
const botonCerrar = document.getElementById('boton-cerrar');
const botonConfirmar = document.getElementById('boton-confirmar');
const tarjetaPerfil = document.getElementById('tarjeta-perfil');
const tituloCancion = document.getElementById('titulo-cancion');
const botonesTema = document.querySelectorAll('.boton-tema');

// 1. Abrir el cartel modal al hacer clic en el banner
botonAbrir.addEventListener('click', function () {
  fondoModal.classList.add('activo');
});

// 2. Cerrar con la cruz
botonCerrar.addEventListener('click', function () {
  fondoModal.classList.remove('activo');
});

// 3. Cerrar si se hace clic fuera del modal (en el fondo oscuro)
fondoModal.addEventListener('click', function (evento) {
  if (evento.target === fondoModal) {
    fondoModal.classList.remove('activo');
  }
});

// 4. Cambiar el estilo del perfil en vivo según el botón tocado
botonesTema.forEach(function (boton) {
  boton.addEventListener('click', function () {
    // Quita la selección de todos los botones y activa el presionado
    botonesTema.forEach(function (b) {
      b.classList.remove('activo');
    });
    boton.classList.add('activo');

    // Identifica el tema seleccionado mediante el atributo data-tema
    const temaElegido = boton.getAttribute('data-tema');

    // Restablece la clase base
    tarjetaPerfil.className = 'tarjeta-perfil-prueba';

    // Aplica el borde, brillo y canción correspondiente
    if (temaElegido === 'ciberpunk') {
      tarjetaPerfil.classList.add('tema-ciberpunk');
      tituloCancion.innerText = 'Sonando: Babasónicos - Irresponsables';
    } else if (temaElegido === 'retro') {
      tarjetaPerfil.classList.add('tema-retro');
      tituloCancion.innerText = 'Sonando: Charly García - Nos Siguen Pegando Abajo';
    } else if (temaElegido === 'oro') {
      tarjetaPerfil.classList.add('tema-oro');
      tituloCancion.innerText = 'Sonando: Gustavo Cerati - Puente';
    }
  });
});

// 5. Botón final para activar la suscripción
botonConfirmar.addEventListener('click', function () {
  alert('¡Felicitaciones! Activaste tus 3 meses gratis del Pase Estelar Órbita. 🚀👑');
  fondoModal.classList.remove('activo');
});