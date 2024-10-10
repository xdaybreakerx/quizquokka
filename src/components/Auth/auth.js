import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
}
  from "firebase/auth";
import { auth } from "@/firebase";

// Create a new user
export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Sign in an existing user
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in user:", error);
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

// Sign out the current user
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out user:", error);
    throw error;
  }
};

