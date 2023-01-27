import { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";
import Loader from "./Loader";
import Message from "./Message";
import PhonesContainer from "./PhonesContainer";
import PhonesDetail from "./PhonesDetail";
import PhonesSearch from "./PhonesSearch";

const Phones = () => {
  const { loading, error, search, dataDetails } = useContext(PhoneContext);

  return (
    <>
      <section className="main-content">
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
      </section>
      <PhonesDetail></PhonesDetail>
    </>
  );
};

export default Phones;
