// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp ({
  apiKey: "AIzaSyBqZGzkfc1uU0QrZzWJYj6HMyaY2Bbit0c",
  authDomain: "ecommerce-7af2f.firebaseapp.com",
  projectId: "ecommerce-7af2f",
  storageBucket: "ecommerce-7af2f.appspot.com",
  messagingSenderId: "216092041619",
  appId: "1:216092041619:web:20260b4d603ef5ad080866",
  measurementId: "G-7QN7KHP1KE"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;