document.addEventListener("DOMContentLoaded", () => {
    const userInfo = document.getElementById("user-info");
    const loginMenuOption = document.getElementById("login-menu-option");
    const userAvatar = document.getElementById("user-avatar");
    const userName = document.getElementById("user-name");
    const logoutButton = document.getElementById("logout");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const loginButton = document.getElementById("login-button");
    const viewProfileButton = document.getElementById("view-profile");  // Botón de Ver perfil

    // Verificar si hay un usuario en localStorage
    const userData = JSON.parse(localStorage.getItem("user"));

    // Si el usuario está logeado
    if (userData) {
        userAvatar.src = userData.imagen_perfil; // Mostrar la foto de perfil
        userName.textContent = userData.nombre; // Mostrar el nombre
        userInfo.style.display = "flex"; // Mostrar la información del usuario
        loginMenuOption.style.display = "none"; // Ocultar el botón de iniciar sesión
        dropdownMenu.style.display = "block"; // Mostrar el menú desplegable
        
        // Hacer que el botón "Ver perfil" redirija al perfil del usuario
        viewProfileButton.addEventListener("click", () => {
            window.location.href = "../html/perfil.html";  // Cambia esta URL si es necesario
        });
    } else {
        loginMenuOption.style.display = "block"; // Mostrar la opción de iniciar sesión
        userInfo.style.display = "none"; // Ocultar la información del usuario
    }

    // Mostrar/ocultar el menú desplegable al hacer clic en el avatar o el nombre
    userAvatar.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Mostrar/ocultar el menú desplegable al hacer clic en el nombre
    userName.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Función para cerrar sesión
    logoutButton.addEventListener("click", () => {
        // Eliminar datos del usuario en el localStorage
        localStorage.removeItem("user");

        // Redirigir a la página de inicio de sesión
        window.location.href = "../html/login.html"; // Cambia a tu página de login
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    // Verificar si el usuario tiene una preferencia de tema guardada
    const savedTheme = localStorage.getItem("theme");

    // Aplicar el tema guardado si existe
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        sunIcon.style.opacity = 0;
        moonIcon.style.opacity = 1;
    } else {
        document.body.classList.remove("dark-theme");
        sunIcon.style.opacity = 1;
        moonIcon.style.opacity = 0;
    }
    

    // Cambiar el tema cuando se haga clic en el botón de cambiar tema
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        // Cambiar el ícono de sol y luna
        if (document.body.classList.contains("dark-theme")) {
            sunIcon.style.opacity = 0;
            moonIcon.style.opacity = 1;
            localStorage.setItem("theme", "dark"); // Guardar preferencia de tema oscuro
        } else {
            sunIcon.style.opacity = 1;
            moonIcon.style.opacity = 0;
            localStorage.setItem("theme", "light"); // Guardar preferencia de tema claro
        }
    });
});

