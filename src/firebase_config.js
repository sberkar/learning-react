import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCrcK_dUO2MWMuCQx8qpOb_ukccBBJj-K4",
  authDomain: "bcool-blog.firebaseapp.com",
  projectId: "bcool-blog",
  storageBucket: "bcool-blog.appspot.com",
  messagingSenderId: "830704070812",
  appId: "1:830704070812:web:a300937ed8c00c04143d59",
  measurementId: "G-DSJ03FE61M"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()