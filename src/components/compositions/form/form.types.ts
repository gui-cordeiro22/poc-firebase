// Dependencies
import type { ReactNode } from "react";

export type SignUpFormResponseData = {
  name: string;
  email: string;
  confirmEmail: string;
  phone: string;
  password: string;
  termsAccepted: boolean;
};

export type FormData = {
  title: string;
};

export type FormElements = {
  nameInputCompositions?: ReactNode;
  emailInputCompositions?: ReactNode;
  emailConfirmationInputCompositions?: ReactNode;
  phoneInputCompositions?: ReactNode;
  passwordInputCompositions?: ReactNode;
  acceptedTermsInputComposition?: ReactNode;
  buttonElementCompositions?: ReactNode;
};

export type FormAction = {
  handleClick: () => void;
};

export type FormProps = FormData & FormElements & FormAction;
