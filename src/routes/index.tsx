import { App } from "@/App";
import { Ammos } from "@/pages/ammos";
import { Armor } from "@/pages/armor";
import { Ashes } from "@/pages/ashes";
import { Bosses } from "@/pages/bosses";
import { Classes } from "@/pages/classes";
import { Creature } from "@/pages/creatures";
import { Home } from "@/pages/home";
import { Incantation } from "@/pages/incantation";
import { Items } from "@/pages/items";
import { Location } from "@/pages/location";
import { Npc } from "@/pages/npc";
import { Shield } from "@/pages/shield";
import { Sorcerer } from "@/pages/sorcerer";
import { Spirit } from "@/pages/spirit";
import { Talismans } from "@/pages/talismans";
import { Weapons } from "@/pages/weapons";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "armor",
        element: <Armor />,
      },
      { path: "ammos", element: <Ammos /> },
      { path: "classes", element: <Classes /> },
      { path: "incantation", element: <Incantation /> },
      { path: "ashes", element: <Ashes /> },
      { path: "bosses", element: <Bosses /> },
      { path: "creatures", element: <Creature /> },
      { path: "items", element: <Items /> },
      { path: "location", element: <Location /> },
      { path: "npc", element: <Npc /> },
      { path: "shield", element: <Shield /> },
      { path: "sorcerer", element: <Sorcerer /> },
      { path: "weapon", element: <Weapons /> },
      { path: "spirit", element: <Spirit /> },
      { path: "talismans", element: <Talismans /> },
    ],
  },
]);
