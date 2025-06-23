// Dependencies
import type { ReactNode } from "react";

export type SignUpFormData = {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
  termsAccepted: boolean;
};

export type SignInFormElements = {
  nameInputCompositions: ReactNode;
  emailInputCompositions: ReactNode;
  emailConfirmationInputCompositions: ReactNode;
  phoneInputCompositions: ReactNode;
  passwordInputCompositions: ReactNode;
  acceptedTermsInputComposition: ReactNode;
};

export type SignInFormAction = {
  handleClick: () => void;
};

export type SignInFormProps = SignInFormElements & SignInFormAction;
