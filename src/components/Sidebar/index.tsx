import {
  GiAmmoBox,
  GiChestArmor,
  GiFeatherWound,
  GiFishMonster,
  GiSeaCreature,
  GiSparkSpirit,
  GiSwapBag,
} from "react-icons/gi";
import Logo from "../../assets/logo.webp";
import { Button } from "../ui/button";
import { LuShield, LuSword } from "react-icons/lu";
import { SiNodemon } from "react-icons/si";
import { MdClass } from "react-icons/md";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { FaBoxOpen, FaCentos } from "react-icons/fa";
import {
  FaLocationDot,
  FaWandMagic,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";
import { useSidebar } from "@/context/SidebarContext";
import { AccordionSideBar } from "../AccordionSidebar";
import { useDarkMode } from "@/context/DarkModeContext";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const location = useLocation();
  const { darkMode } = useDarkMode();

  const optionsEquipments = [
    {
      name: "Equipamentos",
      options: [
        {
          id: 1,
          icon: <GiAmmoBox />,
          to: "/ammos",
          name: "Munição",
        },
        {
          id: 2,
          icon: <GiChestArmor />,
          to: "/armor",
          name: "Armadura",
        },
        {
          id: 11,
          icon: <LuShield />,
          to: "/shield",
          name: "Escudos",
        },
        {
          id: 15,
          icon: <LuSword />,
          to: "/weapon",
          name: "Armas",
        },
      ],
    },
  ];

  const optionsInfoBosses = [
    {
      name: "Info Boss",
      options: [
        {
          id: 3,
          icon: <GiFeatherWound />,
          to: "/ashes",
          name: "Cinzas",
        },
        {
          id: 4,
          icon: <SiNodemon />,
          to: "/bosses",
          name: "Bosses",
        },
        {
          id: 6,
          icon: <GiFishMonster />,
          to: "/creatures",
          name: "Criaturas",
        },
        {
          id: 9,
          icon: <FaLocationDot />,
          to: "/location",
          name: "Localizações",
        },
      ],
    },
  ];

  const optionsFaithMagic = [
    {
      name: "Fé / Mágia",
      options: [
        {
          id: 7,
          icon: <PiArrowsInCardinalBold />,
          to: "/incantation",
          name: "Encantamentos",
        },
        {
          id: 12,
          icon: <FaWandMagicSparkles />,
          to: "/sorcerer",
          name: "Magias",
        },
        {
          id: 13,
          icon: <GiSparkSpirit />,
          to: "/spirit",
          name: "Espiritos",
        },

        {
          id: 14,
          icon: <FaCentos />,
          to: "/talismans",
          name: "Talismãs",
        },
      ],
    },
  ];

  const options = [
    {
      id: 5,
      icon: <MdClass />,
      to: "/classes",
      name: "Classes",
    },

    {
      id: 8,
      icon: <FaBoxOpen />,
      to: "/items",
      name: "Items",
    },

    {
      id: 10,
      icon: <RiUserLocationFill />,
      to: "/npc",
      name: "NPCs",
    },
  ];

  const optionsGeneral = [
    {
      id: 1,
      icon: <GiAmmoBox />,
      to: "/ammos",
      name: "Munição",
    },
    {
      id: 2,
      icon: <GiChestArmor />,
      to: "/armor",
      name: "Armadura",
    },
    {
      id: 3,
      icon: <GiFeatherWound />,
      to: "/ashes",
      name: "Cinzas",
    },
    {
      id: 4,
      icon: <SiNodemon />,
      to: "/bosses",
      name: "Bosses",
    },
    {
      id: 5,
      icon: <MdClass />,
      to: "/classes",
      name: "Classes",
    },
    {
      id: 6,
      icon: <GiFishMonster />,
      to: "/creatures",
      name: "Criaturas",
    },
    {
      id: 7,
      icon: <PiArrowsInCardinalBold />,
      to: "/incantation",
      name: "Encantamentos",
    },
    {
      id: 8,
      icon: <FaBoxOpen />,
      to: "/items",
      name: "Items",
    },
    {
      id: 9,
      icon: <FaLocationDot />,
      to: "/location",
      name: "Localizações",
    },
    {
      id: 10,
      icon: <RiUserLocationFill />,
      to: "/npc",
      name: "NPCs",
    },
    {
      id: 11,
      icon: <LuShield />,
      to: "/shield",
      name: "Escudos",
    },
    {
      id: 12,
      icon: <FaWandMagicSparkles />,
      to: "/sorcerer",
      name: "Magias",
    },
    {
      id: 13,
      icon: <GiSparkSpirit />,
      to: "/spirit",
      name: "Espiritos",
    },

    {
      id: 14,
      icon: <FaCentos />,
      to: "/talismans",
      name: "Talismãs",
    },
    {
      id: 15,
      icon: <LuSword />,
      to: "/weapon",
      name: "Armas",
    },
  ];
  return (
    <div
      className={`${!isSidebarOpen ? "lg:w-32" : "lg:w-80"} ${
        darkMode ? "bg-stone-900" : "bg-stone-100"
      } base:w-full flex flex-col justify-between items-center py-6 transition-all shadow-lg h-full`}
    >
      <div
        className={`flex flex-col ${
          isSidebarOpen ? "gap-4" : "gap-2"
        } items-center w-full overflow-y-hidden`}
      >
        <div className="mb-4">
          <NavLink to="/">
            <img src={Logo} className="size-16 filter drop-shadow-2xl" />
          </NavLink>
        </div>

        {isSidebarOpen ? (
          <div className="flex flex-col gap-4 px-4 w-full overflow-y-auto max-h-screen">
            <AccordionSideBar
              title={optionsEquipments[0].name}
              icon={<GiSwapBag size={20} />}
            >
              {optionsEquipments.map((value) =>
                value.options.map((option) => (
                  <NavLink to={option.to} key={option.id}>
                    <Button
                      className={`group ${
                        location.pathname === option.to
                          ? darkMode
                            ? "bg-yellow-800"
                            : "bg-yellow-600"
                          : darkMode
                          ? "bg-stone-700"
                          : "bg-stone-300 text-stone-700"
                      }  transition-all ${
                        !isSidebarOpen
                          ? "w-12"
                          : "flex gap-2 justify-start w-full"
                      }`}
                    >
                      <div
                        className={`${
                          darkMode ? "text-stone-300" : "text-stone-700"
                        } ${
                          darkMode
                            ? "group-hover:text-yellow-800"
                            : "group-hover:text-yellow-600"
                        }`}
                      >
                        {React.cloneElement(option.icon, { size: 20 })}
                      </div>
                      {isSidebarOpen && (
                        <span
                          className={`${
                            darkMode
                              ? "group-hover:text-yellow-800"
                              : "group-hover:text-yellow-600"
                          } font-semibold`}
                        >
                          {option.name}
                        </span>
                      )}
                    </Button>
                  </NavLink>
                ))
              )}
            </AccordionSideBar>
            <AccordionSideBar
              title={optionsInfoBosses[0].name}
              icon={<GiSeaCreature size={20} />}
            >
              {optionsInfoBosses.map((value) =>
                value.options.map((option) => (
                  <NavLink to={option.to} key={option.id}>
                    <Button
                      className={`group ${
                        location.pathname === option.to
                          ? darkMode
                            ? "bg-yellow-800"
                            : "bg-yellow-600"
                          : darkMode
                          ? "bg-stone-700"
                          : "bg-stone-300 text-stone-700"
                      }  transition-all ${
                        !isSidebarOpen
                          ? "w-12"
                          : "flex gap-2 justify-start w-full"
                      }`}
                    >
                      <div
                        className={`${
                          darkMode ? "text-stone-300" : "text-stone-700"
                        } ${
                          darkMode
                            ? "group-hover:text-yellow-800"
                            : "group-hover:text-yellow-600"
                        }`}
                      >
                        {" "}
                        {React.cloneElement(option.icon, { size: 20 })}
                      </div>
                      {isSidebarOpen && (
                        <span
                          className={`${
                            darkMode
                              ? "group-hover:text-yellow-800"
                              : "group-hover:text-yellow-600"
                          } font-semibold`}
                        >
                          {option.name}
                        </span>
                      )}
                    </Button>
                  </NavLink>
                ))
              )}
            </AccordionSideBar>
            <AccordionSideBar
              title={optionsFaithMagic[0].name}
              icon={<FaWandMagic size={20} />}
            >
              {optionsFaithMagic.map((value) =>
                value.options.map((option) => (
                  <NavLink to={option.to} key={option.id}>
                    <Button
                      className={`group ${
                        location.pathname === option.to
                          ? darkMode
                            ? "bg-yellow-800"
                            : "bg-yellow-600"
                          : darkMode
                          ? "bg-stone-700"
                          : "bg-stone-300 text-stone-700"
                      }  transition-all ${
                        !isSidebarOpen
                          ? "w-12"
                          : "flex gap-2 justify-start w-full"
                      }`}
                    >
                      <div
                        className={`${
                          darkMode ? "text-stone-300" : "text-stone-700"
                        } ${
                          darkMode
                            ? "group-hover:text-yellow-800"
                            : "group-hover:text-yellow-600"
                        }`}
                      >
                        {React.cloneElement(option.icon, { size: 20 })}
                      </div>
                      {isSidebarOpen && (
                        <span
                          className={`${
                            darkMode
                              ? "group-hover:text-yellow-800"
                              : "group-hover:text-yellow-600"
                          } font-semibold`}
                        >
                          {option.name}
                        </span>
                      )}
                    </Button>
                  </NavLink>
                ))
              )}
            </AccordionSideBar>
            {options.map((value) => (
              <NavLink to={value.to} key={value.id}>
                <Button
                  key={value.id}
                  className={`group ${
                    location.pathname === value.to
                      ? darkMode
                        ? "bg-yellow-800"
                        : "bg-yellow-600"
                      : darkMode
                      ? "bg-stone-700"
                      : "bg-stone-200 text-stone-700"
                  }  transition-all ${
                    !isSidebarOpen ? "w-12" : "flex gap-2 justify-start w-full"
                  }`}
                >
                  <div
                    className={`${
                      darkMode ? "text-stone-300" : "text-stone-700"
                    } ${
                      darkMode
                        ? "group-hover:text-yellow-800"
                        : "group-hover:text-yellow-600"
                    }`}
                  >
                    {React.cloneElement(value.icon, { size: 20 })}
                  </div>
                  {isSidebarOpen && (
                    <span
                      className={`${
                        darkMode
                          ? "group-hover:text-yellow-800"
                          : "group-hover:text-yellow-600"
                      } font-semibold`}
                    >
                      {value.name}
                    </span>
                  )}
                </Button>
              </NavLink>
            ))}
          </div>
        ) : (
          optionsGeneral.map((value) => (
            <NavLink to={value.to} key={value.id}>
              <Button
                key={value.id}
                className={`group ${
                  location.pathname === value.to
                    ? darkMode
                      ? "bg-yellow-800"
                      : "bg-yellow-600"
                    : darkMode
                    ? "bg-stone-700"
                    : "bg-stone-300"
                }  transition-all ${
                  !isSidebarOpen ? "w-12" : "flex gap-2 justify-start w-full"
                }`}
              >
                <div
                  className={`${darkMode ? "text-white" : "text-stone-700"} ${
                    darkMode
                      ? "group-hover:text-yellow-800"
                      : "group-hover:text-yellow-600"
                  }`}
                >
                  {React.cloneElement(value.icon, { size: 20 })}
                </div>
              </Button>
            </NavLink>
          ))
        )}
      </div>
      <div
        className={`flex base:hidden md:block w-full px-8 ${
          isSidebarOpen ? "justify-end" : "justify-center"
        }`}
      >
        <button onClick={() => toggleSidebar()} className="pt-4">
          {!isSidebarOpen ? (
            <TbArrowBadgeRightFilled
              size={28}
              color={!darkMode ? "black" : "white"}
            />
          ) : (
            <TbArrowBadgeLeftFilled
              size={28}
              color={!darkMode ? "black" : "white"}
            />
          )}
        </button>
      </div>
    </div>
  );
};
