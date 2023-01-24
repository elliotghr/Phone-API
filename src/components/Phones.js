import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import PhonesContainer from "./PhonesContainer";
import PhonesDetail from "./PhonesDetail";
import PhonesSearch from "./PhonesSearch";

const Phones = () => {
  const [search, setSearch] = useState(null);
  const [dataPhones, setDataPhones] = useState(null);
  const [dataDetails, setDataDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (phone) => {
    setSearch(phone);
  };

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    let api = `https://phone-specs-api.azharimm.dev/search?query=${search}`;
    helpHttp()
      .get(api)
      .then((res) => {
        console.log(res);
        if (res.err) {
          setError(res);
        } else {
          setError(null);
          setDataPhones(res);
        }
      })
      .finally((res) => {
        setLoading(false);
      });
  }, [search]);

  const handleViewSpecs = (url) => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.err) {
          setError(res);
        } else {
          setError(null);
          setDataDetails(res);
        }
      })
      .finally((res) => {
        setLoading(false);
      });
  };

  return (
    <section className="main-content">
      <h1 className="margin-bottom-1">Phones API</h1>
      <PhonesSearch handleSearch={handleSearch}></PhonesSearch>
      {loading && <Loader></Loader>}
      {error && (
        <Message
          msg={`${error.statusText}, status: ${error.status}`}
          bgColor="red"
        ></Message>
      )}
      {search && !loading && (
        <PhonesContainer
          data={dataPhones}
          handleViewSpecs={handleViewSpecs}
        ></PhonesContainer>
      )}
      <PhonesDetail data={dataDetails}></PhonesDetail>

      {/* <PhonesMarcaSelect
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
      )} */}
    </section>
  );
};

export default Phones;
