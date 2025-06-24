// Dependencies
import type { FunctionComponent } from "react";

// Styles
import {
  Container,
  TermsOfUseLabel,
  TermsOfUseSectionWrapper,
  Title,
} from "./form.styles";

// Types
import type { FormProps } from "./form.types";

export const Form: FunctionComponent<FormProps> = ({
  title,
  nameInputCompositions,
  emailInputCompositions,
  emailConfirmationInputCompositions,
  phoneInputCompositions,
  passwordInputCompositions,
  acceptedTermsInputComposition,
  buttonElementCompositions,
  handleClick,
}) => {
  return (
    <Container onSubmit={handleClick}>
      <Title>{title}</Title>

      {nameInputCompositions}

      {emailInputCompositions}

      {emailConfirmationInputCompositions}

      {phoneInputCompositions}

      {passwordInputCompositions}

      <TermsOfUseSectionWrapper>
        {acceptedTermsInputComposition}

        {!!acceptedTermsInputComposition && (
          <TermsOfUseLabel>Li e aceito os termos de uso.</TermsOfUseLabel>
        )}
      </TermsOfUseSectionWrapper>

      {buttonElementCompositions}
    </Container>
  );
};
