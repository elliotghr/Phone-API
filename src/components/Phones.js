import { useState } from "react";
import PhonesDetail from "./PhonesDetail";
import PhonesMarcaSelect from "./PhonesMarcaSelect";
import PhonesModeloSelect from "./PhonesModeloSelect";

const Phones = () => {
  const [marca, setMarca] = useState(null);
  const [modelos, setModelos] = useState(null);

  return (
    <div>
      <h1>Phones API</h1>
      <PhonesMarcaSelect
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
      )}
    </div>
  );
};

export default Phones;
