document.addEventListener('DOMContentLoaded', obtenerPerfil);

async function obtenerPerfil() {
    try {
        const userData = JSON.parse(localStorage.getItem('user'));

        // Verifica si los datos del usuario existen en localStorage
        if (!userData) {
            console.error('No se encontraron datos del usuario en localStorage');
            alert('No se encontraron datos del usuario. Por favor, inicia sesión nuevamente.');
            return;
        }

        console.log('Datos del usuario cargados:', userData);

        // Mostrar la información del perfil
        document.getElementById('perfil-avatar').src = userData.imagen_perfil || 'default-avatar.png';
        document.getElementById('perfil-nombre').textContent = userData.nombre;
        document.getElementById('perfil-email').textContent = userData.email;
        document.getElementById('perfil-bio').textContent = userData.biografia || 'No disponible';
        document.getElementById('perfil-puntos').textContent = userData.puntos || 0;
        document.getElementById('perfil-nivel').textContent = userData.nivel || 1;

        // Cargar los personajes favoritos si existen
        if (userData.personajes_favoritos) {
            const personajesFavoritosIDs = JSON.parse(userData.personajes_favoritos);
            console.log('Personajes favoritos:', personajesFavoritosIDs);
            
            // Obtener los personajes favoritos
            const personajes = await Promise.all(personajesFavoritosIDs.map(id => fetchPersonajeById(id)));
            mostrarPersonajesFavoritos(personajes);
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
        console.log(`Datos del personaje ${id}:`, personaje);
        return personaje;
    } catch (error) {
        console.error('Error al obtener el personaje:', error);
        return null;
    }
}

// Función para mostrar los personajes favoritos en el HTML
function mostrarPersonajesFavoritos(personajes) {
    const contenedorPersonajes = document.getElementById('personajes-favoritos');
    contenedorPersonajes.innerHTML = '';

    personajes.slice(0, 3).forEach(personaje => {
        if (personaje) {
            const personajeElement = document.createElement('div');
            personajeElement.classList.add('personaje');

            const personajeNombre = document.createElement('h4');
            personajeNombre.textContent = personaje.nombre;

            const personajeFoto = document.createElement('img');
            let imagenUrl = 'default-image.jpg';

            // Validación de la galería del personaje
            if (personaje.galeria && Array.isArray(personaje.galeria)) {
                imagenUrl = personaje.galeria[0];
            } else if (typeof personaje.galeria === 'string') {
                try {
                    const parsedGaleria = JSON.parse(personaje.galeria);
                    if (Array.isArray(parsedGaleria)) {
                        imagenUrl = parsedGaleria[0];
                    }
                } catch (e) {
                    console.warn(`Error al parsear la galería de ${personaje.nombre}:`, e);
                }
            }

            personajeFoto.src = imagenUrl;
            personajeFoto.alt = personaje.nombre;

            personajeElement.appendChild(personajeFoto);
            personajeElement.appendChild(personajeNombre);
            contenedorPersonajes.appendChild(personajeElement);
        }
    });
}document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const guardarImagen = document.getElementById("guardarImagen");
    const cancelarModal = document.getElementById("cancelarModal");
    const modalImages = document.querySelectorAll(".modal-image"); 
    const perfilAvatar = document.getElementById("perfil-avatar");
    
    let selectedImageUrl = "";

    perfilAvatar.addEventListener("click", () => {
        modal.style.display = "flex";  // Asegura que flexbox se aplica
        modal.style.justifyContent = "center"; // Lo mantiene centrado
        modal.style.alignItems = "flex-start"; // Lo mantiene más abajo
    });
    

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modal.style.justifyContent = ""; // Resetea estilos
        modal.style.alignItems = "";
    });
    

    modalImages.forEach(image => {
        image.addEventListener("click", () => {
            // Quitar la clase "selected" de todas las imágenes
            modalImages.forEach(img => img.classList.remove("selected"));

            // Agregar la clase "selected" a la imagen clickeada
            image.classList.add("selected");

            selectedImageUrl = image.getAttribute("data-img-url");
            perfilAvatar.src = selectedImageUrl;
        });
    });

    guardarImagen.addEventListener("click", async () => {
        if (selectedImageUrl) {
            try {
                const userData = JSON.parse(localStorage.getItem('user'));
    
                if (!userData || !userData.id) {
                    console.error("No se pudo obtener la información del usuario.");
                    alert("Error al actualizar la imagen. Intenta iniciar sesión nuevamente.");
                    return;
                }
    
                const response = await fetch(`http://localhost:3000/api/users/${userData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        imagen_perfil: selectedImageUrl,
                    }),
                });
    
                const data = await response.json();
                console.log('Respuesta de la API después de actualizar:', data);
    
                if (response.ok) {
                    alert("Imagen de perfil actualizada correctamente");
    
                    // Actualizar los datos en localStorage
                    userData.imagen_perfil = selectedImageUrl;
                    localStorage.setItem('user', JSON.stringify(userData));
    
                    // Actualizar la imagen en la UI
                    perfilAvatar.src = selectedImageUrl;
    
                    // ❌ Cerrar el modal después de guardar
                    modal.style.display = "none";  
                } else {
                    alert("Error al actualizar la imagen de perfil.");
                }
            } catch (error) {
                console.error("Error al guardar la imagen de perfil", error);
                alert("Hubo un error al guardar la imagen de perfil.");
            }
        } else {
            alert("Por favor, selecciona una imagen.");
        }
    });
    
    cancelarModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
});
