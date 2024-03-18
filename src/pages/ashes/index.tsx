import axios from "axios";
import { useEffect, useState } from "react";
import { AshesDialog } from "./dialog";
import { Pagination } from "@/components/Pagination";

export interface AshesProps {
  id: string;
  name: string;
  image: string;
  description: string;
  affinity: string;
  skill: string;
}

export const Ashes = () => {
  const [data, setData] = useState<AshesProps[]>([]);
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://eldenring.fanapis.com/api/ashes?limit=16&page=${page}`
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
      Ashes
      <div className="flex overflow-y-auto max-h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] p-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {data.map((value) => (
            <AshesDialog data={value.id}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={value.image} className="size-32" title={value.name} />
                <p className="font-semibold">{value.name}</p>
              </div>
            </AshesDialog>
          ))}
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
