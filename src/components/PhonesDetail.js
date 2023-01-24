const PhonesDetail = ({ data }) => {
  if (!data) return null;

  let options = data.data,
    specs = data.data.specifications;
    
  let urlValue = `url('${options.phone_images[0]}')`;

  const find = (query) => {
    return specs.find((el) => el.title === query);
  };

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
  return (
    <>
      <section id="inicio" class="home margin-bottom-5">
        <article class="hero-image" style={{ backgroundImage: urlValue }}>
          <aside class="hero-image-opacity">
            <div class="hero-image-content">
              <h2 class="hero-image-title">{options.phone_name}</h2>
            </div>
          </aside>
        </article>
      </section>
      <section className="phone-detail-container margin-bottom-1">
        <article>
          <div className="img-section">
            <h3>Imagenes del {options.phone_name}</h3>
            <div className="img-container">
              {options.phone_images.map((el) => (
                <img src={el} alt={options.phone_name}></img>
              ))}
            </div>
          </div>
        </article>
        <p>Fecha de lanzamiento: {options.release_date}</p>
        <div className="table-style" role="region" tabindex="0">
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
                <td>Tamaño de Pantalla</td>
                <td>{body ? body.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Filtro Cámara Principal</td>
                <td>
                  {mainCameraFilter
                    ? mainCameraFilter.specs[0].key
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>Cámara Principal</td>
                <td>{mainCamera ? mainCamera.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Almacenamiento interno</td>
                <td>{options.storage ? options.storage : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Velocidad de Procesador</td>
                <td>
                  {processorSpeed
                    ? processorSpeed.specs[2].val[0]
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>Procesador</td>
                <td>{processor ? processor.specs[1].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Medidas</td>
                <td>{medidas ? medidas.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{color ? color.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Contenido de la Caja</td>
                <td>Cable de datos, manual de usuario</td>
              </tr>
              <tr>
                <td>Memoria expandible</td>
                <td>
                  {memoryExpand ? memoryExpand.specs[0].val[0] : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>Red</td>
                <td>
                  {network
                    ? network.specs[network.specs.length - 2].key.toString()
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>Sistema Operativo</td>
                <td>
                  {sistemOperative
                    ? sistemOperative.specs[0].val[0]
                    : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>Camara de selfie</td>
                <td>
                  {selfieCamera ? selfieCamera.specs[0].val[0] : "Sin datos"}
                </td>
              </tr>
              <tr>
                <td>Batería</td>
                <td>{battery ? battery.specs[0].val[0] : "Sin datos"}</td>
              </tr>
              <tr>
                <td>Memoria RAM</td>
                <td>{ram ? ram.specs[1].val[0] : "Sin datos"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PhonesDetail;
