import styled from "styled-components";
import { devices } from "../../helpers/mediaQuery";

export const Card = styled("div")`
  font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
  min-width: 25%;
  box-shadow: 0 0px 10px 2px #c7c7c7aa;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled("div")`
  overflow: hidden;
  max-height: 180px;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  @media ${devices.laptop} {
    max-height: 160px;
  }

  @media ${devices.tablet} {
    max-height: 140px;
  }

  @media ${devices.mobileL} {
    max-height: 200px;
  }
`;

export const CardDetails = styled("div")`
  padding-inline: 8px;
`;

export const CardTitle = styled("h3")`
  margin-block: 16px;
  font-size: 16px;
  margin-bottom: 8px;
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
  margin-top: auto;
`;

export const ImageBox = styled("div")`
  padding-top: 100%;
  position: relative;
`;

export const Image = styled("img")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
`;

export const CardAction = styled("div")`
  width: 100%;
  margin-top: auto;
  height: auto;
`;

export const RatingStarContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-block: 8px;
`;

