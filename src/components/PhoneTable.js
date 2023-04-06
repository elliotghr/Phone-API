import React from "react";
import useSpecifications from "../hooks/useSpecifications";
import TableRowSpecs from "./TableRowSpecs";
import "./PhoneTable.css";

const PhoneTable = ({ specifications, storage }) => {
  const { phoneData } = useSpecifications({ specifications, storage });
  return (
    <div className="table-style" tabIndex="0">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Odoo Atributos</th>
          </tr>
          <tr>
            <th>Atributo</th>
            <th>Valores</th>
          </tr>
        </thead>
        <tbody>
          <TableRowSpecs specs={phoneData}></TableRowSpecs>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneTable;
