import { BossesDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hook/useRequest";
import { Pagination } from "@/components/Pagination";

export interface BossesProps {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
  healthPoint: string;
}

export const Bosses = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<BossesProps>("https://eldenring.fanapis.com/api/bosses");

  return (
    <Layout title="Bosses">
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
                <BossesDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32 object-cover"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </BossesDialog>
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
