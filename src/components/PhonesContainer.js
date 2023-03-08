import React, { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";
import PhonesCard from "./PhonesCard";

const PhonesContainer = () => {
  const { dataPhones } = useContext(PhoneContext);

  if (!dataPhones) return;

  const {
    data: { phones, title },
  } = dataPhones;

  return (
    <article className="main-content margin-bottom-5">
      <h2 className="margin-bottom-2">{title}</h2>
      <div className="phone-container">
        {phones.length > 0 ? (
          phones.map((el, index) => (
            <PhonesCard key={index} el={el}></PhonesCard>
          ))
        ) : (
          <h4 className="sin-datos">Sin datos</h4>
        )}
      </div>
    </article>
  );
};

export default PhonesContainer;
