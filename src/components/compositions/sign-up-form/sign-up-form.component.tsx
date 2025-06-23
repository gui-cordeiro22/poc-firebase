// Dependencies
import type { FunctionComponent } from "react";

// Styles
import {
  Container,
  TermsOfUseLabel,
  TermsOfUseSectionWrapper,
} from "./sign-up-form.styles";

// Types
import type { SignUpFormProps } from "./sign-up-form.types";

export const SignUpForm: FunctionComponent<SignUpFormProps> = ({
  title,
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
      <h1>{title}</h1>

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
