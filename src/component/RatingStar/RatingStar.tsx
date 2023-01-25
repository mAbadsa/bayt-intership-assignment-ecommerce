import React from "react";

import { StyledRatingStar } from "./styles";
import { RatingStarProps } from "./types";

export const RatingStar = ({ initialValue, ...props }: RatingStarProps) => {
  const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045",
  ];
  return (
    <StyledRatingStar
      fillColorArray={fillColorArray}
      readonly
      transition
      size={20}
      initialValue={initialValue}
      {...props}
    />
  );
};

