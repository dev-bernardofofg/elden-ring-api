import { Pagination } from "@/components/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { TalismanDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";

export interface TalismanProps {
  id: string;
  name: string;
  image: string;
  description: string;
  effect: string;
}
export const Talismans = () => {
  const [data, setData] = useState<TalismanProps[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      let response;
      if (nameFilter) {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/talismans?name=${nameFilter}`
        );
      } else {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/talismans?limit=16&page=${page}`
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
    <Layout title="Talismans">
      <FormSearch setName={setNameFilter} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {data.map((value) =>
          !value.image ? (
            <></>
          ) : (
            <TalismanDialog data={value.id} key={value.id}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img
                  src={value.image}
                  className="size-32 object-cover"
                  title={value.name}
                />
                <p className="font-semibold">{value.name}</p>
              </div>
            </TalismanDialog>
          )
        )}
      </div>
      <Pagination
        itemsPerPage={16}
        page={page}
        setPage={setPage}
        totalCount={count}
      />
    </Layout>
  );
};
