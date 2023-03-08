// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGVuXaPpCagN8Lf-syiikNqKVfF7nfcg",
  authDomain: "fir-auth-2bc8f.firebaseapp.com",
  projectId: "fir-auth-2bc8f",
  storageBucket: "fir-auth-2bc8f.appspot.com",
  messagingSenderId: "292679915732",
  appId: "1:292679915732:web:8cdc97b7581d60b93f4341"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

