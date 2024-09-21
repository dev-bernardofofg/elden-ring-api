import { Pagination } from "@/components/Pagination";
import { CreaturesDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hook/useRequest";

export interface CreaturesProps {
  id: string;
  name: string;
  image: string;
  description: string;
  drops: string[];
}

export const Creature = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<CreaturesProps>("https://eldenring.fanapis.com/api/creatures");
  return (
    <Layout title="Creature">
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
      {count > 16 && (
        <Pagination
          itemsPerPage={16}
          page={page}
          setPage={setPage}
          totalCount={count}
        />
      )}
    </Layout>
  );
};
