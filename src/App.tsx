// Dependencies
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";

// Pages
import Home from "./pages/home-page";

function App() {
  return (
    <Fragment>
      <Home />
      <ToastContainer theme="light" position="bottom-right" limit={1} />
    </Fragment>
  );
}

export default App;
