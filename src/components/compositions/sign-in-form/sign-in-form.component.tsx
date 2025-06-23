// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container } from "./sign-in-form.styles";

// Types
import type { SignInFormProps } from "./sign-in-form.types";

export const SignInForm: FunctionComponent<SignInFormProps> = ({
  nameInputCompositions,
  emailInputCompositions,
  emailConfirmationInputCompositions,
  phoneInputCompositions,
  passwordInputCompositions,
  acceptedTermsInputComposition,
}) => {
  return (
    <Container>
      {nameInputCompositions}

      {emailInputCompositions}

      {emailConfirmationInputCompositions}

      {phoneInputCompositions}

      {passwordInputCompositions}

      {acceptedTermsInputComposition}
    </Container>
  );
};
