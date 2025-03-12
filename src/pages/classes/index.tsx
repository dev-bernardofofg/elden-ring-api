import { ClassesDialog } from "./dialog";
import { Pagination } from "@/components/Pagination";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

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
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {isLoading
          ? null
          : data.map((value) =>
              value.image ? (
                <ClassesDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </ClassesDialog>
              ) : null
            )}
      </CardGrid>
      <Pagination
        itemsPerPage={16}
        page={page}
        setPage={setPage}
        totalCount={count}
      />
    </Layout>
  );
};
