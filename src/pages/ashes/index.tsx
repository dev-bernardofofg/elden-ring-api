import { AshesDialog } from "./dialog";
import { Pagination } from "@/components/Pagination";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hook/useRequest";

export interface AshesProps {
  id: string;
  name: string;
  image: string;
  description: string;
  affinity: string;
  skill: string;
}

export const Ashes = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<AshesProps>("https://eldenring.fanapis.com/api/ashes");

  return (
    <Layout title="Ashes">
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
                <AshesDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </AshesDialog>
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
