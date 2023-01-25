import styled from "styled-components";

export const StyledButton = styled("button")<{ size: string; variant: string }>`
  ${({ size, variant }) => `
    font-family: "Montserrat", Inter, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    // border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    width: 100%;
    ${
      size === "large"
        ? `
        font-size: 16px;
        padding: 12px 24px;
      `
        : ""
    }
    ${
      size === "small"
        ? `
        font-size: 12px;
        padding: 10px 16px;
      `
        : ""
    }
    ${
      size === "medium"
        ? `
        font-size: 14px;
        padding: 11px 20px;
      `
        : ""
    }
    ${
      variant === "primary"
        ? `
        color: white;
        background-color: #27c8a3;
      `
        : ""
    }
    ${
      variant === "secondary"
        ? `
        color: #27c8a3;
        background-color: transparent;
        box-shadow: rgba(39, 200, 163, 0.85) 0px 0px 0px 1px inset;
      `
        : ""
    }
  `}
`;

