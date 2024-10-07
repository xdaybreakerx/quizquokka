// components
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-svh mx-auto" id="layout">
      <Navigation />
      <main
        className="flex-grow p-4 max-w-80ch"
        id="main-content"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
