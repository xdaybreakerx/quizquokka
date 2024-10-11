import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'react-toastify';


/**
 * This function handles the registration process. It sets up state variables for email, password, error, and loading. It uses async/await to create a new user with the provided email and password. If successful, it logs a success message, displays a success toast, and redirects to the login page. If there is an error during registration, it logs the error, displays an error toast, and sets the error state. Finally, it updates the loading state accordingly. The function returns JSX elements for a registration form with email and password inputs, error message display, and a register button.
 * @author Xander
 *
 * @export
 * @returns {*} A function component used for user registration. It handles the registration process by creating a user account with the provided email and password. Displays a form for entering email and password, with error handling for registration failures. Allows users to navigate to the login page after successful registration.
 */
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    try {
      await createUser(email, password);
      console.log("User registered successfully!");
      toast.success("Account created successfully!");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.message);
      console.error("Registration failed:", err);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            onClick={handleRegister}
            className="w-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Register"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}


