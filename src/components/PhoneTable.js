import React from "react";

const PhoneTable = ({ specifications, storage }) => {
  const findTitle = (query) => specifications.find((el) => el.title === query);

  const searchAttribute = (spec, value) => {
    let specValidation = specifications
      .find((el) => el.title === spec)
      ?.specs.find((el) => el.key === value);
    return specValidation?.val[0];
  };

  let sizeScreen = searchAttribute("Display", "Size"),
    processorSpeed = searchAttribute("Platform", "CPU"),
    processor = searchAttribute("Platform", "Chipset"),
    dimension = searchAttribute("Body", "Dimensions"),
    color = searchAttribute("Misc", "Colors"),
    memoryExpand = searchAttribute("Memory", "Card slot"),
    sistemOperative = searchAttribute("Platform", "OS"),
    selfieCamera = searchAttribute("Selfie camera", "Single"),
    battery = searchAttribute("Battery", "Type"),
    ram = searchAttribute("Memory", "Internal"),
    nfc = searchAttribute("Comms", "NFC"),
    sim = searchAttribute("Body", "SIM"),
    mainCamera = findTitle("Main Camera"),
    network = findTitle("Network"),
    mainCameraFilter = findTitle("Main Camera");

  const phoneData = {
    sizeScreen: sizeScreen && sizeScreen.replace(/ inches.*/, '"'),
    processorSpeed:
      processorSpeed && /\d+(\.\d+)?\s*(GHz|MHz)/.exec(processorSpeed)[0],
    processor: processor.replace(/\(.*\)/, ""),
    dimension: dimension && dimension.replace(/mm .*/, "mm"),
    color: color && color.replace(/, /g, ",").replace(/; other colors/, ""),
    memoryExpand:
      memoryExpand && memoryExpand !== "No"
        ? "Sí admite microSD"
        : "No admite microSD",
    sistemOperative: sistemOperative && sistemOperative.replace(/, .*/, ""),
    selfieCamera:
      selfieCamera && selfieCamera !== "VGA videocall camera"
        ? /\d+(\.\d+)?\s*MP/
            .exec(selfieCamera)[0]
            .replace("MP", "Mpx")
            .replace(" ", "")
        : null,
    battery:
      battery && battery !== "Non-removable Li-Ion battery"
        ? battery.match(/\d+\smAh/)
        : null,
    ram:
      ram &&
      [...new Set(ram.match(/(\d+)\s*(GB|MB| kB)(\sRAM)/g))]
        .join(",")
        .replace(/\s*RAM/g, ""),
    nfc: nfc.includes("Yes") ? "Cuenta con NFC" : "No cuenta con NFC",
    sim,
    mainCamera:
      mainCamera &&
      mainCamera.specs[0].val[0]
        .match(/\d+\sMP/g)
        .join("+")
        .replace(/ /g, ""),
    network:
      network && network?.specs[network.specs.length - 2]
        ? network.specs[network.specs.length - 2].key
            .toString()
            .replace(/ bands.*/, "")
        : "Sin datos",
    mainCameraFilter:
      mainCameraFilter && mainCameraFilter.specs[0].key === "Quad"
        ? "Cuatro Cámaras"
        : mainCameraFilter.specs[0].key === "Triple"
        ? "Tres Cámaras"
        : mainCameraFilter.specs[0].key === "Dual"
        ? "Dos Cámaras"
        : mainCameraFilter.specs[0].key === "Single"
        ? "Una Cámara"
        : mainCameraFilter.specs[0].key,
    storage:
      storage && storage !== "No card slot" && storage !== "microSDHC slot"
        ? storage.match(/(\d+)\s*(TB|GB|MB|kB)/g).join(",")
        : null,
  };
  return (
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
          {phoneData.sizeScreen && (
            <tr>
              <td>
                <b>Tamaño de Pantalla</b>
              </td>
              <td>{phoneData.sizeScreen}</td>
            </tr>
          )}
          {phoneData.mainCameraFilter && (
            <tr>
              <td>
                <b>Filtro Cámara Principal</b>
              </td>
              <td>{phoneData.mainCameraFilter}</td>
            </tr>
          )}
          {phoneData.mainCamera && (
            <tr>
              <td>
                <b>Cámara Principal</b>
              </td>
              <td>{phoneData.mainCamera}</td>
            </tr>
          )}
          {phoneData.storage && (
            <tr>
              <td>
                <b>Almacenamiento interno</b>
              </td>
              <td>{phoneData.storage}</td>
            </tr>
          )}
          {phoneData.processorSpeed && (
            <tr>
              <td>
                <b>Velocidad de Procesador</b>
              </td>
              <td>{phoneData.processorSpeed}</td>
            </tr>
          )}
          {phoneData.processor && (
            <tr>
              <td>
                <b>Procesador</b>
              </td>
              <td>{phoneData.processor}</td>
            </tr>
          )}
          {phoneData.dimension && (
            <tr>
              <td>
                <b>Medidas</b>
              </td>
              <td>{phoneData.dimension.replace(/mm .*/, "mm")}</td>
            </tr>
          )}
          {phoneData.color && (
            <tr>
              <td>
                <b>Color</b>
              </td>
              <td>{phoneData.color}</td>
            </tr>
          )}
          {phoneData.memoryExpand && (
            <tr>
              <td>
                <b>Slot de tarjeta microSD</b>
              </td>
              <td>{phoneData.memoryExpand}</td>
            </tr>
          )}
          {/* Network */}
          <tr>
            <td>
              <b>Red</b>
            </td>
            <td>{phoneData.network}</td>
          </tr>
          {phoneData.sistemOperative && (
            <tr>
              <td>
                <b>Sistema Operativo</b>
              </td>
              <td>{phoneData.sistemOperative}</td>
            </tr>
          )}
          {phoneData.selfieCamera && (
            <tr>
              <td>
                <b>Camara de selfie</b>
              </td>
              <td>{phoneData.selfieCamera}</td>
            </tr>
          )}
          {phoneData.battery ? (
            <tr>
              <td>
                <b>Batería</b>
              </td>
              <td>{phoneData.battery}</td>
            </tr>
          ) : null}
          {phoneData.ram && (
            <tr>
              <td>
                <b>Memoria RAM</b>
              </td>
              <td>{phoneData.ram}</td>
            </tr>
          )}
          {phoneData.nfc && (
            <tr>
              <td>
                <b>NFC</b>
              </td>
              <td>{phoneData.nfc}</td>
            </tr>
          )}
          {phoneData.sim && (
            <tr>
              <td>
                <b>SIM</b>
              </td>
              <td>{phoneData.sim}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PhoneTable;
