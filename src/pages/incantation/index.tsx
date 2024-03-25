import { Pagination } from "@/components/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { IncantationDialog } from "./dialog";
import { FormSearch } from "@/components/Form";

export interface IncantationProps {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  cost: number;
  slots: number;
  effects: string;
  requires: RequireProps[];
}

interface RequireProps {
  name: string;
  amount: string;
}

export const Incantation = () => {
  const [data, setData] = useState<IncantationProps[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      let response;
      if (nameFilter) {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/incantations?name=${nameFilter}`
        );
      } else {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/incantations?limit=16&page=${page}`
        );
      }

      setData(response.data.data);
      setCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, nameFilter]);
  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] p-4">
        Incantation
        <FormSearch setName={setNameFilter} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {data.map((value) =>
            !value.image ? (
              <></>
            ) : (
              <IncantationDialog data={value.id} key={value.id}>
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src={value.image}
                    className="size-32"
                    title={value.name}
                  />
                  <p className="font-semibold">{value.name}</p>
                </div>
              </IncantationDialog>
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
