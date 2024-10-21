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

// Función para mostrar contenido según la sección seleccionada
function showSection(section) {
    switch (section) {
        case 'movies':
            fetchContentFromFirestore("movies");
            break;
        case 'series':
            fetchContentFromFirestore("series");
            break;
        case 'channels':
            fetchContentFromFirestore("channels");
            break;
        case 'courses':
            fetchContentFromFirestore("courses");
            break;
        default:
            console.error("Sección no encontrada");
    }
}

// Función para obtener contenido de Firestore
async function fetchContentFromFirestore(collection) {
    const contentCollection = await db.collection(collection).orderBy("addedDate", "desc").get();
    const content = [];
    contentCollection.forEach(doc => {
        const data = doc.data();
        content.push(data);
    });

    // Mostrar el contenido en la pantalla (puedes agregar una función de navegación a la pantalla de contenido específica)
    console.log(content);
}
