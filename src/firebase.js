import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7bgLV9ro-cxDu2-k1kXrnSH2J4ri_NfY",
  authDomain: "chats-login-ea1ee.firebaseapp.com",
  projectId: "chats-login-ea1ee",
  storageBucket: "chats-login-ea1ee.appspot.com",
  messagingSenderId: "274379573205",
  appId: "1:274379573205:web:a5e8159e6f94364e501f5c"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
