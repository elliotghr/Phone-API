import React from "react";
import { useHistory } from "react-router-dom";

const PhonesCard = ({ el }) => {
  const { brand, image, phone_name, slug } = el;
  let history = useHistory();

  return (
    <div onClick={() => history.push(`/${slug}`)} className="phone-card">
      <img src={image} alt={phone_name} className="margin-bottom-1"></img>
      <h5 className="card-text">{`${brand} ${phone_name}`}</h5>
    </div>
  );
};

export default PhonesCard;
