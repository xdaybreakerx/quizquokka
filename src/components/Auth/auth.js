import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
}
  from "firebase/auth";
import { auth } from "@/firebase";

/**
 * Asynchronously creates a new user account with the provided email and password. If successful, returns the user credentials. If an error occurs during the creation process, logs the error and throws it.
 * @author Xander
 *
 * @async
 * @param {*} email The email of the user
 * @param {*} password The password of the user
 * @returns {unknown} Asynchronous function that creates a new user with the provided email and password. Returns the user object if successful, otherwise throws an error with details of the error encountered.
 */
export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

/**
 * Asynchronously signs in a user with the provided email and password. If successful, returns the user credential. If an error occurs during the sign-in process, logs the error and throws it.
 * @author Xander
 *
 * @async
 * @param {*} email The email of the user
 * @param {*} password The password of the user
 * @returns {unknown} An asynchronous function that signs in a user with the provided email and password. It returns the user information upon successful sign-in, and throws an error with the detailed message if sign-in fails.
 */
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in user:", error);
    throw error;
  }
};


/**
 * Asynchronous function that signs in a user with Google authentication provider using a popup. It returns the signed-in user if successful, otherwise logs an error and rethrows the error.
 * @author Xander
 *
 * @async
 * @returns {unknown} Asynchronous function that signs in a user using Google authentication provider. Returns the user object upon successful sign in. Throws an error if sign in fails.
 */
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


/**
 * Async function that signs out the authenticated user. If the sign out is successful, the function completes without returning anything. If an error occurs during sign out, the function logs the error and throws it.
 * @author Xander
 *
 * @async
 * @returns {*} A function that asynchronously signs out the user.Authentication is required for signing out. Throws an error if there is an issue during the sign out process.
 */
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out user:", error);
    throw error;
  }
};

