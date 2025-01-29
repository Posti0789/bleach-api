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
