/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination } from "@/components/Pagination";
import { ArmorDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Empty } from "@/components/Empty";
import { useFetchData } from "@/hook/useRequest";

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
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<ArmorProps>("https://eldenring.fanapis.com/api/armors");

  return (
    <Layout title="Armor">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <div
        className={`${
          data && data.length === 0
            ? "flex justify-center"
            : "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 "
        } w-full`}
      >
        {isLoading
          ? Array.from({ length: count }).map((_, index) => (
              <Skeleton key={index} className="h-40" />
            ))
          : data.map((value) =>
              !value.image ? (
                <></>
              ) : (
                <ArmorDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </ArmorDialog>
              )
            )}

        {data && data.length === 0 && <Empty />}
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
