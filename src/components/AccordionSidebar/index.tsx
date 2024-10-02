import { useDarkMode } from "@/context/DarkModeContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSidebar } from "@/context/SidebarContext";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface AccordionSideBarProps {
  children: ReactNode;
  title: string;
  icon: IconType;
}

export const AccordionSideBar = ({
  children,
  title,
  icon: Icon,
}: AccordionSideBarProps) => {
  const { isSidebarOpen } = useSidebar();
  const { darkMode } = useDarkMode();
  return (
    <Accordion
      collapsible
      type="single"
      className={`${
        darkMode
          ? "border-stone-700 text-stone-200"
          : "border-stone-200 text-stone-700"
      } bg-transparent border-2 rounded-lg outline-none w-full transition-all`}
    >
      <AccordionItem value="item-1">
        {isSidebarOpen && (
          <AccordionTrigger
            className={`px-4 py-3 rounded-md ${
              darkMode ? "bg-stone-700" : "bg-stone-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <Icon size={20} />
              <span className="font-semibold">{title}</span>
            </div>
          </AccordionTrigger>
        )}
        <AccordionContent className="p-2 flex flex-col gap-4">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
