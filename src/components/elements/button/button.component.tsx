// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container } from "./button.styles";

// Types
import type { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  handleClick,
}) => {
  return <Container onClick={handleClick}>{label}</Container>;
};
