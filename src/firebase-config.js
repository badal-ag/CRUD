import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJaQLT0hMkezfwDCpFa3khKIKSd-Vq554",
    authDomain: "crud-bad.firebaseapp.com",
    projectId: "crud-bad",
    storageBucket: "crud-bad.appspot.com",
    messagingSenderId: "553347574281",
    appId: "1:553347574281:web:11c1ee82a5276042dae6d8",
    measurementId: "G-CC09P8B3YF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

