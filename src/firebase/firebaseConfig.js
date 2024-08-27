// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa getFirestore para trabajar con Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_QuCykwUFk6NQZgp4K1VevEyvZ42ZyVk",
  authDomain: "vapehouse-7e0b5.firebaseapp.com",
  projectId: "vapehouse-7e0b5",
  storageBucket: "vapehouse-7e0b5.appspot.com",
  messagingSenderId: "656831928573",
  appId: "1:656831928573:web:78367a2330c4cc066c4694",
  measurementId: "G-1RG5SCRFQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Mantén esta línea si usas Analytics

// Initialize Firestore and export it
const db = getFirestore(app); // Inicializa Firestore

// Exporta `db` para usarlo en otros archivos
export { db };
