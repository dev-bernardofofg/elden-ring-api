import { Pagination } from "@/components/Pagination";
import { AmmoDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

export interface AmmosProps {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  passive: string;
  attackPower: AttackPowerProps[];
}

interface AttackPowerProps {
  name: string;
  amount: number;
}

export const Ammos = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<AmmosProps>("https://eldenring.fanapis.com/api/ammos");

  return (
    <Layout title="Ammos">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {data.map((value) =>
          !value.image ? (
            <></>
          ) : (
            <AmmoDialog data={value.id} key={value.id}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={value.image} className="size-32" title={value.name} />
                <p className="font-semibold">{value.name}</p>
              </div>
            </AmmoDialog>
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
