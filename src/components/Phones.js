import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PhonesDetail from "../pages/PhonesDetail";
import Navbar from "./Navbar";
import PhonesForm from "./Form";
import SearchPhone from "../pages/SearchPhone";
import Error404 from "../pages/Error404";

const Phones = () => {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <PhonesForm></PhonesForm>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/search/:phone">
            <SearchPhone></SearchPhone>
          </Route>
          <Route exact path="/phone/:slug">
            <PhonesDetail></PhonesDetail>
          </Route>
          <Route exact path="*">
            <Error404></Error404>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default Phones;
