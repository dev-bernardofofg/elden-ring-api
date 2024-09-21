import { ClassesDialog } from "./dialog";
import { Pagination } from "@/components/Pagination";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hook/useRequest";

export interface ClassesProps {
  id: string;
  name: string;
  image: string;
  description: string;
  stats: {
    level: string;
    vigor: string;
    mind: string;
    endurance: string;
    strength: string;
    dexterity: string;
    intelligence: string;
    faith: string;
    arcane: string;
  };
}

export const Classes = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<ClassesProps>("https://eldenring.fanapis.com/api/classes");
  return (
    <Layout title="Classes">
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
                <ClassesDialog data={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32 object-contain"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </ClassesDialog>
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
