// Dependencies
import { Fragment, type FunctionComponent } from "react";

// Types
import type { HomePageProps } from "./home.types";

export const HomePage: FunctionComponent<HomePageProps> = ({
  siginFormSection,
}) => {
  return <Fragment>{siginFormSection}</Fragment>;
};
