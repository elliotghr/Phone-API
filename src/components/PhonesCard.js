import React from "react";
import { useHistory } from "react-router-dom";
import "./PhonesCard.css";

const PhonesCard = ({ el: { brand, image, phone_name, slug } }) => {
  let history = useHistory();

  const viewPhone = () => history.push(`/phone/${slug}`);

  return (
    <div onClick={viewPhone} className="phone-card">
      <img src={image} alt={phone_name} className="margin-bottom-1"></img>
      <h5>{`${brand} ${phone_name}`}</h5>
    </div>
  );
};

export default PhonesCard;
