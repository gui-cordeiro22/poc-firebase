// Dependencies
import { Fragment, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Components
import { Form } from "../../components/compositions/form";
import { Input } from "../../components/elements/input";
import { Button } from "../../components/elements/button";

// Pages
import { SignInPage } from "../../components/pages/sign-in-page";

// Hooks
import { UseAuthentication } from "../../hooks/use-authentication";

export const SignIn: FunctionComponent = () => {
  const { register, handleSubmit, reset } = useForm();

  const { loginUser } = UseAuthentication();

  const route = useNavigate();

  const handleLogInUser = async (data: any) => {
    try {
      const { email, password } = data;

      const isSigned = await loginUser(email, password);

      if (!!isSigned) {
        reset();
        route("/logado");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <SignInPage
        formSection={
          <Form
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
