import { Pagination } from "@/components/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { LocationDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";

export interface LocationProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const Location = () => {
  const [data, setData] = useState<LocationProps[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      let response;
      if (nameFilter) {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/locations?name=${nameFilter}`
        );
      } else {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/locations?limit=16&page=${page}`
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
    <Layout title="Location">
      <FormSearch setName={setNameFilter} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {data.map((value) =>
          !value.image ? (
            <></>
          ) : (
            <LocationDialog data={value.id} key={value.id}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={value.image} className="size-32" title={value.name} />
                <p className="font-semibold">{value.name}</p>
              </div>
            </LocationDialog>
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
