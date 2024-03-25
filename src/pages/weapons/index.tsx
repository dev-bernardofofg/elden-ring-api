import { Pagination } from "@/components/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { WeaponDialog } from "./dialog";

export interface WeaponProps {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  attack: AttackProps[];
  defence: DefenceProps[];
  requiredAttributes: RequiredAttributesProps[];
  scalesWith: ScalesWithProps[];
}

interface AttackProps {
  name: string;
  amount: number;
}

interface DefenceProps {
  name: string;
  amount: number;
}

interface RequiredAttributesProps {
  name: string;
  amount: number;
}

interface ScalesWithProps {
  name: string;
  scaling: string;
}

export const Weapons = () => {
  const [data, setData] = useState<WeaponProps[]>([]);
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/weapons?limit=16&page=${page}`
      );

      setData(response.data.data);
      setCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div>
      Weapons
      <div className="flex overflow-y-auto max-h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {data.map((value) =>
            !value.image ? (
              <></>
            ) : (
              <WeaponDialog data={value.id} key={value.id}>
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src={value.image}
                    className="size-32 object-cover"
                    title={value.name}
                  />
                  <p className="font-semibold">{value.name}</p>
                </div>
              </WeaponDialog>
            )
          )}
        </div>
      </div>
      <Pagination
        itemsPerPage={16}
        page={page}
        setPage={setPage}
        totalCount={count}
      />
    </div>
  );
};
