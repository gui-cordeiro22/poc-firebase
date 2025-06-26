// Dependencies
import { Fragment, type FunctionComponent } from "react";

// Types
import type { HomePageProps } from "./home.types";

export const HomePage: FunctionComponent<HomePageProps> = ({
  siginFormSection,
}) => {
  return (
    <Fragment>
      <h1 style={{ color: "#fff" }}>Lista de Usuários</h1>
      {siginFormSection}
    </Fragment>
  );
};
