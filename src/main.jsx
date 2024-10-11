import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { ThemeProvider } from "./contexts/ThemeContextProvider.jsx";
import { AuthContextProvider } from "./contexts/AuthContextProvider.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
