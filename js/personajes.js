async function fetchCharacters() {
    try {
        const response = await fetch('http://localhost:3000/api/characters');
        const characters = await response.json();

        if (!Array.isArray(characters) || characters.length === 0) {
            document.getElementById('character-list').innerHTML = '<p>No se encontraron personajes.</p>';
            return;
        }

        const characterList = document.getElementById('character-list');
        characterList.innerHTML = '';

        characters.forEach(character => {
            const galeria = character.galeria ? JSON.parse(character.galeria) : [];
            const imageUrl = galeria.length > 0 ? galeria[0] : 'https://via.placeholder.com/280x350?text=No+Image';

            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.onclick = () => {
                console.log(`Personaje clicado: ${character.id}`); // Debug para verificar el ID
                window.location.href = `personaje.html?id=${character.id}`;
            };

            characterCard.innerHTML = `
                <img src="${imageUrl}" alt="${character.nombre}">
                <div class="character-name">${character.nombre}</div>
            `;

            characterList.appendChild(characterCard);
        });
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
        document.getElementById('character-list').innerHTML = '<p>Hubo un error al cargar los personajes.</p>';
    }
}

window.onload = fetchCharacters;
