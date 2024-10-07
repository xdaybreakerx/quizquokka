// module imports
import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Define the navigation items in an array
const navigationItems = [
  {
    title: "Home",
    href: "/",
    description: "Back to home page",
  },
];

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
  return (
    <nav className="flex justify-end">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Render the "Home" navigation item */}
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link to={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}

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
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// ListItem Component
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
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
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
