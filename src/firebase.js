// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDB5E5_nfKe0zzpHbPvM2Xe5xl-RUNXA_0",
  authDomain: "j69-52ddf.firebaseapp.com",
  projectId: "j69-52ddf",
  storageBucket: "j69-52ddf.appspot.com",
  messagingSenderId: "982445970054",
  appId: "1:982445970054:web:9dc1713a0e43d3a963f707",
  measurementId: "G-GQKWQQMDCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();