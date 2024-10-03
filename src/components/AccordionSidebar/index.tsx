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
  return (
    <Accordion
      collapsible
      type="single"
      className="border-border text-text-primary bg-transparent border-2 rounded-lg outline-none w-full transition-all"
    >
      <AccordionItem value="item-1">
        {isSidebarOpen && (
          <AccordionTrigger className="px-4 py-3 rounded-md bg-background">
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
