import { createContext, useContext, useEffect, useState } from "react";

// Define the ThemeProvider context and state
const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => null,
});


/**
 * A function that sets the theme for the application based on the user's preference or a default theme. It initializes the theme state, applies the theme classes to the root element, handles the 'system' theme, and allows users to set and save the theme to localStorage. It returns a ThemeProviderContext.Provider component with the provided children and theme value.
 * @author Xander
 *
 * @export
 * @param {{ [x: string]: any; children: any; defaultTheme?: string; storageKey?: string; }} param0 An object containing the following parameters: children, defaultTheme, storageKey, and props.
 * @param {*} param0.children The children elements to be wrapped by the ThemeProvider.
 * @param {string} [param0.defaultTheme="system"] The default theme to be used if no theme is found in localStorage.
 * @param {string} [param0.storageKey="vite-ui-theme"] The key used to store the theme in localStorage.
 * @param {{ [x: string]: any; }} param0....props Additional props passed to the ThemeProvider.
 * @returns {*} A component that provides theming functionality to its children by managing the theme state based on localStorage or a default theme, applying the selected theme to the root element, and allowing users to change the theme and save it to localStorage.
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  // Initialize the theme state based on localStorage or defaultTheme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Handle the "system" theme or apply the selected theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Set theme and save it to localStorage
  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
