import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnLHp0V1dlpqQ9qvUTR0DIAqtQEQUb7rk",
  authDomain: "worldtrade-a715b.firebaseapp.com",
  projectId: "worldtrade-a715b",
  storageBucket: "worldtrade-a715b.firebasestorage.app",
  messagingSenderId: "119587327537",
  appId: "1:119587327537:web:7085148be89984762e0f10",
  measurementId: "G-MFRHN6WWQ2",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app); // Para analytics más adelante

export { app, auth, firestore };
