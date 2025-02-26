import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ProductsPagination({
  pagesCount,
  createQueryString,
  pathname,
  page,
}: {
  pagesCount: number;
  createQueryString: (name: string, value: string) => string;
  pathname: string;
  page: number;
}) {
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={currentPage === 1}
              href={
                pathname + "?" + createQueryString("page", `${currentPage - 1}`)
              }
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={
                pathname + "?" + createQueryString("page", `${currentPage}`)
              }
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              disabled={currentPage === pagesCount}
              href={
                pathname + "?" + createQueryString("page", `${currentPage + 1}`)
              }
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ProductsPagination;
