import { useDarkMode } from "@/context/DarkModeContext";
import { Button } from "../ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ButtonDarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button
      onClick={toggleDarkMode}
      className={`fixed right-5 lg:top-5 base:bottom-10 ${!darkMode ? "bg-stone-100 hover:bg-stone-100" : "bg-stone-700 hover:bg-stone-700"}`}
    >
      {darkMode ? <MdDarkMode color="white" /> : <MdLightMode color="black"/>}
    </Button>
  );
};
