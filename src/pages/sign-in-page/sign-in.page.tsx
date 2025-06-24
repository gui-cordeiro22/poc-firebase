// Dependencies
import { Fragment, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";

// Components
import { SignUpForm } from "../../components/compositions/sign-up-form";
import { Input } from "../../components/elements/input";
import { Button } from "../../components/elements/button";

// Pages
import { SignInPage } from "../../components/pages/sign-in-page";

// Hooks
import { UseAuthentication } from "../../hooks/use-authentication";

export const SignIn: FunctionComponent = () => {
  const { register, handleSubmit, reset } = useForm();

  const { loginUser } = UseAuthentication();

  const handleLogInUser = async (data: any) => {
    try {
      const { email, password } = data;

      await loginUser(email, password);

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <SignInPage
        formSection={
          <SignUpForm
            title="Acessar sua conta"
            handleClick={handleSubmit(handleLogInUser)}
            emailInputCompositions={
              <Input
                type="email"
                placeholder="Seu e-mail"
                {...register("email")}
              />
            }
            passwordInputCompositions={
              <Input
                type="password"
                placeholder="Sua senha"
                {...register("password")}
              />
            }
            buttonElementCompositions={<Button type="submit" label="Entrar" />}
          />
        }
      />
    </Fragment>
  );
};
