// Dependencies
import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

// Components
import { SignInForm } from "../../components/compositions/sign-in-form";

// Pages
import { HomePage } from "../../components/pages/home-page";

// Hooks
import { UseAuthentication } from "../../hooks/use-authentication";

export const Home: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();

  const { createUser } = UseAuthentication();

  const handleCreateUser = async (data: any) => {
    try {
      console.log(data);

      const { name, email, phone, password, termsAccepted } = data;

      await createUser({ name, email, phone, password, termsAccepted });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HomePage
        siginFormSection={
          <SignInForm
            handleClick={handleSubmit(handleCreateUser)}
            nameInputCompositions={
              <input type="text" placeholder="Seu nome" {...register("name")} />
            }
            emailInputCompositions={
              <input
                type="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
            }
            emailConfirmationInputCompositions={
              <input
                type="email"
                placeholder="Confirmar e-mail"
                {...register("confirmationEmail")}
              />
            }
            phoneInputCompositions={
              <input type="text" placeholder="Celular" {...register("phone")} />
            }
            passwordInputCompositions={
              <input
                type="password"
                placeholder="Sua senha"
                {...register("password")}
              />
            }
            acceptedTermsInputComposition={
              <input type="checkbox" {...register("acceptedTerms")} />
            }
          />
        }
      />
    </>
  );
};
