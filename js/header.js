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

// Alternar menú hamburguesa
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("show");
});

// Alternar submenús al hacer clic
document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que recargue la página
        this.parentElement.classList.toggle("show");
    });
});
console.log("✅ header.js ha sido cargado y se está ejecutando!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("🌍 DOM listo dentro de header.js");

    // Comprobar si los elementos existen
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (!menuToggle) {
        console.error("❌ ERROR: No se encontró #menuToggle en el DOM.");
    } else {
        console.log("✅ #menuToggle encontrado en el DOM.");
    }

    if (!sidebar) {
        console.error("❌ ERROR: No se encontró #sidebar en el DOM.");
    } else {
        console.log("✅ #sidebar encontrado en el DOM.");
    }

    if (!menuToggle || !sidebar) {
        console.warn("⚠️ Algo falta, el evento no se añadirá.");
        return;
    }

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        console.log("📌 Menú toggle activado.");
    });

    console.log("✅ header.js terminó de inicializar.");
});
// Crear partículas de Reitsu
function createParticles() {
    const particleContainer = document.querySelector('.particle-background');
    for (let i = 0; i < 50; i++) { // Creamos 50 partículas
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Establecemos posiciones aleatorias dentro de la pantalla
        const x = Math.random() * window.innerWidth;
        const delay = Math.random() * 3 + 's'; // Retraso aleatorio para las partículas
        particle.style.left = `${x}px`;
        particle.style.animationDelay = delay;

        // Añadimos la partícula al fondo
        particleContainer.appendChild(particle);
    }
}

// Llamamos a la función para crear partículas al cargar la página
createParticles();


tsParticles.load("particlesCanvas", {
    particles: {
      number: { value: 100, density: { enable: true, area: 800 } },
      color: { value: ["#00FFFF", "#00A2FF", "#9400D3"] }, // Azul, celeste y morado
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true, anim: { enable: true, speed: 0.5 } },
      size: { value: { min: 2, max: 6 }, random: true },
      move: {
        enable: true,
        speed: 1.2,
        direction: "top",
        straight: false,
        outModes: { default: "out" },
        trail: { enable: true, length: 4, fillColor: "#000000" } // Rastro de energía
      }
    },
    background: { color: "#111111" },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
    }
  });
  