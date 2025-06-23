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

export type SignUpFormElements = {
  nameInputCompositions: ReactNode;
  emailInputCompositions: ReactNode;
  emailConfirmationInputCompositions: ReactNode;
  phoneInputCompositions: ReactNode;
  passwordInputCompositions: ReactNode;
  acceptedTermsInputComposition: ReactNode;
};

export type SignUpFormAction = {
  handleClick: () => void;
};

export type SignUpFormProps = SignUpFormElements & SignUpFormAction;
