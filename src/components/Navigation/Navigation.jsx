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


/**
 * An array containing objects with properties representing different question topics. Each object has the following properties:
 * - title: The title of the question topic.
 * - href: The URL path to access more information about the question topic.
 * - description: A short description of the question topic to provide an overview.
 * @author Xander
 *
 * @type {{}}
 */
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


/**
 * This is a function component for the Navigation menu in the application. It includes state management for the current user, an effect hook to handle user authentication changes, and a function to sign the user out. The component renders a navigation menu with various navigation items such as Home, Question Topics with a dropdown, Login/Sign Out option based on the user's authentication status, and a Theme Toggle option.
 * @author Xander
 *
 * @export
 * @returns {*} A functional component for navigation that includes a menu with various navigation items such as Home, Question Topics with dropdown, Login/Sign Out option, and Theme Toggle. It also handles user authentication and sign out functionality.
 */
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


/**
 * A functional component that renders a list item with a link. It accepts props such as className, title, children, href, and additional props. It uses React.forwardRef to pass a ref to the underlying link element. The component renders an 'li' element containing a Link component with specified props and children elements.
 * @author Xander
 *
 * @type {*}
 */
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
