const PhonesMarcaOptions = ({ el }) => {
  const { brand_id, brand_name, brand_slug, detail, device_count } = el;
  return <option value={brand_slug}>{brand_name}</option>;
};

export default PhonesMarcaOptions;
