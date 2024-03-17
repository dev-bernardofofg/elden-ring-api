import { Dispatch, SetStateAction } from "react";
import {
  Pagination as PaginationShadcn,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { Button } from "../ui/button";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  itemsPerPage?: number;
  totalCount: number;
}

export const Pagination = ({
  page,
  setPage,
  itemsPerPage,
  totalCount,
}: PaginationProps) => {
  const handleOnPagination = (type: "increment" | "decrement") => {
    if (type === "decrement") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <PaginationShadcn>
      <PaginationContent className="w-full justify-between p-4">
        <PaginationItem>
          <Button
            className="bg-stone-700 hover:bg-yellow-950 cursor:pointer disabled:cursor-not-allowed min-w-24"
            onClick={() => handleOnPagination("decrement")}
            disabled={page === 0}
          >
            Voltar
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            className="bg-stone-700 hover:bg-yellow-950 cursor:pointer disabled:cursor-not-allowed min-w-24"
            onClick={() => handleOnPagination("increment")}
            disabled={totalCount !== itemsPerPage}
          >
            Avançar
          </Button>
        </PaginationItem>
      </PaginationContent>
    </PaginationShadcn>
  );
};
