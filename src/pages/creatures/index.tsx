import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { CreaturesDialog } from "./dialog";
import { FormSearch } from "@/components/Form";

export interface CreaturesProps {
  id: string;
  name: string;
  image: string;
  description: string;
  drops: string[];
}

export const Creature = () => {
  const [data, setData] = useState<CreaturesProps[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      let response;
      if (nameFilter) {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/creatures?name=${nameFilter}`
        );
      } else {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/creatures?limit=16&page=${page}`
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
        Creature
        <FormSearch setName={setNameFilter} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {data.map((value) =>
            !value.image ? (
              <></>
            ) : (
              <CreaturesDialog data={value.id} key={value.id}>
                <div className="flex flex-col justify-center items-center gap-2">
                  <img
                    src={value.image}
                    className="size-32 object-contain"
                    title={value.name}
                  />
                  <p className="font-semibold">{value.name}</p>
                </div>
              </CreaturesDialog>
            )
          )}
        </div>
      </div>
      {count > 16 && (
        <Pagination
          itemsPerPage={16}
          page={page}
          setPage={setPage}
          totalCount={count}
        />
      )}
    </div>
  );
};
