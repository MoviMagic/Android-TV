// Servicios para interactuar con la API de TMDB
const apiKey = 'e2d31252cf13c4b7ed0d01438486958f';
const baseUrl = 'https://api.themoviedb.org/3';

async function getMovieDetails(tmdbId) {
    try {
        const response = await fetch(`${baseUrl}/movie/${tmdbId}?api_key=${apiKey}&language=es`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
    }
}

async function getSeriesDetails(tmdbId) {
    try {
        const response = await fetch(`${baseUrl}/tv/${tmdbId}?api_key=${apiKey}&language=es`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener detalles de la serie:', error);
    }
}
