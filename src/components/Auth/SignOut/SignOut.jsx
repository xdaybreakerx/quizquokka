// src/components/auth/SignOut.js
import { signOutUser } from "../auth";

export default function SignOut() {
  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}
