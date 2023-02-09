import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Message from "./Message";

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
    specs = data.data.specifications;
  let urlValue = `url('${options.phone_images[0]}')`;

  console.log(data);

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
  return (
    <div>
      {/* Hero image */}
      <section id="inicio" className="home margin-bottom-5">
        <article className="hero-image" style={{ backgroundImage: urlValue }}>
          <aside className="hero-image-opacity">
            <div className="hero-image-content">
              <h2 className="hero-image-title">
                {options.brand + " " + options.phone_name}
              </h2>
            </div>
          </aside>
        </article>
      </section>
      <section className="main-content phone-detail-container margin-bottom-1">
        {/* img container */}
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
        <div className="table-style" role="region" tabIndex="0">
          <table>
            <thead>
              <tr>
                <th colSpan="2">Odoo Atributos del producto</th>
              </tr>
              <tr>
                <th>Product Attributes/Attribute</th>
                <th>Atributos del producto / Valores</th>
              </tr>
            </thead>
            <tbody>
              {sizeScreen && (
                <tr>
                  <td>
                    <b>Tamaño de Pantalla</b>
                  </td>
                  <td>{sizeScreen.replace(/ inches.*/, '"')}</td>
                </tr>
              )}
              {mainCameraFilter && (
                <tr>
                  <td>
                    <b>Filtro Cámara Principal</b>
                  </td>
                  <td>
                    {mainCameraFilter.specs[0].key === "Quad"
                      ? "Cuatro Cámaras"
                      : mainCameraFilter.specs[0].key === "Triple"
                      ? "Tres Cámaras"
                      : mainCameraFilter.specs[0].key === "Dual"
                      ? "Dos Cámaras"
                      : mainCameraFilter.specs[0].key === "Single"
                      ? "Una Cámara"
                      : mainCameraFilter.specs[0].key}
                  </td>
                </tr>
              )}
              {mainCamera && (
                <tr>
                  <td>
                    <b>Cámara Principal</b>
                  </td>
                  <td>
                    {mainCamera.specs[0].val[0]
                      .match(/\d+\sMP/g)
                      .join("+")
                      .replace(/ /g, "")}
                  </td>
                </tr>
              )}
              {options.storage &&
              options.storage !== "No card slot" &&
              options.storage !== "microSDHC slot" ? (
                <tr>
                  <td>
                    <b>Almacenamiento interno</b>
                  </td>
                  <td>
                    {options.storage.match(/(\d+)\s*(TB|GB|MB|kB)/g).join(",")}
                  </td>
                </tr>
              ) : null}
              {processorSpeed && (
                <tr>
                  <td>
                    <b>Velocidad de Procesador</b>
                  </td>
                  <td>{/\d+(\.\d+)?\s*(GHz|MHz)/.exec(processorSpeed)[0]}</td>
                </tr>
              )}
              {processor && (
                <tr>
                  <td>
                    <b>Procesador</b>
                  </td>
                  <td>{processor.replace(/\(.*\)/, "")}</td>
                </tr>
              )}
              {dimension && (
                <tr>
                  <td>
                    <b>Medidas</b>
                  </td>
                  <td>{dimension.replace(/mm .*/, "mm")}</td>
                </tr>
              )}
              {color && (
                <tr>
                  <td>
                    <b>Color</b>
                  </td>
                  <td>
                    {color.replace(/, /g, ",").replace(/; other colors/, "")}
                  </td>
                </tr>
              )}
              {memoryExpand && (
                <tr>
                  <td>
                    <b>Slot de tarjeta microSD</b>
                  </td>
                  <td>
                    {memoryExpand !== "No"
                      ? "Sí admite microSD"
                      : "No admite microSD"}
                  </td>
                </tr>
              )}
              {/* Network */}
              <tr>
                <td>
                  <b>Red</b>
                </td>
                <td>
                  {network?.specs[network.specs.length - 2]
                    ? network.specs[network.specs.length - 2].key
                        .toString()
                        .replace(/ bands.*/, "")
                    : "Sin datos"}
                </td>
              </tr>
              {sistemOperative && (
                <tr>
                  <td>
                    <b>Sistema Operativo</b>
                  </td>
                  <td>{sistemOperative.replace(/, .*/, "")}</td>
                </tr>
              )}
              {selfieCamera && selfieCamera !== "VGA videocall camera" ? (
                <tr>
                  <td>
                    <b>Camara de selfie</b>
                  </td>
                  <td>
                    {/\d+(\.\d+)?\s*MP/
                      .exec(selfieCamera)[0]
                      .replace("MP", "Mpx")
                      .replace(" ", "")}
                  </td>
                </tr>
              ) : null}
              {battery && battery !== "Non-removable Li-Ion battery" ? (
                <tr>
                  <td>
                    <b>Batería</b>
                  </td>
                  <td>{battery.match(/\d+\smAh/)}</td>
                </tr>
              ) : null}
              {ram && (
                <tr>
                  <td>
                    <b>Memoria RAM</b>
                  </td>
                  <td>
                    {[...new Set(ram.match(/(\d+)\s*(GB|MB| kB)(\sRAM)/g))]
                      .join(",")
                      .replace(/\s*RAM/g, "")}
                  </td>
                </tr>
              )}
              {nfc && (
                <tr>
                  <td>
                    <b>NFC</b>
                  </td>
                  <td>
                    {nfc === "Yes" ? "Cuenta con NFC" : "No cuenta con NFC"}
                  </td>
                </tr>
              )}
              {sim && (
                <tr>
                  <td>
                    <b>SIM</b>
                  </td>
                  <td>{sim}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PhonesDetail;
