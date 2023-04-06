import React from "react";

const HomeTitle = ({ lsKeyword }) => {
  return lsKeyword ? (
    <h2 className="margin-bottom-1">Última busqueda: {lsKeyword}</h2>
  ) : (
    <h2 className="margin-bottom-1">¡Bienvenido a Phone API!</h2>
  );
};

export default HomeTitle;
