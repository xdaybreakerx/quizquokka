import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

/**
 * A function that represents the layout component for the application. It renders a structure containing navigation, main content, and footer components with specific styling and class names.
 * @author Xander
 *
 * @export
 * @param {{ children: any; }} param0 The Layout function takes an object as a parameter
 * @param {*} param0.children The children of the layout component
 * @returns {*} A layout component that renders children within a flex container with a navigation, main content area, and footer.
 */
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-svh mx-auto bg-background text-foreground" id="layout">
      <Navigation />
      <main className="flex-grow p-4 max-w-80ch" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
