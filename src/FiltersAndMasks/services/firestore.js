import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYmpB8Tk215Y9ADCG2tFHP9ASJn5UF1SM",
    authDomain: "filters-with-masks.firebaseapp.com",
    projectId: "filters-with-masks",
    storageBucket: "filters-with-masks.appspot.com",
    messagingSenderId: "394855427850",
    appId: "1:394855427850:web:d15da85aa31bfc4f4a54f3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
