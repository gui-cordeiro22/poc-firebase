// Dependencies
import type { FunctionComponent } from "react";

// Styles
import {
  Container,
  TermsOfUseLabel,
  TermsOfUseSectionWrapper,
} from "./sign-in-form.styles";

// Types
import type { SignInFormProps } from "./sign-in-form.types";

export const SignInForm: FunctionComponent<SignInFormProps> = ({
  nameInputCompositions,
  emailInputCompositions,
  emailConfirmationInputCompositions,
  phoneInputCompositions,
  passwordInputCompositions,
  acceptedTermsInputComposition,
  handleClick,
}) => {
  return (
    <Container onSubmit={handleClick}>
      {nameInputCompositions}

      {emailInputCompositions}

      {emailConfirmationInputCompositions}

      {phoneInputCompositions}

      {passwordInputCompositions}

      <TermsOfUseSectionWrapper>
        {acceptedTermsInputComposition}

        <TermsOfUseLabel>Li e aceito os termos de uso.</TermsOfUseLabel>
      </TermsOfUseSectionWrapper>

      <button type="submit">Cadastrar</button>
    </Container>
  );
};
