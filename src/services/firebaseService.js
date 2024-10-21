// Funciones para interactuar con Firebase Firestore
const db = firebase.firestore();

async function fetchMovies() {
    try {
        const moviesCollection = await db.collection('movies').get();
        return moviesCollection.docs.map(doc => doc.data());
    } catch (error) {
        console.error('Error al obtener películas:', error);
    }
}

async function fetchSeries() {
    try {
        const seriesCollection = await db.collection('series').get();
        return seriesCollection.docs.map(doc => doc.data());
    } catch (error) {
        console.error('Error al obtener series:', error);
    }
}

async function fetchChannels() {
    try {
        const channelsCollection = await db.collection('channels').get();
        return channelsCollection.docs.map(doc => doc.data());
    } catch (error) {
        console.error('Error al obtener canales:', error);
    }
}

async function fetchCourses() {
    try {
        const coursesCollection = await db.collection('cursos').get();
        return coursesCollection.docs.map(doc => doc.data());
    } catch (error) {
        console.error('Error al obtener cursos:', error);
    }
}

async function fetchCourseDetails(courseId) {
    try {
        const courseDoc = await db.collection('cursos').doc(courseId).get();
        if (courseDoc.exists) {
            return courseDoc.data();
        } else {
            throw new Error('Curso no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener detalles del curso:', error);
    }
}
