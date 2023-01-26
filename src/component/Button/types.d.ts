import React, { CSSProperties, IntrinsicAttributes } from "react";

export interface ButtonProps extends IntrinsicAttributes {
  color?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  label: string;
  style?: CSSProperties;
  onClick?: () => void;
}

