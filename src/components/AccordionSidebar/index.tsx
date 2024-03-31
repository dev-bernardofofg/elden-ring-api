import { useDarkMode } from "@/context/DarkModeContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSidebar } from "@/context/SidebarContext";
import { ReactNode } from "react";

interface AccordionSideBarProps {
  children: ReactNode;
  title: string;
  icon: ReactNode;
}

export const AccordionSideBar = ({
  children,
  title,
  icon,
}: AccordionSideBarProps) => {
  const { isSidebarOpen } = useSidebar();
  const { darkMode } = useDarkMode();
  return (
    <Accordion
      collapsible
      type="single"
      className={`${
        darkMode ? "bg-stone-700 text-stone-200" : "bg-stone-200 text-stone-700"
      } rounded-lg outline-none  w-full`}
    >
      <AccordionItem value="item-1">
        {isSidebarOpen && (
          <AccordionTrigger className="px-4 py-3">
            <div className="flex items-center gap-2">
              {icon}
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
