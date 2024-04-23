/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination } from "@/components/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArmorDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";

export interface ArmorProps {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  dmgNegation: DamageNegationProps[];
  resistance: ResistanceProps[];
}

interface DamageNegationProps {
  name: string;
  amount: number;
}

interface ResistanceProps {
  name: string;
  amount: number;
}

export const Armor = () => {
  const [data, setData] = useState<ArmorProps[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(16);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      setIsLoading(true);
      let response;
      if (nameFilter) {
        response = await axios.get(
          `https://eldenring.fanapis.com/api/armors?name=${nameFilter}`
        );
      } else {
        response = await axios.get(`
        https://eldenring.fanapis.com/api/armors?limit=16&page=${page}
        `);
      }

      setData(response.data.data);
      setCount(response.data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, nameFilter]);

  return (
    <Layout title="Armor">
      <FormSearch setName={setNameFilter} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {isLoading
          ? 
          Array.from({ length: count }).map((_, index) => (
              <Skeleton key={index} className="h-40" />
            ))
          : data.map((value) =>
              !value.image ? (
                <></>
              ) : (
            <ArmorDialog data={value.id} key={value.id}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={value.image} className="size-32" title={value.name} />
                <p className="font-semibold">{value.name}</p>
              </div>
            </ArmorDialog>
              
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
