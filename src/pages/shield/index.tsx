import { ShieldDialog } from "./dialog";
import { Pagination } from "@/components/Pagination";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

export interface ShieldProps {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  attack: AttackProps[];
  defence: DefenceProps[];
  requiredAttributes: RequiredAttributesProps[];
  scalesWith: ScalesWithProps[];
}

interface AttackProps {
  name: string;
  amount: number;
}

interface DefenceProps {
  name: string;
  amount: number;
}

interface RequiredAttributesProps {
  name: string;
  amount: number;
}

interface ScalesWithProps {
  name: string;
  scaling: string;
}

export const Shield = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<ShieldProps>("https://eldenring.fanapis.com/api/shields");

  return (
    <Layout title="Shield">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {isLoading
          ? null
          : data.map((value) =>
              value.image ? (
                <ShieldDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </ShieldDialog>
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
