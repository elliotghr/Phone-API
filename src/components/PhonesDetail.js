import { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";

const PhonesDetail = () => {
  const { dataDetails: data } = useContext(PhoneContext);

  if (!data) return null;
  console.log(data);

  let options = data.data,
    specs = data.data.specifications;

  let urlValue = `url('${options.phone_images[0]}')`;

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
    mainCamera = findTitle("Main Camera"),
    network = findTitle("Network"),
    mainCameraFilter = findTitle("Main Camera");

  return (
    <>
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
        <p>Fecha de lanzamiento: {options.release_date}</p>
        <div className="table-style" role="region" tabIndex="0">
          <table>
            <thead>
              <tr>
                <th colSpan="2">Odoo Attributes</th>
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
                  <td>{sizeScreen.replace(/ inches, .*/, '"')}</td>
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
                  <td>{mainCamera.specs[0].val[0].match(/\d+\sMP/g).join("+")}</td>
                </tr>
              )}
              {/* {options.storage && (
                <tr>
                  <td>
                    <b>Almacenamiento interno</b>
                  </td>
                  <td>{options.storage}</td>
                </tr>
              )} */}
              {processorSpeed && (
                <tr>
                  <td>
                    <b>Velocidad de Procesador</b>
                  </td>
                  <td>{processorSpeed}</td>
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
                  <td>{dimension.replace(/\(.*\)/, "")}</td>
                </tr>
              )}
              {color && (
                <tr>
                  <td>
                    <b>Color</b>
                  </td>
                  <td>{color.replace(/, /g, ",")}</td>
                </tr>
              )}
              {memoryExpand && (
                <tr>
                  <td>
                    <b>Slot de tarjeta microSD</b>
                  </td>
                  <td>
                    {memoryExpand !== "NO"
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
              {selfieCamera && (
                <tr>
                  <td>
                    <b>Camara de selfie</b>
                  </td>
                  <td>{selfieCamera.replace(/MP, .*/, "Mpx")}</td>
                </tr>
              )}
              {battery && (
                <tr>
                  <td>
                    <b>Batería</b>
                  </td>
                  <td>{battery.match(/\d+\smAh/)}</td>
                </tr>
              )}
              {ram && (
                <tr>
                  <td>
                    <b>Memoria RAM</b>
                  </td>
                  {/* <td>{ram}</td> */}
                  <td>{[...new Set(ram.match(/\dGB+\sRAM/g))].join(",")}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PhonesDetail;
