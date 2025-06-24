// Dependencies
import { Fragment, type FunctionComponent } from "react";

// Pages
import { SignedPage } from "../../components/pages/signed-page";

export const Signed: FunctionComponent = () => {
  return (
    <Fragment>
      <SignedPage title="Você está logado!" />
    </Fragment>
  );
};
