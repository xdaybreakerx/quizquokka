import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { toast } from "react-toastify";

// Define the question topics navigation items in an array
const questionTopics = [
  {
    title: "Data Structures & Algorithms",
    href: "/dsa",
    description: "Explore DSA concepts",
  },
  {
    title: "Python",
    href: "/py",
    description: "Learn Python basics and advanced topics",
  },
  {
    title: "JavaScript",
    href: "/js",
    description: "Dive into JavaScript",
  },
  {
    title: "React",
    href: "/react",
    description: "Master React",
  },
];

export default function Navigation() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      toast.success("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Error signing out!");
    }
  };

  return (
    <nav className="flex justify-end p-8">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home Navigation Item */}
          <NavigationMenuItem>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuItem>

          {/* Dropdown for Question Topics */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Question Topics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                {questionTopics.map((topic) => (
                  <ListItem
                    key={topic.title}
                    title={topic.title}
                    href={topic.href}
                  >
                    {topic.description}
                  </ListItem>
                ))}
                {/* Conditional rendering for custom flashcard links under Question Topics */}
                {user && (
                  <>
                    <ListItem
                      title="Add Custom Flash Cards"
                      href="/add-card"
                      description="Add your own custom flashcards."
                    />
                    <ListItem
                      title="View Custom Flash Cards"
                      href="/view-custom-cards"
                      description="View your custom flashcards."
                    />
                  </>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Conditional rending for Login/Sign Out Item */}
          <NavigationMenuItem>
            {user ? (
              <button
                onClick={handleSignOut}
                className={navigationMenuTriggerStyle()}
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login" className={navigationMenuTriggerStyle()}>
                Login
              </Link>
            )}
          </NavigationMenuItem>

          {/* Theme Toggle */}
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// ListItem Component
const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
