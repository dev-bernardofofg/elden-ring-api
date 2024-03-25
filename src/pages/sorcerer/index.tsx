import axios from "axios";
import { useEffect, useState } from "react";
import { SorcererDialog } from "./dialog";
import { Pagination } from "@/components/Pagination";
import { FormSearch } from "@/components/Form";

export interface SorcererProps {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  cost: number;
  slots: number;
  effects: string;
  requires: RequiresProps[];
}

interface RequiresProps {
  name: string;
  amount: number;
}

export const Sorcerer = () => {
  const [data, setData] = useState<SorcererProps[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      let response;
      if (nameFilter) {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/sorceries?name=${nameFilter}`
        );
      } else {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/sorceries?limit=16&page=${page}`
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
        Sorcerer
        <FormSearch setName={setNameFilter} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {data.map((value) =>
            !value.image ? (
              <></>
            ) : (
              <SorcererDialog data={value.id} key={value.id}>
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src={value.image}
                    className="size-32 object-cover"
                    title={value.name}
                  />
                  <p className="font-semibold">{value.name}</p>
                </div>
              </SorcererDialog>
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
