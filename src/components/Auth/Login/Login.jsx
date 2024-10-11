import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { signInUser, signInWithGoogle } from "../auth";
import { toast } from "react-toastify";


/**
 * A functional component for rendering a login form with email and password fields, and options to login using email/password or Google account. It handles the form submission, error handling, loading state, and navigation after successful login. Includes methods for handling regular login and Google sign-in. Utilizes useState for managing email, password, error, and loading state, as well as react-router's useNavigate for navigation. The UI components include Card, CardHeader, CardTitle, CardDescription, CardContent, Label, Input, Link, Button, and Link for user interaction. Supports redirection to homepage after successful login or Google sign-in.
 * @author Xander
 *
 * @export
 * @returns {*} A function component for rendering a login form with email and password fields, login and Google sign-in buttons. Includes handling login and Google sign-in operations, displaying error messages, and redirecting users after successful login or sign-in.
 */
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInUser(email, password);
      console.log("User logged in successfully!");
      toast.success("Logged In successfully!");
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      setError(err.message);
      console.error("Login failed:", err);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInWithGoogle();
      console.log("User signed in with Google!");
      navigate("/"); // Redirect to homepage after successful Google sign-in
    } catch (err) {
      setError(err.message);
      console.error("Google sign-in failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
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
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button onClick={handleLogin} className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing in with Google..." : "Login with Google"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
