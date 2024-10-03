import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const Layout = ({ children, className, title }: LayoutProps) => {
  return (
    <div className="min-h-full">
      <div
        className={`grid grid-rows-12 grid-cols-1 flex-col gap-4 h-screen base:p-2 md:p-8 flex-1 ${className}`}
      >
        <h1 className="font-bold text-xl row-span-1">{title}</h1>
        {children}
      </div>
    </div>
  );
};
