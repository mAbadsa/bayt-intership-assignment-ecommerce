import styled from "styled-components";
import { Rating } from "react-simple-star-rating";

export const StyledRatingStar = styled(Rating)<{}>`
  ${({}) => `
    font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    // border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    width: 100%;
  `}
`;

