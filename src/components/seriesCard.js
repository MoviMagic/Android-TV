// Componente de tarjeta de serie
function createSeriesCard(series) {
    const card = document.createElement('div');
    card.classList.add('series-card');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${series.poster_path}`;
    img.alt = series.name;

    const title = document.createElement('h3');
    title.textContent = series.name;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener('click', () => {
        window.location.href = `../pages/seriesDetails.html?tmdbId=${series.tmdbId}`;
    });

    return card;
}
