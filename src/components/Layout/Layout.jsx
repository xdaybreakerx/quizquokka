// components
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

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
