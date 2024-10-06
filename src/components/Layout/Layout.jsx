// styling
import "./Layout.css"

// components
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
