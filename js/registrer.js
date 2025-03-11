document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("registerForm");
    const openModalBtn = document.getElementById("openCharacterModal");
    const characterModal = document.getElementById("characterModal");
    const closeModalBtn = document.querySelector(".close");
    const confirmSelectionBtn = document.getElementById("confirmSelection");
    const characterList = document.getElementById("characterList");
    const selectedCharactersDiv = document.getElementById("selectedCharacters");
    const mensaje = document.getElementById("mensaje");

    let selectedCharacters = [];

    // Abrir y cerrar el modal
    openModalBtn.addEventListener("click", () => characterModal.style.display = "flex");
    closeModalBtn.addEventListener("click", () => characterModal.style.display = "none");

    // Cargar personajes desde la API
    async function cargarPersonajes() {
        try {
            let response = await fetch("http://localhost:3000/api/characters");
            let personajes = await response.json();
            
            personajes.forEach(personaje => {
                let card = document.createElement("div");
                card.classList.add("character-card");
                card.setAttribute("data-id", personaje.id);
                card.innerHTML = `
                    <img src="${JSON.parse(personaje.galeria)[0]}" alt="${personaje.nombre}" title="${personaje.nombre}"> <!-- Usamos la primera imagen -->
                `;
                characterList.appendChild(card);

                card.addEventListener("click", () => seleccionarPersonaje(card, personaje.id, JSON.parse(personaje.galeria)[0])); // Guardamos solo la primera imagen
            });
        } catch (error) {
            console.error("Error al cargar personajes:", error);
        }
    }

    // Seleccionar personajes favoritos
    function seleccionarPersonaje(card, personajeId, personajeImg) {
        if (selectedCharacters.find(c => c.id === personajeId)) {
            selectedCharacters = selectedCharacters.filter(c => c.id !== personajeId);
            card.classList.remove("selected");
        } else {
            if (selectedCharacters.length < 3) {
                selectedCharacters.push({ id: personajeId, img: personajeImg });
                card.classList.add("selected");
            } else {
                mensaje.textContent = "Solo puedes seleccionar hasta 3 personajes.";
            }
        }
    }

    // Confirmar selección y cerrar modal
    confirmSelectionBtn.addEventListener("click", () => {
        selectedCharactersDiv.innerHTML = selectedCharacters.map(c => `<img src="${c.img}" alt="Personaje">`).join("");
        characterModal.style.display = "none";
    });

    cargarPersonajes();

    // Función para hashear la contraseña con SHA-256
    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convertir el ArrayBuffer a un array de bytes
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join(""); // Convertir a hexadecimal
        return hashHex;
    }

    // Manejo del formulario de registro
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const biografia = document.getElementById("biografia").value.trim();
        const personajesFavoritos = selectedCharacters.map(c => c.id); // Solo IDs

        // Validación simple
        if (!nombre || !email || !password) {
            mensaje.textContent = "Por favor, completa todos los campos obligatorios.";
            mensaje.style.color = "red";
            return;
        }

        if (personajesFavoritos.length !== 3) {
            mensaje.textContent = "Debes seleccionar exactamente 3 personajes favoritos.";
            mensaje.style.color = "red";
            return;
        }

        // Hashear la contraseña con SHA-256
        const hashedPassword = await hashPassword(password);

        // Crear objeto con los datos del usuario
        const usuario = {
            nombre,
            email,
            password: hashedPassword,
            biografia,
            imagen_perfil: "https://i.ibb.co/7xGp6ytf/user-default.png", // Imagen de perfil por defecto
            personajes_favoritos: JSON.stringify(personajesFavoritos), // Guardamos como JSON
            puntos: 10 // Puntos por defecto
        };

        try {
            let respuesta = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario)
            });

            let data = await respuesta.json();
            if (respuesta.ok) {
                mensaje.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
                mensaje.style.color = "green";
                form.reset();
                selectedCharactersDiv.innerHTML = "";
                selectedCharacters = [];
            } else {
                mensaje.textContent = "Error: " + data.error;
                mensaje.style.color = "red";
            }
        } catch (error) {
            mensaje.textContent = "Error al registrar usuario.";
            mensaje.style.color = "red";
            console.error("Error en el registro:", error);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const modalPerfil = document.getElementById("profileModal");
    const openModalPerfil = document.getElementById("openProfileModal");
    const closeModalPerfil = document.getElementById("closeProfileModal");
    const guardarImagenPerfil = document.getElementById("guardarImagenPerfil");
    const cancelarModalPerfil = document.getElementById("cancelarModalPerfil");
    const modalImagesPerfil = document.querySelectorAll(".modal-gallery .modal-image");
    const previewProfilePicture = document.getElementById("previewProfilePicture");

    let selectedProfileImageUrl = "";

    // Abrir modal
    openModalPerfil.addEventListener("click", () => {
        modalPerfil.style.display = "flex";
    });

    // Cerrar modal
    closeModalPerfil.addEventListener("click", () => {
        modalPerfil.style.display = "none";
    });

    // Seleccionar imagen de perfil
    modalImagesPerfil.forEach(image => {
        image.addEventListener("click", () => {
            // Quitar la clase "selected" de todas las imágenes
            modalImagesPerfil.forEach(img => img.classList.remove("selected"));

            // Agregar la clase "selected" a la imagen clickeada
            image.classList.add("selected");

            selectedProfileImageUrl = image.getAttribute("data-img-url");
            previewProfilePicture.src = selectedProfileImageUrl;
        });
    });

    // Guardar imagen seleccionada
    guardarImagenPerfil.addEventListener("click", () => {
        if (selectedProfileImageUrl) {
            alert("Imagen de perfil seleccionada.");
            modalPerfil.style.display = "none";
        } else {
            alert("Por favor, selecciona una imagen.");
        }
    });

    // Cancelar selección
    cancelarModalPerfil.addEventListener("click", () => {
        modalPerfil.style.display = "none";
    });

    // Enviar datos al backend
    document.getElementById("registerForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = {
            nombre,
            email,
            password,
            imagen_perfil: selectedProfileImageUrl || "default-avatar.png"
        };

        try {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            console.log("Respuesta del servidor:", data);

            if (response.ok) {
                // Guardar en localStorage
                localStorage.setItem("user", JSON.stringify(data));

                alert("Usuario registrado con éxito.");
                window.location.href = "perfil.html"; // Redirigir al perfil
            } else {
                alert("Error al registrar el usuario.");
            }
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            alert("Hubo un error al registrar el usuario.");
        }
    });
});
