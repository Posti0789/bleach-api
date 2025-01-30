// Cambiar tema
const themeToggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Alternar la visibilidad de los íconos
    if (document.body.classList.contains('dark-theme')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
});

// Barra de búsqueda
const searchButton = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", () => {
    // Obtener los datos del usuario desde el localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        // Asignar los datos al DOM
        const userInfoDiv = document.getElementById("user-info");
        const userName = document.getElementById("user-name");
        const userAvatar = document.getElementById("user-avatar");

        // Asignar la foto de perfil y el nombre del usuario
        userAvatar.src = user.imagen_perfil || "../fotos/default-avatar.png"; // Foto de perfil o una predeterminada
        userName.textContent = user.nombre;
    }
});
