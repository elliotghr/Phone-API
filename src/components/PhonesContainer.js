import React from "react";
import PhonesCard from "./PhonesCard";

const PhonesContainer = ({ data, handleViewSpecs }) => {
  if (!data) return;

  let phoneData = data.data;
  const { phones, title } = phoneData;
  return (
    <article className="margin-bottom-1">
      <h2 className="margin-bottom-1">{title}</h2>
      <div className="phone-container">
        {phones.length > 0 ? (
          phones.map((el, index) => (
            <PhonesCard
              key={index}
              el={el}
              handleViewSpecs={handleViewSpecs}
            ></PhonesCard>
          ))
        ) : (
          <h4 className="sin-datos">Sin datos</h4>
        )}
      </div>
    </article>
  );
};

export default PhonesContainer;
