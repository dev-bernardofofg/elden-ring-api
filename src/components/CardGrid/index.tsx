import { ReactNode } from "react";
import { Skeleton } from "../ui/skeleton";
import { Empty } from "../Empty";
import { motion } from "framer-motion";

interface BaseDataCard {
  id: string;
  image: string;
  name: string;
}

interface CardGridProps<T extends BaseDataCard> {
  data: T[]; // Aqui o tipo T é utilizado
  isLoading: boolean;
  count: number;
  children: ReactNode;
}

export const CardGrid = <T extends BaseDataCard>({
  data,
  isLoading,
  count,
  children,
}: CardGridProps<T>) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="row-span-12 overflow-y-scroll [&::-webkit-scrollbar]:hidden"
    >
      <div
        className={`${
          data && data.length === 0
            ? "flex justify-center"
            : "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        } w-full`}
      >
        {isLoading
          ? Array.from({ length: count }).map((_, index) => (
              <Skeleton key={index} className="h-40" />
            ))
          : children}

        {data && data.length === 0 && <Empty />}
      </div>
    </motion.div>
  );
};
