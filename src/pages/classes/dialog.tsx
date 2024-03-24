/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { ClassesProps } from ".";
import axios from "axios";
import { Dialog } from "@/components/Dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface ClassesDialogProps {
  children: ReactNode;
  data: any;
}

export const ClassesDialog = ({ children, data }: ClassesDialogProps) => {
  const [datas, setData] = useState<ClassesProps | null>(null);
  const { toast } = useToast();
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/classes/${data}`
      );
      setData(response.data.data);
    } catch {
      toast({
        title: "Erro!",
        description: "Houve um problema na sua requisição. ",
        className: "bg-red-500 text-gray-200 border-0",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Dialog
      content={
        <>
          <DialogContent className="flex flex-row-reverse bg-yellow-800 text-stone-200 p-0 border-4 border-stone-800">
            <DialogHeader className="bg-stone-700 rounded-t h-full flex items-center">
              <img
                src={datas?.image}
                className="size-96 max-w-full min-w-64 w-full object-cover"
              />
              <div className="p-4 !my-0">
                <DialogTitle>{datas?.name}</DialogTitle>
              </div>
            </DialogHeader>

            <DialogDescription className="text-stone-300 gap-4 flex flex-col p-4">
              <div>
                <p className="font-bold text-lg">{datas?.name}</p>
                <p className="font-bold">{datas?.description}</p>
              </div>
              <ul className="text-sm font-bold flex flex-col">
                <li>{datas?.stats.arcane}</li>
                <li>{datas?.stats.dexterity}</li>
                <li>{datas?.stats.endurance}</li>
                <li>{datas?.stats.faith}</li>
                <li>{datas?.stats.intelligence}</li>
                <li>{datas?.stats.level}</li>
                <li>{datas?.stats.mind}</li>
                <li>{datas?.stats.strength}</li>
                <li>{datas?.stats.vigor}</li>
              </ul>
            </DialogDescription>
          </DialogContent>
        </>
      }
      title={datas?.name}
    >
      {children}
    </Dialog>
  );
};
