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
        <header>
          <nav>
            <h1 className="margin-bottom-1">Phones API</h1>
          </nav>
        </header>
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

{
  /* <PhonesMarcaSelect
        title="Marca"
        url={`https://phone-specs-api.azharimm.dev/brands`}
        handleEndpoint={(e) => {
          setMarca(e.target.value);
        }}
      ></PhonesMarcaSelect>
      {marca && (
        <PhonesModeloSelect
          title="Modelo"
          url={`https://phone-specs-api.azharimm.dev/brands/${marca}`}
          handleEndpoint={(e) => {
            setModelos(e.target.value);
          }}
        ></PhonesModeloSelect>
      )}
      {modelos && (
        <PhonesDetail
          url={`https://phone-specs-api.azharimm.dev/${modelos}`}
        ></PhonesDetail>
      )} */
}
export default Phones;
