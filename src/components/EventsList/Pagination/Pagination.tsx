import React from "react";

interface PaginationProps {
  numberOfPages: number;
  changePage: (pageOffset: number) => void;
}
export const Pagination = ({ numberOfPages, changePage }: PaginationProps) => (
  <div>
    <span onClick={() => changePage(1)}>1</span>
    <span onClick={() => changePage(2)}>2</span>
    <span onClick={() => changePage(3)}>3</span>
    <span onClick={() => changePage(4)}>4</span>
    <span onClick={() => changePage(5)}>5</span>
  </div>
);
