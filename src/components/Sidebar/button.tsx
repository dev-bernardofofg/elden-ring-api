import { useLocation } from "react-router";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib";

interface SidebarButton {
  to: string;
  icon: IconType;
  name: string;
  isSidebarOpen: boolean;
}

export const SidebarButton = ({
  to,
  icon: Icon,
  name,
  isSidebarOpen,
}: SidebarButton) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  const baseClasses = `group h-11 transition-all bg-background-sidebar-button hover:bg-background-sidebar-button-active
  ${isActive && "bg-yellow-700 hover:bg-yellow-700 text-stone-50"}'
  ${!isSidebarOpen ? "w-12" : "flex gap-2 justify-start w-full"}       
`;

  const textAndIconClasses = `
     ${
       isActive
         ? "text-stone-50"
         : "text-text-sidebar-icon-text group-hover:text-stone-50"
     }
  font-semibold
  `;

  return (
    <NavLink to={to}>
      <Button className={baseClasses}>
        <div className={textAndIconClasses}>
          <Icon size={20} />
        </div>
        {isSidebarOpen && <span className={textAndIconClasses}>{name}</span>}
      </Button>
    </NavLink>
  );
};
