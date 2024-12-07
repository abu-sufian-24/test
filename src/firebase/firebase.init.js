// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMDMkwbdk03rtuvWwafa77pe1U1E6IZRw',
  authDomain: 'project-firebase-a2552.firebaseapp.com',
  projectId: 'project-firebase-a2552',
  storageBucket: 'project-firebase-a2552.firebasestorage.app',
  messagingSenderId: '473107518571',
  appId: '1:473107518571:web:eda721b61915fc699c8d2e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
