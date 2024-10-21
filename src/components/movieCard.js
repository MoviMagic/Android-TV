// Componente de tarjeta de película
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    img.alt = movie.title;

    const title = document.createElement('h3');
    title.textContent = movie.title;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener('click', () => {
        window.location.href = `../pages/movieDetails.html?tmdbId=${movie.tmdbId}`;
    });

    return card;
}
