import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const Layout = ({ children, className, title }: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-full"
    >
      <div
        className={`grid grid-rows-12 grid-cols-1 flex-col gap-4 h-screen base:p-2 md:p-8 flex-1 ${className}`}
      >
        <h1 className="font-bold text-xl row-span-1">{title}</h1>
        {children}
      </div>
    </motion.div>
  );
};
