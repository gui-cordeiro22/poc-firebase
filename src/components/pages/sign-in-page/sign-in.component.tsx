// Dependencies
import { Fragment, type FunctionComponent } from "react";

// Types
import type { SignInPageProps } from "./sign-in.types";

export const SignInPage: FunctionComponent<SignInPageProps> = ({
  formSection,
}) => {
  return <Fragment>{formSection}</Fragment>;
};
