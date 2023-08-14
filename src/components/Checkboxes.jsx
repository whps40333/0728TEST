import React, { useState, useEffect, useCallback } from "react";

const districtsInTaipei = [
  "中正區",
  "大同區",
  "中山區",
  "松山區",
  "大安區",
  "萬華區",
  "信義區",
  "士林區",
  "北投區",
  "內湖區",
  "南港區",
  "文山區",
];

const Checkboxes = ({ onDistrictSelect }) => {
  const [checkboxes, setCheckboxes] = useState(
    new Array(districtsInTaipei.length).fill(false)
  );

  const onDistrictSelectCallback = useCallback(onDistrictSelect, []);

  useEffect(() => {
    const selectedDistricts = districtsInTaipei.filter(
      (district, i) => checkboxes[i]
    );
    onDistrictSelectCallback(selectedDistricts);
  }, [checkboxes, onDistrictSelectCallback]);

  const handleCheckboxChange = (index) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = [...prevCheckboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      return newCheckboxes;
    });
  };

  const handleSelectAll = () => {
    const newSelectAll = !checkboxes.every((checkbox) => checkbox);
    setCheckboxes(new Array(districtsInTaipei.length).fill(newSelectAll));
  };

  return (
    <div className="checkboxes">
      <h3>
        <label>
          <input
            type="checkbox"
            checked={checkboxes.every((checkbox) => checkbox)}
            onChange={handleSelectAll}
          />
          全選
        </label>
      </h3>
      {districtsInTaipei.map((district, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checkboxes[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          {district}
        </label>
      ))}
    </div>
  );
};

export default Checkboxes;
