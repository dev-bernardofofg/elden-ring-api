import { useDarkMode } from "@/context/DarkModeContext";
import { Button } from "../ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ButtonDarkMode = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button
      onClick={toggleDarkMode}
      className={`fixed right-5 top-5 ${!darkMode ? "bg-white" : "bg-black"}`}
    >
      {darkMode ? <MdDarkMode color="white" /> : <MdLightMode color="black"/>}
    </Button>
  );
};
