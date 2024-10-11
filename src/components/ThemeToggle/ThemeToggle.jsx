
import { Button } from "@/components/ui/button";

import { SunIcon, MoonIcon} from "@radix-ui/react-icons"

import { useTheme } from "@/contexts/ThemeContextProvider";


/**
 * Function that renders a theme toggle button to switch between light and dark themes.
 * @author Xander
 *
 * @export
 * @returns {*} Function that toggles the theme between light and dark mode when called
 */
export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
  
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunIcon className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <MoonIcon className="hidden h-5 w-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }