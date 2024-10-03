import { Pagination } from "@/components/Pagination";
import { ItemDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

export interface ItemProps {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  effect: string;
}

export const Items = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<ItemProps>("https://eldenring.fanapis.com/api/items");
  return (
    <Layout title="Items">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {data.map((value) =>
          !value.image ? (
            <></>
          ) : (
            <ItemDialog data={value.id} key={value.id}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={value.image} className="size-32" title={value.name} />
                <p className="font-semibold">{value.name}</p>
              </div>
            </ItemDialog>
          )
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
