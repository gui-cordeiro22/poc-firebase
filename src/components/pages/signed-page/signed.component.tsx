// Dependencies
import { type FunctionComponent } from "react";

// Types
import type { SignedPageProps } from "./signed.types";

export const SignedPage: FunctionComponent<SignedPageProps> = ({ title }) => {
  return <h1 style={{ color: "#fff" }}>{title}</h1>;
};
