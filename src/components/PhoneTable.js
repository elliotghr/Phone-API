import React from "react";

const PhoneTable = ({ phoneData }) => {
    
  const {
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
  } = phoneData;

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
              <td>{color.replace(/, /g, ",").replace(/; other colors/, "")}</td>
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
              <td>{nfc === "Yes" ? "Cuenta con NFC" : "No cuenta con NFC"}</td>
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
  );
};

export default PhoneTable;
