// Firebase Configuration (v9/v10 Compat API via CDN)
const firebaseConfig = {
    apiKey: "AIzaSyDXG4-y6Nirbiexn02Bz1wnU-r6nXop5cg",
    authDomain: "banglebelle.firebaseapp.com",
    projectId: "banglebelle",
    storageBucket: "banglebelle.firebasestorage.app",
    messagingSenderId: "1038646232420",
    appId: "1:1038646232420:web:1d8471402fe8631c1d6671",
    measurementId: "G-4N0E23572N"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
