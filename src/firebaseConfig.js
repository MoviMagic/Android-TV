// Inicialización de Firebase (después de cargar los scripts de Firebase desde el CDN)
const firebaseConfig = {
    apiKey: "AIzaSyDhPRVu8n_pZQzJPVWNFlJonmj5KEYsF10",
    authDomain: "movimagic.firebaseapp.com",
    projectId: "movimagic",
    storageBucket: "movimagic.appspot.com",
    messagingSenderId: "518388279864",
    appId: "1:518388279864:web:a6f699391ec5bb627c14cd",
    measurementId: "G-GG65HJV2T6"
};

// Asegúrate de que Firebase esté correctamente importado antes de esta línea
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
