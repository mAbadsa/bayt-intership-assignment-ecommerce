import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../ProductCard/ProductCard";
import { CardsContainer } from "./styles";
import { ProductCardProps } from "../ProductCard/types";
import { useGetProductsQuery, setProducts } from "../../redux";

export const ProductCardsContainer = ({
  products,
}: {
  products: ProductCardProps[];
}) => {
  const sortBy = useSelector((state: any) => state.products.sortBy as string);

  if (sortBy === "name") {
    products = products.slice().sort((a, b) => a.title.localeCompare(b.title));
  } else {
    products = products.slice().sort((a, b) => a.price - b.price);
  }

  const productsElems: ReactNode[] = products.map(
    ({ id, ...rest }): ReactNode => {
      return <ProductCard id={id} key={id} {...rest} />;
    }
  );
  return (
    <CardsContainer aria-label="Products Card Container">
      {productsElems}
    </CardsContainer>
  );
};

