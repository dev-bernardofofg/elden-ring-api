/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { WeaponProps } from ".";
import axios from "axios";
import { Dialog } from "@/components/Dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface WeaponDialogProps {
  children: ReactNode;
  data: any;
}

export const WeaponDialog = ({ children, data }: WeaponDialogProps) => {
  const [datas, setData] = useState<WeaponProps | null>(null);
  const { toast } = useToast();
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/weapons/${data}`
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
                className="h-[28rem] max-w-full min-w-64 w-full object-contain"
              />
              <div className="p-4 !my-0">
                <DialogTitle>{datas?.name}</DialogTitle>
              </div>
            </DialogHeader>

            <DialogDescription className="text-stone-300 gap-4 flex flex-col p-4">
              <div>
                <p className="font-bold text-lg">{datas?.name}</p>
                <p className="font-bold text-xs">{datas?.description}</p>
              </div>

              <div className="flex flex-col gap-4">
                <p>
                  <span className="font-bold">Category: </span>
                  {datas?.category}
                </p>
                <div className="grid grid-cols-2 flex-col gap-2">
                  <div>
                    <p className="font-bold text-stone-200">Scale With</p>
                    {datas?.scalesWith.map((value) => (
                      <div>
                        <span
                          className={`capitalize font-bold text-stone-300 mr-1 text-xs`}
                        >
                          {value.name}:
                        </span>
                        <span>{value.scaling}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-stone-200">Req Attributes</p>
                    {datas?.requiredAttributes.map((value) => (
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
              </div>

              <div className="grid grid-cols-2 flex-col gap-2">
                <div>
                  <p className="font-bold text-stone-200">Attack</p>
                  {datas?.attack.map((value) => (
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

                <div>
                  <p className="font-bold text-stone-200">Defense</p>

                  {datas?.defence.map((value) => (
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
