// src/firebase/config.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
const auth = getAuth(app);
const firestore = getFirestore(app);

// Key for storing auth state
const AUTH_STATE_KEY = "@WorldTradeAuth:state";

// Listen for auth state changes and store in AsyncStorage
onAuthStateChanged(auth, async (user) => {
  if (user) {
    try {
      // Store minimal user data
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };

      await AsyncStorage.setItem(AUTH_STATE_KEY, JSON.stringify(userData));
      console.log("Auth state saved to AsyncStorage");
    } catch (error) {
      console.error("Error saving auth state:", error);
    }
  } else {
    // User signed out, remove data
    try {
      await AsyncStorage.removeItem(AUTH_STATE_KEY);
      console.log("Auth state removed from AsyncStorage");
    } catch (error) {
      console.error("Error removing auth state:", error);
    }
  }
});

// Function to restore auth state on app startup
export const restoreAuthState = async () => {
  try {
    const authStateData = await AsyncStorage.getItem(AUTH_STATE_KEY);

    if (authStateData) {
      console.log("Found saved auth state, restoring...");
      // You would typically use a custom token or other auth method here
      // This is a simple implementation - in a real app, you'd handle token refresh etc.
      return JSON.parse(authStateData);
    }
    return null;
  } catch (error) {
    console.error("Error restoring auth state:", error);
    return null;
  }
};

export { app, auth, firestore };
