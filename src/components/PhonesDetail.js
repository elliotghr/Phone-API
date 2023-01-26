import { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";

const PhonesDetail = () => {
  const { dataDetails: data } = useContext(PhoneContext);

  if (!data) return null;
  console.log(data);
  let options = data.data,
    specs = data.data.specifications;

  let urlValue = `url('${options.phone_images[0]}')`;

  const find = (query) => specs.find((el) => el.title === query);

  let network = find("Network"),
    body = find("Body"),
    mainCameraFilter = find("Main Camera"),
    mainCamera = find("Main Camera"),
    processorSpeed = find("Platform"),
    processor = find("Platform"),
    medidas = find("Body"),
    color = find("Misc"),
    memoryExpand = find("Memory"),
    sistemOperative = find("Platform"),
    selfieCamera = find("Selfie camera"),
    battery = find("Battery"),
    ram = find("Memory");
  console.log(processorSpeed);
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
                <th>Atributo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Tamaño de Pantalla</b>
                </td>
                <td>{body.specs[0] ? body.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>
                  <b>Filtro Cámara Principal</b>
                </td>
                <td>
                  {mainCameraFilter
                    ? mainCameraFilter.specs[0].key
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Cámara Principal</b>
                </td>
                <td>{mainCamera ? mainCamera.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>
                  <b>Almacenamiento interno</b>
                </td>
                <td>{options.storage ? options.storage : "Sin datos"}</td>
              </tr>
              <tr>
                <td>
                  <b>Velocidad de Procesador</b>
                </td>
                <td>
                  {processorSpeed.specs[2]
                    ? processorSpeed.specs[2].val[0]
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Procesador</b>
                </td>
                <td>
                  {processor.specs[1] ? processor.specs[1].val[0] : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Medidas</b>
                </td>
                <td>{medidas ? medidas.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>
                  <b>Color</b>
                </td>
                <td>{color ? color.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>
                  <b>Contenido de la Caja</b>
                </td>
                <td>Cable de datos, manual de usuario</td>
              </tr>
              <tr>
                <td>
                  <b>Memoria expandible</b>
                </td>
                <td>
                  {memoryExpand ? memoryExpand.specs[0].val[0] : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Red</b>
                </td>
                <td>
                  {network.specs[network.specs.length - 2]
                    ? network.specs[network.specs.length - 2].key.toString()
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Sistema Operativo</b>
                </td>
                <td>
                  {sistemOperative
                    ? sistemOperative.specs[0].val[0]
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Camara de selfie</b>
                </td>
                <td>
                  {selfieCamera ? selfieCamera.specs[0].val[0] : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Batería</b>
                </td>
                <td>{battery ? battery.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>
                  <b>Memoria RAM</b>
                </td>
                <td>{ram.specs[1] ? ram.specs[1].val[0] : "Sin datos"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PhonesDetail;
