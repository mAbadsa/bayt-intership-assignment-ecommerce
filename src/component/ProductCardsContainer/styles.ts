import styled from "styled-components";
import { devices } from "../../helpers/mediaQuery";

export const CardsContainer = styled("main")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  padding: 1rem;

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardHeader = styled("div")`
  overflow: hidden;
  max-height: 280px;
`;

export const CardDetails = styled("div")`
  padding-inline: 8px;
`;

export const CardTitle = styled("h3")`
  margin-block: 16px;
  // text-align: center;
`;

export const CardBody = styled("p")`
  // text-align: center;
  margin-block: 8px;
  font-size: 14px;
`;

export const ProductPrice = styled("p")`
  text-align: center;
  color: #27c8a3;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const ImageBox = styled("div")`
  padding-top: 100%;
  position: relative;
`;

export const Image = styled("img")`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
`;

export const CardAction = styled("div")`
  width: 100%;
`;

export const RatingStarContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-block: 8px;
`;

