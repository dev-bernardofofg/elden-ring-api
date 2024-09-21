import { Pagination } from "@/components/Pagination";
import { IncantationDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hook/useRequest";

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
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<IncantationProps>(
      "https://eldenring.fanapis.com/api/incantations"
    );
  return (
    <Layout title="Incantation">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {isLoading
          ? Array.from({ length: count }).map((_, index) => (
              <Skeleton key={index} className="h-40" />
            ))
          : data.map((value) =>
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
      <Pagination
        itemsPerPage={16}
        page={page}
        setPage={setPage}
        totalCount={count}
      />
    </Layout>
  );
};
