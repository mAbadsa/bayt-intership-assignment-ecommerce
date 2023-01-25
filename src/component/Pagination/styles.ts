import styled from "styled-components";

export const StyledPagination = styled("button")`
  ${() => `
    border: none;
    display: flex;
    justify-content: center;
    :focus-visible {
      border: none;
      outline: none;
    }
    :focus {
      border: none;
      outline: none;
    }
    .disabled {
      background: #959595;
      border: 1px solid #959595;
      :hover {
        background: #959595;
        border: 1px solid #959595;
        cursor: not-allowed;
        a {
          color: #fff;
        }
      }
    }
    ul {
      display: flex;
      :focus-visible {
        outline: none;
      }
      li {
        list-style: none;
        padding: 4px;
        margin-inline: 2px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: white;
        border: 1px solid #27c8a3;
        background: #27c8a3;
        :hover {
          background: #FFF;
          a {
            color: #27c8a3;
          }
        }
        a {
          color: white;
        }
        &.selected {
          background: #FFF;
          a {
            color: #27c8a3;
          }
        }
      }
    }
  `}
`;

