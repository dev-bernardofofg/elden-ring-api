import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: ChildrenProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem("dark-mode");
    return storedMode === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
