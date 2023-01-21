import { useFetch } from "../hooks/useFetch";
import Message from "./Message";
import Loader from "./Loader";
import PhonesMarcaOptions from "./PhonesMarcaOptions";

const PhonesMarcaSelect = ({ title, url, handleEndpoint }) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }
  let options = data.data;

  return (
    <>
      <label htmlFor={title}>{title}</label>
      {loading && <Loader></Loader>}
      <select onChange={handleEndpoint} name={title} id={title}>
        <option value="">Selecciona una {title}</option>
        {data &&
          options.map((el, index) => (
            <PhonesMarcaOptions key={index} el={el}></PhonesMarcaOptions>
          ))}
      </select>
    </>
  );
};

export default PhonesMarcaSelect;
