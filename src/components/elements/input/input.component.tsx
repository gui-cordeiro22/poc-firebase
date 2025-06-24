// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container } from "./input.styles";

// Types
import type { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({
  placeholder,
  ...defaultInputProps
}) => {
  return <Container {...defaultInputProps} placeholder={placeholder} />;
};
