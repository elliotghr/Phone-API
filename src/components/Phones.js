import { useContext } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { PhoneContext } from "../context/PhoneContext";
import Loader from "./Loader";
import Message from "./Message";
import Navbar from "./Navbar";
import PhonesContainer from "./PhonesContainer";
import PhonesDetail from "./PhonesDetail";
import PhonesSearch from "./PhonesSearch";

const Phones = () => {
  const { loading, error, search, dataDetails } = useContext(PhoneContext);
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <PhonesSearch></PhonesSearch>
            {loading && <Loader></Loader>}
            {error && (
              <Message
                msg={`${error.statusText}, status: ${error.status}`}
                bgColor="red"
              ></Message>
            )}
            {search && !loading && !dataDetails && (
              <PhonesContainer></PhonesContainer>
            )}
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
