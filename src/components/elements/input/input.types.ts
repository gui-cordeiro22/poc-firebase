// Types
import type { InputHTMLAttributes } from "react";

export type InputData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  placeholder: string;
};

export type InputProps = InputData;
