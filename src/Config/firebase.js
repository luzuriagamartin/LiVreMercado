import firebase from "firebase";

// Configuración inicialización Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBNg5jOlohyAa49W3wi-x7CVW7cjL4B4Jg",
  authDomain: "livremercado-1d968.firebaseapp.com",
  projectId: "livremercado-1d968",
  storageBucket: "livremercado-1d968.appspot.com",
  messagingSenderId: "143228780527",
  appId: "1:143228780527:web:e6418f6dd7763fac73801a",
  measurementId: "G-3329S7VB5F",
};

// Inicialización Firebase
firebase.initializeApp(firebaseConfig);
//Inicializando el servicio de firestore (bd de Firebase).
firebase.db = firebase.firestore(); 
//Modulo de autenticación de firebase
firebase.auth = firebase.auth();
//exportamos el modulo de firebase.
export default firebase;
