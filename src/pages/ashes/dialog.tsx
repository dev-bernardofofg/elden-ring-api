/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { AshesProps } from ".";
import axios from "axios";
import { Dialog } from "@/components/Dialog";
import { DialogDescription } from "@/components/ui/dialog";

interface AshesDialogProps {
  children: ReactNode;
  data: any;
}

export const AshesDialog = ({ children, data }: AshesDialogProps) => {
  const [datas, setData] = useState<AshesProps | null>(null);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/ashes/${data}`
      );
      setData(response.data.data);
    } catch {
      console.log("teste");
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
              <p className="text-xs">{datas?.affinity}</p>
              <p className="font-bold">{datas?.description}</p>
            </div>
            <p className="text-sm font-bold">
              Skill: <span>{datas?.skill}</span>
            </p>
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
