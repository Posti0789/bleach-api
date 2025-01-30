document.addEventListener('DOMContentLoaded', obtenerPerfil);

async function obtenerPerfil() {
    try {
        // Obtener los datos del usuario desde localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        console.log('Datos del usuario:', userData); // Verifica los datos del usuario

        if (userData) {
            // Mostrar la información del perfil
            document.getElementById('perfil-avatar').src = userData.imagen_perfil || 'default-avatar.png';
            document.getElementById('perfil-nombre').textContent = userData.nombre;
            document.getElementById('perfil-email').textContent = userData.email;
            document.getElementById('perfil-bio').textContent = userData.biografia || 'No disponible';
            document.getElementById('perfil-puntos').textContent = userData.puntos || 0;
            document.getElementById('perfil-nivel').textContent = userData.nivel || 1;

            // Si el usuario tiene personajes favoritos, obtenerlos
            if (userData.personajes_favoritos) {
                const personajesFavoritosIDs = JSON.parse(userData.personajes_favoritos);
                console.log('Personajes favoritos:', personajesFavoritosIDs); // Verifica las IDs de los personajes favoritos
                
                // Hacer peticiones para obtener los personajes
                const personajes = await Promise.all(personajesFavoritosIDs.map(id => fetchPersonajeById(id)));
                
                // Mostrar los personajes favoritos
                mostrarPersonajesFavoritos(personajes);
            }
        }
    } catch (error) {
        console.error('Error al obtener el perfil:', error);
        alert('Hubo un error al cargar el perfil. Intenta nuevamente más tarde.');
    }
}

// Función para obtener los detalles de un personaje por su ID
async function fetchPersonajeById(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/personajes/${id}`);
        const personaje = await response.json();
        console.log(`Datos del personaje ${id}:`, personaje); // Verifica los datos del personaje
        return personaje;
    } catch (error) {
        console.error('Error al obtener el personaje:', error);
        return null; // Si hay un error, devolvemos null
    }
}

// Función para mostrar los personajes favoritos en el HTML
function mostrarPersonajesFavoritos(personajes) {
    const contenedorPersonajes = document.getElementById('personajes-favoritos');
    contenedorPersonajes.innerHTML = ''; // Limpiar el contenedor antes de agregar los personajes

    // Mostrar solo los tres primeros personajes
    personajes.slice(0, 3).forEach(personaje => {
        if (personaje) { // Asegúrate de que el personaje no sea null
            const personajeElement = document.createElement('div');
            personajeElement.classList.add('personaje');
            
            // Crear los elementos de nombre y foto
            const personajeNombre = document.createElement('h4');
            personajeNombre.textContent = personaje.nombre;  // Suponiendo que 'nombre' es la propiedad del personaje
            
            const personajeFoto = document.createElement('img');
            
            // Verificamos la propiedad 'galeria'
            console.log(`Galería del personaje ${personaje.nombre}:`, personaje.galeria); // Verifica la galería
            
            let imagenUrl = 'default-image.jpg'; // Imagen por defecto si no hay galería o está vacía
            
            // Verificamos si la galería está correctamente formateada
            if (personaje.galeria && Array.isArray(personaje.galeria)) {
                // Si es un array de URLs
                console.log(`URL de imagen de ${personaje.nombre}:`, personaje.galeria[0]); // Mostramos la primera imagen
                imagenUrl = personaje.galeria[0];
            } else if (typeof personaje.galeria === 'string') {
                // Si la galería está guardada como una cadena de texto (puede ser un JSON o algo similar)
                console.log(`Galería de ${personaje.nombre} como string:`, personaje.galeria);
                try {
                    // Intentamos parsear la cadena como JSON si es necesario
                    const parsedGaleria = JSON.parse(personaje.galeria);
                    if (Array.isArray(parsedGaleria)) {
                        imagenUrl = parsedGaleria[0];  // Tomamos la primera imagen
                    }
                } catch (e) {
                    console.warn(`Error al parsear la galería de ${personaje.nombre}:`, e);
                }
            }

            // Asignar la URL de la imagen
            personajeFoto.src = imagenUrl;
            personajeFoto.alt = personaje.nombre;  // Usamos el nombre como alt para la imagen

            // Agregar la foto y nombre al contenedor del personaje
            personajeElement.appendChild(personajeFoto);
            personajeElement.appendChild(personajeNombre);

            contenedorPersonajes.appendChild(personajeElement);
        }
    });
}
