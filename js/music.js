document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("spotify-frame");
    const playlistButtons = document.querySelectorAll(".playlist-btn");
    const bars = document.querySelectorAll(".bar");

    if (!iframe) {
        console.error("El iframe de Spotify no se encontró en el DOM.");
        return;
    }

    // Playlists de Spotify
    const playlists = {
        "opening": "https://open.spotify.com/embed/playlist/3vXMd20I5cMGouBv3Lz0bJ",
        "soundtrack": "https://open.spotify.com/embed/album/7Bm7S7pnSetysRgACOpWtD",
        "epic": "https://open.spotify.com/embed/playlist/6hDZXv3vIcJz5W6KfQo58F"
    };

    // Cambia la playlist según el botón presionado
    playlistButtons.forEach(button => {
        button.addEventListener("click", () => {
            const playlistType = button.getAttribute("data-playlist");
            if (playlists[playlistType]) {
                iframe.src = playlists[playlistType];
            } else {
                console.error("No se encontró la URL de la playlist:", playlistType);
            }
        });
    });

    // Simulación de visualizador de audio
    function randomizeBars() {
        bars.forEach(bar => {
            bar.style.height = `${Math.floor(Math.random() * 70) + 30}px`;
        });
    }
    setInterval(randomizeBars, 500);
});
