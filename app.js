// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDhPRVu8n_pZQzJPVWNFlJonmj5KEYsF10",
    authDomain: "movimagic.firebaseapp.com",
    projectId: "movimagic",
    storageBucket: "movimagic.appspot.com",
    messagingSenderId: "518388279864",
    appId: "1:518388279864:web:a6f699391ec5bb627c14cd",
    measurementId: "G-GG65HJV2T6"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Configuración de la API de TMDB
const tmdbApiKey = "your_tmdb_api_key";

// Función para obtener películas de Firestore
async function fetchMoviesFromFirestore() {
    const moviesCollection = await db.collection("movies").orderBy("addedDate", "desc").get();
    const movies = [];
    moviesCollection.forEach(doc => {
        const movieData = doc.data();
        movies.push(movieData);
    });

    // Obtener detalles adicionales de TMDB
    const moviesWithDetails = await fetchDetailsFromTMDB(movies);
    displayMovies(moviesWithDetails);
}

// Función para obtener detalles de las películas desde TMDB
async function fetchDetailsFromTMDB(movies) {
    const movieDetailsPromises = movies.map(async movie => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${e2d31252cf13c4b7ed0d01438486958f}`);
            const tmdbData = await response.json();
            return {
                ...movie,
                poster_path: tmdbData.poster_path,
                overview: tmdbData.overview,
                rating: tmdbData.vote_average,
                releaseDate: tmdbData.release_date
            };
        } catch (error) {
            console.error(`Error fetching details for ${movie.title}:`, error);
            return movie; // Retornar la película sin detalles adicionales si hay un error
        }
    });

    return Promise.all(movieDetailsPromises);
}

// Función para mostrar las películas
function displayMovies(movies) {
    const contentDisplay = document.getElementById("content-display");
    contentDisplay.innerHTML = ""; 
    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie-card";
        movieDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Calificación: ${movie.rating}/10</p>
            <p>Lanzamiento: ${movie.releaseDate}</p>
            <p>Categorías: ${movie.categories.join(", ")}</p>
            <a href="${movie.videoUrl}" target="_blank">Ver Película</a>
        `;
        contentDisplay.appendChild(movieDiv);
    });
}

// Llamar a la función para obtener películas al cargar la página
fetchMoviesFromFirestore();
