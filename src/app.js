// Configuración e inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    createNavbar(); // Crear la barra de navegación en todas las páginas
    setupRemoteNavigation(); // Configurar navegación con control remoto para Android TV
    loadContentBasedOnPage(); // Cargar contenido dinámico según la página actual
});

// Funciones para la navegación y carga de contenido
function loadContentBasedOnPage() {
    const page = window.location.pathname.split('/').pop();
    switch (page) {
        case 'movies.html':
            loadMovies();
            break;
        case 'series.html':
            loadSeries();
            break;
        case 'channels.html':
            loadChannels();
            break;
        case 'courses.html':
            loadCourses();
            break;
        default:
            console.log('Página desconocida o inicio sin contenido específico.');
            break;
    }
}

// Funciones para cargar contenido específico en cada sección
async function loadMovies() {
    const movies = await fetchMovies();
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(async (movie) => {
        const details = await getMovieDetails(movie.tmdbId);
        const card = createMovieCard(details);
        movieList.appendChild(card);
    });
}

async function loadSeries() {
    const seriesList = await fetchSeries();
    const seriesContainer = document.getElementById('series-list');
    seriesContainer.innerHTML = '';

    seriesList.forEach(async (series) => {
        const details = await getSeriesDetails(series.tmdbId);
        const card = createSeriesCard(details);
        seriesContainer.appendChild(card);
    });
}

async function loadChannels() {
    const channels = await fetchChannels();
    const channelContainer = document.getElementById('channel-list');
    channelContainer.innerHTML = '';

    channels.forEach((channel) => {
        const card = createChannelCard(channel);
        channelContainer.appendChild(card);
    });
}

async function loadCourses() {
    const courses = await fetchCourses();
    const courseContainer = document.getElementById('course-list');
    courseContainer.innerHTML = '';

    courses.forEach((course) => {
        const card = createCourseCard(course);
        courseContainer.appendChild(card);
    });
}

// Navegación basada en teclas de control remoto
function setupRemoteNavigation() {
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                navigateUp();
                break;
            case 'ArrowDown':
                navigateDown();
                break;
            case 'ArrowLeft':
                navigateLeft();
                break;
            case 'ArrowRight':
                navigateRight();
                break;
            case 'Enter':
                selectItem();
                break;
        }
    });
}

// Lógica para navegación y selección específica
let focusedElementIndex = 0;
let focusedElements = [];

function updateFocusedElements() {
    focusedElements = document.querySelectorAll('.movie-card, .series-card, .channel-card, .course-card');
}

function navigateUp() {
    if (focusedElementIndex > 0) {
        focusedElementIndex -= 1;
        focusCurrentElement();
    }
}

function navigateDown() {
    if (focusedElementIndex < focusedElements.length - 1) {
        focusedElementIndex += 1;
        focusCurrentElement();
    }
}

function navigateLeft() {
    // Implementar lógica de navegación izquierda si es necesario para diseño horizontal
    console.log('Navegar izquierda');
}

function navigateRight() {
    // Implementar lógica de navegación derecha si es necesario para diseño horizontal
    console.log('Navegar derecha');
}

function selectItem() {
    const currentElement = focusedElements[focusedElementIndex];
    if (currentElement) {
        currentElement.click(); // Simula un clic en el elemento seleccionado
    }
}

function focusCurrentElement() {
    updateFocusedElements();
    focusedElements.forEach((element, index) => {
        if (index === focusedElementIndex) {
            element.classList.add('focused');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            element.classList.remove('focused');
        }
    });
}

// Configurar la barra de navegación en todas las páginas
function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const logo = document.createElement('img');
    logo.src = '../assets/logo.png';
    logo.alt = 'Moviplay TV Logo';
    navbar.appendChild(logo);

    const menuItems = [
        { name: 'Películas', page: 'movies.html' },
        { name: 'Series', page: 'series.html' },
        { name: 'Canales Libres', page: 'channels.html' },
        { name: 'Cursos', page: 'courses.html' }
    ];

    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.name;
        button.classList.add('navbar-item');
        button.onclick = () => navigateToPage(item.page);
        navbar.appendChild(button);
    });

    document.body.insertBefore(navbar, document.body.firstChild);
}

function navigateToPage(page) {
    window.location.href = `../pages/${page}`;
}

// Ejemplo de actualización dinámica de contenido en el DOM
function updatePageTitle(title) {
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.textContent = title;
    }
}
