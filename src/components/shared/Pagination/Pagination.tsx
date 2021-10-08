import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.styled.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

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

  const handlePageClick = (e) => {
    const selectedPage = e.selected + 1;
    changePage(selectedPage);
  };

  return (
    <div className="flex pagination-container w-full justify-center xl:justify-end">
      <span
        className={`previous-button text-2xl  ${
          currentPage === 1
            ? "text-customGrey pointer-events-none"
            : "text-customRed cursor-pointer"
        }
        ${numberOfPages <= 3 ? "previous-button-hidden" : ""}
        `}
        onClick={() => handlePageClick({ selected: 0 })}
      >
        <BiChevronsLeft />
      </span>
      <span
        className={`previous-button text-2xl  ${
          currentPage === 1
            ? "text-customGrey pointer-events-none"
            : "text-customRed cursor-pointer"
        }`}
        onClick={() => handlePageClick({ selected: currentPage - 2 })}
      >
        <BsArrowLeftShort />
      </span>
      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"break-me"}
        forcePage={currentPage - 1}
        pageCount={numberOfPages - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <span
        className={`previous-button text-2xl  ${
          currentPage >= numberOfPages - 1
            ? "text-customGrey pointer-events-none"
            : "text-customRed cursor-pointer"
        }`}
        onClick={() => handlePageClick({ selected: currentPage })}
      >
        <BsArrowRightShort />
      </span>
      <span
        className={`previous-button text-2xl  ${
          currentPage >= numberOfPages - 1
            ? "text-customGrey pointer-events-none"
            : "text-customRed cursor-pointer"
        }
        ${numberOfPages <= 3 ? "previous-button-hidden" : ""}
        `}
        onClick={() => handlePageClick({ selected: numberOfPages - 2 })}
      >
        <BiChevronsRight />
      </span>
    </div>
  );
};
