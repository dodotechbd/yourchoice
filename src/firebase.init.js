// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkx2GuvJ2AKFoap5PqkUvQJr6JRWxVK1U",
  authDomain: "yourchoice-aca0a.firebaseapp.com",
  projectId: "yourchoice-aca0a",
  storageBucket: "yourchoice-aca0a.appspot.com",
  messagingSenderId: "538355744817",
  appId: "1:538355744817:web:023541ca48b56d30b39510",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
