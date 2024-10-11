import { ToastContainer } from "react-toastify"; // used for auth notifications
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomePage from "@/pages/Home";
import DSAPage from "@/pages/DSA";
import PythonPage from "@/pages/Python";
import JavaScriptPage from "@/pages/JavaScript";
import ReactPage from "@/pages/React";

import LoginPage from "@/pages/Login";
import SignUpPage from "@/pages/SignUp";
import AddCardPage from "@/pages/AddCustomCard";
import CustomCardPage from "@/pages/ViewCustomCards";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import ErrorPage from "@/pages/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/dsa",
    element: <DSAPage />,
  },
  {
    path: "/py",
    element: <PythonPage />,
  },
  {
    path: "/js",
    element: <JavaScriptPage />,
  },
  {
    path: "/react",
    element: <ReactPage />,
  },
  {
    path: "/add-card",
    element: <AddCardPage />,
  },
  {
    path: "/view-custom-cards",
    element: <CustomCardPage />,
  },
  {
    path: "*", // Catch-all for unmatched routes (404)
    element: <ErrorPage />, 
  },
]);
function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={appRouter} />
      <ToastContainer position="bottom-right" />
    </ErrorBoundary>
  );
}

export default App;
