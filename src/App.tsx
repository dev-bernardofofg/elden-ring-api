import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";
import { Toaster } from "./components/ui/toaster";
import { useDarkMode } from "./context/DarkModeContext";
import { ButtonDarkMode } from "./components/ButtonDarkMode";
import { DrawerMenu } from "./components/DrawerMenu";

export const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <main
        className={`w-full h-screen flex h-100% ${
          !darkMode ? "bg-stone-200" : "bg-stone-800"
        } ${darkMode ? "text-stone-100" : "text-stone-800"}`}
      >
        <aside className="base:hidden md:block">
          <Sidebar />
        </aside>
        <aside className="base:block md:hidden fixed right-0 top-2 ">
          <DrawerMenu />
        </aside>
        <ButtonDarkMode />
        <section className="md:w-[calc(100%-8rem)] base:w-[100%] base:p-2 md:p-8">
          <Outlet />
          <Toaster />
        </section>
      </main>
    </>
  );
};
