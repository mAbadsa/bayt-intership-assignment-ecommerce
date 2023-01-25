import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  setProductsOffset,
  setProductsCount,
  useGetAllProductsQuery,
} from "../../redux";
import { StyledPagination } from "./styles";
import { Products } from "../../redux/slices/type";

export const Pagination = () => {
  const dispatch = useDispatch();
  const productsCount = useSelector(
    (state: any) => state.products.productsCount as number
  );

  const { data, isLoading } = useGetAllProductsQuery();

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 6) % productsCount;
    dispatch(setProductsOffset(newOffset));
  };

  useEffect(() => {
    !isLoading && dispatch(setProductsCount(data as Products));
  }, [data]);

  return (
    <StyledPagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        previousLabel={"<"}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(productsCount / 6)}
      />
    </StyledPagination>
  );
};

