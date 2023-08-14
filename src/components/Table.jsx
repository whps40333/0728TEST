import React from "react";

const Table = ({ data }) => {
  const columns = ["區域", "站點名稱", "可借車輛", "可還空位"];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.area}</td>
            <td>{row.station}</td>
            <td>{row.bikesAvailable}</td>
            <td>{row.emptySlots}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
