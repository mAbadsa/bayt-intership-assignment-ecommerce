import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import { devices } from "../../helpers/mediaQuery";

export const ActionsContainer = styled("section")<{}>`
  ${({}) => `
    font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #c7c7c7;
    max-width: 200px;
    height: 100vh;
    align-items: start;

    @media ${devices.tablet} {
      flex-direction: row;
      border-right: none;
      border-bottom: 1px solid #c7c7c7;
      max-width: 100%;
      height: 100px;
      align-items: center;
    }

    @media ${devices.mobileL} {
      flex-direction: row;
      justify-content: space-around
    }
  `}
`;

export const Divider = styled("hr")<{}>`
  ${({}) => `
    width: 100%;
    @media ${devices.tablet} {
        display: none;
    }
  `}
`;

