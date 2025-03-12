import { Pagination } from "@/components/Pagination";
import { CreaturesDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

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
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {isLoading
          ? null
          : data.map((value) =>
              value.image ? (
                <CreaturesDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </CreaturesDialog>
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
