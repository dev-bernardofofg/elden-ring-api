import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";
import { Toaster } from "./components/ui/toaster";
import { useDarkMode } from "./context/DarkModeContext";
import { ButtonDarkMode } from "./components/ButtonDarkMode";

export const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <main
        className={`w-full flex h-screen ${
          !darkMode ? "bg-stone-200" : "bg-stone-800"
        } ${darkMode ? "text-stone-100" : "text-stone-800"}`}
      >
        <Sidebar />
        <ButtonDarkMode />
        <section className="w-[calc(100%-8rem)] base:w-[calc(100%-4rem)] base:p-4 p-8">
          <Outlet />
          <Toaster />
        </section>
      </main>
    </>
  );
};
