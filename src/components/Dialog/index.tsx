/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from "react";
import {
  Dialog as DialogShadcn,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
interface DialogProps {
  children: ReactNode;
  content: ReactNode;
  header?: string;
  title?: string;
}

import { Button } from "../ui/button";
import { useDarkMode } from "@/context/DarkModeContext";

export const Dialog = ({ children, content, header, title }: DialogProps) => {
  const { darkMode } = useDarkMode();
  return (
    <DialogShadcn>
      <DialogTrigger
        className={`${
          darkMode ? "bg-stone-700 hover:bg-stone-700" : "bg-stone-100 hover:bg-stone-100"
        } border-0 w-ful h-full shadow-md hover:opacity-70`}
        asChild
      >
        <Button variant="outline" className={`${darkMode ? "text-stone-100 hover:text-stone-100" : "text-stone-700 hover:text-stone-700"}`}>{children}</Button>
      </DialogTrigger>
      {!header ? (
        <>{content}</>
      ) : (
        <DialogContent
          className={`bg-yellow-800 text-stone-200 p-0 border-4 border-stone-800`}
        >
          <DialogHeader
            className={`${
              darkMode ? "bg-stone-700" : "bg-stone-200"
            } rounded-t h-32 p-2 flex w-full items-center`}
          >
            <img src={header} className="size-28" alt={title} />
          </DialogHeader>
          <div className="p-4">
            <DialogTitle>{title}</DialogTitle>
            {content}
          </div>
        </DialogContent>
      )}
    </DialogShadcn>
  );
};
