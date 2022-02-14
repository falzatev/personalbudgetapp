import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCa30LY8sNlTG0jU94LZUpO7xT1Qjo4iLI",
    authDomain: "budget-app-react-e31be.firebaseapp.com",
    projectId: "budget-app-react-e31be",
    storageBucket: "budget-app-react-e31be.appspot.com",
    messagingSenderId: "558397796167",
    appId: "1:558397796167:web:e2a890af38d290d0c1a662",
    measurementId: "G-HLLKFY96JH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);
  const db = getFirestore(app);

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
  
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const saveIncome = (description, value, email, date) => {
  set(ref(db, 'incomes/'), {
    description : description,
    value : value,
    username: email,
    date: date
  });
}

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  saveIncome
};
  