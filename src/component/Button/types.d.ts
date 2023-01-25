import React, { CSSProperties } from "react";

export interface ButtonProps {
  color?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  label: string;
  style?: CSSProperties;
  onClick?: () => void;
}

