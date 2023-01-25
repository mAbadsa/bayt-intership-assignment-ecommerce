import { devices } from "../../../helpers/mediaQuery";
import styled from "styled-components";

export const FilterContainer = styled("div")`
  font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled("h6")`
  margin-bottom: 0.25rem;
  font-size: 12px;

  @media ${devices.tablet} {
    margin-top: 0px;
    padding-right: 8px;
  }
`;

export const Form = styled("form")`
  padding-right: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Label = styled("label")`
  display: inline-block;
  padding-bottom: 4px;
`;

