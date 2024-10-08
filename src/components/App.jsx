import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomePage from "@/pages/Home";
import DSAPage from "@/pages/DSA";
import PythonPage from "@/pages/Python";
import JavaScriptPage from "@/pages/JavaScript";
import ReactPage from "@/pages/React";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
