import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PhonesDetail from "../pages/PhonesDetail";
import Navbar from "./Navbar";

const Phones = () => {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/:slug">
            <PhonesDetail></PhonesDetail>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default Phones;
