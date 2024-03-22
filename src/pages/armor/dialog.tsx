/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { ArmorProps } from ".";
import axios from "axios";
import { Dialog } from "@/components/Dialog";
import { DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface ArmorDialogProps {
  children: ReactNode;
  data: any;
}

export const ArmorDialog = ({ children, data }: ArmorDialogProps) => {
  const [datas, setData] = useState<ArmorProps | null>(null);

  const { toast } = useToast();
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/armors/${data}`
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
          <DialogDescription className="text-stone-300 gap-4 flex flex-col">
            <div>
              <p className="text-xs">{datas?.category}</p>
              <p className="font-bold">{datas?.description}</p>
            </div>
            <div className="grid grid-cols-2 flex-col gap-2">
              <div>
                <p className="font-bold text-stone-200">Damage Negation</p>
                {datas?.dmgNegation.map((value) => (
                  <div>
                    <span
                      className={`capitalize font-bold text-stone-300 mr-1`}
                    >
                      {value.name}:
                    </span>
                    <span>{value.amount}</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-bold text-stone-200">Resistence</p>

                {datas?.resistance.map((value) => (
                  <div>
                    <span
                      className={`capitalize font-bold text-stone-300 mr-1`}
                    >
                      {value.name}:
                    </span>
                    <span>{value.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </DialogDescription>
        </>
      }
      header={datas?.image}
      title={datas?.name}
    >
      {children}
    </Dialog>
  );
};
