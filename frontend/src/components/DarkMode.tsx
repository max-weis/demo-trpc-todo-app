import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="transition-colors duration-300">
            <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
            >
                {darkMode
                    ? <Sun className="h-[1.2rem] w-[1.2rem]" />
                    : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
        </div>
    );
}
