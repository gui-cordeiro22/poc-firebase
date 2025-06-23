// Dependencies
import type { ReactNode } from "react";

export type SignInFormElements = {
  nameInputCompositions: ReactNode;
  emailInputCompositions: ReactNode;
  emailConfirmationInputCompositions: ReactNode;
  phoneInputCompositions: ReactNode;
  passwordInputCompositions: ReactNode;
  acceptedTermsInputComposition: ReactNode;
};

export type SignInFormProps = SignInFormElements;
