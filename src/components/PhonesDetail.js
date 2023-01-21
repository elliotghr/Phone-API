import { useFetch } from "../hooks/useFetch";
import Message from "./Message";
import Loader from "./Loader";

const PhonesDetail = ({ url }) => {
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
  console.log(data);
  let options = data.data;
  return (
    <section>
      <h2>{options.phone_name}</h2>
      <article>
        <h3>Imagenes del {options.phone_name}</h3>
        <div className="img-container">
          <img src={options.phone_images[0]}></img>
          <img src={options.phone_images[1]}></img>
          <img src={options.phone_images[2]}></img>
          <img src={options.phone_images[3]}></img>
        </div>
      </article>
      <p>Fecha de lanzamiento: {options.release_date}</p>
    </section>
  );
};

export default PhonesDetail;
