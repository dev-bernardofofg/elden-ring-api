import { Pagination } from "@/components/Pagination";
import { WeaponDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { useFetchData } from "@/hook/useRequest";
import { CardGrid } from "@/components/CardGrid";

export interface WeaponProps {
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

export const Weapons = () => {
  const { count, data, isLoading, nameFilter, page, setNameFilter, setPage } =
    useFetchData<WeaponProps>("https://eldenring.fanapis.com/api/weapons");

  return (
    <Layout title="Weapons">
      <FormSearch setName={setNameFilter} name={nameFilter} />
      <CardGrid count={count} data={data} isLoading={isLoading}>
        {isLoading
          ? null
          : data.map((value) =>
              value.image ? (
                <WeaponDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </WeaponDialog>
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
