import { Pagination } from "@/components/Pagination";
import { NpcDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

export interface NpcProps {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  quote: string;
}

export const Npc = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<NpcProps>("https://eldenring.fanapis.com/api/npcs");

  return (
    <Layout title="NPC">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {isLoading
          ? null
          : data.map((value) =>
              value.image ? (
                <NpcDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </NpcDialog>
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
