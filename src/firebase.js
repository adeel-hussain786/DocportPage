import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication

const firebaseConfig = {
  apiKey: "AIzaSyCIbKmEjq3xGRKWN9prUJMB0efnYo8Be2c",
  authDomain: "landlingpage.firebaseapp.com",
  projectId: "landlingpage",
  storageBucket: "landlingpage.appspot.com",
  messagingSenderId: "891891409437",
  appId: "1:891891409437:web:b26391922a8fd2b2921cf4",
  measurementId: "G-CVXYMLQC95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
