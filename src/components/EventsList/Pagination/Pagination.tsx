import React from "react";

interface PaginationProps {
  numberOfPages: number;
  changePage: (pageOffset: number) => void;
  currentPage: number;
}
export const Pagination = ({
  numberOfPages,
  changePage,
  currentPage,
}: PaginationProps) => {
  const pages = [];

  for (let i = 1; i < numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => (
        <span key={page} onClick={() => changePage(page)}>
          {page}
        </span>
      ))}
    </div>
  );
};
