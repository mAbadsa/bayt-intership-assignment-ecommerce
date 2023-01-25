import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../component/Actions";
import { ProductCardsContainer } from "../../component/ProductCardsContainer";

import {
  useGetProductsQuery,
  useGetAllProductsQuery,
  setProducts,
  setProductsCount,
} from "../../redux";
import { ProductsLayout, MainContent, Header, CountShow } from "./styles";
import { Pagination } from "../../component/Pagination";
import { ProductsState } from "../../redux/slices/type";
import { useEffect } from "react";

export const Products = () => {
  const dispatch = useDispatch();
  const { productsOffset, categoryId, products, productsCount } = useSelector(
    (state: any) => state.products as ProductsState
  );
  const { data, isLoading } = useGetProductsQuery({
    offset: productsOffset,
    categoryId,
  });
  useEffect(() => {
    !isLoading && dispatch(setProducts(data as any));
  }, [data, isLoading]);

  return (
    <ProductsLayout>
      <Actions />
      <MainContent>
        <Header>
          <CountShow>
            {!isLoading
              ? `${productsOffset + 6}/${productsCount}`
              : "looding..."}
          </CountShow>
        </Header>
        <ProductCardsContainer products={products} />
        {!isLoading && <Pagination />}
      </MainContent>
    </ProductsLayout>
  );
};

