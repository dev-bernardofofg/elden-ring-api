import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

// Tipos genéricos
interface FetchDataProps<T> {
  data: T[];
  isLoading: boolean;
  count: number;
  nameFilter: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setNameFilter: Dispatch<SetStateAction<string>>
}

export const useFetchData = <T>(
  apiUrl: string,
  initialPage: number = 0
): FetchDataProps<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(16);

  const navigate = useNavigate();
  const location = useLocation();

  // Extrair parâmetros da URL
  const searchParams = new URLSearchParams(location.search);
  const pageParam = searchParams.get("page");
  const nameFilterParam = searchParams.get("name") || '';

  const [nameFilter, setNameFilter] = useState(nameFilterParam);
  const [page, setPage] = useState(
    pageParam ? parseInt(pageParam) : initialPage
  );

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiUrl}?limit=16`, {
        params: {
          name: nameFilter,
          page: page,
        },
      });

      setData(response.data.data);
      setCount(response.data.count);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (nameFilter) {
      queryParams.set("name", nameFilter);
      queryParams.set("page", "0");
      setPage(0);
    }

    if (page !== 0) queryParams.set("page", page.toString());

    navigate({ search: queryParams.toString() });
    getData();
  }, [nameFilter, page, navigate]);

  return {
    data,
    isLoading,
    count,
    nameFilter,
    page,
    setPage,
    setNameFilter,
  };
};
