import { useSearchParams } from "react-router-dom";
export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const next = () => {
    setSearchParams({ page: parseInt(searchParams.get("page")) + 1 });
  };
  const prev = () => {
    setSearchParams({ page: parseInt(searchParams.get("page")) - 1 });
  };
  const setPagination = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };
  return {
    next,
    prev,
    setPagination,
    page: searchParams.get("page"),
  };
};
