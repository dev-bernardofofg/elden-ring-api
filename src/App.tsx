import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <>
      <main className="w-full flex h-screen bg-yellow-800 text-stone-100">
        <Sidebar />
        <section className="w-[calc(100%-8rem)] p-8">
          <Outlet />
        </section>
      </main>
    </>
  );
};
