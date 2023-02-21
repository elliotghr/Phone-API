import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import HeroImage from "./HeroImage";
import Loader from "./Loader";
import Message from "./Message";
import PhoneTable from "./PhoneTable";

const PhonesDetail = () => {
  let slug = useParams().slug;
  const { data, error, loading } = useFetch(
    `https://phone-specs-api.azharimm.dev/${slug}`
  );
  if (error) {
    return (
      <Message
        msg={`Ha ocurrio un error. <br> Es probable que el equipo '<span>${slug}</span>' no exista`}
        bgColor="#ce0000c2"
      ></Message>
    );
  }
  if (!data) return null;

  let options = data.data,
    specs = options.specifications,
    urlValue = `url('${options.phone_images[0]}')`;

  const findTitle = (query) => specs.find((el) => el.title === query);
  const SearchAttribute = (spec, value) => {
    let specValidation = specs.find((el) => el.title === spec);
    if (!specValidation) return;
    let valueValidation = specValidation.specs.find((el) => el.key === value);
    if (!valueValidation) return;
    return valueValidation.val[0];
  };

  let sizeScreen = SearchAttribute("Display", "Size"),
    processorSpeed = SearchAttribute("Platform", "CPU"),
    processor = SearchAttribute("Platform", "Chipset"),
    dimension = SearchAttribute("Body", "Dimensions"),
    color = SearchAttribute("Misc", "Colors"),
    memoryExpand = SearchAttribute("Memory", "Card slot"),
    sistemOperative = SearchAttribute("Platform", "OS"),
    selfieCamera = SearchAttribute("Selfie camera", "Single"),
    battery = SearchAttribute("Battery", "Type"),
    ram = SearchAttribute("Memory", "Internal"),
    nfc = SearchAttribute("Comms", "NFC"),
    sim = SearchAttribute("Body", "SIM"),
    mainCamera = findTitle("Main Camera"),
    network = findTitle("Network"),
    mainCameraFilter = findTitle("Main Camera");

  const phoneData = {
    sizeScreen,
    processorSpeed,
    processor,
    dimension,
    color,
    memoryExpand,
    sistemOperative,
    selfieCamera,
    battery,
    ram,
    nfc,
    sim,
    mainCamera,
    network,
    mainCameraFilter,
    options,
  };
  return (
    <div>
      {loading && <Loader></Loader>}
      <HeroImage
        urlValue={urlValue}
        options={{ brand: options.brand, name: options.phone_name }}
      ></HeroImage>
      <section className="main-content phone-detail-container margin-bottom-1">
        <article>
          <div className="img-section">
            <h3>Imagenes del {options.phone_name}</h3>
            <div className="img-container">
              {options.phone_images.map((el, index) => (
                <img key={index} src={el} alt={options.phone_name}></img>
              ))}
            </div>
          </div>
        </article>
        <p className="released">
          Fecha de lanzamiento: {options.release_date.replace("Released ", "")}
        </p>
        <div className="gsm-link margin-bottom-5">
          <p>{`¿Necesitas más información del ${options.phone_name}?`}</p>
          <a
            href={`https://www.gsmarena.com/${slug}.php`}
            target="_blank"
            rel="noreferrer"
          >
            Haz click aqui 👈
          </a>
        </div>
        <PhoneTable phoneData={phoneData}></PhoneTable>
      </section>
    </div>
  );
};

export default PhonesDetail;
