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

export const Dialog = ({ children, content, header, title }: DialogProps) => {
  return (
    <DialogShadcn>
      <DialogTrigger
        className="bg-background-low-foreground
        border-0 w-full h-full shadow-md"
        asChild
      >
        <Button variant="outline" className="">
          {children}
        </Button>
      </DialogTrigger>
      {!header ? (
        <>{content}</>
      ) : (
        <DialogContent
          className={`bg-yellow-800 text-stone-200 p-0 border-4 border-stone-800`}
        >
          <DialogHeader
            className="bg-background-medium-foreground
             rounded-t h-32 p-2 flex w-full items-center"
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
