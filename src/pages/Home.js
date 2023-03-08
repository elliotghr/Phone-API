import React, { useContext } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PhonesContainer from "../components/PhonesContainer";
import PhonesForm from "../components/PhonesForm";
import { PhoneContext } from "../context/PhoneContext";

const Home = () => {
  const { loading, error, search, dataDetails } = useContext(PhoneContext);

  return (
    <div>
      <PhonesForm></PhonesForm>
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
    </div>
  );
};

export default Home;
