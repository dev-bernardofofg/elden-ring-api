import { NavLink } from "react-router-dom";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";

import Logo from "../../assets/logo.webp";
import { AccordionSideBar } from "../AccordionSidebar";
import { useSidebar } from "@/context/SidebarContext";
import { useDarkMode } from "@/context/DarkModeContext";
import { SidebarButton } from "./button";
import { allOptions, sidebarOptions, standaloneOptions } from "@/constants";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        !isSidebarOpen ? "lg:w-32" : "lg:w-80"
      } bg-background-sidebar base:w-full flex flex-col justify-between items-center py-6 transition-all shadow-lg h-full`}
    >
      <div
        className={`flex flex-col ${
          isSidebarOpen ? "gap-4" : "gap-2"
        } items-center w-full overflow-y-hidden`}
      >
        <div className="mb-4">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo"
              className="size-16 filter drop-shadow-2xl"
            />
          </NavLink>
        </div>

        {isSidebarOpen ? (
          <div className="flex flex-col gap-4 px-4 w-full overflow-y-auto max-h-screen [&::-webkit-scrollbar]:hidden">
            {sidebarOptions.map((option) => (
              <AccordionSideBar
                key={option.name}
                title={option.name}
                icon={option.icon}
              >
                {option.options.map((option) => (
                  <SidebarButton
                    key={option.id}
                    to={option.to}
                    icon={option.icon}
                    name={option.name}
                    isSidebarOpen={isSidebarOpen}
                  />
                ))}
              </AccordionSideBar>
            ))}
            {standaloneOptions.map((option) => (
              <SidebarButton
                key={option.id}
                to={option.to}
                icon={option.icon}
                name={option.name}
                isSidebarOpen={isSidebarOpen}
              />
            ))}
          </div>
        ) : (
          allOptions.map((option) => (
            <SidebarButton
              key={option.id}
              to={option.to}
              icon={option.icon}
              name={option.name}
              isSidebarOpen={isSidebarOpen}
            />
          ))
        )}
      </div>
      <div
        className={`flex base:hidden md:block w-full px-8 ${
          isSidebarOpen ? "justify-end" : "justify-center"
        }`}
      >
        <button onClick={toggleSidebar} className="pt-4">
          {isSidebarOpen ? (
            <TbArrowBadgeLeftFilled
              size={28}
              color={!darkMode ? "black" : "white"}
            />
          ) : (
            <TbArrowBadgeRightFilled
              size={28}
              color={!darkMode ? "black" : "white"}
            />
          )}
        </button>
      </div>
    </div>
  );
};
