import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";
import { Toaster } from "./components/ui/toaster";
import { ButtonDarkMode } from "./components/ButtonDarkMode";
import { DrawerMenu } from "./components/DrawerMenu";
import { useDarkMode } from "./context/DarkModeContext";

export const App = () => {
  const { darkMode } = useDarkMode()
  return (
    <main className={`w-full h-screen flex h-100% bg-background-medium-foreground text-text-primary ${darkMode ? "dark" : "white"}`}>
      <aside className="base:hidden md:block">
        <Sidebar />
      </aside>
      <aside className="base:block md:hidden fixed right-0 top-2 ">
        <DrawerMenu />
      </aside>
      <ButtonDarkMode />
      <section className="md:w-[calc(100%-8rem)] base:w-[100%]">
        <Outlet />
        <Toaster />
      </section>
    </main>
  );
};
