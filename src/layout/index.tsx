import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const Layout = ({ children, className, title }: LayoutProps) => {
  return (
    <div>
      <div
        className={`flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] base:p-1 md:p-4 ${className}`}
      >
        <h1 className="font-bold text-xl">{title}</h1>
        {children}
      </div>
    </div>
  );
};
