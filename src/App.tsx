// Dependencies
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";

// Pages
import Home from "./pages/home-page";

// Styles
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
      <ToastContainer theme="light" position="bottom-right" limit={1} />
    </Fragment>
  );
}

export default App;
