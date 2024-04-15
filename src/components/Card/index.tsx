import {
  Card as CardShadcn,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDarkMode } from "@/context/DarkModeContext";
import { NavLink } from "react-router-dom";

interface CardProps {
  title: string;
  subtitle: string;
  icon: any;
  link: string;
}

export const Card = ({ title, subtitle, icon, link }: CardProps) => {
  const { darkMode } = useDarkMode();
  return (
    <NavLink to={link} className="w-full">
      <CardShadcn
        className={`${
          darkMode
            ? "bg-stone-700 border-stone-600"
            : "bg-stone-200 border-stone-100"
        }  border-4 min-h-48 `}
      >
        <CardHeader className="py-4">
          <div
            className={`${
              darkMode ? "bg-stone-600" : "bg-stone-300"
            } size-12 flex justify-center items-center rounded-md`}
          >
            {icon}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardTitle
            className={`${darkMode ? "text-stone-200" : "text-stone-700"}`}
          >
            {title}
          </CardTitle>
          <p
            className={`leading-4 ${
              darkMode ? "text-stone-200" : "text-stone-700"
            }`}
          >
            {subtitle}
          </p>
        </CardContent>
      </CardShadcn>
    </NavLink>
  );
};
