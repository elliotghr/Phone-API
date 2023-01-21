const PhonesModeloOptions = ({ el }) => {
  const { brand, detail, image, phone_name, slug } = el;
  return <option value={slug}>{phone_name}</option>;
};

export default PhonesModeloOptions;
