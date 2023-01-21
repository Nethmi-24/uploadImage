
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBBxz4jQs-2le0v4tNZ-BcZ1xvOYJXxxGI",
  authDomain: "upload-img-c8c74.firebaseapp.com",
  projectId: "upload-img-c8c74",
  storageBucket: "upload-img-c8c74.appspot.com",
  messagingSenderId: "890496393204",
  appId: "1:890496393204:web:dfb674a85a240cd6a463a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);