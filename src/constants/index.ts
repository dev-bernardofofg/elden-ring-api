import { FaCentos, FaBoxOpen } from "react-icons/fa";
import { FaLocationDot, FaWandMagicSparkles } from "react-icons/fa6";
import {
  GiAmmoBox,
  GiChestArmor,
  GiFeatherWound,
  GiFishMonster,
  GiSparkSpirit,
  GiSwapBag,
} from "react-icons/gi";
import { LuShield, LuSword } from "react-icons/lu";
import { MdClass } from "react-icons/md";
import { PiArrowsInCardinalBold } from "react-icons/pi";
import { RiUserLocationFill } from "react-icons/ri";
import { SiNodemon } from "react-icons/si";

export const sidebarOptions = [
  {
    name: "Equipamentos",
    icon: GiSwapBag,
    options: [
      { id: 1, icon: GiAmmoBox, to: "/ammos", name: "Munição" },
      { id: 2, icon: GiChestArmor, to: "/armor", name: "Armadura" },
      { id: 11, icon: LuShield, to: "/shield", name: "Escudos" },
      { id: 15, icon: LuSword, to: "/weapon", name: "Armas" },
    ],
  },
  {
    name: "Info Boss",
    icon: GiFishMonster,
    options: [
      { id: 3, icon: GiFeatherWound, to: "/ashes", name: "Cinzas" },
      { id: 4, icon: SiNodemon, to: "/bosses", name: "Bosses" },
      { id: 6, icon: GiFishMonster, to: "/creatures", name: "Criaturas" },
      { id: 9, icon: FaLocationDot, to: "/location", name: "Localizações" },
    ],
  },
  {
    name: "Fé / Mágia",
    icon: FaWandMagicSparkles,
    options: [
      {
        id: 7,
        icon: PiArrowsInCardinalBold,
        to: "/incantation",
        name: "Encantamentos",
      },
      { id: 12, icon: FaWandMagicSparkles, to: "/sorcerer", name: "Magias" },
      { id: 13, icon: GiSparkSpirit, to: "/spirit", name: "Espíritos" },
      { id: 14, icon: FaCentos, to: "/talismans", name: "Talismãs" },
    ],
  },
];

export const standaloneOptions = [
  { id: 5, icon: MdClass, to: "/classes", name: "Classes" },
  { id: 8, icon: FaBoxOpen, to: "/items", name: "Items" },
  { id: 10, icon: RiUserLocationFill, to: "/npc", name: "NPCs" },
];

export const allOptions = [
  ...sidebarOptions.flatMap((option) => option.options),
  ...standaloneOptions,
];
