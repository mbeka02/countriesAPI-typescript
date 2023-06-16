import { createContext, useState, useEffect } from "react";

//type Themes='light'|'dark'
export type ContextType = {
  darkMode: boolean;
  toggleMode: () => void;
};

type Props = {
  children: React.ReactNode;
};
const ThemeContext = createContext<ContextType | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isDark");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
