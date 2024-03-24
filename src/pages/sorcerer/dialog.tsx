/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { SorcererProps } from ".";
import axios from "axios";
import { Dialog } from "@/components/Dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface SorcererDialogProps {
  children: ReactNode;
  data: any;
}

export const SorcererDialog = ({ children, data }: SorcererDialogProps) => {
  const [datas, setData] = useState<SorcererProps | null>(null);
  const { toast } = useToast();
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/sorceries/${data}`
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

  console.log(datas);

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
                className="h-[28rem] max-w-full min-w-64 w-full object-contain"
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

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p>
                    <span className="font-bold">Effects: </span>
                    {datas?.effects}
                  </p>
                  <p>
                    <span className="font-bold">Types: </span>
                    {datas?.type}
                  </p>
                  <p>
                    <span className="font-bold">Slots: </span>
                    {datas?.slots}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-stone-200">Scale With</p>
                  {datas?.requires.map((value) => (
                    <div>
                      <span
                        className={`capitalize font-bold text-stone-300 mr-1 text-xs`}
                      >
                        {value.name}:
                      </span>
                      <span>{value.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
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
