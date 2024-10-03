import {
  Card as CardShadcn,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router-dom";

interface CardProps {
  title: string;
  subtitle: string;
  icon: any;
  link: string;
}

export const Card = ({ title, subtitle, icon, link }: CardProps) => {
  return (
    <NavLink to={link} className="w-full">
      <CardShadcn className="border-border bg-background border-4 min-h-48">
        <CardHeader className="py-4">
          <div className="bg-background size-12 flex justify-center items-center rounded-md">
            {icon}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-text-primary">{title}</CardTitle>
          <p className="leading-4 text-text-primary">{subtitle}</p>
        </CardContent>
      </CardShadcn>
    </NavLink>
  );
};
