import React from "react";

const PhonesCard = ({ el, handleViewSpecs }) => {
  const { brand, detail, image, phone_name, slug } = el;
  return (
    <div onClick={() => handleViewSpecs(detail)} className="phone-card">
      <img src={image} alt={phone_name}></img>
      <h5 className="margin-bottom-">{`${brand} ${phone_name}`}</h5>
    </div>
  );
};

export default PhonesCard;
