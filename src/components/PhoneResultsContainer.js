import React from "react";
import PhonesResults from "./PhonesResults";
import NoPhonesResults from "./NoPhonesResults";

const PhoneResultsContainer = ({ search }) => {
  return search.length > 0 ? (
    <PhonesResults></PhonesResults>
  ) : (
    <NoPhonesResults></NoPhonesResults>
  );
};

export default PhoneResultsContainer;
