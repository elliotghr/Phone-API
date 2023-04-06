const useSpecifications = ({ specifications, storage }) => {
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
    "Tamaño de la pantalla": sizeScreen && sizeScreen.replace(/ inches.*/, '"'),
    "Velocidad de Procesador":
      processorSpeed && /\d+(\.\d+)?\s*(GHz|MHz)/.exec(processorSpeed)[0],
    Procesador: processor && processor.replace(/\(.*\)/, ""),
    Medidas: dimension && dimension.replace(/mm .*/, "mm"),
    Color: color && color.replace(/, /g, ",").replace(/; other colors/, ""),
    "Slot de tarjeta microSD":
      memoryExpand && memoryExpand !== "No"
        ? "Sí admite microSD"
        : "No admite microSD",
    "Sistema Operativo": sistemOperative && sistemOperative.replace(/, .*/, ""),
    "Cámara de selfie":
      selfieCamera &&
      selfieCamera !== "VGA videocall camera" &&
      selfieCamera !== "VGA"
        ? /\d+(\.\d+)?\s*MP/
            .exec(selfieCamera)[0]
            .replace("MP", "Mpx")
            .replace(" ", "")
        : selfieCamera,
    Batería:
      battery && battery !== "Non-removable Li-Ion battery"
        ? battery.match(/\d+\smAh/)[0]
        : null,
    "Memoria RAM":
      !ram || ram === ""
        ? [...new Set(ram.match(/(\d+)\s*(GB|MB| kB)(\sRAM)/g))]
            .join(",")
            .replace(/\s*RAM/g, "")
        : "Sin datos",
    NFC: nfc && nfc.includes("Yes") ? "Cuenta con NFC" : "No cuenta con NFC",
    SIM: sim,
    "Cámara Principal":
      mainCamera &&
      mainCamera.specs[0].val[0]
        .match(/\d+\sMP/g)
        .join("+")
        .replace(/ /g, ""),
    Red:
      network && network?.specs[network.specs.length - 2]
        ? network.specs[network.specs.length - 2].key
            .toString()
            .replace(/ bands.*/, "")
        : "Sin datos",
    "Filtro Cámara Principal":
      mainCameraFilter && mainCameraFilter.specs[0].key === "Quad"
        ? "Cuatro Cámaras"
        : mainCameraFilter.specs[0].key === "Triple"
        ? "Tres Cámaras"
        : mainCameraFilter.specs[0].key === "Dual"
        ? "Dos Cámaras"
        : mainCameraFilter.specs[0].key === "Single"
        ? "Una Cámara"
        : mainCameraFilter.specs[0].key,
    "Almacenamiento interno":
      storage && storage !== "No card slot" && storage !== "microSDHC slot"
        ? storage.match(/(\d+)\s*(TB|GB|MB|kB)/g).join(",")
        : null,
  };

  return { phoneData };
};

export default useSpecifications;
