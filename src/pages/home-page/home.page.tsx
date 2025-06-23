// Dependencies
import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

// Components
import { SignInForm } from "../../components/compositions/sign-in-form";

// Pages
import { HomePage } from "../../components/pages/home-page";

export const Home: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();

  const handleCreateUser = (data: any) => {
    console.log(data);
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
