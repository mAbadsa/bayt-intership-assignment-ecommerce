import styled from "styled-components";
import { devices } from "../../helpers/mediaQuery";

export const ProductsLayout = styled("div")`
  font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;

  @media ${devices.laptop} {
    grid-template-columns: 200px auto;
    grid-template-rows: auto;
  }

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 100px auto;
  }
`;

export const MainContent = styled("main")`
  font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50px auto 100px;
`;

export const Header = styled("header")`
  padding: 1rem;
`;

export const CountShow = styled("h3")`
  margin-block: 0.25rem;
  text-align: left;
`;

