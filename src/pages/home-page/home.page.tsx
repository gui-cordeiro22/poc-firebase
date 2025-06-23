// Dependencies
import type { FunctionComponent } from "react";

// Components
import { SignInForm } from "../../components/compositions/sign-in-form";

// Pages
import { HomePage } from "../../components/pages/home-page";

export const Home: FunctionComponent = () => {
  return (
    <>
      <HomePage
        siginFormSection={
          <SignInForm
            handleClick={() => console.log("Enviando")}
            nameInputCompositions={<input type="text" placeholder="Seu nome" />}
            emailInputCompositions={
              <input type="email" placeholder="Seu e-mail" />
            }
            emailConfirmationInputCompositions={
              <input type="email" placeholder="Confirmar e-mail" />
            }
            phoneInputCompositions={<input type="text" placeholder="Celular" />}
            passwordInputCompositions={
              <input type="password" placeholder="Sua senha" />
            }
            acceptedTermsInputComposition={<input type="checkbox" />}
          />
        }
      />
    </>
  );
};
