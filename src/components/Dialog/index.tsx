/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog as DialogShadcn,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import axios from "axios";
import { AmmosProps } from "@/pages/ammos";

interface DialogProps {
  children: ReactNode;
  data: any;
}

export const Dialog = ({ children, data }: DialogProps) => {
  const [datas, setData] = useState<AmmosProps | null>(null);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/ammos/${data}`
      );
      setData(response.data.data);
    } catch {
      console.log("teste");
    }
  };

  const setColorAttackPower = (label: string) => {
    switch (label) {
      case "physical":
        return "#fff";
      case "magic":
        return "blue-500";
      case "fire":
        return "red-500";
      case "lightning":
        return "yellow-500";
      case "holy":
        return "purple-500";
      case "critical":
        return "green-500";
      default:
        return "#000";
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DialogShadcn>
      <DialogTrigger
        className="bg-stone-700 border-0 w-ful h-full shadow-md"
        asChild
      >
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent className="bg-yellow-800 text-stone-200 p-0 border-4 border-stone-800">
        <DialogHeader className="bg-stone-700 rounded-t h-32 p-2 flex w-full items-center">
          <img src={datas?.image} className="size-28" />
        </DialogHeader>
        <div className="p-4">
          <DialogTitle>{datas?.name}</DialogTitle>
          <DialogDescription className="text-stone-300 gap-4 flex flex-col">
            <p>{datas?.description}</p>

            <div className="flex flex-col gap-2">
              <span className="font-bold">Tipo: </span>
              {datas?.description}

              {datas?.attackPower.map((value) => (
                <div>
                  <span
                    className={`capitalize font-bold text-${setColorAttackPower(
                      value.name
                    )} mr-1`}
                  >
                    {value.name}:
                  </span>
                  <span>{value.amount}</span>
                </div>
              ))}
            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </DialogShadcn>
  );
};
