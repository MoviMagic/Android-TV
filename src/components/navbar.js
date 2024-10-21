// Navbar para navegación general
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
    window.location.href = `../src/pages/${page}`;
}
