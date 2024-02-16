import {
  GiAmmoBox,
  GiChestArmor,
  GiFeatherWound,
  GiFishMonster,
  GiSparkSpirit,
} from "react-icons/gi";
import Logo from "../../assets/logo.webp";
import { Button } from "../ui/button";
import { LuShield, LuSword } from "react-icons/lu";
import { SiNodemon } from "react-icons/si";
import { MdClass } from "react-icons/md";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { FaBoxOpen, FaCentos } from "react-icons/fa";
import { FaLocationDot, FaWandMagicSparkles } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  TbArrowBadgeLeftFilled,
  TbArrowBadgeRightFilled,
} from "react-icons/tb";

export const Sidebar = () => {
  const [widthSidebar, setWidthSidebar] = useState(false);
  const location = useLocation();
  const options = [
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
      className={`${
        widthSidebar ? "w-32" : "w-64"
      } bg-stone-800 flex flex-col justify-between items-center py-6 transition-all shadow-lg`}
    >
      <div>
        <img src={Logo} className="size-16 filter drop-shadow-2xl" />
      </div>

      <div className="flex flex-col gap-2">
        {options.map((value) => (
          <NavLink to={value.to} className="">
            <Button
              key={value.id}
              className={`group ${
                location.pathname === value.to
                  ? "bg-yellow-800"
                  : "bg-stone-700"
              }  transition-all border-[1px] border-black rounded-lg outline-none py-5 ${
                widthSidebar ? "w-12" : "flex gap-2 justify-start w-44"
              }`}
            >
              <div className="group-hover:text-yellow-800">
                {React.cloneElement(value.icon, { size: 20 })}
              </div>
              {!widthSidebar && (
                <span className="group-hover:text-yellow-800 font-semibold">
                  {value.name}
                </span>
              )}
            </Button>
          </NavLink>
        ))}
      </div>

      <div
        className={`flex w-full px-8 ${
          !widthSidebar ? "justify-end" : "justify-center"
        }`}
      >
        <button onClick={() => setWidthSidebar(!widthSidebar)}>
          {widthSidebar ? (
            <TbArrowBadgeRightFilled size={28} />
          ) : (
            <TbArrowBadgeLeftFilled size={28} />
          )}
        </button>
      </div>
    </div>
  );
};
