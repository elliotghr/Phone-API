import React from "react";

const TableRowSpecs = ({ specs }) => {
  const renderSpecs = Object.entries(specs).map(([key, value]) =>
    key && value ? (
      <tr key={key}>
        <td>
          <b>{key}</b>
        </td>
        <td>{value}</td>
      </tr>
    ) : null
  );

  return renderSpecs;
};

export default TableRowSpecs;
