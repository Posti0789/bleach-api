async function fetchCharacterDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');

    if (!characterId) {
        document.body.innerHTML = '<p>Error: No se encontró el personaje.</p>';
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/characters/${characterId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const character = await response.json();
        console.log("Datos del personaje:", character);

        document.getElementById('nombre').innerText = character.nombre;
        document.getElementById('raza').innerText = character.raza || "Desconocido";
        document.getElementById('cumpleaños').innerText = character.cumpleaños || "Desconocido";
        document.getElementById('altura').innerText = character.altura || "Desconocida";
        document.getElementById('peso').innerText = character.peso || "Desconocido";
        document.getElementById('afiliacion').innerText = character.afiliacion || "Desconocida";
        document.getElementById('ocupacion').innerText = character.ocupacion || "Desconocida";
        document.getElementById('shikai').innerText = character.shikai || "Ninguno";
        document.getElementById('bankai').innerText = character.bankai || "Ninguno";
        document.getElementById('poderes').innerText = character.poderes.trim();
        document.getElementById('habilidades').innerText = character.habilidades.trim();
        document.getElementById('nivel_de_poder').innerText = character.nivel_de_poder.trim();
        document.getElementById('historia').innerText = character.historia.trim();
        document.getElementById('personalidad').innerText = character.personalidad.trim();
        document.getElementById('batallas').innerText = character.batallas || "No especificado";

        // Cargar la imagen principal y la galería
        const galeria = character.galeria ? JSON.parse(character.galeria) : [];
        const mainImage = document.getElementById('main-image');
        const galeriaContainer = document.getElementById('galeria');

        if (galeria.length > 0) {
            mainImage.src = galeria[0];
            galeria.slice(1).forEach(imgUrl => {async function fetchCharacterDetails() {
                const urlParams = new URLSearchParams(window.location.search);
                const characterId = urlParams.get('id');
            
                if (!characterId) {
                    document.body.innerHTML = '<p>Error: No se encontró el personaje.</p>';
                    return;
                }
            
                try {
                    const response = await fetch(`http://localhost:3000/api/characters/${characterId}`);
            
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
            
                    const character = await response.json();
                    console.log("Datos del personaje:", character);
            
                    // Insertar datos
                    document.getElementById('nombre').innerText = character.nombre;
                    document.getElementById('raza').innerText = character.raza || "Desconocido";
                    document.getElementById('cumpleaños').innerText = character.cumpleaños || "Desconocido";
                    document.getElementById('altura').innerText = character.altura || "Desconocida";
                    document.getElementById('peso').innerText = character.peso || "Desconocido";
                    document.getElementById('afiliacion').innerText = character.afiliacion || "Desconocida";
                    document.getElementById('ocupacion').innerText = character.ocupacion || "Desconocida";
                    document.getElementById('shikai').innerText = character.shikai || "Ninguno";
                    document.getElementById('bankai').innerText = character.bankai || "Ninguno";
                    document.getElementById('poderes').innerText = character.poderes.trim();
                    document.getElementById('habilidades').innerText = character.habilidades.trim();
                    document.getElementById('nivel_de_poder').innerText = character.nivel_de_poder.trim();
                    document.getElementById('historia').innerText = character.historia.trim();
                    document.getElementById('personalidad').innerText = character.personalidad.trim();
                    document.getElementById('batallas').innerText = character.batallas || "No especificado";
            
                    // Cargar la imagen principal y la galería
                    const galeria = character.galeria ? JSON.parse(character.galeria) : [];
                    const mainImage = document.getElementById('main-image');
                    const galeriaContainer = document.getElementById('galeria');
            
                    if (galeria.length > 0) {
                        mainImage.src = galeria[0];
                        galeria.slice(1).forEach(imgUrl => {
                            const img = document.createElement('img');
                            img.src = imgUrl;
                            img.onclick = () => {
                                mainImage.classList.add("change-image");
                                setTimeout(() => {
                                    mainImage.src = imgUrl;
                                    mainImage.classList.remove("change-image");
                                }, 200);
                            };
                            galeriaContainer.appendChild(img);
                        });
                    }
            
                } catch (error) {
                    console.error('Error al obtener el personaje:', error);
                }
            }
            
            window.onload = fetchCharacterDetails;
            
                const img = document.createElement('img');
                img.src = imgUrl;
                img.onclick = () => { mainImage.src = imgUrl; };
                galeriaContainer.appendChild(img);
            });
        }

    } catch (error) {
        console.error('Error al obtener el personaje:', error);
    }
}

window.onload = fetchCharacterDetails;
