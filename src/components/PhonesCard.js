import React from "react";

const PhonesCard = ({ el, handleViewSpecs }) => {
  const { brand, detail, image, phone_name, slug } = el;
  return (
    <div className="phone-card">
      <h5 className="margin-bottom-1">{`${brand} ${phone_name}`}</h5>
      <img src={image} alt={phone_name}></img>
      <button onClick={() => handleViewSpecs(detail)}>Ver</button>
      <p></p>
    </div>
  );
};

export default PhonesCard;
