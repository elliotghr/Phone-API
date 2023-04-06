import React, { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";
import PhonesCard from "./PhonesCard";
import "./PhoneResults.css";

const PhonesResults = () => {
  const { search } = useContext(PhoneContext);

  return (
    <article className="phone-results">
      <div className="phone-results-container">
        {search.map((el, index) => (
          <PhonesCard key={index} el={el}></PhonesCard>
        ))}
      </div>
    </article>
  );
};

export default PhonesResults;
