import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuhthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuhthentication;