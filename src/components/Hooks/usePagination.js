import { useMemo, useState } from "react";
import { getPagesArray } from "../../utils/pages";

export const usePagination = () => {
  const [pagination, setPagination] = useState({
    totalPages: 0,
    limit: 10,
    page: 1,
  });

  const pagesArray = useMemo(() => {
    return getPagesArray(pagination.totalPages);
  }, [pagination.totalPages]);

  return [pagesArray, pagination, setPagination];
};
