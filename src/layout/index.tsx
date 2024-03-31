import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] p-4">
        <h1 className="font-bold text-xl">{title}</h1>
        {children}
      </div>
    </div>
  );
};
