
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAWADQVCZFDaNBmGo9lXPrxYptUJ0-yZmw",
  authDomain: "netflix-clone-98780.firebaseapp.com",
  projectId: "netflix-clone-98780",
  storageBucket: "netflix-clone-98780.appspot.com",
  messagingSenderId: "555012234339",
  appId: "1:555012234339:web:fcea3462d205a81a866c56",
  
  
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc (collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(""))
  }
}

const login = async(email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(""))
  }
}

const logout=()=>{
    signOut(auth)
}

export {auth, db, login, signup, logout};
