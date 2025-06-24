// Dependencies
import type { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

// Components
import { SignUpForm } from "../../components/compositions/sign-up-form";
import { Button } from "../../components/elements/button";
import { Input } from "../../components/elements/input";

// Pages
import { HomePage } from "../../components/pages/home-page";

// Hooks
import { UseAuthentication } from "../../hooks/use-authentication";

export const Home: FunctionComponent = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createUser } = UseAuthentication();

  const handleCreateUser = async (data: any) => {
    try {
      const { name, email, phone, password, acceptedTerms } = data;

      await createUser({ name, email, phone, password, acceptedTerms });

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HomePage
        siginFormSection={
          <SignUpForm
            title="Criar usuário"
            handleClick={handleSubmit(handleCreateUser)}
            nameInputCompositions={
              <Input type="text" placeholder="Seu nome" {...register("name")} />
            }
            emailInputCompositions={
              <Input
                type="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
            }
            emailConfirmationInputCompositions={
              <Input
                type="email"
                placeholder="Confirmar e-mail"
                {...register("confirmationEmail")}
              />
            }
            phoneInputCompositions={
              <Input type="text" placeholder="Celular" {...register("phone")} />
            }
            passwordInputCompositions={
              <Input
                type="password"
                placeholder="Sua senha"
                {...register("password")}
              />
            }
            acceptedTermsInputComposition={
              <input type="checkbox" {...register("acceptedTerms")} required />
            }
            buttonElementCompositions={
              <Button type="submit" label="Cadastrar" />
            }
          />
        }
      />
    </>
  );
};
