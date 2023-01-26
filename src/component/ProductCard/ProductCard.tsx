import { FC } from "react";

import { Button } from "../Button";
import { smartTrim } from "../../helpers/smartTrim";
import {
  Card,
  CardHeader,
  CardDetails,
  CardTitle,
  CardBody,
  ProductPrice,
  ImageBox,
  Image,
  CardAction,
} from "./styles";
import { ProductCardProps } from "./types";

export const ProductCard = ({
  title,
  description,
  images,
  price,
}: ProductCardProps) => {
  return (
    <Card>
      <CardHeader>
        <ImageBox role="img" aria-label="Product Card Image">
          <Image src={`${images[0]}`} alt={title} />
        </ImageBox>
      </CardHeader>
      <CardDetails>
        <CardTitle>{smartTrim(title, 50, " ", "...")}</CardTitle>
        <CardBody>{smartTrim(description, 100, " ", "...")}</CardBody>
        <ProductPrice>$ {price}</ProductPrice>
      </CardDetails>
      <CardAction>
        <Button
          variant="primary"
          label="ADD TO CART"
          style={{
            borderRadius: 0,
            borderBottomLeftRadius: "0.375rem",
            borderBottomRightRadius: "0.375rem",
          }}
        />
      </CardAction>
    </Card>
  );
};

