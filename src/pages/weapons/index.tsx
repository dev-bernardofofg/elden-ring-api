import { Pagination } from "@/components/Pagination";
import { WeaponDialog } from "./dialog";
import { FormSearch } from "@/components/Form";
import { Layout } from "@/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchData } from "@/hook/useRequest";

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {isLoading
          ? Array.from({ length: count }).map((_, index) => (
              <Skeleton key={index} className="h-40" />
            ))
          : data.map((value) =>
              !value.image ? (
                <></>
              ) : (
                <WeaponDialog data={value.id} key={value.id}>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      src={value.image}
                      className="size-32 object-cover"
                      title={value.name}
                    />
                    <p className="font-semibold">{value.name}</p>
                  </div>
                </WeaponDialog>
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
