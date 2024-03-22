/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { AmmosProps } from ".";
import axios from "axios";
import { Dialog } from "@/components/Dialog";
import { DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface AmmoDialogProps {
  children: ReactNode;
  data: string;
}

export const AmmoDialog = ({ children, data }: AmmoDialogProps) => {
  const [datas, setData] = useState<AmmosProps | null>(null);
  const { toast } = useToast();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/ammos/${data}`
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
              <p className="text-xs">
                {datas?.passive === "-" ? "Not have" : datas?.passive}
              </p>
              <span className="font-bold">{datas?.description} </span>
            </div>
            <div className="flex flex-col gap-1">
              {datas?.attackPower.map((value) => (
                <div>
                  <span className="capitalize font-bold text-white mr-1">
                    {value.name}:
                  </span>
                  <span>{value.amount}</span>
                </div>
              ))}
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
