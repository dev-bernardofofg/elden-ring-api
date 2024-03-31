import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "../Sidebar";

export const DrawerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-stone-700 rounded-l-full px-2">
        <IoMenu size={32} color="white" />
      </SheetTrigger>
      <SheetContent className="p-0 border-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
