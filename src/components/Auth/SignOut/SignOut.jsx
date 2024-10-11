import { signOutUser } from "../auth";

/**
 * A function that handles the sign-out functionality for a user. It calls the signOutUser function asynchronously and logs a success message if the sign out is successful. If there is an error during the sign-out process, it logs the error message.
 * @author Xander
 *
 * @export
 * @returns {*} A function that signs out the user when a button is clicked. It calls the signOutUser function asynchronously and logs a success message if the sign out is successful. It also logs an error message if there is an error during the sign out process.
 */
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
