import { useState, useEffect } from "react";

export const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(items);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const changePage = (page: number) => {
    setItemsToShow(paginateItems(items, page));
  };

  const paginateItems = (itemsToPrepare, pageToChange) => {
    setCurrentPage(pageToChange);
    if (pageToChange === 1) {
      return [...itemsToPrepare.slice(0, itemsPerPage + 1)];
    }
    return [
      ...itemsToPrepare.slice(
        (pageToChange - 1) * itemsPerPage + 1,
        (pageToChange - 1) * itemsPerPage + 1 + itemsPerPage
      ),
    ];
  };

  useEffect(() => {
    setNumberOfPages(1 + Math.ceil(items.length / itemsPerPage));
    setItemsToShow(paginateItems(items, 1));
  }, items);

  useEffect(() => {}, [items]);

  return {
    itemsToShow,
    paginateItems,
    currentPage,
    changePage,
    numberOfPages,
  };
};
