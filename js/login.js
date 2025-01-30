document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const password = document.getElementById("password").value.trim();

        try {
            // Hacer solicitud para buscar al usuario por nombre
            const response = await fetch(`http://localhost:3000/api/users?nombre=${nombre}`);
            const user = await response.json();

            if (user.length === 0) {
                mensaje.textContent = "Usuario no encontrado.";
                return;
            }

            const userData = user[0];

            // Hashear la contraseña proporcionada por el usuario usando SHA-256
            const hashedPassword = await hashPassword(password);

            // Verificar si la contraseña hasheada coincide con la contraseña almacenada
            if (hashedPassword === userData.password) {  // Compara la contraseña hasheada directamente
                // Guardar los datos del usuario en el localStorage
                localStorage.setItem("user", JSON.stringify(userData));

                mensaje.textContent = "Bienvenido, " + userData.nombre + "!";
                // Redirigir a otra página (por ejemplo, al dashboard del usuario)
                window.location.href = "../html/header.html"; // Aquí puede ser la página que desees
            } else {
                mensaje.textContent = "Contraseña incorrecta.";
            }
        } catch (error) {
            console.error("Error al hacer login:", error);
            mensaje.textContent = "Hubo un problema al intentar iniciar sesión.";
        }
    });
});

// Función para hashear la contraseña usando SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
