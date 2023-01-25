import React from "react";
import { Primary } from "./Button.stories";

import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  size = "medium",
  variant = "primary",
  color,
  label,
  style,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      style={{ ...style, color }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

