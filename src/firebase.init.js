// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAAgiTAqs6DiG2kE0Z0hg4ni93AbySXrMw",
	authDomain: "genius-car-services-be72a.firebaseapp.com",
	projectId: "genius-car-services-be72a",
	storageBucket: "genius-car-services-be72a.appspot.com",
	messagingSenderId: "342902594389",
	appId: "1:342902594389:web:0b29d35702e5edf51f6ddc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
